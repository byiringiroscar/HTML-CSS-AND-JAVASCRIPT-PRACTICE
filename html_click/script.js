window.onload = function(){
    const btnOpen = document.querySelector(".btnOpen");
    const btnClose = document.querySelector(".btnClose");
    const modalContainer = document.querySelector(".modal-container")

    btnOpen.addEventListener("click", function(){
        modalContainer.classList.add("show");
    });
    btnClose.addEventListener("click", function(){
        modalContainer.classList.remove("show");
    })


}