/* ═══════════════════════════════════════════════════════════════════
   Costa Burrito — main.js  v20260604b
   IIFE, no ES modules, classic defer
   ═══════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  /* ── Safe wrapper ─────────────────────────────────────────────── */
  function safe(fn, name) {
    try { fn(); } catch (e) { console.warn("[CB:" + name + "]", e); }
  }

  /* ══════════════════════════════════════════════════════════════
     TRADUCCIONES
     ══════════════════════════════════════════════════════════════ */
  var T = {
    es: {
      kicker:      "Health Fast Food · Empuriabrava",
      title1:      "GRAN",
      title2:      "INAUGURACIÓN",
      date:        "24 de Junio — Sant Joan",
      cd_days:     "Días",
      cd_hours:    "Horas",
      cd_mins:     "Min",
      cd_secs:     "Seg",
      hero_cta:    "Inscríbete · Consigue tu descuento",
      tape:        " INAUGURACIÓN · 24 JUNIO · SANT JOAN · EMPURIABRAVA · HEALTH FAST FOOD · COSTA BURRITO ·",
      marquee:     " INAUGURACIÓN · 24 JUNIO · SANT JOAN · EMPURIABRAVA · HEALTH FAST FOOD · COSTA BURRITO ·",
      reg_kicker:  "OFERTA EXCLUSIVA · INAUGURACIÓN",
      reg_title1:  "¡No seas",
      reg_title2:  "burro!",
      reg_sub:     "Inscríbete ahora y te guardamos un descuento exclusivo para la inauguración. Sé de los primeros en probar el mejor health fast food de la Costa Brava.",
      perk1:       "Descuento exclusivo en tu primera visita",
      perk2:       "24 de Junio — Platja L'Rubina",
      perk3:       "Viernes, Sábado y Domingo · 12:00–23:00",
      f_name:      "Nombre",
      ph_name:     "Tu nombre",
      f_phone:     "Teléfono",
      optional:    "(opcional)",
      btn_submit:  "QUIERO MI DESCUENTO",
      btn_ok:      "✓ ¡INSCRITO!",
      form_legal:  "Sin spam. Descuento válido presentando este email en la inauguración.",
      success_title: "¡Ya eres de los nuestros!",
      success_sub:   "Te hemos guardado el descuento.<br>Nos vemos el <strong>24 de Junio</strong> en Platja L'Rubina!",
      follow_ig:   "Síguenos en Instagram",
      where_title: "Dónde estamos",
      hours_title: "Horarios",
      hours_days:  "Viernes · Sábado · Domingo",
      hours_note:  "Abrimos cada fin de semana",
      follow_title:"Síguenos",
      maps_link:   "Ver en Google Maps →",
      info_heading:"Información del restaurante"
    },
    ca: {
      kicker:      "Health Fast Food · Empuriabrava",
      title1:      "GRAN",
      title2:      "INAUGURACIÓ",
      date:        "24 de Juny — Sant Joan",
      cd_days:     "Dies",
      cd_hours:    "Hores",
      cd_mins:     "Min",
      cd_secs:     "Seg",
      hero_cta:    "Inscriu-te · Aconsegueix el teu descompte",
      tape:        " INAUGURACIÓ · 24 JUNY · SANT JOAN · EMPURIABRAVA · HEALTH FAST FOOD · COSTA BURRITO ·",
      marquee:     " INAUGURACIÓ · 24 JUNY · SANT JOAN · EMPURIABRAVA · HEALTH FAST FOOD · COSTA BURRITO ·",
      reg_kicker:  "OFERTA EXCLUSIVA · INAUGURACIÓ",
      reg_title1:  "No siguis",
      reg_title2:  "ruc!",
      reg_sub:     "Inscriu-te ara i et guardem un descompte exclusiu per a la inauguració. Sigues dels primers a tastar el millor health fast food de la Costa Brava.",
      perk1:       "Descompte exclusiu en la teva primera visita",
      perk2:       "24 de Juny — Platja L'Rubina",
      perk3:       "Divendres, Dissabte i Diumenge · 12:00–23:00",
      f_name:      "Nom",
      ph_name:     "El teu nom",
      f_phone:     "Telèfon",
      optional:    "(opcional)",
      btn_submit:  "VULL EL MEU DESCOMPTE",
      btn_ok:      "✓ INSCRIT!",
      form_legal:  "Sense spam. Descompte vàlid presentant aquest email a la inauguració.",
      success_title: "Ja ets dels nostres!",
      success_sub:   "T'hem guardat el descompte.<br>Ens veiem el <strong>24 de Juny</strong> a Platja L'Rubina!",
      follow_ig:   "Segueix-nos a Instagram",
      where_title: "On som",
      hours_title: "Horaris",
      hours_days:  "Divendres · Dissabte · Diumenge",
      hours_note:  "Obrim cada cap de setmana",
      follow_title:"Segueix-nos",
      maps_link:   "Veure a Google Maps →",
      info_heading:"Informació del restaurant"
    },
    fr: {
      kicker:      "Health Fast Food · Empuriabrava",
      title1:      "GRANDE",
      title2:      "INAUGURATION",
      date:        "24 Juin — Sant Joan",
      cd_days:     "Jours",
      cd_hours:    "Heures",
      cd_mins:     "Min",
      cd_secs:     "Sec",
      hero_cta:    "Inscris-toi · Obtiens ta réduction",
      tape:        " INAUGURATION · 24 JUIN · SANT JOAN · EMPURIABRAVA · HEALTH FAST FOOD · COSTA BURRITO ·",
      marquee:     " INAUGURATION · 24 JUIN · SANT JOAN · EMPURIABRAVA · HEALTH FAST FOOD · COSTA BURRITO ·",
      reg_kicker:  "OFFRE EXCLUSIVE · INAUGURATION",
      reg_title1:  "Sois malin,",
      reg_title2:  "inscris-toi!",
      reg_sub:     "Inscris-toi maintenant et obtiens une réduction exclusive pour l'inauguration. Sois parmi les premiers à découvrir le meilleur health fast food de la Costa Brava.",
      perk1:       "Réduction exclusive à ta première visite",
      perk2:       "24 Juin — Platja L'Rubina",
      perk3:       "Vendredi, Samedi et Dimanche · 12h–23h",
      f_name:      "Prénom",
      ph_name:     "Ton prénom",
      f_phone:     "Téléphone",
      optional:    "(facultatif)",
      btn_submit:  "JE VEUX MA RÉDUCTION",
      btn_ok:      "✓ INSCRIT!",
      form_legal:  "Sans spam. Réduction valable en présentant cet email à l'inauguration.",
      success_title: "Tu fais partie des nôtres !",
      success_sub:   "On a gardé ta réduction.<br>Rendez-vous le <strong>24 Juin</strong> à Platja L'Rubina !",
      follow_ig:   "Suis-nous sur Instagram",
      where_title: "Où nous trouver",
      hours_title: "Horaires",
      hours_days:  "Vendredi · Samedi · Dimanche",
      hours_note:  "Ouvert chaque week-end",
      follow_title:"Suis-nous",
      maps_link:   "Voir sur Google Maps →",
      info_heading:"Infos du restaurant"
    }
  };

  var currentLang = "es";

  /* ── Aplicar traducciones ─────────────────────────────────────── */
  function applyLang(lang) {
    if (!T[lang]) return;
    currentLang = lang;
    var t = T[lang];

    /* Guardar en localStorage */
    try { localStorage.setItem("cb_lang", lang); } catch (_) {}

    /* html[lang] */
    document.documentElement.lang = lang;

    /* data-i18n elements */
    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) el.innerHTML = t[key];
    });

    /* Placeholders */
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (t[key] !== undefined) el.placeholder = t[key];
    });

    /* Tape (hero-tape) — misma cadena duplicada para loop perfecto */
    document.querySelectorAll("[data-i18n-tape]").forEach(function (el) {
      el.textContent = t.tape || "";
    });

    /* Marquee band — misma cadena duplicada */
    document.querySelectorAll("[data-i18n-marquee]").forEach(function (el) {
      el.textContent = t.marquee || "";
    });

    /* Botones de idioma */
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });

    /* Sincronizar campo hidden del formulario */
    var langField = document.getElementById("f-lang");
    if (langField) langField.value = lang;

    /* title del documento */
    var titles = {
      es: "Costa Burrito — Gran Inauguración · 24 de Junio · Empuriabrava",
      ca: "Costa Burrito — Gran Inauguració · 24 de Juny · Empuriabrava",
      fr: "Costa Burrito — Grande Inauguration · 24 Juin · Empuriabrava"
    };
    document.title = titles[lang] || document.title;
  }

  /* ── Selector de idioma ───────────────────────────────────────── */
  function initLang() {
    var saved = "es";
    try { saved = localStorage.getItem("cb_lang") || "es"; } catch (_) {}
    applyLang(saved);

    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
      });
    });
  }

  /* ── Countdown ────────────────────────────────────────────────── */
  function initCountdown() {
    var target = new Date("2026-06-24T12:00:00+02:00").getTime();
    var elDays  = document.getElementById("cd-days");
    var elHours = document.getElementById("cd-hours");
    var elMins  = document.getElementById("cd-mins");
    var elSecs  = document.getElementById("cd-secs");
    if (!elDays) return;

    function pad(n) { return String(n).padStart(2, "0"); }

    function tick() {
      var diff = target - Date.now();
      if (diff <= 0) {
        elDays.textContent = elHours.textContent = elMins.textContent = elSecs.textContent = "00";
        return;
      }
      elDays.textContent  = pad(Math.floor(diff / 86400000));
      elHours.textContent = pad(Math.floor((diff % 86400000) / 3600000));
      elMins.textContent  = pad(Math.floor((diff % 3600000) / 60000));
      elSecs.textContent  = pad(Math.floor((diff % 60000) / 1000));
    }
    tick();
    setInterval(tick, 1000);
  }

  /* ── Scroll reveals ───────────────────────────────────────────── */
  function initReveals() {
    var items = document.querySelectorAll(".reveal, .reveal-up");
    if (!items.length) return;

    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (!e.isIntersecting) return;
        var el = e.target;
        var delay = parseInt(el.dataset.delay || "0", 10);
        setTimeout(function () { el.classList.add("is-visible"); }, isNaN(delay) ? 0 : delay);
        io.unobserve(el);
      });
    }, { threshold: 0.04, rootMargin: "0px 0px -2% 0px" });

    items.forEach(function (el) { io.observe(el); });

    /* Safety net a los 5s */
    setTimeout(function () {
      document.querySelectorAll(".reveal:not(.is-visible), .reveal-up:not(.is-visible)").forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight + 100) {
          el.classList.add("is-visible");
        }
      });
    }, 5000);
  }

  /* ── Hero entrance stagger ────────────────────────────────────── */
  function initHeroEntrance() {
    document.querySelectorAll(".hero .reveal, .hero-top, .hero-bottom").forEach(function (el) {
      var delay = parseInt(el.dataset.delay || "0", 10);
      setTimeout(function () { el.classList.add("is-visible"); }, 200 + (isNaN(delay) ? 0 : delay));
    });
  }

  /* ── Formulario de registro ───────────────────────────────────── */
  function initForm() {
    var form    = document.getElementById("regForm");
    var btn     = document.getElementById("regBtn");
    var success = document.getElementById("regSuccess");
    var wrap    = document.querySelector(".reg-form-wrap");
    if (!form) return;

    /* Restaurar si ya se inscribió */
    var stored = null;
    try { stored = JSON.parse(localStorage.getItem("cb_registration")); } catch (_) {}
    if (stored && stored.email) { showSuccess(); return; }

    function getErr(field) {
      var ff = field.closest(".form-field");
      return ff ? ff.querySelector(".field-err") : null;
    }
    function setErr(field, msg) {
      var err = getErr(field);
      if (err) err.textContent = msg;
      field.setAttribute("aria-invalid", msg ? "true" : "false");
    }
    function validate() {
      var ok = true;
      var nameEl  = document.getElementById("f-name");
      var emailEl = document.getElementById("f-email");
      var t = T[currentLang] || T.es;
      setErr(nameEl, ""); setErr(emailEl, "");
      if (!nameEl.value.trim()) { setErr(nameEl, t.f_name + " es obligatorio."); ok = false; }
      if (!emailEl.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) {
        setErr(emailEl, "Email no válido."); ok = false;
      }
      return ok;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validate()) return;

      /* Actualizar campo idioma antes de enviar */
      var langField = document.getElementById("f-lang");
      if (langField) langField.value = currentLang;

      btn.disabled = true;

      /* Guardar localmente siempre */
      var regData = {
        name:  document.getElementById("f-name").value.trim(),
        email: document.getElementById("f-email").value.trim(),
        phone: (document.getElementById("f-phone") || {}).value || "",
        lang:  currentLang,
        ts:    Date.now()
      };
      try { localStorage.setItem("cb_registration", JSON.stringify(regData)); } catch (_) {}

      /* Enviar a Web3Forms si la access_key está configurada */
      var keyInput = form.querySelector('[name="access_key"]');
      var hasRealKey = keyInput && keyInput.value && keyInput.value !== "YOUR_ACCESS_KEY";

      if (hasRealKey) {
        var formData = new FormData(form);
        fetch("https://api.web3forms.com/submit", {
          method: "POST",
          body: formData
        })
        .then(function (res) { return res.json(); })
        .then(function () {
          btn.classList.add("is-success");
          setTimeout(showSuccess, 500);
        })
        .catch(function () {
          /* Si falla el envío, mostrar éxito igualmente (ya está guardado local) */
          btn.classList.add("is-success");
          setTimeout(showSuccess, 500);
        });
      } else {
        /* Sin clave configurada: solo localStorage */
        btn.classList.add("is-success");
        setTimeout(showSuccess, 700);
      }
    });

    function showSuccess() {
      if (form) form.hidden = true;
      if (success) {
        success.hidden = false;
        /* Re-aplicar traducción al success si ya tiene lang */
        var t = T[currentLang] || T.es;
        var titleEl = success.querySelector("[data-i18n='success_title']");
        var subEl   = success.querySelector("[data-i18n='success_sub']");
        if (titleEl) titleEl.innerHTML = t.success_title;
        if (subEl)   subEl.innerHTML   = t.success_sub;
      }
      if (wrap) wrap.style.background = "rgba(26,35,126,0.12)";
      setTimeout(function () {
        if (success) success.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 100);
    }
  }

  /* ── Smooth anchor scroll ─────────────────────────────────────── */
  function initSmoothScroll() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      var reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({
        top: el.getBoundingClientRect().top + window.scrollY - 80,
        behavior: reduced ? "auto" : "smooth"
      });
    });
  }

  /* ── Overlay del mapa — se desvanece tras 2.5s ───────────────── */
  function initMapOverlay() {
    var overlay = document.getElementById("mapOverlay");
    var iframe  = document.getElementById("mapIframe");
    if (!overlay) return;

    function hideOverlay() {
      overlay.classList.add("is-hidden");
    }

    /* Opción 1: cuando el iframe carga */
    if (iframe) {
      iframe.addEventListener("load", function () {
        setTimeout(hideOverlay, 800);
      });
    }

    /* Opción 2 (fallback): siempre a los 2.5s */
    setTimeout(hideOverlay, 2500);
  }

  /* ── Boot ─────────────────────────────────────────────────────── */
  function boot() {
    safe(initLang,         "initLang");
    safe(initCountdown,    "initCountdown");
    safe(initHeroEntrance, "initHeroEntrance");
    safe(initReveals,      "initReveals");
    safe(initForm,         "initForm");
    safe(initSmoothScroll, "initSmoothScroll");
    safe(initMapOverlay,   "initMapOverlay");
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

})();
