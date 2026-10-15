const revealObserver = new IntersectionObserver((entries) => entries.forEach(({ isIntersecting, target }) => { if (isIntersecting) { target.classList.add('visible'); revealObserver.unobserve(target); } }), { threshold: .14 });
document.querySelectorAll('.reveal').forEach((element) => revealObserver.observe(element));

const menuButton = document.querySelector('.menu-button');
const menu = document.querySelector('.nav-links');
menuButton.addEventListener('click', () => { const open = menu.classList.toggle('open'); menuButton.setAttribute('aria-expanded', open); menuButton.querySelector('span').textContent = open ? '−' : '+'; });
menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { menu.classList.remove('open'); menuButton.setAttribute('aria-expanded', 'false'); menuButton.querySelector('span').textContent = '+'; }));

const panel = document.querySelector('#previewPanel');
const preview = document.querySelector('#previewText');
const input = document.querySelector('#idea');
const themes = { mint: ['#55c8c0', '#ff6c6c'], coral: ['#ff8b78', '#245d68'], night: ['#435d7a', '#ffe67d'] };
document.querySelectorAll('.choice').forEach((button) => button.addEventListener('click', () => { document.querySelector('.choice.active').classList.remove('active'); button.classList.add('active'); const [background, shadow] = themes[button.dataset.theme]; panel.style.background = background; panel.querySelector('.preview-sticker').style.boxShadow = `8px 8px 0 ${shadow}`; }));
document.querySelector('#makeButton').addEventListener('click', () => { const phrase = input.value.trim() || 'tu idea aquí'; preview.textContent = phrase; preview.parentElement.animate([{ transform:'rotate(-5deg) scale(.8)' }, { transform:'rotate(3deg) scale(1.1)' }, { transform:'rotate(-5deg) scale(1)' }], { duration:520, easing:'cubic-bezier(.2,.8,.2,1)' }); });
document.addEventListener('pointermove', (event) => { document.querySelector('.cursor-glow').style.left = `${event.clientX}px`; document.querySelector('.cursor-glow').style.top = `${event.clientY}px`; });
