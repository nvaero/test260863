// Sélectionnez le header
const header = document.querySelector('header');

// Variable pour suivre la position de défilement précédente
let lastScrollTop = 0;

// Écouteur d'événement pour le défilement de la page
window.addEventListener('scroll', () => {
    // Obtenez la position de défilement actuelle
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    // Vérifiez la direction du défilement et si le défilement est important
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Faites défiler vers le bas et défilement important, ajoutez la classe "scrolled" au header
        header.classList.add('scrolled');
    } else {
        // Faites défiler vers le haut ou défilement pas important, supprimez la classe "scrolled" du header
        header.classList.remove('scrolled');
    }

    // Mettez à jour la position de défilement précédente
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});




// Sélectionnez le bouton du menu hamburger
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav.main-nav');

// Ajoutez un écouteur d'événement au bouton du menu hamburger
navToggle.addEventListener('click', () => {
    // Basculez la classe 'active' sur le bouton du menu hamburger
    navToggle.classList.toggle('active');

    // Affichez ou masquez le menu de navigation
    navMenu.classList.toggle('active');
});






function initMap() {
    var location = { lat: 48.8566, lng: 2.3522 }; // Example: Coordinates for Paris
    var map = new google.maps.Map(document.getElementById('map'), {
        zoom: 12,
        center: location
    });
    var marker = new google.maps.Marker({
        position: location,
        map: map
    });
}




AOS.init({
    duration: 1000, // Durée de l'animation en millisecondes
    once: true, // Si true, l'animation ne se produit qu'une seule fois
});



document.addEventListener("DOMContentLoaded", function() {
    let navLinks = document.querySelectorAll("nav a");

    navLinks.forEach(function(link) {
        link.addEventListener("click", function(event) {
            event.preventDefault(); // Empêcher le chargement immédiat de la page
            
            // Ajouter une classe pour déclencher l'animation (ex. fade-out)
            link.classList.add("fade-out");

            // Attendre quelques millisecondes pour l'animation (ajuster selon besoin)
            setTimeout(function() {
                window.location.href = link.href; // Rediriger vers le lien après l'animation
            }, 500); // 500 millisecondes (ajuster la durée d'animation si nécessaire)
        });
    });
});
