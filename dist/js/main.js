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
        $(this).find(".fa-angle-right").toggleClass("down");
        $(this).next(".child-links").slideToggle();
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
const zxc = 123;
const asd2 = "ahmed gad";