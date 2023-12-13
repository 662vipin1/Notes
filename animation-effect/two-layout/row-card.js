const changeLayout = {
    btn: document.getElementById("btn-layout"),
    data: document.querySelector(".data"),
    toggleLayout: function(ev){
        changeLayout.data.classList.toggle("row");
        changeLayout.data.classList.toggle("card");
    },
    init: function(){
        changeLayout.btn.addEventListener("click", changeLayout.toggleLayout);
    }
}
changeLayout.init();