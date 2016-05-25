// 纯JS省市区三级联动
var addressInit = function(_cmbProvince, _cmbCity, _cmbArea, defaultProvince, defaultCity, defaultArea)
{
	var cmbProvince = document.getElementById(_cmbProvince);
	var cmbCity = document.getElementById(_cmbCity);
	var cmbArea = document.getElementById(_cmbArea);
	
	function cmbSelect(cmb, str)
	{
		for(var i=0; i<cmb.options.length; i++)
		{
			if(cmb.options[i].getAttribute('data-value') == str)
			{
				cmb.selectedIndex = i;
				return;
			}
		}
	}
	function cmbAddOption(cmb, str, obj,data)
	{
		var option = document.createElement("OPTION");
		cmb.options.add(option);
		option.innerHTML = str;
		option.value = data;
		option.obj = obj;
        option.setAttribute('data-id',data);
		option.setAttribute('data-value',str);
		option.dataId=data;
	
	}
	
	function changeCity()
	{
		cmbArea.options.length = 0;
		if(cmbCity.selectedIndex == -1)return;
		var item = cmbCity.options[cmbCity.selectedIndex].obj;
		for(var i=0; i<item.CountryList.length; i++)
		{
			cmbAddOption(cmbArea, item.CountryList[i].name, null,item.CountryList[i].id);
		}
		cmbSelect(cmbArea, defaultArea);
	}
	function changeProvince()
	{
		cmbCity.options.length = 0;
		cmbCity.onchange = null;
		if(cmbProvince.selectedIndex == -1)return;
		var item = cmbProvince.options[cmbProvince.selectedIndex].obj;
		for(var i=0; i<item.CityList.length; i++)
		{
			cmbAddOption(cmbCity, item.CityList[i].name, item.CityList[i],item.CityList[i].id);
		}
		cmbSelect(cmbCity, defaultCity);
		changeCity();
		cmbCity.onchange = changeCity;
	}
	
	for(var i=0; i<provinceList.length; i++)
	{
		cmbAddOption(cmbProvince, provinceList[i].name, provinceList[i],provinceList[i].id);
	}
	cmbSelect(cmbProvince, defaultProvince);
	changeProvince();
	cmbProvince.onchange = changeProvince;
}

var provinceList = [
{name:'请选择', 
id: 0,
CityList:[		   
{
	name:'请选择',
	id:0,
	CountryList:[{name:'请选择',id:0}]},		   
]},

{
        name: "安徽",
        id: 2,
        CityList: [
            {
                name: "安庆",
                id: 36,
                CountryList: [
                    {
                        name: "安庆市区",
                        id: 405
                    },
                    {
                        name: "怀宁县",
                        id: 406
                    },
                    {
                        name: "潜山县",
                        id: 407
                    },
                    {
                        name: "宿松县",
                        id: 408
                    },
                    {
                        name: "太湖县",
                        id: 409
                    },
                    {
                        name: "桐城市",
                        id: 410
                    },
                    {
                        name: "望江县",
                        id: 411
                    },
                    {
                        name: "岳西县",
                        id: 412
                    },
                    {
                        name: "枞阳县",
                        id: 413
                    },
                    {
                        name: "迎江区",
                        id: 3496
                    },
                    {
                        name: "大观区",
                        id: 3497
                    },
                    {
                        name: "宜秀区",
                        id: 3498
                    }
                ]
            },
            {
                name: "蚌埠",
                id: 37,
                CountryList: [
                    {
                        name: "蚌埠市区",
                        id: 414
                    },
                    {
                        name: "固镇县",
                        id: 415
                    },
                    {
                        name: "怀远县",
                        id: 416
                    },
                    {
                        name: "五河县",
                        id: 417
                    },
                    {
                        name: "蚌山区",
                        id: 3502
                    },
                    {
                        name: "龙子湖区",
                        id: 3504
                    },
                    {
                        name: "禹会区",
                        id: 3506
                    },
                    {
                        name: "淮上区",
                        id: 3508
                    },
                    {
                        name: "高新区",
                        id: 4507
                    }
                ]
            },
            {
                name: "巢湖",
                id: 38,
                CountryList: [
                    {
                        name: "巢湖市区",
                        id: 418
                    },
                    {
                        name: "含山县",
                        id: 419
                    },
                    {
                        name: "和县",
                        id: 420
                    },
                    {
                        name: "庐江县",
                        id: 421
                    },
                    {
                        name: "无为县",
                        id: 422
                    },
                    {
                        name: "居巢区",
                        id: 3511
                    }
                ]
            },
            {
                name: "池州",
                id: 39,
                CountryList: [
                    {
                        name: "池州市区",
                        id: 423
                    },
                    {
                        name: "东至县",
                        id: 424
                    },
                    {
                        name: "青阳县",
                        id: 425
                    },
                    {
                        name: "石台县",
                        id: 426
                    },
                    {
                        name: "贵池区",
                        id: 3512
                    },
                    {
                        name: "仙寓山",
                        id: 5829
                    },
                    {
                        name: "九华山风景区",
                        id: 5831
                    }
                ]
            },
            {
                name: "滁州",
                id: 40,
                CountryList: [
                    {
                        name: "滁州市区",
                        id: 427
                    },
                    {
                        name: "定远县",
                        id: 428
                    },
                    {
                        name: "凤阳县",
                        id: 429
                    },
                    {
                        name: "来安县",
                        id: 430
                    },
                    {
                        name: "明光市",
                        id: 431
                    },
                    {
                        name: "全椒县",
                        id: 432
                    },
                    {
                        name: "天长市",
                        id: 433
                    },
                    {
                        name: "琅琊",
                        id: 3514
                    },
                    {
                        name: "南谯区",
                        id: 3518
                    },
                    {
                        name: "经济技术开发区",
                        id: 5240
                    }
                ]
            },
            {
                name: "阜阳",
                id: 41,
                CountryList: [
                    {
                        name: "阜南县",
                        id: 434
                    },
                    {
                        name: "阜阳市区",
                        id: 435
                    },
                    {
                        name: "界首市",
                        id: 436
                    },
                    {
                        name: "临泉县",
                        id: 437
                    },
                    {
                        name: "太和县",
                        id: 438
                    },
                    {
                        name: "颖上县",
                        id: 439
                    },
                    {
                        name: "颍州区",
                        id: 3523
                    },
                    {
                        name: "颍东区",
                        id: 3530
                    },
                    {
                        name: "颍泉区",
                        id: 3534
                    }
                ]
            },
            {
                name: "合肥",
                id: 42,
                CountryList: [
                    {
                        name: "长丰县",
                        id: 440
                    },
                    {
                        name: "肥东县",
                        id: 441
                    },
                    {
                        name: "肥西县",
                        id: 442
                    },
                    {
                        name: "合肥市区",
                        id: 443
                    },
                    {
                        name: "庐阳区",
                        id: 3537
                    },
                    {
                        name: "瑶海区",
                        id: 3595
                    },
                    {
                        name: "蜀山区",
                        id: 3597
                    },
                    {
                        name: "包河区",
                        id: 3599
                    },
                    {
                        name: "中市区",
                        id: 5190
                    },
                    {
                        name: "高新区",
                        id: 5255
                    },
                    {
                        name: "经济开发区",
                        id: 5822
                    }
                ]
            },
            {
                name: "淮北",
                id: 43,
                CountryList: [
                    {
                        name: "淮北市区",
                        id: 444
                    },
                    {
                        name: "濉溪县",
                        id: 445
                    },
                    {
                        name: "相山区",
                        id: 3559
                    },
                    {
                        name: "杜集区",
                        id: 3562
                    },
                    {
                        name: "烈山区",
                        id: 3564
                    }
                ]
            },
            {
                name: "淮南",
                id: 44,
                CountryList: [
                    {
                        name: "凤台县",
                        id: 446
                    },
                    {
                        name: "淮南市",
                        id: 447
                    },
                    {
                        name: "田家庵区",
                        id: 3607
                    },
                    {
                        name: "大通区",
                        id: 3611
                    },
                    {
                        name: "谢家集区",
                        id: 3615
                    },
                    {
                        name: "八公山区",
                        id: 3618
                    },
                    {
                        name: "潘集区",
                        id: 3621
                    }
                ]
            },
            {
                name: "黄山",
                id: 45,
                CountryList: [
                    {
                        name: "黄山市区",
                        id: 448
                    },
                    {
                        name: "祁门县",
                        id: 449
                    },
                    {
                        name: "休宁县",
                        id: 450
                    },
                    {
                        name: "歙县",
                        id: 451
                    },
                    {
                        name: "黟县",
                        id: 452
                    },
                    {
                        name: "屯溪区",
                        id: 3634
                    },
                    {
                        name: "黄山区",
                        id: 3637
                    },
                    {
                        name: "徽州区",
                        id: 3639
                    }
                ]
            },
            {
                name: "六安",
                id: 46,
                CountryList: [
                    {
                        name: "霍邱县",
                        id: 453
                    },
                    {
                        name: "霍山县",
                        id: 454
                    },
                    {
                        name: "金寨县",
                        id: 455
                    },
                    {
                        name: "六安市区",
                        id: 456
                    },
                    {
                        name: "寿县",
                        id: 457
                    },
                    {
                        name: "舒城县",
                        id: 458
                    },
                    {
                        name: "金安区",
                        id: 3645
                    },
                    {
                        name: "裕安区",
                        id: 3648
                    }
                ]
            },
            {
                name: "马鞍山",
                id: 47,
                CountryList: [
                    {
                        name: "当涂县",
                        id: 459
                    },
                    {
                        name: "马鞍山市区",
                        id: 460
                    },
                    {
                        name: "雨山区",
                        id: 3652
                    },
                    {
                        name: "花山区",
                        id: 3655
                    },
                    {
                        name: "金家庄区",
                        id: 3659
                    }
                ]
            },
            {
                name: "宿州",
                id: 48,
                CountryList: [
                    {
                        name: "灵璧县",
                        id: 461
                    },
                    {
                        name: "宿州市区",
                        id: 462
                    },
                    {
                        name: "萧县",
                        id: 463
                    },
                    {
                        name: "泗县",
                        id: 464
                    },
                    {
                        name: "砀山县",
                        id: 465
                    },
                    {
                        name: "埇桥区",
                        id: 3665
                    },
                    {
                        name: "北关区",
                        id: 6088
                    }
                ]
            },
            {
                name: "铜陵",
                id: 49,
                CountryList: [
                    {
                        name: "铜陵市区",
                        id: 466
                    },
                    {
                        name: "铜陵县",
                        id: 467
                    },
                    {
                        name: "铜官山区",
                        id: 3668
                    },
                    {
                        name: "狮子山区",
                        id: 3674
                    },
                    {
                        name: "郊区",
                        id: 3678
                    },
                    {
                        name: "开发区",
                        id: 5818
                    }
                ]
            },
            {
                name: "芜湖",
                id: 50,
                CountryList: [
                    {
                        name: "繁昌县",
                        id: 468
                    },
                    {
                        name: "南陵县",
                        id: 469
                    },
                    {
                        name: "芜湖市区",
                        id: 470
                    },
                    {
                        name: "芜湖县",
                        id: 471
                    },
                    {
                        name: "镜湖区",
                        id: 3682
                    },
                    {
                        name: "弋江区",
                        id: 3686
                    },
                    {
                        name: "三山区",
                        id: 3688
                    },
                    {
                        name: "鸠江区",
                        id: 3690
                    },
                    {
                        name: "经济开发区",
                        id: 5823
                    }
                ]
            },
            {
                name: "宣城",
                id: 51,
                CountryList: [
                    {
                        name: "广德县",
                        id: 472
                    },
                    {
                        name: "绩溪县",
                        id: 473
                    },
                    {
                        name: "郎溪县",
                        id: 474
                    },
                    {
                        name: "宁国市",
                        id: 475
                    },
                    {
                        name: "宣城市区",
                        id: 476
                    },
                    {
                        name: "泾县",
                        id: 477
                    },
                    {
                        name: "旌德县",
                        id: 478
                    },
                    {
                        name: "宣州区",
                        id: 3697
                    }
                ]
            },
            {
                name: "亳州",
                id: 52,
                CountryList: [
                    {
                        name: "利辛县",
                        id: 479
                    },
                    {
                        name: "蒙城县",
                        id: 480
                    },
                    {
                        name: "涡阳县",
                        id: 481
                    },
                    {
                        name: "亳州市区",
                        id: 482
                    },
                    {
                        name: "谯城区",
                        id: 3700
                    }
                ]
            }
        ]
    },
    {
        name: "北京",
        id: 3,
        CityList: [
            {
                name: "北京",
                id: 53,
                CountryList: [
                    {
                        name: "密云县",
                        id: 484
                    },
                    {
                        name: "延庆县",
                        id: 485
                    },
                    {
                        name: "海淀区",
                        id: 639
                    },
                    {
                        name: "朝阳区",
                        id: 640
                    },
                    {
                        name: "西城区",
                        id: 641
                    },
                    {
                        name: "东城区",
                        id: 642
                    },
                    {
                        name: "崇文区",
                        id: 643
                    },
                    {
                        name: "宣武区",
                        id: 644
                    },
                    {
                        name: "丰台区",
                        id: 645
                    },
                    {
                        name: "石景山区",
                        id: 646
                    },
                    {
                        name: "门头沟",
                        id: 647
                    },
                    {
                        name: "房山区",
                        id: 648
                    },
                    {
                        name: "通州区",
                        id: 649
                    },
                    {
                        name: "大兴区",
                        id: 650
                    },
                    {
                        name: "顺义",
                        id: 651
                    },
                    {
                        name: "怀柔",
                        id: 652
                    },
                    {
                        name: "昌平区",
                        id: 4135
                    },
                    {
                        name: "平谷区",
                        id: 4235
                    }
                ]
            }
        ]
    },
    {
        name: "福建",
        id: 4,
        CityList: [
            {
                name: "福州",
                id: 54,
                CountryList: [
                    {
                        name: "长乐市",
                        id: 653
                    },
                    {
                        name: "福清市",
                        id: 654
                    },
                    {
                        name: "福州市区",
                        id: 655
                    },
                    {
                        name: "连江县",
                        id: 656
                    },
                    {
                        name: "罗源县",
                        id: 657
                    },
                    {
                        name: "闽侯县",
                        id: 658
                    },
                    {
                        name: "闽清县",
                        id: 659
                    },
                    {
                        name: "平潭县",
                        id: 660
                    },
                    {
                        name: "永泰县",
                        id: 661
                    },
                    {
                        name: "鼓楼区",
                        id: 3992
                    },
                    {
                        name: "台江区",
                        id: 3994
                    },
                    {
                        name: "仓山区",
                        id: 3996
                    },
                    {
                        name: "马尾区",
                        id: 4000
                    },
                    {
                        name: "晋安区",
                        id: 4003
                    }
                ]
            },
            {
                name: "龙岩",
                id: 55,
                CountryList: [
                    {
                        name: "长汀县",
                        id: 662
                    },
                    {
                        name: "连城县",
                        id: 663
                    },
                    {
                        name: "龙岩市区",
                        id: 664
                    },
                    {
                        name: "上杭县",
                        id: 665
                    },
                    {
                        name: "武平县",
                        id: 666
                    },
                    {
                        name: "永定县",
                        id: 667
                    },
                    {
                        name: "漳平市",
                        id: 668
                    },
                    {
                        name: "新罗区",
                        id: 4048
                    }
                ]
            },
            {
                name: "南平",
                id: 56,
                CountryList: [
                    {
                        name: "光泽县",
                        id: 669
                    },
                    {
                        name: "建阳市",
                        id: 670
                    },
                    {
                        name: "建瓯市",
                        id: 671
                    },
                    {
                        name: "南平市区",
                        id: 672
                    },
                    {
                        name: "浦城县",
                        id: 673
                    },
                    {
                        name: "邵武市",
                        id: 674
                    },
                    {
                        name: "顺昌县",
                        id: 675
                    },
                    {
                        name: "松溪县",
                        id: 676
                    },
                    {
                        name: "武夷山市",
                        id: 677
                    },
                    {
                        name: "政和县",
                        id: 678
                    },
                    {
                        name: "延平区",
                        id: 4004
                    }
                ]
            },
            {
                name: "宁德",
                id: 57,
                CountryList: [
                    {
                        name: "福安市",
                        id: 679
                    },
                    {
                        name: "福鼎市",
                        id: 680
                    },
                    {
                        name: "古田县",
                        id: 681
                    },
                    {
                        name: "宁德市区",
                        id: 682
                    },
                    {
                        name: "屏南县",
                        id: 683
                    },
                    {
                        name: "寿宁县",
                        id: 684
                    },
                    {
                        name: "霞浦县",
                        id: 685
                    },
                    {
                        name: "周宁县",
                        id: 686
                    },
                    {
                        name: "柘荣县",
                        id: 687
                    },
                    {
                        name: "蕉城区",
                        id: 4046
                    }
                ]
            },
            {
                name: "莆田",
                id: 58,
                CountryList: [
                    {
                        name: "莆田市区",
                        id: 688
                    },
                    {
                        name: "仙游县",
                        id: 689
                    },
                    {
                        name: "城厢区",
                        id: 4008
                    },
                    {
                        name: "涵江区",
                        id: 4010
                    },
                    {
                        name: "荔城区",
                        id: 4012
                    },
                    {
                        name: "秀屿区",
                        id: 4015
                    }
                ]
            },
            {
                name: "泉州",
                id: 59,
                CountryList: [
                    {
                        name: "安溪县",
                        id: 690
                    },
                    {
                        name: "德化县",
                        id: 691
                    },
                    {
                        name: "惠安县",
                        id: 692
                    },
                    {
                        name: "金门县",
                        id: 693
                    },
                    {
                        name: "晋江市",
                        id: 694
                    },
                    {
                        name: "南安市",
                        id: 695
                    },
                    {
                        name: "泉州市区",
                        id: 696
                    },
                    {
                        name: "石狮市",
                        id: 697
                    },
                    {
                        name: "永春县",
                        id: 698
                    },
                    {
                        name: "鲤城区",
                        id: 4023
                    },
                    {
                        name: "丰泽区",
                        id: 4024
                    },
                    {
                        name: "洛江区",
                        id: 4025
                    },
                    {
                        name: "泉港区",
                        id: 4026
                    },
                    {
                        name: "经济开发区",
                        id: 5184
                    }
                ]
            },
            {
                name: "三明",
                id: 60,
                CountryList: [
                    {
                        name: "大田县",
                        id: 699
                    },
                    {
                        name: "建宁县",
                        id: 700
                    },
                    {
                        name: "将乐县",
                        id: 701
                    },
                    {
                        name: "明溪县",
                        id: 702
                    },
                    {
                        name: "宁化县",
                        id: 703
                    },
                    {
                        name: "清流县",
                        id: 704
                    },
                    {
                        name: "三明市区",
                        id: 705
                    },
                    {
                        name: "沙县",
                        id: 706
                    },
                    {
                        name: "泰宁县",
                        id: 707
                    },
                    {
                        name: "永安市",
                        id: 708
                    },
                    {
                        name: "尤溪县",
                        id: 709
                    },
                    {
                        name: "梅列区",
                        id: 4019
                    },
                    {
                        name: "三元区",
                        id: 4021
                    }
                ]
            },
            {
                name: "厦门",
                id: 61,
                CountryList: [
                    {
                        name: "厦门市区",
                        id: 710
                    },
                    {
                        name: "思明区",
                        id: 4027
                    },
                    {
                        name: "海沧区",
                        id: 4029
                    },
                    {
                        name: "湖里区",
                        id: 4032
                    },
                    {
                        name: "集美区",
                        id: 4033
                    },
                    {
                        name: "同安区",
                        id: 4044
                    },
                    {
                        name: "翔安区",
                        id: 4045
                    }
                ]
            },
            {
                name: "漳州",
                id: 62,
                CountryList: [
                    {
                        name: "长泰县",
                        id: 711
                    },
                    {
                        name: "东山县",
                        id: 712
                    },
                    {
                        name: "华安县",
                        id: 713
                    },
                    {
                        name: "龙海市",
                        id: 714
                    },
                    {
                        name: "南靖县",
                        id: 715
                    },
                    {
                        name: "平和县",
                        id: 716
                    },
                    {
                        name: "云霄县",
                        id: 717
                    },
                    {
                        name: "漳浦县",
                        id: 718
                    },
                    {
                        name: "漳州市区",
                        id: 719
                    },
                    {
                        name: "诏安县",
                        id: 720
                    },
                    {
                        name: "芗城区",
                        id: 4047
                    },
                    {
                        name: "龙文区",
                        id: 4049
                    }
                ]
            }
        ]
    },
    {
        name: "甘肃",
        id: 5,
        CityList: [
            {
                name: "白银",
                id: 63,
                CountryList: [
                    {
                        name: "白银市区",
                        id: 721
                    },
                    {
                        name: "会宁县",
                        id: 722
                    },
                    {
                        name: "景泰县",
                        id: 723
                    },
                    {
                        name: "靖远县",
                        id: 724
                    },
                    {
                        name: "白银区",
                        id: 3699
                    },
                    {
                        name: "平川区",
                        id: 3701
                    }
                ]
            },
            {
                name: "定西",
                id: 64,
                CountryList: [
                    {
                        name: "定西县",
                        id: 725
                    },
                    {
                        name: "临洮县",
                        id: 726
                    },
                    {
                        name: "陇西县",
                        id: 727
                    },
                    {
                        name: "通渭县",
                        id: 728
                    },
                    {
                        name: "渭源县",
                        id: 729
                    },
                    {
                        name: "漳县",
                        id: 730
                    },
                    {
                        name: "岷县",
                        id: 731
                    },
                    {
                        name: "安定区",
                        id: 3744
                    }
                ]
            },
            {
                name: "甘南",
                id: 65,
                CountryList: [
                    {
                        name: "迭部县",
                        id: 732
                    },
                    {
                        name: "合作市",
                        id: 733
                    },
                    {
                        name: "临潭县",
                        id: 734
                    },
                    {
                        name: "碌曲县",
                        id: 735
                    },
                    {
                        name: "玛曲县",
                        id: 736
                    },
                    {
                        name: "夏河县",
                        id: 737
                    },
                    {
                        name: "舟曲县",
                        id: 738
                    },
                    {
                        name: "卓尼县",
                        id: 739
                    }
                ]
            },
            {
                name: "嘉峪关",
                id: 66,
                CountryList: [
                    {
                        name: "嘉峪关市",
                        id: 740
                    },
                    {
                        name: "金川区",
                        id: 3692
                    },
                    {
                        name: "金昌市",
                        id: 3695
                    },
                    {
                        name: "永昌县",
                        id: 3696
                    }
                ]
            },
            {
                name: "金昌",
                id: 67,
                CountryList: [
                    {
                        name: "金昌市区",
                        id: 741
                    },
                    {
                        name: "永昌县",
                        id: 742
                    }
                ]
            },
            {
                name: "酒泉",
                id: 68,
                CountryList: [
                    {
                        name: "阿克塞哈萨克族自治县",
                        id: 743
                    },
                    {
                        name: "安西县",
                        id: 744
                    },
                    {
                        name: "敦煌市",
                        id: 745
                    },
                    {
                        name: "金塔县",
                        id: 746
                    },
                    {
                        name: "酒泉市区",
                        id: 747
                    },
                    {
                        name: "肃北蒙古族自治县",
                        id: 748
                    },
                    {
                        name: "玉门市",
                        id: 749
                    },
                    {
                        name: "肃州区",
                        id: 3717
                    }
                ]
            },
            {
                name: "兰州",
                id: 69,
                CountryList: [
                    {
                        name: "皋兰县",
                        id: 750
                    },
                    {
                        name: "兰州市区",
                        id: 751
                    },
                    {
                        name: "永登县",
                        id: 752
                    },
                    {
                        name: "榆中县",
                        id: 753
                    },
                    {
                        name: "城关区",
                        id: 3673
                    },
                    {
                        name: "七里河区",
                        id: 3676
                    },
                    {
                        name: "西固区",
                        id: 3680
                    },
                    {
                        name: "安宁区",
                        id: 3684
                    },
                    {
                        name: "红古区",
                        id: 3687
                    }
                ]
            },
            {
                name: "临夏",
                id: 70,
                CountryList: [
                    {
                        name: "东乡族自治县",
                        id: 754
                    },
                    {
                        name: "广河县",
                        id: 755
                    },
                    {
                        name: "和政县",
                        id: 756
                    },
                    {
                        name: "积石山保安族东乡族撒拉族自治县",
                        id: 757
                    },
                    {
                        name: "康乐县",
                        id: 758
                    },
                    {
                        name: "临夏市",
                        id: 759
                    },
                    {
                        name: "临夏县",
                        id: 760
                    },
                    {
                        name: "永靖县",
                        id: 761
                    }
                ]
            },
            {
                name: "陇南",
                id: 71,
                CountryList: [
                    {
                        name: "成县",
                        id: 762
                    },
                    {
                        name: "徽县",
                        id: 763
                    },
                    {
                        name: "康县",
                        id: 764
                    },
                    {
                        name: "礼县",
                        id: 765
                    },
                    {
                        name: "两当县",
                        id: 766
                    },
                    {
                        name: "文县",
                        id: 767
                    },
                    {
                        name: "武都县",
                        id: 768
                    },
                    {
                        name: "西和县",
                        id: 769
                    },
                    {
                        name: "宕昌县",
                        id: 770
                    },
                    {
                        name: "武都区",
                        id: 3748
                    }
                ]
            },
            {
                name: "平凉",
                id: 72,
                CountryList: [
                    {
                        name: "崇信县",
                        id: 771
                    },
                    {
                        name: "华亭县",
                        id: 772
                    },
                    {
                        name: "静宁县",
                        id: 773
                    },
                    {
                        name: "灵台县",
                        id: 774
                    },
                    {
                        name: "平凉市区",
                        id: 775
                    },
                    {
                        name: "庄浪县",
                        id: 776
                    },
                    {
                        name: "泾川县",
                        id: 777
                    },
                    {
                        name: "崆峒区",
                        id: 3735
                    }
                ]
            },
            {
                name: "庆阳",
                id: 73,
                CountryList: [
                    {
                        name: "合水县",
                        id: 778
                    },
                    {
                        name: "华池县",
                        id: 779
                    },
                    {
                        name: "环县",
                        id: 780
                    },
                    {
                        name: "宁县",
                        id: 781
                    },
                    {
                        name: "庆城县",
                        id: 782
                    },
                    {
                        name: "庆阳市区",
                        id: 783
                    },
                    {
                        name: "镇原县",
                        id: 784
                    },
                    {
                        name: "正宁县",
                        id: 785
                    },
                    {
                        name: "西峰区",
                        id: 3731
                    }
                ]
            },
            {
                name: "天水",
                id: 74,
                CountryList: [
                    {
                        name: "甘谷县",
                        id: 786
                    },
                    {
                        name: "秦安县",
                        id: 787
                    },
                    {
                        name: "清水县",
                        id: 788
                    },
                    {
                        name: "天水市区",
                        id: 789
                    },
                    {
                        name: "武山县",
                        id: 790
                    },
                    {
                        name: "张家川回族自治县",
                        id: 791
                    },
                    {
                        name: "秦州区",
                        id: 3705
                    },
                    {
                        name: "麦积区",
                        id: 3708
                    }
                ]
            },
            {
                name: "武威",
                id: 75,
                CountryList: [
                    {
                        name: "古浪县",
                        id: 792
                    },
                    {
                        name: "民勤县",
                        id: 793
                    },
                    {
                        name: "天祝藏族自治县",
                        id: 794
                    },
                    {
                        name: "武威市区",
                        id: 795
                    },
                    {
                        name: "凉州区",
                        id: 3713
                    }
                ]
            },
            {
                name: "张掖",
                id: 76,
                CountryList: [
                    {
                        name: "高台县",
                        id: 796
                    },
                    {
                        name: "临泽县",
                        id: 797
                    },
                    {
                        name: "民乐县",
                        id: 798
                    },
                    {
                        name: "山丹县",
                        id: 799
                    },
                    {
                        name: "肃南裕固族自治县",
                        id: 800
                    },
                    {
                        name: "张掖市区",
                        id: 801
                    },
                    {
                        name: "甘州区",
                        id: 3726
                    }
                ]
            }
        ]
    },
    {
        name: "广东",
        id: 6,
        CityList: [
            {
                name: "潮州",
                id: 77,
                CountryList: [
                    {
                        name: "潮安县",
                        id: 802
                    },
                    {
                        name: "潮州市区",
                        id: 803
                    },
                    {
                        name: "饶平县",
                        id: 804
                    },
                    {
                        name: "湘桥区",
                        id: 3711
                    }
                ]
            },
            {
                name: "东莞",
                id: 78,
                CountryList: [
                    {
                        name: "东莞市区",
                        id: 805
                    },
                    {
                        name: "莞城区",
                        id: 4468
                    },
                    {
                        name: "东城区",
                        id: 4469
                    },
                    {
                        name: "南城区",
                        id: 4470
                    },
                    {
                        name: "万江区",
                        id: 4471
                    },
                    {
                        name: "虎门镇",
                        id: 4472
                    },
                    {
                        name: "厚街镇",
                        id: 4473
                    },
                    {
                        name: "长安镇",
                        id: 4474
                    },
                    {
                        name: "大岭山镇",
                        id: 4475
                    },
                    {
                        name: "常平镇",
                        id: 4476
                    },
                    {
                        name: "大朗镇",
                        id: 4477
                    },
                    {
                        name: "樟木头镇",
                        id: 4478
                    },
                    {
                        name: "清溪镇",
                        id: 4479
                    },
                    {
                        name: "塘厦镇",
                        id: 4480
                    },
                    {
                        name: "石碣镇",
                        id: 4481
                    },
                    {
                        name: "石龙镇",
                        id: 4482
                    },
                    {
                        name: "中堂镇",
                        id: 4483
                    },
                    {
                        name: "高埗镇",
                        id: 4511
                    },
                    {
                        name: "黄江镇",
                        id: 4512
                    },
                    {
                        name: "洪梅镇",
                        id: 4540
                    },
                    {
                        name: "桥头镇",
                        id: 4542
                    },
                    {
                        name: "凤岗镇",
                        id: 4544
                    },
                    {
                        name: "茶山镇",
                        id: 4545
                    },
                    {
                        name: "企石镇",
                        id: 5177
                    },
                    {
                        name: "松山湖区",
                        id: 5193
                    },
                    {
                        name: "石排镇",
                        id: 5210
                    },
                    {
                        name: "寮步镇",
                        id: 5812
                    },
                    {
                        name: "东坑镇",
                        id: 5840
                    },
                    {
                        name: "麻涌镇",
                        id: 6100
                    },
                    {
                        name: "谢岗镇",
                        id: 6104
                    },
                    {
                        name: "沙田镇",
                        id: 6317
                    },
                    {
                        name: "横沥镇",
                        id: 6323
                    },
                    {
                        name: "望牛墩镇",
                        id: 6370
                    }
                ]
            },
            {
                name: "佛山",
                id: 79,
                CountryList: [
                    {
                        name: "佛山市区",
                        id: 806
                    },
                    {
                        name: "禅城区",
                        id: 3809
                    },
                    {
                        name: "南海区",
                        id: 3811
                    },
                    {
                        name: "顺德区",
                        id: 3814
                    },
                    {
                        name: "三水区",
                        id: 3819
                    },
                    {
                        name: "高明区",
                        id: 3822
                    }
                ]
            },
            {
                name: "广州",
                id: 80,
                CountryList: [
                    {
                        name: "广州市区",
                        id: 808
                    },
                    {
                        name: "增城市",
                        id: 809
                    },
                    {
                        name: "越秀区",
                        id: 3650
                    },
                    {
                        name: "荔湾区",
                        id: 3653
                    },
                    {
                        name: "海珠区",
                        id: 3654
                    },
                    {
                        name: "天河区",
                        id: 3657
                    },
                    {
                        name: "白云区",
                        id: 3660
                    },
                    {
                        name: "黄埔区",
                        id: 3662
                    },
                    {
                        name: "番禺区",
                        id: 3664
                    },
                    {
                        name: "花都",
                        id: 3671
                    },
                    {
                        name: "南沙区",
                        id: 3675
                    },
                    {
                        name: "萝岗区",
                        id: 3677
                    },
                    {
                        name: "从化市",
                        id: 4467
                    }
                ]
            },
            {
                name: "河源",
                id: 81,
                CountryList: [
                    {
                        name: "东源县",
                        id: 810
                    },
                    {
                        name: "和平县",
                        id: 811
                    },
                    {
                        name: "河源市区",
                        id: 812
                    },
                    {
                        name: "连平县",
                        id: 813
                    },
                    {
                        name: "龙川县",
                        id: 814
                    },
                    {
                        name: "紫金县",
                        id: 815
                    },
                    {
                        name: "源城区",
                        id: 3702
                    },
                    {
                        name: "新市区",
                        id: 4533
                    },
                    {
                        name: "老城区",
                        id: 4534
                    }
                ]
            },
            {
                name: "惠州",
                id: 82,
                CountryList: [
                    {
                        name: "博罗县",
                        id: 816
                    },
                    {
                        name: "惠东县",
                        id: 817
                    },
                    {
                        name: "惠阳市",
                        id: 818
                    },
                    {
                        name: "惠州市区",
                        id: 819
                    },
                    {
                        name: "龙门县",
                        id: 820
                    },
                    {
                        name: "惠城区",
                        id: 3743
                    },
                    {
                        name: "惠阳区",
                        id: 3745
                    },
                    {
                        name: "大亚湾中心区",
                        id: 4538
                    }
                ]
            },
            {
                name: "江门",
                id: 83,
                CountryList: [
                    {
                        name: "恩平市",
                        id: 821
                    },
                    {
                        name: "鹤山市",
                        id: 822
                    },
                    {
                        name: "江门市区",
                        id: 823
                    },
                    {
                        name: "开平市",
                        id: 824
                    },
                    {
                        name: "台山市",
                        id: 825
                    },
                    {
                        name: "江海区",
                        id: 3794
                    },
                    {
                        name: "蓬江区",
                        id: 3798
                    },
                    {
                        name: "新会区",
                        id: 3801
                    },
                    {
                        name: "北新区",
                        id: 6042
                    }
                ]
            },
            {
                name: "揭阳",
                id: 84,
                CountryList: [
                    {
                        name: "惠来县",
                        id: 826
                    },
                    {
                        name: "揭东县",
                        id: 827
                    },
                    {
                        name: "揭西县",
                        id: 828
                    },
                    {
                        name: "揭阳市区",
                        id: 829
                    },
                    {
                        name: "普宁市",
                        id: 830
                    },
                    {
                        name: "榕城区",
                        id: 3736
                    },
                    {
                        name: "东山区",
                        id: 6119
                    }
                ]
            },
            {
                name: "茂名",
                id: 85,
                CountryList: [
                    {
                        name: "电白县",
                        id: 831
                    },
                    {
                        name: "高州市",
                        id: 832
                    },
                    {
                        name: "化州市",
                        id: 833
                    },
                    {
                        name: "茂名市区",
                        id: 834
                    },
                    {
                        name: "信宜市",
                        id: 835
                    },
                    {
                        name: "茂南区",
                        id: 3849
                    },
                    {
                        name: "茂港区",
                        id: 3853
                    }
                ]
            },
            {
                name: "梅州",
                id: 86,
                CountryList: [
                    {
                        name: "大埔县",
                        id: 836
                    },
                    {
                        name: "丰顺县",
                        id: 837
                    },
                    {
                        name: "蕉岭县",
                        id: 838
                    },
                    {
                        name: "梅县",
                        id: 839
                    },
                    {
                        name: "梅州市区",
                        id: 840
                    },
                    {
                        name: "平远县",
                        id: 841
                    },
                    {
                        name: "五华县",
                        id: 842
                    },
                    {
                        name: "兴宁市",
                        id: 843
                    },
                    {
                        name: "梅江区",
                        id: 3707
                    }
                ]
            },
            {
                name: "清远",
                id: 87,
                CountryList: [
                    {
                        name: "佛冈县",
                        id: 844
                    },
                    {
                        name: "连南瑶族自治县",
                        id: 845
                    },
                    {
                        name: "连山壮族瑶族自治县",
                        id: 846
                    },
                    {
                        name: "连州市",
                        id: 847
                    },
                    {
                        name: "清新县",
                        id: 848
                    },
                    {
                        name: "清远市区",
                        id: 849
                    },
                    {
                        name: "阳山县",
                        id: 850
                    },
                    {
                        name: "英德市",
                        id: 851
                    },
                    {
                        name: "清城区",
                        id: 3683
                    },
                    {
                        name: "小市区",
                        id: 5247
                    },
                    {
                        name: "新城区",
                        id: 6101
                    }
                ]
            },
            {
                name: "汕头",
                id: 88,
                CountryList: [
                    {
                        name: "南澳县",
                        id: 854
                    },
                    {
                        name: "汕头市区",
                        id: 855
                    },
                    {
                        name: "金平区",
                        id: 3718
                    },
                    {
                        name: "濠江区",
                        id: 3720
                    },
                    {
                        name: "龙湖区",
                        id: 3722
                    },
                    {
                        name: "潮阳区",
                        id: 3725
                    },
                    {
                        name: "潮南区",
                        id: 3728
                    },
                    {
                        name: "澄海区",
                        id: 3733
                    }
                ]
            },
            {
                name: "汕尾",
                id: 89,
                CountryList: [
                    {
                        name: "海丰县",
                        id: 856
                    },
                    {
                        name: "陆丰市",
                        id: 857
                    },
                    {
                        name: "陆河县",
                        id: 858
                    },
                    {
                        name: "汕尾市区",
                        id: 859
                    },
                    {
                        name: "城区",
                        id: 3740
                    }
                ]
            },
            {
                name: "韶关",
                id: 90,
                CountryList: [
                    {
                        name: "乐昌市",
                        id: 860
                    },
                    {
                        name: "南雄市",
                        id: 861
                    },
                    {
                        name: "曲江县",
                        id: 862
                    },
                    {
                        name: "仁化县",
                        id: 863
                    },
                    {
                        name: "乳源瑶族自治县",
                        id: 864
                    },
                    {
                        name: "韶关市区",
                        id: 865
                    },
                    {
                        name: "始兴县",
                        id: 866
                    },
                    {
                        name: "翁源县",
                        id: 867
                    },
                    {
                        name: "新丰县",
                        id: 868
                    },
                    {
                        name: "浈江区",
                        id: 3689
                    },
                    {
                        name: "武江区",
                        id: 3691
                    },
                    {
                        name: "曲江区",
                        id: 3694
                    }
                ]
            },
            {
                name: "深圳",
                id: 91,
                CountryList: [
                    {
                        name: "深圳市区",
                        id: 869
                    },
                    {
                        name: "福田区",
                        id: 3749
                    },
                    {
                        name: "罗湖区",
                        id: 3752
                    },
                    {
                        name: "南山区",
                        id: 3755
                    },
                    {
                        name: "宝安区",
                        id: 3757
                    },
                    {
                        name: "龙岗区",
                        id: 3759
                    },
                    {
                        name: "盐田区",
                        id: 3761
                    },
                    {
                        name: "坪山新区",
                        id: 5821
                    },
                    {
                        name: "光明新区",
                        id: 6318
                    }
                ]
            },
            {
                name: "阳江",
                id: 92,
                CountryList: [
                    {
                        name: "阳春市",
                        id: 870
                    },
                    {
                        name: "阳东县",
                        id: 871
                    },
                    {
                        name: "阳江市区",
                        id: 872
                    },
                    {
                        name: "阳西县",
                        id: 873
                    },
                    {
                        name: "江城区",
                        id: 3843
                    },
                    {
                        name: "海陵开发区",
                        id: 5129
                    }
                ]
            },
            {
                name: "云浮",
                id: 93,
                CountryList: [
                    {
                        name: "罗定市",
                        id: 874
                    },
                    {
                        name: "新兴县",
                        id: 875
                    },
                    {
                        name: "郁南县",
                        id: 876
                    },
                    {
                        name: "云安县",
                        id: 877
                    },
                    {
                        name: "云浮市区",
                        id: 878
                    },
                    {
                        name: "云城区",
                        id: 3834
                    }
                ]
            },
            {
                name: "湛江",
                id: 94,
                CountryList: [
                    {
                        name: "雷州市",
                        id: 879
                    },
                    {
                        name: "廉江市",
                        id: 880
                    },
                    {
                        name: "遂溪县",
                        id: 881
                    },
                    {
                        name: "吴川市",
                        id: 882
                    },
                    {
                        name: "徐闻县",
                        id: 883
                    },
                    {
                        name: "湛江市区",
                        id: 884
                    },
                    {
                        name: "赤坎区",
                        id: 3859
                    },
                    {
                        name: "霞山区",
                        id: 3863
                    },
                    {
                        name: "坡头区",
                        id: 3864
                    },
                    {
                        name: "麻章区",
                        id: 3866
                    },
                    {
                        name: "经济开发区",
                        id: 4522
                    }
                ]
            },
            {
                name: "肇庆",
                id: 95,
                CountryList: [
                    {
                        name: "德庆县",
                        id: 885
                    },
                    {
                        name: "封开县",
                        id: 886
                    },
                    {
                        name: "高要市",
                        id: 887
                    },
                    {
                        name: "广宁县",
                        id: 888
                    },
                    {
                        name: "怀集县",
                        id: 889
                    },
                    {
                        name: "四会市",
                        id: 890
                    },
                    {
                        name: "肇庆市区",
                        id: 891
                    },
                    {
                        name: "端州区",
                        id: 3825
                    },
                    {
                        name: "鼎湖区",
                        id: 3828
                    }
                ]
            },
            {
                name: "中山",
                id: 96,
                CountryList: [
                    {
                        name: "中山市区",
                        id: 892
                    },
                    {
                        name: "古镇镇",
                        id: 4523
                    },
                    {
                        name: "小榄镇",
                        id: 4524
                    },
                    {
                        name: "三乡镇",
                        id: 4525
                    },
                    {
                        name: "三角镇",
                        id: 4526
                    },
                    {
                        name: "西区",
                        id: 4527
                    },
                    {
                        name: "石岐",
                        id: 4528
                    },
                    {
                        name: "环城",
                        id: 4529
                    },
                    {
                        name: "中山港",
                        id: 4530
                    },
                    {
                        name: "高新开发区",
                        id: 4531
                    },
                    {
                        name: "板芙镇",
                        id: 4532
                    },
                    {
                        name: "南头镇",
                        id: 4536
                    },
                    {
                        name: "东区",
                        id: 4537
                    },
                    {
                        name: "坦洲镇",
                        id: 5211
                    },
                    {
                        name: "沙溪镇",
                        id: 5819
                    },
                    {
                        name: "南朗镇",
                        id: 5843
                    },
                    {
                        name: "横栏镇",
                        id: 6129
                    },
                    {
                        name: "黄圃镇",
                        id: 6330
                    }
                ]
            },
            {
                name: "珠海",
                id: 97,
                CountryList: [
                    {
                        name: "珠海市区",
                        id: 893
                    },
                    {
                        name: "香洲区",
                        id: 3766
                    },
                    {
                        name: "斗门区",
                        id: 3769
                    },
                    {
                        name: "金湾区",
                        id: 3772
                    },
                    {
                        name: "拱北区",
                        id: 4581
                    },
                    {
                        name: "吉大区",
                        id: 5248
                    }
                ]
            }
        ]
    },
    {
        name: "广西",
        id: 7,
        CityList: [
            {
                name: "百色",
                id: 98,
                CountryList: [
                    {
                        name: "百色市区",
                        id: 894
                    },
                    {
                        name: "德保县",
                        id: 895
                    },
                    {
                        name: "靖西县",
                        id: 896
                    },
                    {
                        name: "乐业县",
                        id: 897
                    },
                    {
                        name: "凌云县",
                        id: 898
                    },
                    {
                        name: "隆林各族自治县",
                        id: 899
                    },
                    {
                        name: "那坡县",
                        id: 900
                    },
                    {
                        name: "平果县",
                        id: 901
                    },
                    {
                        name: "田东县",
                        id: 902
                    },
                    {
                        name: "田林县",
                        id: 903
                    },
                    {
                        name: "田阳县",
                        id: 904
                    },
                    {
                        name: "西林县",
                        id: 905
                    },
                    {
                        name: "右江区",
                        id: 3631
                    }
                ]
            },
            {
                name: "北海",
                id: 99,
                CountryList: [
                    {
                        name: "北海市区",
                        id: 906
                    },
                    {
                        name: "合浦县",
                        id: 907
                    },
                    {
                        name: "海城区",
                        id: 3608
                    },
                    {
                        name: "银海区",
                        id: 3613
                    },
                    {
                        name: "铁山港区",
                        id: 3617
                    }
                ]
            },
            {
                name: "崇左",
                id: 100,
                CountryList: [
                    {
                        name: "崇左市区",
                        id: 908
                    },
                    {
                        name: "大新县",
                        id: 909
                    },
                    {
                        name: "扶绥县",
                        id: 910
                    },
                    {
                        name: "龙州县",
                        id: 911
                    },
                    {
                        name: "宁明县",
                        id: 912
                    },
                    {
                        name: "凭祥市",
                        id: 913
                    },
                    {
                        name: "天等县",
                        id: 914
                    },
                    {
                        name: "江州区",
                        id: 3627
                    }
                ]
            },
            {
                name: "防城港",
                id: 101,
                CountryList: [
                    {
                        name: "东兴市",
                        id: 915
                    },
                    {
                        name: "防城港市区",
                        id: 916
                    },
                    {
                        name: "上思县",
                        id: 917
                    },
                    {
                        name: "港口区",
                        id: 3619
                    },
                    {
                        name: "防城区",
                        id: 3620
                    }
                ]
            },
            {
                name: "桂林",
                id: 102,
                CountryList: [
                    {
                        name: "恭城瑶族自治县",
                        id: 918
                    },
                    {
                        name: "灌阳县",
                        id: 919
                    },
                    {
                        name: "桂林市区",
                        id: 920
                    },
                    {
                        name: "荔浦县",
                        id: 921
                    },
                    {
                        name: "临桂县",
                        id: 922
                    },
                    {
                        name: "灵川县",
                        id: 923
                    },
                    {
                        name: "龙胜各族自治县",
                        id: 924
                    },
                    {
                        name: "平乐县",
                        id: 925
                    },
                    {
                        name: "全州县",
                        id: 926
                    },
                    {
                        name: "兴安县",
                        id: 927
                    },
                    {
                        name: "阳朔县",
                        id: 928
                    },
                    {
                        name: "永福县",
                        id: 929
                    },
                    {
                        name: "资源县",
                        id: 930
                    },
                    {
                        name: "象山区",
                        id: 3563
                    },
                    {
                        name: "叠彩区",
                        id: 3565
                    },
                    {
                        name: "秀峰区",
                        id: 3567
                    },
                    {
                        name: "七星区",
                        id: 3568
                    },
                    {
                        name: "雁山区",
                        id: 3569
                    },
                    {
                        name: "西城区",
                        id: 6039
                    }
                ]
            },
            {
                name: "贵港",
                id: 103,
                CountryList: [
                    {
                        name: "桂平市",
                        id: 931
                    },
                    {
                        name: "贵港市区",
                        id: 932
                    },
                    {
                        name: "平南县",
                        id: 933
                    },
                    {
                        name: "港北区",
                        id: 3588
                    },
                    {
                        name: "港南区",
                        id: 3590
                    },
                    {
                        name: "覃塘区",
                        id: 3592
                    }
                ]
            },
            {
                name: "河池",
                id: 104,
                CountryList: [
                    {
                        name: "巴马瑶族自治县",
                        id: 934
                    },
                    {
                        name: "大化瑶族自治县",
                        id: 935
                    },
                    {
                        name: "东兰县",
                        id: 936
                    },
                    {
                        name: "都安瑶族自治县",
                        id: 937
                    },
                    {
                        name: "凤山县",
                        id: 938
                    },
                    {
                        name: "河池市区",
                        id: 939
                    },
                    {
                        name: "环江毛南族自治县",
                        id: 940
                    },
                    {
                        name: "罗城仡佬族自治县",
                        id: 941
                    },
                    {
                        name: "南丹县",
                        id: 942
                    },
                    {
                        name: "天峨县",
                        id: 943
                    },
                    {
                        name: "宜州市",
                        id: 944
                    },
                    {
                        name: "金城江区",
                        id: 3635
                    }
                ]
            },
            {
                name: "贺州",
                id: 105,
                CountryList: [
                    {
                        name: "富川瑶族自治县",
                        id: 945
                    },
                    {
                        name: "贺州市区",
                        id: 946
                    },
                    {
                        name: "昭平县",
                        id: 947
                    },
                    {
                        name: "钟山县",
                        id: 948
                    },
                    {
                        name: "八步区",
                        id: 3647
                    }
                ]
            },
            {
                name: "来宾",
                id: 106,
                CountryList: [
                    {
                        name: "合山市",
                        id: 949
                    },
                    {
                        name: "金秀瑶族自治县",
                        id: 950
                    },
                    {
                        name: "来宾市区",
                        id: 951
                    },
                    {
                        name: "武宣县",
                        id: 952
                    },
                    {
                        name: "象州县",
                        id: 953
                    },
                    {
                        name: "忻城县",
                        id: 954
                    },
                    {
                        name: "兴宾区",
                        id: 3644
                    }
                ]
            },
            {
                name: "柳州",
                id: 107,
                CountryList: [
                    {
                        name: "柳城县",
                        id: 955
                    },
                    {
                        name: "柳江县",
                        id: 956
                    },
                    {
                        name: "柳州市区",
                        id: 957
                    },
                    {
                        name: "鹿寨县",
                        id: 958
                    },
                    {
                        name: "融安县",
                        id: 959
                    },
                    {
                        name: "融水苗族自治县",
                        id: 960
                    },
                    {
                        name: "三江侗族自治县",
                        id: 961
                    },
                    {
                        name: "城中区",
                        id: 3573
                    },
                    {
                        name: "鱼峰区",
                        id: 3574
                    },
                    {
                        name: "柳南区",
                        id: 3576
                    },
                    {
                        name: "柳北区",
                        id: 3577
                    }
                ]
            },
            {
                name: "南宁",
                id: 108,
                CountryList: [
                    {
                        name: "宾阳县",
                        id: 962
                    },
                    {
                        name: "横县",
                        id: 963
                    },
                    {
                        name: "隆安县",
                        id: 964
                    },
                    {
                        name: "马山县",
                        id: 965
                    },
                    {
                        name: "南宁市区",
                        id: 966
                    },
                    {
                        name: "上林县",
                        id: 967
                    },
                    {
                        name: "武鸣县",
                        id: 968
                    },
                    {
                        name: "邕宁县",
                        id: 969
                    },
                    {
                        name: "青秀区",
                        id: 3538
                    },
                    {
                        name: "兴宁区",
                        id: 3541
                    },
                    {
                        name: "江南区",
                        id: 3544
                    },
                    {
                        name: "西乡塘区",
                        id: 3545
                    },
                    {
                        name: "良庆区",
                        id: 3547
                    },
                    {
                        name: "邕宁区",
                        id: 3549
                    },
                    {
                        name: "埌东新区",
                        id: 5207
                    },
                    {
                        name: "凭祥市",
                        id: 5217
                    },
                    {
                        name: "大新县",
                        id: 5228
                    }
                ]
            },
            {
                name: "钦州",
                id: 109,
                CountryList: [
                    {
                        name: "灵山县",
                        id: 970
                    },
                    {
                        name: "浦北县",
                        id: 971
                    },
                    {
                        name: "钦州市区",
                        id: 972
                    },
                    {
                        name: "钦南区",
                        id: 3601
                    },
                    {
                        name: "钦北区",
                        id: 3602
                    }
                ]
            },
            {
                name: "梧州",
                id: 110,
                CountryList: [
                    {
                        name: "苍梧县",
                        id: 973
                    },
                    {
                        name: "蒙山县",
                        id: 974
                    },
                    {
                        name: "藤县",
                        id: 975
                    },
                    {
                        name: "梧州市区",
                        id: 976
                    },
                    {
                        name: "岑溪市",
                        id: 977
                    },
                    {
                        name: "万秀区",
                        id: 3581
                    },
                    {
                        name: "蝶山区",
                        id: 3582
                    },
                    {
                        name: "长洲区",
                        id: 3583
                    }
                ]
            },
            {
                name: "玉林",
                id: 111,
                CountryList: [
                    {
                        name: "北流市",
                        id: 978
                    },
                    {
                        name: "博白县",
                        id: 979
                    },
                    {
                        name: "陆川县",
                        id: 980
                    },
                    {
                        name: "容县",
                        id: 981
                    },
                    {
                        name: "兴业县",
                        id: 982
                    },
                    {
                        name: "玉林市区",
                        id: 983
                    },
                    {
                        name: "玉州区",
                        id: 3596
                    }
                ]
            }
        ]
    },
    {
        name: "贵州",
        id: 8,
        CityList: [
            {
                name: "安顺",
                id: 112,
                CountryList: [
                    {
                        name: "安顺市区",
                        id: 984
                    },
                    {
                        name: "关岭布依族苗族自治县",
                        id: 985
                    },
                    {
                        name: "平坝县",
                        id: 986
                    },
                    {
                        name: "普定县",
                        id: 987
                    },
                    {
                        name: "镇宁布依族苗族自治县",
                        id: 988
                    },
                    {
                        name: "紫云苗族布依族自治县",
                        id: 989
                    },
                    {
                        name: "西秀区",
                        id: 3679
                    }
                ]
            },
            {
                name: "毕节",
                id: 113,
                CountryList: [
                    {
                        name: "毕节市区",
                        id: 990
                    },
                    {
                        name: "大方县",
                        id: 991
                    },
                    {
                        name: "赫章县",
                        id: 992
                    },
                    {
                        name: "金沙县",
                        id: 993
                    },
                    {
                        name: "纳雍县",
                        id: 994
                    },
                    {
                        name: "黔西县",
                        id: 995
                    },
                    {
                        name: "威宁彝族回族苗族自治县",
                        id: 996
                    },
                    {
                        name: "织金县",
                        id: 997
                    },
                    {
                        name: "毕节地区",
                        id: 3685
                    }
                ]
            },
            {
                name: "贵阳",
                id: 114,
                CountryList: [
                    {
                        name: "贵阳市区",
                        id: 998
                    },
                    {
                        name: "开阳县",
                        id: 999
                    },
                    {
                        name: "清镇市",
                        id: 1000
                    },
                    {
                        name: "息烽县",
                        id: 1001
                    },
                    {
                        name: "修文县",
                        id: 1002
                    },
                    {
                        name: "乌当区",
                        id: 3641
                    },
                    {
                        name: "南明区",
                        id: 3642
                    },
                    {
                        name: "云岩区",
                        id: 3643
                    },
                    {
                        name: "花溪区",
                        id: 3646
                    },
                    {
                        name: "白云区",
                        id: 3649
                    },
                    {
                        name: "小河区",
                        id: 3651
                    },
                    {
                        name: "金阳新区",
                        id: 6087
                    }
                ]
            },
            {
                name: "六盘水",
                id: 115,
                CountryList: [
                    {
                        name: "六盘水市",
                        id: 1003
                    },
                    {
                        name: "六枝特区",
                        id: 1004
                    },
                    {
                        name: "盘县",
                        id: 1005
                    },
                    {
                        name: "水城县",
                        id: 1006
                    },
                    {
                        name: "钟山区",
                        id: 3658
                    }
                ]
            },
            {
                name: "黔东南",
                id: 116,
                CountryList: [
                    {
                        name: "从江县",
                        id: 1007
                    },
                    {
                        name: "丹寨县",
                        id: 1008
                    },
                    {
                        name: "黄平县",
                        id: 1009
                    },
                    {
                        name: "剑河县",
                        id: 1010
                    },
                    {
                        name: "锦屏县",
                        id: 1011
                    },
                    {
                        name: "凯里市",
                        id: 1012
                    },
                    {
                        name: "雷山县",
                        id: 1013
                    },
                    {
                        name: "黎平县",
                        id: 1014
                    },
                    {
                        name: "麻江县",
                        id: 1015
                    },
                    {
                        name: "三穗县",
                        id: 1016
                    },
                    {
                        name: "施秉县",
                        id: 1017
                    },
                    {
                        name: "台江县",
                        id: 1018
                    },
                    {
                        name: "天柱县",
                        id: 1019
                    },
                    {
                        name: "镇远县",
                        id: 1020
                    },
                    {
                        name: "岑巩县",
                        id: 1021
                    },
                    {
                        name: "榕江县",
                        id: 1022
                    },
                    {
                        name: "黔东南苗族侗族自治州",
                        id: 3698
                    }
                ]
            },
            {
                name: "黔南",
                id: 117,
                CountryList: [
                    {
                        name: "长顺县",
                        id: 1023
                    },
                    {
                        name: "都匀市",
                        id: 1024
                    },
                    {
                        name: "独山县",
                        id: 1025
                    },
                    {
                        name: "福泉市",
                        id: 1026
                    },
                    {
                        name: "贵定县",
                        id: 1027
                    },
                    {
                        name: "惠水县",
                        id: 1028
                    },
                    {
                        name: "荔波县",
                        id: 1029
                    },
                    {
                        name: "龙里县",
                        id: 1030
                    },
                    {
                        name: "罗甸县",
                        id: 1031
                    },
                    {
                        name: "平塘县",
                        id: 1032
                    },
                    {
                        name: "三都水族自治县",
                        id: 1033
                    },
                    {
                        name: "瓮安县",
                        id: 1034
                    },
                    {
                        name: "黔南布依族苗族自治州",
                        id: 3703
                    }
                ]
            },
            {
                name: "黔西南",
                id: 118,
                CountryList: [
                    {
                        name: "安龙县",
                        id: 1035
                    },
                    {
                        name: "册亨县",
                        id: 1036
                    },
                    {
                        name: "普安县",
                        id: 1037
                    },
                    {
                        name: "晴隆县",
                        id: 1038
                    },
                    {
                        name: "望谟县",
                        id: 1039
                    },
                    {
                        name: "兴仁县",
                        id: 1040
                    },
                    {
                        name: "兴义市",
                        id: 1041
                    },
                    {
                        name: "贞丰县",
                        id: 1042
                    },
                    {
                        name: "黔西南布依族苗族自治州",
                        id: 3710
                    }
                ]
            },
            {
                name: "铜仁",
                id: 119,
                CountryList: [
                    {
                        name: "德江县",
                        id: 1043
                    },
                    {
                        name: "江口县",
                        id: 1044
                    },
                    {
                        name: "石阡县",
                        id: 1045
                    },
                    {
                        name: "思南县",
                        id: 1046
                    },
                    {
                        name: "松桃苗族自治县",
                        id: 1047
                    },
                    {
                        name: "铜仁市区",
                        id: 1048
                    },
                    {
                        name: "万山特区",
                        id: 1049
                    },
                    {
                        name: "沿河土家族自治县",
                        id: 1050
                    },
                    {
                        name: "印江土家族苗族自治县",
                        id: 1051
                    },
                    {
                        name: "玉屏侗族自治县",
                        id: 1052
                    },
                    {
                        name: "铜仁地区",
                        id: 3693
                    },
                    {
                        name: "碧江区",
                        id: 6342
                    }
                ]
            },
            {
                name: "遵义",
                id: 120,
                CountryList: [
                    {
                        name: "赤水市",
                        id: 1053
                    },
                    {
                        name: "道真仡佬族苗族自治县",
                        id: 1054
                    },
                    {
                        name: "凤冈县",
                        id: 1055
                    },
                    {
                        name: "仁怀市",
                        id: 1056
                    },
                    {
                        name: "绥阳县",
                        id: 1057
                    },
                    {
                        name: "桐梓县",
                        id: 1058
                    },
                    {
                        name: "务川仡佬族苗族自治县",
                        id: 1059
                    },
                    {
                        name: "习水县",
                        id: 1060
                    },
                    {
                        name: "余庆县",
                        id: 1061
                    },
                    {
                        name: "正安县",
                        id: 1062
                    },
                    {
                        name: "遵义市区",
                        id: 1063
                    },
                    {
                        name: "遵义县",
                        id: 1064
                    },
                    {
                        name: "湄潭县",
                        id: 1065
                    },
                    {
                        name: "红花岗区",
                        id: 3666
                    },
                    {
                        name: "汇川区",
                        id: 3670
                    }
                ]
            }
        ]
    },
    {
        name: "海南",
        id: 9,
        CityList: [
            {
                name: "海口",
                id: 127,
                CountryList: [
                    {
                        name: "海口市",
                        id: 1072
                    },
                    {
                        name: "龙华区",
                        id: 3519
                    },
                    {
                        name: "秀英区",
                        id: 3522
                    },
                    {
                        name: "琼山区",
                        id: 3524
                    },
                    {
                        name: "美兰区",
                        id: 3526
                    }
                ]
            },
            {
                name: "乐东",
                id: 128,
                CountryList: [
                    {
                        name: "乐东黎族自治县",
                        id: 1073
                    }
                ]
            },
            {
                name: "临高县",
                id: 129,
                CountryList: [
                    {
                        name: "临高县",
                        id: 1074
                    }
                ]
            },
            {
                name: "陵水",
                id: 130,
                CountryList: [
                    {
                        name: "陵水黎族自治县",
                        id: 1075
                    }
                ]
            },
            {
                name: "琼海",
                id: 131,
                CountryList: [
                    {
                        name: "琼海市",
                        id: 1076
                    }
                ]
            },
            {
                name: "琼中",
                id: 132,
                CountryList: [
                    {
                        name: "琼中黎族苗族自治县",
                        id: 1077
                    }
                ]
            },
            {
                name: "三亚",
                id: 133,
                CountryList: [
                    {
                        name: "三亚市区",
                        id: 1078
                    },
                    {
                        name: "亚龙湾",
                        id: 5134
                    },
                    {
                        name: "大东海",
                        id: 5135
                    },
                    {
                        name: "三亚湾",
                        id: 5150
                    },
                    {
                        name: "海棠湾",
                        id: 6092
                    },
                    {
                        name: "河东区",
                        id: 6128
                    }
                ]
            },
            {
                name: "屯昌县",
                id: 134,
                CountryList: [
                    {
                        name: "屯昌县",
                        id: 1079
                    }
                ]
            },
            {
                name: "万宁",
                id: 135,
                CountryList: [
                    {
                        name: "万宁市",
                        id: 1080
                    },
                    {
                        name: "兴隆县",
                        id: 5810
                    }
                ]
            },
            {
                name: "文昌",
                id: 136,
                CountryList: [
                    {
                        name: "文昌市",
                        id: 1081
                    }
                ]
            },
            {
                name: "五指山",
                id: 137,
                CountryList: [
                    {
                        name: "五指山市",
                        id: 1082
                    }
                ]
            },
            {
                name: "儋州",
                id: 138,
                CountryList: [
                    {
                        name: "儋州市",
                        id: 1083
                    },
                    {
                        name: "洋浦经济开发区",
                        id: 4546
                    }
                ]
            },
            {
                name: "白沙",
                id: 121,
                CountryList: [
                    {
                        name: "白沙黎族自治县",
                        id: 1066
                    }
                ]
            },
            {
                name: "保亭",
                id: 122,
                CountryList: [
                    {
                        name: "保亭黎族苗族自治县",
                        id: 1067
                    }
                ]
            },
            {
                name: "昌江",
                id: 123,
                CountryList: [
                    {
                        name: "昌江黎族自治县",
                        id: 1068
                    }
                ]
            },
            {
                name: "澄迈县",
                id: 124,
                CountryList: [
                    {
                        name: "澄迈县",
                        id: 1069
                    }
                ]
            },
            {
                name: "定安县",
                id: 125,
                CountryList: [
                    {
                        name: "定安县",
                        id: 1070
                    }
                ]
            },
            {
                name: "东方",
                id: 126,
                CountryList: [
                    {
                        name: "东方市",
                        id: 1071
                    }
                ]
            },
            {
                name: "三沙市",
                id: 6321,
                CountryList: []
            }
        ]
    },
    {
        name: "河北",
        id: 10,
        CityList: [
            {
                name: "保定",
                id: 139,
                CountryList: [
                    {
                        name: "安国市",
                        id: 1084
                    },
                    {
                        name: "安新县",
                        id: 1085
                    },
                    {
                        name: "保定市区",
                        id: 1086
                    },
                    {
                        name: "博野县",
                        id: 1087
                    },
                    {
                        name: "定兴县",
                        id: 1088
                    },
                    {
                        name: "定州市",
                        id: 1089
                    },
                    {
                        name: "阜平县",
                        id: 1090
                    },
                    {
                        name: "高碑店市",
                        id: 1091
                    },
                    {
                        name: "高阳县",
                        id: 1092
                    },
                    {
                        name: "满城县",
                        id: 1093
                    },
                    {
                        name: "清苑县",
                        id: 1094
                    },
                    {
                        name: "曲阳县",
                        id: 1095
                    },
                    {
                        name: "容城县",
                        id: 1096
                    },
                    {
                        name: "顺平县",
                        id: 1097
                    },
                    {
                        name: "唐县",
                        id: 1098
                    },
                    {
                        name: "望都县",
                        id: 1099
                    },
                    {
                        name: "雄县",
                        id: 1100
                    },
                    {
                        name: "徐水县",
                        id: 1101
                    },
                    {
                        name: "易县",
                        id: 1102
                    },
                    {
                        name: "涞水县",
                        id: 1103
                    },
                    {
                        name: "涞源县",
                        id: 1104
                    },
                    {
                        name: "涿州市",
                        id: 1105
                    },
                    {
                        name: "蠡县",
                        id: 1106
                    },
                    {
                        name: "新市区",
                        id: 3324
                    },
                    {
                        name: "北市区",
                        id: 3325
                    },
                    {
                        name: "南市区",
                        id: 3326
                    },
                    {
                        name: "高新技术产业区",
                        id: 5194
                    }
                ]
            },
            {
                name: "沧州",
                id: 140,
                CountryList: [
                    {
                        name: "泊头市",
                        id: 1107
                    },
                    {
                        name: "沧县",
                        id: 1108
                    },
                    {
                        name: "沧州市区",
                        id: 1109
                    },
                    {
                        name: "东光县",
                        id: 1110
                    },
                    {
                        name: "海兴县",
                        id: 1111
                    },
                    {
                        name: "河间市",
                        id: 1112
                    },
                    {
                        name: "黄骅市",
                        id: 1113
                    },
                    {
                        name: "孟村回族自治县",
                        id: 1114
                    },
                    {
                        name: "南皮县",
                        id: 1115
                    },
                    {
                        name: "青县",
                        id: 1116
                    },
                    {
                        name: "任丘市",
                        id: 1117
                    },
                    {
                        name: "肃宁县",
                        id: 1118
                    },
                    {
                        name: "吴桥县",
                        id: 1119
                    },
                    {
                        name: "献县",
                        id: 1120
                    },
                    {
                        name: "盐山县",
                        id: 1121
                    },
                    {
                        name: "运河区",
                        id: 3328
                    },
                    {
                        name: "新华区",
                        id: 3329
                    }
                ]
            },
            {
                name: "承德",
                id: 141,
                CountryList: [
                    {
                        name: "承德市区",
                        id: 1122
                    },
                    {
                        name: "承德县",
                        id: 1123
                    },
                    {
                        name: "丰宁满族自治县",
                        id: 1124
                    },
                    {
                        name: "宽城满族自治县",
                        id: 1125
                    },
                    {
                        name: "隆化县",
                        id: 1126
                    },
                    {
                        name: "滦平县",
                        id: 1127
                    },
                    {
                        name: "平泉县",
                        id: 1128
                    },
                    {
                        name: "围场满族蒙古族自治县",
                        id: 1129
                    },
                    {
                        name: "兴隆县",
                        id: 1130
                    },
                    {
                        name: "双桥区",
                        id: 3310
                    },
                    {
                        name: "双滦区",
                        id: 3311
                    },
                    {
                        name: "鹰手营子矿区",
                        id: 3312
                    }
                ]
            },
            {
                name: "邯郸",
                id: 142,
                CountryList: [
                    {
                        name: "成安县",
                        id: 1131
                    },
                    {
                        name: "磁县",
                        id: 1132
                    },
                    {
                        name: "大名县",
                        id: 1133
                    },
                    {
                        name: "肥乡县",
                        id: 1134
                    },
                    {
                        name: "馆陶县",
                        id: 1135
                    },
                    {
                        name: "广平县",
                        id: 1136
                    },
                    {
                        name: "邯郸市区",
                        id: 1137
                    },
                    {
                        name: "邯郸县",
                        id: 1138
                    },
                    {
                        name: "鸡泽县",
                        id: 1139
                    },
                    {
                        name: "临漳县",
                        id: 1140
                    },
                    {
                        name: "邱县",
                        id: 1141
                    },
                    {
                        name: "曲周县",
                        id: 1142
                    },
                    {
                        name: "涉县",
                        id: 1143
                    },
                    {
                        name: "魏县",
                        id: 1144
                    },
                    {
                        name: "武安市",
                        id: 1145
                    },
                    {
                        name: "永年县",
                        id: 1146
                    },
                    {
                        name: "丛台区",
                        id: 3332
                    },
                    {
                        name: "邯山区",
                        id: 3333
                    },
                    {
                        name: "复兴区",
                        id: 3334
                    },
                    {
                        name: "峰峰矿区",
                        id: 3335
                    }
                ]
            },
            {
                name: "衡水",
                id: 143,
                CountryList: [
                    {
                        name: "安平县",
                        id: 1147
                    },
                    {
                        name: "阜城县",
                        id: 1148
                    },
                    {
                        name: "故城县",
                        id: 1149
                    },
                    {
                        name: "衡水市区",
                        id: 1150
                    },
                    {
                        name: "冀州市",
                        id: 1151
                    },
                    {
                        name: "景县",
                        id: 1152
                    },
                    {
                        name: "饶阳县",
                        id: 1153
                    },
                    {
                        name: "深州市",
                        id: 1154
                    },
                    {
                        name: "武强县",
                        id: 1155
                    },
                    {
                        name: "武邑县",
                        id: 1156
                    },
                    {
                        name: "枣强县",
                        id: 1157
                    },
                    {
                        name: "桃城区",
                        id: 3327
                    }
                ]
            },
            {
                name: "廊坊",
                id: 144,
                CountryList: [
                    {
                        name: "霸州市",
                        id: 1158
                    },
                    {
                        name: "大厂回族自治县",
                        id: 1159
                    },
                    {
                        name: "大城县",
                        id: 1160
                    },
                    {
                        name: "固安县",
                        id: 1161
                    },
                    {
                        name: "廊坊市区",
                        id: 1162
                    },
                    {
                        name: "三河市",
                        id: 1163
                    },
                    {
                        name: "文安县",
                        id: 1164
                    },
                    {
                        name: "香河县",
                        id: 1165
                    },
                    {
                        name: "永清县",
                        id: 1166
                    },
                    {
                        name: "安次区",
                        id: 3322
                    },
                    {
                        name: "广阳区",
                        id: 3323
                    },
                    {
                        name: "经济技术开发区",
                        id: 6050
                    }
                ]
            },
            {
                name: "秦皇岛",
                id: 145,
                CountryList: [
                    {
                        name: "昌黎县",
                        id: 1167
                    },
                    {
                        name: "抚宁县",
                        id: 1168
                    },
                    {
                        name: "卢龙县",
                        id: 1169
                    },
                    {
                        name: "秦皇岛市区",
                        id: 1170
                    },
                    {
                        name: "青龙满族自治县",
                        id: 1171
                    },
                    {
                        name: "海港区",
                        id: 3313
                    },
                    {
                        name: "山海关区",
                        id: 3314
                    },
                    {
                        name: "北戴河区",
                        id: 3315
                    },
                    {
                        name: "南戴河",
                        id: 6090
                    }
                ]
            },
            {
                name: "石家庄",
                id: 146,
                CountryList: [
                    {
                        name: "高邑县",
                        id: 1172
                    },
                    {
                        name: "晋州市",
                        id: 1173
                    },
                    {
                        name: "井陉县",
                        id: 1174
                    },
                    {
                        name: "灵寿县",
                        id: 1175
                    },
                    {
                        name: "鹿泉市",
                        id: 1176
                    },
                    {
                        name: "平山县",
                        id: 1177
                    },
                    {
                        name: "深泽县",
                        id: 1178
                    },
                    {
                        name: "石家庄市区",
                        id: 1179
                    },
                    {
                        name: "无极县",
                        id: 1180
                    },
                    {
                        name: "辛集市",
                        id: 1181
                    },
                    {
                        name: "新乐市",
                        id: 1182
                    },
                    {
                        name: "行唐县",
                        id: 1183
                    },
                    {
                        name: "元氏县",
                        id: 1184
                    },
                    {
                        name: "赞皇县",
                        id: 1185
                    },
                    {
                        name: "赵县",
                        id: 1186
                    },
                    {
                        name: "正定县",
                        id: 1187
                    },
                    {
                        name: "藁城市",
                        id: 1188
                    },
                    {
                        name: "栾城县",
                        id: 1189
                    },
                    {
                        name: "长安区",
                        id: 3298
                    },
                    {
                        name: "桥东区",
                        id: 3299
                    },
                    {
                        name: "桥西区",
                        id: 3300
                    },
                    {
                        name: "新华区",
                        id: 3301
                    },
                    {
                        name: "裕华区",
                        id: 3302
                    },
                    {
                        name: "井陉矿区",
                        id: 3303
                    },
                    {
                        name: "高新区",
                        id: 5148
                    }
                ]
            },
            {
                name: "唐山",
                id: 147,
                CountryList: [
                    {
                        name: "乐亭县",
                        id: 1190
                    },
                    {
                        name: "滦南县",
                        id: 1191
                    },
                    {
                        name: "滦县",
                        id: 1192
                    },
                    {
                        name: "迁安市",
                        id: 1193
                    },
                    {
                        name: "迁西县",
                        id: 1194
                    },
                    {
                        name: "唐山市区",
                        id: 1196
                    },
                    {
                        name: "玉田县",
                        id: 1197
                    },
                    {
                        name: "遵化市",
                        id: 1198
                    },
                    {
                        name: "路北区",
                        id: 3316
                    },
                    {
                        name: "路南区",
                        id: 3317
                    },
                    {
                        name: "古冶区",
                        id: 3318
                    },
                    {
                        name: "开平区",
                        id: 3319
                    },
                    {
                        name: "丰润区",
                        id: 3320
                    },
                    {
                        name: "丰南区",
                        id: 3321
                    },
                    {
                        name: "曹妃甸区",
                        id: 6345
                    }
                ]
            },
            {
                name: "邢台",
                id: 148,
                CountryList: [
                    {
                        name: "柏乡县",
                        id: 1199
                    },
                    {
                        name: "广宗县",
                        id: 1200
                    },
                    {
                        name: "巨鹿县",
                        id: 1201
                    },
                    {
                        name: "临城县",
                        id: 1202
                    },
                    {
                        name: "临西县",
                        id: 1203
                    },
                    {
                        name: "隆尧县",
                        id: 1204
                    },
                    {
                        name: "南宫市",
                        id: 1205
                    },
                    {
                        name: "南和县",
                        id: 1206
                    },
                    {
                        name: "内丘县",
                        id: 1207
                    },
                    {
                        name: "宁晋县",
                        id: 1208
                    },
                    {
                        name: "平乡县",
                        id: 1209
                    },
                    {
                        name: "清河县",
                        id: 1210
                    },
                    {
                        name: "任县",
                        id: 1211
                    },
                    {
                        name: "沙河市",
                        id: 1212
                    },
                    {
                        name: "威县",
                        id: 1213
                    },
                    {
                        name: "新河县",
                        id: 1214
                    },
                    {
                        name: "邢台市区",
                        id: 1215
                    },
                    {
                        name: "邢台县",
                        id: 1216
                    },
                    {
                        name: "桥东区",
                        id: 3330
                    },
                    {
                        name: "桥西区",
                        id: 3331
                    }
                ]
            },
            {
                name: "张家口",
                id: 149,
                CountryList: [
                    {
                        name: "赤城县",
                        id: 1217
                    },
                    {
                        name: "崇礼县",
                        id: 1218
                    },
                    {
                        name: "沽源县",
                        id: 1219
                    },
                    {
                        name: "怀安县",
                        id: 1220
                    },
                    {
                        name: "怀来县",
                        id: 1221
                    },
                    {
                        name: "康保县",
                        id: 1222
                    },
                    {
                        name: "尚义县",
                        id: 1223
                    },
                    {
                        name: "万全县",
                        id: 1224
                    },
                    {
                        name: "蔚县",
                        id: 1225
                    },
                    {
                        name: "宣化县",
                        id: 1226
                    },
                    {
                        name: "阳原县",
                        id: 1227
                    },
                    {
                        name: "张北县",
                        id: 1228
                    },
                    {
                        name: "张家口市区",
                        id: 1229
                    },
                    {
                        name: "涿鹿县",
                        id: 1230
                    },
                    {
                        name: "桥西区",
                        id: 3306
                    },
                    {
                        name: "桥东区",
                        id: 3307
                    },
                    {
                        name: "宣化区",
                        id: 3308
                    },
                    {
                        name: "下花园区",
                        id: 3309
                    },
                    {
                        name: "长城岭滑雪场",
                        id: 5839
                    },
                    {
                        name: "高新区",
                        id: 6091
                    }
                ]
            }
        ]
    },
    {
        name: "河南",
        id: 11,
        CityList: [
            {
                name: "安阳",
                id: 150,
                CountryList: [
                    {
                        name: "安阳市区",
                        id: 1231
                    },
                    {
                        name: "安阳县",
                        id: 1232
                    },
                    {
                        name: "滑县",
                        id: 1233
                    },
                    {
                        name: "林州市",
                        id: 1234
                    },
                    {
                        name: "内黄县",
                        id: 1235
                    },
                    {
                        name: "汤阴县",
                        id: 1236
                    },
                    {
                        name: "北关区",
                        id: 3793
                    },
                    {
                        name: "文峰区",
                        id: 3797
                    },
                    {
                        name: "殷都区",
                        id: 3799
                    },
                    {
                        name: "龙安区",
                        id: 3804
                    }
                ]
            },
            {
                name: "鹤壁",
                id: 151,
                CountryList: [
                    {
                        name: "鹤壁市区",
                        id: 1237
                    },
                    {
                        name: "浚县",
                        id: 1238
                    },
                    {
                        name: "淇县",
                        id: 1239
                    },
                    {
                        name: "淇滨区",
                        id: 3812
                    },
                    {
                        name: "山城区",
                        id: 3815
                    },
                    {
                        name: "鹤山区",
                        id: 3820
                    }
                ]
            },
            {
                name: "济源",
                id: 152,
                CountryList: [
                    {
                        name: "济源市",
                        id: 1240
                    }
                ]
            },
            {
                name: "焦作",
                id: 153,
                CountryList: [
                    {
                        name: "博爱县",
                        id: 1241
                    },
                    {
                        name: "焦作市区",
                        id: 1242
                    },
                    {
                        name: "孟州市",
                        id: 1243
                    },
                    {
                        name: "沁阳市",
                        id: 1244
                    },
                    {
                        name: "温县",
                        id: 1245
                    },
                    {
                        name: "武陟县",
                        id: 1246
                    },
                    {
                        name: "修武县",
                        id: 1247
                    },
                    {
                        name: "解放区",
                        id: 3840
                    },
                    {
                        name: "山阳区",
                        id: 3844
                    },
                    {
                        name: "中站区",
                        id: 3846
                    },
                    {
                        name: "马村区",
                        id: 3851
                    },
                    {
                        name: "高新区",
                        id: 5239
                    }
                ]
            },
            {
                name: "开封",
                id: 154,
                CountryList: [
                    {
                        name: "开封市区",
                        id: 1248
                    },
                    {
                        name: "开封县",
                        id: 1249
                    },
                    {
                        name: "兰考县",
                        id: 1250
                    },
                    {
                        name: "通许县",
                        id: 1251
                    },
                    {
                        name: "尉氏县",
                        id: 1252
                    },
                    {
                        name: "杞县",
                        id: 1253
                    },
                    {
                        name: "鼓楼区",
                        id: 3858
                    },
                    {
                        name: "龙亭区",
                        id: 3861
                    },
                    {
                        name: "顺河回族区",
                        id: 3867
                    },
                    {
                        name: "禹王台区",
                        id: 3869
                    },
                    {
                        name: "金明区",
                        id: 3873
                    },
                    {
                        name: "开发区",
                        id: 5147
                    }
                ]
            },
            {
                name: "洛阳",
                id: 155,
                CountryList: [
                    {
                        name: "洛宁县",
                        id: 1254
                    },
                    {
                        name: "洛阳市区",
                        id: 1255
                    },
                    {
                        name: "孟津县",
                        id: 1256
                    },
                    {
                        name: "汝阳县",
                        id: 1257
                    },
                    {
                        name: "新安县",
                        id: 1258
                    },
                    {
                        name: "伊川县",
                        id: 1259
                    },
                    {
                        name: "宜阳县",
                        id: 1260
                    },
                    {
                        name: "偃师市",
                        id: 1261
                    },
                    {
                        name: "嵩县",
                        id: 1262
                    },
                    {
                        name: "栾川县",
                        id: 1263
                    },
                    {
                        name: "西工区",
                        id: 3883
                    },
                    {
                        name: "老城区",
                        id: 3887
                    },
                    {
                        name: "瀍河回族区",
                        id: 3890
                    },
                    {
                        name: "涧西区",
                        id: 3893
                    },
                    {
                        name: "吉利区",
                        id: 3901
                    },
                    {
                        name: "洛龙区",
                        id: 3905
                    },
                    {
                        name: "洛南新区",
                        id: 5827
                    }
                ]
            },
            {
                name: "南阳",
                id: 156,
                CountryList: [
                    {
                        name: "邓州市",
                        id: 1264
                    },
                    {
                        name: "方城县",
                        id: 1265
                    },
                    {
                        name: "南阳市区",
                        id: 1266
                    },
                    {
                        name: "南召县",
                        id: 1267
                    },
                    {
                        name: "内乡县",
                        id: 1268
                    },
                    {
                        name: "社旗县",
                        id: 1269
                    },
                    {
                        name: "唐河县",
                        id: 1270
                    },
                    {
                        name: "桐柏县",
                        id: 1271
                    },
                    {
                        name: "西峡县",
                        id: 1272
                    },
                    {
                        name: "新野县",
                        id: 1273
                    },
                    {
                        name: "镇平县",
                        id: 1274
                    },
                    {
                        name: "淅川县",
                        id: 1275
                    },
                    {
                        name: "卧龙区",
                        id: 3918
                    },
                    {
                        name: "宛城区",
                        id: 3920
                    }
                ]
            },
            {
                name: "平顶山",
                id: 157,
                CountryList: [
                    {
                        name: "宝丰县",
                        id: 1276
                    },
                    {
                        name: "鲁山县",
                        id: 1277
                    },
                    {
                        name: "平顶山市区",
                        id: 1278
                    },
                    {
                        name: "汝州市",
                        id: 1279
                    },
                    {
                        name: "舞钢市",
                        id: 1280
                    },
                    {
                        name: "叶县",
                        id: 1281
                    },
                    {
                        name: "郏县",
                        id: 1282
                    },
                    {
                        name: "新华区",
                        id: 3930
                    },
                    {
                        name: "卫东区",
                        id: 3934
                    },
                    {
                        name: "湛河区",
                        id: 3963
                    },
                    {
                        name: "石龙区",
                        id: 3966
                    }
                ]
            },
            {
                name: "三门峡",
                id: 158,
                CountryList: [
                    {
                        name: "灵宝市",
                        id: 1283
                    },
                    {
                        name: "卢氏县",
                        id: 1284
                    },
                    {
                        name: "三门峡市区",
                        id: 1285
                    },
                    {
                        name: "陕县",
                        id: 1286
                    },
                    {
                        name: "义马市",
                        id: 1287
                    },
                    {
                        name: "渑池县",
                        id: 1288
                    },
                    {
                        name: "湖滨区",
                        id: 3499
                    }
                ]
            },
            {
                name: "商丘",
                id: 159,
                CountryList: [
                    {
                        name: "民权县",
                        id: 1289
                    },
                    {
                        name: "宁陵县",
                        id: 1290
                    },
                    {
                        name: "商丘市区",
                        id: 1291
                    },
                    {
                        name: "夏邑县",
                        id: 1292
                    },
                    {
                        name: "永城市",
                        id: 1293
                    },
                    {
                        name: "虞城县",
                        id: 1294
                    },
                    {
                        name: "柘城县",
                        id: 1295
                    },
                    {
                        name: "睢县",
                        id: 1296
                    },
                    {
                        name: "梁园区",
                        id: 3973
                    },
                    {
                        name: "睢阳区",
                        id: 3977
                    }
                ]
            },
            {
                name: "新乡",
                id: 160,
                CountryList: [
                    {
                        name: "长垣县",
                        id: 1297
                    },
                    {
                        name: "封丘县",
                        id: 1298
                    },
                    {
                        name: "辉县市",
                        id: 1299
                    },
                    {
                        name: "获嘉县",
                        id: 1300
                    },
                    {
                        name: "卫辉市",
                        id: 1301
                    },
                    {
                        name: "新乡市区",
                        id: 1302
                    },
                    {
                        name: "新乡县",
                        id: 1303
                    },
                    {
                        name: "延津县",
                        id: 1304
                    },
                    {
                        name: "原阳县",
                        id: 1305
                    },
                    {
                        name: "卫滨区",
                        id: 3984
                    },
                    {
                        name: "红旗区",
                        id: 3986
                    },
                    {
                        name: "凤泉区",
                        id: 3988
                    },
                    {
                        name: "牧野区",
                        id: 3989
                    }
                ]
            },
            {
                name: "信阳",
                id: 161,
                CountryList: [
                    {
                        name: "固始县",
                        id: 1306
                    },
                    {
                        name: "光山县",
                        id: 1307
                    },
                    {
                        name: "淮滨县",
                        id: 1308
                    },
                    {
                        name: "罗山县",
                        id: 1309
                    },
                    {
                        name: "商城县",
                        id: 1310
                    },
                    {
                        name: "息县",
                        id: 1311
                    },
                    {
                        name: "新县",
                        id: 1312
                    },
                    {
                        name: "信阳市区",
                        id: 1313
                    },
                    {
                        name: "潢川县",
                        id: 1314
                    },
                    {
                        name: "平桥区",
                        id: 3997
                    },
                    {
                        name: "狮河区",
                        id: 4588
                    }
                ]
            },
            {
                name: "许昌",
                id: 162,
                CountryList: [
                    {
                        name: "长葛市",
                        id: 1315
                    },
                    {
                        name: "襄城县",
                        id: 1316
                    },
                    {
                        name: "许昌市区",
                        id: 1317
                    },
                    {
                        name: "许昌县",
                        id: 1318
                    },
                    {
                        name: "禹州市",
                        id: 1319
                    },
                    {
                        name: "鄢陵县",
                        id: 1320
                    },
                    {
                        name: "魏都区",
                        id: 4002
                    },
                    {
                        name: "东城区",
                        id: 6040
                    }
                ]
            },
            {
                name: "郑州",
                id: 163,
                CountryList: [
                    {
                        name: "登封市",
                        id: 1321
                    },
                    {
                        name: "巩义市",
                        id: 1322
                    },
                    {
                        name: "新密市",
                        id: 1323
                    },
                    {
                        name: "新郑市",
                        id: 1324
                    },
                    {
                        name: "郑州市区",
                        id: 1325
                    },
                    {
                        name: "中牟县",
                        id: 1326
                    },
                    {
                        name: "荥阳市",
                        id: 1327
                    },
                    {
                        name: "中原区",
                        id: 3483
                    },
                    {
                        name: "上街区",
                        id: 3487
                    },
                    {
                        name: "二七区",
                        id: 4028
                    },
                    {
                        name: "管城回族区",
                        id: 4034
                    },
                    {
                        name: "金水区",
                        id: 4036
                    },
                    {
                        name: "惠济区",
                        id: 4039
                    },
                    {
                        name: "高新区",
                        id: 5251
                    },
                    {
                        name: "郑东新区",
                        id: 6124
                    }
                ]
            },
            {
                name: "周口",
                id: 164,
                CountryList: [
                    {
                        name: "郸城县",
                        id: 1328
                    },
                    {
                        name: "扶沟县",
                        id: 1329
                    },
                    {
                        name: "淮阳县",
                        id: 1330
                    },
                    {
                        name: "鹿邑县",
                        id: 1331
                    },
                    {
                        name: "商水县",
                        id: 1332
                    },
                    {
                        name: "沈丘县",
                        id: 1333
                    },
                    {
                        name: "太康县",
                        id: 1334
                    },
                    {
                        name: "西华县",
                        id: 1335
                    },
                    {
                        name: "项城市",
                        id: 1336
                    },
                    {
                        name: "周口市区",
                        id: 1337
                    },
                    {
                        name: "川汇区",
                        id: 4006
                    }
                ]
            },
            {
                name: "驻马店",
                id: 165,
                CountryList: [
                    {
                        name: "泌阳县",
                        id: 1338
                    },
                    {
                        name: "平舆县",
                        id: 1339
                    },
                    {
                        name: "确山县",
                        id: 1340
                    },
                    {
                        name: "汝南县",
                        id: 1341
                    },
                    {
                        name: "上蔡县",
                        id: 1342
                    },
                    {
                        name: "遂平县",
                        id: 1343
                    },
                    {
                        name: "西平县",
                        id: 1344
                    },
                    {
                        name: "新蔡县",
                        id: 1345
                    },
                    {
                        name: "正阳县",
                        id: 1346
                    },
                    {
                        name: "驻马店市区",
                        id: 1347
                    },
                    {
                        name: "驿城区",
                        id: 4009
                    }
                ]
            },
            {
                name: "漯河",
                id: 166,
                CountryList: [
                    {
                        name: "临颍县",
                        id: 1348
                    },
                    {
                        name: "舞阳县",
                        id: 1349
                    },
                    {
                        name: "郾城县",
                        id: 1350
                    },
                    {
                        name: "漯河市区",
                        id: 1351
                    },
                    {
                        name: "源汇区",
                        id: 4016
                    },
                    {
                        name: "郾城区",
                        id: 4018
                    },
                    {
                        name: "召陵区",
                        id: 4020
                    }
                ]
            },
            {
                name: "濮阳",
                id: 167,
                CountryList: [
                    {
                        name: "范县",
                        id: 1352
                    },
                    {
                        name: "南乐县",
                        id: 1353
                    },
                    {
                        name: "清丰县",
                        id: 1354
                    },
                    {
                        name: "台前县",
                        id: 1355
                    },
                    {
                        name: "濮阳市区",
                        id: 1356
                    },
                    {
                        name: "濮阳县",
                        id: 1357
                    },
                    {
                        name: "华龙区",
                        id: 4022
                    },
                    {
                        name: "开发区",
                        id: 4521
                    }
                ]
            }
        ]
    },
    {
        name: "黑龙江",
        id: 12,
        CityList: [
            {
                name: "大庆",
                id: 168,
                CountryList: [
                    {
                        name: "大庆市区",
                        id: 1358
                    },
                    {
                        name: "杜尔伯特蒙古族自治县",
                        id: 1359
                    },
                    {
                        name: "林甸县",
                        id: 1360
                    },
                    {
                        name: "肇源县",
                        id: 1361
                    },
                    {
                        name: "肇州县",
                        id: 1362
                    },
                    {
                        name: "萨尔图区",
                        id: 3478
                    },
                    {
                        name: "龙凤区",
                        id: 3479
                    },
                    {
                        name: "让胡路区",
                        id: 3480
                    },
                    {
                        name: "大同区",
                        id: 3481
                    },
                    {
                        name: "红岗区",
                        id: 3482
                    },
                    {
                        name: "高新区",
                        id: 4548
                    }
                ]
            },
            {
                name: "大兴安岭",
                id: 169,
                CountryList: [
                    {
                        name: "呼玛县",
                        id: 1363
                    },
                    {
                        name: "漠河县",
                        id: 1364
                    },
                    {
                        name: "塔河县",
                        id: 1365
                    },
                    {
                        name: "大兴安岭地区(加格达奇)",
                        id: 3681
                    }
                ]
            },
            {
                name: "哈尔滨",
                id: 170,
                CountryList: [
                    {
                        name: "阿城市",
                        id: 1366
                    },
                    {
                        name: "巴彦县",
                        id: 1367
                    },
                    {
                        name: "宾县",
                        id: 1368
                    },
                    {
                        name: "方正县",
                        id: 1369
                    },
                    {
                        name: "哈尔滨市区",
                        id: 1370
                    },
                    {
                        name: "呼兰县",
                        id: 1371
                    },
                    {
                        name: "木兰县",
                        id: 1372
                    },
                    {
                        name: "尚志市",
                        id: 1373
                    },
                    {
                        name: "双城市",
                        id: 1374
                    },
                    {
                        name: "通河县",
                        id: 1375
                    },
                    {
                        name: "五常市",
                        id: 1376
                    },
                    {
                        name: "延寿县",
                        id: 1377
                    },
                    {
                        name: "依兰县",
                        id: 1378
                    },
                    {
                        name: "松北区",
                        id: 3459
                    },
                    {
                        name: "道里区",
                        id: 3460
                    },
                    {
                        name: "南岗区",
                        id: 3461
                    },
                    {
                        name: "道外区",
                        id: 3462
                    },
                    {
                        name: "香坊区",
                        id: 3463
                    },
                    {
                        name: "动力区",
                        id: 3464
                    },
                    {
                        name: "平房区",
                        id: 3465
                    },
                    {
                        name: "呼兰区",
                        id: 3466
                    },
                    {
                        name: "亚布力",
                        id: 4514
                    },
                    {
                        name: "商业区",
                        id: 5185
                    }
                ]
            },
            {
                name: "鹤岗",
                id: 171,
                CountryList: [
                    {
                        name: "鹤岗市区",
                        id: 1379
                    },
                    {
                        name: "萝北县",
                        id: 1380
                    },
                    {
                        name: "绥滨县",
                        id: 1381
                    },
                    {
                        name: "兴山区",
                        id: 3488
                    },
                    {
                        name: "向阳区",
                        id: 3490
                    },
                    {
                        name: "工农区",
                        id: 3491
                    },
                    {
                        name: "南山区",
                        id: 3492
                    },
                    {
                        name: "兴安区",
                        id: 3494
                    },
                    {
                        name: "东山区",
                        id: 3513
                    }
                ]
            },
            {
                name: "黑河",
                id: 172,
                CountryList: [
                    {
                        name: "北安市",
                        id: 1382
                    },
                    {
                        name: "黑河市区",
                        id: 1383
                    },
                    {
                        name: "嫩江县",
                        id: 1384
                    },
                    {
                        name: "孙吴县",
                        id: 1385
                    },
                    {
                        name: "五大连池市",
                        id: 1386
                    },
                    {
                        name: "逊克县",
                        id: 1387
                    },
                    {
                        name: "爱辉区",
                        id: 3477
                    }
                ]
            },
            {
                name: "鸡西",
                id: 173,
                CountryList: [
                    {
                        name: "虎林市",
                        id: 1388
                    },
                    {
                        name: "鸡东县",
                        id: 1389
                    },
                    {
                        name: "鸡西市区",
                        id: 1390
                    },
                    {
                        name: "密山市",
                        id: 1391
                    },
                    {
                        name: "鸡冠区",
                        id: 3632
                    },
                    {
                        name: "恒山区",
                        id: 3633
                    },
                    {
                        name: "滴道区",
                        id: 3636
                    },
                    {
                        name: "梨树区",
                        id: 3638
                    },
                    {
                        name: "城子河区",
                        id: 3640
                    }
                ]
            },
            {
                name: "佳木斯",
                id: 174,
                CountryList: [
                    {
                        name: "抚远县",
                        id: 1392
                    },
                    {
                        name: "富锦市",
                        id: 1393
                    },
                    {
                        name: "佳木斯市区",
                        id: 1394
                    },
                    {
                        name: "汤原县",
                        id: 1395
                    },
                    {
                        name: "同江市",
                        id: 1396
                    },
                    {
                        name: "桦川县",
                        id: 1397
                    },
                    {
                        name: "桦南县",
                        id: 1398
                    },
                    {
                        name: "前进区",
                        id: 3600
                    },
                    {
                        name: "永红区",
                        id: 3605
                    },
                    {
                        name: "向阳区",
                        id: 3609
                    },
                    {
                        name: "东风区",
                        id: 3612
                    },
                    {
                        name: "郊区",
                        id: 3616
                    }
                ]
            },
            {
                name: "牡丹江",
                id: 175,
                CountryList: [
                    {
                        name: "东宁县",
                        id: 1399
                    },
                    {
                        name: "海林市",
                        id: 1400
                    },
                    {
                        name: "林口县",
                        id: 1401
                    },
                    {
                        name: "牡丹江市区",
                        id: 1402
                    },
                    {
                        name: "穆棱市",
                        id: 1403
                    },
                    {
                        name: "宁安市",
                        id: 1404
                    },
                    {
                        name: "绥芬河市",
                        id: 1405
                    },
                    {
                        name: "爱民区",
                        id: 3656
                    },
                    {
                        name: "东安区",
                        id: 3661
                    },
                    {
                        name: "阳明区",
                        id: 3663
                    },
                    {
                        name: "西安区",
                        id: 3667
                    }
                ]
            },
            {
                name: "七台河",
                id: 176,
                CountryList: [
                    {
                        name: "勃利县",
                        id: 1406
                    },
                    {
                        name: "七台河市区",
                        id: 1407
                    },
                    {
                        name: "桃山区",
                        id: 3467
                    },
                    {
                        name: "新兴区",
                        id: 3468
                    },
                    {
                        name: "茄子河区",
                        id: 3469
                    }
                ]
            },
            {
                name: "齐齐哈尔",
                id: 177,
                CountryList: [
                    {
                        name: "拜泉县",
                        id: 1408
                    },
                    {
                        name: "富裕县",
                        id: 1409
                    },
                    {
                        name: "甘南县",
                        id: 1410
                    },
                    {
                        name: "克东县",
                        id: 1411
                    },
                    {
                        name: "克山县",
                        id: 1412
                    },
                    {
                        name: "龙江县",
                        id: 1413
                    },
                    {
                        name: "齐齐哈尔市区",
                        id: 1414
                    },
                    {
                        name: "泰来县",
                        id: 1415
                    },
                    {
                        name: "依安县",
                        id: 1416
                    },
                    {
                        name: "讷河市",
                        id: 1417
                    },
                    {
                        name: "建华区",
                        id: 3470
                    },
                    {
                        name: "龙沙区",
                        id: 3471
                    },
                    {
                        name: "铁锋区",
                        id: 3472
                    },
                    {
                        name: "昂昂溪区",
                        id: 3473
                    },
                    {
                        name: "富拉尔基区",
                        id: 3474
                    },
                    {
                        name: "碾子山区",
                        id: 3475
                    },
                    {
                        name: "梅里斯达斡尔族区",
                        id: 3476
                    }
                ]
            },
            {
                name: "双鸭山",
                id: 178,
                CountryList: [
                    {
                        name: "宝清县",
                        id: 1418
                    },
                    {
                        name: "集贤县",
                        id: 1419
                    },
                    {
                        name: "饶河县",
                        id: 1420
                    },
                    {
                        name: "双鸭山市区",
                        id: 1421
                    },
                    {
                        name: "友谊县",
                        id: 1422
                    },
                    {
                        name: "尖山区",
                        id: 3623
                    },
                    {
                        name: "岭东区",
                        id: 3624
                    },
                    {
                        name: "四方台区",
                        id: 3626
                    },
                    {
                        name: "宝山区",
                        id: 3629
                    }
                ]
            },
            {
                name: "绥化",
                id: 179,
                CountryList: [
                    {
                        name: "安达市",
                        id: 1423
                    },
                    {
                        name: "海伦市",
                        id: 1424
                    },
                    {
                        name: "兰西县",
                        id: 1425
                    },
                    {
                        name: "明水县",
                        id: 1426
                    },
                    {
                        name: "青冈县",
                        id: 1427
                    },
                    {
                        name: "庆安县",
                        id: 1428
                    },
                    {
                        name: "绥化市区",
                        id: 1429
                    },
                    {
                        name: "绥棱县",
                        id: 1430
                    },
                    {
                        name: "望奎县",
                        id: 1431
                    },
                    {
                        name: "肇东市",
                        id: 1432
                    },
                    {
                        name: "北林区",
                        id: 3669
                    }
                ]
            },
            {
                name: "伊春",
                id: 180,
                CountryList: [
                    {
                        name: "嘉荫县",
                        id: 1433
                    },
                    {
                        name: "铁力市",
                        id: 1434
                    },
                    {
                        name: "伊春市",
                        id: 1435
                    },
                    {
                        name: "伊春区",
                        id: 3529
                    },
                    {
                        name: "南岔区",
                        id: 3533
                    },
                    {
                        name: "友好区",
                        id: 3535
                    },
                    {
                        name: "西林区",
                        id: 3536
                    },
                    {
                        name: "翠峦区",
                        id: 3548
                    },
                    {
                        name: "新青区",
                        id: 3550
                    },
                    {
                        name: "美溪区",
                        id: 3551
                    },
                    {
                        name: "金山屯区",
                        id: 3553
                    },
                    {
                        name: "五营区",
                        id: 3554
                    },
                    {
                        name: "乌马河区",
                        id: 3555
                    },
                    {
                        name: "汤旺河区",
                        id: 3557
                    },
                    {
                        name: "带岭区",
                        id: 3560
                    },
                    {
                        name: "乌伊岭区",
                        id: 3584
                    },
                    {
                        name: "红星区",
                        id: 3587
                    },
                    {
                        name: "上甘岭区",
                        id: 3589
                    }
                ]
            },
            {
                name: "乌苏里江",
                id: 3143,
                CountryList: []
            }
        ]
    },
    {
        name: "湖北",
        id: 13,
        CityList: [
            {
                name: "鄂州",
                id: 181,
                CountryList: [
                    {
                        name: "鄂州市",
                        id: 1436
                    },
                    {
                        name: "鄂城区",
                        id: 4115
                    },
                    {
                        name: "梁子湖区",
                        id: 4116
                    },
                    {
                        name: "华容区",
                        id: 4117
                    }
                ]
            },
            {
                name: "恩施",
                id: 182,
                CountryList: [
                    {
                        name: "巴东县",
                        id: 1437
                    },
                    {
                        name: "恩施市",
                        id: 1438
                    },
                    {
                        name: "鹤峰县",
                        id: 1439
                    },
                    {
                        name: "建始县",
                        id: 1440
                    },
                    {
                        name: "来凤县",
                        id: 1441
                    },
                    {
                        name: "利川市",
                        id: 1442
                    },
                    {
                        name: "咸丰县",
                        id: 1443
                    },
                    {
                        name: "宣恩县",
                        id: 1444
                    },
                    {
                        name: "恩施土家族苗族自治州",
                        id: 4134
                    }
                ]
            },
            {
                name: "黄冈",
                id: 183,
                CountryList: [
                    {
                        name: "红安县",
                        id: 1445
                    },
                    {
                        name: "黄冈市区",
                        id: 1446
                    },
                    {
                        name: "黄梅县",
                        id: 1447
                    },
                    {
                        name: "罗田县",
                        id: 1448
                    },
                    {
                        name: "麻城市",
                        id: 1449
                    },
                    {
                        name: "团风县",
                        id: 1450
                    },
                    {
                        name: "武穴市",
                        id: 1451
                    },
                    {
                        name: "英山县",
                        id: 1452
                    },
                    {
                        name: "蕲春县",
                        id: 1453
                    },
                    {
                        name: "浠水县",
                        id: 1454
                    },
                    {
                        name: "黄州区",
                        id: 4114
                    }
                ]
            },
            {
                name: "黄石",
                id: 184,
                CountryList: [
                    {
                        name: "大冶市",
                        id: 1455
                    },
                    {
                        name: "黄石市区",
                        id: 1456
                    },
                    {
                        name: "阳新县",
                        id: 1457
                    },
                    {
                        name: "黄石港区",
                        id: 4118
                    },
                    {
                        name: "西塞山区",
                        id: 4119
                    },
                    {
                        name: "下陆区",
                        id: 4120
                    },
                    {
                        name: "铁山区",
                        id: 4121
                    },
                    {
                        name: "团城山区",
                        id: 5183
                    }
                ]
            },
            {
                name: "荆门",
                id: 185,
                CountryList: [
                    {
                        name: "荆门市区",
                        id: 1458
                    },
                    {
                        name: "京山县",
                        id: 1459
                    },
                    {
                        name: "沙洋县",
                        id: 1460
                    },
                    {
                        name: "钟祥市",
                        id: 1461
                    },
                    {
                        name: "东宝区",
                        id: 4111
                    },
                    {
                        name: "掇刀区",
                        id: 4112
                    }
                ]
            },
            {
                name: "荆州",
                id: 186,
                CountryList: [
                    {
                        name: "公安县",
                        id: 1462
                    },
                    {
                        name: "洪湖市",
                        id: 1463
                    },
                    {
                        name: "监利县",
                        id: 1464
                    },
                    {
                        name: "江陵县",
                        id: 1465
                    },
                    {
                        name: "荆州市",
                        id: 1466
                    },
                    {
                        name: "石首市",
                        id: 1467
                    },
                    {
                        name: "松滋市",
                        id: 1468
                    },
                    {
                        name: "沙市区",
                        id: 4123
                    },
                    {
                        name: "荆州区",
                        id: 4124
                    }
                ]
            },
            {
                name: "潜江",
                id: 187,
                CountryList: [
                    {
                        name: "潜江市",
                        id: 1469
                    }
                ]
            },
            {
                name: "神农架林区",
                id: 188,
                CountryList: [
                    {
                        name: "神农架林区",
                        id: 1470
                    },
                    {
                        name: "仙桃市",
                        id: 4131
                    },
                    {
                        name: "天门市",
                        id: 4132
                    },
                    {
                        name: "潜江市",
                        id: 4133
                    },
                    {
                        name: "木鱼镇",
                        id: 6094
                    }
                ]
            },
            {
                name: "十堰",
                id: 189,
                CountryList: [
                    {
                        name: "丹江口市",
                        id: 1471
                    },
                    {
                        name: "房县",
                        id: 1472
                    },
                    {
                        name: "十堰市区",
                        id: 1473
                    },
                    {
                        name: "郧西县",
                        id: 1474
                    },
                    {
                        name: "郧县",
                        id: 1475
                    },
                    {
                        name: "竹山县",
                        id: 1476
                    },
                    {
                        name: "竹溪县",
                        id: 1477
                    },
                    {
                        name: "张湾区",
                        id: 4106
                    },
                    {
                        name: "茅箭区",
                        id: 4107
                    },
                    {
                        name: "武当山特区",
                        id: 4560
                    },
                    {
                        name: "高新技术开发区",
                        id: 4564
                    }
                ]
            },
            {
                name: "随州",
                id: 190,
                CountryList: [
                    {
                        name: "广水市",
                        id: 1478
                    },
                    {
                        name: "随州市",
                        id: 1479
                    },
                    {
                        name: "曾都区",
                        id: 4130
                    }
                ]
            },
            {
                name: "天门",
                id: 191,
                CountryList: [
                    {
                        name: "天门市",
                        id: 1480
                    }
                ]
            },
            {
                name: "武汉",
                id: 192,
                CountryList: [
                    {
                        name: "江岸区",
                        id: 4093
                    },
                    {
                        name: "江汉区",
                        id: 4094
                    },
                    {
                        name: "硚口区",
                        id: 4095
                    },
                    {
                        name: "汉阳区",
                        id: 4096
                    },
                    {
                        name: "武昌区",
                        id: 4097
                    },
                    {
                        name: "青山区",
                        id: 4098
                    },
                    {
                        name: "洪山区",
                        id: 4099
                    },
                    {
                        name: "东西湖区",
                        id: 4100
                    },
                    {
                        name: "汉南区",
                        id: 4101
                    },
                    {
                        name: "蔡甸区",
                        id: 4102
                    },
                    {
                        name: "江夏区",
                        id: 4103
                    },
                    {
                        name: "黄陂区",
                        id: 4104
                    },
                    {
                        name: "新洲区",
                        id: 4105
                    },
                    {
                        name: "经济技术开发区",
                        id: 5234
                    }
                ]
            },
            {
                name: "仙桃",
                id: 193,
                CountryList: [
                    {
                        name: "仙桃市",
                        id: 1482
                    }
                ]
            },
            {
                name: "咸宁",
                id: 194,
                CountryList: [
                    {
                        name: "赤壁市",
                        id: 1483
                    },
                    {
                        name: "崇阳县",
                        id: 1484
                    },
                    {
                        name: "嘉鱼县",
                        id: 1485
                    },
                    {
                        name: "通城县",
                        id: 1486
                    },
                    {
                        name: "通山县",
                        id: 1487
                    },
                    {
                        name: "咸宁市区",
                        id: 1488
                    },
                    {
                        name: "咸安区",
                        id: 4122
                    }
                ]
            },
            {
                name: "襄阳",
                id: 195,
                CountryList: [
                    {
                        name: "保康县",
                        id: 1489
                    },
                    {
                        name: "谷城县",
                        id: 1490
                    },
                    {
                        name: "老河口市",
                        id: 1491
                    },
                    {
                        name: "南漳县",
                        id: 1492
                    },
                    {
                        name: "襄樊市区",
                        id: 1493
                    },
                    {
                        name: "宜城市",
                        id: 1494
                    },
                    {
                        name: "枣阳市",
                        id: 1495
                    },
                    {
                        name: "襄城区",
                        id: 4108
                    },
                    {
                        name: "樊城区",
                        id: 4109
                    },
                    {
                        name: "襄州区（原襄阳区）",
                        id: 4110
                    }
                ]
            },
            {
                name: "孝感",
                id: 196,
                CountryList: [
                    {
                        name: "安陆市",
                        id: 1496
                    },
                    {
                        name: "大悟县",
                        id: 1497
                    },
                    {
                        name: "汉川市",
                        id: 1498
                    },
                    {
                        name: "孝昌县",
                        id: 1499
                    },
                    {
                        name: "孝感市区",
                        id: 1500
                    },
                    {
                        name: "应城市",
                        id: 1501
                    },
                    {
                        name: "云梦县",
                        id: 1502
                    },
                    {
                        name: "孝南区",
                        id: 4113
                    }
                ]
            },
            {
                name: "宜昌",
                id: 197,
                CountryList: [
                    {
                        name: "长阳土家族自治县",
                        id: 1503
                    },
                    {
                        name: "当阳市",
                        id: 1504
                    },
                    {
                        name: "五峰土家族自治县",
                        id: 1505
                    },
                    {
                        name: "兴山县",
                        id: 1506
                    },
                    {
                        name: "宜昌市区",
                        id: 1507
                    },
                    {
                        name: "宜都市",
                        id: 1508
                    },
                    {
                        name: "远安县",
                        id: 1509
                    },
                    {
                        name: "枝江市",
                        id: 1510
                    },
                    {
                        name: "秭归县",
                        id: 1511
                    },
                    {
                        name: "西陵区",
                        id: 4125
                    },
                    {
                        name: "伍家岗区",
                        id: 4126
                    },
                    {
                        name: "点军区",
                        id: 4127
                    },
                    {
                        name: "猇亭区",
                        id: 4128
                    },
                    {
                        name: "夷陵区",
                        id: 4129
                    },
                    {
                        name: "东山开发区",
                        id: 5200
                    }
                ]
            }
        ]
    },
    {
        name: "湖南",
        id: 14,
        CityList: [
            {
                name: "常德",
                id: 198,
                CountryList: [
                    {
                        name: "安乡县",
                        id: 1512
                    },
                    {
                        name: "常德市区",
                        id: 1513
                    },
                    {
                        name: "汉寿县",
                        id: 1514
                    },
                    {
                        name: "津市市",
                        id: 1515
                    },
                    {
                        name: "临澧县",
                        id: 1516
                    },
                    {
                        name: "石门县",
                        id: 1517
                    },
                    {
                        name: "桃源县",
                        id: 1518
                    },
                    {
                        name: "澧县",
                        id: 1519
                    },
                    {
                        name: "武陵区",
                        id: 3896
                    },
                    {
                        name: "鼎城区",
                        id: 3899
                    }
                ]
            },
            {
                name: "长沙",
                id: 199,
                CountryList: [
                    {
                        name: "长沙市区",
                        id: 1520
                    },
                    {
                        name: "长沙县",
                        id: 1521
                    },
                    {
                        name: "宁乡县",
                        id: 1522
                    },
                    {
                        name: "望城县",
                        id: 1523
                    },
                    {
                        name: "浏阳市",
                        id: 1524
                    },
                    {
                        name: "岳麓区",
                        id: 3872
                    },
                    {
                        name: "芙蓉区",
                        id: 3876
                    },
                    {
                        name: "天心区",
                        id: 3877
                    },
                    {
                        name: "开福区",
                        id: 3878
                    },
                    {
                        name: "雨花区",
                        id: 3880
                    },
                    {
                        name: "星沙经济开发区",
                        id: 5140
                    }
                ]
            },
            {
                name: "郴州",
                id: 200,
                CountryList: [
                    {
                        name: "安仁县",
                        id: 1525
                    },
                    {
                        name: "郴州市区",
                        id: 1526
                    },
                    {
                        name: "桂东县",
                        id: 1527
                    },
                    {
                        name: "桂阳县",
                        id: 1528
                    },
                    {
                        name: "嘉禾县",
                        id: 1529
                    },
                    {
                        name: "临武县",
                        id: 1530
                    },
                    {
                        name: "汝城县",
                        id: 1531
                    },
                    {
                        name: "宜章县",
                        id: 1532
                    },
                    {
                        name: "永兴县",
                        id: 1533
                    },
                    {
                        name: "资兴市",
                        id: 1534
                    },
                    {
                        name: "北湖区",
                        id: 3959
                    },
                    {
                        name: "苏仙区",
                        id: 3960
                    }
                ]
            },
            {
                name: "衡阳",
                id: 201,
                CountryList: [
                    {
                        name: "常宁市",
                        id: 1535
                    },
                    {
                        name: "衡东县",
                        id: 1536
                    },
                    {
                        name: "衡南县",
                        id: 1537
                    },
                    {
                        name: "衡山县",
                        id: 1538
                    },
                    {
                        name: "衡阳市区",
                        id: 1539
                    },
                    {
                        name: "衡阳县",
                        id: 1540
                    },
                    {
                        name: "祁东县",
                        id: 1541
                    },
                    {
                        name: "耒阳市",
                        id: 1542
                    },
                    {
                        name: "雁峰区",
                        id: 3948
                    },
                    {
                        name: "珠晖区",
                        id: 3949
                    },
                    {
                        name: "石鼓区",
                        id: 3951
                    },
                    {
                        name: "蒸湘区",
                        id: 3953
                    },
                    {
                        name: "南岳区",
                        id: 3956
                    }
                ]
            },
            {
                name: "怀化",
                id: 202,
                CountryList: [
                    {
                        name: "辰溪县",
                        id: 1543
                    },
                    {
                        name: "洪江市",
                        id: 1544
                    },
                    {
                        name: "怀化市区",
                        id: 1545
                    },
                    {
                        name: "会同县",
                        id: 1546
                    },
                    {
                        name: "靖州苗族侗族自治县",
                        id: 1547
                    },
                    {
                        name: "麻阳苗族自治县",
                        id: 1548
                    },
                    {
                        name: "通道侗族自治县",
                        id: 1549
                    },
                    {
                        name: "新晃侗族自治县",
                        id: 1550
                    },
                    {
                        name: "中方县",
                        id: 1551
                    },
                    {
                        name: "芷江侗族自治县",
                        id: 1552
                    },
                    {
                        name: "沅陵县",
                        id: 1553
                    },
                    {
                        name: "溆浦县",
                        id: 1554
                    },
                    {
                        name: "鹤城区",
                        id: 3979
                    }
                ]
            },
            {
                name: "娄底",
                id: 203,
                CountryList: [
                    {
                        name: "冷水江市",
                        id: 1555
                    },
                    {
                        name: "涟源市",
                        id: 1556
                    },
                    {
                        name: "娄底市区",
                        id: 1557
                    },
                    {
                        name: "双峰县",
                        id: 1558
                    },
                    {
                        name: "新化县",
                        id: 1559
                    },
                    {
                        name: "娄星区",
                        id: 3990
                    }
                ]
            },
            {
                name: "邵阳",
                id: 204,
                CountryList: [
                    {
                        name: "城步苗族自治县",
                        id: 1560
                    },
                    {
                        name: "洞口县",
                        id: 1561
                    },
                    {
                        name: "隆回县",
                        id: 1562
                    },
                    {
                        name: "邵东县",
                        id: 1563
                    },
                    {
                        name: "邵阳市区",
                        id: 1564
                    },
                    {
                        name: "邵阳县",
                        id: 1565
                    },
                    {
                        name: "绥宁县",
                        id: 1566
                    },
                    {
                        name: "武冈市",
                        id: 1567
                    },
                    {
                        name: "新宁县",
                        id: 1568
                    },
                    {
                        name: "新邵县",
                        id: 1569
                    },
                    {
                        name: "双清区",
                        id: 3971
                    },
                    {
                        name: "大祥区",
                        id: 3972
                    },
                    {
                        name: "北塔区",
                        id: 3974
                    }
                ]
            },
            {
                name: "湘潭",
                id: 205,
                CountryList: [
                    {
                        name: "韶山市",
                        id: 1570
                    },
                    {
                        name: "湘潭市区",
                        id: 1571
                    },
                    {
                        name: "湘潭县",
                        id: 1572
                    },
                    {
                        name: "湘乡市",
                        id: 1573
                    },
                    {
                        name: "岳塘区",
                        id: 3939
                    },
                    {
                        name: "雨湖区",
                        id: 3943
                    }
                ]
            },
            {
                name: "湘西",
                id: 206,
                CountryList: [
                    {
                        name: "保靖县",
                        id: 1574
                    },
                    {
                        name: "凤凰县",
                        id: 1575
                    },
                    {
                        name: "古丈县",
                        id: 1576
                    },
                    {
                        name: "花垣县",
                        id: 1577
                    },
                    {
                        name: "吉首市",
                        id: 1578
                    },
                    {
                        name: "龙山县",
                        id: 1579
                    },
                    {
                        name: "永顺县",
                        id: 1580
                    },
                    {
                        name: "泸溪县",
                        id: 1581
                    }
                ]
            },
            {
                name: "益阳",
                id: 207,
                CountryList: [
                    {
                        name: "安化县",
                        id: 1582
                    },
                    {
                        name: "南县",
                        id: 1583
                    },
                    {
                        name: "桃江县",
                        id: 1584
                    },
                    {
                        name: "益阳市区",
                        id: 1585
                    },
                    {
                        name: "沅江市",
                        id: 1586
                    },
                    {
                        name: "赫山区",
                        id: 3906
                    },
                    {
                        name: "资阳区",
                        id: 3909
                    },
                    {
                        name: "朝阳开发区",
                        id: 5258
                    }
                ]
            },
            {
                name: "永州",
                id: 208,
                CountryList: [
                    {
                        name: "道县",
                        id: 1587
                    },
                    {
                        name: "东安县",
                        id: 1588
                    },
                    {
                        name: "江华瑶族自治县",
                        id: 1589
                    },
                    {
                        name: "江永县",
                        id: 1590
                    },
                    {
                        name: "蓝山县",
                        id: 1591
                    },
                    {
                        name: "宁远县",
                        id: 1592
                    },
                    {
                        name: "祁阳县",
                        id: 1593
                    },
                    {
                        name: "双牌县",
                        id: 1594
                    },
                    {
                        name: "新田县",
                        id: 1595
                    },
                    {
                        name: "永州市区",
                        id: 1596
                    },
                    {
                        name: "冷水滩区",
                        id: 3964
                    },
                    {
                        name: "零陵区",
                        id: 3967
                    }
                ]
            },
            {
                name: "岳阳",
                id: 209,
                CountryList: [
                    {
                        name: "华容县",
                        id: 1597
                    },
                    {
                        name: "临湘市",
                        id: 1598
                    },
                    {
                        name: "平江县",
                        id: 1599
                    },
                    {
                        name: "湘阴县",
                        id: 1600
                    },
                    {
                        name: "岳阳市区",
                        id: 1601
                    },
                    {
                        name: "岳阳县",
                        id: 1602
                    },
                    {
                        name: "汨罗市",
                        id: 1603
                    },
                    {
                        name: "岳阳楼区",
                        id: 3911
                    },
                    {
                        name: "君山区",
                        id: 3914
                    },
                    {
                        name: "云溪区",
                        id: 3917
                    }
                ]
            },
            {
                name: "张家界",
                id: 210,
                CountryList: [
                    {
                        name: "慈利县",
                        id: 1604
                    },
                    {
                        name: "桑植县",
                        id: 1605
                    },
                    {
                        name: "张家界市区",
                        id: 1606
                    },
                    {
                        name: "武陵源区",
                        id: 3888
                    },
                    {
                        name: "永定区",
                        id: 3891
                    }
                ]
            },
            {
                name: "株洲",
                id: 211,
                CountryList: [
                    {
                        name: "茶陵县",
                        id: 1607
                    },
                    {
                        name: "炎陵县",
                        id: 1608
                    },
                    {
                        name: "株洲市区",
                        id: 1609
                    },
                    {
                        name: "株洲县",
                        id: 1610
                    },
                    {
                        name: "攸县",
                        id: 1611
                    },
                    {
                        name: "醴陵市",
                        id: 1612
                    },
                    {
                        name: "天元区",
                        id: 3924
                    },
                    {
                        name: "荷塘区",
                        id: 3927
                    },
                    {
                        name: "芦淞区",
                        id: 3929
                    },
                    {
                        name: "石峰区",
                        id: 3932
                    }
                ]
            }
        ]
    },
    {
        name: "吉林",
        id: 15,
        CityList: [
            {
                name: "白城",
                id: 212,
                CountryList: [
                    {
                        name: "白城市区",
                        id: 1613
                    },
                    {
                        name: "大安市",
                        id: 1614
                    },
                    {
                        name: "通榆县",
                        id: 1615
                    },
                    {
                        name: "镇赉县",
                        id: 1616
                    },
                    {
                        name: "洮南市",
                        id: 1617
                    },
                    {
                        name: "洮北区",
                        id: 3445
                    }
                ]
            },
            {
                name: "白山",
                id: 213,
                CountryList: [
                    {
                        name: "白山市",
                        id: 1618
                    },
                    {
                        name: "长白朝鲜族自治县",
                        id: 1619
                    },
                    {
                        name: "抚松县",
                        id: 1620
                    },
                    {
                        name: "江源县",
                        id: 1621
                    },
                    {
                        name: "靖宇县",
                        id: 1622
                    },
                    {
                        name: "临江市",
                        id: 1623
                    },
                    {
                        name: "八道江区",
                        id: 3457
                    }
                ]
            },
            {
                name: "长春",
                id: 214,
                CountryList: [
                    {
                        name: "长春市区",
                        id: 1624
                    },
                    {
                        name: "德惠市",
                        id: 1625
                    },
                    {
                        name: "九台市",
                        id: 1626
                    },
                    {
                        name: "农安县",
                        id: 1627
                    },
                    {
                        name: "榆树市",
                        id: 1628
                    },
                    {
                        name: "朝阳区",
                        id: 3439
                    },
                    {
                        name: "南关区",
                        id: 3440
                    },
                    {
                        name: "宽城区",
                        id: 3441
                    },
                    {
                        name: "二道区",
                        id: 3442
                    },
                    {
                        name: "绿园区",
                        id: 3443
                    },
                    {
                        name: "双阳区",
                        id: 3444
                    }
                ]
            },
            {
                name: "吉林",
                id: 215,
                CountryList: [
                    {
                        name: "吉林市区",
                        id: 1629
                    },
                    {
                        name: "磐石市",
                        id: 1630
                    },
                    {
                        name: "舒兰市",
                        id: 1631
                    },
                    {
                        name: "永吉县",
                        id: 1632
                    },
                    {
                        name: "桦甸市",
                        id: 1633
                    },
                    {
                        name: "蛟河市",
                        id: 1634
                    },
                    {
                        name: "船营区",
                        id: 3447
                    },
                    {
                        name: "龙潭区",
                        id: 3448
                    },
                    {
                        name: "昌邑区",
                        id: 3449
                    },
                    {
                        name: "丰满区",
                        id: 3450
                    }
                ]
            },
            {
                name: "辽源",
                id: 216,
                CountryList: [
                    {
                        name: "东丰县",
                        id: 1635
                    },
                    {
                        name: "东辽县",
                        id: 1636
                    },
                    {
                        name: "辽源市区",
                        id: 1637
                    },
                    {
                        name: "龙山区",
                        id: 3453
                    },
                    {
                        name: "西安区",
                        id: 3454
                    }
                ]
            },
            {
                name: "四平",
                id: 217,
                CountryList: [
                    {
                        name: "公主岭市",
                        id: 1638
                    },
                    {
                        name: "梨树县",
                        id: 1639
                    },
                    {
                        name: "双辽市",
                        id: 1640
                    },
                    {
                        name: "四平市区",
                        id: 1641
                    },
                    {
                        name: "伊通满族自治县",
                        id: 1642
                    },
                    {
                        name: "铁西区",
                        id: 3451
                    },
                    {
                        name: "铁东区",
                        id: 3452
                    }
                ]
            },
            {
                name: "松原",
                id: 218,
                CountryList: [
                    {
                        name: "长岭县",
                        id: 1643
                    },
                    {
                        name: "扶余县",
                        id: 1644
                    },
                    {
                        name: "乾安县",
                        id: 1645
                    },
                    {
                        name: "前郭县",
                        id: 1646
                    },
                    {
                        name: "松原市区",
                        id: 1647
                    },
                    {
                        name: "宁江区",
                        id: 3446
                    }
                ]
            },
            {
                name: "通化",
                id: 219,
                CountryList: [
                    {
                        name: "辉南县",
                        id: 1648
                    },
                    {
                        name: "集安市",
                        id: 1649
                    },
                    {
                        name: "柳河县",
                        id: 1650
                    },
                    {
                        name: "梅河口市",
                        id: 1651
                    },
                    {
                        name: "通化市区",
                        id: 1652
                    },
                    {
                        name: "通化县",
                        id: 1653
                    },
                    {
                        name: "东昌区",
                        id: 3455
                    },
                    {
                        name: "二道江区",
                        id: 3456
                    }
                ]
            },
            {
                name: "延边",
                id: 220,
                CountryList: [
                    {
                        name: "安图县",
                        id: 1654
                    },
                    {
                        name: "敦化市",
                        id: 1655
                    },
                    {
                        name: "和龙市",
                        id: 1656
                    },
                    {
                        name: "龙井市",
                        id: 1657
                    },
                    {
                        name: "图们市",
                        id: 1658
                    },
                    {
                        name: "汪清县",
                        id: 1659
                    },
                    {
                        name: "延吉市",
                        id: 1660
                    },
                    {
                        name: "珲春市",
                        id: 1661
                    },
                    {
                        name: "延边朝鲜族自治州",
                        id: 3458
                    }
                ]
            },
            {
                name: "长白山",
                id: 4569,
                CountryList: [
                    {
                        name: "池北区",
                        id: 4570
                    },
                    {
                        name: "池西区",
                        id: 4571
                    },
                    {
                        name: "池南区",
                        id: 4572
                    }
                ]
            }
        ]
    },
    {
        name: "江苏",
        id: 16,
        CityList: [
            {
                name: "常州",
                id: 221,
                CountryList: [
                    {
                        name: "常州市区",
                        id: 486
                    },
                    {
                        name: "金坛市",
                        id: 487
                    },
                    {
                        name: "溧阳市",
                        id: 488
                    },
                    {
                        name: "钟楼区",
                        id: 3895
                    },
                    {
                        name: "天宁区",
                        id: 3900
                    },
                    {
                        name: "戚墅堰区",
                        id: 3902
                    },
                    {
                        name: "新北区",
                        id: 3904
                    },
                    {
                        name: "武进区",
                        id: 3908
                    }
                ]
            },
            {
                name: "淮安",
                id: 222,
                CountryList: [
                    {
                        name: "洪泽县",
                        id: 489
                    },
                    {
                        name: "淮安市区",
                        id: 490
                    },
                    {
                        name: "金湖县",
                        id: 491
                    },
                    {
                        name: "涟水县",
                        id: 492
                    },
                    {
                        name: "盱眙县",
                        id: 493
                    },
                    {
                        name: "清河区",
                        id: 3810
                    },
                    {
                        name: "清浦区",
                        id: 3813
                    },
                    {
                        name: "楚州区",
                        id: 3818
                    },
                    {
                        name: "淮阴区",
                        id: 3823
                    },
                    {
                        name: "经济开发区",
                        id: 6045
                    }
                ]
            },
            {
                name: "连云港",
                id: 223,
                CountryList: [
                    {
                        name: "东海县",
                        id: 494
                    },
                    {
                        name: "赣榆县",
                        id: 495
                    },
                    {
                        name: "灌南县",
                        id: 496
                    },
                    {
                        name: "灌云县",
                        id: 497
                    },
                    {
                        name: "连云港市区",
                        id: 498
                    },
                    {
                        name: "新浦区",
                        id: 3787
                    },
                    {
                        name: "连云区",
                        id: 3791
                    },
                    {
                        name: "海州区",
                        id: 3792
                    }
                ]
            },
            {
                name: "南京",
                id: 224,
                CountryList: [
                    {
                        name: "高淳县",
                        id: 499
                    },
                    {
                        name: "溧水县",
                        id: 501
                    },
                    {
                        name: "六合区",
                        id: 3141
                    },
                    {
                        name: "江宁区",
                        id: 3142
                    },
                    {
                        name: "玄武区",
                        id: 3750
                    },
                    {
                        name: "白下区",
                        id: 3753
                    },
                    {
                        name: "秦淮区",
                        id: 3756
                    },
                    {
                        name: "建邺区",
                        id: 3760
                    },
                    {
                        name: "鼓楼区",
                        id: 3762
                    },
                    {
                        name: "下关区",
                        id: 3763
                    },
                    {
                        name: "浦口区",
                        id: 3765
                    },
                    {
                        name: "栖霞区",
                        id: 3767
                    },
                    {
                        name: "雨花台区",
                        id: 3770
                    }
                ]
            },
            {
                name: "南通",
                id: 225,
                CountryList: [
                    {
                        name: "海安县",
                        id: 502
                    },
                    {
                        name: "海门市",
                        id: 503
                    },
                    {
                        name: "南通市区",
                        id: 504
                    },
                    {
                        name: "启东市",
                        id: 505
                    },
                    {
                        name: "如东县",
                        id: 506
                    },
                    {
                        name: "如皋市",
                        id: 507
                    },
                    {
                        name: "通州市",
                        id: 508
                    },
                    {
                        name: "崇川区",
                        id: 3856
                    },
                    {
                        name: "港闸区",
                        id: 3862
                    }
                ]
            },
            {
                name: "苏州",
                id: 226,
                CountryList: [
                    {
                        name: "常熟市",
                        id: 509
                    },
                    {
                        name: "昆山市",
                        id: 510
                    },
                    {
                        name: "苏州市区",
                        id: 511
                    },
                    {
                        name: "太仓市",
                        id: 512
                    },
                    {
                        name: "张家港市",
                        id: 514
                    },
                    {
                        name: "高新区·虎丘区",
                        id: 3942
                    },
                    {
                        name: "吴中区",
                        id: 3945
                    },
                    {
                        name: "相城区",
                        id: 3947
                    },
                    {
                        name: "工业园区",
                        id: 3954
                    },
                    {
                        name: "姑苏区",
                        id: 6324
                    },
                    {
                        name: "吴江区",
                        id: 6325
                    }
                ]
            },
            {
                name: "宿迁",
                id: 227,
                CountryList: [
                    {
                        name: "宿迁市区",
                        id: 515
                    },
                    {
                        name: "宿豫县",
                        id: 516
                    },
                    {
                        name: "沭阳县",
                        id: 517
                    },
                    {
                        name: "泗洪县",
                        id: 518
                    },
                    {
                        name: "泗阳县",
                        id: 519
                    },
                    {
                        name: "宿城区",
                        id: 3800
                    },
                    {
                        name: "宿豫区",
                        id: 3805
                    }
                ]
            },
            {
                name: "泰州",
                id: 228,
                CountryList: [
                    {
                        name: "姜堰市",
                        id: 520
                    },
                    {
                        name: "靖江市",
                        id: 521
                    },
                    {
                        name: "泰兴市",
                        id: 522
                    },
                    {
                        name: "泰州市区",
                        id: 523
                    },
                    {
                        name: "兴化市",
                        id: 524
                    },
                    {
                        name: "海陵区",
                        id: 3848
                    },
                    {
                        name: "高港区",
                        id: 3852
                    }
                ]
            },
            {
                name: "无锡",
                id: 229,
                CountryList: [
                    {
                        name: "江阴市",
                        id: 525
                    },
                    {
                        name: "无锡市区",
                        id: 526
                    },
                    {
                        name: "宜兴市",
                        id: 527
                    },
                    {
                        name: "崇安区",
                        id: 3913
                    },
                    {
                        name: "南长区",
                        id: 3915
                    },
                    {
                        name: "北塘区",
                        id: 3919
                    },
                    {
                        name: "滨湖区",
                        id: 3922
                    },
                    {
                        name: "惠山区",
                        id: 3925
                    },
                    {
                        name: "锡山区",
                        id: 3928
                    },
                    {
                        name: "新区",
                        id: 4465
                    }
                ]
            },
            {
                name: "徐州",
                id: 230,
                CountryList: [
                    {
                        name: "丰县",
                        id: 528
                    },
                    {
                        name: "沛县",
                        id: 529
                    },
                    {
                        name: "铜山县",
                        id: 530
                    },
                    {
                        name: "新沂市",
                        id: 531
                    },
                    {
                        name: "徐州市区",
                        id: 532
                    },
                    {
                        name: "邳州市",
                        id: 533
                    },
                    {
                        name: "睢宁县",
                        id: 534
                    },
                    {
                        name: "云龙区",
                        id: 3775
                    },
                    {
                        name: "鼓楼区",
                        id: 3777
                    },
                    {
                        name: "九里区",
                        id: 3778
                    },
                    {
                        name: "贾汪区",
                        id: 3781
                    },
                    {
                        name: "泉山区",
                        id: 3783
                    }
                ]
            },
            {
                name: "盐城",
                id: 231,
                CountryList: [
                    {
                        name: "滨海县",
                        id: 535
                    },
                    {
                        name: "大丰市",
                        id: 536
                    },
                    {
                        name: "东台市",
                        id: 537
                    },
                    {
                        name: "阜宁县",
                        id: 538
                    },
                    {
                        name: "建湖县",
                        id: 539
                    },
                    {
                        name: "射阳县",
                        id: 540
                    },
                    {
                        name: "响水县",
                        id: 541
                    },
                    {
                        name: "盐城市区",
                        id: 542
                    },
                    {
                        name: "盐都县",
                        id: 543
                    },
                    {
                        name: "亭湖区",
                        id: 3829
                    },
                    {
                        name: "盐都区",
                        id: 3832
                    },
                    {
                        name: "洋马镇",
                        id: 5832
                    }
                ]
            },
            {
                name: "扬州",
                id: 232,
                CountryList: [
                    {
                        name: "宝应县",
                        id: 544
                    },
                    {
                        name: "高邮市",
                        id: 545
                    },
                    {
                        name: "江都市",
                        id: 546
                    },
                    {
                        name: "扬州市区",
                        id: 547
                    },
                    {
                        name: "仪征市",
                        id: 548
                    },
                    {
                        name: "维扬区",
                        id: 3836
                    },
                    {
                        name: "广陵区",
                        id: 3839
                    },
                    {
                        name: "邗江区",
                        id: 3842
                    },
                    {
                        name: "开发区",
                        id: 5203
                    }
                ]
            },
            {
                name: "镇江",
                id: 233,
                CountryList: [
                    {
                        name: "丹阳市",
                        id: 549
                    },
                    {
                        name: "句容市",
                        id: 550
                    },
                    {
                        name: "扬中市",
                        id: 551
                    },
                    {
                        name: "镇江市区",
                        id: 552
                    },
                    {
                        name: "京口区",
                        id: 3871
                    },
                    {
                        name: "润州区",
                        id: 3875
                    },
                    {
                        name: "丹徒区",
                        id: 3885
                    },
                    {
                        name: "谏壁镇",
                        id: 4547
                    },
                    {
                        name: "新区",
                        id: 5230
                    }
                ]
            }
        ]
    },
    {
        name: "江西",
        id: 17,
        CityList: [
            {
                name: "抚州",
                id: 234,
                CountryList: [
                    {
                        name: "崇仁县",
                        id: 1662
                    },
                    {
                        name: "东乡县",
                        id: 1663
                    },
                    {
                        name: "抚州市区",
                        id: 1664
                    },
                    {
                        name: "广昌县",
                        id: 1665
                    },
                    {
                        name: "金溪县",
                        id: 1666
                    },
                    {
                        name: "乐安县",
                        id: 1667
                    },
                    {
                        name: "黎川县",
                        id: 1668
                    },
                    {
                        name: "南城县",
                        id: 1669
                    },
                    {
                        name: "南丰县",
                        id: 1670
                    },
                    {
                        name: "宜黄县",
                        id: 1671
                    },
                    {
                        name: "资溪县",
                        id: 1672
                    },
                    {
                        name: "临川区",
                        id: 5824
                    }
                ]
            },
            {
                name: "赣州",
                id: 235,
                CountryList: [
                    {
                        name: "安远县",
                        id: 1673
                    },
                    {
                        name: "崇义县",
                        id: 1674
                    },
                    {
                        name: "大余县",
                        id: 1675
                    },
                    {
                        name: "定南县",
                        id: 1676
                    },
                    {
                        name: "赣县",
                        id: 1677
                    },
                    {
                        name: "赣州市区",
                        id: 1678
                    },
                    {
                        name: "会昌县",
                        id: 1679
                    },
                    {
                        name: "龙南县",
                        id: 1680
                    },
                    {
                        name: "南康市",
                        id: 1681
                    },
                    {
                        name: "宁都县",
                        id: 1682
                    },
                    {
                        name: "全南县",
                        id: 1683
                    },
                    {
                        name: "瑞金市",
                        id: 1684
                    },
                    {
                        name: "上犹县",
                        id: 1685
                    },
                    {
                        name: "石城县",
                        id: 1686
                    },
                    {
                        name: "信丰县",
                        id: 1687
                    },
                    {
                        name: "兴国县",
                        id: 1688
                    },
                    {
                        name: "寻乌县",
                        id: 1689
                    },
                    {
                        name: "于都县",
                        id: 1690
                    },
                    {
                        name: "章贡区",
                        id: 6035
                    }
                ]
            },
            {
                name: "吉安",
                id: 236,
                CountryList: [
                    {
                        name: "安福县",
                        id: 1691
                    },
                    {
                        name: "吉安市区",
                        id: 1692
                    },
                    {
                        name: "吉安县",
                        id: 1693
                    },
                    {
                        name: "吉水县",
                        id: 1694
                    },
                    {
                        name: "井冈山",
                        id: 1695
                    },
                    {
                        name: "遂川县",
                        id: 1696
                    },
                    {
                        name: "泰和县",
                        id: 1697
                    },
                    {
                        name: "万安县",
                        id: 1698
                    },
                    {
                        name: "峡江县",
                        id: 1699
                    },
                    {
                        name: "新干县",
                        id: 1700
                    },
                    {
                        name: "永丰县",
                        id: 1701
                    },
                    {
                        name: "永新县",
                        id: 1702
                    },
                    {
                        name: "吉州区",
                        id: 4535
                    },
                    {
                        name: "青原区",
                        id: 5858
                    }
                ]
            },
            {
                name: "景德镇",
                id: 237,
                CountryList: [
                    {
                        name: "浮梁县",
                        id: 1703
                    },
                    {
                        name: "景德镇市区",
                        id: 1704
                    },
                    {
                        name: "乐平市",
                        id: 1705
                    },
                    {
                        name: "昌江区",
                        id: 5180
                    },
                    {
                        name: "珠山区",
                        id: 5206
                    }
                ]
            },
            {
                name: "九江",
                id: 238,
                CountryList: [
                    {
                        name: "德安县",
                        id: 1706
                    },
                    {
                        name: "都昌县",
                        id: 1707
                    },
                    {
                        name: "湖口县",
                        id: 1708
                    },
                    {
                        name: "九江市区",
                        id: 1709
                    },
                    {
                        name: "九江县",
                        id: 1710
                    },
                    {
                        name: "彭泽县",
                        id: 1711
                    },
                    {
                        name: "瑞昌市",
                        id: 1712
                    },
                    {
                        name: "武宁县",
                        id: 1713
                    },
                    {
                        name: "星子县",
                        id: 1714
                    },
                    {
                        name: "修水县",
                        id: 1715
                    },
                    {
                        name: "永修县",
                        id: 1716
                    },
                    {
                        name: "浔阳区",
                        id: 4463
                    },
                    {
                        name: "庐山",
                        id: 4464
                    }
                ]
            },
            {
                name: "南昌",
                id: 239,
                CountryList: [
                    {
                        name: "安义县",
                        id: 1717
                    },
                    {
                        name: "进贤县",
                        id: 1718
                    },
                    {
                        name: "南昌市区",
                        id: 1719
                    },
                    {
                        name: "南昌县",
                        id: 1720
                    },
                    {
                        name: "新建县",
                        id: 1721
                    },
                    {
                        name: "东湖区",
                        id: 4451
                    },
                    {
                        name: "西湖区",
                        id: 4452
                    },
                    {
                        name: "青云谱区",
                        id: 4453
                    },
                    {
                        name: "湾里区",
                        id: 4454
                    },
                    {
                        name: "青山湖区",
                        id: 4455
                    },
                    {
                        name: "红谷滩新区",
                        id: 4518
                    },
                    {
                        name: "高新区",
                        id: 5252
                    }
                ]
            },
            {
                name: "萍乡",
                id: 240,
                CountryList: [
                    {
                        name: "莲花县",
                        id: 1722
                    },
                    {
                        name: "芦溪县",
                        id: 1723
                    },
                    {
                        name: "萍乡市区",
                        id: 1724
                    },
                    {
                        name: "上栗县",
                        id: 1725
                    },
                    {
                        name: "安源区",
                        id: 5178
                    },
                    {
                        name: "湘东区",
                        id: 6371
                    }
                ]
            },
            {
                name: "上饶",
                id: 241,
                CountryList: [
                    {
                        name: "鄱阳县",
                        id: 1726
                    },
                    {
                        name: "德兴市",
                        id: 1727
                    },
                    {
                        name: "广丰县",
                        id: 1728
                    },
                    {
                        name: "横峰县",
                        id: 1729
                    },
                    {
                        name: "铅山县",
                        id: 1730
                    },
                    {
                        name: "上饶市区",
                        id: 1731
                    },
                    {
                        name: "上饶县",
                        id: 1732
                    },
                    {
                        name: "万年县",
                        id: 1733
                    },
                    {
                        name: "余干县",
                        id: 1734
                    },
                    {
                        name: "玉山县",
                        id: 1735
                    },
                    {
                        name: "弋阳县",
                        id: 1736
                    },
                    {
                        name: "婺源县",
                        id: 1737
                    },
                    {
                        name: "信州区",
                        id: 5208
                    },
                    {
                        name: "城西区",
                        id: 5209
                    }
                ]
            },
            {
                name: "新余",
                id: 242,
                CountryList: [
                    {
                        name: "分宜县",
                        id: 1738
                    },
                    {
                        name: "新余市区",
                        id: 1739
                    },
                    {
                        name: "高新经济开发区",
                        id: 5188
                    },
                    {
                        name: "渝水区",
                        id: 6374
                    }
                ]
            },
            {
                name: "宜春",
                id: 243,
                CountryList: [
                    {
                        name: "丰城市",
                        id: 1740
                    },
                    {
                        name: "奉新县",
                        id: 1741
                    },
                    {
                        name: "高安市",
                        id: 1742
                    },
                    {
                        name: "靖安县",
                        id: 1743
                    },
                    {
                        name: "上高县",
                        id: 1744
                    },
                    {
                        name: "铜鼓县",
                        id: 1745
                    },
                    {
                        name: "万载县",
                        id: 1746
                    },
                    {
                        name: "宜春市区",
                        id: 1747
                    },
                    {
                        name: "宜丰县",
                        id: 1748
                    },
                    {
                        name: "樟树市",
                        id: 1749
                    },
                    {
                        name: "袁州区",
                        id: 5179
                    }
                ]
            },
            {
                name: "鹰潭",
                id: 244,
                CountryList: [
                    {
                        name: "贵溪市",
                        id: 1750
                    },
                    {
                        name: "鹰潭市区",
                        id: 1751
                    },
                    {
                        name: "余江县",
                        id: 1752
                    },
                    {
                        name: "月湖区",
                        id: 4995
                    }
                ]
            }
        ]
    },
    {
        name: "辽宁",
        id: 18,
        CityList: [
            {
                name: "鞍山",
                id: 245,
                CountryList: [
                    {
                        name: "鞍山市区",
                        id: 1753
                    },
                    {
                        name: "海城市",
                        id: 1754
                    },
                    {
                        name: "台安县",
                        id: 1755
                    },
                    {
                        name: "岫岩满族自治县",
                        id: 1756
                    },
                    {
                        name: "铁东区",
                        id: 3414
                    },
                    {
                        name: "铁西区",
                        id: 3415
                    },
                    {
                        name: "立山区",
                        id: 3416
                    },
                    {
                        name: "千山区",
                        id: 3417
                    }
                ]
            },
            {
                name: "本溪",
                id: 246,
                CountryList: [
                    {
                        name: "本溪满族自治县",
                        id: 1757
                    },
                    {
                        name: "本溪市区",
                        id: 1758
                    },
                    {
                        name: "桓仁满族自治县",
                        id: 1759
                    },
                    {
                        name: "平山区",
                        id: 3405
                    },
                    {
                        name: "溪湖区",
                        id: 3406
                    },
                    {
                        name: "明山区",
                        id: 3407
                    },
                    {
                        name: "南芬区",
                        id: 3408
                    }
                ]
            },
            {
                name: "朝阳",
                id: 247,
                CountryList: [
                    {
                        name: "北票市",
                        id: 1760
                    },
                    {
                        name: "朝阳市区",
                        id: 1761
                    },
                    {
                        name: "朝阳县",
                        id: 1762
                    },
                    {
                        name: "建平县",
                        id: 1763
                    },
                    {
                        name: "喀喇沁左翼蒙古族自治县",
                        id: 1764
                    },
                    {
                        name: "凌源市",
                        id: 1765
                    },
                    {
                        name: "双塔区",
                        id: 3392
                    },
                    {
                        name: "龙城区",
                        id: 3393
                    }
                ]
            },
            {
                name: "大连",
                id: 248,
                CountryList: [
                    {
                        name: "长海县",
                        id: 1766
                    },
                    {
                        name: "大连市区",
                        id: 1767
                    },
                    {
                        name: "普兰店市",
                        id: 1768
                    },
                    {
                        name: "瓦房店市",
                        id: 1769
                    },
                    {
                        name: "庄河市",
                        id: 1770
                    },
                    {
                        name: "西岗区",
                        id: 3421
                    },
                    {
                        name: "中山区",
                        id: 3422
                    },
                    {
                        name: "沙河口区",
                        id: 3423
                    },
                    {
                        name: "甘井子区",
                        id: 3424
                    },
                    {
                        name: "旅顺口区",
                        id: 3425
                    },
                    {
                        name: "金州区",
                        id: 3426
                    },
                    {
                        name: "经济技术开发区",
                        id: 4543
                    }
                ]
            },
            {
                name: "丹东",
                id: 249,
                CountryList: [
                    {
                        name: "丹东市区",
                        id: 1771
                    },
                    {
                        name: "东港市",
                        id: 1772
                    },
                    {
                        name: "凤城市",
                        id: 1773
                    },
                    {
                        name: "宽甸满族自治县",
                        id: 1774
                    },
                    {
                        name: "振兴区",
                        id: 3418
                    },
                    {
                        name: "元宝区",
                        id: 3419
                    },
                    {
                        name: "振安区",
                        id: 3420
                    }
                ]
            },
            {
                name: "抚顺",
                id: 250,
                CountryList: [
                    {
                        name: "抚顺市区",
                        id: 1775
                    },
                    {
                        name: "抚顺县",
                        id: 1776
                    },
                    {
                        name: "清原满族自治县",
                        id: 1777
                    },
                    {
                        name: "新宾满族自治县",
                        id: 1778
                    },
                    {
                        name: "顺城区",
                        id: 3401
                    },
                    {
                        name: "新抚区",
                        id: 3402
                    },
                    {
                        name: "东洲区",
                        id: 3403
                    },
                    {
                        name: "望花区",
                        id: 3404
                    }
                ]
            },
            {
                name: "阜新",
                id: 251,
                CountryList: [
                    {
                        name: "阜新蒙古族自治县",
                        id: 1779
                    },
                    {
                        name: "阜新市区",
                        id: 1780
                    },
                    {
                        name: "彰武县",
                        id: 1781
                    },
                    {
                        name: "海州区",
                        id: 3394
                    },
                    {
                        name: "新邱区",
                        id: 3395
                    },
                    {
                        name: "太平区",
                        id: 3396
                    },
                    {
                        name: "清河门区",
                        id: 3397
                    },
                    {
                        name: "细河区",
                        id: 3398
                    }
                ]
            },
            {
                name: "葫芦岛",
                id: 252,
                CountryList: [
                    {
                        name: "葫芦岛市区",
                        id: 1782
                    },
                    {
                        name: "建昌县",
                        id: 1783
                    },
                    {
                        name: "绥中县",
                        id: 1784
                    },
                    {
                        name: "兴城市",
                        id: 1785
                    },
                    {
                        name: "龙港区",
                        id: 3436
                    },
                    {
                        name: "连山区",
                        id: 3437
                    },
                    {
                        name: "南票区",
                        id: 3438
                    }
                ]
            },
            {
                name: "锦州",
                id: 253,
                CountryList: [
                    {
                        name: "北宁市",
                        id: 1786
                    },
                    {
                        name: "黑山县",
                        id: 1787
                    },
                    {
                        name: "锦州市区",
                        id: 1788
                    },
                    {
                        name: "凌海市",
                        id: 1789
                    },
                    {
                        name: "义县",
                        id: 1790
                    },
                    {
                        name: "太和区",
                        id: 3433
                    },
                    {
                        name: "古塔区",
                        id: 3434
                    },
                    {
                        name: "凌河区",
                        id: 3435
                    },
                    {
                        name: "经济开发区",
                        id: 4555
                    },
                    {
                        name: "龙栖湾新区",
                        id: 6372
                    }
                ]
            },
            {
                name: "辽阳",
                id: 254,
                CountryList: [
                    {
                        name: "灯塔市",
                        id: 1791
                    },
                    {
                        name: "辽阳市区",
                        id: 1792
                    },
                    {
                        name: "辽阳县",
                        id: 1793
                    },
                    {
                        name: "白塔区",
                        id: 3409
                    },
                    {
                        name: "文圣区",
                        id: 3410
                    },
                    {
                        name: "宏伟区",
                        id: 3411
                    },
                    {
                        name: "弓长岭区",
                        id: 3412
                    },
                    {
                        name: "太子河区",
                        id: 3413
                    }
                ]
            },
            {
                name: "盘锦",
                id: 255,
                CountryList: [
                    {
                        name: "大洼县",
                        id: 1794
                    },
                    {
                        name: "盘锦市区",
                        id: 1795
                    },
                    {
                        name: "盘山县",
                        id: 1796
                    },
                    {
                        name: "兴隆台区",
                        id: 3431
                    },
                    {
                        name: "双台子区",
                        id: 3432
                    }
                ]
            },
            {
                name: "沈阳",
                id: 256,
                CountryList: [
                    {
                        name: "法库县",
                        id: 1797
                    },
                    {
                        name: "康平县",
                        id: 1798
                    },
                    {
                        name: "辽中县",
                        id: 1799
                    },
                    {
                        name: "沈阳市区",
                        id: 1800
                    },
                    {
                        name: "新民市",
                        id: 1801
                    },
                    {
                        name: "沈河区",
                        id: 3383
                    },
                    {
                        name: "和平区",
                        id: 3384
                    },
                    {
                        name: "大东区",
                        id: 3385
                    },
                    {
                        name: "皇姑区",
                        id: 3386
                    },
                    {
                        name: "铁西区",
                        id: 3387
                    },
                    {
                        name: "苏家屯区",
                        id: 3388
                    },
                    {
                        name: "东陵区",
                        id: 3389
                    },
                    {
                        name: "新城子区",
                        id: 3390
                    },
                    {
                        name: "于洪区",
                        id: 3391
                    },
                    {
                        name: "浑南新区",
                        id: 5213
                    }
                ]
            },
            {
                name: "铁岭",
                id: 257,
                CountryList: [
                    {
                        name: "昌图县",
                        id: 1802
                    },
                    {
                        name: "调兵山市",
                        id: 1803
                    },
                    {
                        name: "开原市",
                        id: 1804
                    },
                    {
                        name: "铁岭市区",
                        id: 1805
                    },
                    {
                        name: "铁岭县",
                        id: 1806
                    },
                    {
                        name: "西丰县",
                        id: 1807
                    },
                    {
                        name: "银州区",
                        id: 3399
                    },
                    {
                        name: "清河区",
                        id: 3400
                    }
                ]
            },
            {
                name: "营口",
                id: 258,
                CountryList: [
                    {
                        name: "大石桥市",
                        id: 1808
                    },
                    {
                        name: "盖州市",
                        id: 1809
                    },
                    {
                        name: "营口市区",
                        id: 1810
                    },
                    {
                        name: "站前区",
                        id: 3427
                    },
                    {
                        name: "西市区",
                        id: 3428
                    },
                    {
                        name: "鲅鱼圈区",
                        id: 3429
                    },
                    {
                        name: "老边区",
                        id: 3430
                    }
                ]
            },
            {
                name: "兴城",
                id: 4580,
                CountryList: [
                    {
                        name: "兴城市区",
                        id: 5811
                    }
                ]
            }
        ]
    },
    {
        name: "内蒙古",
        id: 19,
        CityList: [
            {
                name: "阿拉善盟",
                id: 259,
                CountryList: [
                    {
                        name: "阿拉善右旗",
                        id: 1811
                    },
                    {
                        name: "阿拉善左旗",
                        id: 1812
                    },
                    {
                        name: "额济纳旗",
                        id: 1813
                    },
                    {
                        name: "阿拉善盟",
                        id: 3382
                    },
                    {
                        name: "巴彦浩特",
                        id: 5857
                    }
                ]
            },
            {
                name: "巴彦淖尔市",
                id: 260,
                CountryList: [
                    {
                        name: "杭锦后旗",
                        id: 1814
                    },
                    {
                        name: "临河市",
                        id: 1815
                    },
                    {
                        name: "乌拉特后旗",
                        id: 1816
                    },
                    {
                        name: "乌拉特前旗",
                        id: 1817
                    },
                    {
                        name: "乌拉特中旗",
                        id: 1818
                    },
                    {
                        name: "五原县",
                        id: 1819
                    },
                    {
                        name: "磴口县",
                        id: 1820
                    },
                    {
                        name: "临河区",
                        id: 3379
                    }
                ]
            },
            {
                name: "包头",
                id: 261,
                CountryList: [
                    {
                        name: "包头市区",
                        id: 1821
                    },
                    {
                        name: "达尔罕茂明安联合旗",
                        id: 1822
                    },
                    {
                        name: "固阳县",
                        id: 1823
                    },
                    {
                        name: "土默特右旗",
                        id: 1824
                    },
                    {
                        name: "昆都仑区",
                        id: 3363
                    },
                    {
                        name: "东河区",
                        id: 3364
                    },
                    {
                        name: "青山区",
                        id: 3365
                    },
                    {
                        name: "石拐区",
                        id: 3366
                    },
                    {
                        name: "白云矿区",
                        id: 3367
                    },
                    {
                        name: "九原区",
                        id: 3368
                    },
                    {
                        name: "稀土高新区",
                        id: 6103
                    }
                ]
            },
            {
                name: "赤峰",
                id: 262,
                CountryList: [
                    {
                        name: "阿鲁科尔沁旗",
                        id: 1825
                    },
                    {
                        name: "敖汉旗",
                        id: 1826
                    },
                    {
                        name: "巴林右旗",
                        id: 1827
                    },
                    {
                        name: "巴林左旗",
                        id: 1828
                    },
                    {
                        name: "赤峰市",
                        id: 1829
                    },
                    {
                        name: "喀喇沁旗",
                        id: 1830
                    },
                    {
                        name: "克什克腾旗",
                        id: 1831
                    },
                    {
                        name: "林西县",
                        id: 1832
                    },
                    {
                        name: "宁城县",
                        id: 1833
                    },
                    {
                        name: "翁牛特旗",
                        id: 1834
                    },
                    {
                        name: "红山区",
                        id: 3372
                    },
                    {
                        name: "元宝山区",
                        id: 3373
                    },
                    {
                        name: "松山区",
                        id: 3374
                    }
                ]
            },
            {
                name: "鄂尔多斯",
                id: 263,
                CountryList: [
                    {
                        name: "达拉特旗",
                        id: 1835
                    },
                    {
                        name: "鄂尔多斯市区",
                        id: 1836
                    },
                    {
                        name: "鄂托克旗",
                        id: 1837
                    },
                    {
                        name: "鄂托克前旗",
                        id: 1838
                    },
                    {
                        name: "杭锦旗",
                        id: 1839
                    },
                    {
                        name: "乌审旗",
                        id: 1840
                    },
                    {
                        name: "伊金霍洛旗",
                        id: 1841
                    },
                    {
                        name: "准格尔旗",
                        id: 1842
                    },
                    {
                        name: "东胜区",
                        id: 3377
                    }
                ]
            },
            {
                name: "呼和浩特",
                id: 264,
                CountryList: [
                    {
                        name: "和林格尔县",
                        id: 1843
                    },
                    {
                        name: "呼和浩特市区",
                        id: 1844
                    },
                    {
                        name: "清水河县",
                        id: 1845
                    },
                    {
                        name: "土默特左旗",
                        id: 1846
                    },
                    {
                        name: "托克托县",
                        id: 1847
                    },
                    {
                        name: "武川县",
                        id: 1848
                    },
                    {
                        name: "回民区",
                        id: 3359
                    },
                    {
                        name: "新城区",
                        id: 3360
                    },
                    {
                        name: "玉泉区",
                        id: 3361
                    },
                    {
                        name: "赛罕区",
                        id: 3362
                    },
                    {
                        name: "金桥开发区",
                        id: 5202
                    }
                ]
            },
            {
                name: "呼伦贝尔",
                id: 265,
                CountryList: [
                    {
                        name: "阿荣旗",
                        id: 1849
                    },
                    {
                        name: "陈巴尔虎旗",
                        id: 1850
                    },
                    {
                        name: "额尔古纳市",
                        id: 1851
                    },
                    {
                        name: "鄂伦春自治旗",
                        id: 1852
                    },
                    {
                        name: "鄂温克族自治旗",
                        id: 1853
                    },
                    {
                        name: "根河市",
                        id: 1854
                    },
                    {
                        name: "呼伦贝尔市区",
                        id: 1855
                    },
                    {
                        name: "满洲里市",
                        id: 1856
                    },
                    {
                        name: "莫力达瓦达斡尔族自治旗",
                        id: 1857
                    },
                    {
                        name: "新巴尔虎右旗",
                        id: 1858
                    },
                    {
                        name: "新巴尔虎左旗",
                        id: 1859
                    },
                    {
                        name: "牙克石市",
                        id: 1860
                    },
                    {
                        name: "扎兰屯市",
                        id: 1861
                    },
                    {
                        name: "海拉尔区",
                        id: 3376
                    }
                ]
            },
            {
                name: "通辽",
                id: 266,
                CountryList: [
                    {
                        name: "霍林郭勒市",
                        id: 1862
                    },
                    {
                        name: "开鲁县",
                        id: 1863
                    },
                    {
                        name: "科尔沁左翼后旗",
                        id: 1864
                    },
                    {
                        name: "科尔沁左翼中旗",
                        id: 1865
                    },
                    {
                        name: "库伦旗",
                        id: 1866
                    },
                    {
                        name: "奈曼旗",
                        id: 1867
                    },
                    {
                        name: "通辽市区",
                        id: 1868
                    },
                    {
                        name: "扎鲁特旗",
                        id: 1869
                    },
                    {
                        name: "科尔沁区",
                        id: 3375
                    }
                ]
            },
            {
                name: "乌海",
                id: 267,
                CountryList: [
                    {
                        name: "乌海市区",
                        id: 1870
                    },
                    {
                        name: "海勃湾区",
                        id: 3369
                    },
                    {
                        name: "海南区",
                        id: 3370
                    },
                    {
                        name: "乌达区",
                        id: 3371
                    },
                    {
                        name: "滨河区",
                        id: 6105
                    }
                ]
            },
            {
                name: "乌兰察布市",
                id: 268,
                CountryList: [
                    {
                        name: "察哈尔右翼后旗",
                        id: 1871
                    },
                    {
                        name: "察哈尔右翼前旗",
                        id: 1872
                    },
                    {
                        name: "察哈尔右翼中旗",
                        id: 1873
                    },
                    {
                        name: "丰镇市",
                        id: 1874
                    },
                    {
                        name: "化德县",
                        id: 1875
                    },
                    {
                        name: "集宁市",
                        id: 1876
                    },
                    {
                        name: "凉城县",
                        id: 1877
                    },
                    {
                        name: "商都县",
                        id: 1878
                    },
                    {
                        name: "四子王旗",
                        id: 1879
                    },
                    {
                        name: "兴和县",
                        id: 1880
                    },
                    {
                        name: "卓资县",
                        id: 1881
                    },
                    {
                        name: "集宁区",
                        id: 3378
                    }
                ]
            },
            {
                name: "锡林郭勒盟",
                id: 269,
                CountryList: [
                    {
                        name: "阿巴嘎旗",
                        id: 1882
                    },
                    {
                        name: "东乌珠穆沁旗",
                        id: 1883
                    },
                    {
                        name: "多伦县",
                        id: 1884
                    },
                    {
                        name: "二连浩特市",
                        id: 1885
                    },
                    {
                        name: "苏尼特右旗",
                        id: 1886
                    },
                    {
                        name: "苏尼特左旗",
                        id: 1887
                    },
                    {
                        name: "太仆寺旗",
                        id: 1888
                    },
                    {
                        name: "西乌珠穆沁旗",
                        id: 1889
                    },
                    {
                        name: "锡林浩特市",
                        id: 1890
                    },
                    {
                        name: "镶黄旗",
                        id: 1891
                    },
                    {
                        name: "正蓝旗",
                        id: 1892
                    },
                    {
                        name: "正镶白旗",
                        id: 1893
                    },
                    {
                        name: "锡林郭勒盟",
                        id: 3381
                    },
                    {
                        name: "乌拉盖管理区",
                        id: 5851
                    }
                ]
            },
            {
                name: "兴安盟",
                id: 270,
                CountryList: [
                    {
                        name: "阿尔山市",
                        id: 1894
                    },
                    {
                        name: "科尔沁右翼前旗",
                        id: 1895
                    },
                    {
                        name: "科尔沁右翼中旗",
                        id: 1896
                    },
                    {
                        name: "突泉县",
                        id: 1897
                    },
                    {
                        name: "乌兰浩特市",
                        id: 1898
                    },
                    {
                        name: "扎赉特旗",
                        id: 1899
                    },
                    {
                        name: "兴安盟",
                        id: 3380
                    }
                ]
            }
        ]
    },
    {
        name: "宁夏",
        id: 20,
        CityList: [
            {
                name: "固原",
                id: 271,
                CountryList: [
                    {
                        name: "固原市区",
                        id: 1900
                    },
                    {
                        name: "海原县",
                        id: 1901
                    },
                    {
                        name: "隆德县",
                        id: 1902
                    },
                    {
                        name: "彭阳县",
                        id: 1903
                    },
                    {
                        name: "西吉县",
                        id: 1904
                    },
                    {
                        name: "泾源县",
                        id: 1905
                    },
                    {
                        name: "原州区",
                        id: 3591
                    }
                ]
            },
            {
                name: "石嘴山",
                id: 272,
                CountryList: [
                    {
                        name: "惠农县",
                        id: 1906
                    },
                    {
                        name: "平罗县",
                        id: 1907
                    },
                    {
                        name: "石嘴山市区",
                        id: 1908
                    },
                    {
                        name: "陶乐县",
                        id: 1909
                    },
                    {
                        name: "大武口区",
                        id: 3578
                    },
                    {
                        name: "惠农区",
                        id: 3580
                    }
                ]
            },
            {
                name: "吴忠",
                id: 273,
                CountryList: [
                    {
                        name: "青铜峡市",
                        id: 1910
                    },
                    {
                        name: "同心县",
                        id: 1911
                    },
                    {
                        name: "吴忠市区",
                        id: 1912
                    },
                    {
                        name: "盐池县",
                        id: 1913
                    },
                    {
                        name: "中宁县",
                        id: 1914
                    },
                    {
                        name: "中卫县",
                        id: 1915
                    },
                    {
                        name: "利通区",
                        id: 3586
                    }
                ]
            },
            {
                name: "银川",
                id: 274,
                CountryList: [
                    {
                        name: "贺兰县",
                        id: 1916
                    },
                    {
                        name: "灵武市",
                        id: 1917
                    },
                    {
                        name: "银川市区",
                        id: 1918
                    },
                    {
                        name: "永宁县",
                        id: 1919
                    },
                    {
                        name: "兴庆区",
                        id: 3570
                    },
                    {
                        name: "金凤区",
                        id: 3572
                    },
                    {
                        name: "西夏区",
                        id: 3575
                    }
                ]
            },
            {
                name: "中卫",
                id: 3105,
                CountryList: [
                    {
                        name: "沙坡头区",
                        id: 3594
                    },
                    {
                        name: "中卫市",
                        id: 3604
                    },
                    {
                        name: "中宁县",
                        id: 3606
                    },
                    {
                        name: "海原县",
                        id: 3610
                    }
                ]
            }
        ]
    },
    {
        name: "青海",
        id: 21,
        CityList: [
            {
                name: "果洛",
                id: 275,
                CountryList: [
                    {
                        name: "班玛县",
                        id: 1920
                    },
                    {
                        name: "达日县",
                        id: 1921
                    },
                    {
                        name: "甘德县",
                        id: 1922
                    },
                    {
                        name: "久治县",
                        id: 1923
                    },
                    {
                        name: "玛多县",
                        id: 1924
                    },
                    {
                        name: "玛沁县",
                        id: 1925
                    }
                ]
            },
            {
                name: "海北",
                id: 276,
                CountryList: [
                    {
                        name: "刚察县",
                        id: 1926
                    },
                    {
                        name: "海晏县",
                        id: 1927
                    },
                    {
                        name: "门源",
                        id: 1928
                    },
                    {
                        name: "祁连县",
                        id: 1929
                    }
                ]
            },
            {
                name: "海东",
                id: 277,
                CountryList: [
                    {
                        name: "互助土族自治县",
                        id: 1930
                    },
                    {
                        name: "化隆回族自治县",
                        id: 1931
                    },
                    {
                        name: "乐都县",
                        id: 1932
                    },
                    {
                        name: "民和回族土族自治县",
                        id: 1933
                    },
                    {
                        name: "平安县",
                        id: 1934
                    },
                    {
                        name: "循化撒拉族自治县",
                        id: 1935
                    }
                ]
            },
            {
                name: "海南藏族",
                id: 278,
                CountryList: [
                    {
                        name: "共和县",
                        id: 1936
                    },
                    {
                        name: "贵德县",
                        id: 1937
                    },
                    {
                        name: "贵南县",
                        id: 1938
                    },
                    {
                        name: "同德县",
                        id: 1939
                    },
                    {
                        name: "兴海县",
                        id: 1940
                    }
                ]
            },
            {
                name: "海西",
                id: 279,
                CountryList: [
                    {
                        name: "德令哈市",
                        id: 1941
                    },
                    {
                        name: "都兰县",
                        id: 1942
                    },
                    {
                        name: "格尔木市",
                        id: 1943
                    },
                    {
                        name: "天峻县",
                        id: 1944
                    },
                    {
                        name: "乌兰县",
                        id: 1945
                    }
                ]
            },
            {
                name: "黄南",
                id: 280,
                CountryList: [
                    {
                        name: "河南蒙古族自治县",
                        id: 1946
                    },
                    {
                        name: "尖扎县",
                        id: 1947
                    },
                    {
                        name: "同仁县",
                        id: 1948
                    },
                    {
                        name: "泽库县",
                        id: 1949
                    }
                ]
            },
            {
                name: "西宁",
                id: 281,
                CountryList: [
                    {
                        name: "大通回族土族自治县",
                        id: 1950
                    },
                    {
                        name: "西宁市区",
                        id: 1951
                    },
                    {
                        name: "湟源县",
                        id: 1952
                    },
                    {
                        name: "湟中县",
                        id: 1953
                    },
                    {
                        name: "城中区",
                        id: 3622
                    },
                    {
                        name: "城东区",
                        id: 3625
                    },
                    {
                        name: "城西区",
                        id: 3628
                    },
                    {
                        name: "城北区",
                        id: 3630
                    }
                ]
            },
            {
                name: "玉树",
                id: 282,
                CountryList: [
                    {
                        name: "称多县",
                        id: 1954
                    },
                    {
                        name: "囊谦县",
                        id: 1955
                    },
                    {
                        name: "曲麻莱县",
                        id: 1956
                    },
                    {
                        name: "玉树县",
                        id: 1957
                    },
                    {
                        name: "杂多县",
                        id: 1958
                    },
                    {
                        name: "治多县",
                        id: 1959
                    }
                ]
            }
        ]
    },
    {
        name: "山东",
        id: 22,
        CityList: [
            {
                name: "滨州",
                id: 283,
                CountryList: [
                    {
                        name: "滨州市区",
                        id: 1960
                    },
                    {
                        name: "博兴县",
                        id: 1961
                    },
                    {
                        name: "惠民县",
                        id: 1962
                    },
                    {
                        name: "无棣县",
                        id: 1963
                    },
                    {
                        name: "阳信县",
                        id: 1964
                    },
                    {
                        name: "沾化县",
                        id: 1965
                    },
                    {
                        name: "邹平县",
                        id: 1966
                    },
                    {
                        name: "滨城区",
                        id: 4042
                    }
                ]
            },
            {
                name: "德州",
                id: 284,
                CountryList: [
                    {
                        name: "德州市区",
                        id: 1967
                    },
                    {
                        name: "乐陵市",
                        id: 1968
                    },
                    {
                        name: "临邑县",
                        id: 1969
                    },
                    {
                        name: "陵县",
                        id: 1970
                    },
                    {
                        name: "宁津县",
                        id: 1971
                    },
                    {
                        name: "平原县",
                        id: 1972
                    },
                    {
                        name: "齐河县",
                        id: 1973
                    },
                    {
                        name: "庆云县",
                        id: 1974
                    },
                    {
                        name: "武城县",
                        id: 1975
                    },
                    {
                        name: "夏津县",
                        id: 1976
                    },
                    {
                        name: "禹城市",
                        id: 1977
                    },
                    {
                        name: "德城区",
                        id: 3912
                    }
                ]
            },
            {
                name: "东营",
                id: 285,
                CountryList: [
                    {
                        name: "东营市区",
                        id: 1978
                    },
                    {
                        name: "广饶县",
                        id: 1979
                    },
                    {
                        name: "垦利县",
                        id: 1980
                    },
                    {
                        name: "利津县",
                        id: 1981
                    },
                    {
                        name: "东营区",
                        id: 3921
                    },
                    {
                        name: "河口区",
                        id: 3923
                    },
                    {
                        name: "东城区",
                        id: 6043
                    },
                    {
                        name: "西城区",
                        id: 6044
                    }
                ]
            },
            {
                name: "菏泽",
                id: 286,
                CountryList: [
                    {
                        name: "曹县",
                        id: 1982
                    },
                    {
                        name: "成武县",
                        id: 1983
                    },
                    {
                        name: "单县",
                        id: 1984
                    },
                    {
                        name: "定陶县",
                        id: 1985
                    },
                    {
                        name: "东明县",
                        id: 1986
                    },
                    {
                        name: "菏泽市区",
                        id: 1987
                    },
                    {
                        name: "巨野县",
                        id: 1988
                    },
                    {
                        name: "郓城县",
                        id: 1989
                    },
                    {
                        name: "鄄城县",
                        id: 1990
                    },
                    {
                        name: "牡丹区",
                        id: 4043
                    },
                    {
                        name: "开发区",
                        id: 5254
                    }
                ]
            },
            {
                name: "济南",
                id: 287,
                CountryList: [
                    {
                        name: "济南市区",
                        id: 1991
                    },
                    {
                        name: "济阳县",
                        id: 1992
                    },
                    {
                        name: "平阴县",
                        id: 1993
                    },
                    {
                        name: "商河县",
                        id: 1994
                    },
                    {
                        name: "章丘市",
                        id: 1995
                    },
                    {
                        name: "市中区",
                        id: 3879
                    },
                    {
                        name: "历下区",
                        id: 3881
                    },
                    {
                        name: "槐荫区",
                        id: 3884
                    },
                    {
                        name: "天桥区",
                        id: 3889
                    },
                    {
                        name: "历城区",
                        id: 3892
                    },
                    {
                        name: "长清区",
                        id: 3897
                    },
                    {
                        name: "高新技术开发区",
                        id: 5141
                    },
                    {
                        name: "高新区",
                        id: 5142
                    }
                ]
            },
            {
                name: "济宁",
                id: 288,
                CountryList: [
                    {
                        name: "济宁市区",
                        id: 1996
                    },
                    {
                        name: "嘉祥县",
                        id: 1997
                    },
                    {
                        name: "金乡县",
                        id: 1998
                    },
                    {
                        name: "梁山县",
                        id: 1999
                    },
                    {
                        name: "曲阜市",
                        id: 2000
                    },
                    {
                        name: "微山县",
                        id: 2001
                    },
                    {
                        name: "鱼台县",
                        id: 2002
                    },
                    {
                        name: "邹城市",
                        id: 2003
                    },
                    {
                        name: "兖州市",
                        id: 2004
                    },
                    {
                        name: "汶上县",
                        id: 2005
                    },
                    {
                        name: "泗水县",
                        id: 2006
                    },
                    {
                        name: "市中区",
                        id: 4030
                    },
                    {
                        name: "任城区",
                        id: 4035
                    }
                ]
            },
            {
                name: "莱芜",
                id: 289,
                CountryList: [
                    {
                        name: "莱芜市区",
                        id: 2007
                    },
                    {
                        name: "莱城区",
                        id: 4040
                    },
                    {
                        name: "钢城区",
                        id: 4041
                    }
                ]
            },
            {
                name: "聊城",
                id: 290,
                CountryList: [
                    {
                        name: "东阿县",
                        id: 2008
                    },
                    {
                        name: "高唐县",
                        id: 2009
                    },
                    {
                        name: "冠县",
                        id: 2010
                    },
                    {
                        name: "聊城市区",
                        id: 2011
                    },
                    {
                        name: "临清市",
                        id: 2012
                    },
                    {
                        name: "阳谷县",
                        id: 2013
                    },
                    {
                        name: "茌平县",
                        id: 2014
                    },
                    {
                        name: "莘县",
                        id: 2015
                    },
                    {
                        name: "东昌府区",
                        id: 3907
                    }
                ]
            },
            {
                name: "临沂",
                id: 291,
                CountryList: [
                    {
                        name: "苍山县",
                        id: 2016
                    },
                    {
                        name: "费县",
                        id: 2017
                    },
                    {
                        name: "临沂市区",
                        id: 2018
                    },
                    {
                        name: "临沭县",
                        id: 2019
                    },
                    {
                        name: "蒙阴县",
                        id: 2020
                    },
                    {
                        name: "平邑县",
                        id: 2021
                    },
                    {
                        name: "沂南县",
                        id: 2022
                    },
                    {
                        name: "沂水县",
                        id: 2023
                    },
                    {
                        name: "郯城县",
                        id: 2024
                    },
                    {
                        name: "莒南县",
                        id: 2025
                    },
                    {
                        name: "兰山区",
                        id: 3998
                    },
                    {
                        name: "罗庄区",
                        id: 3999
                    },
                    {
                        name: "河东区",
                        id: 4001
                    }
                ]
            },
            {
                name: "青岛",
                id: 292,
                CountryList: [
                    {
                        name: "即墨市",
                        id: 2026
                    },
                    {
                        name: "胶南市",
                        id: 2027
                    },
                    {
                        name: "胶州市",
                        id: 2028
                    },
                    {
                        name: "莱西市",
                        id: 2029
                    },
                    {
                        name: "平度市",
                        id: 2030
                    },
                    {
                        name: "青岛市区",
                        id: 2031
                    },
                    {
                        name: "市南区",
                        id: 3975
                    },
                    {
                        name: "市北区",
                        id: 3978
                    },
                    {
                        name: "四方区",
                        id: 3980
                    },
                    {
                        name: "黄岛区",
                        id: 3981
                    },
                    {
                        name: "崂山区",
                        id: 3983
                    },
                    {
                        name: "城阳区",
                        id: 3985
                    },
                    {
                        name: "李沧区",
                        id: 3987
                    }
                ]
            },
            {
                name: "日照",
                id: 293,
                CountryList: [
                    {
                        name: "日照市区",
                        id: 2032
                    },
                    {
                        name: "五莲县",
                        id: 2033
                    },
                    {
                        name: "莒县",
                        id: 2034
                    },
                    {
                        name: "东港区",
                        id: 3991
                    },
                    {
                        name: "岚山区",
                        id: 3993
                    },
                    {
                        name: "新市区",
                        id: 5143
                    },
                    {
                        name: "经济开发区",
                        id: 5144
                    }
                ]
            },
            {
                name: "泰安",
                id: 294,
                CountryList: [
                    {
                        name: "东平县",
                        id: 2035
                    },
                    {
                        name: "肥城市",
                        id: 2036
                    },
                    {
                        name: "宁阳县",
                        id: 2037
                    },
                    {
                        name: "泰安市区",
                        id: 2038
                    },
                    {
                        name: "新泰市",
                        id: 2039
                    },
                    {
                        name: "泰山",
                        id: 4037
                    },
                    {
                        name: "岱岳区",
                        id: 4038
                    }
                ]
            },
            {
                name: "威海",
                id: 295,
                CountryList: [
                    {
                        name: "荣成市",
                        id: 2040
                    },
                    {
                        name: "乳山市",
                        id: 2041
                    },
                    {
                        name: "威海市区",
                        id: 2042
                    },
                    {
                        name: "文登市",
                        id: 2043
                    },
                    {
                        name: "环翠区",
                        id: 3970
                    },
                    {
                        name: "高新区",
                        id: 5145
                    },
                    {
                        name: "经济开发区",
                        id: 5146
                    }
                ]
            },
            {
                name: "潍坊",
                id: 296,
                CountryList: [
                    {
                        name: "安丘市",
                        id: 2044
                    },
                    {
                        name: "昌乐县",
                        id: 2045
                    },
                    {
                        name: "昌邑市",
                        id: 2046
                    },
                    {
                        name: "高密市",
                        id: 2047
                    },
                    {
                        name: "临朐县",
                        id: 2048
                    },
                    {
                        name: "青州市",
                        id: 2049
                    },
                    {
                        name: "寿光市",
                        id: 2050
                    },
                    {
                        name: "潍坊市区",
                        id: 2051
                    },
                    {
                        name: "诸城市",
                        id: 2052
                    },
                    {
                        name: "潍城区",
                        id: 3952
                    },
                    {
                        name: "寒亭区",
                        id: 3955
                    },
                    {
                        name: "坊子区",
                        id: 3957
                    },
                    {
                        name: "奎文区",
                        id: 3958
                    }
                ]
            },
            {
                name: "烟台",
                id: 297,
                CountryList: [
                    {
                        name: "长岛县",
                        id: 2053
                    },
                    {
                        name: "海阳市",
                        id: 2054
                    },
                    {
                        name: "莱阳市",
                        id: 2055
                    },
                    {
                        name: "莱州市",
                        id: 2056
                    },
                    {
                        name: "龙口市",
                        id: 2057
                    },
                    {
                        name: "蓬莱市",
                        id: 2058
                    },
                    {
                        name: "栖霞市",
                        id: 2059
                    },
                    {
                        name: "烟台市区",
                        id: 2060
                    },
                    {
                        name: "招远市",
                        id: 2061
                    },
                    {
                        name: "莱山区",
                        id: 3961
                    },
                    {
                        name: "芝罘区",
                        id: 3962
                    },
                    {
                        name: "福山区",
                        id: 3965
                    },
                    {
                        name: "牟平区",
                        id: 3968
                    },
                    {
                        name: "经济技术开发区",
                        id: 4234
                    }
                ]
            },
            {
                name: "枣庄",
                id: 298,
                CountryList: [
                    {
                        name: "枣庄市区",
                        id: 2062
                    },
                    {
                        name: "滕州市",
                        id: 2063
                    },
                    {
                        name: "薛城区",
                        id: 4005
                    },
                    {
                        name: "市中区",
                        id: 4011
                    },
                    {
                        name: "峄城区",
                        id: 4013
                    },
                    {
                        name: "台儿庄区",
                        id: 4014
                    },
                    {
                        name: "山亭区",
                        id: 4017
                    },
                    {
                        name: "高新区",
                        id: 6099
                    }
                ]
            },
            {
                name: "淄博",
                id: 299,
                CountryList: [
                    {
                        name: "高青县",
                        id: 2064
                    },
                    {
                        name: "桓台县",
                        id: 2065
                    },
                    {
                        name: "沂源县",
                        id: 2066
                    },
                    {
                        name: "淄博市区",
                        id: 2067
                    },
                    {
                        name: "张店区",
                        id: 3931
                    },
                    {
                        name: "淄川区",
                        id: 3933
                    },
                    {
                        name: "博山区",
                        id: 3935
                    },
                    {
                        name: "临淄区",
                        id: 3940
                    },
                    {
                        name: "周村区",
                        id: 3944
                    }
                ]
            }
        ]
    },
    {
        name: "山西",
        id: 23,
        CityList: [
            {
                name: "长治",
                id: 300,
                CountryList: [
                    {
                        name: "长治市区",
                        id: 2068
                    },
                    {
                        name: "长治县",
                        id: 2069
                    },
                    {
                        name: "长子县",
                        id: 2070
                    },
                    {
                        name: "壶关县",
                        id: 2071
                    },
                    {
                        name: "黎城县",
                        id: 2072
                    },
                    {
                        name: "潞城市",
                        id: 2073
                    },
                    {
                        name: "平顺县",
                        id: 2074
                    },
                    {
                        name: "沁县",
                        id: 2075
                    },
                    {
                        name: "沁源县",
                        id: 2076
                    },
                    {
                        name: "屯留县",
                        id: 2077
                    },
                    {
                        name: "武乡县",
                        id: 2078
                    },
                    {
                        name: "襄垣县",
                        id: 2079
                    },
                    {
                        name: "城区",
                        id: 3351
                    },
                    {
                        name: "郊区",
                        id: 3352
                    }
                ]
            },
            {
                name: "大同",
                id: 301,
                CountryList: [
                    {
                        name: "大同市区",
                        id: 2080
                    },
                    {
                        name: "大同县",
                        id: 2081
                    },
                    {
                        name: "广灵县",
                        id: 2082
                    },
                    {
                        name: "浑源县",
                        id: 2083
                    },
                    {
                        name: "灵丘县",
                        id: 2084
                    },
                    {
                        name: "天镇县",
                        id: 2085
                    },
                    {
                        name: "阳高县",
                        id: 2086
                    },
                    {
                        name: "左云县",
                        id: 2087
                    },
                    {
                        name: "城区",
                        id: 3344
                    },
                    {
                        name: "矿区",
                        id: 3345
                    },
                    {
                        name: "南郊区",
                        id: 3346
                    },
                    {
                        name: "新荣区",
                        id: 3347
                    }
                ]
            },
            {
                name: "晋城",
                id: 302,
                CountryList: [
                    {
                        name: "高平市",
                        id: 2088
                    },
                    {
                        name: "晋城市区",
                        id: 2089
                    },
                    {
                        name: "陵川县",
                        id: 2090
                    },
                    {
                        name: "沁水县",
                        id: 2091
                    },
                    {
                        name: "阳城县",
                        id: 2092
                    },
                    {
                        name: "泽州县",
                        id: 2093
                    },
                    {
                        name: "城区",
                        id: 3353
                    }
                ]
            },
            {
                name: "晋中",
                id: 303,
                CountryList: [
                    {
                        name: "和顺县",
                        id: 2094
                    },
                    {
                        name: "介休市",
                        id: 2095
                    },
                    {
                        name: "晋中市区",
                        id: 2096
                    },
                    {
                        name: "灵石县",
                        id: 2097
                    },
                    {
                        name: "平遥县",
                        id: 2098
                    },
                    {
                        name: "祁县",
                        id: 2099
                    },
                    {
                        name: "寿阳县",
                        id: 2100
                    },
                    {
                        name: "太谷县",
                        id: 2101
                    },
                    {
                        name: "昔阳县",
                        id: 2102
                    },
                    {
                        name: "榆社县",
                        id: 2103
                    },
                    {
                        name: "左权县",
                        id: 2104
                    },
                    {
                        name: "榆次区",
                        id: 3355
                    }
                ]
            },
            {
                name: "临汾",
                id: 304,
                CountryList: [
                    {
                        name: "安泽县",
                        id: 2105
                    },
                    {
                        name: "大宁县",
                        id: 2106
                    },
                    {
                        name: "汾西县",
                        id: 2107
                    },
                    {
                        name: "浮山县",
                        id: 2108
                    },
                    {
                        name: "古县",
                        id: 2109
                    },
                    {
                        name: "洪洞县",
                        id: 2110
                    },
                    {
                        name: "侯马市",
                        id: 2111
                    },
                    {
                        name: "霍州市",
                        id: 2112
                    },
                    {
                        name: "吉县",
                        id: 2113
                    },
                    {
                        name: "临汾市区",
                        id: 2114
                    },
                    {
                        name: "蒲县",
                        id: 2115
                    },
                    {
                        name: "曲沃县",
                        id: 2116
                    },
                    {
                        name: "襄汾县",
                        id: 2117
                    },
                    {
                        name: "乡宁县",
                        id: 2118
                    },
                    {
                        name: "翼城县",
                        id: 2119
                    },
                    {
                        name: "永和县",
                        id: 2120
                    },
                    {
                        name: "隰县",
                        id: 2121
                    },
                    {
                        name: "尧都区",
                        id: 3356
                    }
                ]
            },
            {
                name: "吕梁",
                id: 305,
                CountryList: [
                    {
                        name: "方山县",
                        id: 2122
                    },
                    {
                        name: "汾阳市",
                        id: 2123
                    },
                    {
                        name: "交城县",
                        id: 2124
                    },
                    {
                        name: "交口县",
                        id: 2125
                    },
                    {
                        name: "离石市",
                        id: 2126
                    },
                    {
                        name: "临县",
                        id: 2127
                    },
                    {
                        name: "柳林县",
                        id: 2128
                    },
                    {
                        name: "石楼县",
                        id: 2129
                    },
                    {
                        name: "文水县",
                        id: 2130
                    },
                    {
                        name: "孝义市",
                        id: 2131
                    },
                    {
                        name: "兴县",
                        id: 2132
                    },
                    {
                        name: "中阳县",
                        id: 2133
                    },
                    {
                        name: "岚县",
                        id: 2134
                    },
                    {
                        name: "离石区",
                        id: 3357
                    }
                ]
            },
            {
                name: "朔州",
                id: 306,
                CountryList: [
                    {
                        name: "怀仁县",
                        id: 2135
                    },
                    {
                        name: "山阴县",
                        id: 2136
                    },
                    {
                        name: "朔州市区",
                        id: 2137
                    },
                    {
                        name: "应县",
                        id: 2138
                    },
                    {
                        name: "右玉县",
                        id: 2139
                    },
                    {
                        name: "朔城区",
                        id: 3342
                    },
                    {
                        name: "平鲁区",
                        id: 3343
                    }
                ]
            },
            {
                name: "太原",
                id: 307,
                CountryList: [
                    {
                        name: "古交市",
                        id: 2140
                    },
                    {
                        name: "娄烦县",
                        id: 2141
                    },
                    {
                        name: "清徐县",
                        id: 2142
                    },
                    {
                        name: "太原市区",
                        id: 2143
                    },
                    {
                        name: "阳曲县",
                        id: 2144
                    },
                    {
                        name: "杏花岭区",
                        id: 3336
                    },
                    {
                        name: "小店区",
                        id: 3337
                    },
                    {
                        name: "迎泽区",
                        id: 3338
                    },
                    {
                        name: "尖草坪区",
                        id: 3339
                    },
                    {
                        name: "万柏林区",
                        id: 3340
                    },
                    {
                        name: "晋源区",
                        id: 3341
                    },
                    {
                        name: "高新区",
                        id: 5149
                    }
                ]
            },
            {
                name: "忻州",
                id: 308,
                CountryList: [
                    {
                        name: "保德县",
                        id: 2145
                    },
                    {
                        name: "代县",
                        id: 2146
                    },
                    {
                        name: "定襄县",
                        id: 2147
                    },
                    {
                        name: "繁峙县",
                        id: 2148
                    },
                    {
                        name: "河曲县",
                        id: 2149
                    },
                    {
                        name: "静乐县",
                        id: 2150
                    },
                    {
                        name: "宁武县",
                        id: 2151
                    },
                    {
                        name: "偏关县",
                        id: 2152
                    },
                    {
                        name: "神池县",
                        id: 2153
                    },
                    {
                        name: "五台县",
                        id: 2154
                    },
                    {
                        name: "五寨县",
                        id: 2155
                    },
                    {
                        name: "忻州市区",
                        id: 2156
                    },
                    {
                        name: "原平市",
                        id: 2157
                    },
                    {
                        name: "岢岚县",
                        id: 2158
                    },
                    {
                        name: "忻府区",
                        id: 3354
                    }
                ]
            },
            {
                name: "阳泉",
                id: 309,
                CountryList: [
                    {
                        name: "平定县",
                        id: 2159
                    },
                    {
                        name: "阳泉市区",
                        id: 2160
                    },
                    {
                        name: "盂县",
                        id: 2161
                    },
                    {
                        name: "城区",
                        id: 3348
                    },
                    {
                        name: "矿区",
                        id: 3349
                    },
                    {
                        name: "郊区",
                        id: 3350
                    }
                ]
            },
            {
                name: "运城",
                id: 310,
                CountryList: [
                    {
                        name: "河津市",
                        id: 2162
                    },
                    {
                        name: "临猗县",
                        id: 2163
                    },
                    {
                        name: "平陆县",
                        id: 2164
                    },
                    {
                        name: "万荣县",
                        id: 2165
                    },
                    {
                        name: "闻喜县",
                        id: 2166
                    },
                    {
                        name: "夏县",
                        id: 2167
                    },
                    {
                        name: "新绛县",
                        id: 2168
                    },
                    {
                        name: "永济市",
                        id: 2169
                    },
                    {
                        name: "垣曲县",
                        id: 2170
                    },
                    {
                        name: "运城市区",
                        id: 2171
                    },
                    {
                        name: "芮城县",
                        id: 2172
                    },
                    {
                        name: "绛县",
                        id: 2173
                    },
                    {
                        name: "稷山县",
                        id: 2174
                    },
                    {
                        name: "盐湖区",
                        id: 3358
                    }
                ]
            }
        ]
    },
    {
        name: "陕西",
        id: 24,
        CityList: [
            {
                name: "安康",
                id: 311,
                CountryList: [
                    {
                        name: "安康市区",
                        id: 2175
                    },
                    {
                        name: "白河县",
                        id: 2176
                    },
                    {
                        name: "汉阴县",
                        id: 2177
                    },
                    {
                        name: "宁陕县",
                        id: 2178
                    },
                    {
                        name: "平利县",
                        id: 2179
                    },
                    {
                        name: "石泉县",
                        id: 2180
                    },
                    {
                        name: "旬阳县",
                        id: 2181
                    },
                    {
                        name: "镇坪县",
                        id: 2182
                    },
                    {
                        name: "紫阳县",
                        id: 2183
                    },
                    {
                        name: "岚皋县",
                        id: 2184
                    },
                    {
                        name: "汉滨区",
                        id: 3860
                    }
                ]
            },
            {
                name: "宝鸡",
                id: 312,
                CountryList: [
                    {
                        name: "宝鸡市区",
                        id: 2185
                    },
                    {
                        name: "宝鸡县",
                        id: 2186
                    },
                    {
                        name: "凤县",
                        id: 2187
                    },
                    {
                        name: "凤翔县",
                        id: 2188
                    },
                    {
                        name: "扶风县",
                        id: 2189
                    },
                    {
                        name: "陇县",
                        id: 2190
                    },
                    {
                        name: "眉县",
                        id: 2191
                    },
                    {
                        name: "千阳县",
                        id: 2192
                    },
                    {
                        name: "太白县",
                        id: 2193
                    },
                    {
                        name: "岐山县",
                        id: 2194
                    },
                    {
                        name: "麟游县",
                        id: 2195
                    },
                    {
                        name: "渭滨区",
                        id: 3835
                    },
                    {
                        name: "金台区",
                        id: 3838
                    },
                    {
                        name: "陈仓区",
                        id: 3841
                    }
                ]
            },
            {
                name: "汉中",
                id: 313,
                CountryList: [
                    {
                        name: "城固县",
                        id: 2196
                    },
                    {
                        name: "佛坪县",
                        id: 2197
                    },
                    {
                        name: "汉中市区",
                        id: 2198
                    },
                    {
                        name: "留坝县",
                        id: 2199
                    },
                    {
                        name: "略阳县",
                        id: 2200
                    },
                    {
                        name: "勉县",
                        id: 2201
                    },
                    {
                        name: "南郑县",
                        id: 2202
                    },
                    {
                        name: "宁强县",
                        id: 2203
                    },
                    {
                        name: "西乡县",
                        id: 2204
                    },
                    {
                        name: "洋县",
                        id: 2205
                    },
                    {
                        name: "镇巴县",
                        id: 2206
                    },
                    {
                        name: "汉台区",
                        id: 3847
                    }
                ]
            },
            {
                name: "商洛",
                id: 314,
                CountryList: [
                    {
                        name: "丹凤县",
                        id: 2207
                    },
                    {
                        name: "洛南县",
                        id: 2208
                    },
                    {
                        name: "山阳县",
                        id: 2209
                    },
                    {
                        name: "商洛市区",
                        id: 2210
                    },
                    {
                        name: "商南县",
                        id: 2211
                    },
                    {
                        name: "镇安县",
                        id: 2212
                    },
                    {
                        name: "柞水县",
                        id: 2213
                    },
                    {
                        name: "商州区",
                        id: 3865
                    }
                ]
            },
            {
                name: "铜川",
                id: 315,
                CountryList: [
                    {
                        name: "铜川市区",
                        id: 2214
                    },
                    {
                        name: "宜君县",
                        id: 2215
                    },
                    {
                        name: "耀州区",
                        id: 3802
                    },
                    {
                        name: "王益区",
                        id: 3806
                    },
                    {
                        name: "印台区",
                        id: 3808
                    },
                    {
                        name: "耀县",
                        id: 6037
                    }
                ]
            },
            {
                name: "渭南",
                id: 316,
                CountryList: [
                    {
                        name: "白水县",
                        id: 2216
                    },
                    {
                        name: "澄城县",
                        id: 2217
                    },
                    {
                        name: "大荔县",
                        id: 2218
                    },
                    {
                        name: "富平县",
                        id: 2219
                    },
                    {
                        name: "韩城市",
                        id: 2220
                    },
                    {
                        name: "合阳县",
                        id: 2221
                    },
                    {
                        name: "华县",
                        id: 2222
                    },
                    {
                        name: "华阴市",
                        id: 2223
                    },
                    {
                        name: "蒲城县",
                        id: 2224
                    },
                    {
                        name: "渭南市区",
                        id: 2225
                    },
                    {
                        name: "潼关县",
                        id: 2226
                    },
                    {
                        name: "临渭区",
                        id: 3817
                    }
                ]
            },
            {
                name: "西安",
                id: 317,
                CountryList: [
                    {
                        name: "高陵县",
                        id: 2227
                    },
                    {
                        name: "户县",
                        id: 2228
                    },
                    {
                        name: "蓝田县",
                        id: 2229
                    },
                    {
                        name: "西安市区",
                        id: 2230
                    },
                    {
                        name: "周至县",
                        id: 2231
                    },
                    {
                        name: "莲湖区",
                        id: 3771
                    },
                    {
                        name: "新城区",
                        id: 3773
                    },
                    {
                        name: "碑林区",
                        id: 3776
                    },
                    {
                        name: "灞桥区",
                        id: 3779
                    },
                    {
                        name: "未央区",
                        id: 3782
                    },
                    {
                        name: "雁塔区",
                        id: 3784
                    },
                    {
                        name: "阎良区",
                        id: 3785
                    },
                    {
                        name: "临潼区",
                        id: 3788
                    },
                    {
                        name: "长安区",
                        id: 3790
                    },
                    {
                        name: "高新区",
                        id: 4466
                    },
                    {
                        name: "曲江新区",
                        id: 5850
                    }
                ]
            },
            {
                name: "咸阳",
                id: 318,
                CountryList: [
                    {
                        name: "彬县",
                        id: 2232
                    },
                    {
                        name: "长武县",
                        id: 2233
                    },
                    {
                        name: "淳化县",
                        id: 2234
                    },
                    {
                        name: "礼泉县",
                        id: 2235
                    },
                    {
                        name: "乾县",
                        id: 2236
                    },
                    {
                        name: "三原县",
                        id: 2237
                    },
                    {
                        name: "武功县",
                        id: 2238
                    },
                    {
                        name: "咸阳市区",
                        id: 2239
                    },
                    {
                        name: "兴平市",
                        id: 2240
                    },
                    {
                        name: "旬邑县",
                        id: 2241
                    },
                    {
                        name: "永寿县",
                        id: 2242
                    },
                    {
                        name: "泾阳县",
                        id: 2243
                    },
                    {
                        name: "秦都区",
                        id: 3824
                    },
                    {
                        name: "杨陵区",
                        id: 3827
                    },
                    {
                        name: "渭城区",
                        id: 3830
                    }
                ]
            },
            {
                name: "延安",
                id: 319,
                CountryList: [
                    {
                        name: "安塞县",
                        id: 2244
                    },
                    {
                        name: "富县",
                        id: 2245
                    },
                    {
                        name: "甘泉县",
                        id: 2246
                    },
                    {
                        name: "黄陵县",
                        id: 2247
                    },
                    {
                        name: "黄龙县",
                        id: 2248
                    },
                    {
                        name: "洛川县",
                        id: 2249
                    },
                    {
                        name: "吴旗县",
                        id: 2250
                    },
                    {
                        name: "延安市区",
                        id: 2251
                    },
                    {
                        name: "延长县",
                        id: 2252
                    },
                    {
                        name: "延川县",
                        id: 2253
                    },
                    {
                        name: "宜川县",
                        id: 2254
                    },
                    {
                        name: "志丹县",
                        id: 2255
                    },
                    {
                        name: "子长县",
                        id: 2256
                    },
                    {
                        name: "宝塔区",
                        id: 3795
                    }
                ]
            },
            {
                name: "榆林",
                id: 320,
                CountryList: [
                    {
                        name: "定边县",
                        id: 2257
                    },
                    {
                        name: "府谷县",
                        id: 2258
                    },
                    {
                        name: "横山县",
                        id: 2259
                    },
                    {
                        name: "佳县",
                        id: 2260
                    },
                    {
                        name: "靖边县",
                        id: 2261
                    },
                    {
                        name: "米脂县",
                        id: 2262
                    },
                    {
                        name: "清涧县",
                        id: 2263
                    },
                    {
                        name: "神木县",
                        id: 2264
                    },
                    {
                        name: "绥德县",
                        id: 2265
                    },
                    {
                        name: "吴堡县",
                        id: 2266
                    },
                    {
                        name: "榆林市区",
                        id: 2267
                    },
                    {
                        name: "子洲县",
                        id: 2268
                    },
                    {
                        name: "榆阳区",
                        id: 3855
                    }
                ]
            }
        ]
    },
    {
        name: "上海",
        id: 25,
        CityList: [
            {
                name: "上海",
                id: 321,
                CountryList: [
                    {
                        name: "嘉定区",
                        id: 622
                    },
                    {
                        name: "闵行区",
                        id: 623
                    },
                    {
                        name: "普陀区",
                        id: 624
                    },
                    {
                        name: "宝山区",
                        id: 625
                    },
                    {
                        name: "黄浦区",
                        id: 626
                    },
                    {
                        name: "长宁区",
                        id: 627
                    },
                    {
                        name: "徐汇区",
                        id: 628
                    },
                    {
                        name: "闸北区",
                        id: 629
                    },
                    {
                        name: "静安区",
                        id: 630
                    },
                    {
                        name: "卢湾区",
                        id: 631
                    },
                    {
                        name: "虹口区",
                        id: 633
                    },
                    {
                        name: "杨浦区",
                        id: 634
                    },
                    {
                        name: "浦东新区",
                        id: 635
                    },
                    {
                        name: "青浦区",
                        id: 636
                    },
                    {
                        name: "上海市区",
                        id: 638
                    },
                    {
                        name: "金山区",
                        id: 3704
                    },
                    {
                        name: "松江区",
                        id: 3712
                    },
                    {
                        name: "奉贤区",
                        id: 3716
                    },
                    {
                        name: "崇明县",
                        id: 3723
                    }
                ]
            }
        ]
    },
    {
        name: "四川",
        id: 26,
        CityList: [
            {
                name: "阿坝",
                id: 322,
                CountryList: [
                    {
                        name: "阿坝县",
                        id: 2269
                    },
                    {
                        name: "黑水县",
                        id: 2270
                    },
                    {
                        name: "红原县",
                        id: 2271
                    },
                    {
                        name: "金川县",
                        id: 2272
                    },
                    {
                        name: "九寨沟",
                        id: 2273
                    },
                    {
                        name: "理县",
                        id: 2274
                    },
                    {
                        name: "马尔康县",
                        id: 2275
                    },
                    {
                        name: "茂县",
                        id: 2276
                    },
                    {
                        name: "壤塘县",
                        id: 2277
                    },
                    {
                        name: "若尔盖县",
                        id: 2278
                    },
                    {
                        name: "松潘县",
                        id: 2279
                    },
                    {
                        name: "小金县",
                        id: 2280
                    },
                    {
                        name: "汶川县",
                        id: 2281
                    },
                    {
                        name: "阿坝藏族羌族自治州",
                        id: 3969
                    }
                ]
            },
            {
                name: "巴中",
                id: 323,
                CountryList: [
                    {
                        name: "巴中市区",
                        id: 2282
                    },
                    {
                        name: "南江县",
                        id: 2283
                    },
                    {
                        name: "平昌县",
                        id: 2284
                    },
                    {
                        name: "通江县",
                        id: 2285
                    },
                    {
                        name: "巴州区",
                        id: 3910
                    }
                ]
            },
            {
                name: "成都",
                id: 324,
                CountryList: [
                    {
                        name: "成都市区",
                        id: 2286
                    },
                    {
                        name: "崇州市",
                        id: 2287
                    },
                    {
                        name: "大邑县",
                        id: 2288
                    },
                    {
                        name: "都江堰市",
                        id: 2289
                    },
                    {
                        name: "金堂县",
                        id: 2290
                    },
                    {
                        name: "彭州市",
                        id: 2291
                    },
                    {
                        name: "蒲江县",
                        id: 2292
                    },
                    {
                        name: "双流县",
                        id: 2293
                    },
                    {
                        name: "新津县",
                        id: 2294
                    },
                    {
                        name: "邛崃市",
                        id: 2295
                    },
                    {
                        name: "郫县",
                        id: 2296
                    },
                    {
                        name: "青羊区",
                        id: 3719
                    },
                    {
                        name: "锦江区",
                        id: 3721
                    },
                    {
                        name: "金牛区",
                        id: 3727
                    },
                    {
                        name: "武侯区",
                        id: 3730
                    },
                    {
                        name: "成华区",
                        id: 3734
                    },
                    {
                        name: "龙泉驿区",
                        id: 3737
                    },
                    {
                        name: "青白江区",
                        id: 3741
                    },
                    {
                        name: "新都区",
                        id: 3746
                    },
                    {
                        name: "温江区",
                        id: 3747
                    },
                    {
                        name: "成都高新区",
                        id: 4136
                    }
                ]
            },
            {
                name: "达州",
                id: 325,
                CountryList: [
                    {
                        name: "达县",
                        id: 2297
                    },
                    {
                        name: "达州市区",
                        id: 2298
                    },
                    {
                        name: "大竹县",
                        id: 2299
                    },
                    {
                        name: "开江县",
                        id: 2300
                    },
                    {
                        name: "渠县",
                        id: 2301
                    },
                    {
                        name: "万源市",
                        id: 2302
                    },
                    {
                        name: "宣汉县",
                        id: 2303
                    },
                    {
                        name: "通川区",
                        id: 3916
                    }
                ]
            },
            {
                name: "德阳",
                id: 326,
                CountryList: [
                    {
                        name: "德阳市区",
                        id: 2304
                    },
                    {
                        name: "广汉市",
                        id: 2305
                    },
                    {
                        name: "罗江县",
                        id: 2306
                    },
                    {
                        name: "绵竹市",
                        id: 2307
                    },
                    {
                        name: "什邡市",
                        id: 2308
                    },
                    {
                        name: "中江县",
                        id: 2309
                    },
                    {
                        name: "旌阳区",
                        id: 3774
                    }
                ]
            },
            {
                name: "甘孜",
                id: 327,
                CountryList: [
                    {
                        name: "巴塘县",
                        id: 2310
                    },
                    {
                        name: "白玉县",
                        id: 2311
                    },
                    {
                        name: "丹巴县",
                        id: 2312
                    },
                    {
                        name: "稻城县",
                        id: 2313
                    },
                    {
                        name: "道孚县",
                        id: 2314
                    },
                    {
                        name: "德格县",
                        id: 2315
                    },
                    {
                        name: "得荣县",
                        id: 2316
                    },
                    {
                        name: "甘孜县",
                        id: 2317
                    },
                    {
                        name: "九龙县",
                        id: 2318
                    },
                    {
                        name: "康定县",
                        id: 2319
                    },
                    {
                        name: "理塘县",
                        id: 2320
                    },
                    {
                        name: "炉霍县",
                        id: 2321
                    },
                    {
                        name: "色达县",
                        id: 2322
                    },
                    {
                        name: "石渠县",
                        id: 2323
                    },
                    {
                        name: "乡城县",
                        id: 2324
                    },
                    {
                        name: "新龙县",
                        id: 2325
                    },
                    {
                        name: "雅江县",
                        id: 2326
                    },
                    {
                        name: "泸定县",
                        id: 2327
                    },
                    {
                        name: "甘孜藏族自治州",
                        id: 3976
                    }
                ]
            },
            {
                name: "广安",
                id: 328,
                CountryList: [
                    {
                        name: "广安市区",
                        id: 2328
                    },
                    {
                        name: "华蓥市",
                        id: 2329
                    },
                    {
                        name: "邻水县",
                        id: 2330
                    },
                    {
                        name: "武胜县",
                        id: 2331
                    },
                    {
                        name: "岳池县",
                        id: 2332
                    },
                    {
                        name: "广安区",
                        id: 3796
                    }
                ]
            },
            {
                name: "广元",
                id: 329,
                CountryList: [
                    {
                        name: "苍溪县",
                        id: 2333
                    },
                    {
                        name: "广元市",
                        id: 2334
                    },
                    {
                        name: "剑阁县",
                        id: 2335
                    },
                    {
                        name: "青川县",
                        id: 2336
                    },
                    {
                        name: "旺苍县",
                        id: 2337
                    },
                    {
                        name: "市中区",
                        id: 3751
                    },
                    {
                        name: "元坝区",
                        id: 3754
                    },
                    {
                        name: "朝天区",
                        id: 3758
                    },
                    {
                        name: "利州区",
                        id: 6343
                    }
                ]
            },
            {
                name: "乐山",
                id: 330,
                CountryList: [
                    {
                        name: "峨边彝族自治县",
                        id: 2338
                    },
                    {
                        name: "峨眉山",
                        id: 2339
                    },
                    {
                        name: "夹江县",
                        id: 2340
                    },
                    {
                        name: "井研县",
                        id: 2341
                    },
                    {
                        name: "乐山市区",
                        id: 2342
                    },
                    {
                        name: "马边彝族自治县",
                        id: 2343
                    },
                    {
                        name: "沐川县",
                        id: 2344
                    },
                    {
                        name: "犍为县",
                        id: 2345
                    },
                    {
                        name: "市中区",
                        id: 3826
                    },
                    {
                        name: "沙湾区",
                        id: 3831
                    },
                    {
                        name: "五通桥区",
                        id: 3833
                    },
                    {
                        name: "金口河区",
                        id: 3837
                    }
                ]
            },
            {
                name: "凉山",
                id: 331,
                CountryList: [
                    {
                        name: "布拖县",
                        id: 2346
                    },
                    {
                        name: "德昌县",
                        id: 2347
                    },
                    {
                        name: "甘洛县",
                        id: 2348
                    },
                    {
                        name: "会东县",
                        id: 2349
                    },
                    {
                        name: "会理县",
                        id: 2350
                    },
                    {
                        name: "金阳县",
                        id: 2351
                    },
                    {
                        name: "雷波县",
                        id: 2352
                    },
                    {
                        name: "美姑县",
                        id: 2353
                    },
                    {
                        name: "冕宁县",
                        id: 2354
                    },
                    {
                        name: "木里藏族自治县",
                        id: 2355
                    },
                    {
                        name: "宁南县",
                        id: 2356
                    },
                    {
                        name: "普格县",
                        id: 2357
                    },
                    {
                        name: "西昌市",
                        id: 2358
                    },
                    {
                        name: "喜德县",
                        id: 2359
                    },
                    {
                        name: "盐源县",
                        id: 2360
                    },
                    {
                        name: "越西县",
                        id: 2361
                    },
                    {
                        name: "昭觉县",
                        id: 2362
                    },
                    {
                        name: "凉山彝族自治州",
                        id: 3982
                    }
                ]
            },
            {
                name: "眉山",
                id: 332,
                CountryList: [
                    {
                        name: "丹棱县",
                        id: 2363
                    },
                    {
                        name: "洪雅县",
                        id: 2364
                    },
                    {
                        name: "眉山市区",
                        id: 2365
                    },
                    {
                        name: "彭山县",
                        id: 2366
                    },
                    {
                        name: "青神县",
                        id: 2367
                    },
                    {
                        name: "仁寿县",
                        id: 2368
                    },
                    {
                        name: "东坡区",
                        id: 3937
                    }
                ]
            },
            {
                name: "绵阳",
                id: 333,
                CountryList: [
                    {
                        name: "安县",
                        id: 2369
                    },
                    {
                        name: "北川县",
                        id: 2370
                    },
                    {
                        name: "江油市",
                        id: 2371
                    },
                    {
                        name: "绵阳市区",
                        id: 2372
                    },
                    {
                        name: "平武县",
                        id: 2373
                    },
                    {
                        name: "三台县",
                        id: 2374
                    },
                    {
                        name: "盐亭县",
                        id: 2375
                    },
                    {
                        name: "梓潼县",
                        id: 2376
                    },
                    {
                        name: "涪城区",
                        id: 3764
                    },
                    {
                        name: "游仙区",
                        id: 3768
                    },
                    {
                        name: "高新区",
                        id: 5133
                    }
                ]
            },
            {
                name: "南充",
                id: 334,
                CountryList: [
                    {
                        name: "南部县",
                        id: 2377
                    },
                    {
                        name: "南充市区",
                        id: 2378
                    },
                    {
                        name: "蓬安县",
                        id: 2379
                    },
                    {
                        name: "西充县",
                        id: 2380
                    },
                    {
                        name: "仪陇县",
                        id: 2381
                    },
                    {
                        name: "营山县",
                        id: 2382
                    },
                    {
                        name: "阆中市",
                        id: 2383
                    },
                    {
                        name: "顺庆区",
                        id: 3780
                    },
                    {
                        name: "高坪区",
                        id: 3786
                    },
                    {
                        name: "嘉陵区",
                        id: 3789
                    }
                ]
            },
            {
                name: "内江",
                id: 335,
                CountryList: [
                    {
                        name: "隆昌县",
                        id: 2384
                    },
                    {
                        name: "内江市区",
                        id: 2385
                    },
                    {
                        name: "威远县",
                        id: 2386
                    },
                    {
                        name: "资中县",
                        id: 2387
                    },
                    {
                        name: "市中区",
                        id: 3816
                    },
                    {
                        name: "东兴区",
                        id: 3821
                    }
                ]
            },
            {
                name: "攀枝花",
                id: 336,
                CountryList: [
                    {
                        name: "米易县",
                        id: 2388
                    },
                    {
                        name: "攀枝花市区",
                        id: 2389
                    },
                    {
                        name: "盐边县",
                        id: 2390
                    },
                    {
                        name: "东区",
                        id: 3894
                    },
                    {
                        name: "西区",
                        id: 3898
                    },
                    {
                        name: "仁和区",
                        id: 3903
                    }
                ]
            },
            {
                name: "遂宁",
                id: 337,
                CountryList: [
                    {
                        name: "大英县",
                        id: 2391
                    },
                    {
                        name: "蓬溪县",
                        id: 2392
                    },
                    {
                        name: "射洪县",
                        id: 2393
                    },
                    {
                        name: "遂宁市区",
                        id: 2394
                    },
                    {
                        name: "船山区",
                        id: 3803
                    },
                    {
                        name: "安居区",
                        id: 3807
                    }
                ]
            },
            {
                name: "雅安",
                id: 338,
                CountryList: [
                    {
                        name: "宝兴县",
                        id: 2395
                    },
                    {
                        name: "汉源县",
                        id: 2396
                    },
                    {
                        name: "芦山县",
                        id: 2397
                    },
                    {
                        name: "名山县",
                        id: 2398
                    },
                    {
                        name: "石棉县",
                        id: 2399
                    },
                    {
                        name: "天全县",
                        id: 2400
                    },
                    {
                        name: "雅安市区",
                        id: 2401
                    },
                    {
                        name: "荥经县",
                        id: 2402
                    },
                    {
                        name: "雨城区",
                        id: 3946
                    }
                ]
            },
            {
                name: "宜宾",
                id: 339,
                CountryList: [
                    {
                        name: "长宁县",
                        id: 2403
                    },
                    {
                        name: "高县",
                        id: 2404
                    },
                    {
                        name: "江安县",
                        id: 2405
                    },
                    {
                        name: "南溪县",
                        id: 2406
                    },
                    {
                        name: "屏山县",
                        id: 2407
                    },
                    {
                        name: "兴文县",
                        id: 2408
                    },
                    {
                        name: "宜宾市区",
                        id: 2409
                    },
                    {
                        name: "宜宾县",
                        id: 2410
                    },
                    {
                        name: "珙县",
                        id: 2411
                    },
                    {
                        name: "筠连县",
                        id: 2412
                    },
                    {
                        name: "翠屏区",
                        id: 3886
                    }
                ]
            },
            {
                name: "资阳",
                id: 340,
                CountryList: [
                    {
                        name: "安岳县",
                        id: 2413
                    },
                    {
                        name: "简阳市",
                        id: 2414
                    },
                    {
                        name: "乐至县",
                        id: 2415
                    },
                    {
                        name: "资阳市区",
                        id: 2416
                    },
                    {
                        name: "雁江区",
                        id: 3926
                    }
                ]
            },
            {
                name: "自贡",
                id: 341,
                CountryList: [
                    {
                        name: "富顺县",
                        id: 2417
                    },
                    {
                        name: "荣县",
                        id: 2418
                    },
                    {
                        name: "自贡市区",
                        id: 2419
                    },
                    {
                        name: "自流井区",
                        id: 3845
                    },
                    {
                        name: "大安区",
                        id: 3850
                    },
                    {
                        name: "贡井区",
                        id: 3854
                    },
                    {
                        name: "沿滩区",
                        id: 3857
                    }
                ]
            },
            {
                name: "泸州",
                id: 342,
                CountryList: [
                    {
                        name: "古蔺县",
                        id: 2420
                    },
                    {
                        name: "合江县",
                        id: 2421
                    },
                    {
                        name: "叙永县",
                        id: 2422
                    },
                    {
                        name: "泸县",
                        id: 2423
                    },
                    {
                        name: "泸州市区",
                        id: 2424
                    },
                    {
                        name: "江阳区",
                        id: 3868
                    },
                    {
                        name: "纳溪区",
                        id: 3870
                    },
                    {
                        name: "龙马潭区",
                        id: 3874
                    }
                ]
            }
        ]
    },
    {
        name: "天津",
        id: 27,
        CityList: [
            {
                name: "天津",
                id: 343,
                CountryList: [
                    {
                        name: "蓟县",
                        id: 2425
                    },
                    {
                        name: "静海县",
                        id: 2426
                    },
                    {
                        name: "宁河县",
                        id: 2427
                    },
                    {
                        name: "和平区",
                        id: 3283
                    },
                    {
                        name: "河东区",
                        id: 3284
                    },
                    {
                        name: "河西区",
                        id: 3285
                    },
                    {
                        name: "南开区",
                        id: 3286
                    },
                    {
                        name: "河北区",
                        id: 3287
                    },
                    {
                        name: "红桥区",
                        id: 3288
                    },
                    {
                        name: "东丽区",
                        id: 3292
                    },
                    {
                        name: "西青区",
                        id: 3293
                    },
                    {
                        name: "津南区",
                        id: 3294
                    },
                    {
                        name: "北辰区",
                        id: 3295
                    },
                    {
                        name: "武清区",
                        id: 3296
                    },
                    {
                        name: "宝坻区",
                        id: 3297
                    },
                    {
                        name: "滨海新区",
                        id: 5834
                    }
                ]
            }
        ]
    },
    {
        name: "西藏",
        id: 28,
        CityList: [
            {
                name: "阿里",
                id: 344,
                CountryList: [
                    {
                        name: "措勤县",
                        id: 2429
                    },
                    {
                        name: "噶尔县",
                        id: 2430
                    },
                    {
                        name: "改则县",
                        id: 2431
                    },
                    {
                        name: "革吉县",
                        id: 2432
                    },
                    {
                        name: "普兰县",
                        id: 2433
                    },
                    {
                        name: "日土县",
                        id: 2434
                    },
                    {
                        name: "札达县",
                        id: 2435
                    }
                ]
            },
            {
                name: "昌都",
                id: 345,
                CountryList: [
                    {
                        name: "八宿县",
                        id: 2436
                    },
                    {
                        name: "边坝县",
                        id: 2437
                    },
                    {
                        name: "察雅县",
                        id: 2438
                    },
                    {
                        name: "昌都县",
                        id: 2439
                    },
                    {
                        name: "丁青县",
                        id: 2440
                    },
                    {
                        name: "贡觉县",
                        id: 2441
                    },
                    {
                        name: "江达县",
                        id: 2442
                    },
                    {
                        name: "类乌齐县",
                        id: 2443
                    },
                    {
                        name: "洛隆县",
                        id: 2444
                    },
                    {
                        name: "芒康县",
                        id: 2445
                    },
                    {
                        name: "左贡县",
                        id: 2446
                    }
                ]
            },
            {
                name: "拉萨",
                id: 346,
                CountryList: [
                    {
                        name: "达孜县",
                        id: 2447
                    },
                    {
                        name: "当雄县",
                        id: 2448
                    },
                    {
                        name: "堆龙德庆县",
                        id: 2449
                    },
                    {
                        name: "拉萨市区",
                        id: 2450
                    },
                    {
                        name: "林周县",
                        id: 2451
                    },
                    {
                        name: "墨竹工卡县",
                        id: 2452
                    },
                    {
                        name: "尼木县",
                        id: 2453
                    },
                    {
                        name: "曲水县",
                        id: 2454
                    },
                    {
                        name: "城关区",
                        id: 3495
                    },
                    {
                        name: "贡嘎",
                        id: 5062
                    }
                ]
            },
            {
                name: "林芝",
                id: 347,
                CountryList: [
                    {
                        name: "波密县",
                        id: 2455
                    },
                    {
                        name: "察隅县",
                        id: 2456
                    },
                    {
                        name: "工布江达县",
                        id: 2457
                    },
                    {
                        name: "朗县",
                        id: 2458
                    },
                    {
                        name: "林芝县",
                        id: 2459
                    },
                    {
                        name: "米林县",
                        id: 2460
                    },
                    {
                        name: "墨脱县",
                        id: 2461
                    }
                ]
            },
            {
                name: "那曲",
                id: 348,
                CountryList: [
                    {
                        name: "安多县",
                        id: 2462
                    },
                    {
                        name: "巴青县",
                        id: 2463
                    },
                    {
                        name: "班戈县",
                        id: 2464
                    },
                    {
                        name: "比如县",
                        id: 2465
                    },
                    {
                        name: "嘉黎县",
                        id: 2466
                    },
                    {
                        name: "那曲县",
                        id: 2467
                    },
                    {
                        name: "尼玛县",
                        id: 2468
                    },
                    {
                        name: "聂荣县",
                        id: 2469
                    },
                    {
                        name: "申扎县",
                        id: 2470
                    },
                    {
                        name: "索县",
                        id: 2471
                    }
                ]
            },
            {
                name: "日喀则",
                id: 349,
                CountryList: [
                    {
                        name: "昂仁县",
                        id: 2472
                    },
                    {
                        name: "白朗县",
                        id: 2473
                    },
                    {
                        name: "定结县",
                        id: 2474
                    },
                    {
                        name: "定日县",
                        id: 2475
                    },
                    {
                        name: "岗巴县",
                        id: 2476
                    },
                    {
                        name: "吉隆县",
                        id: 2477
                    },
                    {
                        name: "江孜县",
                        id: 2478
                    },
                    {
                        name: "康马县",
                        id: 2479
                    },
                    {
                        name: "拉孜县",
                        id: 2480
                    },
                    {
                        name: "南木林县",
                        id: 2481
                    },
                    {
                        name: "聂拉木县",
                        id: 2482
                    },
                    {
                        name: "仁布县",
                        id: 2483
                    },
                    {
                        name: "日喀则市区",
                        id: 2484
                    },
                    {
                        name: "萨嘎县",
                        id: 2485
                    },
                    {
                        name: "萨迦县",
                        id: 2486
                    },
                    {
                        name: "谢通门县",
                        id: 2487
                    },
                    {
                        name: "亚东县",
                        id: 2488
                    },
                    {
                        name: "仲巴县",
                        id: 2489
                    }
                ]
            },
            {
                name: "山南",
                id: 350,
                CountryList: [
                    {
                        name: "措美县",
                        id: 2490
                    },
                    {
                        name: "错那县",
                        id: 2491
                    },
                    {
                        name: "贡嘎县",
                        id: 2492
                    },
                    {
                        name: "加查县",
                        id: 2493
                    },
                    {
                        name: "浪卡子县",
                        id: 2494
                    },
                    {
                        name: "隆子县",
                        id: 2495
                    },
                    {
                        name: "洛扎县",
                        id: 2496
                    },
                    {
                        name: "乃东县",
                        id: 2497
                    },
                    {
                        name: "琼结县",
                        id: 2498
                    },
                    {
                        name: "曲松县",
                        id: 2499
                    },
                    {
                        name: "桑日县",
                        id: 2500
                    },
                    {
                        name: "扎囊县",
                        id: 2501
                    }
                ]
            }
        ]
    },
    {
        name: "新疆",
        id: 29,
        CityList: [
            {
                name: "阿克苏",
                id: 351,
                CountryList: [
                    {
                        name: "阿克苏市区",
                        id: 2502
                    },
                    {
                        name: "阿瓦提县",
                        id: 2503
                    },
                    {
                        name: "拜城县",
                        id: 2504
                    },
                    {
                        name: "柯坪县",
                        id: 2505
                    },
                    {
                        name: "库车县",
                        id: 2506
                    },
                    {
                        name: "沙雅县",
                        id: 2507
                    },
                    {
                        name: "温宿县",
                        id: 2508
                    },
                    {
                        name: "乌什县",
                        id: 2509
                    },
                    {
                        name: "新和县",
                        id: 2510
                    }
                ]
            },
            {
                name: "阿拉尔",
                id: 352,
                CountryList: [
                    {
                        name: "阿拉尔市区",
                        id: 2511
                    }
                ]
            },
            {
                name: "巴音郭楞",
                id: 353,
                CountryList: [
                    {
                        name: "博湖县",
                        id: 2512
                    },
                    {
                        name: "和静县",
                        id: 2513
                    },
                    {
                        name: "和硕县",
                        id: 2514
                    },
                    {
                        name: "库尔勒市",
                        id: 2515
                    },
                    {
                        name: "轮台县",
                        id: 2516
                    },
                    {
                        name: "且末县",
                        id: 2517
                    },
                    {
                        name: "若羌县",
                        id: 2518
                    },
                    {
                        name: "尉犁县",
                        id: 2519
                    },
                    {
                        name: "焉耆回族自治县",
                        id: 2520
                    }
                ]
            },
            {
                name: "博尔塔拉",
                id: 354,
                CountryList: [
                    {
                        name: "博乐市",
                        id: 2521
                    },
                    {
                        name: "精河县",
                        id: 2522
                    },
                    {
                        name: "温泉县",
                        id: 2523
                    }
                ]
            },
            {
                name: "昌吉",
                id: 355,
                CountryList: [
                    {
                        name: "昌吉市区",
                        id: 2524
                    },
                    {
                        name: "阜康市",
                        id: 2525
                    },
                    {
                        name: "呼图壁县",
                        id: 2526
                    },
                    {
                        name: "吉木萨尔县",
                        id: 2527
                    },
                    {
                        name: "玛纳斯县",
                        id: 2528
                    },
                    {
                        name: "米泉市",
                        id: 2529
                    },
                    {
                        name: "木垒哈萨克自治县",
                        id: 2530
                    },
                    {
                        name: "奇台县",
                        id: 2531
                    }
                ]
            },
            {
                name: "哈密",
                id: 356,
                CountryList: [
                    {
                        name: "巴里坤哈萨克自治县",
                        id: 2532
                    },
                    {
                        name: "哈密市区",
                        id: 2533
                    },
                    {
                        name: "伊吾县",
                        id: 2534
                    }
                ]
            },
            {
                name: "和田",
                id: 357,
                CountryList: [
                    {
                        name: "策勒县",
                        id: 2535
                    },
                    {
                        name: "和田市区",
                        id: 2536
                    },
                    {
                        name: "和田县",
                        id: 2537
                    },
                    {
                        name: "洛浦县",
                        id: 2538
                    },
                    {
                        name: "民丰县",
                        id: 2539
                    },
                    {
                        name: "墨玉县",
                        id: 2540
                    },
                    {
                        name: "皮山县",
                        id: 2541
                    },
                    {
                        name: "于田县",
                        id: 2542
                    }
                ]
            },
            {
                name: "喀什",
                id: 358,
                CountryList: [
                    {
                        name: "巴楚县",
                        id: 2543
                    },
                    {
                        name: "喀什市区",
                        id: 2544
                    },
                    {
                        name: "麦盖提县",
                        id: 2545
                    },
                    {
                        name: "莎车县",
                        id: 2546
                    },
                    {
                        name: "疏附县",
                        id: 2547
                    },
                    {
                        name: "疏勒县",
                        id: 2548
                    },
                    {
                        name: "塔什库尔干塔吉克自治县",
                        id: 2549
                    },
                    {
                        name: "叶城县",
                        id: 2550
                    },
                    {
                        name: "英吉沙县",
                        id: 2551
                    },
                    {
                        name: "岳普湖县",
                        id: 2552
                    },
                    {
                        name: "泽普县",
                        id: 2553
                    },
                    {
                        name: "伽师县",
                        id: 2554
                    }
                ]
            },
            {
                name: "克拉玛依",
                id: 359,
                CountryList: [
                    {
                        name: "克拉玛依市区",
                        id: 2555
                    },
                    {
                        name: "克拉玛依区",
                        id: 3521
                    },
                    {
                        name: "独山子区",
                        id: 3525
                    },
                    {
                        name: "乌尔禾区",
                        id: 3532
                    }
                ]
            },
            {
                name: "克孜勒苏柯尔克孜",
                id: 360,
                CountryList: [
                    {
                        name: "阿合奇县",
                        id: 2556
                    },
                    {
                        name: "阿克陶县",
                        id: 2557
                    },
                    {
                        name: "阿图什市",
                        id: 2558
                    },
                    {
                        name: "乌恰县",
                        id: 2559
                    }
                ]
            },
            {
                name: "石河子",
                id: 361,
                CountryList: [
                    {
                        name: "石河子市",
                        id: 2560
                    }
                ]
            },
            {
                name: "图木舒克",
                id: 362,
                CountryList: [
                    {
                        name: "图木舒克市",
                        id: 2561
                    }
                ]
            },
            {
                name: "吐鲁番",
                id: 363,
                CountryList: [
                    {
                        name: "吐鲁番市区",
                        id: 2562
                    },
                    {
                        name: "托克逊县",
                        id: 2563
                    },
                    {
                        name: "鄯善县",
                        id: 2564
                    }
                ]
            },
            {
                name: "乌鲁木齐",
                id: 364,
                CountryList: [
                    {
                        name: "乌鲁木齐市区",
                        id: 2565
                    },
                    {
                        name: "乌鲁木齐县",
                        id: 2566
                    },
                    {
                        name: "天山区",
                        id: 3500
                    },
                    {
                        name: "沙依巴克区",
                        id: 3501
                    },
                    {
                        name: "新市区",
                        id: 3503
                    },
                    {
                        name: "头屯河区",
                        id: 3507
                    },
                    {
                        name: "达坂城区",
                        id: 3509
                    },
                    {
                        name: "东山区",
                        id: 3510
                    },
                    {
                        name: "水磨沟区",
                        id: 3516
                    }
                ]
            },
            {
                name: "五家渠",
                id: 365,
                CountryList: [
                    {
                        name: "五家渠市",
                        id: 2567
                    }
                ]
            },
            {
                name: "伊犁",
                id: 366,
                CountryList: [
                    {
                        name: "察布查尔锡伯自治县",
                        id: 2570
                    },
                    {
                        name: "额敏县",
                        id: 2571
                    },
                    {
                        name: "巩留县",
                        id: 2574
                    },
                    {
                        name: "和布克赛尔蒙古自治县",
                        id: 2576
                    },
                    {
                        name: "霍城县",
                        id: 2577
                    },
                    {
                        name: "奎屯市",
                        id: 2579
                    },
                    {
                        name: "尼勒克县",
                        id: 2580
                    },
                    {
                        name: "沙湾县",
                        id: 2582
                    },
                    {
                        name: "塔城市",
                        id: 2583
                    },
                    {
                        name: "特克斯县",
                        id: 2584
                    },
                    {
                        name: "托里县",
                        id: 2585
                    },
                    {
                        name: "乌苏市",
                        id: 2586
                    },
                    {
                        name: "新源县",
                        id: 2587
                    },
                    {
                        name: "伊宁市",
                        id: 2588
                    },
                    {
                        name: "伊宁县",
                        id: 2589
                    },
                    {
                        name: "裕民县",
                        id: 2590
                    },
                    {
                        name: "昭苏县",
                        id: 2591
                    }
                ]
            },
            {
                name: "塔城",
                id: 3113,
                CountryList: []
            },
            {
                name: "阿勒泰",
                id: 3114,
                CountryList: [
                    {
                        name: "阿勒泰市",
                        id: 2568
                    },
                    {
                        name: "布尔津县",
                        id: 2569
                    },
                    {
                        name: "福海县",
                        id: 2572
                    },
                    {
                        name: "富蕴县",
                        id: 2573
                    },
                    {
                        name: "哈巴河县",
                        id: 2575
                    },
                    {
                        name: "吉木乃县",
                        id: 2578
                    },
                    {
                        name: "青河县",
                        id: 2581
                    },
                    {
                        name: "北屯市",
                        id: 5126
                    }
                ]
            }
        ]
    },
    {
        name: "云南",
        id: 30,
        CityList: [
            {
                name: "保山",
                id: 367,
                CountryList: [
                    {
                        name: "保山市区",
                        id: 2592
                    },
                    {
                        name: "昌宁县",
                        id: 2593
                    },
                    {
                        name: "龙陵县",
                        id: 2594
                    },
                    {
                        name: "施甸县",
                        id: 2595
                    },
                    {
                        name: "腾冲县",
                        id: 2596
                    },
                    {
                        name: "隆阳区",
                        id: 3552
                    }
                ]
            },
            {
                name: "楚雄",
                id: 368,
                CountryList: [
                    {
                        name: "楚雄市区",
                        id: 2597
                    },
                    {
                        name: "大姚县",
                        id: 2598
                    },
                    {
                        name: "禄丰县",
                        id: 2599
                    },
                    {
                        name: "牟定县",
                        id: 2600
                    },
                    {
                        name: "南华县",
                        id: 2601
                    },
                    {
                        name: "双柏县",
                        id: 2602
                    },
                    {
                        name: "武定县",
                        id: 2603
                    },
                    {
                        name: "姚安县",
                        id: 2604
                    },
                    {
                        name: "永仁县",
                        id: 2605
                    },
                    {
                        name: "元谋县",
                        id: 2606
                    },
                    {
                        name: "楚雄彝族自治州",
                        id: 3593
                    },
                    {
                        name: "经济开发区",
                        id: 6089
                    }
                ]
            },
            {
                name: "大理",
                id: 369,
                CountryList: [
                    {
                        name: "宾川县",
                        id: 2607
                    },
                    {
                        name: "洱源县",
                        id: 2609
                    },
                    {
                        name: "鹤庆县",
                        id: 2610
                    },
                    {
                        name: "剑川县",
                        id: 2611
                    },
                    {
                        name: "弥渡县",
                        id: 2612
                    },
                    {
                        name: "南涧彝族自治县",
                        id: 2613
                    },
                    {
                        name: "巍山彝族回族自治县",
                        id: 2614
                    },
                    {
                        name: "祥云县",
                        id: 2615
                    },
                    {
                        name: "漾濞彝族自治县",
                        id: 2616
                    },
                    {
                        name: "永平县",
                        id: 2617
                    },
                    {
                        name: "云龙县",
                        id: 2618
                    },
                    {
                        name: "大理市区",
                        id: 3585
                    },
                    {
                        name: "古城区",
                        id: 5249
                    },
                    {
                        name: "新城区",
                        id: 5250
                    },
                    {
                        name: "下关经济开发区",
                        id: 6102
                    }
                ]
            },
            {
                name: "德宏",
                id: 370,
                CountryList: [
                    {
                        name: "梁河县",
                        id: 2619
                    },
                    {
                        name: "陇川县",
                        id: 2620
                    },
                    {
                        name: "潞西市",
                        id: 2621
                    },
                    {
                        name: "瑞丽市",
                        id: 2622
                    },
                    {
                        name: "盈江县",
                        id: 2623
                    },
                    {
                        name: "德宏傣族景颇族自治州",
                        id: 3571
                    },
                    {
                        name: "芒市",
                        id: 4513
                    }
                ]
            },
            {
                name: "迪庆",
                id: 371,
                CountryList: [
                    {
                        name: "德钦县",
                        id: 2624
                    },
                    {
                        name: "维西傈僳族自治县",
                        id: 2625
                    },
                    {
                        name: "香格里拉县",
                        id: 2626
                    },
                    {
                        name: "迪庆藏族自治州",
                        id: 3579
                    }
                ]
            },
            {
                name: "红河",
                id: 372,
                CountryList: [
                    {
                        name: "个旧市",
                        id: 2627
                    },
                    {
                        name: "河口瑶族自治县",
                        id: 2628
                    },
                    {
                        name: "红河县",
                        id: 2629
                    },
                    {
                        name: "建水县",
                        id: 2630
                    },
                    {
                        name: "金平苗族瑶族傣族自治县",
                        id: 2631
                    },
                    {
                        name: "开远市",
                        id: 2632
                    },
                    {
                        name: "绿春县",
                        id: 2633
                    },
                    {
                        name: "蒙自县",
                        id: 2634
                    },
                    {
                        name: "弥勒县",
                        id: 2635
                    },
                    {
                        name: "屏边苗族自治县",
                        id: 2636
                    },
                    {
                        name: "石屏县",
                        id: 2637
                    },
                    {
                        name: "元阳县",
                        id: 2638
                    },
                    {
                        name: "泸西县",
                        id: 2639
                    },
                    {
                        name: "红河哈尼族彝族自治州",
                        id: 3598
                    },
                    {
                        name: "郑营",
                        id: 4556
                    }
                ]
            },
            {
                name: "昆明",
                id: 373,
                CountryList: [
                    {
                        name: "安宁市",
                        id: 2640
                    },
                    {
                        name: "呈贡县",
                        id: 2641
                    },
                    {
                        name: "富民县",
                        id: 2642
                    },
                    {
                        name: "晋宁县",
                        id: 2643
                    },
                    {
                        name: "昆明市区",
                        id: 2644
                    },
                    {
                        name: "禄劝彝族苗族自治县",
                        id: 2645
                    },
                    {
                        name: "石林彝族自治县",
                        id: 2646
                    },
                    {
                        name: "寻甸回族自治县",
                        id: 2647
                    },
                    {
                        name: "宜良县",
                        id: 2648
                    },
                    {
                        name: "嵩明县",
                        id: 2649
                    },
                    {
                        name: "盘龙区",
                        id: 3515
                    },
                    {
                        name: "五华区",
                        id: 3517
                    },
                    {
                        name: "官渡区",
                        id: 3520
                    },
                    {
                        name: "西山区",
                        id: 3528
                    },
                    {
                        name: "东川区",
                        id: 3531
                    },
                    {
                        name: "清水塘",
                        id: 4587
                    }
                ]
            },
            {
                name: "丽江",
                id: 374,
                CountryList: [
                    {
                        name: "华坪县",
                        id: 2650
                    },
                    {
                        name: "丽江市区",
                        id: 2651
                    },
                    {
                        name: "宁蒗彝族自治县",
                        id: 2652
                    },
                    {
                        name: "永胜县",
                        id: 2653
                    },
                    {
                        name: "玉龙纳西族自治县",
                        id: 2654
                    },
                    {
                        name: "古城区",
                        id: 3558
                    },
                    {
                        name: "祥和新区",
                        id: 4549
                    }
                ]
            },
            {
                name: "临沧",
                id: 375,
                CountryList: [
                    {
                        name: "沧源佤族自治县",
                        id: 2655
                    },
                    {
                        name: "凤庆县",
                        id: 2656
                    },
                    {
                        name: "耿马傣族佤族治县",
                        id: 2657
                    },
                    {
                        name: "临沧县",
                        id: 2658
                    },
                    {
                        name: "双江拉祜族佤族布朗族傣族自治县",
                        id: 2659
                    },
                    {
                        name: "永德县",
                        id: 2660
                    },
                    {
                        name: "云县",
                        id: 2661
                    },
                    {
                        name: "镇康县",
                        id: 2662
                    },
                    {
                        name: "临翔区",
                        id: 3566
                    }
                ]
            },
            {
                name: "怒江",
                id: 376,
                CountryList: [
                    {
                        name: "福贡县",
                        id: 2663
                    },
                    {
                        name: "贡山独龙族怒族自治县",
                        id: 2664
                    },
                    {
                        name: "兰坪白族普米族自治县",
                        id: 2665
                    },
                    {
                        name: "泸水县",
                        id: 2666
                    }
                ]
            },
            {
                name: "曲靖",
                id: 377,
                CountryList: [
                    {
                        name: "富源县",
                        id: 2667
                    },
                    {
                        name: "会泽县",
                        id: 2668
                    },
                    {
                        name: "陆良县",
                        id: 2669
                    },
                    {
                        name: "罗平县",
                        id: 2670
                    },
                    {
                        name: "马龙县",
                        id: 2671
                    },
                    {
                        name: "曲靖市区",
                        id: 2672
                    },
                    {
                        name: "师宗县",
                        id: 2673
                    },
                    {
                        name: "宣威市",
                        id: 2674
                    },
                    {
                        name: "沾益县",
                        id: 2675
                    },
                    {
                        name: "麒麟区",
                        id: 3540
                    }
                ]
            },
            {
                name: "普洱",
                id: 378,
                CountryList: [
                    {
                        name: "江城哈尼族彝族自治县",
                        id: 2676
                    },
                    {
                        name: "景东彝族自治县",
                        id: 2677
                    },
                    {
                        name: "景谷彝族傣族自治县",
                        id: 2678
                    },
                    {
                        name: "澜沧拉祜族自治县",
                        id: 2679
                    },
                    {
                        name: "孟连傣族拉祜族佤族自治县",
                        id: 2680
                    },
                    {
                        name: "墨江哈尼族自治县",
                        id: 2681
                    },
                    {
                        name: "普洱哈尼族彝族自治县",
                        id: 2682
                    },
                    {
                        name: "思茅市区",
                        id: 2683
                    },
                    {
                        name: "西盟佤族自治县",
                        id: 2684
                    },
                    {
                        name: "镇沅彝族哈尼族拉祜族自治县",
                        id: 2685
                    },
                    {
                        name: "翠云区",
                        id: 3561
                    },
                    {
                        name: "普洱",
                        id: 4592
                    }
                ]
            },
            {
                name: "文山",
                id: 379,
                CountryList: [
                    {
                        name: "富宁县",
                        id: 2686
                    },
                    {
                        name: "广南县",
                        id: 2687
                    },
                    {
                        name: "麻栗坡县",
                        id: 2688
                    },
                    {
                        name: "马关县",
                        id: 2689
                    },
                    {
                        name: "丘北县",
                        id: 2690
                    },
                    {
                        name: "文山县",
                        id: 2691
                    },
                    {
                        name: "西畴县",
                        id: 2692
                    },
                    {
                        name: "砚山县",
                        id: 2693
                    },
                    {
                        name: "文山壮族苗族自治州",
                        id: 3603
                    }
                ]
            },
            {
                name: "西双版纳",
                id: 380,
                CountryList: [
                    {
                        name: "景洪市",
                        id: 2694
                    },
                    {
                        name: "勐海县",
                        id: 2695
                    },
                    {
                        name: "勐腊县",
                        id: 2696
                    }
                ]
            },
            {
                name: "玉溪",
                id: 381,
                CountryList: [
                    {
                        name: "澄江县",
                        id: 2697
                    },
                    {
                        name: "峨山彝族自治县",
                        id: 2698
                    },
                    {
                        name: "华宁县",
                        id: 2699
                    },
                    {
                        name: "江川县",
                        id: 2700
                    },
                    {
                        name: "通海县",
                        id: 2701
                    },
                    {
                        name: "新平彝族傣族自治县",
                        id: 2702
                    },
                    {
                        name: "易门县",
                        id: 2703
                    },
                    {
                        name: "玉溪市区",
                        id: 2704
                    },
                    {
                        name: "元江哈尼族彝族傣族自治县",
                        id: 2705
                    },
                    {
                        name: "红塔区",
                        id: 3546
                    }
                ]
            },
            {
                name: "昭通",
                id: 382,
                CountryList: [
                    {
                        name: "大关县",
                        id: 2706
                    },
                    {
                        name: "鲁甸县",
                        id: 2707
                    },
                    {
                        name: "巧家县",
                        id: 2708
                    },
                    {
                        name: "水富县",
                        id: 2709
                    },
                    {
                        name: "绥江县",
                        id: 2710
                    },
                    {
                        name: "威信县",
                        id: 2711
                    },
                    {
                        name: "盐津县",
                        id: 2712
                    },
                    {
                        name: "彝良县",
                        id: 2713
                    },
                    {
                        name: "永善县",
                        id: 2714
                    },
                    {
                        name: "昭通市区",
                        id: 2715
                    },
                    {
                        name: "镇雄县",
                        id: 2716
                    },
                    {
                        name: "昭阳区",
                        id: 3556
                    }
                ]
            }
        ]
    },
    {
        name: "浙江",
        id: 31,
        CityList: [
            {
                name: "杭州",
                id: 383,
                CountryList: [
                    {
                        name: "淳安县",
                        id: 553
                    },
                    {
                        name: "富阳市",
                        id: 554
                    },
                    {
                        name: "杭州市区",
                        id: 555
                    },
                    {
                        name: "建德市",
                        id: 556
                    },
                    {
                        name: "临安市",
                        id: 557
                    },
                    {
                        name: "桐庐县",
                        id: 558
                    },
                    {
                        name: "拱墅区",
                        id: 4085
                    },
                    {
                        name: "上城区",
                        id: 4086
                    },
                    {
                        name: "下城区",
                        id: 4087
                    },
                    {
                        name: "江干区",
                        id: 4088
                    },
                    {
                        name: "西湖区",
                        id: 4089
                    },
                    {
                        name: "滨江区",
                        id: 4090
                    },
                    {
                        name: "余杭区",
                        id: 4091
                    },
                    {
                        name: "萧山区",
                        id: 4092
                    },
                    {
                        name: "湖滨区",
                        id: 4520
                    },
                    {
                        name: "下沙经济技术开发区",
                        id: 6118
                    }
                ]
            },
            {
                name: "湖州",
                id: 384,
                CountryList: [
                    {
                        name: "安吉县",
                        id: 559
                    },
                    {
                        name: "长兴县",
                        id: 560
                    },
                    {
                        name: "德清县",
                        id: 561
                    },
                    {
                        name: "湖州市区",
                        id: 562
                    },
                    {
                        name: "吴兴区",
                        id: 4509
                    },
                    {
                        name: "南浔区",
                        id: 4510
                    }
                ]
            },
            {
                name: "嘉兴",
                id: 385,
                CountryList: [
                    {
                        name: "海宁市",
                        id: 563
                    },
                    {
                        name: "海盐县",
                        id: 564
                    },
                    {
                        name: "嘉善县",
                        id: 565
                    },
                    {
                        name: "嘉兴市区",
                        id: 566
                    },
                    {
                        name: "平湖市",
                        id: 567
                    },
                    {
                        name: "桐乡市",
                        id: 568
                    },
                    {
                        name: "南湖区",
                        id: 5187
                    },
                    {
                        name: "秀洲区",
                        id: 5191
                    },
                    {
                        name: "王江泾",
                        id: 5813
                    },
                    {
                        name: "嘉兴港区",
                        id: 5842
                    }
                ]
            },
            {
                name: "金华",
                id: 386,
                CountryList: [
                    {
                        name: "东阳市",
                        id: 569
                    },
                    {
                        name: "金华市区",
                        id: 570
                    },
                    {
                        name: "兰溪市",
                        id: 571
                    },
                    {
                        name: "磐安县",
                        id: 572
                    },
                    {
                        name: "浦江县",
                        id: 573
                    },
                    {
                        name: "武义县",
                        id: 574
                    },
                    {
                        name: "义乌市",
                        id: 575
                    },
                    {
                        name: "永康市",
                        id: 576
                    },
                    {
                        name: "婺城区",
                        id: 5192
                    }
                ]
            },
            {
                name: "丽水",
                id: 387,
                CountryList: [
                    {
                        name: "景宁畲族自治县",
                        id: 577
                    },
                    {
                        name: "丽水市区",
                        id: 578
                    },
                    {
                        name: "龙泉市",
                        id: 579
                    },
                    {
                        name: "青田县",
                        id: 580
                    },
                    {
                        name: "庆元县",
                        id: 581
                    },
                    {
                        name: "松阳县",
                        id: 582
                    },
                    {
                        name: "遂昌县",
                        id: 583
                    },
                    {
                        name: "云和县",
                        id: 584
                    },
                    {
                        name: "缙云县",
                        id: 585
                    },
                    {
                        name: "莲都区",
                        id: 5229
                    }
                ]
            },
            {
                name: "宁波",
                id: 388,
                CountryList: [
                    {
                        name: "慈溪市",
                        id: 586
                    },
                    {
                        name: "奉化市",
                        id: 587
                    },
                    {
                        name: "宁波市区",
                        id: 588
                    },
                    {
                        name: "宁海县",
                        id: 589
                    },
                    {
                        name: "象山县",
                        id: 590
                    },
                    {
                        name: "余姚市",
                        id: 591
                    },
                    {
                        name: "海曙区",
                        id: 4457
                    },
                    {
                        name: "江东区",
                        id: 4458
                    },
                    {
                        name: "江北区",
                        id: 4459
                    },
                    {
                        name: "北仑区",
                        id: 4460
                    },
                    {
                        name: "镇海区",
                        id: 4461
                    },
                    {
                        name: "鄞州区",
                        id: 4462
                    }
                ]
            },
            {
                name: "绍兴",
                id: 389,
                CountryList: [
                    {
                        name: "上虞市",
                        id: 592
                    },
                    {
                        name: "绍兴市区",
                        id: 593
                    },
                    {
                        name: "绍兴县",
                        id: 594
                    },
                    {
                        name: "新昌县",
                        id: 595
                    },
                    {
                        name: "诸暨市",
                        id: 596
                    },
                    {
                        name: "嵊州市",
                        id: 597
                    },
                    {
                        name: "越城区",
                        id: 5176
                    }
                ]
            },
            {
                name: "台州",
                id: 390,
                CountryList: [
                    {
                        name: "临海市",
                        id: 598
                    },
                    {
                        name: "三门县",
                        id: 599
                    },
                    {
                        name: "台州市区",
                        id: 600
                    },
                    {
                        name: "天台县",
                        id: 601
                    },
                    {
                        name: "温岭市",
                        id: 602
                    },
                    {
                        name: "仙居县",
                        id: 603
                    },
                    {
                        name: "玉环县",
                        id: 604
                    },
                    {
                        name: "椒江区",
                        id: 3738
                    },
                    {
                        name: "黄岩区",
                        id: 3739
                    },
                    {
                        name: "路桥区",
                        id: 3742
                    }
                ]
            },
            {
                name: "温州",
                id: 391,
                CountryList: [
                    {
                        name: "苍南县",
                        id: 605
                    },
                    {
                        name: "洞头县",
                        id: 606
                    },
                    {
                        name: "乐清市",
                        id: 607
                    },
                    {
                        name: "平阳县",
                        id: 608
                    },
                    {
                        name: "瑞安市",
                        id: 609
                    },
                    {
                        name: "泰顺县",
                        id: 610
                    },
                    {
                        name: "温州市区",
                        id: 611
                    },
                    {
                        name: "文成县",
                        id: 612
                    },
                    {
                        name: "永嘉县",
                        id: 613
                    },
                    {
                        name: "鹿城区",
                        id: 3724
                    },
                    {
                        name: "龙湾区",
                        id: 3729
                    },
                    {
                        name: "瓯海区",
                        id: 3732
                    }
                ]
            },
            {
                name: "舟山",
                id: 392,
                CountryList: [
                    {
                        name: "舟山市区",
                        id: 614
                    },
                    {
                        name: "岱山县",
                        id: 615
                    },
                    {
                        name: "嵊泗县",
                        id: 616
                    },
                    {
                        name: "定海",
                        id: 3121
                    },
                    {
                        name: "定海区",
                        id: 3714
                    },
                    {
                        name: "普陀区",
                        id: 3715
                    },
                    {
                        name: "临城新区",
                        id: 5815
                    }
                ]
            },
            {
                name: "衢州",
                id: 393,
                CountryList: [
                    {
                        name: "常山县",
                        id: 617
                    },
                    {
                        name: "江山市",
                        id: 618
                    },
                    {
                        name: "开化县",
                        id: 619
                    },
                    {
                        name: "龙游县",
                        id: 620
                    },
                    {
                        name: "衢州市区",
                        id: 621
                    },
                    {
                        name: "柯城区",
                        id: 3706
                    },
                    {
                        name: "衢江区",
                        id: 3709
                    }
                ]
            }
        ]
    },
    {
        name: "重庆",
        id: 32,
        CityList: [
            {
                name: "重庆",
                id: 394,
                CountryList: [
                    {
                        name: "城口县",
                        id: 2717
                    },
                    {
                        name: "大足县",
                        id: 2718
                    },
                    {
                        name: "垫江县",
                        id: 2719
                    },
                    {
                        name: "丰都县",
                        id: 2720
                    },
                    {
                        name: "奉节县",
                        id: 2721
                    },
                    {
                        name: "合川市",
                        id: 2722
                    },
                    {
                        name: "江津市",
                        id: 2723
                    },
                    {
                        name: "开县",
                        id: 2724
                    },
                    {
                        name: "梁平县",
                        id: 2725
                    },
                    {
                        name: "南川市",
                        id: 2726
                    },
                    {
                        name: "彭水苗族土家族自治县",
                        id: 2727
                    },
                    {
                        name: "荣昌县",
                        id: 2728
                    },
                    {
                        name: "石柱土家族自治县",
                        id: 2729
                    },
                    {
                        name: "铜梁县",
                        id: 2730
                    },
                    {
                        name: "巫山县",
                        id: 2731
                    },
                    {
                        name: "巫溪县",
                        id: 2732
                    },
                    {
                        name: "武隆县",
                        id: 2733
                    },
                    {
                        name: "秀山土家族苗族自治县",
                        id: 2734
                    },
                    {
                        name: "永川市",
                        id: 2735
                    },
                    {
                        name: "酉阳土家族苗族自治县",
                        id: 2736
                    },
                    {
                        name: "云阳县",
                        id: 2737
                    },
                    {
                        name: "忠县",
                        id: 2738
                    },
                    {
                        name: "重庆市区",
                        id: 2739
                    },
                    {
                        name: "潼南县",
                        id: 2740
                    },
                    {
                        name: "璧山县",
                        id: 2741
                    },
                    {
                        name: "綦江县",
                        id: 2742
                    },
                    {
                        name: "渝中区",
                        id: 4070
                    },
                    {
                        name: "大渡口区",
                        id: 4071
                    },
                    {
                        name: "江北区",
                        id: 4072
                    },
                    {
                        name: "沙坪坝区",
                        id: 4073
                    },
                    {
                        name: "九龙坡区",
                        id: 4074
                    },
                    {
                        name: "南岸区",
                        id: 4075
                    },
                    {
                        name: "北碚区",
                        id: 4076
                    },
                    {
                        name: "万盛区",
                        id: 4077
                    },
                    {
                        name: "双桥区",
                        id: 4078
                    },
                    {
                        name: "渝北区",
                        id: 4079
                    },
                    {
                        name: "巴南区",
                        id: 4080
                    },
                    {
                        name: "万州区",
                        id: 4081
                    },
                    {
                        name: "黔江区",
                        id: 4082
                    },
                    {
                        name: "长寿区",
                        id: 4083
                    },
                    {
                        name: "涪陵区",
                        id: 4084
                    },
                    {
                        name: "高新区",
                        id: 5181
                    },
                    {
                        name: "两江新区",
                        id: 6120
                    },
                    {
                        name: "北部新区",
                        id: 6121
                    }
                ]
            }
        ]
    },
    {
        name: "香港",
        id: 33,
        CityList: [
            {
                name: "香港",
                id: 395,
                CountryList: [
                    {
                        name: "香港特别行政区",
                        id: 4050
                    },
                    {
                        name: "中西区",
                        id: 4051
                    },
                    {
                        name: "东区",
                        id: 4052
                    },
                    {
                        name: "九龙城区",
                        id: 4053
                    },
                    {
                        name: "观塘区",
                        id: 4054
                    },
                    {
                        name: "南区",
                        id: 4055
                    },
                    {
                        name: "深水埗区",
                        id: 4056
                    },
                    {
                        name: "湾仔区",
                        id: 4057
                    },
                    {
                        name: "黄大仙区",
                        id: 4058
                    },
                    {
                        name: "油尖旺区",
                        id: 4059
                    },
                    {
                        name: "离岛区",
                        id: 4060
                    },
                    {
                        name: "葵青区",
                        id: 4061
                    },
                    {
                        name: "北区",
                        id: 4062
                    },
                    {
                        name: "西贡区",
                        id: 4063
                    },
                    {
                        name: "沙田区",
                        id: 4064
                    },
                    {
                        name: "屯门区",
                        id: 4065
                    },
                    {
                        name: "大埔区",
                        id: 4066
                    },
                    {
                        name: "荃湾区",
                        id: 4067
                    },
                    {
                        name: "元朗区",
                        id: 4068
                    }
                ]
            }
        ]
    },
    {
        name: "澳门",
        id: 34,
        CityList: [
            {
                name: "澳门",
                id: 396,
                CountryList: [
                    {
                        name: "澳门特别行政区",
                        id: 4069
                    },
                    {
                        name: "澳门半岛",
                        id: 6084
                    },
                    {
                        name: "氹仔",
                        id: 6085
                    },
                    {
                        name: "路环",
                        id: 6086
                    },
                    {
                        name: "路氹",
                        id: 6322
                    }
                ]
            }
        ]
    },
    {
        name: "台湾",
        id: 35,
        CityList: [
            {
                name: "高雄",
                id: 397,
                CountryList: [
                    {
                        name: "楠梓区",
                        id: 6051
                    },
                    {
                        name: "左营区",
                        id: 6052
                    },
                    {
                        name: "鼓山区",
                        id: 6053
                    },
                    {
                        name: "三民区",
                        id: 6054
                    },
                    {
                        name: "苓雅区",
                        id: 6055
                    },
                    {
                        name: "新兴区",
                        id: 6056
                    },
                    {
                        name: "前金区",
                        id: 6057
                    },
                    {
                        name: "盐埕区",
                        id: 6058
                    },
                    {
                        name: "前镇区",
                        id: 6059
                    },
                    {
                        name: "旗津区",
                        id: 6060
                    },
                    {
                        name: "小港区",
                        id: 6061
                    }
                ]
            },
            {
                name: "花莲",
                id: 398,
                CountryList: []
            },
            {
                name: "基隆",
                id: 399,
                CountryList: [
                    {
                        name: "中正区",
                        id: 6063
                    },
                    {
                        name: "暖暖区",
                        id: 6064
                    },
                    {
                        name: "仁爱区",
                        id: 6065
                    },
                    {
                        name: "中山区",
                        id: 6066
                    },
                    {
                        name: "安乐区",
                        id: 6067
                    },
                    {
                        name: "信义区",
                        id: 6068
                    },
                    {
                        name: "七堵区",
                        id: 6069
                    }
                ]
            },
            {
                name: "嘉义",
                id: 400,
                CountryList: []
            },
            {
                name: "台北",
                id: 401,
                CountryList: [
                    {
                        name: "中正",
                        id: 5151
                    },
                    {
                        name: "大同",
                        id: 5152
                    },
                    {
                        name: "中山",
                        id: 5153
                    },
                    {
                        name: "松山",
                        id: 5154
                    },
                    {
                        name: "大安",
                        id: 5155
                    },
                    {
                        name: "万华",
                        id: 5156
                    },
                    {
                        name: "信义",
                        id: 5157
                    },
                    {
                        name: "士林",
                        id: 5158
                    },
                    {
                        name: "北投",
                        id: 5159
                    },
                    {
                        name: "内湖",
                        id: 5160
                    },
                    {
                        name: "南港",
                        id: 5161
                    },
                    {
                        name: "文山",
                        id: 5162
                    }
                ]
            },
            {
                name: "台东",
                id: 402,
                CountryList: []
            },
            {
                name: "台南",
                id: 403,
                CountryList: [
                    {
                        name: "垦丁",
                        id: 5669
                    },
                    {
                        name: "东区",
                        id: 6070
                    },
                    {
                        name: "南区",
                        id: 6071
                    },
                    {
                        name: "北区",
                        id: 6072
                    },
                    {
                        name: "安南区",
                        id: 6073
                    },
                    {
                        name: "安平区",
                        id: 6074
                    },
                    {
                        name: "中西区",
                        id: 6075
                    }
                ]
            },
            {
                name: "台中",
                id: 404,
                CountryList: [
                    {
                        name: "中区",
                        id: 6076
                    },
                    {
                        name: "东区",
                        id: 6077
                    },
                    {
                        name: "西区",
                        id: 6078
                    },
                    {
                        name: "南区",
                        id: 6079
                    },
                    {
                        name: "北区",
                        id: 6080
                    },
                    {
                        name: "西屯区",
                        id: 6081
                    },
                    {
                        name: "南屯区",
                        id: 6082
                    },
                    {
                        name: "北屯区",
                        id: 6083
                    }
                ]
            },
            {
                name: "新竹",
                id: 5114,
                CountryList: []
            },
            {
                name: "宜兰",
                id: 5115,
                CountryList: [
                    {
                        name: "罗东镇",
                        id: 5163
                    },
                    {
                        name: "苏澳镇",
                        id: 5164
                    },
                    {
                        name: "头城镇",
                        id: 5165
                    },
                    {
                        name: "礁溪乡",
                        id: 5166
                    },
                    {
                        name: "壮围乡",
                        id: 5167
                    },
                    {
                        name: "员山乡",
                        id: 5168
                    },
                    {
                        name: "冬山乡",
                        id: 5169
                    },
                    {
                        name: "五结乡",
                        id: 5170
                    },
                    {
                        name: "三星乡",
                        id: 5171
                    },
                    {
                        name: "大同乡",
                        id: 5172
                    },
                    {
                        name: "南澳乡",
                        id: 5173
                    },
                    {
                        name: "宜兰市",
                        id: 5174
                    }
                ]
            },
            {
                name: "桃园",
                id: 5116,
                CountryList: []
            },
            {
                name: "苗栗",
                id: 5117,
                CountryList: []
            },
            {
                name: "彰化",
                id: 5118,
                CountryList: []
            },
            {
                name: "南投",
                id: 5119,
                CountryList: []
            },
            {
                name: "云林",
                id: 5120,
                CountryList: []
            },
            {
                name: "屏东",
                id: 5121,
                CountryList: []
            },
            {
                name: "金门",
                id: 5127,
                CountryList: []
            },
            {
                name: "澎湖",
                id: 5130,
                CountryList: []
            },
            {
                name: "新北",
                id: 6574,
                CountryList: []
            }
        ]
    }

];