/* ═══════════════════════════════════════════════════════════════════
   Costa Burrito — main.js  v20260605
   IIFE, no ES modules, classic defer
   ═══════════════════════════════════════════════════════════════════ */
(function () {
  "use strict";

  function safe(fn, name) {
    try { fn(); } catch (e) { console.warn("[CB:" + name + "]", e); }
  }

  function setupMarquee() {
    var track = document.querySelector(".marquee-track");
    if (!track) return;

    /* Remove previous clones */
    track.querySelectorAll(".marquee-clone").forEach(function (el) { el.remove(); });

    var originals = Array.from(track.querySelectorAll(".marquee-item"));
    if (!originals.length) return;

    /* Clone originals so the loop has content to fill the viewport */
    originals.forEach(function (item) {
      var clone = item.cloneNode(true);
      clone.classList.add("marquee-clone");
      clone.removeAttribute("data-i18n-marquee");
      track.appendChild(clone);
    });

    /* Measure after paint and set exact pixel shift */
    requestAnimationFrame(function () {
      var origWidth = originals.reduce(function (acc, el) { return acc + el.offsetWidth; }, 0);
      /* Ensure we always have at least 2× viewport width before the loop point */
      var vw = window.innerWidth;
      var copies = Math.ceil((vw * 2) / origWidth) + 1;
      /* If we need more clones, add them */
      while (copies > 2) {
        originals.forEach(function (item) {
          var clone = item.cloneNode(true);
          clone.classList.add("marquee-clone");
          clone.removeAttribute("data-i18n-marquee");
          track.appendChild(clone);
        });
        copies--;
      }
      /* Recalculate total originals width (1 set) */
      track.style.setProperty("--marquee-shift", "-" + origWidth + "px");
      /* Restart animation cleanly */
      track.style.animation = "none";
      track.offsetWidth; /* reflow */
      track.style.animation = "";
    });
  }

  /* ══════════════════════════════════════════════════════════════
     TRADUCCIONES
     ══════════════════════════════════════════════════════════════ */
  var T = {
    es: {
      open_title:"¡YA ESTAMOS AQUÍ!", open_sub:"Ven a visitarnos · Platja L'Rubina",
      kicker:"Health Fast Food · Empuriabrava", title1:"GRAN", title2:"INAUGURACIÓN",
      date:"24 de Junio — Sant Joan", cd_days:"Días", cd_hours:"Horas", cd_mins:"Min", cd_secs:"Seg",
      hero_cta:"Inscríbete · Consigue tu descuento",
      tape:" INAUGURACIÓN · 24 JUNIO · SANT JOAN · EMPURIABRAVA · HEALTH FAST FOOD · COSTA BURRITO ·",
      marquee:" INAUGURACIÓN · 24 JUNIO · SANT JOAN · EMPURIABRAVA · HEALTH FAST FOOD · COSTA BURRITO ·",
      reg_kicker:"OFERTA EXCLUSIVA · INAUGURACIÓN", reg_title1:"¡No seas", reg_title2:"burro!",
      reg_sub:"Inscríbete ahora y te guardamos un descuento exclusivo para la inauguración. Sé de los primeros en probar el mejor health fast food de la Costa Brava.",
      perk1:"Descuento exclusivo en tu primera visita", perk2:"24 de Junio — Platja L'Rubina",
      perk3:"Viernes, Sábado y Domingo · 12:00–23:00",
      f_name:"Nombre", ph_name:"Tu nombre", f_phone:"Teléfono", optional:"(opcional)",
      btn_submit:"QUIERO MI DESCUENTO", btn_ok:"✓ ¡INSCRITO!",
      form_legal:"Sin spam. Descuento válido presentando este email en la inauguración.",
      success_title:"¡Ya eres de los nuestros!", success_sub:"Te hemos guardado el descuento.<br>Nos vemos el <strong>24 de Junio</strong> en Platja L'Rubina!",
      follow_ig:"Síguenos en Instagram", where_title:"Dónde estamos", hours_title:"Horarios",
      hours_days:"Viernes · Sábado · Domingo", hours_note:"Abrimos cada fin de semana",
      follow_title:"Síguenos", maps_link:"Ver en Google Maps →", info_heading:"Información del restaurante"
    },
    ca: {
      open_title:"JA SOM AQUÍ!", open_sub:"Vine a visitar-nos · Platja L'Rubina",
      kicker:"Health Fast Food · Empuriabrava", title1:"GRAN", title2:"INAUGURACIÓ",
      date:"24 de Juny — Sant Joan", cd_days:"Dies", cd_hours:"Hores", cd_mins:"Min", cd_secs:"Seg",
      hero_cta:"Inscriu-te · Aconsegueix el teu descompte",
      tape:" INAUGURACIÓ · 24 JUNY · SANT JOAN · EMPURIABRAVA · HEALTH FAST FOOD · COSTA BURRITO ·",
      marquee:" INAUGURACIÓ · 24 JUNY · SANT JOAN · EMPURIABRAVA · HEALTH FAST FOOD · COSTA BURRITO ·",
      reg_kicker:"OFERTA EXCLUSIVA · INAUGURACIÓ", reg_title1:"No siguis", reg_title2:"ruc!",
      reg_sub:"Inscriu-te ara i et guardem un descompte exclusiu per a la inauguració. Sigues dels primers a tastar el millor health fast food de la Costa Brava.",
      perk1:"Descompte exclusiu en la teva primera visita", perk2:"24 de Juny — Platja L'Rubina",
      perk3:"Divendres, Dissabte i Diumenge · 12:00–23:00",
      f_name:"Nom", ph_name:"El teu nom", f_phone:"Telèfon", optional:"(opcional)",
      btn_submit:"VULL EL MEU DESCOMPTE", btn_ok:"✓ INSCRIT!",
      form_legal:"Sense spam. Descompte vàlid presentant aquest email a la inauguració.",
      success_title:"Ja ets dels nostres!", success_sub:"T'hem guardat el descompte.<br>Ens veiem el <strong>24 de Juny</strong> a Platja L'Rubina!",
      follow_ig:"Segueix-nos a Instagram", where_title:"On som", hours_title:"Horaris",
      hours_days:"Divendres · Dissabte · Diumenge", hours_note:"Obrim cada cap de setmana",
      follow_title:"Segueix-nos", maps_link:"Veure a Google Maps →", info_heading:"Informació del restaurant"
    },
    fr: {
      open_title:"ON EST LÀ!", open_sub:"Venez nous rendre visite · Platja L'Rubina",
      kicker:"Health Fast Food · Empuriabrava", title1:"GRANDE", title2:"INAUGURATION",
      date:"24 Juin — Sant Joan", cd_days:"Jours", cd_hours:"Heures", cd_mins:"Min", cd_secs:"Sec",
      hero_cta:"Inscris-toi · Obtiens ta réduction",
      tape:" INAUGURATION · 24 JUIN · SANT JOAN · EMPURIABRAVA · HEALTH FAST FOOD · COSTA BURRITO ·",
      marquee:" INAUGURATION · 24 JUIN · SANT JOAN · EMPURIABRAVA · HEALTH FAST FOOD · COSTA BURRITO ·",
      reg_kicker:"OFFRE EXCLUSIVE · INAUGURATION", reg_title1:"Sois malin,", reg_title2:"inscris-toi!",
      reg_sub:"Inscris-toi maintenant et obtiens une réduction exclusive pour l'inauguration. Sois parmi les premiers à découvrir le meilleur health fast food de la Costa Brava.",
      perk1:"Réduction exclusive à ta première visite", perk2:"24 Juin — Platja L'Rubina",
      perk3:"Vendredi, Samedi et Dimanche · 12h–23h",
      f_name:"Prénom", ph_name:"Ton prénom", f_phone:"Téléphone", optional:"(facultatif)",
      btn_submit:"JE VEUX MA RÉDUCTION", btn_ok:"✓ INSCRIT!",
      form_legal:"Sans spam. Réduction valable en présentant cet email à l'inauguration.",
      success_title:"Tu fais partie des nôtres!", success_sub:"On a gardé ta réduction.<br>Rendez-vous le <strong>24 Juin</strong> à Platja L'Rubina!",
      follow_ig:"Suis-nous sur Instagram", where_title:"Où nous trouver", hours_title:"Horaires",
      hours_days:"Vendredi · Samedi · Dimanche", hours_note:"Ouvert chaque week-end",
      follow_title:"Suis-nous", maps_link:"Voir sur Google Maps →", info_heading:"Infos du restaurant"
    },
    en: {
      open_title:"WE'RE OPEN!", open_sub:"Come visit us · Platja L'Rubina",
      kicker:"Health Fast Food · Empuriabrava", title1:"GRAND", title2:"OPENING",
      date:"June 24th — Sant Joan", cd_days:"Days", cd_hours:"Hours", cd_mins:"Min", cd_secs:"Sec",
      hero_cta:"Sign up · Get your discount",
      tape:" GRAND OPENING · JUNE 24 · SANT JOAN · EMPURIABRAVA · HEALTH FAST FOOD · COSTA BURRITO ·",
      marquee:" GRAND OPENING · JUNE 24 · SANT JOAN · EMPURIABRAVA · HEALTH FAST FOOD · COSTA BURRITO ·",
      reg_kicker:"EXCLUSIVE OFFER · OPENING", reg_title1:"Don't be a", reg_title2:"donkey!",
      reg_sub:"Sign up now and get an exclusive discount for our grand opening. Be among the first to try the best health fast food on the Costa Brava.",
      perk1:"Exclusive discount on your first visit", perk2:"June 24th — Platja L'Rubina",
      perk3:"Friday, Saturday & Sunday · 12:00–23:00",
      f_name:"Name", ph_name:"Your name", f_phone:"Phone", optional:"(optional)",
      btn_submit:"GET MY DISCOUNT", btn_ok:"✓ SIGNED UP!",
      form_legal:"No spam. Discount valid showing this email at the opening.",
      success_title:"You're one of us!", success_sub:"We've saved your discount.<br>See you on <strong>June 24th</strong> at Platja L'Rubina!",
      follow_ig:"Follow us on Instagram", where_title:"Where we are", hours_title:"Opening hours",
      hours_days:"Friday · Saturday · Sunday", hours_note:"Open every weekend",
      follow_title:"Follow us", maps_link:"View on Google Maps →", info_heading:"Restaurant info"
    },
    de: {
      kicker:"Health Fast Food · Empuriabrava", title1:"GROSSE", title2:"ERÖFFNUNG",
      date:"24. Juni — Sant Joan", cd_days:"Tage", cd_hours:"Stunden", cd_mins:"Min", cd_secs:"Sek",
      hero_cta:"Anmelden · Rabatt sichern",
      tape:" ERÖFFNUNG · 24 JUNI · SANT JOAN · EMPURIABRAVA · HEALTH FAST FOOD · COSTA BURRITO ·",
      marquee:" ERÖFFNUNG · 24 JUNI · SANT JOAN · EMPURIABRAVA · HEALTH FAST FOOD · COSTA BURRITO ·",
      reg_kicker:"EXKLUSIVES ANGEBOT · ERÖFFNUNG", reg_title1:"Sei kein", reg_title2:"Esel!",
      reg_sub:"Melde dich jetzt an und sichere dir einen exklusiven Rabatt zur Eröffnung. Sei einer der Ersten, die das beste Health Fast Food an der Costa Brava probieren.",
      perk1:"Exklusiver Rabatt bei deinem ersten Besuch", perk2:"24. Juni — Platja L'Rubina",
      perk3:"Freitag, Samstag & Sonntag · 12:00–23:00",
      f_name:"Name", ph_name:"Dein Name", f_phone:"Telefon", optional:"(optional)",
      btn_submit:"MEINEN RABATT SICHERN", btn_ok:"✓ ANGEMELDET!",
      form_legal:"Kein Spam. Rabatt gültig bei Vorzeigen dieser E-Mail bei der Eröffnung.",
      success_title:"Du bist dabei!", success_sub:"Wir haben deinen Rabatt gespeichert.<br>Bis zum <strong>24. Juni</strong> in Platja L'Rubina!",
      follow_ig:"Auf Instagram folgen", where_title:"Wo wir sind", hours_title:"Öffnungszeiten",
      hours_days:"Freitag · Samstag · Sonntag", hours_note:"Jedes Wochenende geöffnet",
      follow_title:"Folge uns", maps_link:"Auf Google Maps ansehen →", info_heading:"Restaurant-Info"
    },
    it: {
      kicker:"Health Fast Food · Empuriabrava", title1:"GRANDE", title2:"INAUGURAZIONE",
      date:"24 Giugno — Sant Joan", cd_days:"Giorni", cd_hours:"Ore", cd_mins:"Min", cd_secs:"Sec",
      hero_cta:"Iscriviti · Ottieni il tuo sconto",
      tape:" INAUGURAZIONE · 24 GIUGNO · SANT JOAN · EMPURIABRAVA · HEALTH FAST FOOD · COSTA BURRITO ·",
      marquee:" INAUGURAZIONE · 24 GIUGNO · SANT JOAN · EMPURIABRAVA · HEALTH FAST FOOD · COSTA BURRITO ·",
      reg_kicker:"OFFERTA ESCLUSIVA · INAUGURAZIONE", reg_title1:"Non fare lo", reg_title2:"stupido!",
      reg_sub:"Iscriviti ora e ti riserviamo uno sconto esclusivo per l'inaugurazione. Sii tra i primi a provare il miglior health fast food della Costa Brava.",
      perk1:"Sconto esclusivo alla tua prima visita", perk2:"24 Giugno — Platja L'Rubina",
      perk3:"Venerdì, Sabato e Domenica · 12:00–23:00",
      f_name:"Nome", ph_name:"Il tuo nome", f_phone:"Telefono", optional:"(opzionale)",
      btn_submit:"VOGLIO IL MIO SCONTO", btn_ok:"✓ ISCRITTO!",
      form_legal:"Nessuno spam. Sconto valido mostrando questa email all'inaugurazione.",
      success_title:"Sei dei nostri!", success_sub:"Abbiamo salvato il tuo sconto.<br>Ci vediamo il <strong>24 Giugno</strong> a Platja L'Rubina!",
      follow_ig:"Seguici su Instagram", where_title:"Dove siamo", hours_title:"Orari",
      hours_days:"Venerdì · Sabato · Domenica", hours_note:"Aperto ogni fine settimana",
      follow_title:"Seguici", maps_link:"Vedi su Google Maps →", info_heading:"Info ristorante"
    },
    nl: {
      kicker:"Health Fast Food · Empuriabrava", title1:"GROTE", title2:"OPENING",
      date:"24 Juni — Sant Joan", cd_days:"Dagen", cd_hours:"Uren", cd_mins:"Min", cd_secs:"Sec",
      hero_cta:"Aanmelden · Krijg je korting",
      tape:" GROTE OPENING · 24 JUNI · SANT JOAN · EMPURIABRAVA · HEALTH FAST FOOD · COSTA BURRITO ·",
      marquee:" GROTE OPENING · 24 JUNI · SANT JOAN · EMPURIABRAVA · HEALTH FAST FOOD · COSTA BURRITO ·",
      reg_kicker:"EXCLUSIEF AANBOD · OPENING", reg_title1:"Wees niet", reg_title2:"dom!",
      reg_sub:"Meld je nu aan en we bewaren een exclusieve korting voor jou bij de opening. Wees een van de eersten die de beste health fast food aan de Costa Brava probeert.",
      perk1:"Exclusieve korting bij je eerste bezoek", perk2:"24 Juni — Platja L'Rubina",
      perk3:"Vrijdag, Zaterdag & Zondag · 12:00–23:00",
      f_name:"Naam", ph_name:"Jouw naam", f_phone:"Telefoon", optional:"(optioneel)",
      btn_submit:"IK WIL MIJN KORTING", btn_ok:"✓ AANGEMELD!",
      form_legal:"Geen spam. Korting geldig bij het tonen van deze e-mail bij de opening.",
      success_title:"Je bent erbij!", success_sub:"We hebben je korting opgeslagen.<br>Tot <strong>24 Juni</strong> in Platja L'Rubina!",
      follow_ig:"Volg ons op Instagram", where_title:"Waar we zijn", hours_title:"Openingstijden",
      hours_days:"Vrijdag · Zaterdag · Zondag", hours_note:"Elk weekend open",
      follow_title:"Volg ons", maps_link:"Bekijk op Google Maps →", info_heading:"Restaurant info"
    },
    ru: {
      kicker:"Здоровый фаст-фуд · Empuriabrava", title1:"БОЛЬШОЕ", title2:"ОТКРЫТИЕ",
      date:"24 Июня — Sant Joan", cd_days:"Дней", cd_hours:"Часов", cd_mins:"Мин", cd_secs:"Сек",
      hero_cta:"Зарегистрируйся · Получи скидку",
      tape:" ОТКРЫТИЕ · 24 ИЮНЯ · SANT JOAN · EMPURIABRAVA · HEALTH FAST FOOD · COSTA BURRITO ·",
      marquee:" ОТКРЫТИЕ · 24 ИЮНЯ · SANT JOAN · EMPURIABRAVA · HEALTH FAST FOOD · COSTA BURRITO ·",
      reg_kicker:"ЭКСКЛЮЗИВНОЕ ПРЕДЛОЖЕНИЕ", reg_title1:"Не будь", reg_title2:"ослом!",
      reg_sub:"Зарегистрируйся сейчас и получи эксклюзивную скидку на открытие. Стань одним из первых, кто попробует лучший здоровый фаст-фуд на Коста-Браве.",
      perk1:"Эксклюзивная скидка на первый визит", perk2:"24 Июня — Platja L'Rubina",
      perk3:"Пятница, Суббота и Воскресенье · 12:00–23:00",
      f_name:"Имя", ph_name:"Ваше имя", f_phone:"Телефон", optional:"(необязательно)",
      btn_submit:"ХОЧУ СКИДКУ", btn_ok:"✓ ГОТОВО!",
      form_legal:"Без спама. Скидка действительна при показе этого письма на открытии.",
      success_title:"Вы с нами!", success_sub:"Мы сохранили вашу скидку.<br>Увидимся <strong>24 Июня</strong> на Platja L'Rubina!",
      follow_ig:"Подписаться в Instagram", where_title:"Где мы находимся", hours_title:"Часы работы",
      hours_days:"Пятница · Суббота · Воскресенье", hours_note:"Открыто каждые выходные",
      follow_title:"Следите за нами", maps_link:"Открыть в Google Maps →", info_heading:"О ресторане"
    }
  };

  var currentLang = "es";
  var MAIN_LANGS = ["es", "ca", "fr"];
  var MORE_LANGS = ["en", "de", "it", "nl", "ru"];

  /* ── Aplicar traducciones ─────────────────────────────────────── */
  function applyLang(lang) {
    if (!T[lang]) return;
    currentLang = lang;
    var t = T[lang];
    try { localStorage.setItem("cb_lang", lang); } catch (_) {}
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      var key = el.getAttribute("data-i18n");
      if (t[key] !== undefined) el.innerHTML = t[key];
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      var key = el.getAttribute("data-i18n-placeholder");
      if (t[key] !== undefined) el.placeholder = t[key];
    });
    document.querySelectorAll("[data-i18n-tape]").forEach(function (el) {
      el.textContent = t.tape || "";
    });
    document.querySelectorAll("[data-i18n-marquee]").forEach(function (el) {
      el.textContent = t.marquee || "";
    });
    setupMarquee();

    /* Botones principales */
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      var isActive = btn.getAttribute("data-lang") === lang;
      btn.classList.toggle("active", isActive);
      btn.setAttribute("aria-pressed", String(isActive));
    });
    /* Botones dropdown */
    document.querySelectorAll(".lang-dropdown-btn").forEach(function (btn) {
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });

    var langField = document.getElementById("f-lang");
    if (langField) langField.value = lang;

    var titles = {
      es:"Costa Burrito — Gran Inauguración · 24 de Junio · Empuriabrava",
      ca:"Costa Burrito — Gran Inauguració · 24 de Juny · Empuriabrava",
      fr:"Costa Burrito — Grande Inauguration · 24 Juin · Empuriabrava",
      en:"Costa Burrito — Grand Opening · June 24 · Empuriabrava",
      de:"Costa Burrito — Große Eröffnung · 24. Juni · Empuriabrava",
      it:"Costa Burrito — Grande Inaugurazione · 24 Giugno · Empuriabrava",
      nl:"Costa Burrito — Grote Opening · 24 Juni · Empuriabrava",
      ru:"Costa Burrito — Большое Открытие · 24 Июня · Empuriabrava"
    };
    document.title = titles[lang] || document.title;

    /* Actualizar el tape width después de cambiar texto */
    safe(setTapeWidth, "setTapeWidth");
  }

  /* ── Selector de idioma + dropdown ───────────────────────────── */
  function initLang() {
    var saved = "es";
    try { saved = localStorage.getItem("cb_lang") || "es"; } catch (_) {}
    applyLang(saved);

    /* Botones principales */
    document.querySelectorAll(".lang-btn").forEach(function (btn) {
      btn.addEventListener("click", function () {
        applyLang(btn.getAttribute("data-lang"));
        closeDropdown();
      });
    });

    /* Botón "+" */
    var moreBtn = document.getElementById("langMoreBtn");
    var dropdown = document.getElementById("langDropdown");
    if (moreBtn && dropdown) {
      moreBtn.addEventListener("click", function (e) {
        e.stopPropagation();
        var isOpen = dropdown.classList.contains("is-open");
        dropdown.classList.toggle("is-open", !isOpen);
        moreBtn.setAttribute("aria-expanded", String(!isOpen));
      });

      /* Botones dentro del dropdown */
      dropdown.querySelectorAll(".lang-dropdown-btn").forEach(function (btn) {
        btn.addEventListener("click", function () {
          applyLang(btn.getAttribute("data-lang"));
          closeDropdown();
        });
      });

      /* Cerrar al hacer click fuera */
      document.addEventListener("click", function () { closeDropdown(); });
      dropdown.addEventListener("click", function (e) { e.stopPropagation(); });
    }

    function closeDropdown() {
      if (dropdown) dropdown.classList.remove("is-open");
      if (moreBtn) moreBtn.setAttribute("aria-expanded", "false");
    }
  }

  /* ── TAPE WIDTH — fórmula matemática exacta ──────────────────── */
  /* Prueba:
     hero = flex column, align-items:center, padding-inline = P
     heroContentWidth = vw - 2P
     tape.width = vw + 40  (buffer de 20px cada lado)
     align-items centra el tape:
       tape.left = P + (heroContentWidth - tape.width) / 2
                 = P + (vw - 2P - vw - 40) / 2
                 = P - P - 20 = -20px  (siempre, independiente de P y vw)
     hero overflow:hidden recorta en 0 → tape aparece de 0 a vw ✓  */
  function setTapeWidth() {
    var tape = document.querySelector(".hero-tape");
    if (!tape) return;
    var vw = document.documentElement.clientWidth; /* excluye scrollbar */
    /* width = vw+40: con align-items:center y padding simétrico,
       tape queda centrada a -20px del viewport → hero overflow:hidden la recorta exacto */
    tape.style.width      = (vw + 40) + "px";
    tape.style.marginLeft = "0";
    tape.style.marginRight = "0";
    tape.style.transform  = "rotate(-1.5deg)";
  }

  function initTapeWidth() {
    setTapeWidth();
    window.addEventListener("resize", setTapeWidth, { passive: true });
  }

  /* ── Countdown + reemplazo al expirar ────────────────────────── */
  function initCountdown() {
    var target = new Date("2026-06-24T12:00:00+02:00").getTime();
    var elDays  = document.getElementById("cd-days");
    var elHours = document.getElementById("cd-hours");
    var elMins  = document.getElementById("cd-mins");
    var elSecs  = document.getElementById("cd-secs");
    var cdWrap  = document.getElementById("countdown");
    var btnOpen = document.getElementById("btnOpenNow");
    if (!elDays) return;

    function pad(n) { return String(n).padStart(2, "0"); }

    /* Animar la transición countdown → botón */
    function showOpenNow() {
      if (!cdWrap || !btnOpen) return;

      /* Fade out countdown */
      cdWrap.style.transition = "opacity 0.6s ease, transform 0.6s ease";
      cdWrap.style.opacity    = "0";
      cdWrap.style.transform  = "scale(0.9)";

      setTimeout(function () {
        cdWrap.style.display = "none";
        cdWrap.setAttribute("aria-hidden", "true");

        /* Mostrar botón con fade in */
        btnOpen.hidden = false;
        btnOpen.removeAttribute("aria-hidden");
        btnOpen.style.opacity   = "0";
        btnOpen.style.transform = "scale(0.9)";
        btnOpen.style.transition = "opacity 0.6s ease, transform 0.6s ease";

        requestAnimationFrame(function () {
          requestAnimationFrame(function () {
            btnOpen.style.opacity   = "1";
            btnOpen.style.transform = "scale(1)";
          });
        });

        /* Actualizar texto al idioma actual */
        var t = T[currentLang] || T.es;
        var titleEl = btnOpen.querySelector(".bon-title");
        var subEl   = btnOpen.querySelector(".bon-sub");
        if (titleEl && t.open_title) titleEl.textContent = t.open_title;
        if (subEl   && t.open_sub)   subEl.textContent   = t.open_sub;
      }, 650);
    }

    var expired = false;
    function tick() {
      var diff = target - Date.now();
      if (diff <= 0 && !expired) {
        expired = true;
        showOpenNow();
        return;
      }
      if (expired) return;
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
    setTimeout(function () {
      document.querySelectorAll(".reveal:not(.is-visible), .reveal-up:not(.is-visible)").forEach(function (el) {
        if (el.getBoundingClientRect().top < window.innerHeight + 100) el.classList.add("is-visible");
      });
    }, 5000);
  }

  /* ── Hero entrance ────────────────────────────────────────────── */
  function initHeroEntrance() {
    document.querySelectorAll(".hero-top, .hero-bottom, .hero .reveal").forEach(function (el) {
      var delay = parseInt(el.dataset.delay || "0", 10);
      setTimeout(function () { el.classList.add("is-visible"); }, 200 + (isNaN(delay) ? 0 : delay));
    });
  }

  /* ── Formulario ───────────────────────────────────────────────── */
  function initForm() {
    var form    = document.getElementById("regForm");
    var btn     = document.getElementById("regBtn");
    var success = document.getElementById("regSuccess");
    var wrap    = document.querySelector(".reg-form-wrap");
    if (!form) return;

    var stored = null;
    try { stored = JSON.parse(localStorage.getItem("cb_registration")); } catch (_) {}
    if (stored && stored.email) { showSuccess(); return; }

    function getErr(field) { var ff = field.closest(".form-field"); return ff ? ff.querySelector(".field-err") : null; }
    function setErr(field, msg) { var err = getErr(field); if (err) err.textContent = msg; field.setAttribute("aria-invalid", msg ? "true" : "false"); }
    function validate() {
      var ok = true;
      var nameEl = document.getElementById("f-name"), emailEl = document.getElementById("f-email");
      setErr(nameEl, ""); setErr(emailEl, "");
      if (!nameEl.value.trim()) { setErr(nameEl, (T[currentLang] || T.es).f_name + " es obligatorio."); ok = false; }
      if (!emailEl.value.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailEl.value.trim())) { setErr(emailEl, "Email no válido."); ok = false; }
      return ok;
    }

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!validate()) return;
      var langField = document.getElementById("f-lang");
      if (langField) langField.value = currentLang;
      btn.disabled = true;
      var regData = { name: document.getElementById("f-name").value.trim(), email: document.getElementById("f-email").value.trim(), phone: (document.getElementById("f-phone") || {}).value || "", lang: currentLang, ts: Date.now() };
      try { localStorage.setItem("cb_registration", JSON.stringify(regData)); } catch (_) {}
      var keyInput = form.querySelector('[name="access_key"]');
      var hasRealKey = keyInput && keyInput.value && keyInput.value !== "YOUR_ACCESS_KEY";
      if (hasRealKey) {
        fetch("https://api.web3forms.com/submit", { method: "POST", body: new FormData(form) })
          .then(function (r) { return r.json(); })
          .then(function () { btn.classList.add("is-success"); setTimeout(showSuccess, 500); })
          .catch(function () { btn.classList.add("is-success"); setTimeout(showSuccess, 500); });
      } else { btn.classList.add("is-success"); setTimeout(showSuccess, 700); }
    });

    function showSuccess() {
      if (form) form.hidden = true;
      if (success) {
        success.hidden = false;
        var t = T[currentLang] || T.es;
        var titleEl = success.querySelector("[data-i18n='success_title']");
        var subEl = success.querySelector("[data-i18n='success_sub']");
        if (titleEl) titleEl.innerHTML = t.success_title;
        if (subEl) subEl.innerHTML = t.success_sub;
      }
      if (wrap) wrap.style.background = "rgba(26,35,126,0.12)";
      setTimeout(function () { if (success) success.scrollIntoView({ behavior: "smooth", block: "center" }); }, 100);
    }
  }

  /* ── Smooth scroll ────────────────────────────────────────────── */
  function initSmoothScroll() {
    document.addEventListener("click", function (e) {
      var a = e.target.closest('a[href^="#"]');
      if (!a) return;
      var id = a.getAttribute("href");
      if (!id || id === "#") return;
      var el = document.querySelector(id);
      if (!el) return;
      e.preventDefault();
      window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 80, behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
    });
  }

  /* ── Map overlay ──────────────────────────────────────────────── */
  function initMapOverlay() {
    var overlay = document.getElementById("mapOverlay");
    var iframe  = document.getElementById("mapIframe");
    if (!overlay) return;
    function hide() { overlay.classList.add("is-hidden"); }
    if (iframe) iframe.addEventListener("load", function () { setTimeout(hide, 800); });
    setTimeout(hide, 2500);
  }

  /* ── Boot ─────────────────────────────────────────────────────── */
  function boot() {
    safe(initLang,         "initLang");
    safe(initTapeWidth,    "initTapeWidth");
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
