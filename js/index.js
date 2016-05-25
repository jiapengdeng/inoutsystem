;$(function(){
    var slideout = new Slideout({
        'panel': document.getElementById('mainPage'),
        'menu': document.getElementById('menu'),
        'padding': 200,
        'tolerance': 70
    });
    slideout.on("open",function(){
        
    });
    slideout.on("close",function(){

    });
    var inputDialog = $.dialog({
        autoOpen: false,  
        closeBtn: true, 
        buttons: {
            /*'取消': function(){
                this.close();
            },*/
            '确定': function(){
                this.close();
            }  
        },
        title: '表单提交提示', 
        content:"" 
    });
    /*登记入库*/
    var main1 = {
        init: function() {
            //绑定事件
            //手机站绑定事件
            if($.browser.mobile){
                this.eventBind();
            }
        },
        eventBind:function() {
            $(".block1 .input0").on("click",function(){
                if(!this.hasClass("categoryActive")){
                    categoryPage.clear();
                }
                $(".categoryActive").removeClass("categoryActive");
                page.open('category');
                $(this).addClass("categoryActive");
            });
            $(".block1 .input1").on("click",function(){
                $(".storecreateActive").removeClass("storecreateActive");
                page.open('storecreate');
                $(this).addClass("storecreateActive");
            });
            $(".block1 .input2").on("click",function(){
                $(".supercreateActive").removeClass("supercreateActive");
                page.open('supercreate');
                $(this).addClass("supercreateActive");
            });
            $(".block1 .input3").on("click",function(){
                $(".amountpriceActive").removeClass("amountpriceActive");
                page.open('amountprice');
                $(this).addClass("amountpriceActive");
            });
            $(".block1 .input4").on("click",function(){
                $(".goodscreateActive").removeClass("goodscreateActive");
                page.open("goodscreate");
                $(this).addClass("goodscreateActive");
            });
            $(".block1 .input5").on("click",function(){
                $(".levelcreateActive").removeClass("levelcreateActive");
                page.open("levelcreate");
                $(this).addClass("levelcreateActive");
            });
            $(".top_title i").on("click",function(){
                window.history.back();
            });

            /*提交入库信息*/
            $(".js-block.block1 .js-submit-btn").on("click", function() {
                var goodType = $(".js-block.block1 .input0").data("value"); //货品品类
                var goodStore = $(".js-block.block1 .input1").data("value"); //货品仓库
                var supplier = $(".js-block.block1 .input2").data("value"); //供应商
                var unitPrice = $(".js-block.block1 .input3").data("price"); //单价
                var totalPrcie = $(".js-block.block1 .input3").data("allprice"); //总价
                var unit = $(".js-block.block1 .input3").data("unit"); //单位、
                var count = $(".js-block.block1 .input3").data("count");
                var goodName = $(".js-block.block1 .input4").data("value");
                var goodLevel = $(".js-block.block1 .input5").data("value");
                var remark = $(".js-block.block1 .input6 input").val();

                /*验证输入（先暴力验证吧~，万一数据格式改变也好改）*/
                if(!goodType){
                    inputDialog.content("你没有正确选择货品品类信息，请确认选择后再提交！");
                    inputDialog.open();
                    return;
                }
                if(!goodStore){
                    inputDialog.content("你没有正确选择仓库信息，请确认选择后再提交！");
                    inputDialog.open();
                    return;
                }
                if(!supplier){
                    inputDialog.content("你没有正确选择供应商信息，请确认选择后再提交！");
                    inputDialog.open();
                    return;
                }
                if(!unitPrice){
                    inputDialog.content("亲，请确认量价选项里的单价已经填写（如果总价和数量已填写，单价是自动生成的~）");
                    inputDialog.open();
                    return;
                }
                if(!totalPrcie){
                    inputDialog.content("亲，请确认量价选项里的总价已经填写（如果单价和数量已填写，总价是自动生成的~）");
                    inputDialog.open();
                    return;
                }
                if(!unit){
                    inputDialog.content("亲，请确认量价选项里的货品度量单位已填写（计算单价和总价是需要明确货品的度量单位）");
                    inputDialog.open();
                    return;
                }
                if(!count){
                    inputDialog.content("亲，请确认量价选项里的货品数量已填写（计算单价和总价是需要明确货品的数量）");
                    inputDialog.open();
                    return;
                }
                if(!goodName){
                    inputDialog.content("亲，货品名称是必须选择的，请确认后再提交~");
                    inputDialog.open();
                    return;
                }
                if(!goodLevel){
                    inputDialog.content("亲，货品等级是必须选择的，请确认后再提交~");
                    inputDialog.open();
                    return;
                }

                $.ajax({
                    url: ajaxSet.input_main1_save.url,
                    type: ajaxSet.input_main1_save.type,
                    dataType: ajaxSet.input_main1_save.dataType,
                    data: {
                        goodType: goodType,
                        goodStore: goodStore,
                        supplier: supplier,
                        unitPrice: unitPrice,
                        totalPrcie: totalPrcie,
                        unit: unit,
                        count: count,
                        goodName: goodName,
                        goodLevel: goodLevel,
                        remark: remark
                    },
                    success:function(data) {
                        if(data.Issuccess){
                            inputDialog.content("你所提交的表单已经保存成功~");
                        }else{
                            inputDialog.content(data.Message);
                        }
                    }
                })
            })
        }
    }

    /*登记移库*/
    var main2 = {
        init: function() {
            this.eventInit();
        },
        eventInit: function() {
            $(".js-block.block2 .js-submit-btn").on("click", function() {
                var dataOptions = {
                    outStore: $(".js-block.block2 .input0 select").val(),
                    chooseGoods: $(".js-block.block2 .input1 select").val(),
                    uint: $(".js-block.block2 .input5 select").val(),
                    count: $(".js-block.block2 .input2 input").val(),
                    inStore: $(".js-block.block2 .input4 select").val(),
                    remark: $(".js-block.block2 .input6 input").val()
                }
                
                if(dataOptions.outStore == "choose"){
                    inputDialog.content("你没有正确选择出库信息，请确认选择后再提交！");
                    inputDialog.open();
                    return;
                }
                if(dataOptions.chooseGoods == "choose"){
                    inputDialog.content("你没有正确选择货品信息，请确认选择后再提交！");
                    inputDialog.open();
                    return;
                }
                if(dataOptions.uint == "choose"){
                    inputDialog.content("货品的度量单位必需选择，请确认选择后再提交！");
                    inputDialog.open();
                    return;
                }
                if(dataOptions.count == ""){
                    inputDialog.content("货品的出库数量必需填写，请确认选择后再提交！");
                    inputDialog.open();
                    return;
                }
                if(dataOptions.count == "choose"){
                    inputDialog.content("货品的入库信息必需确定，请确认选择后再提交！");
                    inputDialog.open();
                    return;
                }
                $.ajax({
                    url: ajaxSet.input_main1_save.url,
                    type: ajaxSet.input_main1_save.type,
                    dataType: ajaxSet.input_main1_save.dataType,
                    data: dataOptions,
                    success:function(data) {
                        if(data.Issuccess){
                            inputDialog.content("你所提交的表单已经保存成功~");
                        }else{
                            inputDialog.content(data.Message);
                        }
                    }
                })
            })
        }
    }g
    
    var main3 = {
        init: function() {
            this.eventInit();
        },
        eventInit: function(){
            $("#new3_1Page .input0").on("click",function(){
                $(".accesscreateActive").removeClass("accesscreateActive");
                page.open('accesscreate');
                $(this).addClass("accesscreateActive");
            })
        }
    }
    var main4 = {
        init: function() {
            this.eventInit();
        },
        eventInit: function(){
            $("#new4_1Page .input0").on("click",function(){
                $(".goodsallActive").removeClass("goodallActive");
                page.open('goodsall');
                $(this).addClass("goodsallActive");
            })
        }
    }
    var mian10 = {
        init: function() {
            var that = this;
            /*slideout.disableTouch()*/
            require.config({
                paths: {
                    "echart": "../lib/echarts.min"
                }
            });
            
            require(['echart'],function(echarts) {
                that.echartSaleObj = echarts.init(document.getElementById("echartSaleMain"));
                that.echartSaleObj.showLoading();
                /*获取异步数据 -日期及总价，日期及销量*/
                $.ajax({
                    url: ajaxSet.chartSale.url,
                    type: ajaxSet.chartSale.type,
                    dataType: ajaxSet.chartSale.dataType,
                    data: {
                        name: "",
                    },
                    success: function(data) {
                        if(!data){
                            return;
                        }
                        console.log("cuccess")
                        var option = {
                            title : {
                                text: '销售统计图',
                                subtext: '数据来源于经销进出管理系统',
                                x: 'center',
                                align: 'right'
                            },
                            grid: {
                                bottom: 80
                            },
                            tooltip : {
                                trigger: 'axis',
                                axisPointer: {
                                    animation: false
                                }
                            },
                            legend: {
                                data:['销售总额','销售数量'],
                                x: 'left'
                            },
                            dataZoom: [
                                {
                                    show: true,
                                    realtime: true,
                                    start: 0,
                                    end: 100
                                },
                                {
                                    type: 'inside',
                                    realtime: true,
                                    start: 0,
                                    end: 100
                                }
                            ],
                            xAxis : [
                                {
                                    type : 'category',
                                    boundaryGap : false,
                                    axisLine: {onZero: false},
                                    data : data.dateTime.map(function (str) {
                                        return str.replace(' ', '\n')
                                    })
                                }
                            ],
                            yAxis: [
                                {
                                    name: '销售总额(元)',
                                    type: 'value',
                                    max: 5000
                                },
                                {
                                    name: '销售数量(件)',
                                    nameLocation: 'start',
                                    max: 5000,
                                    type: 'value',
                                    inverse: true
                                }
                            ],
                            series: [
                                {
                                    name:'销售总额',
                                    type:'line',
                                    hoverAnimation: false,
                                    /*areaStyle: {
                                        normal: {}
                                    },*/
                                    lineStyle: {
                                        normal: {
                                            width: 1
                                        }
                                    },
                                    data:data.allPrice
                                },
                                {
                                    name:'销售数量',
                                    type:'line',
                                    yAxisIndex:1,
                                    hoverAnimation: false,
                                    /*areaStyle: {
                                        normal: {}
                                    },*/
                                    lineStyle: {
                                        normal: {
                                            width: 1
                                        }
                                    },
                                    data: data.saleCount
                                }
                            ]
                        };
                        
                        
                        that.echartSaleObj.setOption(option);
                        that.echartSaleObj.hideLoading();
                    },
                    error: function(err){
                        console.log("获取数据失败", err);
                    }
                })

            })
        },
        echartSaleObj: null
    }
    var mian15 = {
        init: function() {
            var that = this;
            /*slideout.disableTouch()*/
            require.config({
                paths: {
                    "echart": "../lib/echarts.min"
                }
            });
            
            require(['echart'],function(echarts) {
                that.echartSaleObj = echarts.init(document.getElementById("echartSaleMain"));
                that.echartSaleObj.showLoading();
                /*获取异步数据 -日期及总价，日期及销量*/
                $.ajax({
                    url: ajaxSet.chartSale.url,
                    type: ajaxSet.chartSale.type,
                    dataType: ajaxSet.chartSale.dataType,
                    data: {
                        name: "",
                    },
                    success: function(data) {
                        if(!data){
                            return;
                        }
                        console.log("cuccess")
                        var option = {
                            title : {
                                text: '销售统计图',
                                subtext: '数据来源于经销进出管理系统',
                                x: 'center',
                                align: 'right'
                            },
                            grid: {
                                bottom: 80
                            },
                            tooltip : {
                                trigger: 'axis',
                                axisPointer: {
                                    animation: false
                                }
                            },
                            legend: {
                                data:['销售总额','销售数量'],
                                x: 'left'
                            },
                            dataZoom: [
                                {
                                    show: true,
                                    realtime: true,
                                    start: 0,
                                    end: 100
                                },
                                {
                                    type: 'inside',
                                    realtime: true,
                                    start: 0,
                                    end: 100
                                }
                            ],
                            xAxis : [
                                {
                                    type : 'category',
                                    boundaryGap : false,
                                    axisLine: {onZero: false},
                                    data : data.dateTime.map(function (str) {
                                        return str.replace(' ', '\n')
                                    })
                                }
                            ],
                            yAxis: [
                                {
                                    name: '销售总额(元)',
                                    type: 'value',
                                    max: 5000
                                },
                                {
                                    name: '销售数量(件)',
                                    nameLocation: 'start',
                                    max: 5000,
                                    type: 'value',
                                    inverse: true
                                }
                            ],
                            series: [
                                {
                                    name:'销售总额',
                                    type:'line',
                                    hoverAnimation: false,
                                    /*areaStyle: {
                                        normal: {}
                                    },*/
                                    lineStyle: {
                                        normal: {
                                            width: 1
                                        }
                                    },
                                    data:data.allPrice
                                },
                                {
                                    name:'销售数量',
                                    type:'line',
                                    yAxisIndex:1,
                                    hoverAnimation: false,
                                    /*areaStyle: {
                                        normal: {}
                                    },*/
                                    lineStyle: {
                                        normal: {
                                            width: 1
                                        }
                                    },
                                    data: data.saleCount
                                }
                            ]
                        };
                        
                        
                        that.echartSaleObj.setOption(option);
                        that.echartSaleObj.hideLoading();
                    },
                    error: function(err){
                        console.log("获取数据失败", err);
                    }
                })

            })
        },
        echartSaleObj: null
    }
    var sideList = {
        init: function() {
            $(document).on('click', '[href="#"]', function(e) { e.preventDefault(); });
            this.rippleInit();
            this.sideListBar();
            this.sideLinkInit();
        },
        rippleInit: function() {
            window.rippler = $.ripple('.js-ripple-btn', {
                multi: true
            });
        },
        sideListBar: function() {
            var that = this;
            var wrapper = ".side-nav-wrapper";

            $("dt",wrapper).each(function(index){
                var _this = this;
                var tempParent = $(this).next();
                var tempDom = tempParent.children("dd");
                if($(this).hasClass("open")){
                    var ddHeight = tempDom.height();
                    tempParent.css({display:"block"});
                }else{
                    tempParent.css({display:"none"});
                    tempDom.css({
                        marginTop: -ddHeight+"px" 
                    });
                    $(_this).removeClass("open");
                }
            });
            $("dt",wrapper).on("click",function(){
                var _this = this;
                var tempParent = $(this).next();
                var tempDom = tempParent.children("dd");
                var len = tempDom.find("a").length;
                var duration = len * 50;
                if($(this).hasClass("open")){
                    var ddHeight = tempDom.height();
                    tempDom.animate({duration:duration,marginTop: -ddHeight+"px"},function(){
                        tempParent.css({display:"none"});
                        $(_this).removeClass("open");
                    });
                }else{
                    tempParent.css({display:"block"});
                    var ddHeight = tempDom.css({
                        display: "block"
                    }).height();
                    tempDom.css({
                        marginTop: -ddHeight+"px" 
                    });
                    tempDom.animate({duration:duration,marginTop: 0});
                    $(_this).addClass("open");
                }
                /*setTimeout(function(){
                    tempDom.css({
                        marginTop: 0 
                    });
                },100);*/
            });
            $(".js-slideout-toggle").on("click", function(){
                slideout.toggle();
            }); 
        },
        sideLinkInit:function() {
            var that = this;
            $(".js-main-list").each(function(index)  {
                $(this).on("click", function() {
                    var rel = $(this).data("rel");
                    $(".js-block[data-rel='"+rel+"']").addClass("active").siblings(".js-block").removeClass("active");
                    $(".js-level-subitle").html($(this).text().trim());
                    /*slideout 的抬起事件会被阻隔，目前先做延迟处理*/
                    setTimeout(function(){
                        slideout.close();
                    },400);
                })
            })
        }
    }
    var categoryPage = {
        init: function() {
            /*
                当页面加载完成之后获取货品品类的异步。尽量不要影响首屏加载
             */
            
            var that = this;
            
            setTimeout(function() {
                var options = {

                }
                that.getCategorySource(options);
            },200);
        },
        clear: function() {
            $("#categoryPage")
        }
        categorySourceCache: null,
        getCategorySource: function(opions) {
            var that = this;
            $.ajax({
                url: ajaxSet.getCategory.url,
                type: ajaxSet.getCategory.type,
                dataType: ajaxSet.getCategory.dataType,
                data: opions,
                success: function(data) {
                    if(!data || !data.length){
                        //数据格式不对
                        return;
                    }
                    that.categorySourceCache = data;
                    var leftHtml = '';
                    for(var i = 0; i < data.length; i++){
                        var childDataString = JSON.stringify(data[i].children);
                        if(i === 0){
                            leftHtml += '<li  class="active" data-id="'+data[i].pId+'" data-index="'+i+'"><span>'+data[i].pName+'</span></li>';
                            getRightHtml(data[i].children,i);
                        }else{
                            leftHtml += '<li  data-id="'+data[i].pId+'" data-index="'+i+'"><span>'+data[i].pName+'</span></li>';
                        }
                        $("#l-wrapper ul").html(leftHtml);

                    }
                    function getRightHtml(childrenData,index) {
                        var rightHtml = '';
                        for(var j = 0; j < childrenData.length; j++){
                            rightHtml += '<li data-id="'+childrenData[j].cId+'" data-pindex="'+index+'"><span>'+childrenData[j].cName+'</span></li>'
                        }
                        $("#r-wrapper ul").html(rightHtml);
                        //添加事件
                        $("#r-wrapper ul li").on("click",function(){
                            var pIndex = parseInt($(this).data("pindex"));
                            $(this).addClass("select").siblings("li").removeClass("select");
                            var $pDom = $("#l-wrapper ul li[data-index='"+pIndex+"']");
                            $pDom.addClass("select").siblings("li").removeClass("select");
                            var pValueId = $("#l-wrapper ul li.select").data("id");
                            var pValueName = $("#l-wrapper ul li.select span").text().trim();
                            var cValueId = $("#r-wrapper ul li.select").data("id");
                            var cValueName = $("#r-wrapper ul li.select span").text().trim();
                            var nameHtml = '<strong>' + pValueName + '</strong>' + '<i>-</i><strong>'+ cValueName +'</strong>'
                            $(".categoryActive span").html(nameHtml);
                            $(".categoryActive").attr("value",pValueId+","+cValueId);
                            page.close();
                        });
                    }
                    //添加事件
                    $("#l-wrapper ul li").on("click",function(){
                        $(this).addClass("active").siblings("li").removeClass("active").removeClass("select");
                        var index = parseInt($(this).data("index"));
                        var childrenData = that.categorySourceCache[index].children;
                        getRightHtml(childrenData,index);

                    })
                },
                error: function(err){
                    console.log(err)
                }   
            })
        }
    }
    var newstorePage = {
        init: function() {
            var that = this;
            addressInit('myPro', 'myCity', 'myLoc');

            setTimeout(function() {
                var options = {

                }
                that.getStoreSource(options);
            },200);

             /*初始化dailog*/
            this.dailog = $.dialog({
                autoOpen: false,  
                closeBtn: true, 
                buttons: {
                    /*'取消': function(){
                        this.close();
                    },*/
                    '确定': function(){
                        this.close();
                    }  
                },
                title: '提示', 
                content:"" 
            });
            this.addStore();
        },
        dailog: null,
        addStore: function(){
            var that = this;
            $("#storecreatePage .addstore .addnew").on("click",function(){
                var name = $("#storecreatePage .addstore.value input").val();
                var adress_sheng = $("#myPro").val(),
                    address_city = $("#myCity").val(),
                    address_loc = $("#myLoc").val(),
                    address_detail = $("#adressdetail").val();
                var allAdress = adress_sheng + "" + address_city + "" + address_loc + "" + address_detail;

                if(name == ""){
                    that.dailog.content("仓库的名称需要完善哟~");
                    that.dailog.open();
                    return;
                }
                if(adress_sheng == "0" || address_city == "0" || address_loc == "0" || address_detail == ""){
                    that.dailog.content("还需要完善地址信息才能提交~");
                    that.dailog.open();
                    return;
                }
                $.ajax({
                    url: ajaxSet.saveStore.url,
                    type: ajaxSet.saveStore.type,
                    dataType: ajaxSet.saveStore.dataType,
                    data: {},
                    success: function(data) {
                        if(!data.Issuccess){
                            that.dailog.content(data.Message);
                            that.dailog.open();
                        }else{
                            that.dailog.content("新建的仓库保存成功~");
                            that.dailog.open();
                            // 把新建的仓库存储到 “新建仓库区”
                            var newStoreHtml = '<span data-id="'+data.storeMessage.id+'">'+data.storeMessage.name+'</span>'
                            $("#storecreatePage .latest-list em").remove();
                            $("#storecreatePage .latest-list").append(newStoreHtml);

                        }

                    }
                })

            })
        },
        getStoreSource: function(options){
            $.ajax({
                url: ajaxSet.getStore.url,
                type: ajaxSet.getStore.type,
                dataType: ajaxSet.getStore.dataType,
                data: options,
                success: function(data){
                    if(!data || !data.length){
                        //数据格式不对
                        return;
                    }

                    var storeListHtml = "";
                    for(var i = 0; i < data.length; i++){
                        storeListHtml += '<li data-id="' + data[i].id + '">' + data[i].name + '</li>'
                    }
                    $("#storecreatePage .all-list ul").html(storeListHtml);
                }
            })
        }
    }

    var countAndPrice = {
        init: function(){
            var that = this;
            /*初始化dailog*/
            this.dailog = $.dialog({
                autoOpen: false,  
                closeBtn: true, 
                buttons: {
                    /*'取消': function(){
                        this.close();
                    },*/
                    '确定': function(){
                        this.close();
                    }  
                },
                title: '提示', 
                content:"" 
            });

            /*输入内容的判断*/
            $("#amountpricePage .count span").on("click",function(){
                if($("#amountpricePage .unit select").val() == "0"){
                    that.dailog.content("在填写数量之前，需要明确度量单位哟~");
                    that.dailog.open();
                }
            });
            /*输入内容的判断*/
            $("#amountpricePage .price span").on("click",function(){
                if($("#amountpricePage .count input").val() == ""){
                    that.dailog.content("在填写数量之前，需要明确货品数量哟~");
                    that.dailog.open();
                }
            });
            /*输入内容的判断*/
            $("#amountpricePage .allprice span").on("click",function(){
                if($("#amountpricePage .count input").val() == ""){
                    that.dailog.content("在填写数量之前，需要明确货品数量哟~");
                    that.dailog.open();
                }
            });

            /*同步单价的总价*/
            $("#amountpricePage .price input").on("keyup",function(){
                var price = parseInt($(this).val());
                var count = parseInt($("#amountpricePage .count input").val());
                var allPrice = (price * count).toFixed(2);
                console.log(count,price)
                $("#amountpricePage .allprice input").val(allPrice);
            })
            /*同步单价的总价*/
            $("#amountpricePage .allprice input").on("keyup",function(){
                var allprice = parseInt($(this).val());
                var count = parseInt($("#amountpricePage .count input").val());
                var price = (allprice / count).toFixed(2);
                console.log(count,price)
                $("#amountpricePage .price input").val(price);
            });
            $("#amountpricePage .newVistor_btn a").on("click",function(){
                var count = $("#amountpricePage .count input").val();
                var price = $("#amountpricePage .price input").val();
                var allprice = $("#amountpricePage .allprice input").val();
                if(count == "0" || price == "" || allprice == ""){
                    that.dailog.content("确定之前请补全量价信息哟~");
                    that.dailog.open();
                    return;
                }else{
                    var unit = $("#amountpricePage .unit select").val();
                    var priceHtml = '<strong>' + price + '元 * </strong><strong>' +count+''+unit+'=</strong><strong>' + allprice + '元</strong>';
                    $(".amountpriceActive span").html(priceHtml);
                    $(".amountpriceActive span").attr("data-unit",unit).attr("data-price",price).attr("data-allprice",allprice);
                    page.close();
                }
            })
        },
        dailog: null
    }
    
    /**
     * input校验，
     * [{
     *     expactValue: '',
     *     actualValue: '',
     *     Equation: '!='
     *     message: "某耨不能为空"
     * }]
     */
    
   /* function inputCheck(data) {
        if(!data.length){
            alert("函数应用不正确");
        }
        for(var i = 0; i < data.length; i++){
            if(eval('data[i].expactValue'+ data[i].Equation + 'data[i].actualValue')){
                inputDialog.content(data[i].message);
                return false;
            }
        }
        return true;

    }*/

    /**
     * 入口
     */
    main1.init();
    //main3.init();
    //main4.init();
    //mian10.init();
    //mian15.init();
    page.init();
    sideList.init();
    categoryPage.init();
   
    newstorePage.init();
    countAndPrice.init();
});
