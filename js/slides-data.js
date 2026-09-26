/*
 * Contenido de las 40 diapositivas de la Sesion 3.
 * Cada objeto: { bloque, title, subtitle, layout, body, notes }
 * "layout" es opcional: "cover" o "closing" activan estilos especiales.
 */

const SLIDES = [

// ============================================================
// BLOQUE 1 - CONTINUIDAD CON LA CLASE ANTERIOR
// ============================================================

{
    bloque: "Bloque 1 - Continuidad",
    title: SESSION_CONFIG.title,
    subtitle: SESSION_CONFIG.subtitle,
    layout: "cover",
    body: `
        <div class="cover-wrap">
            <div class="cover-left">
                <div class="cover-eyebrow">${SESSION_CONFIG.subject} &middot; ${SESSION_CONFIG.sessionLabel}</div>
                <h1>${SESSION_CONFIG.title}</h1>
                <div class="cover-subtitle">${SESSION_CONFIG.subtitle}</div>
                <div class="cover-meta">
                    <div class="item"><div class="label">Fecha</div><div class="value">${SESSION_CONFIG.date}</div></div>
                    <div class="item"><div class="label">Duracion</div><div class="value">${SESSION_CONFIG.duration}</div></div>
                </div>
                <div class="section-label">Descarga el proyecto de la clase</div>
                <ol class="cover-steps">
                    <li>Escanea el QR</li>
                    <li>Abre el repositorio</li>
                    <li>Clona el proyecto</li>
                    <li>Abre el proyecto en VS Code</li>
                    <li>Verifica que funciona antes de modificarlo</li>
                </ol>
                <div class="cover-tagline">Primero ejecutamos. Despues modificamos.</div>
            </div>
            <div class="cover-right">
                <div id="qr-container" class="qr-box"></div>
                <div class="repo-url" id="repo-url-text"></div>
                <a class="btn-repo" id="btn-open-repo" href="#" target="_blank" rel="noopener">Abrir repositorio</a>
                <div class="qr-warning" id="qr-warning" style="display:none;">
                    REPOSITORY_URL no configurada.<br>Edita js/config.js
                </div>
            </div>
        </div>
    `,
    notes: noteBlock("Que explicar", "Antes de iniciar, verifica que la URL del repositorio en <code>js/config.js</code> este configurada y que el QR sea legible desde el fondo del salon.") +
           noteBlock("Cuando detenerse", "Espera a que la mayoria de estudiantes confirme que clono el proyecto antes de continuar a la diapositiva 2.") +
           noteBlock("Uso de IA", "Aun no se usa IA en esta diapositiva.", "n-ia-no")
},

{
    bloque: "Bloque 1 - Continuidad",
    title: "Que hicimos la clase anterior",
    body: `
        ${flowHorizontal(["HTML", "+", "CSS", "Landing Page"])}
        <div style="margin-top:32px;" class="grid-2">
            <div class="card">
                <div class="card-title">Lo que ya existe</div>
                <ul class="plain">
                    <li><code>index.html</code> con la estructura del landing</li>
                    <li><code>styles.css</code> con toda la apariencia visual</li>
                    <li>Un formulario de contacto con: nombre, email y mensaje</li>
                </ul>
            </div>
            <div class="card amber">
                <div class="card-title">Pregunta para el grupo</div>
                <p class="lede" style="font-size:1.15rem;">Que pasa si presionamos "Enviar" en ese formulario ahora mismo?</p>
                <p class="muted">Respuesta: nada. El formulario solo tiene apariencia, no comportamiento.</p>
            </div>
        </div>
    `,
    notes: noteBlock("Que preguntar", "Haz clic en Enviar sobre el proyecto real, proyectado en pantalla, antes de decir la respuesta. Deja que el silencio confirme la falta de comportamiento.") +
           noteBlock("Error comun esperado", "Algunos estudiantes creeran que el formulario ya envia datos porque visualmente parece completo.") +
           noteBlock("Uso de IA", "Aun no se usa IA en esta diapositiva.", "n-ia-no")
},

{
    bloque: "Bloque 1 - Continuidad",
    title: "El reto de hoy",
    body: `
        ${compare(
            "Antes",
            flow(["Formulario", "Nada"], { centered: true }),
            "Despues",
            flow(["Formulario", "JavaScript", "API", "Backend", "Resend", { text: "Correo", strong: true }], { centered: true })
        )}
    `,
    notes: noteBlock("Que explicar", "Este es el mapa completo de la sesion. Vuelve a esta diapositiva cuando el grupo se sienta perdido: siempre pueden ubicar en que parte del recorrido estan.") +
           noteBlock("Cuando usar IA", "Se explicara mas adelante cada eslabon; por ahora es solo el mapa mental.", "n-ia-no")
},

// ============================================================
// BLOQUE 2 - DESARROLLO CON IA
// ============================================================

{
    bloque: "Bloque 2 - Desarrollo con IA",
    title: "Como trabajaremos con IA",
    body: `
        ${flow(["Nosotros", "Definimos el problema", { text: "IA", strong: true }, "Propone una solucion", "Nosotros", "Probamos y verificamos"], { centered: true })}
        <div class="card accent" style="margin-top:28px; max-width:820px;">
            <div class="card-title">Idea central</div>
            <p style="margin:0;">El estudiante sigue siendo responsable del codigo. La IA propone; nosotros decidimos, probamos y verificamos.</p>
        </div>
    `,
    notes: noteBlock("Que explicar", "Deja claro desde ahora que la responsabilidad final del codigo es de quien lo integra al proyecto, no de la IA que lo genero.") +
           noteBlock("Pregunta para el grupo", "Si la IA se equivoca, quien es responsable del error en produccion?") +
           noteBlock("Uso de IA", "Este es el marco de referencia para todo el resto de la clase.", "n-ia-yes")
},

{
    bloque: "Bloque 2 - Desarrollo con IA",
    title: "El ciclo de desarrollo asistido por IA",
    body: `
        <ol class="plain" style="columns:2; column-gap:48px; font-size:1.15rem;">
            <li>Problema</li>
            <li>Contexto</li>
            <li>Prompt</li>
            <li>Codigo</li>
            <li>Comprension</li>
            <li>Ejecucion</li>
            <li>Prueba</li>
            <li>Error</li>
            <li>Correccion</li>
            <li>Verificacion</li>
        </ol>
    `,
    notes: noteBlock("Que explicar", "Recorre cada etapa con un ejemplo breve. Insiste en que 'Comprension' ocurre ANTES de 'Ejecucion': no se ejecuta codigo que no se entiende.") +
           noteBlock("Error comun esperado", "Saltarse directamente de 'Prompt' a 'Ejecucion', omitiendo comprension y prueba.") +
           noteBlock("Cuando detenerse", "Si notas que el grupo quiere copiar y pegar sin leer, detente y repite este ciclo completo en voz alta.")
},

{
    bloque: "Bloque 2 - Desarrollo con IA",
    title: "Un mal prompt",
    body: `
        ${promptBox("Haz funcionar mi formulario.", { bad: true, label: "Prompt insuficiente" })}
        <div class="section-label">Por que falla</div>
        <ul class="plain">
            <li>No dice que tecnologias se estan usando</li>
            <li>No indica que archivos existen ni cuales se pueden modificar</li>
            <li>No especifica que campos tiene el formulario</li>
            <li>No dice a donde deben enviarse los datos</li>
            <li>Obliga a la IA a inventar suposiciones</li>
        </ul>
    `,
    notes: noteBlock("Que preguntar", "Pide a un estudiante que lea el prompt en voz alta y prediga que tipo de respuesta genérica daria la IA con tan poca informacion.") +
           noteBlock("Uso de IA", "Puedes probarlo en vivo para mostrar una respuesta generica o con suposiciones incorrectas.", "n-ia-yes")
},

{
    bloque: "Bloque 2 - Desarrollo con IA",
    title: "Un buen prompt",
    body: `
        ${promptBox(
            'Tengo un landing desarrollado con HTML, CSS y JavaScript.\n\nExiste un formulario con:\n- nombre\n- email\n- mensaje\n\nQuiero capturar el evento submit sin recargar\nla pagina, obtener los valores de los campos y\nenviarlos posteriormente a una API mediante POST.\n\nPrimero analiza la estructura existente y no\nmodifiques el HTML ni el CSS.\nExplicame que archivos debo modificar y por que.',
            { label: "Prompt contextualizado" }
        )}
        <div class="section-label">Por que funciona</div>
        <ul class="plain">
            <li>Describe la tecnologia y el estado actual del proyecto</li>
            <li>Especifica los campos exactos del formulario</li>
            <li>Define el comportamiento esperado (submit sin recargar, POST)</li>
            <li>Pone un limite explicito: no modificar HTML ni CSS</li>
            <li>Pide explicacion antes que codigo</li>
        </ul>
    `,
    notes: noteBlock("Que explicar", "Compara linea por linea contra el mal prompt de la diapositiva anterior. Cada linea de este prompt resuelve una carencia del anterior.") +
           noteBlock("Cuando usar IA", "Este es el estilo de prompt que se pedira durante todo el reto final del bloque 17.", "n-ia-yes")
},

// ============================================================
// BLOQUE 3 - PREPARACION
// ============================================================

{
    bloque: "Bloque 3 - Preparacion",
    title: "Herramientas de la sesion",
    body: `
        <div class="grid-3">
            <div class="card"><div class="card-title">VS Code</div><p class="muted">Editor de codigo</p></div>
            <div class="card"><div class="card-title">Navegador</div><p class="muted">Ejecucion y depuracion</p></div>
            <div class="card"><div class="card-title">Node.js + npm</div><p class="muted">Entorno y paquetes del backend</p></div>
            <div class="card"><div class="card-title">Git y GitHub</div><p class="muted">Control de versiones</p></div>
            <div class="card"><div class="card-title">Asistente de IA</div><p class="muted">Herramienta de IA del curso</p></div>
            <div class="card"><div class="card-title">Cuenta de Resend</div><p class="muted">Envio de correo real</p></div>
        </div>
        ${codeBlock('node --version\nnpm --version\ngit --version', "bash", "Verificacion en terminal")}
    `,
    notes: noteBlock("Que comprobar", "Antes de avanzar, cada estudiante debe ejecutar los tres comandos y obtener una version valida, no un error de 'comando no encontrado'.") +
           noteBlock("Error comun esperado", "Estudiantes con Node.js no instalado o con una version muy antigua.") +
           noteBlock("Cuando detenerse", "No continues con la clonacion del proyecto hasta que todos tengan Node y Git funcionando.")
},

{
    bloque: "Bloque 3 - Preparacion",
    title: "Clonar el proyecto",
    body: `
        ${codeBlock('git clone URL\ncd proyecto\ncode .', "bash", "Terminal")}
        <div class="grid-2" style="margin-top:12px;">
            <div class="card"><div class="card-title"><code>git clone URL</code></div><p class="muted">Descarga una copia local del repositorio remoto.</p></div>
            <div class="card"><div class="card-title"><code>cd proyecto</code></div><p class="muted">Entra a la carpeta del proyecto recien clonado.</p></div>
        </div>
        <div class="card" style="margin-top:12px;"><div class="card-title"><code>code .</code></div><p class="muted">Abre la carpeta actual en Visual Studio Code.</p></div>
    `,
    notes: noteBlock("Que comprobar", "Pide a cada estudiante que confirme visualmente index.html y styles.css dentro de VS Code antes de continuar.") +
           noteBlock("Uso de IA", "Si el comando 'code .' no funciona, pueden pedirle a la IA que explique como agregar VS Code al PATH del sistema.", "n-ia-yes")
},

// ============================================================
// BLOQUE 4 - JAVASCRIPT Y DOM
// ============================================================

{
    bloque: "Bloque 4 - JavaScript y DOM",
    title: "HTML, CSS y JavaScript",
    body: `
        <div class="grid-3">
            <div class="card accent"><div class="card-title">HTML</div><p class="muted">Estructura</p></div>
            <div class="card accent"><div class="card-title">CSS</div><p class="muted">Apariencia</p></div>
            <div class="card accent"><div class="card-title">JavaScript</div><p class="muted">Comportamiento</p></div>
        </div>
        <p class="lede" style="margin-top:28px;">Hoy trabajamos exclusivamente en la tercera capa: el comportamiento.</p>
    `,
    notes: noteBlock("Que explicar", "Usa una analogia fisica: HTML es el esqueleto, CSS es la ropa, JavaScript es el sistema nervioso que reacciona a estimulos.")
},

{
    bloque: "Bloque 4 - JavaScript y DOM",
    title: "Que es el DOM",
    body: `
        <p class="lede">El DOM es la representacion que el navegador crea de nuestro HTML y que permite que JavaScript consulte y modifique sus elementos.</p>
        ${flow(["HTML", "Navegador", "DOM", "JavaScript"], { centered: true })}
    `,
    notes: noteBlock("Que preguntar", "Antes de mostrar querySelector, pregunta: si JavaScript necesita modificar el formulario, como creen que puede encontrarlo? Escucha respuestas antes de continuar.") +
           noteBlock("Error comun esperado", "Confundir el DOM con el archivo HTML en si mismo; el DOM es una estructura en memoria, no el archivo de texto.")
},

{
    bloque: "Bloque 4 - JavaScript y DOM",
    title: "La IA como tutor",
    body: `
        ${promptBox(
            'Explicame que es el DOM como si nunca hubiera\nprogramado JavaScript.\n\nDespues dame un ejemplo utilizando\ndocument.querySelector().\n\nNo generes codigo innecesario.\nExplica primero el concepto.'
        )}
        <div class="card ok" style="margin-top:18px;">
            <div class="card-title">Idea clave</div>
            <p style="margin:0;">La IA puede ser utilizada como tutor, no solamente como generador de codigo.</p>
        </div>
    `,
    notes: noteBlock("Que explicar", "Ejecuta este prompt en vivo si el tiempo lo permite y resume la respuesta en dos o tres frases en el pizarron.") +
           noteBlock("Uso de IA", "Este es el primer ejemplo explicito del rol de tutor de la IA en la sesion.", "n-ia-yes")
},

{
    bloque: "Bloque 4 - JavaScript y DOM",
    title: "document.querySelector()",
    body: `
        ${codeBlock('const form = document.querySelector("#contactForm");', "js", "app.js")}
        <ul class="plain">
            <li><code class="tok-func" style="font-family:var(--font-mono);">document</code> representa toda la pagina cargada en el navegador</li>
            <li><code>.querySelector("#contactForm")</code> busca el primer elemento que coincida con ese selector CSS</li>
            <li>El resultado se guarda en la constante <code>form</code> para reutilizarlo despues</li>
        </ul>
        <div class="card" style="margin-top:12px;">
            <div class="card-title">Pedirle a la IA que lo explique</div>
            <p class="muted" style="margin:0;">"Explicame esta linea de codigo palabra por palabra: <code>const form = document.querySelector('#contactForm');</code>"</p>
        </div>
    `,
    notes: noteBlock("Que comprobar", "Cada estudiante debe ejecutar console.log(form) en la consola del navegador y ver el elemento real, no undefined ni null.") +
           noteBlock("Error comun esperado", "Olvidar el simbolo # al seleccionar por id, o escribir mal el id del formulario.")
},

// ============================================================
// BLOQUE 5 - EVENTOS
// ============================================================

{
    bloque: "Bloque 5 - Eventos",
    title: "Eventos en el navegador",
    body: `
        <div class="grid-2">
            <div class="card"><div class="card-title"><code>click</code></div><p class="muted">El usuario hace clic sobre un elemento</p></div>
            <div class="card"><div class="card-title"><code>submit</code></div><p class="muted">Se envia un formulario</p></div>
            <div class="card"><div class="card-title"><code>input</code></div><p class="muted">El valor de un campo cambia mientras se escribe</p></div>
            <div class="card"><div class="card-title"><code>change</code></div><p class="muted">El valor de un campo cambia y pierde el foco</p></div>
        </div>
    `,
    notes: noteBlock("Que explicar", "Demuestra la diferencia entre input y change escribiendo en un campo de texto en vivo, observando la consola.")
},

{
    bloque: "Bloque 5 - Eventos",
    title: "Pausa y piensa",
    body: `
        ${pausaBanner()}
        ${codeBlock('form.addEventListener("submit", (event) => {\n    event.preventDefault();\n});', "js", "app.js")}
        ${questionList([
            "Que evento estamos escuchando?",
            "Que significa submit?",
            "Que creen que hace preventDefault()?"
        ])}
    `,
    notes: noteBlock("Que hacer", "No reveles la respuesta todavia. Da 1 a 2 minutos para que discutan en parejas antes de avanzar a la siguiente diapositiva.") +
           noteBlock("Cuando detenerse", "Si nadie se anima a responder, pide que alguien elimine mentalmente preventDefault() y prediga que pasaria al enviar el formulario.")
},

{
    bloque: "Bloque 5 - Eventos",
    title: "Respuesta: addEventListener y preventDefault",
    body: `
        ${codeBlock('form.addEventListener("submit", (event) => {\n    event.preventDefault();\n});', "js", "app.js")}
        <ul class="plain">
            <li><code>addEventListener</code> registra una funcion que se ejecutara cuando ocurra el evento indicado</li>
            <li><code>"submit"</code> es el nombre del evento que dispara el navegador al enviar el formulario</li>
            <li>La funcion flecha recibe un parametro <code>event</code> con informacion del evento ocurrido</li>
            <li><code>event.preventDefault()</code> cancela el comportamiento por defecto del navegador: recargar la pagina</li>
        </ul>
        ${promptBox(
            'Tengo este codigo:\n\n[PEGAR CODIGO]\n\nExplicame linea por linea:\n1. Que hace.\n2. Que problema resuelve.\n3. Que ocurriria si elimino preventDefault().\n4. No modifiques el codigo.'
        )}
    `,
    notes: noteBlock("Que explicar", "Pide que un estudiante quite preventDefault() en su propio editor, pruebe el formulario y observe la recarga de pagina. Es el error mas ilustrativo de la sesion.") +
           noteBlock("Uso de IA", "Pedir explicacion linea por linea es una habilidad de desarrollo con IA en si misma, no solo un paso previo.", "n-ia-yes")
},

// ============================================================
// BLOQUE 6 - FORMULARIOS
// ============================================================

{
    bloque: "Bloque 6 - Formularios",
    title: "Capturar los datos del formulario",
    body: `
        ${codeBlock('const name =\n    document.querySelector("#name").value;\n\nconst email =\n    document.querySelector("#email").value;\n\nconst message =\n    document.querySelector("#message").value;', "js", "app.js")}
        <p class="muted"><code>.value</code> obtiene el contenido actual escrito dentro de un campo de formulario.</p>
    `,
    notes: noteBlock("Que comprobar", "Cada estudiante debe imprimir name, email y message con console.log y verificar que reflejan lo escrito en el formulario real.") +
           noteBlock("Error comun esperado", "Usar los ids incorrectos y obtener null al llamar a .value sobre null.")
},

{
    bloque: "Bloque 6 - Formularios",
    title: "Crear un objeto",
    body: `
        ${codeBlock('const contact = {\n    name,\n    email,\n    message\n};', "js", "app.js")}
        <p class="muted">Cuando el nombre de la propiedad coincide con el de la variable, JavaScript permite esta forma abreviada.</p>
    `,
    notes: noteBlock("Que explicar", "Muestra la forma larga equivalente { name: name, email: email, message: message } para que la abreviacion tenga sentido.")
},

{
    bloque: "Bloque 6 - Formularios",
    title: "Pedir codigo a la IA correctamente",
    body: `
        ${promptBox(
            'A partir del formulario existente,\ncrea unicamente el codigo JavaScript\nnecesario para capturar:\n\nname\nemail\nmessage\n\nNo modifiques HTML ni CSS.\n\nExplica el codigo generado\nantes de mostrarlo.'
        )}
        ${flowHorizontal(["Ejecutar", "Revisar", "Probar"])}
    `,
    notes: noteBlock("Que comprobar", "Antes de aceptar el codigo generado, cada estudiante debe identificar cuales archivos toco la IA. Si toco HTML o CSS, se rechaza y se corrige el prompt.") +
           noteBlock("Uso de IA", "Este es el patron completo: pedir, ejecutar, revisar, probar.", "n-ia-yes")
},

// ============================================================
// BLOQUE 7 - JSON
// ============================================================

{
    bloque: "Bloque 7 - JSON",
    title: "Que es JSON",
    body: `
        ${codeBlock('{\n    "name": "Juan",\n    "email": "juan@gmail.com",\n    "message": "Hola"\n}', "json", "JSON")}
        <p class="lede">JSON es un formato de texto que permite representar datos estructurados para intercambiarlos entre sistemas distintos.</p>
    `,
    notes: noteBlock("Que explicar", "Aclara que JSON no es exclusivo de JavaScript: es un formato universal usado por casi cualquier lenguaje o API.")
},

{
    bloque: "Bloque 7 - JSON",
    title: "JSON.stringify y JSON.parse",
    body: `
        ${codeBlock('JSON.stringify(contact);', "js", "Objeto a JSON")}
        ${codeBlock('JSON.parse(data);', "js", "JSON a objeto")}
        ${flow(["Objeto", "JSON.stringify()", "JSON", "JSON.parse()", "Objeto"], { centered: true })}
    `,
    notes: noteBlock("Que explicar", "Enfatiza que fetch() con body necesita un string, por eso stringify es obligatorio antes de enviar un objeto por la red.")
},

// ============================================================
// BLOQUE 8 - LOCALSTORAGE
// ============================================================

{
    bloque: "Bloque 8 - LocalStorage",
    title: "Persistencia local",
    body: `
        ${codeBlock('localStorage.setItem(\n    "lastContact",\n    JSON.stringify(contact)\n);', "js", "app.js")}
        <div class="card amber" style="margin-top:16px;">
            <div class="card-title">Importante</div>
            <p style="margin:0;">LocalStorage NO reemplaza una base de datos. Los datos quedan guardados unicamente en el navegador de ese usuario.</p>
        </div>
    `,
    notes: noteBlock("Que comprobar", "Pide abrir las DevTools, pestana Application, y localizar la clave lastContact almacenada realmente.") +
           noteBlock("Error comun esperado", "Creer que localStorage sincroniza datos entre dispositivos o usuarios distintos.")
},

// ============================================================
// BLOQUE 9 - API Y HTTP
// ============================================================

{
    bloque: "Bloque 9 - API y HTTP",
    title: "Que es una API",
    body: `
        ${flow(["Aplicacion", "API", "Otro sistema"], { centered: true })}
        <div class="section-label">Cliente y servidor</div>
        ${codeBlock('Cliente\n  |\n  | Request\n  v\nServidor\n  |\n  | Response\n  v\nCliente', "text", "Request / Response")}
        <ul class="plain">
            <li>URL: direccion del recurso</li>
            <li>Metodo: la accion que se quiere realizar</li>
            <li>Headers: metadatos de la peticion</li>
            <li>Body: los datos enviados</li>
            <li>Response y status code: la respuesta del servidor</li>
        </ul>
    `,
    notes: noteBlock("Que explicar", "Usa una analogia cotidiana: pedir comida por telefono. La URL es el restaurante, el metodo es 'ordenar', el body es el pedido, la respuesta es la comida o un error.")
},

{
    bloque: "Bloque 9 - API y HTTP",
    title: "Metodos HTTP",
    body: `
        ${dataTable(
            ["Metodo", "Proposito"],
            [["GET", "Obtener"], ["POST", "Crear / enviar"], ["PUT", "Reemplazar"], ["PATCH", "Modificar"], ["DELETE", "Eliminar"]],
            1
        )}
        <p class="lede" style="margin-top:20px;">Nuestro formulario utilizara <strong>POST</strong>.</p>
    `,
    notes: noteBlock("Que preguntar", "Pregunta por que el formulario de contacto no deberia usar GET (los datos quedarian visibles en la URL).")
},

// ============================================================
// BLOQUE 10 - FETCH
// ============================================================

{
    bloque: "Bloque 10 - fetch",
    title: "fetch()",
    body: `
        ${codeBlock('const response = await fetch(url);', "js", "app.js")}
        <p class="muted">fetch() envia una peticion HTTP hacia la URL indicada y devuelve una respuesta cuando el servidor contesta.</p>
    `,
    notes: noteBlock("Que explicar", "Adelanta que fetch por si solo no basta: en la siguiente diapositiva se agregan method, headers y body para un POST real.")
},

{
    bloque: "Bloque 10 - fetch",
    title: "Pedir fetch a la IA",
    body: `
        ${promptBox(
            'Tengo un objeto JavaScript llamado contact.\n\nNecesito enviarlo a:\nhttp://localhost:3000/api/contact\n\nmediante POST.\n\nUtiliza fetch y JSON.\n\nNo agregues librerias.\n\nExplicame:\n- method\n- headers\n- body\n- JSON.stringify'
        )}
    `,
    notes: noteBlock("Que comprobar", "Verifica que el codigo generado use exactamente esa URL local y no una inventada por la IA.") +
           noteBlock("Uso de IA", "Buen ejemplo de restriccion explicita: 'no agregues librerias' evita dependencias innecesarias.", "n-ia-yes")
},

// ============================================================
// BLOQUE 11 - ASINCRONIA
// ============================================================

{
    bloque: "Bloque 11 - Asincronia",
    title: "Por que await",
    body: `
        ${flow(["Enviar solicitud", "Esperar servidor", "Recibir respuesta", "Continuar"], { centered: true })}
        <ul class="plain" style="margin-top:20px;">
            <li><code>async</code> marca una funcion que puede contener operaciones que toman tiempo</li>
            <li><code>await</code> pausa la ejecucion de esa funcion hasta que la operacion termine</li>
            <li>Una <strong>Promise</strong> representa un valor que estara disponible en el futuro</li>
        </ul>
    `,
    notes: noteBlock("Que explicar", "Compara con pedir un cafe: pides (envias la solicitud), esperas en la fila (await) y recibes el cafe (respuesta) antes de sentarte a tomarlo (continuar).") +
           noteBlock("Error comun esperado", "Olvidar await y trabajar con la Promise en lugar del valor resuelto.")
},

// ============================================================
// BLOQUE 12 - ERRORES
// ============================================================

{
    bloque: "Bloque 12 - Manejo de errores",
    title: "try / catch",
    body: `
        ${codeBlock('try {\n\n    const response = await fetch(url);\n\n} catch (error) {\n\n    console.error(error);\n\n}', "js", "app.js")}
        <p class="muted">El bloque catch se ejecuta cuando algo dentro de try falla, por ejemplo si no hay conexion con el servidor.</p>
    `,
    notes: noteBlock("Que explicar", "Aclara que try/catch no atrapa errores HTTP como 404 o 500 por si solo: fetch solo lanza un error de red, no por status code.")
},

{
    bloque: "Bloque 12 - Manejo de errores",
    title: "IA para depuracion",
    body: `
        <div class="card danger" style="margin-bottom:16px;">
            <div class="card-title">Error observado en el navegador</div>
            <p style="margin:0; font-family:var(--font-mono);">Failed to fetch</p>
        </div>
        ${promptBox(
            'Este es mi codigo:\n\n[PEGAR CODIGO]\n\nEl navegador muestra:\n\nFailed to fetch\n\nAnaliza el problema.\n\n1. Identifica las posibles causas.\n2. No inventes informacion.\n3. Indica que debo comprobar primero.\n4. Despues propone una correccion.'
        )}
        <div class="card amber" style="margin-top:16px;">
            <div class="card-title">Regla de oro</div>
            <p style="margin:0;">Nunca aceptar automaticamente la primera solucion de la IA.</p>
        </div>
    `,
    notes: noteBlock("Que explicar", "Lista en voz alta las causas mas probables de 'Failed to fetch': servidor apagado, puerto incorrecto, CORS o error de escritura en la URL.") +
           noteBlock("Uso de IA", "Modela el escepticismo: pide una segunda opinion o verifica cada causa antes de aplicar el cambio sugerido.", "n-ia-yes")
},

// ============================================================
// BLOQUE 13 - BACKEND
// ============================================================

{
    bloque: "Bloque 13 - Backend",
    title: "Por que necesitamos un backend",
    body: `
        ${flow(["Frontend", "Resend"], { centered: true })}
        <div class="card danger" style="margin:20px auto; max-width:520px; text-align:center;">
            <div class="card-title">Donde ponemos la API Key?</div>
        </div>
        ${flow(["Frontend", "Backend", "Resend"], { centered: true })}
    `,
    notes: noteBlock("Que preguntar", "Deja que el grupo proponga poner la API key directamente en el JavaScript del navegador, y luego muestra por que cualquiera puede leerla desde las DevTools.") +
           noteBlock("Que explicar", "El backend existe principalmente para ocultar credenciales sensibles del lado del cliente.")
},

{
    bloque: "Bloque 13 - Backend",
    title: "Node.js y Express",
    body: `
        ${codeBlock('import express from "express";\n\nconst app = express();\n\napp.use(express.json());\n\napp.listen(3000);', "js", "server.js")}
        <ul class="plain">
            <li><code>express()</code> crea la aplicacion del servidor</li>
            <li><code>express.json()</code> permite leer bodies en formato JSON</li>
            <li><code>app.listen(3000)</code> pone el servidor a escuchar en el puerto 3000</li>
        </ul>
    `,
    notes: noteBlock("Que comprobar", "Cada estudiante debe ver el mensaje de servidor iniciado (o ausencia de errores) al ejecutar node server.js.")
},

{
    bloque: "Bloque 13 - Backend",
    title: "Endpoint POST",
    body: `
        ${codeBlock('app.post("/api/contact", async (req, res) => {\n\n    const {\n        name,\n        email,\n        message\n    } = req.body;\n\n});', "js", "server.js")}
        <ul class="plain">
            <li><strong>Endpoint:</strong> la ruta especifica que el backend expone, en este caso <code>/api/contact</code></li>
            <li><strong>req</strong> (request) contiene los datos enviados desde el frontend</li>
            <li><strong>req.body</strong> trae el objeto JSON ya interpretado</li>
            <li><strong>res</strong> (response) se usara para responder al frontend</li>
        </ul>
    `,
    notes: noteBlock("Que explicar", "Traza el recorrido completo del dato: sale del formulario, se convierte en JSON, viaja por POST y llega como req.body en este mismo endpoint.")
},

// ============================================================
// BLOQUE 14 - RESEND
// ============================================================

{
    bloque: "Bloque 14 - Resend",
    title: "Resend",
    body: `
        ${flow(["Formulario", "JavaScript", "POST", "Express", "Resend", { text: "Correo", strong: true }], { centered: true })}
        <p class="lede" style="margin-top:20px;">Resend es el servicio que finalmente envia el correo electronico real a partir de los datos recibidos en el backend.</p>
    `,
    notes: noteBlock("Que explicar", "Aclara que Resend no reemplaza al backend: el backend recibe los datos, los valida y luego llama a la API de Resend con la clave secreta.")
},

{
    bloque: "Bloque 14 - Resend",
    title: "Variables de entorno",
    body: `
        ${codeBlock('RESEND_API_KEY=re_xxxxx\nCONTACT_EMAIL=correo@ejemplo.com', "env", ".env")}
        ${codeBlock('.env\nnode_modules/', "gitignore", ".gitignore")}
        <div class="card danger" style="margin-top:16px;">
            <div class="card-title">Por que no se publica</div>
            <p style="margin:0;">Si el archivo .env se sube al repositorio, cualquiera con acceso al codigo obtiene la clave secreta de Resend.</p>
        </div>
    `,
    notes: noteBlock("Que comprobar", "Verifica que .env este realmente listado en .gitignore antes de que alguien haga el primer commit del backend.") +
           noteBlock("Error comun esperado", "Subir .env por accidente antes de configurar .gitignore.")
},

// ============================================================
// BLOQUE 15 - INTEGRACION
// ============================================================

{
    bloque: "Bloque 15 - Integracion",
    title: "Codigo final: paso a paso",
    body: `
        <ol class="plain" style="columns:2; column-gap:48px; font-size:1.1rem;">
            <li>Seleccionar formulario</li>
            <li>Escuchar submit</li>
            <li>Obtener datos</li>
            <li>Crear objeto</li>
            <li>Mostrar loading</li>
            <li>Ejecutar fetch</li>
            <li>Procesar response</li>
            <li>Mostrar success</li>
            <li>Capturar error</li>
            <li>Limpiar formulario</li>
        </ol>
        <div class="card amber" style="margin-top:16px;">
            <p style="margin:0;">No se explican las 30 lineas de una sola vez: se recorre paso por paso, verificando cada uno antes de avanzar al siguiente.</p>
        </div>
    `,
    notes: noteBlock("Cuando detenerse", "Detente despues de cada paso y pide a un estudiante que lo explique con sus propias palabras antes de continuar al siguiente.") +
           noteBlock("Que comprobar", "Cada estudiante debe tener su formulario funcionando localmente antes de seguir al siguiente bloque.")
},

// ============================================================
// BLOQUE 16 - ESTADOS DE UI
// ============================================================

{
    bloque: "Bloque 16 - Estados de UI",
    title: "Estados de la interfaz",
    body: `
        ${compare(
            "Camino exitoso",
            flow(["LOADING", { text: "SUCCESS", strong: true }], { centered: true }),
            "Camino con error",
            flow(["LOADING", { text: "ERROR", strong: true }], { centered: true })
        )}
    `,
    notes: noteBlock("Que explicar", "Explica que un buen formulario nunca deja al usuario sin retroalimentacion: siempre debe saber si esta cargando, si tuvo exito o si algo fallo.") +
           noteBlock("Uso de IA", "La IA puede proponer clases CSS y textos para cada estado; el estudiante decide cuales usar.", "n-ia-yes")
},

// ============================================================
// BLOQUE 17 - RETO
// ============================================================

{
    bloque: "Bloque 17 - Reto",
    title: "Reto de desarrollo asistido por IA",
    body: `
        <p class="lede">Agreguen una funcionalidad adicional al formulario. Opciones sugeridas:</p>
        <ul class="plain">
            <li>Contador de caracteres</li>
            <li>Validacion personalizada</li>
            <li>Guardar ultimo contacto</li>
            <li>Deshabilitar boton durante el envio</li>
            <li>Boton limpiar</li>
            <li>Mensajes de error especificos</li>
        </ul>
        <div class="card danger" style="margin:16px 0;">
            <div class="card-title">Condicion</div>
            <p style="margin:0;">No pueden simplemente pedirle a la IA "hazme la funcionalidad".</p>
        </div>
        <div class="section-label">Deben entregar</div>
        <ol class="plain">
            <li>Problema</li>
            <li>Prompt utilizado</li>
            <li>Codigo generado</li>
            <li>Explicacion del codigo</li>
            <li>Prueba realizada</li>
            <li>Resultado</li>
        </ol>
    `,
    notes: noteBlock("Que comprobar", "Revisa el prompt de cada estudiante antes de que ejecute el codigo generado: debe reflejar el mismo nivel de contexto visto en el bloque 2.") +
           noteBlock("Uso de IA", "Este entregable convierte el uso de IA en evidencia de aprendizaje, no solo en un atajo.", "n-ia-yes")
},

// ============================================================
// BLOQUE 18 - VERIFICACION
// ============================================================

{
    bloque: "Bloque 18 - Verificacion",
    title: "Antes de aceptar codigo de IA",
    body: `
        ${checklist([
            "Entiendo que hace?",
            "Se que archivos modifico?",
            "Hay dependencias nuevas?",
            "Hay claves secretas?",
            "Probe el codigo?",
            "Que ocurre si falla?",
            "La solucion realmente resuelve el problema?",
            "Cambio codigo que no debia cambiar?"
        ])}
    `,
    notes: noteBlock("Que hacer", "Proyecta esta lista cada vez que un estudiante pida ayuda durante el resto de la clase. Debe convertirse en un habito, no en un documento que se lee una sola vez.")
},

// ============================================================
// BLOQUE 19 - GIT
// ============================================================

{
    bloque: "Bloque 19 - Git",
    title: "Guardar el trabajo con Git",
    body: `
        ${codeBlock('git status\n\ngit add .\n\ngit commit -m "feat: connect contact form"\n\ngit push', "bash", "Terminal")}
        <ul class="plain">
            <li><code>git status</code> muestra que archivos cambiaron</li>
            <li><code>git add .</code> prepara los cambios para el commit</li>
            <li><code>git commit -m</code> guarda un punto en la historia con un mensaje descriptivo</li>
            <li><code>git push</code> sube los cambios al repositorio remoto</li>
        </ul>
    `,
    notes: noteBlock("Que comprobar", "Revisa con git status que no se este a punto de subir el archivo .env antes del commit.") +
           noteBlock("Error comun esperado", "Mensajes de commit vacios o poco descriptivos como 'cambios'.")
},

// ============================================================
// BLOQUE 20 - CIERRE
// ============================================================

{
    bloque: "Bloque 20 - Cierre",
    title: "El desarrollador sigue tomando las decisiones",
    layout: "closing",
    body: `
        <div class="closing-wrap">
            ${flow(["Problema", "Desarrollador", "IA", "Codigo", "Desarrollador", "Prueba", { text: "Verificacion", strong: true }], { centered: true })}
            <p class="quote-block" style="margin-top:32px;">La IA puede escribir codigo. El desarrollador debe saber que codigo necesita, por que lo necesita y como comprobar que funciona.</p>
        </div>
    `,
    notes: noteBlock("Que hacer", "Cierra retomando la promesa de la sesion: hoy el formulario paso de ser visual a ser funcional, y en cada paso el estudiante mantuvo el control sobre el codigo generado.") +
           noteBlock("Pregunta final", "Pide a dos o tres estudiantes que compartan un momento de la clase en el que corrigieron algo que la IA propuso mal.")
}

];
