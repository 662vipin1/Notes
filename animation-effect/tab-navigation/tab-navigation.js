let tabs = document.querySelectorAll(".tab");
let tabContents = document.querySelectorAll(".tab-content");
let activeTab = document.querySelector(".tab.active");
let activeContent = document.querySelector(".tab-content.active");
tabs.forEach(tab => tab.addEventListener("click", switchTab));
function switchTab(ev){
    let id = ev.target.getAttribute("data-id");
    activeTab.classList.remove("active");
    activeContent.classList.remove("active");
    activeTab = ev.target;
    activeContent = document.querySelector(`.tab-content[data-id=${id}]`);
    activeTab.classList.add("active");
    activeContent.classList.add("active");
}