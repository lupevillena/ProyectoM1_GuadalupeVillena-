# Colorfly Studio

##  Índice

- [Demo](#demo)
- [Descripción](#descripción)
- [Objetivos del proyecto](#objetivos-del-proyecto)
- [Funcionalidades](#funcionalidades)
- [Tecnologías utilizadas](#tecnologías-utilizadas)
- [Uso de la aplicación](#uso-de-la-aplicación)
- [Estructura del proyecto](#estructura-del-proyecto)
- [Decisiones de diseño](#decisiones-de-diseño)
- [Instalación y ejecución](#instalación-y-ejecución)
- [Despliegue](#despliegue)
- [Flujo principal de la app](#flujo-principal-de-la-app)
- [Uso de Inteligencia Artificial](#uso-de-inteligencia-artificial)
- [Capturas](#capturas)
- [Autor](#autor)

## Demo

https://lupevillena.github.io/ProyectoM1_GuadalupeVillena-/

## Descripción

Proyecto Integrador – Módulo 1 | Full Stack – Henry
Colorfly Studio es una aplicación web estatica que permite generar paletas de colores aleatorias
El usuario puede elegir entre diferentes cantidades de colores y seleccionar el formato en el que desea visualizar los códigos de color.

## Objetivos del proyecto

Los principales objetivos de Colorfly Studio son:

- Aplicar conocimientos de HTML, CSS y JavaScript.
- Trabajar con manipulación del DOM mediante JavaScript.
- Generar colores aleatoriamente.
- Crear una interfaz sencilla y visualmente atractiva.
- Implementar elementos interactivos mediante botones y listas desplegables.
- Practicar el uso de Git y GitHub.
- Publicar una aplicación web utilizando GitHub Pages.

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

```
ProyectoM1_Guadalupe_Villena/
│
├── README.md
│
├── Documentacion/
│   └── flujo-app/
│       ├── 01-inicio.png
│       ├── 02-seleccion.png
│       ├── 03-paleta.png
│       └── ...
│
├── index.html
├── style.css
└── colores.js
```

## Decisiones de diseño

El diseño de Colorfly Studio se planteó con un enfoque minimalista, buscando que la paleta de colores generada sea el elemento visual principal de la aplicación.

Se optó por una interfaz sencilla y centrada, con controles claramente diferenciados para seleccionar la cantidad de colores y el formato. La combinación de blanco, negro y verde se utilizó como identidad visual de la interfaz, evitando competir visualmente con los colores generados.

Se utilizó la tipografía **Inter** por su estilo moderno, limpio y fácil de leer, ayudando a mantener una apariencia simple y profesional.

Además, se priorizó una estructura responsive para facilitar el uso de la aplicación en diferentes dispositivos.

## 💻 Instalación y ejecución

Para ejecutar Colorfly Studio de manera local, sigue los siguientes pasos:

1. Clonar el repositorio

Desde una terminal, ejecuta:

git clone https://github.com/lupevillena/ProyectoM1_GuadalupeVillena-.git

2. Entrar al proyecto

cd ProyectoM1_GuadalupeVillena-

3. Abrir el archivo

Abrir el archivo index.html en un navegador web.

También puedes utilizar Live Server desde Visual Studio Code para ejecutar la aplicación durante el desarrollo.

## Despligue

La aplicación fue desplegada utilizando GitHub Pages.

Pasos realizados:
1. Creación del repositorio en GitHub.
2. Desarrollo de la aplicación utilizando HTML, CSS y JavaScript.
3. Control de versiones mediante Git.
4. Creación de commits para registrar los cambios.
5. Subida del proyecto al repositorio mediante Git.
6. Configuración de GitHub Pages.
7. Publicación de la aplicación.

## Flujo principal de la app

 1. Pantalla inicial

<<img src="documentacion/flujo%20de%20app/1.jpg" width="900">

La aplicación muestra la pantalla principal de Colorfly Studio, donde se ven los botones de tamaño, cantidad y generar
 2. Selección de colores

<img src="documentacion/flujo%20de%20app/2.jpg" width="900">

El usuario puede elegir generar una paleta de 6, 8 o 9 colores 

 3. Selección de formato

<img src="documentacion/flujo%20de%20app/3.jpg" width="900">

El usuario puede elegir entre el formato Hsl y Hex Generación de la paleta Al presionar el botón "Generar", se crea una paleta de colores aleatoria.

 4. Generación de la paleta

<img src="documentacion/flujo%20de%20app/4.jpg" width="900">
Al presionar el botón "Generar", se crea una paleta de colores aleatoria.


5. Copiar un color

<img src="documentacion/flujo%20de%20app/5.jpg" width="900">

Al pasar el cursor sobre un color aparece el botón de copiar. Al hacer clic, el código del color se copia y aparece el mensaje "Copiado".

## Uso de Inteligencia Artificial

Se utilizó inteligencia artificial como herramienta de apoyo durante el desarrollo del proyecto para:

- Resolver dudas sobre HTML, CSS y JavaScript.
- Recibir orientación sobre la estructura del proyecto.
- Comprender conceptos de Git y GitHub.
- Revisar aspectos básicos de accesibilidad.

### Ejemplos de prompts utilizados

#### Prompt 1 — Estructura HTML

**Prompt:**

> ¿Cómo puedo crear dos listas desplegables en HTML, una para seleccionar entre 6, 8 y 9 colores y otra para seleccionar entre los formatos HEX y RGBA?

<img src="IA/capturas/01-html.png" width="400">

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