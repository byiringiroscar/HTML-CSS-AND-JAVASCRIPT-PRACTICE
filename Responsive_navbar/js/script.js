window.onload=function(){
    const menu_btn=document.querySelector(".right-bar");
    const mobile_btn=document.querySelector(".mobile-nav");
    menu_btn.addEventListener('click', function(){
        menu_btn.classList.toggle('is-active');
        mobile_btn.classList.toggle('is-active');
        
    })
}