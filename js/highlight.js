/*
 * Resaltador de sintaxis minimalista, sin dependencias externas.
 * Soporta: js, bash, json, env. Cualquier otro lenguaje se muestra
 * como texto plano (escapado).
 */

function escapeHtml(str) {
    return str
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
}

function highlightJS(code) {
    const pattern = /(\/\/.*$)|(\/\*[\s\S]*?\*\/)|(`(?:\\[\s\S]|[^`\\])*`)|("(?:\\.|[^"\\])*")|('(?:\\.|[^'\\])*')|(\b\d+(?:\.\d+)?\b)|\b(const|let|var|function|return|if|else|for|while|async|await|try|catch|finally|import|from|export|default|new|class|extends|typeof|instanceof|of|in|break|continue|null|undefined|true|false|this|throw|do|switch|case|static|get|set)\b|([A-Za-z_$][\w$]*)(?=\s*\()/gm;

    let out = "";
    let lastIndex = 0;
    let m;
    while ((m = pattern.exec(code)) !== null) {
        out += escapeHtml(code.slice(lastIndex, m.index));
        if (m[1] || m[2]) out += `<span class="tok-com">${escapeHtml(m[1] || m[2])}</span>`;
        else if (m[3] || m[4] || m[5]) out += `<span class="tok-str">${escapeHtml(m[3] || m[4] || m[5])}</span>`;
        else if (m[6]) out += `<span class="tok-num">${escapeHtml(m[6])}</span>`;
        else if (m[7]) out += `<span class="tok-kw">${escapeHtml(m[7])}</span>`;
        else if (m[8]) out += `<span class="tok-func">${escapeHtml(m[8])}</span>`;
        lastIndex = pattern.lastIndex;
    }
    out += escapeHtml(code.slice(lastIndex));
    return out;
}

function highlightBash(code) {
    const pattern = /(#.*$)|("(?:\\.|[^"\\])*")|('(?:\\.|[^'\\])*')|(\$\{[^}]+\}|\$[A-Za-z_][A-Za-z0-9_]*)/gm;
    let out = "";
    let lastIndex = 0;
    let m;
    while ((m = pattern.exec(code)) !== null) {
        out += escapeHtml(code.slice(lastIndex, m.index));
        if (m[1]) out += `<span class="tok-com">${escapeHtml(m[1])}</span>`;
        else if (m[2] || m[3]) out += `<span class="tok-str">${escapeHtml(m[2] || m[3])}</span>`;
        else if (m[4]) out += `<span class="tok-num">${escapeHtml(m[4])}</span>`;
        lastIndex = pattern.lastIndex;
    }
    out += escapeHtml(code.slice(lastIndex));
    return out;
}

function highlightEnv(code) {
    return code.split("\n").map((line) => {
        if (/^\s*#/.test(line)) return `<span class="tok-com">${escapeHtml(line)}</span>`;
        const idx = line.indexOf("=");
        if (idx === -1) return escapeHtml(line);
        const key = line.slice(0, idx);
        const value = line.slice(idx + 1);
        return `<span class="tok-kw">${escapeHtml(key)}</span><span class="tok-punc">=</span><span class="tok-str">${escapeHtml(value)}</span>`;
    }).join("\n");
}

function highlightJSON(code) {
    const pattern = /("(?:\\.|[^"\\])*")(\s*:)?|(\b-?\d+(?:\.\d+)?\b)|\b(true|false|null)\b/g;
    let out = "";
    let lastIndex = 0;
    let m;
    while ((m = pattern.exec(code)) !== null) {
        out += escapeHtml(code.slice(lastIndex, m.index));
        if (m[1]) {
            const cls = m[2] ? "tok-func" : "tok-str";
            out += `<span class="${cls}">${escapeHtml(m[1])}</span>${m[2] ? escapeHtml(m[2]) : ""}`;
        } else if (m[3]) {
            out += `<span class="tok-num">${escapeHtml(m[3])}</span>`;
        } else if (m[4]) {
            out += `<span class="tok-kw">${escapeHtml(m[4])}</span>`;
        }
        lastIndex = pattern.lastIndex;
    }
    out += escapeHtml(code.slice(lastIndex));
    return out;
}

function highlightCode(code, lang) {
    switch (lang) {
        case "js":
        case "javascript":
            return highlightJS(code);
        case "bash":
        case "sh":
            return highlightBash(code);
        case "env":
        case "gitignore":
            return highlightEnv(code);
        case "json":
            return highlightJSON(code);
        default:
            return escapeHtml(code);
    }
}
