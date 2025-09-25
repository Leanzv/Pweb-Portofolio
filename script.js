// Animasi Load Page
window.addEventListener('DOMContentLoaded', function() {
    document.body.classList.add('loaded');
});

// Animasi Cursor Home
const words = ["Programmer", "Web Developer", "Designer", "Content Creator", "Goldlaner"];
const textEl = document.getElementById("animated-text");
let i = 0;

function typeWord(word, callback) {
    let index = 0;
    const interval = setInterval(() => {
        textEl.textContent = word.slice(0, index + 1);
        index++;
        if (index === word.length) {
            clearInterval(interval);
            setTimeout(callback, 1000);
        }
    }, 150);
}

function deleteWord(callback) {
    let word = textEl.textContent;
    let index = word.length;
    const interval = setInterval(() => {
        textEl.textContent = word.slice(0, index - 1);
        index--;
        if (index === 0) {
            clearInterval(interval);
            setTimeout(callback, 300);
        }
    }, 100);
}

function startTyping() {
    typeWord(words[i], () => {
        deleteWord(() => {
            i = (i + 1) % words.length;
            startTyping();
        });
    });
}

startTyping();

// Navbar active state
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function() {
        document.querySelectorAll('.navbar a').forEach(l => l.classList.remove('active'));
        this.classList.add('active');
    });
});


// Smooth scroll
document.querySelectorAll('.navbar a').forEach(link => {
    link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');
        if (href.startsWith('#')) {
            e.preventDefault();
            document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Contact form submit
document.querySelector('.contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Pesan berhasil dikirim!');
    this.reset();
});

// Animasi muncul dari kiri/kanan saat scroll
function animateSectionsOnScroll() {
    document.querySelectorAll('.section-animate').forEach(section => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight - 80) {
            section.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', animateSectionsOnScroll);
window.addEventListener('DOMContentLoaded', animateSectionsOnScroll);

