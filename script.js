
const header = document.querySelector('header');


let lastScrollTop = 0;


window.addEventListener('scroll', () => {
    
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        
        header.classList.add('scrolled');
    } else {
        
        header.classList.remove('scrolled');
    }


    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});




//menu de navigation
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav.main-nav');


navToggle.addEventListener('click', () => {
    
    navToggle.classList.toggle('active');

    
    navMenu.classList.toggle('active');
});






function initMap() {
    var location = { lat: 48.8566, lng: 2.3522 }; 
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}



//animation defilement pages
AOS.init({
    duration: 1000, 
    once: true, 
});



document.addEventListener("DOMContentLoaded", function() {
    let navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); 
            
            
            link.classList.add("fade-out");

            
            setTimeout(function() {
                window.location.href = link.href; 
            }, 500); 
        });
    });
});
