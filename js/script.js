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
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
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


/*==================== scroll reveal ====================*/
ScrollReveal({
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .project-box, .contact form', { origin: 'bottom' });
ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });


/*==================== typed js ====================*/
const typed = new Typed('.multiple-text', {
    strings : [
        'Computer Science Student 👨‍🎓',
        'Software Developer 💻👨‍💼',
        'Mobile Developer 📱👨‍💻',
        'Cybersecurity Enthusiast 🔒🖥️'
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
        this.textContent = 'Hide More';
    } else {
        hiddenContent.style.display = 'none';
        this.textContent = 'Read More';
    }
});

/******Sent Message*******/
const btn = document.querySelector('.btn');
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

document.addEventListener('DOMContentLoaded', function() {
    var closeButton = document.getElementById('close');
    var popup = document.querySelector('.popup');

    closeButton.addEventListener('click', function() {
        popup.style.display = 'none';
    });
});




