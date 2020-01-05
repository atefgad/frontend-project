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
        $(this).find(".side-menu-arrow").toggleClass("down");
        $(this).next(".child-links").slideToggle();
    })

    $(".search-btn, .search-close").on("click", function(){
      $(".search-bar").toggleClass("open");
    })

    // hamburger-icon
    $(".hamburger-icon").on("click",function() {
        $(this).toggleClass("open");
    })

    // fullScreen
    $(".fullScreen").on("click", function() {
        $(this).toggleClass("openFullScreen");
        if($(this).hasClass("openFullScreen")){
            openFullscreen()
        }else{
            closeFullscreen()
        }
    })

    // toggle-Settings Box
    $(".toggle-settings").on("click", function (){
      $(".settings-box").toggleClass("hide-settings");
      $(this).find("i").toggleClass("fa-spin")
    })

    // Change Theme Color
    var themeColors = [];
    $(".color-options li").each(function(){
      themeColors.push($(this).data("theme"));
    })
    $(".color-options li").on("click", function(){
      $(this).addClass("active").siblings().removeClass("active");
      $("body")
        .removeClass(themeColors.join(" "))
        .addClass($(this).data("theme"));
    })


})


/* Get the documentElement (<html>) to display the page in fullscreen */
var elem = document.documentElement;

/* View in fullscreen */
function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.mozRequestFullScreen) { /* Firefox */
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE/Edge */
    elem.msRequestFullscreen();
  }
}

/* Close fullscreen */
function closeFullscreen() {
  if (document.exitFullscreen) {
    document.exitFullscreen();
  } else if (document.mozCancelFullScreen) { /* Firefox */
    document.mozCancelFullScreen();
  } else if (document.webkitExitFullscreen) { /* Chrome, Safari and Opera */
    document.webkitExitFullscreen();
  } else if (document.msExitFullscreen) { /* IE/Edge */
    document.msExitFullscreen();
  }
}