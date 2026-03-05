/* script.js - centralizado de todas las funciones JavaScript usadas en el sitio */

// datos reutilizables para las páginas de búsqueda/catálogo
const siteContent = [
    {
        page: "Página 1 - Inicio",
        url: "index.html",
        content: "Portal Principal Bienvenido al sitio web multi-funcional Página 2 Login Archivos Página 3 Calendario PDF Página 4 Multimedia Página 5 Texto Página 6 Buscador Página 7 Texto largo Página 8 Catálogo Filtros"
    },
    {
        page: "Página 2 - Login",
        url: "pagina2.html",
        content: "Sistema de Acceso Terminal Correo electrónico Contraseña Iniciar sesión Cargar archivo TXT texto consola visualización código programación seguridad acceso datos archivo lectura file API JavaScript"
    },
    {
        page: "Página 3 - Calendario",
        url: "pagina3.html",
        content: "Calendario Visualizador PDF Fecha seleccionada día mes año Documentos PDF render canvas página zoom anterior siguiente navegación archivo pdf.js Mozilla visor documentos digital"
    },
    {
        page: "Página 4 - Multimedia",
        url: "pagina4.html",
        content: "Estudio Multimedia Selector color hexadecimal imagen audio video cargar previsualización reproductor controles música fotografía gradiente animación bounce efectos visuales creativo"
    },
    {
        page: "Página 5 - Texto 255",
        url: "pagina5.html",
        content: "Revolución Digital Impacto Sociedad Moderna adventimiento tecnología transformación existencia comunicación dispositivos electrónicos internet red información democratización historia teléfonos inteligentes computación espacial datos fotografía transacciones financieras inteligencia artificial algoritmos aprendizaje diagnósticos médicos vehículos autónomos asistentes virtuales ética privacidad redes sociales interacciones humanas comunidades plataformas desinformación adicción polarización comercio electrónico mercados logística seguridad cibernética educación cursos universitarios simulaciones quirúrgicas medicina digital dispositivos vestibles teleconsultas impresión 3D prótesis entretenimiento cinematográfico videojuegos realidad virtual música streaming brecha tecnológica ciberseguridad hackers ransomware futuro biología implantes cerebrales ciudades inteligentes realidad aumentada alfabetización digital regulatorios éticos sostenibilidad ambiental equidad justicia prosperidad"
    },
    {
        page: "Página 6 - Buscador",
        url: "pagina6.html",
        content: "Buscador Global búsqueda contenido páginas sitio web estadísticas resultados highlight resaltado navegación interfaz búsqueda encontrar localizar texto palabras clave indexación base datos"
    },
    {
        page: "Página 7 - Texto 327",
        url: "pagina7.html",
        content: "Odisea Cosmos Exploración Espacial Profunda humanidad siempre miró estrellas preguntándose qué misterios oculta inmensidad cósmica viajes espaciales representan máxima expresión curiosidad ingenio colectivo cohetes propulsan más allá gravedad terrestre hacia horizontes desconocidos astronautas entrenan rigurosamente años preparándose condiciones extremas aislamiento prolongado radiación ionizante ingravidez alteraciones fisiológicas complejas estaciones orbitales laboratorios científicos flotantes donde investigaciones microgravedad revelan comportamientos materiales imposibles replicar superficie planetaria telescopios espaciales como Hubble James Webb capturan imágenes espectaculares galaxias distantes billones años luz agujeros negros supermasivos devorando estrellas nebulosas coloridas nacimientos estelares activos Marte planeta rojo fascina científicos signos antigua presencia agua líquida posibilidad vida microbiana pasada misiones robots exploran superficie analizando rocas regolito buscando fósiles biológicos Luna satélite natural nuestra única compañera celestial viaje tripulado próxima década establecer bases permanentes punto partida exploración más profunda asteroides cuerpos rocosos millones riquezas minerales platino oro agua congelada recursos esenciales futura economía espacial colonización planetaria requiere soluciones ingeniería avanzadas hábitats presurizados generación oxígeno reciclaje perfecto residuos protección radiación cósmica meteoritos comunicación interplanetaria presenta desafíos únicos latencia significativa entre Tierra Marte requiere autonomía decisiones vehículos exploración comercio interestelar aún ciencia ficción pero empresas privadas SpaceX Blue Origin Virgin Galactic acercan realidad turismo espacial accesible personas ordinarias no solo astronautas profesionales física cuántica estudia fenómenos escalas subatómicas extrañas superposición estados entrelazamiento partículas prometen revolucionar computación comunicación absolutamente segura energía fusión nuclear limpia abundante podría satisfacer necesidades civilización sin contaminar planeta materia oscura energía oscura constituyen mayor universo permanece misterio total desafía comprensión física actual agujeros gusano teóricos podrían permitir viajes más rápidos luz conectando puntos distantes espacio-tiempo civilizaciones extraterrestres inteligentes búsqueda SETI escucha señales radio cosmos silencio hasta ahora Fermi paradoja pregunta dónde todos extraterrestres deberían abundantes pero detectamos ninguno colonización galáctica futuro lejano humanidad podría expandirse por vía Láctea terraformando planetas inadecuados vida creando atmósferas biosferas artificiales ingeniería climática planetaria ética exploración espacial debate proteger planetas esterilización biológica versus derecho expandirse supervivencia especie amenazas cosmicas asteroides potencialmente peligrosos erupciones solares extremas requieren sistemas defensa planetaria vigilancia constante cielo cooperación internacional absolutamente esencial ninguna nación sola lograr conquista espacial sino unidad esfuerzos recursos conocimiento compartido legado exploradores espaciales permanece inspiración generaciones soñar grande alcanzar estrellas"
    },
    {
        page: "Página 8 - Catálogo",
        url: "pagina8.html",
        content: "Catálogo Productos Filtro Precios Artículos electrónica ropa hogar deportes libros juguetes herramientas belleza salud alimentos bebidas ordenadores portátiles smartphones tablets auriculares cámaras consolas videojuegos teclados ratones monitores impresoras routers cables accesorios protección camisetas pantalones zapatos chaquetas vestidos trajes corbatas calcetines ropa interior deportiva formal casual infantil muebles decoración iluminación cocina baño jardín organización limpieza mantas almohadas cortinas alfombras electrodomésticos neveras lavadoras hornos microondas aspiradoras aire acondicionado calefacción ventiladores bicicletas pesas máquinas ejercicio ropa deportiva calzado running yoga natación camping pesca caza balones raquetas mochilas tiendas dormir novelas ciencia ficción fantasía terror romance histórica biografías ensayos poesía cómics mangas educativos infantiles juveniles academicos muñecas vehículos construcción didácticos mesas juego rompecabezas cartas coleccionables robótica programación ciencia experimentos taladros sierras destornilladores martillos llaves medición seguridad pintura fontanería electricidad jardinería bricolaje maquillaje perfumes cremas champús jabones tratamientos protectores solares vitaminas suplementos medicamentos primeros auxilios equipos diagnóstico ortopedia bienestar relajación frutas verduras carnes pescados lacteos panadería dulces bebidas alcoholicas refrescos jugos agua mineral café té chocolate snacks conservas congelados organicos gourmet internacional precio mínimo máximo rango filtrar ordenar categoría marca valoración disponibilidad ofertas descuentos carrito compra"
    }
];

const products = [
    { id: 1, name: "Laptop Pro X15", category: "electronica", price: 899, emoji: "💻" },
    { id: 2, name: "Smartphone Galaxy S24", category: "electronica", price: 699, emoji: "📱" },
    { id: 3, name: "Tablet Air 10\"", category: "electronica", price: 449, emoji: "📲" },
    { id: 4, name: "Auriculares NoiseCancel", category: "electronica", price: 199, emoji: "🎧" },
    { id: 5, name: "Cámara DSLR 4K", category: "electronica", price: 799, emoji: "📷" },
    { id: 6, name: "Consola GameBox X", category: "electronica", price: 499, emoji: "🎮" },
    { id: 7, name: "Monitor UltraWide 34\"", category: "electronica", price: 599, emoji: "🖥️" },
    { id: 8, name: "Teclado Mecánico RGB", category: "electronica", price: 129, emoji: "⌨️" },
    { id: 9, name: "Camiseta Algodón Premium", category: "ropa", price: 25, emoji: "👕" },
    { id: 10, name: "Jeans Clásicos Azul", category: "ropa", price: 59, emoji: "👖" },
    { id: 11, name: "Zapatillas Running Pro", category: "ropa", price: 89, emoji: "👟" },
    { id: 12, name: "Chaqueta Impermeable", category: "ropa", price: 120, emoji: "🧥" },
    { id: 13, name: "Vestido Elegante Noche", category: "ropa", price: 85, emoji: "👗" },
    { id: 14, name: "Traje Formal Negro", category: "ropa", price: 199, emoji: "👔" },
    { id: 15, name: "Calcetines Pack x6", category: "ropa", price: 15, emoji: "🧦" },
    { id: 16, name: "Gorra Deportiva", category: "ropa", price: 22, emoji: "🧢" },
    { id: 17, name: "Sofá 3 Plazas Moderno", category: "hogar", price: 599, emoji: "🛋️" },
    { id: 18, name: "Lámpara LED Inteligente", category: "hogar", price: 45, emoji: "💡" },
    { id: 19, name: "Juego de Ollas Premium", category: "hogar", price: 149, emoji: "🍳" },
    { id: 20, name: "Aspiradora Robot", category: "hogar", price: 299, emoji: "🤖" },
    { id: 21, name: "Set de Jardín 4 piezas", category: "hogar", price: 349, emoji: "🪴" },
    { id: 22, name: "Cortinas Blackout", category: "hogar", price: 79, emoji: "🪟" },
    { id: 23, name: "Alfombra Persa 2x3m", category: "hogar", price: 199, emoji: "🧶" },
    { id: 24, name: "Nevera Inteligente", category: "hogar", price: 899, emoji: "❄️" },
    { id: 25, name: "Bicicleta Montaña 29\"", category: "deportes", price: 499, emoji: "🚲" },
    { id: 26, name: "Mancuernas Set 20kg", category: "deportes", price: 89, emoji: "🏋️" },
    { id: 27, name: "Colchoneta Yoga Pro", category: "deportes", price: 35, emoji: "🧘" },
    { id: 28, name: "Raqueta Tenis Carbono", category: "deportes", price: 129, emoji: "🎾" },
    { id: 29, name: "Balón Fútbol Profesional", category: "deportes", price: 45, emoji: "⚽" },
    { id: 30, name: "Tienda de Campaña 4P", category: "deportes", price: 159, emoji: "⛺" },
    { id: 31, name: "Caña de Pescar Pro", category: "deportes", price: 75, emoji: "🎣" },
    { id: 32, name: "Reloj GPS Running", category: "deportes", price: 199, emoji: "⌚" },
    { id: 33, name: "Novela: El Gran Misterio", category: "libros", price: 18, emoji: "📖" },
    { id: 34, name: "Ciencia Ficción: NeoMundo", category: "libros", price: 22, emoji: "👽" },
    { id: 35, name: "Historia Antigua", category: "libros", price: 25, emoji: "🏛️" },
    { id: 36, name: "Cocina Internacional", category: "libros", price: 30, emoji: "👨‍🍳" },
    { id: 37, name: "Programación JavaScript", category: "libros", price: 35, emoji: "💻" },
    { id: 38, name: "Arte Moderno Ilustrado", category: "libros", price: 45, emoji: "🎨" },
    { id: 39, name: "Enciclopedia Naturaleza", category: "libros", price: 55, emoji: "🌿" },
    { id: 40, name: "Poesía Contemporánea", category: "libros", price: 20, emoji: "✍️" },
    { id: 41, name: "Robot Construcción STEM", category: "juguetes", price: 65, emoji: "🤖" },
    { id: 42, name: "Muñeca Interactiva", category: "juguetes", price: 35, emoji: "👧" },
    { id: 43, name: "Lego Ciudad 1000pcs", category: "juguetes", price: 85, emoji: "🧱" },
    { id: 44, name: "Juego de Mesa Estrategia", category: "juguetes", price: 40, emoji: "🎲" },
    { id: 45, name: "Pista de Carreras Eléctrica", category: "juguetes", price: 120, emoji: "🏎️" },
    { id: 46, name: "Peluche Gigante Oso", category: "juguetes", price: 45, emoji: "🧸" },
    { id: 47, name: "Instrumento Musical Teclado", category: "juguetes", price: 99, emoji: "🎹" },
    { id: 48, name: "Set de Ciencia Junior", category: "juguetes", price: 55, emoji: "🔬" },
    { id: 49, name: "Taladro Percutor 800W", category: "herramientas", price: 89, emoji: "🔨" },
    { id: 50, name: "Set Destornilladores 50pcs", category: "herramientas", price: 35, emoji: "🪛" },
    { id: 51, name: "Sierra Circular Profesional", category: "herramientas", price: 149, emoji: "🪚" },
    { id: 52, name: "Caja Herramientas Completa", category: "herramientas", price: 199, emoji: "🧰" },
    { id: 53, name: "Set Maquillaje Profesional", category: "belleza", price: 75, emoji: "💄" },
    { id: 54, name: "Secador Iónico 2400W", category: "belleza", price: 65, emoji: "💇" },
    { id: 55, name: "Crema Anti-edad Premium", category: "belleza", price: 120, emoji: "🧴" }
];

let pdfDoc = null;
let pageNum = 1;
let scale = 1.5;
let canvas;
let ctx;

function login() {
    const email = document.getElementById('email')?.value;
    const password = document.getElementById('password')?.value;
    console.log('Login attempt:', { email, password });
    alert(`Acceso registrado para: ${email}`);
}

function handleFileLoad(e) {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = function (ev) {
        const content = ev.target.result;
        const display = document.getElementById('fileContent');
        if (display) display.textContent = content;
        console.log('Contenido del archivo:', content);
        const consoleOutput = document.getElementById('consoleOutput');
        if (consoleOutput)
            consoleOutput.textContent =
                `> Archivo cargado: ${file.name}\n> Tamaño: ${file.size} bytes\n> Contenido mostrado en pantalla y consola`;
    };
    reader.readAsText(file);
}

function loadPDF(data) {
    pdfjsLib.getDocument({ data: data }).promise.then(function (pdf) {
        pdfDoc = pdf;
        const pdfContainer = document.getElementById('pdfContainer');
        if (pdfContainer) pdfContainer.style.display = 'block';
        const pageNumSpan = document.getElementById('pageNum');
        if (pageNumSpan) pageNumSpan.textContent = `Página: 1 / ${pdf.numPages}`;
        renderPage(pageNum);
    });
}

function renderPage(num) {
    if (!pdfDoc) return;
    if (!canvas) {
        canvas = document.getElementById('pdf-canvas');
        if (canvas) ctx = canvas.getContext('2d');
    }
    pdfDoc.getPage(num).then(function (page) {
        const viewport = page.getViewport({ scale: scale });
        if (canvas) {
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            const renderContext = {
                canvasContext: ctx,
                viewport: viewport
            };
            page.render(renderContext);
        }
    });
    const pageNumSpan = document.getElementById('pageNum');
    if (pageNumSpan) pageNumSpan.textContent = `Página: ${num} / ${pdfDoc.numPages}`;
}

function prevPage() {
    if (pageNum <= 1) return;
    pageNum--;
    renderPage(pageNum);
}

function nextPage() {
    if (pageNum >= pdfDoc.numPages) return;
    pageNum++;
    renderPage(pageNum);
}

function zoomIn() {
    scale += 0.2;
    renderPage(pageNum);
}

function zoomOut() {
    if (scale <= 0.4) return;
    scale -= 0.2;
    renderPage(pageNum);
}

function displayResults(results, query) {
    const resultsContainer = document.getElementById('resultsContainer');
    const searchStats = document.getElementById('searchStats');
    if (searchStats)
        searchStats.textContent = `Encontradas ${results.length} coincidencias para "${query}"`;

    if (!resultsContainer) return;

    if (results.length === 0) {
        resultsContainer.innerHTML = `
                    <div class="no-results">
                        ❌ No se encontraron resultados para "${query}"<br>
                        <small>Intenta con otros términos como: tecnología, color, precio, fecha, espacio, catálogo...</small>
                    </div>
                `;
        return;
    }

    resultsContainer.innerHTML = results
        .map(
            (result) => `
                <div class="result-item" onclick="window.location.href='${result.url}'" style="cursor: pointer;">
                    <div class="result-title">
                        📄 ${result.page}
                        <span class="page-badge">Ir a página →</span>
                    </div>
                    <div class="result-context">${result.context}</div>
                </div>
            `
        )
        .join('');
}

function getCategoryName(cat) {
    const names = {
        electronica: 'Electrónica',
        ropa: 'Ropa',
        hogar: 'Hogar',
        deportes: 'Deportes',
        libros: 'Libros',
        juguetes: 'Juguetes',
        herramientas: 'Herramientas',
        belleza: 'Belleza'
    };
    return names[cat] || cat;
}

function renderProducts(productsToRender) {
    const productsGrid = document.getElementById('productsGrid');
    const stats = document.getElementById('stats');
    if (!productsGrid) return;
    if (productsToRender.length === 0) {
        productsGrid.innerHTML = `
                    <div class="no-results">
                        😕 No se encontraron productos con estos filtros<br>
                        <small>Intenta ajustar el rango de precios o la categoría</small>
                    </div>
                `;
        if (stats) stats.textContent = `Mostrando 0 de ${products.length} artículos`;
        return;
    }
    productsGrid.innerHTML = productsToRender
        .map(
            (product) => `
                <div class="product-card">
                    <div class="product-image">${product.emoji}</div>
                    <div class="product-info">
                        <span class="product-category">${getCategoryName(product.category)}</span>
                        <div class="product-name">${product.name}</div>
                        <div class="product-price">${product.price}</div>
                    </div>
                </div>
            `
        )
        .join('');
    if (stats) stats.textContent = `Mostrando ${productsToRender.length} de ${products.length} artículos`;
}

function filterProducts() {
    const categoryFilter = document.getElementById('categoryFilter');
    const priceRange = document.getElementById('priceRange');
    const sortBy = document.getElementById('sortBy');
    let filtered = [...products];
    const category = categoryFilter ? categoryFilter.value : 'all';
    if (category !== 'all') {
        filtered = filtered.filter((p) => p.category === category);
    }
    const maxPrice = priceRange ? parseInt(priceRange.value) : Infinity;
    filtered = filtered.filter((p) => p.price <= maxPrice);
    const sort = sortBy ? sortBy.value : 'default';
    if (sort === 'price-asc') {
        filtered.sort((a, b) => a.price - b.price);
    } else if (sort === 'price-desc') {
        filtered.sort((a, b) => b.price - a.price);
    } else if (sort === 'name') {
        filtered.sort((a, b) => a.name.localeCompare(b.name));
    }
    renderProducts(filtered);
}

// inicializadores

document.addEventListener('DOMContentLoaded', () => {
    // página 2
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginBtn = document.getElementById('loginBtn');
    if (loginBtn && emailInput && passwordInput) {
        loginBtn.addEventListener('click', login);
    }
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
        fileInput.addEventListener('change', handleFileLoad);
    }

    // página 3
    const dateInput = document.getElementById('dateInput');
    const dateDisplay = document.getElementById('dateDisplay');
    if (dateInput && dateDisplay) {
        dateInput.addEventListener('change', () => {
            const date = dateInput.value;
            dateDisplay.textContent = date
                ? `Fecha seleccionada: ${new Date(date).toLocaleDateString('es-ES', {
                      weekday: 'long',
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                  })}`
                : 'Ninguna fecha seleccionada';
        });
    }
    const pdfInput = document.getElementById('pdfInput');
    if (pdfInput && typeof pdfjsLib !== 'undefined') {
        pdfjsLib.GlobalWorkerOptions.workerSrc =
            'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        pdfInput.addEventListener('change', function (e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function () {
                    const typedarray = new Uint8Array(this.result);
                    loadPDF(typedarray);
                };
                reader.readAsArrayBuffer(file);
            }
        });
    }

    // página 4
    const colorPicker = document.getElementById('colorPicker');
    if (colorPicker) {
        colorPicker.addEventListener('input', (e) => {
            const color = e.target.value;
            const display = document.getElementById('colorDisplay');
            if (display) {
                display.style.background = color;
                display.textContent = `Color seleccionado: ${color}`;
            }
        });
    }
    const imageInput = document.getElementById('imageInput');
    if (imageInput) {
        imageInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function (ee) {
                    const img = document.createElement('img');
                    img.src = ee.target.result;
                    img.style.maxWidth = '100%';
                    img.style.borderRadius = '10px';
                    const preview = document.getElementById('imagePreview');
                    if (preview) {
                        preview.innerHTML = '';
                        preview.appendChild(img);
                        preview.style.border = 'none';
                    }
                };
                reader.readAsDataURL(file);
            }
        });
    }
    const audioInput = document.getElementById('audioInput');
    if (audioInput) {
        audioInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const url = URL.createObjectURL(file);
                const audio = document.createElement('audio');
                audio.controls = true;
                audio.src = url;
                audio.style.width = '100%';
                const preview = document.getElementById('audioPreview');
                if (preview) {
                    preview.innerHTML = '';
                    preview.appendChild(audio);
                    preview.style.border = 'none';
                }
            }
        });
    }
    const videoInput = document.getElementById('videoInput');
    if (videoInput) {
        videoInput.addEventListener('change', (e) => {
            const file = e.target.files[0];
            if (file) {
                const url = URL.createObjectURL(file);
                const video = document.createElement('video');
                video.controls = true;
                video.src = url;
                video.style.maxWidth = '100%';
                video.style.borderRadius = '10px';
                const preview = document.getElementById('videoPreview');
                if (preview) {
                    preview.innerHTML = '';
                    preview.appendChild(video);
                    preview.style.border = 'none';
                }
            }
        });
    }

    // página 6
    const searchInput = document.getElementById('searchInput');
    const resultsContainer = document.getElementById('resultsContainer');
    const searchStats = document.getElementById('searchStats');
    if (searchInput && resultsContainer && searchStats) {
        searchInput.addEventListener('input', function (e) {
            const query = e.target.value.toLowerCase().trim();
            if (query.length === 0) {
                resultsContainer.innerHTML =
                    '<div class="no-results">🔍 El buscador está listo. Escribe arriba para encontrar contenido específico.</div>';
                searchStats.textContent = 'Escribe para buscar contenido en las 8 páginas del sitio';
                return;
            }
            const results = [];
            siteContent.forEach((page) => {
                const content = page.content.toLowerCase();
                const index = content.indexOf(query);
                if (index !== -1) {
                    const start = Math.max(0, index - 60);
                    const end = Math.min(page.content.length, index + query.length + 60);
                    let context = page.content.substring(start, end);
                    if (start > 0) context = '...' + context;
                    if (end < page.content.length) context = context + '...';
                    const regex = new RegExp(`(${query})`, 'gi');
                    context = context.replace(regex, '<span class="highlight">$1</span>');
                    results.push({
                        ...page,
                        context: context
                    });
                }
            });
            displayResults(results, query);
        });
    }

    // página 8
    const catFilter = document.getElementById('categoryFilter');
    const prRange = document.getElementById('priceRange');
    const pv = document.getElementById('priceValue');
    const sb = document.getElementById('sortBy');
    if (catFilter || prRange || sb) {
        if (catFilter) catFilter.addEventListener('change', filterProducts);
        if (sb) sb.addEventListener('change', filterProducts);
        if (prRange) {
            prRange.addEventListener('input', function (e) {
                if (pv) pv.textContent = `$0 - $${e.target.value}`;
                filterProducts();
            });
        }
        renderProducts(products);
    }
});
