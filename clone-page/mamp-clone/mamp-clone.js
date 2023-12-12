const switchTab = {
    tab: document.querySelector(".tab.active"),
    frame: document.querySelector(".code-frame.active"),
    setFrame: function(ev){
        ev.preventDefault();
        switchTab.tab.classList.remove("active");
        switchTab.frame.classList.remove("active");
        switchTab.tab = ev.currentTarget;
        switchTab.frame = document.getElementById(ev.currentTarget.getAttribute("data-href"));
        switchTab.tab.classList.add("active");
        switchTab.frame.classList.add("active");
    },
    init: function(){
        document.querySelectorAll(".tab").forEach(li =>li.addEventListener("click", switchTab.setFrame) );
    }
}
const slideShow = {
    items: [],
    indicators: [],
    itemsCount: null,
    cur: null,
    transitionTime: 300,
    intervalHolder: null,
    getItems: function(){
        slideShow.items = document.querySelectorAll(".slide-item");
        slideShow.items.forEach((item, index) => item.setAttribute("data-index", index));
        slideShow.itemsCount = slideShow.items.length;
        slideShow.cur = 0;
    },
    getIndicators: function(){
        slideShow.indicators = document.querySelectorAll(".indicator");
        slideShow.indicators.forEach((item, index) => item.setAttribute("data-index", index));
        slideShow.indicators.forEach(item => item.addEventListener("click", slideShow.iEv));
    },
    iEv: function(ev){
        clearInterval(slideShow.intervalHolder);
        let tar = Number.parseInt(ev.target.getAttribute("data-index"));
        if(tar != slideShow.cur) slideShow.slide(tar);
        slideShow.intervalHolder = setInterval(slideShow.slide, slideShow.transitionTime * 10);
    },
    switchIndicator: function(next){
        let cur = slideShow.cur;
        slideShow.indicators[cur].classList.remove("active");
        slideShow.indicators[next].classList.add("active");
    },
    switchItem: function(next){
        let cur = slideShow.cur;
        slideShow.items[cur].classList.remove("current");
        slideShow.items[cur].classList.add("leaving");
        setTimeout(i => i.classList.remove("leaving"), slideShow.transitionTime, slideShow.items[cur]);
        slideShow.items[next].classList.add("current");
    },
    slide: function(next){
        if(slideShow.itemsCount == 1) return 0;
        next? 0: next = (slideShow.cur + 1) % slideShow.itemsCount;
        slideShow.switchItem(next);
        slideShow.switchIndicator(next);
        slideShow.cur = next;
    },
    init: function(){
        slideShow.getItems();
        slideShow.getIndicators();
        slideShow.intervalHolder = setInterval(slideShow.slide, slideShow.transitionTime * 10);
    }
};
slideShow.init();
switchTab.init();