var page = {
    init: function() {
        var that = this;
        $(window).on("popstate",function(){
            console.log(that.historyCache.length)
            if(!!that.historyCache.length){
                var $dom = that.historyCache.pop()
                $dom.removeClass("current");
                setTimeout(function(){
                    $dom.css("display",'none');
                },200)
            }

            //
        });
    },
    historyCache: [],
    open: function(page) {
        var pageSeletor = '#'+page+'Page';
        var $page = $(pageSeletor);
        var state = {
            url: window.location.href,
            index: this.historyCache.length
        }
        window.history.pushState(state,'货品选择','#'+page);
        $page.css("display",'block');
        setTimeout(function(){
            $page.addClass("current");
        },100)
        this.historyCache.push($page);
    },
    close: function() {
        //this.historyCache.pop().removeClass("current");
        window.history.back();
    }
}