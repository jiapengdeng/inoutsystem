! function() {
    function a(a) {
        var b, c = location.href,
            d = c.match(/(\?|&)pageName=[^&#]*/);
        return d ? (b = d.index, c = c.substring(0, b) + d[1] + "pageName=" + a + c.substring(b + d[0].length)) : (b = c.indexOf("#"), -1 === b && (b = c.length), c = location.href.substring(0, b) + (-1 === c.indexOf("?") ? "?" : "&") + "pageName=" + a + c.substring(b)), c }

    function b() {
        var a = location.href.match(/(\?|&)pageName=([^&#]*)/);
        return a ? a[2] : void 0 }

    function c(a) {
        var b = i(a);
        if (0 !== b.length) {
            var c = i(h[h.length - 1]).data("scrollTop", $(window).scrollTop());
            b.css({ display: "block" }), setTimeout(function() { b.addClass("current") }, 20), $(window).scrollTop(0), setTimeout(function() { c.css({ display: "none" }) }, 220), h.push(a), setTimeout(function() { e(a) }, 220) } }

    function d(a) {
        var b = i(a);
        if (0 !== b.length) { b.css({ display: "block" });
            var c = i(h.pop()).removeClass("current");
            setTimeout(function() { c.css({ display: "none" }), $(window).scrollTop(b.data("scrollTop")) }, 200), setTimeout(function() { e(a) }, 200) } }

    function e(a) {
        var b = j[a];
        if (b)
            for (var c = 0, d = b.length; d > c; c++) b[c](a) }
    var f = function() {
            return "" },
        g = function(a) {
            return a.state ? a.state.page : void 0 },
        h = ["main"];
    $(window).on("popstate", function(a) {
        var b = g(a);
        b || (b = h[0]), h[h.length - 1] === b || (h[h.length - 2] === b ? d.call(k, b) : c.call(k, b)) });
    var i = function(a) {
            return $(document.getElementById(a + "Page")) },
        j = {},
        k = { init: function(d) {
                if (d = d || {}, i = d.getter || i, h[0] = d.main || h[0], e(h[0]), d.open) { f = a, g = b;
                    var j = g();
                    if (j && j !== h[0]) {
                        var k = d.urlMap;
                        if (k) {
                            var l, m, n;
                            if ($.isArray(k[0])) {
                                for (l = 0, m = k.length; m > l; l++)
                                    if (n = k[l].indexOf(j), -1 !== n) { k = k[l];
                                        break } } else n = k.indexOf(j);
                            for (l = 0; n >= l; l++) c.call(this, k[l]); - 1 === n && c.call(this, j) } } } }, open: function(a) { a === h[h.length - 1] ? e(a) : (history.pushState({ page: a }, "", f(a)), c.call(this, a)) }, close: function() { history.go(-1) }, refresh: function() { e(h[h.length - 1]) }, add: function(a, b) { "function" == typeof b && (j[a] ? j[a].push(b) : j[a] = [b]) }, remove: function(a, b) {
                if (j[a])
                    for (var c = j[a].length - 1; c >= 0; c++)
                        if (j[a][c] === b) { j[a].splice(c, 1);
                            break } } };
    window.page = k }();
