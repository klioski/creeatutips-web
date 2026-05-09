# CreeatuTip's — Documento de Contexto del Proyecto
*Última actualización: 2026-05-09*

---

## 1. Descripción general

Sitio web estático de **CreeatuTip's**, empresa de artículos promocionales personalizados ubicada en México. El sitio está desplegado en **Vercel**. No hay framework ni build tool — HTML/CSS/JS puro.

- **Repositorio local:** `C:\Users\klios\CreeatuTips\web\CreeatuTips_Web`
- **Git user:** klioski | Email: klioski@gmail.com
- **Branch principal:** `main`
- **Teléfono de contacto:** +52 55 9365 2128
- **Facebook:** https://www.facebook.com/share/1Cbu7zKQBa/
- **Instagram:** https://www.instagram.com/creeatutips

---

## 2. Estructura de archivos

```
CreeatuTips_Web/
├── index.html          ← Página principal (hero, stats, 7 técnicas, por qué nosotros, CTA)
├── nosotros.html       ← Historia, misión, visión, valores
├── servicios.html      ← 7 técnicas: tabs + flip cards
├── productos.html      ← Catálogo de artículos base (ropa, termos, oficina, publicidad)
├── portafolio.html     ← Galería filtrable (8 ítems placeholder) + logos de clientes
├── contacto.html       ← Formulario de cotización dinámico
├── css/
│   └── style.css       ← Estilos globales + variables CSS
├── js/
│   ├── main.js         ← Menú hamburguesa + visualizador de técnicas (legacy)
│   └── contacto.js     ← Lógica del formulario dinámico + envío de correo
└── img/
    ├── logo.png
    ├── favicon.png
    ├── portfolio/       ← 8 slots de fotos (ver sección 6)
    └── clientes/        ← Logos de clientes (pendiente)
```

---

## 3. Design system / Variables CSS

Definidas en `css/style.css` línea 1:

| Variable             | Valor       | Uso                                      |
|----------------------|-------------|------------------------------------------|
| `--primary-color`    | `#5D54A4`   | Lila/azul — títulos, header, footer      |
| `--secondary-color`  | `#00BFFF`   | Azul claro — botones, acentos, links     |
| `--tertiary-color`   | `#E91E63`   | Magenta — líneas decorativas             |
| `--text-color`       | `#333`      | Cuerpo del texto                         |
| `--light-bg`         | `#f5f5f7`   | Fondo gris claro                         |
| `--font-heading`     | Montserrat  | Títulos (500, 700, 900)                  |
| `--font-body`        | Open Sans   | Cuerpo (400, 600)                        |

**Color especial DTF UV:** amber `#f59e0b` / amber oscuro `#b45309` (no en variables, hardcoded en servicios.html)

**Header background:** `#1a1630` (dark navy, no en variables — hardcoded en style.css y en cada página)

---

## 4. Las 7 técnicas

| # | Nombre           | data-tab / data-filter | Color CSS              | Ícono FA         |
|---|------------------|------------------------|------------------------|------------------|
| 01 | DTF & Serigrafía | `dtf`                 | `--primary-color`      | `fa-tshirt`      |
| 02 | Grabado Láser    | `laser`                | (default lila)         | `fa-vector-square` |
| 03 | Sublimación      | `sublimacion`          | (default lila)         | `fa-mug-hot`     |
| 04 | Bordado          | `bordado`              | (default lila)         | `fa-scissors`    |
| 05 | Gran Formato     | `gran-formato`         | (default lila)         | `fa-print`       |
| 06 | Corte en Acrílico| `vinil` ← ojo, key interno es "vinil" | (default lila) | `fa-cut` |
| 07 | DTF UV           | `dtfuv`                | amber `#f59e0b`        | `fa-sun`         |

> **Importante:** La técnica 06 se llama "Corte en Acrílico" en toda la UI, pero internamente usa `data-tab="vinil"` y `data-filter="vinil"` en el portafolio. Esto es intencional para mantener compatibilidad con el sistema de filtros existente.

---

## 5. Páginas — estado actual

### index.html
- Hero oscuro (`#1a1630`) con efecto typing que cicla: `['DTF.', 'Láser.', 'Bordado.', 'Sublimación.', 'Acrílico.', 'DTF UV.']`
- Stats animados con IntersectionObserver: 500+ proyectos, 5+ años, 7 técnicas, 100% satisfacción
- Grid de 7 tech-cards (3 columnas → auto-fit en responsive)
- Sección "Por qué nosotros" con 4 pilares
- CTA final oscuro

### servicios.html
- Hero con gradiente `#2d294f → #5D54A4 → #00BFFF`
- **7 tab buttons** (data-tab): dtf, laser, sublimacion, bordado, gran-formato, vinil, dtfuv
- Cada tab panel tiene: video placeholder (con ID de YouTube comentado para reemplazar), info + chips de productos
- **7 flip cards** debajo de los tabs (grid `auto-fit, minmax(280px, 1fr)`)
- Título de sección: "Las 7 Técnicas que Dominamos"
- CSS para DTF UV (amber) en líneas ~XXX de servicios.html

**IDs de YouTube pendientes de reemplazar:**
- `TU_VIDEO_DTF_ID`
- `TU_VIDEO_LASER_ID`
- `TU_VIDEO_SUBLIM_ID`
- `TU_VIDEO_BORDADO_ID`
- `TU_VIDEO_FORMATO_ID`
- `TU_VIDEO_ACRILICO_ID`
- `TU_VIDEO_DTFUV_ID`

### portafolio.html
- Hero con gradiente `#1a1a2e → #5D54A4 → #E91E63`
- 8 botones de filtro: Todos, DTF, Grabado Láser, Sublimación, Bordado, Gran Formato, Corte en Acrílico (data-filter="vinil"), DTF UV
- 8 ítems en el grid (todos con placeholder + onerror fallback)
- Lightbox funcional para ver fotos ampliadas
- Sección de logos de clientes (pendiente agregar imágenes)

### productos.html
- 4 categorías: Ropa y Accesorios, Termos/Tazas/Cilindros, Oficina y Accesorios, Publicidad y Exhibición
- Estilo simple con listas — el CSS de la sección está comentado (el global de style.css lo maneja)
- **Catálogo PDF pendiente:** El usuario tiene un PDF grande de catálogo de productos. No se ha integrado aún. Opciones discutidas: botón de descarga directa, embed de visor PDF, embed de Issuu/Google Drive.

### contacto.html
- Formulario dinámico: campos que se muestran/ocultan según el artículo seleccionado
- Artículos en el select: Playera, Sudadera, Termos, Tazas, MDF, Otro
- Servicio/Técnica en el select: DTF/Serigrafía, Sublimación, Grabado Láser, Bordado, Gran Formato, Otro
- **Nota:** DTF UV y Corte en Acrílico no están aún en el select de Servicio/Técnica del formulario
- Lógica dinámica en `js/contacto.js`

### nosotros.html
- Misión, Visión, Quiénes Somos
- Texto menciona "serigrafía" en el cuerpo (no fue actualizado a "Corte en Acrílico")

---

## 6. Imágenes pendientes de agregar

### img/portfolio/ — 8 slots

| Archivo                        | Categoría     | Descripción mostrada        |
|--------------------------------|---------------|-----------------------------|
| `dtf-playera.jpg`              | dtf           | Playera Corporativa         |
| `laser-termo.jpg`              | laser         | Termo para Evento           |
| `sublimacion-taza.jpg`         | sublimacion   | Taza Promocional            |
| `bordado-gorra.jpg`            | bordado       | Gorra de Uniforme           |
| `granformato-lona.jpg`         | gran-formato  | Publicidad Exterior         |
| `laser-llavero.jpg`            | laser         | Llaveros Premium            |
| `acrilico-letras.jpg`          | vinil         | Señalética Corporativa      |
| `dtfuv-termos.jpg`             | dtfuv         | Termos Personalizados       |

Tamaño recomendado: **800×800 px** o mayor. Si el archivo no existe, se muestra un placeholder con el ícono y la ruta (patrón `onerror`).

### img/clientes/ — pendiente
Logos PNG de clientes en `portafolio.html`. Sección ya existe con estructura `.client-logo` lista.

---

## 7. Patrones de código clave

### Agregar ítem al portafolio
```html
<div class="portfolio-item" data-category="CATEGORIA">
    <img src="img/portfolio/FOTO.jpg" alt="Descripción"
         loading="lazy"
         onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'">
    <div class="portfolio-placeholder" style="display:none">
        <i class="fas fa-ICONO"></i>
        <span>Agrega tu foto aquí<br>img/portfolio/FOTO.jpg</span>
    </div>
    <div class="zoom-icon"><i class="fas fa-search-plus"></i></div>
    <div class="portfolio-overlay">
        <span class="item-tag">Nombre Técnica</span>
        <h4>Título del Proyecto</h4>
        <p>Subtítulo · Material</p>
    </div>
</div>
```

### Agregar logo de cliente
```html
<div class="client-logo">
    <img src="img/clientes/LOGO.png" alt="Nombre Cliente"
         onerror="this.style.display='none'">
</div>
```

### Activar video de YouTube en servicios.html
Busca el comentario con el ID (ej: `TU_VIDEO_DTF_ID`) y descomenta el `<iframe>`:
```html
<iframe src="https://www.youtube.com/embed/TU_VIDEO_DTF_ID?rel=0"
        frameborder="0" allowfullscreen loading="lazy"></iframe>
```

---

## 8. Tareas pendientes

### Alta prioridad
- [ ] **Fotos reales** — subir 8 fotos a `img/portfolio/` (ver tabla sección 6)
- [ ] **Videos YouTube** — reemplazar 7 IDs de video en servicios.html
- [ ] **Logos de clientes** — agregar PNGs en `img/clientes/`

### Media prioridad
- [ ] **Catálogo PDF** — integrar el PDF grande de productos en productos.html. Pendiente decidir: ¿solo botón de descarga o embed de visor? ¿qué peso tiene el archivo?
- [ ] **Formulario de contacto** — agregar "Corte en Acrílico" y "DTF UV" al select de Servicio/Técnica en contacto.html
- [ ] **nosotros.html** — el texto menciona "serigrafía" como técnica (línea ~39); actualizar si se quiere consistencia

### Baja prioridad / Futuro
- [ ] **Etiquetas NFC** — el usuario tiene 144 etiquetas NFC y una app para personalizarlas. Integrar al sitio cuando el concepto esté más aterrizado (se discutirá en otro chat)
- [ ] **Más ítems de portafolio** — idealmente 2-3 fotos por técnica

---

## 9. Notas técnicas importantes

1. **CSS está en `<style>` dentro de cada `.html`**, no en `style.css` separado, excepto los estilos globales (reset, header, footer, botones comunes) que sí están en `style.css`.

2. **JavaScript de la página principal** (`index.html`) está en un bloque `<script>` inline al final del archivo, NO en `main.js`. `main.js` solo tiene el menú hamburguesa y un visualizador legacy de técnicas que ya no se usa en el layout actual.

3. **Grid de servicios.html** usa `repeat(auto-fit, minmax(280px, 1fr))` — no un número fijo de columnas — para acomodar cualquier cantidad de tarjetas.

4. **Flip cards** en servicios.html: la clase que activa el giro es `.is-flipped` en `.card-inner`, con CSS `perspective + transform-style: preserve-3d + backface-visibility: hidden`.

5. **Sistema de tabs** en servicios.html: `data-tab` en botones y `data-panel` en panels. El JS activa/desactiva la clase `.active`.

6. **Filtro del portafolio**: JS en portafolio.html (inline al final) filtra por `data-category` en los ítems vs `data-filter` en los botones. El botón "Todos" no filtra.

7. **Formulario** usa `js/contacto.js` que probablemente llama a una API o servicio de correo (EmailJS o similar). El `action="#"` en el HTML sugiere que el submit es interceptado por JS.
