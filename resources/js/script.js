/* Mobile navigation */
    /*$('.js--nav-icon').click(function() {
        var nav = $('.main-nav');
        var icon = $('.js--nav-icon i');
        
        nav.style.display = "block";
        
        if (icon.hasClass('ion-md-menu')) {
            icon.addClass('ion-md-close');
            icon.removeClass('ion-md-menu');
        } else {
            icon.addClass('ion-md-menu');
            icon.removeClass('ion-md-close');
        }        
    });*/

function change(){
        var nav = document.getElementById("mainNav");
        var icon = document.getElementById("navicon");
        
        if(nav.style.display == "none")
            nav.style.display = "block";
        else
            nav.style.display = "none";
        
        if (icon.hasClass('ion-md-menu')) {
            icon.style.opacity = "0.6";
            icon.addClass('ion-md-close');
            icon.removeClass('ion-md-menu');
        } else {
            icon.addClass('ion-md-menu');
            icon.removeClass('ion-md-close');
        }      
}