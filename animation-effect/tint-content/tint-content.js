const tint = {
    containers: document.querySelectorAll(".tint-container"),
    init: function(){
        tint.containers.forEach(item => {
            item.addEventListener("click", ev =>{
                ev.currentTarget.classList.toggle("tint");
            });
        });
    }
};
tint.init();