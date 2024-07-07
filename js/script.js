
var primaryColor = '#4D869C';

window.addEventListener('load', init);

function init() {
    
    // PRINT DATE

    let date = new Date();
    document.getElementById("date").innerHTML = date.getFullYear();

    // CURSOR

    var cursor = document.getElementById("cursor");
    document.body.addEventListener("mousemove", function(e) {
        cursor.style.left = e.clientX + "px",
        cursor.style.top = e.clientY + "px";
    });

    // LOGOS SLIDE

    var copy = document.querySelector(".logos-slide").cloneNode(true);
    document.querySelector(".logos").appendChild(copy);
    
}

// BTN TOP

window.addEventListener('scroll', function() {
    var btnTop = document.getElementById('btn-top');
    if (window.scrollY > 50) {
        btnTop.classList.add('btn-top-show');
    } else {
        btnTop.classList.remove('btn-top-show');
    }
});

// TOGGLE MENU

function toggleMenu() {

    // Selecciona toggle-buton
    const toggleButton = document.querySelector(".toggle-button");

    // Añade la clase que convierte las barras en una x
    toggleButton.classList.toggle("open");
    
    // Selecciona desktop-menu
    const mobileMenu = document.querySelector(".mobile-menu");

    // Añade la clase al menu desktop
    mobileMenu.classList.toggle("show-mobile-menu");

    // Selecciona header
    const header = document.querySelector(".header");

    // Coloca el menú después de header
    header.appendChild(desktopMenu);

}

// JQUERY

$(document).ready(function() {

    // SMOOTH SCROLL

    $('a[href^="#"]').click(function() {
        let destino = $(this.hash);
        if (destino.length == 0) {
            destino = $('a[name="' + this.hash.substr(1) + '"]');
        }
        if (destino.length == 0) {
            destino = $('html');
        }
        $('html, body').animate({ scrollTop: destino.offset().top }, 500);
        return false;
    });

    // HOVER SERVICES

    $('.noactive-service').hover(function() {
        $('#first-service').css('transition-property', 'background-color color');
        $('#first-service').css('transition-duration', '1s');
        $('#first-service').css('color', '#000');
        $('#first-service').css('background-color', '#fff');
        $('.active-service .service-logo').css('transition-property', 'color');
        $('.active-service .service-logo').css('transition-duration', '1s');
        $('.active-service .service-logo').css('color', primaryColor);
        $('.noactive:hover .service-logo').css('transition-property', 'color');
        $('.noactive:hover .service-logo').css('transition-duration', '1s');
        $('.noactive:hover .service-logo').css('color', '#fff');
    });

    /*
    $('#first-service').hover(function() {
        $('#first-service').css('transition-property', 'background-color color');
        $('#first-service').css('transition-duration', '1s');
        $('#first-service').css('color', '#fff');
        $('#first-service').css('background-color', primaryColor);
        $('.active-service .service-logo').css('transition-property', 'color');
        $('.active-service .service-logo').css('transition-duration', '1s');            
        $('.active-service .service-logo').css('color', '#fff');
    });
    */
    
    $('.noactive-service').mouseleave(function() {
        $('#first-service').css('transition-property', 'background-color color');
        $('#first-service').css('transition-duration', '1s');
        $('#first-service').css('color', '#fff');
        $('#first-service').css('background-color', primaryColor);
        $('.active-service .service-logo').css('transition-property', 'color');
        $('.active-service .service-logo').css('transition-duration', '1s');            
        $('.active-service .service-logo').css('color', '#fff');
        $('.noactive .service-logo').css('transition-property', 'color');
        $('.noactive .service-logo').css('transition-duration', '1s');
        $('.noactive .service-logo').css('color', primaryColor);
    });
    
    // END HOVER SERVICES

});
