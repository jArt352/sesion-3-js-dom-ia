/*
 * Funciones auxiliares para construir el contenido HTML de cada
 * diapositiva a partir de datos simples (arrays de strings, etc).
 * Mantienen el archivo slides-data.js legible y consistente.
 */

function codeBlock(code, lang, label) {
    const trimmed = code.replace(/^\n/, "").replace(/\n$/, "");
    const html = highlightCode(trimmed, lang);
    return `<div class="code-block">
        <div class="code-block-header"><span>${escapeHtml(label || lang.toUpperCase())}</span></div>
        <pre><code>${html}</code></pre>
    </div>`;
}

function promptBox(text, opts) {
    opts = opts || {};
    const label = opts.label || "Prompt a la IA";
    const bad = opts.bad ? " bad" : "";
    return `<div class="prompt-box${bad}">
        <div class="prompt-label">${bad ? "&#10007;" : "&#10148;"} ${escapeHtml(label)}</div>
        <pre>${escapeHtml(text.replace(/^\n/, "").replace(/\n$/, ""))}</pre>
    </div>`;
}

function flow(steps, opts) {
    opts = opts || {};
    const centered = opts.centered ? " centered" : "";
    const parts = steps.map((s, i) => {
        const isLast = i === steps.length - 1;
        const strong = typeof s === "object" ? s.strong : false;
        const label = typeof s === "object" ? s.text : s;
        const stepHtml = `<div class="flow-step${strong ? " strong" : ""}">${escapeHtml(label)}</div>`;
        const arrow = isLast ? "" : `<div class="flow-arrow">&#8595;</div>`;
        return stepHtml + arrow;
    }).join("");
    return `<div class="flow${centered}">${parts}</div>`;
}

function flowHorizontal(steps) {
    const parts = steps.map((s, i) => {
        const isLast = i === steps.length - 1;
        const strong = typeof s === "object" ? s.strong : false;
        const label = typeof s === "object" ? s.text : s;
        const stepHtml = `<div class="flow-step${strong ? " strong" : ""}">${escapeHtml(label)}</div>`;
        const arrow = isLast ? "" : `<div class="flow-arrow">&#8594;</div>`;
        return stepHtml + arrow;
    }).join("");
    return `<div class="flow-horizontal">${parts}</div>`;
}

function compare(beforeLabel, beforeHtml, afterLabel, afterHtml) {
    return `<div class="compare">
        <div class="compare-col before">
            <div class="compare-label">${escapeHtml(beforeLabel)}</div>
            ${beforeHtml}
        </div>
        <div class="compare-col after">
            <div class="compare-label">${escapeHtml(afterLabel)}</div>
            ${afterHtml}
        </div>
    </div>`;
}

function checklist(items) {
    const lis = items.map((i) => `<li><span class="box"></span><span>${escapeHtml(i)}</span></li>`).join("");
    return `<ul class="checklist">${lis}</ul>`;
}

function dataTable(headers, rows, highlightRow) {
    const th = headers.map((h) => `<th>${escapeHtml(h)}</th>`).join("");
    const trs = rows.map((r, idx) => {
        const tds = r.map((c, ci) => `<td class="${ci === 0 ? "mono" : ""}">${escapeHtml(c)}</td>`).join("");
        return `<tr class="${idx === highlightRow ? "highlight" : ""}">${tds}</tr>`;
    }).join("");
    return `<table class="data-table"><thead><tr>${th}</tr></thead><tbody>${trs}</tbody></table>`;
}

function questionList(questions) {
    const lis = questions.map((q) => `<div class="q">${escapeHtml(q)}</div>`).join("");
    return `<div class="question-list">${lis}</div>`;
}

function pausaBanner() {
    return `<div class="pausa-banner">&#9632; Pausa y piensa</div>`;
}

function sectionLabel(text) {
    return `<div class="section-label">${escapeHtml(text)}</div>`;
}

function card(title, bodyHtml, variant) {
    return `<div class="card${variant ? " " + variant : ""}">
        <div class="card-title">${escapeHtml(title)}</div>
        <div>${bodyHtml}</div>
    </div>`;
}

function noteBlock(label, text, cls) {
    return `<div class="n-block"><div class="n-label">${escapeHtml(label)}</div><div class="${cls || ""}">${text}</div></div>`;
}
