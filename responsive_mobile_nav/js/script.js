window.onload = function(){
    const menu_btn = document.querySelector('.right-bar');
    const mobile_nav = document.querySelector('.mobile-nav');


    menu_btn.addEventListener('click', function(){
            menu_btn.classList.toggle('is-active');
            mobile_nav.classList.toggle('is-active');
    });
};