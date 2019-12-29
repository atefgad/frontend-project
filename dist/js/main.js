const asd = "atef gad";
$(function(){
    "use strict";
    $(".toggle-sidebar").on("click", function(){
        $(".content-area, .sidebar").toggleClass("no-sidebar")
    })
    
    // sidebar menu toggle
    // $(".sidebar-list > li > a").on("click", function(){
    //     $(".child-links").toggleClass("active")
    // })

    // sidebar submenu toggle
    $(".toggle-submenu").on("click", function(){
        $(this).toggleClass("fa-angle-right fa-angle-down");
        $(this).parent('a').next(".child-links").slideToggle();
    })
})
const zxc = 123;
const asd2 = "ahmed gad";