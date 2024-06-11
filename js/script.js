/*==================== toggle icon navbar ====================*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};


/*==================== scroll sections active link ====================*/
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    // Déclenchement de la fonction à chaque défilement de la fenêtre
    // Cette fonction gère la mise à jour de la classe "active" des liens de navigation en fonction de la section visible à l'écran.

    sections.forEach(sec => {
        // Parcours de chaque section de la page
        let top = window.scrollY; // Position de défilement verticale actuelle de la fenêtre
        let offset = sec.offsetTop - 150; // Position de défilement de la section par rapport au haut de la fenêtre, avec un décalage de 150 pixels vers le haut
        let height = sec.offsetHeight; // Hauteur de la section
        let id = sec.getAttribute('id'); // ID de la section

        if (top >= offset && top < offset + height) {
            // Vérification si la position de défilement actuelle de la fenêtre est à l'intérieur de la section visible à l'écran

            navLinks.forEach(links => {
                // Parcours de tous les liens de navigation
                links.classList.remove('active'); // Réinitialisation de la classe "active" pour tous les liens de navigation

                // Sélection du lien de navigation correspondant à la section visible à l'écran
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
                // Ajout de la classe "active" à ce lien pour le marquer comme actif
            });
        };
    });

    /*==================== sticky navbar ====================*/
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    /*==================== remove toggle icon and navbar when click navbar link (scroll) ====================*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};


/*==================== scroll reveal !tres important====================*/

/*
* ScrollReveal(): Ceci est un appel à la fonction ScrollReveal()
* qui initialise l'objet ScrollReveal pour configurer les animations.
.reveal(): C'est la méthode qui déclenche l'effet de révélation sur les éléments spécifiés.
*  Elle prend deux paramètres :
* le sélecteur des éléments à animer et un objet d'options pour personnaliser l'animation.
'.home-content, .heading': C'est le sélecteur CSS qui cible les éléments à animer.
*  Dans ce cas, les éléments avec les classes CSS 'home-content' et 'heading' seront animés.
{ origin: 'top' }: C'est un objet d'options qui spécifie comment les éléments seront animés.
*  Dans cet exemple, les éléments seront animés à partir du haut de la page.
*  L'option origin est utilisée pour cela, avec la valeur 'top' qui indique que les éléments vont apparaître en provenance du haut.
* */
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .title .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings : [
        'Software Developer 💻',
        'Full-Stack Dev 💻'
    ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});

document.getElementById('toggleBtn').addEventListener('click', function() {
    var hiddenContent = document.getElementById('hiddenContent');
    if (hiddenContent.style.display === 'none') {
        hiddenContent.style.display = 'block';
        this.textContent = 'Less';
    } else {
        hiddenContent.style.display = 'none';
        this.textContent = 'More';
    }
});

/******Sent Message*******/
const btn = document.querySelector('.btn-contact');
const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_siqlli9';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Message';
            alert('Your message has been sent successfully! Thank you for reaching out.');
        }, (err) => {
            btn.value = 'Send Message';
            alert(JSON.stringify(err));
        });
});

/************Project LINK *******************/
/*
    Ce script sélectionne tous les liens à l'intérieur des éléments ayant la classe .project-layer,
    puis ajoute un gestionnaire d'événements click à chacun d'eux. Lorsque le lien est cliqué,
    il récupère le texte du titre du projet associé et l'affiche dans l'alerte.
*/
// je sélectionne tous les liens dans la classe project-layer
const projectLinks = document.querySelectorAll('.project-layer a');

// Pour chaque lien, j'ajoute un gestionnaire d'événements click
projectLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault(); // Empêche le comportement par défaut du lien (redirection)
        var popup = document.querySelector('.popup');
        var github = document.querySelector('.github-link');
        var youtub = document.querySelector('.youtub-link');
        // je récupère le texte du titre du projet associé au lien cliqué
        const projectName = this.parentNode.querySelector('h4').innerText;
        if(projectName === "MP3 Player") {
            github.setAttribute("href", "https://github.com/bahAli21/SoundSync");
            youtub.setAttribute("href", "https://youtu.be/6594wsHxyKc?si=RN2Mm6AxL9Zzd6Oa");
        }else if(projectName === "CleanUp Pro") {
            github.setAttribute("href", "https://github.com/bahAli21/CleanUpPro-v1.0.0");
            youtub.setAttribute("href", "https://mamadoualioubah.gumroad.com/l/CleanUpPro");
        } else if(projectName === "AZERTYPE"){
            github.setAttribute("href", "https://github.com/bahAli21/AzerType-Project-JS");
            youtub.setAttribute("href", "https://bahali21.github.io/AzerType-Project-JS/");
        }else if(projectName === "Hunter Assassin Clone"){
            github.setAttribute("href", "https://github.com/bahAli21/HUNTER-ASSASSIN");
            youtub.setAttribute("href", "https://bahali21.github.io/AzerType-Project-JS/");
        }

        popup.style.display = 'block';
    });
});

/*
document.addEventListener('DOMContentLoaded', function() {
    var closeButton = document.getElementById('close');
    var popup = document.querySelector('.popup');

    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});
*/




