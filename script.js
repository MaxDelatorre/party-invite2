// Typewriter for main title
const titleText = "Gabriel's 50th\nBirthday Bash";
const titleEl = document.getElementById('main-title');
let i = 0;

function typeTitle() {
    if (i < titleText.length) {
        if (titleText[i] === '\n') {
            titleEl.innerHTML += '<br>';
        } else {
            titleEl.innerHTML += titleText[i];
        }
        i++;
        setTimeout(typeTitle, 80);
    }
}

window.addEventListener('load', () => {
    setTimeout(typeTitle, 1200);
});

// Floating gold particles
const particleContainer = document.getElementById('particles');
for (let p = 0; p < 30; p++) {
    const dot = document.createElement('div');
    dot.classList.add('particle');
    dot.style.left = Math.random() * 100 + '%';
    dot.style.bottom = '-10px';
    dot.style.setProperty('--dur', (4 + Math.random() * 6) + 's');
    dot.style.setProperty('--delay', (Math.random() * 8) + 's');
    dot.style.width = dot.style.height = (2 + Math.random() * 3) + 'px';
    particleContainer.appendChild(dot);
}

// Scroll arrow click
document.getElementById('scrollArrow').addEventListener('click', () => {
    document.querySelector('.details').scrollIntoView({ behavior: 'smooth' });
});

// Countdown to June 6, 2026 5:00 PM
function updateCountdown() {
    const target = new Date('June 6, 2026 17:00:00');
    const now = new Date();
    const diff = target - now;

    if (diff <= 0) {
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
        return;
    }

    const days    = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours   = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    document.getElementById('days').textContent    = String(days).padStart(2, '0');
    document.getElementById('hours').textContent   = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Fade-in on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll('.card, .count-block, .rsvp-inner').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
    observer.observe(el);
});