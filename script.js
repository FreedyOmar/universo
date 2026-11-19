// =========================================================
// UN UNIVERSO LLAMADO NOSOTROS
// Personaliza los recuerdos en la lista memories de abajo.
// Coloca tus fotos en la carpeta /fotos con los nombres indicados.
// =========================================================

const memories = [
  { title: "El comienzo de algo bonito", text: "Hay encuentros que parecen pequeños, pero terminan convirtiéndose en una parte enorme de nuestra historia.", date: "RECUERDO 01", photo: "recuerdo-01.jpg", orbit: 1, color: "#f4bd83" },
  { title: "Una sonrisa que guardo", text: "De esos momentos sencillos que quisiera poder repetir una y otra vez.", date: "RECUERDO 02", photo: "recuerdo-02.jpg", orbit: 1, color: "#83c7e9" },
  { title: "Un día para recordar", text: "No fue necesario que todo fuera perfecto; bastó con compartirlo contigo.", date: "RECUERDO 03", photo: "recuerdo-03.jpg", orbit: 1, color: "#d59be9" },
  { title: "Nuestro primer universo", text: "Poco a poco fuimos creando recuerdos que hoy brillan con luz propia.", date: "RECUERDO 04", photo: "recuerdo-04.jpg", orbit: 1, color: "#e9a3a3" },
  { title: "Pequeños grandes momentos", text: "A veces la felicidad se esconde en los detalles más simples.", date: "RECUERDO 05", photo: "recuerdo-05.jpg", orbit: 2, color: "#8dc8b6" },
  { title: "Contigo, cualquier lugar", text: "Lo bonito no siempre es el destino, sino la persona que camina a tu lado.", date: "RECUERDO 06", photo: "recuerdo-06.jpg", orbit: 2, color: "#e5c27c" },
  { title: "Una tarde especial", text: "Un recuerdo más que quisiera guardar entre mis estrellas favoritas.", date: "RECUERDO 07", photo: "recuerdo-07.jpg", orbit: 2, color: "#9ca9f0" },
  { title: "De esos días felices", text: "Gracias por cada instante, por cada risa y por cada momento compartido.", date: "RECUERDO 08", photo: "recuerdo-08.jpg", orbit: 2, color: "#e99dbd" },
  { title: "Nuestro pequeño mundo", text: "Me gusta todo lo que seguimos construyendo, paso a paso y con cariño.", date: "RECUERDO 09", photo: "recuerdo-09.jpg", orbit: 2, color: "#a8c6e8" },
  { title: "Una memoria brillante", text: "Hay fotografías que no solo muestran un momento: también nos hacen sentirlo otra vez.", date: "RECUERDO 10", photo: "recuerdo-10.jpg", orbit: 2, color: "#e7aa7c" },
  { title: "La alegría de coincidir", text: "Entre tantas posibilidades, qué bonito que nuestras historias se encontraran.", date: "RECUERDO 11", photo: "recuerdo-11.jpg", orbit: 3, color: "#c1a2e8" },
  { title: "Un capítulo más", text: "Cada experiencia contigo se convierte en una página que quiero conservar.", date: "RECUERDO 12", photo: "recuerdo-12.jpg", orbit: 3, color: "#7ec9ce" },
  { title: "Risas que hacen bien", text: "Ojalá nunca nos falten motivos para sonreír juntos.", date: "RECUERDO 13", photo: "recuerdo-13.jpg", orbit: 3, color: "#f0c77d" },
  { title: "Un instante nuestro", text: "Este momento también tiene un lugar especial en mi corazón.", date: "RECUERDO 14", photo: "recuerdo-14.jpg", orbit: 3, color: "#db9fb2" },
  { title: "Gracias por estar", text: "Valoro mucho tu compañía y la manera en que haces especiales tantos días.", date: "RECUERDO 15", photo: "recuerdo-15.jpg", orbit: 3, color: "#91b9ed" },
  { title: "Una historia en marcha", text: "Todavía quedan tantos lugares, conversaciones y recuerdos por descubrir.", date: "RECUERDO 16", photo: "recuerdo-16.jpg", orbit: 3, color: "#a9d09a" },
  { title: "De mi colección favorita", text: "Si pudiera guardar instantes en frascos de estrellas, este sería uno de ellos.", date: "RECUERDO 17", photo: "recuerdo-17.jpg", orbit: 3, color: "#d4a3ed" },
  { title: "Un día que ilumina", text: "Hay recuerdos que siguen iluminando incluso cuando el día ya terminó.", date: "RECUERDO 18", photo: "recuerdo-18.jpg", orbit: 3, color: "#e8b17d" },
  { title: "Lo que somos", text: "Me alegra poder compartir contigo esta parte tan bonita de mi vida.", date: "RECUERDO 19", photo: "recuerdo-19.jpg", orbit: 4, color: "#8ec8df" },
  { title: "Un recuerdo para siempre", text: "No quiero dar por sentado ninguno de los momentos que vivimos.", date: "RECUERDO 20", photo: "recuerdo-20.jpg", orbit: 4, color: "#e9a6c5" },
  { title: "Mi casualidad favorita", text: "A veces la vida nos regala personas que se vuelven un motivo para agradecer.", date: "RECUERDO 21", photo: "recuerdo-21.jpg", orbit: 4, color: "#d8bd7c" },
  { title: "Lo bonito continúa", text: "Que sigamos encontrando razones para crear nuevos recuerdos.", date: "RECUERDO 22", photo: "recuerdo-22.jpg", orbit: 4, color: "#a99ce9" },
  { title: "Todo lo que falta vivir", text: "Me emociona pensar en todas las historias que todavía no hemos escrito.", date: "RECUERDO 23", photo: "recuerdo-23.jpg", orbit: 4, color: "#8ac9a8" },
  { title: "Mi estrella favorita", text: "De todos los recuerdos que guarda este universo, tú eres la razón por la que existe.", date: "RECUERDO 24", photo: "recuerdo-24.jpg", orbit: 4, color: "#f0b77e" }
];

// Configuración de cada órbita: cuántos planetas, radio (% del escenario),
// velocidad (grados por segundo; el signo cambia el sentido) y tamaño del planeta.
const ORBITS = {
  1: { count: 4, radius: 12,   speed: 15,   size: 0.030 },
  2: { count: 6, radius: 21.5, speed: -9.5, size: 0.035 },
  3: { count: 8, radius: 32,   speed: 6.5,  size: 0.040 },
  4: { count: 6, radius: 43,   speed: -4.7, size: 0.045 }
};
// Formatos de foto que se intentan automáticamente si el archivo indicado no existe.
const PHOTO_EXTS = ["jpg", "jpeg", "png", "webp", "avif", "gif", "JPG", "JPEG", "PNG", "WEBP"];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

const $ = id => document.getElementById(id);
const introScreen = $("introScreen");
const universeScreen = $("universeScreen");
const firstSun = $("firstSun");
const planetContainer = $("planetContainer");
const memoryModal = $("memoryModal");
const memoryCard = $("memoryCard");
const memoryImage = $("memoryImage");
const imagePlaceholder = $("imagePlaceholder");
const memoryOrb = $("memoryOrb");
const memoryTitle = $("memoryTitle");
const memoryText = $("memoryText");
const memoryEyebrow = $("memoryEyebrow");
const memoryCounter = $("memoryCounter");
const progressBar = $("progressBar");
const prevMemory = $("prevMemory");
const memoryHint = $("memoryHint");
const nextMemory = $("nextMemory");
const finalModal = $("finalModal");
const finalHearts = $("finalHearts");
const finalSurprise = $("finalSurprise");
const visitedCount = $("visitedCount");
const planetZoom = $("planetZoom");
const toastEl = $("toast");
const backgroundMusic = $("backgroundMusic");

let currentMemory = 0;
let universeCreated = false;
let universeBorn = false;
let busy = false;            // hay un "zoom" en curso
let hoveredHolder = null;    // planeta bajo el cursor (frena la órbita)
let lastTrigger = null;
let typingTimer = null;
let heartTimer = null;
let toastTimer = null;
let completeAnnounced = false;
const planets = [];
// El progreso NO se guarda: cada vez que se abre la página empieza solo con el primer planeta.
const visited = new Set();
try { localStorage.removeItem("universo-nosotros-visitados"); } catch (e) { /* sin almacenamiento */ }

/* ---------------- Fondo vivo: estrellas, fugaces, parallax ---------------- */
(function buildTwinkles() {
  const layer = $("twinkles");
  const total = window.innerWidth < 650 ? 38 : 70;
  const tints = ["#ffffff", "#ffffff", "#cfd8ff", "#ffe6b8"];
  for (let i = 0; i < total; i++) {
    const s = document.createElement("i");
    s.className = "tw";
    const size = 1 + Math.random() * 2;
    s.style.cssText = `left:${Math.random() * 100}%;top:${Math.random() * 100}%;width:${size}px;height:${size}px;background:${tints[i % tints.length]};--d:${2 + Math.random() * 4}s;--dl:${Math.random() * 5}s`;
    layer.appendChild(s);
  }
})();

function shootingStar() {
  if (reduceMotion || document.hidden) return;
  const layer = $("shootingLayer");
  const s = document.createElement("span");
  s.className = "shooting-star";
  s.style.left = `${Math.random() * window.innerWidth * 0.8}px`;
  s.style.top = `${Math.random() * window.innerHeight * 0.45}px`;
  layer.appendChild(s);
  const len = 500 + Math.random() * 400;
  const a = s.animate([
    { transform: "rotate(28deg) translateX(0)", opacity: 0 },
    { opacity: 1, offset: 0.15 },
    { transform: `rotate(28deg) translateX(${len}px)`, opacity: 0 }
  ], { duration: 1100 + Math.random() * 600, easing: "ease-in" });
  a.onfinish = () => s.remove();
}
function scheduleShootingStars() {
  shootingStar();
  window.setTimeout(scheduleShootingStars, 2500 + Math.random() * 4500);
}
window.setTimeout(scheduleShootingStars, 1800);

let parallaxQueued = false;
window.addEventListener("pointermove", event => {
  if (event.pointerType === "touch" || reduceMotion || parallaxQueued) return;
  parallaxQueued = true;
  window.requestAnimationFrame(() => {
    const root = document.documentElement.style;
    root.setProperty("--px", ((event.clientX / window.innerWidth) * 2 - 1).toFixed(3));
    root.setProperty("--py", ((event.clientY / window.innerHeight) * 2 - 1).toFixed(3));
    parallaxQueued = false;
  });
});

/* ---------------- Chispas y avisos ---------------- */
function burst(x, y, color = "#ffdca0", n = 14) {
  if (reduceMotion) return;
  for (let i = 0; i < n; i++) {
    const s = document.createElement("span");
    s.className = "spark";
    s.style.left = `${x}px`;
    s.style.top = `${y}px`;
    s.style.color = color;
    s.style.background = i % 3 === 0 ? "#fff" : color;
    document.body.appendChild(s);
    const ang = Math.random() * Math.PI * 2;
    const dist = 40 + Math.random() * 100;
    const a = s.animate([
      { transform: "translate(-50%, -50%) scale(1)", opacity: 1 },
      { transform: `translate(calc(-50% + ${Math.cos(ang) * dist}px), calc(-50% + ${Math.sin(ang) * dist}px)) scale(0)`, opacity: 0 }
    ], { duration: 700 + Math.random() * 500, easing: "cubic-bezier(.1,.7,.3,1)" });
    a.onfinish = () => s.remove();
  }
}

function toast(message) {
  toastEl.textContent = message;
  toastEl.classList.add("show");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toastEl.classList.remove("show"), 4500);
}

/* ---------------- Progreso ---------------- */
function markVisited(index) {
  visited.add(index);
  const p = planets[index];
  if (p) p.holder.classList.add("visited");
  updateProgress();
}
function updateProgress() {
  visitedCount.textContent = visited.size;
  progressBar.style.width = `${(visited.size / memories.length) * 100}%`;
  if (visited.size === memories.length) finalSurprise.classList.add("ready");
}
function checkComplete() {
  if (visited.size === memories.length && !completeAnnounced) {
    completeAnnounced = true;
    toast("✦ Descubriste todos los planetas. Te espera una última sorpresa.");
  }
}

/* ---------------- Tarjeta de recuerdo ---------------- */
function typeText(el, text) {
  window.clearInterval(typingTimer);
  el.classList.remove("typing");
  if (reduceMotion) { el.textContent = text; return; }
  el.textContent = "";
  const typed = document.createElement("span");
  typed.className = "typed";
  const ghost = document.createElement("span");
  ghost.className = "ghost";
  ghost.textContent = text;
  el.append(typed, ghost);
  el.classList.add("typing");
  let i = 0;
  typingTimer = window.setInterval(() => {
    i += 1;
    typed.textContent = text.slice(0, i);
    ghost.textContent = text.slice(i);
    if (i >= text.length) {
      window.clearInterval(typingTimer);
      el.classList.remove("typing");
    }
  }, 22);
}

// Todos los planetas ya aparecieron (ninguno sigue oculto).
function allLoaded() {
  return planets.length === memories.length && planets.every(p => !p.locked);
}

// Anterior / Continuar solo existen cuando ya aparecieron los 24 planetas;
// antes, la tarjeta solo invita a cerrar para descubrir el siguiente.
function updateNav(index) {
  const all = allLoaded();
  prevMemory.classList.toggle("off", !all || index === 0);
  nextMemory.hidden = !all;
  memoryHint.hidden = all;
  nextMemory.innerHTML = index === memories.length - 1 ? 'Finalizar <span>✦</span>' : 'Continuar <span>→</span>';
}

// Carga la foto probando varios formatos (jpg, jpeg, png, webp...) hasta encontrar el que exista.
const photoCache = {};
let photoToken = 0;
function loadPhoto(photo) {
  const token = ++photoToken;
  const base = photo.replace(/\.[^./]+$/, "");
  const list = [...new Set([photoCache[photo], photo, ...PHOTO_EXTS.map(e => `${base}.${e}`)].filter(Boolean))];
  let k = 0;
  memoryImage.classList.remove("loaded");
  imagePlaceholder.style.display = "flex";
  memoryImage.onload = () => {
    if (token !== photoToken) return;
    photoCache[photo] = list[k];
    memoryImage.classList.add("loaded");
    imagePlaceholder.style.display = "none";
  };
  memoryImage.onerror = () => {
    if (token !== photoToken) return;
    k += 1;
    if (k < list.length) {
      memoryImage.src = `fotos/${list[k]}`;
    } else {
      memoryImage.classList.remove("loaded");
      imagePlaceholder.style.display = "flex";
    }
  };
  memoryImage.src = `fotos/${list[0]}`;
}

function fillMemory(index) {
  currentMemory = index;
  const item = memories[index];
  memoryCard.style.setProperty("--accent", item.color);
  memoryTitle.textContent = item.title;
  memoryEyebrow.textContent = `${item.date} · UN UNIVERSO LLAMADO NOSOTROS`;
  memoryCounter.textContent = `${String(index + 1).padStart(2, "0")} / ${memories.length}`;
  typeText(memoryText, item.text);

  memoryOrb.className = `memory-orb planet-skin type-${index % 6}`;
  memoryOrb.style.setProperty("--planet-color", item.color);
  memoryOrb.style.setProperty("--ring-opacity", index % 3 === 0 ? ".85" : "0");

  updateNav(index);
  loadPhoto(item.photo);
  markVisited(index);
}

function animateCard(mode) {
  memoryCard.classList.remove("enter");
  void memoryCard.offsetWidth; // reinicia la entrada escalonada del texto
  memoryCard.classList.add("enter");
  if (reduceMotion) return;
  const frames = {
    pop: [{ opacity: 0, transform: "scale(.72)" }, { opacity: 1, transform: "none" }],
    next: [{ opacity: 0, transform: "translateX(40px)" }, { opacity: 1, transform: "none" }],
    prev: [{ opacity: 0, transform: "translateX(-40px)" }, { opacity: 1, transform: "none" }]
  };
  memoryCard.animate(frames[mode], { duration: mode === "pop" ? 700 : 450, easing: "cubic-bezier(.2,.8,.2,1)", fill: "backwards" });
}

function showMemory(mode) {
  memoryModal.classList.add("open");
  memoryModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  animateCard(mode);
}

function goTo(index, mode) {
  fillMemory(index);
  animateCard(mode);
}

function closeMemory() {
  if (!memoryModal.classList.contains("open")) return;
  window.clearInterval(typingTimer);
  memoryModal.classList.remove("open");
  memoryModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  hoveredHolder = null;
  planets.forEach(p => p.holder.classList.remove("is-hover"));
  const firstClose = universeCreated && !universeBorn;
  if (firstClose) {
    universeBorn = true;
    universeScreen.classList.add("universe-born");
  }
  if (lastTrigger && lastTrigger.isConnected) lastTrigger.focus({ preventScroll: true });
  // El siguiente planeta aparece cuando la tarjeta ya se cerró (y tras nacer el universo, si es la primera vez).
  window.setTimeout(syncLocks, firstClose ? 2000 : 450);
  window.setTimeout(checkComplete, 900);
}

/* ---------------- Zoom hacia el planeta ---------------- */
// Una esfera del color del planeta se expande desde él hasta cubrir la pantalla;
// al cubrirla se abre la tarjeta y la esfera se desvanece.
async function dive({ x, y, r, color, type, sun }, onCover) {
  if (busy) return;
  busy = true;
  burst(x, y, color, 16);
  if (reduceMotion) {
    onCover();
    busy = false;
    return;
  }
  try {
    planetZoom.className = `planet-zoom planet-skin type-${type} ${sun ? "sun-zoom" : ""} active`;
    planetZoom.style.setProperty("--planet-color", color);
    const R = Math.max(
      Math.hypot(x, y),
      Math.hypot(window.innerWidth - x, y),
      Math.hypot(x, window.innerHeight - y),
      Math.hypot(window.innerWidth - x, window.innerHeight - y)
    ) + 20;
    const grow = planetZoom.animate([
      { clipPath: `circle(${r}px at ${x}px ${y}px)` },
      { clipPath: `circle(${R}px at ${x}px ${y}px)` }
    ], { duration: 850, easing: "cubic-bezier(.65,0,.25,1)", fill: "forwards" });
    await grow.finished;
    onCover();
    const fade = planetZoom.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 750, easing: "ease-out", fill: "forwards" });
    await fade.finished;
  } catch (e) {
    onCover();
  } finally {
    planetZoom.getAnimations().forEach(a => a.cancel());
    planetZoom.className = "planet-zoom";
    busy = false;
  }
}

function openPlanet(index, planetEl) {
  if (busy) return;
  const item = memories[index];
  const rect = planetEl.getBoundingClientRect();
  lastTrigger = planetEl;
  dive({
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
    r: rect.width / 2,
    color: item.color,
    type: index % 6
  }, () => {
    fillMemory(index);
    showMemory("pop");
  });
}

/* ---------------- Desbloqueo en orden ---------------- */
// Se ven los planetas ya abiertos (en orden) más el siguiente por descubrir.
function unlockedCount() {
  let n = 0;
  while (visited.has(n)) n += 1;
  return Math.min(n + 1, memories.length);
}

function syncLocks() {
  const limit = unlockedCount();
  planets.forEach((p, i) => {
    if (i < limit && p.locked) {
      p.locked = false;
      p.holder.style.setProperty("--delay", "0.1s");
      p.holder.classList.remove("locked");
      const rect = p.planet.getBoundingClientRect();
      burst(rect.left + rect.width / 2, rect.top + rect.height / 2, memories[i].color, 18);
    }
  });
}

/* ---------------- Planetas en órbita ---------------- */
function placePlanet(p) {
  p.holder.style.left = `${50 + p.radius * Math.cos(p.angle)}%`;
  p.holder.style.top = `${50 + p.radius * Math.sin(p.angle)}%`;
}

function createPlanets() {
  if (universeCreated) return;
  universeCreated = true;
  const perOrbit = { 1: 0, 2: 0, 3: 0, 4: 0 };
  const limit = unlockedCount();

  memories.forEach((item, index) => {
    const o = ORBITS[item.orbit];
    const slot = perOrbit[item.orbit]++;
    const angle = (Math.PI * 2 / o.count) * slot + item.orbit * 0.23;

    const holder = document.createElement("div");
    holder.className = "planet-holder";
    holder.style.setProperty("--s", o.size);
    holder.style.setProperty("--planet-color", item.color);
    holder.style.setProperty("--delay", `${index * 55 + 500}ms`);
    holder.style.setProperty("--dl", `${(index * 0.37) % 3}s`);

    const halo = document.createElement("span");
    halo.className = "planet-halo";

    const planet = document.createElement("button");
    planet.type = "button";
    planet.className = `planet planet-skin type-${index % 6}`;
    planet.style.setProperty("--planet-color", item.color);
    planet.style.setProperty("--ring-opacity", index % 3 === 0 ? ".8" : "0");
    planet.setAttribute("aria-label", `Entrar al recuerdo ${index + 1}: ${item.title}`);
    const surface = document.createElement("span");
    surface.className = "surface";
    planet.appendChild(surface);
    planet.addEventListener("click", () => openPlanet(index, planet));

    const label = document.createElement("span");
    label.className = "planet-label";
    label.textContent = `${String(index + 1).padStart(2, "0")} · ${item.title.toUpperCase()}`;

    holder.append(halo, planet, label);
    holder.addEventListener("pointerenter", () => {
      hoveredHolder = holder;
      holder.classList.add("is-hover");
    });
    holder.addEventListener("pointerleave", () => {
      if (hoveredHolder === holder) hoveredHolder = null;
      holder.classList.remove("is-hover");
    });
    if (visited.has(index)) holder.classList.add("visited");

    const locked = index >= limit;
    if (locked) holder.classList.add("locked");
    const p = { holder, planet, angle, radius: o.radius, speed: (o.speed * Math.PI) / 180, locked };
    planets.push(p);
    placePlanet(p);
    planetContainer.appendChild(holder);
  });

  updateProgress();
  window.requestAnimationFrame(tick);
}

// Bucle de órbita: los planetas giran y se frenan suavemente al acercarse o abrir una tarjeta.
let lastFrame = performance.now();
let speedFactor = 1;
function tick(now) {
  const dt = Math.min(0.05, (now - lastFrame) / 1000);
  lastFrame = now;
  const stopped = hoveredHolder || busy || memoryModal.classList.contains("open") || finalModal.classList.contains("open") || reduceMotion;
  speedFactor += ((stopped ? 0 : 1) - speedFactor) * Math.min(1, dt * 5);
  if (speedFactor > 0.001) {
    planets.forEach(p => {
      p.angle += p.speed * dt * speedFactor;
      placePlanet(p);
    });
  }
  window.requestAnimationFrame(tick);
}

/* ---------------- Entrada: el primer sol ---------------- */
firstSun.addEventListener("click", () => {
  if (busy) return;
  const rect = firstSun.getBoundingClientRect();
  lastTrigger = null;
  dive({
    x: rect.left + rect.width / 2,
    y: rect.top + rect.height / 2,
    r: rect.width / 3,
    color: "#ffbd63",
    type: 0,
    sun: true
  }, () => {
    introScreen.classList.add("hidden");
    universeScreen.classList.remove("hidden");
    createPlanets();
    fillMemory(0);
    showMemory("pop");
  });
});

/* ---------------- Controles de la tarjeta ---------------- */
$("modalClose").addEventListener("click", closeMemory);
document.querySelectorAll("[data-close='true']").forEach(el => el.addEventListener("click", closeMemory));

nextMemory.addEventListener("click", () => {
  if (!allLoaded()) return;
  if (currentMemory < memories.length - 1) {
    goTo(currentMemory + 1, "next");
  } else {
    closeMemory();
    window.setTimeout(openFinal, 320);
  }
});
prevMemory.addEventListener("click", () => {
  if (allLoaded() && currentMemory > 0) goTo(currentMemory - 1, "prev");
});

/* ---------------- Mensaje final ---------------- */
function startHearts() {
  if (reduceMotion) return;
  window.clearInterval(heartTimer);
  const glyphs = ["♡", "✦", "✧", "♥", "✶"];
  heartTimer = window.setInterval(() => {
    if (finalHearts.childElementCount > 40) return;
    const h = document.createElement("span");
    h.className = "float-heart";
    h.textContent = glyphs[Math.floor(Math.random() * glyphs.length)];
    h.style.left = `${Math.random() * 100}%`;
    h.style.fontSize = `${12 + Math.random() * 22}px`;
    h.style.color = Math.random() > 0.5 ? "#ffdca0" : "#f2a6c4";
    finalHearts.appendChild(h);
    const drift = (Math.random() - 0.5) * 120;
    const a = h.animate([
      { transform: "translateY(0) rotate(0deg)", opacity: 0 },
      { opacity: 0.9, offset: 0.15 },
      { transform: `translateY(-${window.innerHeight + 80}px) translateX(${drift}px) rotate(${(Math.random() - 0.5) * 60}deg)`, opacity: 0 }
    ], { duration: 6000 + Math.random() * 4000, easing: "ease-out" });
    a.onfinish = () => h.remove();
  }, 380);
}

function openFinal() {
  finalModal.classList.add("open");
  finalModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
  startHearts();
  [0, 350, 700].forEach(delay => window.setTimeout(() => {
    if (!finalModal.classList.contains("open")) return;
    burst(window.innerWidth / 2 + (Math.random() - 0.5) * 220, window.innerHeight / 2 + (Math.random() - 0.5) * 160, delay === 350 ? "#f2a6c4" : "#ffdca0", 18);
  }, delay));
}
function closeFinal() {
  finalModal.classList.remove("open");
  finalModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
  window.clearInterval(heartTimer);
  window.setTimeout(() => { if (!finalModal.classList.contains("open")) finalHearts.innerHTML = ""; }, 400);
}
finalSurprise.addEventListener("click", openFinal);
$("finalClose").addEventListener("click", closeFinal);
document.querySelector("[data-final-close]").addEventListener("click", closeFinal);

/* ---------------- Música ---------------- */
const soundToggle = $("soundToggle");
soundToggle.addEventListener("click", async () => {
  if (backgroundMusic.paused) {
    try {
      await backgroundMusic.play();
      soundToggle.innerHTML = '<span class="sound-icon">♫</span><span class="sound-label">SONANDO</span>';
    } catch (error) {
      soundToggle.innerHTML = '<span class="sound-icon">♫</span><span class="sound-label">NO DISPONIBLE</span>';
    }
  } else {
    backgroundMusic.pause();
    soundToggle.innerHTML = '<span class="sound-icon">♫</span><span class="sound-label">SONIDO</span>';
  }
});

/* ---------------- Teclado ---------------- */
document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeMemory();
    if (finalModal.classList.contains("open")) closeFinal();
    return;
  }
  if (!memoryModal.classList.contains("open") || busy || !allLoaded()) return;
  if (event.key === "ArrowRight" && currentMemory < memories.length - 1) goTo(currentMemory + 1, "next");
  if (event.key === "ArrowLeft" && currentMemory > 0) goTo(currentMemory - 1, "prev");
});

updateProgress();
