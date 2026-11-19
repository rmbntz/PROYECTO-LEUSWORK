# 🎯 Guion Maestro: Presentación & Pitch de Venta (Leuswork!)

Documento estratégico diseñado para dominar la presentación del proyecto web en dos frentes:
1. **Pitch Comercial para el Cliente:** Cómo vendérselo a Dayana y Diana Añez (**@leuswork**).
2. **Defensa Académica para el Profesor:** Cómo justificar técnicamente decisiones de diseño, CSS, accesibilidad y rendimiento.

---

## 📑 Índice de Navegación Rápida
1. [El Concepto Central en 30 Segundos](#1-el-concepto-central-en-30-segundos)
2. [Guion de Venta para Leuswork (Pitch de Cliente)](#2-guion-de-venta-para-leuswork-pitch-de-cliente)
3. [Guion de Defensa para el Profesor (Sustentación Técnica)](#3-guion-de-defensa-para-el-profesor-sustentación-técnica)
4. [Recorrido Sección por Sección (Qué decir en cada clic)](#4-recorrido-sección-por-sección-qué-decir-en-cada-clic)
5. [Banco de Preguntas Trampa (Profesor & Cliente)](#5-banco-de-preguntas-trampa-profesor--cliente)

---

## 1. El Concepto Central en 30 Segundos
> *"Este sitio no es una plantilla corporativa genérica. Es un sistema digital basado en la filosofía real de Leuswork: **el diseño no decora, codifica una historia**. Visualmente utiliza un estilo **Neo-brutalista editorial**, combinando la precisión técnica de la tipografía suiza con la calidez de trazos manuscritos y micro-interacciones interactivas para convertir visitas de Instagram en clientes reales."*

---

## 2. Guion de Venta para Leuswork (Pitch de Cliente)
*Objetivo: Demostrarles que investigaste su marca a fondo y que esta web les va a ahorrar tiempo y generar dinero.*

### 🎙️ Introducción (Empatía con su dolor actual)
> *"Hola Dayana y Diana. Analicé el contenido de su cuenta de Instagram y noté algo claro: ustedes hacen un trabajo de branding de altísimo nivel, pero actualmente dependen de que un cliente les escriba por DM o pregunte precios por mensaje. En redes, **las personas tardan menos de 3 segundos en decidir si confían en una marca**. Si ese tráfico solo llega a un Linktree aburrido, están perdiendo clientes calificados."*

### 💡 La Solución (Su web a medida)
> *"Por eso diseñé esta plataforma pensada exclusivamente para su modelo de negocio:*
> * 1. **Fidelidad absoluta a su marca:** Reconstruí su logotipo oficial exactamente como está en sus posts (la tipografía sans-serif para 'Leus' y la caligrafía manuscrita inclinada para 'work').*
> * 2. **Un filtro interactivo (Checklist de Instagram):** En el mismo Hero, el cliente hace una autoevaluación rápida en 20 segundos. Cuando nota que le falta un Buyer Persona o que su bio no es clara, la web lo canaliza automáticamente al Diagnóstico Inicial.*
> * 3. **Servicios reales y claros:** Diferenciamos la 'Asesoría 2:1' del 'Brand Kit con Propósito' para que el cliente llegue educado y listo para cotizar.*
> * 4. **Casos reales:** Integramos sus proyectos comprobables (Mr. Goloso, Ories Art, Ray's Board y su guía 'Maestro de tu Feed') con enlaces directos para validar credibilidad."*

### 🚀 Cierre de Venta
> *"Esta web no es un gasto decorativo: es su vendedora automática las 24 horas. Les permite profesionalizar su imagen, cobrar lo que realmente vale su trabajo y dejar de perder tiempo explicando lo básico por mensajes directos."*

---

## 3. Guion de Defensa para el Profesor (Sustentación Técnica)
*Objetivo: Demostrar dominio de fundamentos de desarrollo web front-end, semántica, buenas prácticas y rendimiento sin librerías innecesarias.*

### 🛠️ Argumentos Técnicos Clave

| Tema Técnico | Lo que hiciste en el código | Lo que debes decirle al profesor |
| :--- | :--- | :--- |
| **Arquitectura CSS** | Sistema de variables `:root` centralizadas. | *"Profesor, centralicé colores, fuentes, radios y sombras en variables CSS (`:root`). Esto garantiza escalabilidad, consistencia y facilita cualquier refactorización o cambio de tema futuro."* |
| **Estilo Visual** | Neo-brutalismo editorial contemporáneo. | *"Opté por la corriente de Neo-brutalismo con bordes definidos de `2px solid #0A0A0A` y sombras sólidas sin desenfoque (`5px 5px 0px`). Esto dota al sitio de carácter físico e identidad memorable frente al diseño plano genérico."* |
| **Marquesina (`Marquee`)** | Animación pura con `@keyframes` y `translateX`. | *"Para la cinta en movimiento no usé librerías pesadas ni JavaScript. Es puro CSS nativo con `@keyframes marquee-scroll` que traslada la tira al `-50%` en bucle continuo. Por accesibilidad, agregué `:hover { animation-play-state: paused; }` para que no dificulte la lectura a usuarios con dificultades de atención."* |
| **Fondos Difuminados** | Composición de `radial-gradient` + `linear-gradient`. | *"Para dar dinamismo a las secciones claras sin perder legibilidad, compuse capas de degradados radiales sutiles en los colores contrastantes de la marca (azul eléctrico y violeta al 15-20% de opacidad) combinados con blanco hueso editorial. El ratio de contraste texto-fondo supera el estándar WCAG AAA (superior a 14:1)."* |
| **Calcomanías / Stickers** | `transform: rotate(-6deg)` con posición absoluta. | *"Para romper la rigidez de la cuadrícula utilicé transformaciones 2D con rotación en badges (`.sticker-badge`), simulando pegatinas físicas de taller de diseño."* |
| **Semántica HTML5** | Etiquetas `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`. | *"Todo el documento está estructurado siguiendo semántica HTML5 pura, facilitando la accesibilidad para lectores de pantalla y mejorando el SEO orgánico."* |

---

## 4. Recorrido Sección por Sección (Qué decir en cada clic)

### 1. Barra Superior y Menú Sticky
* **Qué mostrar:** La barra superior negra con la "Regla de los 3 segundos" y el menú sticky con efecto *glassmorphism* (`backdrop-filter: blur(12px)`).
* **Qué decir:** *"El menú acompaña la navegación del usuario sin saturar la pantalla. El logo fue codificado manualmente combinando fuentes geométricas con fuente manuscrita (`Caveat`), exactamente igual al logotipo real."*

### 2. Inicio (`#inicio`) & Test de Diagnóstico
* **Qué mostrar:** El titular contundente, el sticker `⚡ Test Rápido` y cómo al desmarcar o marcar casillas el checklist reacciona dinámicamente.
* **Qué decir:** *"El Hero no pide dinero de golpe. Plantea un problema real y ofrece una autoevaluación interactiva que educa al usuario y lo invita a agendar su diagnóstico gratuito."*

### 3. Cinta Infinita (*Marquee*)
* **Qué mostrar:** La cinta en movimiento con las estrellas `☆` y cómo se pausa al pasar el puntero del mouse sobre ella.
* **Qué decir:** *"Esta transición rompe el corte entre secciones y refuerza conceptos clave de la marca sin requerir interacción manual del usuario."*

### 4. Quiénes Somos (`#quienes-somos`)
* **Qué mostrar:** Las tarjetas de Dayana y Diana con sus avatares circulares y los 3 pilares estratégicos (`01. Propósito`, `02. Cercanía`, `03. Método`).
* **Qué decir:** *"Humaniza la agencia. Se presenta el equipo 2:1 destacando la especialidad gráfica de Dayana y la visión estratégica de Diana, con enlaces directos a sus perfiles."*

### 5. Servicios (`#servicios`)
* **Qué mostrar:** La comparativa entre la tarjeta blanca de *Asesoría 2:1* y la tarjeta oscura con sticker `★ Más Pedido` de *Brand Kit*. Haz clic en el botón de un servicio y muestra cómo se preselecciona en el formulario de contacto.
* **Qué decir:** *"Aquí hay UX pensada para conversión: si el usuario hace clic en 'Cotizar mi Brand Kit', la página hace scroll suave hasta el formulario y selecciona automáticamente esa opción en el menú desplegable."*

### 6. Casos de Éxito (`#casos-exito`)
* **Qué mostrar:** La sección en modo oscuro inmersivo y los botones de filtrado rápido (*Todos*, *Branding*, *Estrategia*).
* **Qué decir:** *"El contraste visual oscuro genera un efecto de vitrina o galería de arte digital. Permite filtrar entre proyectos de diseño y recursos educativos propios como su guía 'Maestro de tu Feed'."*

### 7. Contacto & Diagnóstico (`#contacto`)
* **Qué mostrar:** La tarjeta dividida (lado azul eléctrico con el resumen de qué incluye el diagnóstico y lado blanco con el formulario validado).
* **Qué decir:** *"El formulario reduce la fricción pidiendo solo los datos esenciales: nombre, correo, usuario de Instagram y reto principal."*

---

## 5. Banco de Preguntas Trampa (Profesor & Cliente)

### ❓ Preguntas del Profesor

> **P: "¿Por qué no usaste Bootstrap o Tailwind?"**
> **R:** *"Porque para construir una identidad de marca disruptiva como Leuswork, las librerías prefabricadas generan código redundante y estilos genéricos que todo el mundo reconoce. Escribir CSS nativo con variables personalizadas me permitió optimizar la carga a menos de 50 KB, tener control absoluto del diseño y demostrar dominio de los estándares web."*

> **P: "¿Cómo garantizaste que el sitio sea responsivo?"**
> **R:** *"Utilicé CSS Grid y Flexbox combinados con Media Queries en puntos de ruptura estratégicos (`900px` para tablets/desktop y `600px` para móviles), junto con tipografía fluida usando la función `clamp()` (`clamp(1.9rem, 4vw, 2.75rem)`), lo que permite que los títulos escalen armoniosamente sin saltos bruscos."*

> **P: "¿Qué hiciste por la accesibilidad (a11y)?"**
> **R:** *"Utilicé jerarquía estricta de encabezados (`h1` único, `h2` para secciones, `h3` para tarjetas), contrastes de color validados por encima del estándar WCAG AAA, textos alternativos y atributos descriptivos, soporte de navegación con teclado mediante estados `:focus` y `:focus-visible`, y la propiedad `aria-hidden='true'` en elementos decorativos como la marquesina."*

---

### ❓ Preguntas del Cliente (Dayana y Diana)

> **P: "¿Esto es difícil de mantener si queremos cambiar precios o textos?"**
> **R:** *"En lo absoluto. El código está modularizado con comentarios claros en español. Cambiar un texto, un enlace de Instagram o un servicio toma segundos porque cada sección está claramente delimitada."*

> **P: "¿Por qué elegiste este estilo visual con bordes negros en lugar de fotos de stock?"**
> **R:** *"Las fotos de archivo hacen que las agencias luzcan falsas e intercambiables. Su cuenta de Instagram tiene carácter, arte vectorial y personalidad. Este estilo gráfico pone el foco en su propuesta de valor, resalta sus trabajos reales y transmite que ustedes no improvisan, sino que diseñan con intención."*

---
*README generado para el espacio de trabajo LEUSWORK — Listo para imprimir, repasar o usar como guía de diapositivas.*
