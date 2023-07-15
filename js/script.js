document.addEventListener("DOMContentLoaded", function(){

    var main_menu_button = document.querySelector(".menu-button"),
        navigation_container = document.querySelector(".navigation"),
        navigation_wrapper = document.querySelector(".navigation-wrapper"),
        menu_toggled = false;

    main_menu_button.addEventListener("click", function(){
        navigation_container.classList.add('active');
        navigation_wrapper.classList.add('active');
        document.body.classList.add('noscroll');
        menu_toggled = true;
    });

    navigation_container.addEventListener("click", function(e){
        if(menu_toggled & (e.target === this)){
            navigation_container.classList.remove('active');
            navigation_wrapper.classList.remove('active');
            document.body.classList.remove('noscroll');
            menu_toggled = false;
        }
    });
});