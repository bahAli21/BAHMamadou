//BAH MAMADOU
// toggle icon navbar
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

// scroll sections
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            // active navbar links
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
            // active sections for animation on scroll
            sec.classList.add('show-animate');
        }
        // if want to use animation that repeats on scroll use this
        else {
            sec.classList.remove('show-animate');
        }
    });

    // sticky header
    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    // remove toggle icon and navbar when click navbar links (scroll)
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    // animation footer on scroll
    let footer = document.querySelector('footer');
    let scrollable = document.documentElement.scrollHeight - window.innerHeight;
    let scrolled = window.scrollY;

    if (Math.ceil(scrolled) === scrollable) {
        footer.classList.add('show-animate');
    }
    else {
        footer.classList.remove('show-animate');
    }
}

const moreButton = document.getElementById('more');
    const fullText = document.querySelector('.full-txt');

    moreButton.addEventListener('click', () => {
        fullText.style.display = 'block';
        moreButton.style.display = 'none';
    });


function sendEmail(nom, subject, corps, email) {
    let btnSend = document.getElementById("btnEnvoyerMail");

    // Définir un tableau de valeurs pour l'animation
    let animationValues = ["partage.", "partage..", "partage...", "partage...."];
    let currentIndex = 0;

    // je mets à jour la valeur du bouton chaque deux secondes
    let animationInterval = setInterval(function() {
        btnSend.value = animationValues[currentIndex];
        currentIndex = (currentIndex + 1) % animationValues.length; // Passons à la prochaine valeur
    }, 2000);

    // Envoie de l'e-mail après  8 secondes, pour bien faire l'effet animation
    setTimeout(function() {
        clearInterval(animationInterval); // j'arrête l'animation
        btnSend.value = "Envoyer"; // Je remet la valeur initiale
        emailjs.send("service_ttnsqiv","template_l7baqas",{
            from_name: nom,
            email: email,
            message: corps,
            from_subject: subject,
            from_page_url: "https://bahali21.github.io/AzerType-Project-JS/",
        }).then(function (res) {
            alert("Message envoyé avec succès, Merci d'avoir essayé notre site");
        }).catch(function(error) {
            alert("Une erreur est survenue lors de l'envoi du message : " + error);
        });
    }, 8000); // 8 secondes de délai avant l'envoi de l'e-mail
}
