document.addEventListener("DOMContentLoaded", function(){

    var main_menu_button = document.querySelector(".menu-button"),
        navigation_container = document.querySelector(".navigation"),
        navigation_wrapper = document.querySelector(".navigation-wrapper"),
        menu_toggled = false,
        delivery_adress_wrapper = document.querySelector(".delivery-adress-wrapper"),
        sticky_offset = delivery_adress_wrapper.offsetTop,
        delivery_adress_wrapper_filler = document.querySelector(".delivery-adress-wrapper-filler"),
        menu = document.querySelector(".menu"),
        navbar_input = document.querySelector("input.delivery-adress-description"),
        navbar_search_box = document.querySelector(".delivery-adress-wrapper-input.desktop-view");

    
    //line after focus
    navbar_input.addEventListener("focus", function(){
        navbar_search_box.classList.add('focus');
    });

    navbar_input.addEventListener("blur", function(){
        navbar_search_box.classList.remove('focus');
    });   
    
    //toggle main menu
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

    window.onscroll = function(){ scrollEvent() };

    function scrollEvent() {
        if (window.innerWidth < 1080) { // for mobile view
            
            //sticky search bar for mobile view
            if (window.scrollY >= sticky_offset) {
                delivery_adress_wrapper.classList.add('sticky');
                delivery_adress_wrapper_filler.classList.remove('hidden');
            }
            else {
                delivery_adress_wrapper.classList.remove('sticky');
                delivery_adress_wrapper_filler.classList.add('hidden');
            }
        }
        else { //for desktop view
            //hightlight navbar 
            if ( window.scrollY >= 96 ) { // (96 - navbar height)
                menu.classList.add('highlighted');
            }
            else {
                menu.classList.remove('highlighted');
            }
            //show input box
            if (window.scrollY >= sticky_offset) {
                navbar_search_box.style.opacity = "1";
            }
            else {
                navbar_search_box.style.opacity = "0";
            }
        }
    }
});