const progressBar = {
    header: document.querySelector("header"),
    bar: document.querySelector(".bar"),
    main: document.querySelector("main"),
    adjustBar: function(){
        progressBar.main.style.marginTop = window.getComputedStyle(progressBar.header).getPropertyValue("height");
        let pageWidth = document.body.clientWidth;
        let pageOffset = window.scrollY;
        let windowHeight = window.innerHeight; /**viewport height */
        let mainTop = progressBar.main.offsetTop;
        let mainHeight = progressBar.main.offsetHeight;
        let mainFr = (windowHeight + pageOffset - mainTop) / mainHeight;
        let barWidth = mainFr * pageWidth;
        progressBar.bar.style.width = barWidth + "px";
    },
    init: function(){
        window.addEventListener("scroll", progressBar.adjustBar);
        window.addEventListener("resize", progressBar.adjustBar);
        window.addEventListener("DOMContentLoaded", progressBar.adjustBar);
    }
};

progressBar.init();