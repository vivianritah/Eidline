/* ── EID Printers · shared.js ── */

const WA_NUM  = '256700000000';
const WA_BASE = `https://wa.me/${WA_NUM}`;

const PAGES = [
  { href:'index.html',    label:'Home'     },
  { href:'products.html', label:'Products' },
  { href:'about.html',    label:'About'    },
  { href:'gallery.html',  label:'Gallery'  },
  { href:'contact.html',  label:'Contact'  },
];

function currentPage() {
  return window.location.pathname.split('/').pop() || 'index.html';
}

/* ══ NAV ══ */
function buildNav() {
  const cur = currentPage();
  const linksHtml = PAGES.map(p =>
    `<li><a href="${p.href}" class="${cur===p.href?'active':''}">${p.label}</a></li>`
  ).join('');

  const nav = document.createElement('nav');
  nav.className = 'nav';
  nav.id = 'mainNav';
  nav.innerHTML = `
    <a href="index.html" class="logo">
      <div class="logo-mark">🖨</div>
      <div class="logo-name"><span>EID</span> PRINTERS</div>
    </a>
    <ul class="nav-links">${linksHtml}
      <li><a href="${WA_BASE}?text=${encodeURIComponent("Hello EID Printers! I'd like to make an inquiry.")}"
             target="_blank" class="nav-cta">
        ${svgWA(14)} WhatsApp Us
      </a></li>
    </ul>
    <div class="burger" id="burgerBtn">
      <span></span><span></span><span></span>
    </div>
  `;

  const mob = document.createElement('div');
  mob.className = 'mob-menu'; mob.id = 'mobMenu';
  mob.innerHTML = PAGES.map(p=>`<a href="${p.href}">${p.label}</a>`).join('')
    + `<a href="${WA_BASE}" target="_blank">📱 WhatsApp Us</a>`;

  document.body.prepend(mob);
  document.body.prepend(nav);

  document.getElementById('burgerBtn').addEventListener('click', () => {
    document.getElementById('mobMenu').classList.toggle('open');
  });

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive:true });
}

/* ══ FOOTER ══ */
function buildFooter() {
  const f = document.createElement('footer');
  f.innerHTML = `
    <div class="foot-grid">
      <div>
        <div class="foot-logo"><span>EID</span> PRINTERS</div>
        <p class="foot-desc">Kampala's most trusted specialist for printers, scanners, cartridge refills, cables, and expert maintenance services.</p>
      </div>
      <div class="foot-col">
        <h5>Products</h5>
        <a href="products.html">Printers</a>
        <a href="products.html">Scanners</a>
        <a href="products.html">Cartridge Refilling</a>
        <a href="products.html">Printer Cables</a>
        <a href="products.html">Maintenance</a>
      </div>
      <div class="foot-col">
        <h5>Company</h5>
        <a href="about.html">About Us</a>
        <a href="gallery.html">Gallery</a>
        <a href="contact.html">Contact</a>
        <a href="${WA_BASE}" target="_blank">WhatsApp</a>
      </div>
      <div class="foot-col">
        <h5>Contact</h5>
        <p>📍 Kampala, Uganda</p>
        <p><a href="tel:+256700000000" style="color:var(--orange);text-decoration:none">+256 700 000 000</a></p>
        <p><a href="mailto:info@eidprinters.co.ug" style="color:inherit;text-decoration:none">info@eidprinters.co.ug</a></p>
        <p>Mon–Sat · 8am – 6pm</p>
      </div>
    </div>
    <div class="foot-bottom">
      <p>© ${new Date().getFullYear()} EID Printers · All rights reserved</p>
      <p>Kampala, Uganda <span>◆</span> Built for performance</p>
    </div>
  `;
  document.body.appendChild(f);
}

/* ══ WA FLOAT ══ */
function buildWAFloat() {
  const a = document.createElement('a');
  a.className='wa-float'; a.href=`${WA_BASE}?text=${encodeURIComponent("Hello EID Printers!")}`;
  a.target='_blank'; a.title='Chat on WhatsApp';
  a.innerHTML=`<svg viewBox="0 0 24 24">${WA_PATH}</svg>`;
  document.body.appendChild(a);
}

/* ══ REVEAL ══ */
function initReveal() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const d = +(e.target.dataset.delay||0)*80;
        setTimeout(()=>e.target.classList.add('vis'), d);
        obs.unobserve(e.target);
      }
    });
  }, { threshold:0.1 });
  document.querySelectorAll('.reveal').forEach(el=>obs.observe(el));
}

/* ══ CURSOR ══ */
function initCursor() {
  if (window.innerWidth < 900) return;
  const dot  = document.createElement('div'); dot.className='cursor';
  const ring = document.createElement('div'); ring.className='cursor-ring';
  document.body.append(dot, ring);
  let mx=0,my=0,rx=0,ry=0;
  document.addEventListener('mousemove', e=>{ mx=e.clientX; my=e.clientY; dot.style.left=mx+'px'; dot.style.top=my+'px'; });
  (function loop(){ rx+=(mx-rx)*0.12; ry+=(my-ry)*0.12; ring.style.left=rx+'px'; ring.style.top=ry+'px'; requestAnimationFrame(loop); })();
}

/* ══ SVG helpers ══ */
const WA_PATH = `<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>`;

function svgWA(size=16) {
  return `<svg width="${size}" height="${size}" fill="currentColor" viewBox="0 0 24 24">${WA_PATH}</svg>`;
}

/* ══ INIT ══ */
document.addEventListener('DOMContentLoaded', () => {
  buildNav();
  buildFooter();
  buildWAFloat();
  initCursor();
  setTimeout(initReveal, 120);
});