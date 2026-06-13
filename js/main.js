'use strict';

/* ============================================================
   NAVBAR – sombra al hacer scroll
============================================================ */
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 10);
  updateActiveLink();
}, { passive: true });

/* ============================================================
   HAMBURGER
============================================================ */
const hamburger = document.getElementById('hamburger');
const navLinksEl = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinksEl.classList.toggle('open');
  const spans = hamburger.querySelectorAll('span');
  const isOpen = navLinksEl.classList.contains('open');
  spans[0].style.cssText = isOpen ? 'transform:translateY(7px) rotate(45deg)' : '';
  spans[1].style.cssText = isOpen ? 'opacity:0' : '';
  spans[2].style.cssText = isOpen ? 'transform:translateY(-7px) rotate(-45deg)' : '';
});
navLinksEl.querySelectorAll('.nav-link').forEach(l => {
  l.addEventListener('click', () => {
    navLinksEl.classList.remove('open');
    hamburger.querySelectorAll('span').forEach(s => s.style.cssText = '');
  });
});

/* ============================================================
   ACTIVE LINK AL SCROLL
============================================================ */
function updateActiveLink() {
  const ids = ['inicio', 'profesionales', 'servicios', 'como-funciona', 'trabaja', 'resenas'];
  let current = 'inicio';
  ids.forEach(id => {
    const el = document.getElementById(id);
    if (el && window.scrollY >= el.offsetTop - 100) current = id;
  });
  document.querySelectorAll('.nav-link').forEach(l => {
    l.classList.toggle('active', l.getAttribute('href') === '#' + current);
  });
}
updateActiveLink();

/* ============================================================
   SCROLL REVEAL – animación de entrada al aparecer
============================================================ */
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

/* ============================================================
   CONTADORES ANIMADOS (sección estadísticas)
============================================================ */
function animateCounter(el) {
  const target = parseInt(el.dataset.target, 10);
  const suffix = el.dataset.suffix || '';
  const duration = 1600;
  const step = target / (duration / 16);
  let current = 0;
  const timer = setInterval(() => {
    current += step;
    if (current >= target) { current = target; clearInterval(timer); }
    el.textContent = Math.floor(current).toLocaleString('es-PE') + suffix;
  }, 16);
}

const statsObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.querySelectorAll('[data-target]').forEach(animateCounter);
      statsObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

const statsSection = document.querySelector('.stats-section');
if (statsSection) statsObserver.observe(statsSection);

/* ============================================================
   SLIDER DE PROFESIONALES DESTACADOS
============================================================ */
const prosTrack = document.querySelector('.pros-track');
const prosCards = document.querySelectorAll('.pros-track .pro-card');
const prosDotsContainer = document.querySelector('.pros-dots');
const prosBtnPrev = document.querySelector('.pros-slider-btn--prev');
const prosBtnNext = document.querySelector('.pros-slider-btn--next');

if (prosTrack && prosCards.length) {
  let prosPerView = 4;
  function getProsPerView() {
    if (window.innerWidth <= 600) return 1;
    if (window.innerWidth <= 992) return 2;
    return 4;
  }

  let prosCurrent = 0;
  let prosTotalPages = 1;

  function buildProsDots() {
    prosDotsContainer.innerHTML = '';
    for (let i = 0; i < prosTotalPages; i++) {
      const dot = document.createElement('button');
      dot.className = 'pros-dot' + (i === 0 ? ' active' : '');
      dot.setAttribute('aria-label', 'Página ' + (i + 1));
      dot.addEventListener('click', () => prosGoTo(i));
      prosDotsContainer.appendChild(dot);
    }
  }

  function prosGoTo(index) {
    prosCurrent = (index + prosTotalPages) % prosTotalPages;
    const offset = prosCurrent * 100;
    prosTrack.style.transform = `translateX(-${offset}%)`;
    document.querySelectorAll('.pros-dot').forEach((d, i) => d.classList.toggle('active', i === prosCurrent));
  }
  window.prosGoTo = prosGoTo;
  window.prosPerView = () => prosPerView;

  function prosRefresh() {
    prosPerView = getProsPerView();
    prosTotalPages = Math.max(1, Math.ceil(prosCards.length / prosPerView));
    prosCurrent = Math.min(prosCurrent, prosTotalPages - 1);
    buildProsDots();
    prosGoTo(prosCurrent);
  }

  prosBtnPrev && prosBtnPrev.addEventListener('click', () => prosGoTo(prosCurrent - 1));
  prosBtnNext && prosBtnNext.addEventListener('click', () => prosGoTo(prosCurrent + 1));

  // Auto-play
  let prosAutoplay = setInterval(() => prosGoTo(prosCurrent + 1), 5000);
  prosTrack.parentElement.addEventListener('mouseenter', () => clearInterval(prosAutoplay));
  prosTrack.parentElement.addEventListener('mouseleave', () => {
    prosAutoplay = setInterval(() => prosGoTo(prosCurrent + 1), 5000);
  });

  // Swipe táctil
  let prosStartX = 0;
  prosTrack.addEventListener('touchstart', e => { prosStartX = e.touches[0].clientX; }, { passive: true });
  prosTrack.addEventListener('touchend', e => {
    const diff = prosStartX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) prosGoTo(prosCurrent + (diff > 0 ? 1 : -1));
  });

  window.addEventListener('resize', prosRefresh);
  prosRefresh();
}

/* ============================================================
   SLIDER DE RESEÑAS
============================================================ */
const track = document.querySelector('.reviews-track');
const slides = document.querySelectorAll('.review-slide');
const dotsContainer = document.querySelector('.reviews-dots');
const btnPrev = document.querySelector('.reviews-slider-btn--prev');
const btnNext = document.querySelector('.reviews-slider-btn--next');

if (track && slides.length) {
  let current = 0;
  const total = slides.length;

  // Crear dots
  slides.forEach((_, i) => {
    const dot = document.createElement('button');
    dot.className = 'reviews-dot' + (i === 0 ? ' active' : '');
    dot.setAttribute('aria-label', 'Reseña ' + (i + 1));
    dot.addEventListener('click', () => goTo(i));
    dotsContainer.appendChild(dot);
  });

  function goTo(index) {
    slides[current].classList.remove('active');
    document.querySelectorAll('.reviews-dot')[current].classList.remove('active');
    current = (index + total) % total;
    slides[current].classList.add('active');
    document.querySelectorAll('.reviews-dot')[current].classList.add('active');
    track.style.transform = `translateX(-${current * 100}%)`;
  }

  btnPrev && btnPrev.addEventListener('click', () => goTo(current - 1));
  btnNext && btnNext.addEventListener('click', () => goTo(current + 1));

  // Auto-play
  let autoplay = setInterval(() => goTo(current + 1), 5000);
  track.parentElement.addEventListener('mouseenter', () => clearInterval(autoplay));
  track.parentElement.addEventListener('mouseleave', () => {
    autoplay = setInterval(() => goTo(current + 1), 5000);
  });

  // Swipe táctil
  let startX = 0;
  track.addEventListener('touchstart', e => { startX = e.touches[0].clientX; }, { passive: true });
  track.addEventListener('touchend', e => {
    const diff = startX - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) goTo(current + (diff > 0 ? 1 : -1));
  });

  // Activar primera slide
  slides[0].classList.add('active');
}

/* ============================================================
   MODALES
============================================================ */
function openModal(id) {
  document.getElementById(id).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeModal(id) {
  document.getElementById(id).classList.remove('open');
  document.body.style.overflow = '';
}
document.querySelectorAll('.modal-overlay').forEach(o => {
  o.addEventListener('click', e => { if (e.target === o) closeModal(o.id); });
});
document.addEventListener('keydown', e => {
  if (e.key === 'Escape')
    document.querySelectorAll('.modal-overlay.open').forEach(m => closeModal(m.id));
});
document.getElementById('btn-login').addEventListener('click', () => openModal('modal-login'));
document.getElementById('close-login').addEventListener('click', () => closeModal('modal-login'));
document.getElementById('close-register').addEventListener('click', () => closeModal('modal-register'));
document.getElementById('close-profile').addEventListener('click', () => closeModal('modal-profile'));

function openLogin() { closeModal('modal-register'); openModal('modal-login'); }
function openRegister() { closeModal('modal-login'); openModal('modal-register'); }

/* ============================================================
   ROLE TABS
============================================================ */
function selectRole(role, btn) {
  document.querySelectorAll('.role-tab').forEach(t => t.classList.remove('role-active'));
  btn.classList.add('role-active');
  document.getElementById('reg-svc').style.display = role === 'trabajador' ? 'flex' : 'none';
}

/* ============================================================
   LOGIN
============================================================ */
function handleLogin() {
  const email = document.getElementById('login-email').value.trim();
  const pass  = document.getElementById('login-pass').value.trim();
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    shake('login-email'); showToast('⚠️ Ingresa un correo válido.'); return;
  }
  if (pass.length < 6) { shake('login-pass'); showToast('⚠️ Contraseña muy corta.'); return; }
  closeModal('modal-login');
  showToast('✅ ¡Bienvenido! Sesión iniciada correctamente.');
}

/* ============================================================
   REGISTRO
============================================================ */
function handleRegister() {
  const name  = document.getElementById('reg-name').value.trim();
  const email = document.getElementById('reg-email').value.trim();
  const pass  = document.getElementById('reg-pass').value.trim();
  if (!name) { shake('reg-name'); showToast('⚠️ Ingresa tu nombre.'); return; }
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { shake('reg-email'); showToast('⚠️ Correo inválido.'); return; }
  if (pass.length < 8) { shake('reg-pass'); showToast('⚠️ Mínimo 8 caracteres.'); return; }
  closeModal('modal-register');
  showToast('🎉 ¡Cuenta creada! Bienvenido a SERVIHogar.');
}

/* ============================================================
   PERFIL PROFESIONAL
============================================================ */
function openProfile(name, cat, rating, rev, price, initials, color) {
  document.getElementById('p-ava').textContent = initials;
  document.getElementById('p-ava').style.background = color;
  document.getElementById('p-name').textContent = name;
  document.getElementById('p-cat').textContent  = cat;
  const stars = Math.round(parseFloat(rating));
  document.getElementById('p-stars').textContent = '★'.repeat(stars) + '☆'.repeat(5 - stars);
  document.getElementById('p-rev').textContent  = rating + ' (' + rev + ' reseñas)';
  document.getElementById('p-price').textContent = price;
  openModal('modal-profile');
}
function requestService() { closeModal('modal-profile'); openModal('modal-login'); }

/* ============================================================
   FILTRO DE SERVICIO
============================================================ */
function filterService(cat) {
  const term = cat.trim().toLowerCase();
  const cards = document.querySelectorAll('.pro-card');
  let match = null;

  // Buscar coincidencia exacta o parcial por categoría o nombre
  cards.forEach(card => {
    if (match) return;
    const c = card.dataset.cat || '';
    const n = card.dataset.name || '';
    if (c === term || n === term || c.includes(term) || term.includes(c) || n.includes(term)) {
      match = card;
    }
  });

  document.getElementById('profesionales').scrollIntoView({ behavior: 'smooth' });

  if (match) {
    // Llevar el slider a la página donde está la tarjeta
    const allCards = Array.from(document.querySelectorAll('.pros-track .pro-card'));
    const idx = allCards.indexOf(match);
    if (idx !== -1 && typeof window.prosGoTo === 'function') {
      const perView = window.innerWidth <= 600 ? 1 : (window.innerWidth <= 992 ? 2 : 4);
      window.prosGoTo(Math.floor(idx / perView));
    }
    setTimeout(() => {
      const btn = match.querySelector('.btn-ver');
      if (btn) btn.click();
    }, 450);
    showToast('🔍 Mostrando perfil de: ' + match.querySelector('strong').textContent);
  } else {
    showToast('🔍 Mostrando: ' + cat);
  }
}

/* ============================================================
   TOAST
============================================================ */
let toastT;
function showToast(msg) {
  const t = document.getElementById('toast');
  document.getElementById('toast-msg').textContent = msg;
  t.classList.add('show');
  clearTimeout(toastT);
  toastT = setTimeout(() => t.classList.remove('show'), 3200);
}

/* ============================================================
   SHAKE
============================================================ */
const shakeCSS = document.createElement('style');
shakeCSS.textContent = `@keyframes shake{0%,100%{transform:translateX(0)}20%{transform:translateX(-6px)}40%{transform:translateX(6px)}60%{transform:translateX(-4px)}80%{transform:translateX(4px)}}`;
document.head.appendChild(shakeCSS);
function shake(id) {
  const el = document.getElementById(id);
  el.style.animation = 'none'; el.offsetHeight;
  el.style.animation = 'shake .4s ease';
  el.style.borderColor = '#e53935';
  el.addEventListener('focus', () => el.style.borderColor = '', { once: true });
}

/* ============================================================
   BUSCADOR
============================================================ */
document.getElementById('nav-search').addEventListener('keydown', e => {
  if (e.key === 'Enter' && e.target.value.trim()) {
    filterService(e.target.value.trim()); e.target.value = '';
  }
});
