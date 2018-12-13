(function (win, lib) {
    var doc = win.document;
    var docEl = doc.documentElement;
    var devicePixelRatio = win.devicePixelRatio;
    var dpr = 1;
    var scale = 1;

    function setViewport() {
        dpr = 1;
        win.devicePixelRatioValue = dpr;
        scale = 1 / dpr;
        var metaEl = doc.createElement("meta");
        metaEl.setAttribute("name", "viewport");
        metaEl.setAttribute("content", "initial-scale=" + scale + ", maximum-scale=" + scale + ", minimum-scale=" + scale + ", user-scalable=no");
        if (docEl.firstElementChild) {
            docEl.firstElementChild.appendChild(metaEl)
        } else {
            var wrap = doc.createElement("div");
            wrap.appendChild(metaEl);
            doc.write(wrap.innerHTML)
        }
    }

    setViewport();
    var newBase = 100;

    function setRem() {
        var visualView = Math.min(docEl.getBoundingClientRect().width, lib.maxWidth);
        newBase = 100 * visualView / lib.desinWidth;
        docEl.style.fontSize = newBase + "px"
    }

    var tid;
    lib.desinWidth = 640;
    lib.baseFont = 18;
    lib.maxWidth = 540;
    lib.init = function () {
        win.addEventListener("resize", function () {
            clearTimeout(tid);
            tid = setTimeout(setRem, 300)
        }, false);
        win.addEventListener("pageshow", function (e) {
            if (e.persisted) {
                clearTimeout(tid);
                tid = setTimeout(setRem, 300)
            }
        }, false);
        if (doc.readyState === "complete") {
            doc.body.style.fontSize = lib.baseFont * dpr + "px"
        } else {
            doc.addEventListener("DOMContentLoaded", function (e) {
                doc.body.style.fontSize = lib.baseFont * dpr + "px"
            }, false)
        }
        setRem();
        docEl.setAttribute("data-dpr", dpr)
    }
})(window, window["adaptive"] || (window["adaptive"] = {}));
window['adaptive'].desinWidth = 750;// 设计图宽度
window['adaptive'].baseFont = 12;// 没有缩放时的字体大小
window['adaptive'].maxWidth = 540;// 页面最大宽度 默认540
window['adaptive'].init();// 调用初始化方法