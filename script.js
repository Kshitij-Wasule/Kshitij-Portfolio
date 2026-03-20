/* =============================================
   KSHITIJ WASULE — PORTFOLIO SCRIPTS
   script.js
   ============================================= */

/* ---------- CUSTOM CURSOR ---------- */
const cursor    = document.getElementById('cursor');
const cursorRing = document.getElementById('cursorRing');

let mouseX = 0, mouseY = 0;
let ringX  = 0, ringY  = 0;

// Move the dot cursor instantly
document.addEventListener('mousemove', (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
  cursor.style.transform = `translate(${mouseX - 6}px, ${mouseY - 6}px)`;
});

// Animate the ring with smooth lag
function animateRing() {
  ringX += (mouseX - ringX - 18) * 0.15;
  ringY += (mouseY - ringY - 18) * 0.15;
  cursorRing.style.transform = `translate(${ringX}px, ${ringY}px)`;
  requestAnimationFrame(animateRing);
}
animateRing();

// Scale cursor on hover over interactive elements
document.querySelectorAll('a, button').forEach((el) => {
  el.addEventListener('mouseenter', () => {
    cursorRing.style.width  = '52px';
    cursorRing.style.height = '52px';
  });
  el.addEventListener('mouseleave', () => {
    cursorRing.style.width  = '36px';
    cursorRing.style.height = '36px';
  });
});


/* ---------- SCROLL REVEAL ---------- */
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.12 }
);

revealElements.forEach((el) => revealObserver.observe(el));


/* ---------- DUCK EASTER EGG ---------- */
const duck   = document.getElementById('duckHero');
let quackCount = 0;

const quackMessages = [
  'Quack!',
  'QUACK!!',
  '🦆 Quaaack!',
  'Stop clicking me!!',
  '...fine, quack.',
  '🦆💛 OK I like you.',
  'QUACK QUACK QUACK!!!',
];

duck.addEventListener('click', () => {
  quackCount++;
  duck.title = quackMessages[quackCount % quackMessages.length];

  // Burst animation on click
  duck.style.animation = 'none';
  const angle = (Math.random() * 30 - 15).toFixed(1);
  duck.style.transform = `translateY(-50%) scale(1.4) rotate(${angle}deg)`;

  setTimeout(() => {
    duck.style.transform = '';
    duck.style.animation = 'duckBob 3s ease-in-out infinite';
  }, 300);
});


/* ---------- ACTIVE NAV HIGHLIGHT ---------- */
const sections = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a');

const navObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.style.color = '';
          if (link.getAttribute('href') === `#${entry.target.id}`) {
            link.style.color = 'var(--duck)';
          }
        });
      }
    });
  },
  { threshold: 0.4 }
);

sections.forEach((section) => navObserver.observe(section));