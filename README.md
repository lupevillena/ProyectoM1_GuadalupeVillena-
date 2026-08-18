# Colorfly Studio

## Descripción
https://github.com/lupevillena/ProyectoM1_GuadalupeVillena-

Proyecto Integrador – Módulo 1 | Full Stack – Henry
Colorfly Studio es una aplicación web estatica que permite generar paletas de colores aleatorias
El usuario puede elegir entre diferentes cantidades de colores y seleccionar el formato en el que desea visualizar los códigos de color.

## Funcionalidades

- Generación aleatoria de paletas de colores.
- Selección de 6, 8 o 9 colores.
- Selección entre formatos HEX y RGBA.
- Visualización de la paleta generada.
- Interfaz sencilla y fácil de usar.


## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- Git
- GitHub
- GitHub Pages

## Uso de la aplicación

1. Seleccionar la cantidad de colores: 6, 8 o 9.
2. Seleccionar el formato: HEX o RGBA.
3. Presionar el botón "Generar".
4. La aplicación mostrará una paleta de colores aleatoria.

## Estructura del proyecto
ProyectoM1_Lupe/
│
├── Desarrollo/
│   ├── index.html
│   ├── CSS/
│   │   └── style.css
│   └── JS/
│       └── colores.js
│
├── Documentacion/
│   ├── README.md
│   │
│   └── capturas/
│       ├── inicio.png
│       ├── seleccion-colores.png
│       └── paleta-generada.png
│
└── IA/
    ├── prompts.md
    └── capturas/
        ├── prompt-html.png
        ├── prompt-javascript.png
        └── prompt-accesibilidad.png

## Decisiones de diseño

El diseño de Colorfly Studio se planteó con un enfoque minimalista, buscando que la paleta de colores generada sea el elemento visual principal de la aplicación.

Se optó por una interfaz sencilla y centrada, con controles claramente diferenciados para seleccionar la cantidad de colores y el formato. La combinación de blanco, negro y verde se utilizó como identidad visual de la interfaz, evitando competir visualmente con los colores generados.

Se utilizó la tipografía **Inter** por su estilo moderno, limpio y fácil de leer, ayudando a mantener una apariencia simple y profesional.

Además, se priorizó una estructura responsive para facilitar el uso de la aplicación en diferentes dispositivos.

## Uso de Inteligencia Artificial

Se utilizó inteligencia artificial como herramienta de apoyo durante el desarrollo del proyecto para:

- Resolver dudas sobre HTML, CSS y JavaScript.
- Recibir orientación sobre la estructura del proyecto.
- Comprender conceptos de Git y GitHub.
- Revisar aspectos básicos de accesibilidad.

Los prompts utilizados y sus resultados se encuentran en la carpeta:

## Uso de Inteligencia Artificial

Durante el desarrollo de Colorfly Studio se utilizó inteligencia artificial como herramienta de apoyo para resolver dudas, comprender conceptos de programación y mejorar algunos aspectos del proyecto.

La IA se utilizó como apoyo y las decisiones finales, implementación y modificaciones del código fueron realizadas por el estudiante.

### Ejemplos de prompts utilizados

#### Prompt 1 — Estructura HTML

**Prompt:**

> ¿Cómo puedo crear dos listas desplegables en HTML, una para seleccionar entre 6, 8 y 9 colores y otra para seleccionar entre los formatos HEX y RGBA?

**Resultado:**

La IA explicó cómo utilizar los elementos `<select>` y `<option>` para crear las listas desplegables y cómo obtener sus valores posteriormente mediante JavaScript.

**Uso en el proyecto:**

Se utilizó esta orientación para implementar los selectores de cantidad de colores y formato.

---

#### Prompt 2 — Generación de colores

**Prompt:**

> ¿Cómo puedo utilizar Math.random() en JavaScript para generar colores aleatorios para una paleta?

**Resultado:**

La IA explicó cómo utilizar `Math.random()` y `Math.floor()` para generar valores RGB aleatorios entre 0 y 255.

**Uso en el proyecto:**

La explicación se utilizó como referencia para desarrollar la función de generación aleatoria de colores.

---

#### Prompt 3 — Accesibilidad

**Prompt:**

> ¿Qué consideraciones básicas de accesibilidad debería tener un generador de paletas de colores?

**Resultado:**

La IA recomendó utilizar labels asociados a los elementos de formulario, mantener un contraste suficiente y proporcionar un foco visible para los elementos interactivos.

**Uso en el proyecto:**

Estas recomendaciones se utilizaron para mejorar la accesibilidad de la interfaz.

---

### Capturas de los prompts y resultados

Las capturas de las conversaciones utilizadas durante el desarrollo se encuentran en:

`IA/capturas/`

## Autor

Nombre: Guadalupe Villena

Año: 2026