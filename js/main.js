const translations = {
  en: {
    "nav.book":"Book","nav.map":"Map","nav.about":"For whom","nav.contact":"Contact",
    "hero.eyebrow":"A spiritual map for inner growth","hero.title":"From overthinking to alignment.","hero.subtitle":"Flow Fundamentals helps seekers recognize how life moves through mind, heart and body in what wants to arise, be experienced and be integrated.","hero.ctaPrimary":"Explore the book","hero.ctaSecondary":"See the map","hero.panelLabel":"Core promise","hero.panelTitle":"Spirituality made clear, calm and applicable.","hero.panelText":"Not another technique to control life, but a way to recognize the movement that is already present.",
    "problem.eyebrow":"The problem","problem.title":"Most spiritual growth stays too mental.","problem.p1":"Many seekers collect insights, techniques and practices for years. Meditation, surrender, manifestation, shadow work and self-inquiry can all be valuable. Yet the same method may work one day and feel empty the next.","problem.p2":"The missing piece is not always another method. Often, it is the ability to recognize what the Flow is asking now. Sometimes something wants to arise. Sometimes something wants to be lived. Sometimes something old wants to be integrated.",
    "insight.eyebrow":"The insight","insight.title":"Flow is not a formula. It is a living movement.","insight.text":"Flow Fundamentals is a map that helps us recognize this movement through mind, heart and body. It brings structure without becoming rigid, depth without becoming vague, and calm without becoming passive.",
    "map.eyebrow":"The map","map.title":"Three layers of Flow","map.text":"The book moves from natural recognition, to conscious surrender, to directed attunement.","map.card1.title":"Natural Flow","map.card1.keywords":"Light · Love · Power","map.card1.text":"Recognizing what already flows when there is little inner resistance.","map.card2.title":"Conscious Surrender","map.card2.keywords":"Receptivity · Landing · Agency","map.card2.text":"Letting go of what blocks the natural movement of Flow.","map.card3.title":"Directed Attunement","map.card3.keywords":"Manifestation · Experience · Integration","map.card3.text":"Recognizing the deeper movement that wants to unfold.",
    "audience.eyebrow":"For whom","audience.title":"For seekers who know a lot, but miss simplicity.","audience.item1":"You feel overwhelmed by spiritual information.","audience.item2":"You want to stop solving everything from the mind.","audience.item3":"You want body, heart and mind to work together again.","audience.item4":"You want shadow work, surrender and manifestation to fit into one clear map.",
    "status.eyebrow":"Book status","status.title":"Flow Fundamentals is being prepared for publication.","status.text":"This website is the first home for the book, the map and future videos. It will grow step by step, without losing its calm and clarity.",
    "closing.title":"The Flow does not need to be found outside of us.","closing.text":"It becomes recognizable when mind, heart and body learn to move with what is already present.","closing.cta":"Stay updated","footer.top":"Back to top"
  },
  nl: {
    "nav.book":"Boek","nav.map":"Landkaart","nav.about":"Voor wie","nav.contact":"Contact",
    "hero.eyebrow":"Een spirituele landkaart voor innerlijke groei","hero.title":"Van overdenken naar alignment.","hero.subtitle":"Flow Fundamentals helpt zoekers herkennen hoe het leven door geest, hart en lichaam beweegt in wat wil ontstaan, beleefd en geïntegreerd worden.","hero.ctaPrimary":"Ontdek het boek","hero.ctaSecondary":"Bekijk de landkaart","hero.panelLabel":"Belofte","hero.panelTitle":"Spiritualiteit helder, kalm en toepasbaar gemaakt.","hero.panelText":"Geen nieuwe techniek om het leven te beheersen, maar een manier om de beweging te herkennen die al aanwezig is.",
    "problem.eyebrow":"Het probleem","problem.title":"Veel spirituele groei blijft te mentaal.","problem.p1":"Veel zoekers verzamelen jarenlang inzichten, technieken en oefeningen. Meditatie, overgave, manifestatie, schaduwwerk en zelfonderzoek kunnen allemaal waardevol zijn. Toch werkt dezelfde methode de ene keer wel en de andere keer niet.","problem.p2":"Wat ontbreekt is niet altijd nog een methode. Vaak gaat het om het herkennen van wat de Flow nu vraagt. Soms wil iets ontstaan. Soms wil iets werkelijk geleefd worden. Soms wil iets ouds geïntegreerd worden.",
    "insight.eyebrow":"Het inzicht","insight.title":"Flow is geen formule. Het is een levende beweging.","insight.text":"Flow Fundamentals is een landkaart die helpt deze beweging te herkennen via geest, hart en lichaam. Het brengt structuur zonder hard te worden, diepte zonder vaag te worden en rust zonder passief te worden.",
    "map.eyebrow":"De landkaart","map.title":"Drie lagen van Flow","map.text":"Het boek beweegt van natuurlijke herkenning, naar bewuste overgave, naar gerichte afstemming.","map.card1.title":"De Natuurlijke Flow","map.card1.keywords":"Licht · Liefde · Kracht","map.card1.text":"Herkennen wat al stroomt wanneer er weinig innerlijke weerstand is.","map.card2.title":"De Bewuste Overgave","map.card2.keywords":"Ontvankelijkheid · Landing · Daadkracht","map.card2.text":"Loslaten wat de natuurlijke beweging van Flow blokkeert.","map.card3.title":"De Gerichte Afstemming","map.card3.keywords":"Manifestatie · Beleving · Integratie","map.card3.text":"Herkennen welke diepere beweging zich wil ontvouwen.",
    "audience.eyebrow":"Voor wie","audience.title":"Voor zoekers die veel weten, maar eenvoud missen.","audience.item1":"Je raakt overweldigd door spirituele informatie.","audience.item2":"Je wilt stoppen met alles vanuit het hoofd op te lossen.","audience.item3":"Je wilt dat lichaam, hart en geest weer samenwerken.","audience.item4":"Je wilt schaduwwerk, overgave en manifestatie in één heldere landkaart zien.",
    "status.eyebrow":"Boekstatus","status.title":"Flow Fundamentals wordt voorbereid voor publicatie.","status.text":"Deze website is de eerste thuisbasis voor het boek, de landkaart en toekomstige video’s. Zij groeit stap voor stap, zonder haar rust en helderheid te verliezen.",
    "closing.title":"De Flow hoeft niet buiten ons gevonden te worden.","closing.text":"Zij wordt herkenbaar wanneer geest, hart en lichaam leren meebewegen met wat al aanwezig is.","closing.cta":"Blijf op de hoogte","footer.top":"Terug naar boven"
  }
};
const navToggle = document.querySelector("[data-menu-toggle]");
const navLinks = document.querySelector("[data-nav-links]");
const year = document.querySelector("[data-year]");
const langButtons = document.querySelectorAll("[data-lang-switch]");
if (year) year.textContent = new Date().getFullYear();
function setLanguage(lang) {
  const dictionary = translations[lang] || translations.en;
  document.documentElement.lang = lang;
  document.documentElement.dataset.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (dictionary[key]) el.textContent = dictionary[key];
  });
  langButtons.forEach((btn) => btn.classList.toggle("is-active", btn.dataset.langSwitch === lang));
  localStorage.setItem("flowFundamentalsLang", lang);
}
langButtons.forEach((btn) => btn.addEventListener("click", () => setLanguage(btn.dataset.langSwitch)));
if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });
  navLinks.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
  }));
}
setLanguage(localStorage.getItem("flowFundamentalsLang") || "en");
