const hamburger = {
    burgerContainers: document.querySelectorAll(".burger-container"),
    init: function(){
        console.log(hamburger.burgerContainers);
        hamburger.burgerContainers.forEach(burger => {
            burger.addEventListener("click", ev =>{
                ev.currentTarget.classList.toggle("x");
            });
        });
    }
};

hamburger.init();