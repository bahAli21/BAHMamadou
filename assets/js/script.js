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

// Ajout d'un écouteur d'événements pour le survol du bouton submit
const btn = document.getElementById('button');
btn.addEventListener('mouseover', function() {
    btn.style.color = 'black'; // Changement de couleur du texte en noir
    btn.style.fontWeight = 'bold';
});

document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const btn = document.getElementById('button');
    btn.value = 'Sending...';

    const serviceID = 'default_service';
    const templateID = 'template_siqlli9';

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = 'Send Email';
            alert('Thank you for your message! I will get back to you soon.');
            resetForm(); // Appele de ma fonction pour réinitialiser le formulaire
        }, (err) => {
            btn.value = 'Send Email';
            alert(JSON.stringify(err));
        });
});

// Fonction pour réinitialiser le formulaire
function resetForm() {
    document.getElementById('form').reset();
}





