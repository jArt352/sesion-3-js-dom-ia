/*
 * Motor de la presentacion: construccion de diapositivas,
 * navegacion, progreso, indice y modo instructor.
 */

let currentSlide = 0;
const totalSlides = SLIDES.length;
let instructorMode = false;

function buildSlides() {
    const container = document.getElementById("slides");
    SLIDES.forEach((slide) => {
        const div = document.createElement("div");
        div.className = "slide";
        div.dataset.layout = slide.layout || "default";

        const showStandardTitle = slide.layout !== "cover";
        div.innerHTML = `
            <div class="slide-kicker"><span class="dot"></span>${escapeHtml(slide.bloque)}</div>
            ${showStandardTitle ? `<h1 class="slide-title">${slide.title}</h1>` : ""}
            ${showStandardTitle && slide.subtitle ? `<div class="slide-subtitle">${slide.subtitle}</div>` : ""}
            <div class="slide-body">${slide.body}</div>
        `;
        container.appendChild(div);
    });
}

function buildIndex() {
    const list = document.getElementById("index-list");
    let currentBloque = null;
    SLIDES.forEach((slide, idx) => {
        if (slide.bloque !== currentBloque) {
            currentBloque = slide.bloque;
            const h = document.createElement("div");
            h.className = "index-bloque-title";
            h.textContent = currentBloque;
            list.appendChild(h);
        }
        const item = document.createElement("div");
        item.className = "index-item";
        item.dataset.index = idx;
        item.innerHTML = `<span class="num">${String(idx + 1).padStart(2, "0")}</span><span class="lbl">${escapeHtml(slide.title)}</span>`;
        item.addEventListener("click", () => {
            goToSlide(idx);
            closeIndex();
        });
        list.appendChild(item);
    });
}

function refreshIndexHighlight() {
    document.querySelectorAll(".index-item").forEach((el) => {
        el.classList.toggle("current", Number(el.dataset.index) === currentSlide);
    });
}

function showSlide(idx) {
    const slides = document.querySelectorAll(".slide");
    slides.forEach((s, i) => s.classList.toggle("active", i === idx));
    currentSlide = idx;

    document.getElementById("slide-counter").textContent =
        `${String(idx + 1).padStart(2, "0")} / ${String(totalSlides).padStart(2, "0")}`;

    const pct = ((idx + 1) / totalSlides) * 100;
    document.getElementById("progress-bar").style.width = pct + "%";

    document.getElementById("bloque-tag").textContent = SLIDES[idx].bloque;

    document.getElementById("btn-prev").disabled = idx === 0;
    document.getElementById("btn-next").disabled = idx === totalSlides - 1;

    renderInstructorNotes();
    refreshIndexHighlight();
}

function goToSlide(idx) {
    if (idx < 0 || idx >= totalSlides) return;
    showSlide(idx);
}

function nextSlide() { goToSlide(currentSlide + 1); }
function prevSlide() { goToSlide(currentSlide - 1); }

function renderInstructorNotes() {
    const body = document.getElementById("instructor-body");
    const notes = SLIDES[currentSlide].notes;
    body.innerHTML = notes || `<p class="muted">Sin notas para esta diapositiva.</p>`;
}

function toggleInstructorMode() {
    instructorMode = !instructorMode;
    document.getElementById("instructor-panel").classList.toggle("open", instructorMode);
    document.getElementById("btn-instructor").classList.toggle("active", instructorMode);
}

function openIndex() {
    buildIndexIfNeeded();
    refreshIndexHighlight();
    document.getElementById("index-panel").classList.add("open");
}
function closeIndex() {
    document.getElementById("index-panel").classList.remove("open");
}
function toggleIndex() {
    const panel = document.getElementById("index-panel");
    if (panel.classList.contains("open")) closeIndex(); else openIndex();
}

let indexBuilt = false;
function buildIndexIfNeeded() {
    if (indexBuilt) return;
    buildIndex();
    indexBuilt = true;
}

function initRepoAndQr() {
    const url = SESSION_CONFIG.repositoryUrl;
    const isConfigured = url && url !== "COLOCAR_AQUI_URL";

    const repoText = document.getElementById("repo-url-text");
    const repoBtn = document.getElementById("btn-open-repo");
    const qrContainer = document.getElementById("qr-container");
    const qrWarning = document.getElementById("qr-warning");

    if (isConfigured) {
        repoText.textContent = url;
        repoBtn.href = url;
        if (window.QRCode) {
            new QRCode(qrContainer, {
                text: url,
                width: 188,
                height: 188,
                colorDark: "#0a0d12",
                colorLight: "#ffffff",
                correctLevel: QRCode.CorrectLevel.M
            });
        }
    } else {
        repoText.textContent = "REPOSITORY_URL sin configurar";
        repoBtn.href = "#";
        repoBtn.setAttribute("aria-disabled", "true");
        qrWarning.style.display = "block";
    }
}

function setupKeyboard() {
    window.addEventListener("keydown", (e) => {
        if (document.getElementById("index-panel").classList.contains("open")) {
            if (e.key === "Escape") { closeIndex(); e.preventDefault(); }
            return;
        }
        switch (e.key) {
            case "ArrowRight":
            case " ":
                nextSlide();
                e.preventDefault();
                break;
            case "ArrowLeft":
                prevSlide();
                e.preventDefault();
                break;
            case "Home":
                goToSlide(0);
                e.preventDefault();
                break;
            case "End":
                goToSlide(totalSlides - 1);
                e.preventDefault();
                break;
            case "i":
            case "I":
                toggleInstructorMode();
                break;
            case "g":
            case "G":
                toggleIndex();
                break;
            case "Escape":
                if (instructorMode) toggleInstructorMode();
                break;
        }
    });
}

function setupControls() {
    document.getElementById("btn-prev").addEventListener("click", prevSlide);
    document.getElementById("btn-next").addEventListener("click", nextSlide);
    document.getElementById("btn-instructor").addEventListener("click", toggleInstructorMode);
    document.getElementById("btn-index").addEventListener("click", toggleIndex);
    document.getElementById("btn-close-index").addEventListener("click", closeIndex);
    document.getElementById("index-panel").addEventListener("click", (e) => {
        if (e.target.id === "index-panel") closeIndex();
    });
}

document.addEventListener("DOMContentLoaded", () => {
    buildSlides();
    buildIndexIfNeeded();
    setupControls();
    setupKeyboard();
    initRepoAndQr();
    showSlide(0);
});
