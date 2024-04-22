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


function sendEmail() {
    document.querySelector('form').addEventListener('submit', function(event) {
        event.preventDefault(); // Empêche le formulaire de se soumettre normalement

        // Crée un dictionnaire pour stocker les valeurs des champs de saisie
        var formData = {};

        // Sélectionne tous les champs de saisie dans le formulaire
        var inputs = this.querySelectorAll('input, textarea');

        // Parcour chaque champ de saisie pour obtenir son ID et sa valeur
        inputs.forEach(function(input) {
            formData[input.id] = input.value; // Stocke la valeur dans le dictionnaire avec la clé correspondant à l'ID du champ
        });
    
        //let sendBtn = document.getElementById('sendEmail');
        //sendBtn.value = "Envoi..."
        emailjs.send("service_ttnsqiv","template_siqlli9",{
            fullName: document.getElementById('fullName').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value,
            subject: document.getElementById('subject').value,
            tel: document.getElementById('tel').value,
        }).then(function (res) {
            alert("Votre message a été envoyé avec succès);
            //sendBtn.value = "Envoyer"
        }).catch(function(error) {
            //sendBtn.value = "Envoyer"
            alert("Une erreur est survenue lors de l'envoi du message : " + error);
        });
    });
}

sendEmail();
