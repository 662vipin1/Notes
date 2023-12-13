const modal = {
    modalNode: null,
    overlay: null,
    btnClose: null,
    hideModal: function(){
        modal.overlay.classList.add("hidden");
        modal.modalNode.classList.add("off");
        setTimeout(modal.showModal, 5000);
    },
    showModal: function(){
        modal.overlay.classList.remove("hidden");
        modal.modalNode.classList.remove("off");
    },
    init: function(){
        modal.modalNode = document.querySelector(".modal");
        modal.overlay = document.querySelector(".overlay");
        modal.btnClose = document.querySelector(".btn-close");
        modal.overlay.addEventListener("click", modal.hideModal);
        modal.btnClose.addEventListener("click", modal.hideModal);
    },
};
modal.init();