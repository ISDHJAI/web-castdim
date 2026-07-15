/* ============================================================
   CASTDIM — main.js
   Header/footer compartidos, animaciones y WhatsApp
   ============================================================ */

/* ------------------------------------------------------------
   CONFIGURACIÓN — cambia aquí el número de WhatsApp (con 52)
   ------------------------------------------------------------ */
const CASTDIM = {
  whatsapp: "524441308013",          // ← número por definir: edita solo esta línea
  phone: "444 112 4011",
  phoneHref: "tel:+524441124011",
  email: "contactoventas@castdim.mx",
  address: "Blvd. San Antonio #230, Villa de Pozos, C.P. 78421, San Luis Potosí, S.L.P.",
  facebook: "https://www.facebook.com/castdim",
  instagram: "https://www.instagram.com/castdim",
  defaultMsg: "Hola CASTDIM, me gustaría recibir más información."
};

function waLink(msg) {
  return "https://wa.me/" + CASTDIM.whatsapp + "?text=" + encodeURIComponent(msg || CASTDIM.defaultMsg);
}

const WA_ICON = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.87 9.87 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2zm0 18.15h-.01a8.2 8.2 0 0 1-4.18-1.15l-.3-.18-3.12.82.83-3.04-.2-.31a8.26 8.26 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24 2.2 0 4.27.86 5.82 2.42a8.18 8.18 0 0 1 2.41 5.83c0 4.54-3.7 8.23-8.23 8.23zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.17.25-.64.8-.78.97-.14.17-.29.19-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.02-.38.11-.51.11-.11.25-.29.37-.43.12-.14.17-.25.25-.41.08-.17.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31-.22.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.56.12.17 1.75 2.67 4.23 3.74.59.26 1.05.41 1.41.52.59.19 1.13.16 1.56.1.48-.07 1.47-.6 1.67-1.18.21-.58.21-1.07.15-1.18-.06-.11-.22-.17-.47-.29z"/></svg>';

/* ------------------------------------------------------------
   Header + footer compartidos
   ------------------------------------------------------------ */
function buildHeader() {
  const page = document.body.dataset.page || "";
  const overlay = document.body.dataset.nav === "overlay" ? " nav--overlay" : " nav--solid nav--always";
  const active = (p) => (p === page ? " is-active" : "");
  return `
  <header class="nav${overlay}" id="mainNav">
    <div class="nav__inner">
      <a class="nav__logo" href="index.html" aria-label="CASTDIM inicio">
        <img src="img/castdim-logo.png" alt="CASTDIM">
      </a>
      <nav>
        <ul class="nav__links" id="navLinks">
          <li class="nav__menu-extra nav__menu-msg-wrap"><span class="nav__menu-msg">Tu nueva casa te espera</span></li>
          <li class="nav__menu-extra nav__menu-icon-wrap"><img class="nav__menu-icon" src="img/castdim-icon.png" alt="CASTDIM"></li>
          <li><a class="nav__link${active("inicio")}" href="index.html">Inicio</a></li>
          <li><a class="nav__link${active("casas")}" href="casas.html">Casas</a></li>
          <li>
            <a class="nav__link${active("desarrollos")}" href="desarrollos-pozos.html">Desarrollos ▾</a>
            <div class="nav__drop">
              <a href="desarrollos-pozos.html">Villa de Pozos</a>
              <a href="desarrollos-soledad.html">Soledad</a>
            </div>
          </li>
          <li><a class="nav__link${active("casa-especial")}" href="casa-especial.html">Casa Especial</a></li>
          <li><a class="nav__link${active("empresas")}" href="empresas.html">Empresas</a></li>
          <li><a class="nav__link${active("lotes")}" href="lotes-comerciales.html">Lotes Comerciales</a></li>
          <li><a class="nav__link${active("contacto")}" href="contacto.html">Contacto</a></li>
        </ul>
      </nav>
      <div class="nav__cta">
        <a class="btn btn--wa" href="${waLink()}" target="_blank" rel="noopener">${WA_ICON} WhatsApp</a>
      </div>
      <button class="nav__burger" id="navBurger" aria-label="Abrir menú">
        <span></span><span></span><span></span>
      </button>
    </div>
  </header>`;
}

function buildFooter() {
  return `
  <footer class="footer">
    <div class="container">
      <div class="footer__grid">
        <div class="footer__brand">
          <img src="img/castdim-logo.png" alt="CASTDIM">
          <p>Sueños hechos propiedad. Desde 2009 construimos vivienda premium, plazas comerciales y proyectos industriales en San Luis Potosí.</p>
        </div>
        <div>
          <h4>Explora</h4>
          <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="casas.html">Casas</a></li>
            <li><a href="casa-especial.html">Casa Especial</a></li>
            <li><a href="empresas.html">Empresas</a></li>
            <li><a href="lotes-comerciales.html">Lotes Comerciales</a></li>
          </ul>
        </div>
        <div>
          <h4>Desarrollos</h4>
          <ul>
            <li><a href="desarrollos-pozos.html">Villa de Pozos</a></li>
            <li><a href="desarrollos-soledad.html">Soledad</a></li>
            <li><a href="contacto.html">Contacto</a></li>
          </ul>
        </div>
        <div>
          <h4>Contacto</h4>
          <ul class="footer__contact">
            <li><svg viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.02-.24c1.12.37 2.33.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1C10.61 21 3 13.39 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z"/></svg><a href="${CASTDIM.phoneHref}">${CASTDIM.phone}</a></li>
            <li><svg viewBox="0 0 24 24"><path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z"/></svg><a href="mailto:${CASTDIM.email}">${CASTDIM.email}</a></li>
            <li><svg viewBox="0 0 24 24"><path d="M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z"/></svg><span>${CASTDIM.address}</span></li>
          </ul>
        </div>
      </div>
      <div class="footer__bottom">
        <span>© <span id="year"></span> CASTDIM · Constructora y Desarrolladora · San Luis Potosí, México</span>
        <div class="footer__social">
          <a href="${CASTDIM.facebook}" target="_blank" rel="noopener" aria-label="Facebook"><svg viewBox="0 0 24 24"><path d="M13 22v-8h3l1-4h-4V7.5A1.5 1.5 0 0 1 14.5 6H17V2h-3a5 5 0 0 0-5 5v3H6v4h3v8h4z"/></svg></a>
          <a href="${CASTDIM.instagram}" target="_blank" rel="noopener" aria-label="Instagram"><svg viewBox="0 0 24 24"><path d="M12 2c2.72 0 3.06.01 4.12.06 1.06.05 1.79.22 2.43.46.66.26 1.22.6 1.77 1.16.56.55.9 1.11 1.16 1.77.24.64.41 1.37.46 2.43.05 1.06.06 1.4.06 4.12s-.01 3.06-.06 4.12c-.05 1.06-.22 1.79-.46 2.43a4.9 4.9 0 0 1-1.16 1.77c-.55.56-1.11.9-1.77 1.16-.64.24-1.37.41-2.43.46-1.06.05-1.4.06-4.12.06s-3.06-.01-4.12-.06c-1.06-.05-1.79-.22-2.43-.46a4.9 4.9 0 0 1-1.77-1.16 4.9 4.9 0 0 1-1.16-1.77c-.24-.64-.41-1.37-.46-2.43C2.01 15.06 2 14.72 2 12s.01-3.06.06-4.12c.05-1.06.22-1.79.46-2.43.26-.66.6-1.22 1.16-1.77.55-.56 1.11-.9 1.77-1.16.64-.24 1.37-.41 2.43-.46C8.94 2.01 9.28 2 12 2zm0 1.8c-2.67 0-2.99.01-4.04.06-.98.04-1.5.2-1.86.34-.46.18-.8.4-1.15.75-.35.35-.57.69-.75 1.15-.14.35-.3.88-.34 1.86-.05 1.05-.06 1.37-.06 4.04s.01 2.99.06 4.04c.04.98.2 1.5.34 1.86.18.46.4.8.75 1.15.35.35.69.57 1.15.75.35.14.88.3 1.86.34 1.05.05 1.37.06 4.04.06s2.99-.01 4.04-.06c.98-.04 1.5-.2 1.86-.34.46-.18.8-.4 1.15-.75.35-.35.57-.69.75-1.15.14-.35.3-.88.34-1.86.05-1.05.06-1.37.06-4.04s-.01-2.99-.06-4.04c-.04-.98-.2-1.5-.34-1.86a3.1 3.1 0 0 0-.75-1.15 3.1 3.1 0 0 0-1.15-.75c-.35-.14-.88-.3-1.86-.34-1.05-.05-1.37-.06-4.04-.06zm0 3.06a5.14 5.14 0 1 1 0 10.28 5.14 5.14 0 0 1 0-10.28zm0 8.48a3.34 3.34 0 1 0 0-6.68 3.34 3.34 0 0 0 0 6.68zm6.54-8.69a1.2 1.2 0 1 1-2.4 0 1.2 1.2 0 0 1 2.4 0z"/></svg></a>
        </div>
      </div>
    </div>
  </footer>
  <a class="wa-float" href="${waLink()}" target="_blank" rel="noopener" aria-label="Escríbenos por WhatsApp">${WA_ICON}</a>`;
}

/* ------------------------------------------------------------
   Inicialización
   ------------------------------------------------------------ */
document.addEventListener("DOMContentLoaded", () => {
  const headerMount = document.getElementById("site-header");
  const footerMount = document.getElementById("site-footer");
  if (headerMount) headerMount.outerHTML = buildHeader();
  if (footerMount) footerMount.outerHTML = buildFooter();

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  /* enlaces de WhatsApp con mensaje personalizado: <a data-wa="mensaje"> */
  document.querySelectorAll("[data-wa]").forEach((el) => {
    el.setAttribute("href", waLink(el.dataset.wa));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });

  /* nav: fondo sólido al hacer scroll */
  const nav = document.getElementById("mainNav");
  const onScroll = () => {
    if (!nav || nav.classList.contains("nav--always")) return;
    nav.classList.toggle("nav--solid", window.scrollY > 40);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  /* menú móvil */
  const burger = document.getElementById("navBurger");
  if (burger) {
    burger.addEventListener("click", () => document.body.classList.toggle("menu-open"));
    document.querySelectorAll("#navLinks a").forEach((a) =>
      a.addEventListener("click", () => document.body.classList.remove("menu-open"))
    );
  }

  /* animaciones al hacer scroll */
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          e.target.classList.add("is-visible");
          io.unobserve(e.target);
        }
      });
    },
    { threshold: 0.14 }
  );
  document.querySelectorAll(".reveal").forEach((el) => io.observe(el));

  /* contadores animados */
  const animateCount = (el) => {
    const target = parseInt(el.dataset.count, 10);
    const dur = 1800;
    const start = performance.now();
    const tick = (now) => {
      const p = Math.min((now - start) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      el.firstChild.textContent = Math.round(target * eased).toLocaleString("es-MX");
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };
  const ioCount = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          animateCount(e.target);
          ioCount.unobserve(e.target);
        }
      });
    },
    { threshold: 0.5 }
  );
  document.querySelectorAll("[data-count]").forEach((el) => ioCount.observe(el));

  /* respaldo para imágenes que no carguen */
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("error", () => img.classList.add("img-fallback"), { once: true });
  });

  /* formulario de contacto → abre WhatsApp con el mensaje armado */
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const d = new FormData(form);
      const msg =
        "Hola CASTDIM, soy " + d.get("nombre") +
        ".\nInterés: " + d.get("interes") +
        "\nTeléfono: " + d.get("telefono") +
        "\nMensaje: " + d.get("mensaje");
      window.open(waLink(msg), "_blank");
    });
  }
});
