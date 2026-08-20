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

## Uso de la IA en el desarrollo del proyecto

1. Colores del título

- Prompt: "quiero que colorfly sea verde y studio blanco"

- Uso: Separar palabras del título con distintos colores.

- Resultado: Se usó `<span>` con clases `.verde` y `.blanco` para diferenciar el estilo de cada palabra dentro del mismo `<h1>`.

2. Lógica del generador de paleta

- Prompt: Consulta sobre cómo armar la lógica dentro del `addEventListener` del botón generar.

- Uso: Entender el flujo necesario para generar la paleta de colores.

- Resultado: Se explicó el orden de pasos: limpiar el contenedor, recorrer con `for` según la cantidad elegida, generar el color según el formato, crear el elemento y agregarlo al DOM.

3. Detección de errores en el código

- Prompt: Revisión de código con errores (`boton` no definido, `addEventListener` sin lógica).

- Uso:Detectar bugs antes de seguir avanzando con el proyecto.

- Resultado: Se identificaron las variables faltantes y los pasos necesarios (contenedor, `for`, `if`, creación de `div`) para que se mostraran los cuadros de color.

4. Corrección para mostrar los cuadros

- Prompt: "como arreglo el punto 3 para que se muestren los cuadros de colores"

- Uso: Corregir el problema detectado en la revisión anterior.

- Resultado: Se completó el `addEventListener` agregando el contenedor `paleta`, el `for` con la cantidad y el `if` para elegir el formato.

5. Listas desplegables de formato y cantidad

- Prompt: Consulta sobre cómo armar los `<select>` de formato de color y cantidad de colores.

- Uso: Crear las listas desplegables del proyecto.

- Resultado: Se armaron los `<select>` con los `id` correctos (`cantidad-colores`, `formato-color`) y sus respectivas opciones.

6. Organización de funciones en JavaScript

- Prompt: "estoy pensando que para JavaScript puedo poner functions para generar el hsl, hex y que al presionar el botón se creen las paletas aleatorias..."

- Uso: Validar la idea de separar la lógica del proyecto en funciones.

- Resultado: Se confirmó el enfoque correcto y se aclaró que el `querySelector` solo se necesita declarar una vez por elemento, no dentro de cada función.

7. Resumen de la lógica de funciones

- Prompt: Continuación de la consulta anterior sobre cómo organizar las funciones del proyecto.

- Uso:  Tener claridad sobre el rol de cada función dentro del código.

- Resultado: Se armó un resumen de qué hace cada función (`generarHex`, `generarHsl`, `generarPaleta`, `addEventListener`) y si usa o no `querySelector`.

8. Agrupar estilos de los títulos

- Prompt: "los dos títulos van al mismo nivel y son hermanas, para hacer cambios de color de letra y demás los debería agrupar en class= card h2"

- Uso: Aplicar estilos compartidos a los títulos de ambas tarjetas.

- Resultado: Se confirmó el uso del selector combinado `.card h2` para unificar el color, alineación y tamaño de ambos títulos.

9. Alinear las tarjetas en fila

- Prompt: Consulta sobre cómo poner las tarjetas de cantidad y formato una al lado de la otra.

- Uso: Alinear horizontalmente los controles de la interfaz.

- Resultado: Se envolvieron ambas tarjetas en un `<div class="contenedor-cards">` con `display: flex` y `gap` entre ellas.

10. Tipografía y alineación horizontal

- Prompt: "quiero que el tipo de letra sea mas delgado y que esten a la par horizontalmente los dos"

- Uso: Ajustar el grosor de la tipografía y confirmar la alineación de las tarjetas.

- Resultado: Se aplicó `font-weight: 300` para una letra más delgada y se confirmó el uso de flexbox para mantener las tarjetas alineadas.

11. Centrar el botón de generar

- Prompt: "quiero el boton de generar debajo de formato y cantidad y que este en el medio"

- Uso: Posicionar el botón de generar paleta debajo de los controles y centrado.

- Resultado: Se ajustó `.boton` con `display: block` y `margin: 0 auto` para centrarlo horizontalmente.

12. Depuración de posición del botón

- Prompt: "se sigue moviendo el boton de generar"

- Uso: Diagnosticar un problema de posicionamiento que persistía.

- Resultado: Se solicitó el HTML actualizado para identificar la causa exacta del movimiento del botón.

13. Tamaño y bordes de los cuadros de color

- Prompt: "quiero hacer los cuadrados de los colores mas grandes y que los bordes sean redondeados"

- Uso: Mejorar el tamaño y la forma visual de los cuadros de la paleta.

- Resultado: Se indicó agregar `width`, `height` y `border-radius` dentro de la clase `.color`.

14. Ajuste de bordes redondeados

- Prompt: Continuación de la consulta anterior sobre los bordes de los cuadros.

- Uso: Aplicar el estilo correctamente a los cuadros generados dinámicamente por JavaScript.

- Resultado: Se explicó que el estilo debía ir en la clase `.color` (no en `#paleta`), ya que es la clase que el JS asigna a cada cuadro individual.

15. Footer con redes sociales

- Prompt: "en el footer quiero meter mi cuenta de github y mi perfil de linkedin"

- Uso: Agregar enlaces a redes sociales en el pie de página.

- Resultado: Se agregó un `<footer>` con enlaces a GitHub y LinkedIn, junto con su estilo correspondiente.

16. Función de copiar al portapapeles

- Prompt:"ya tengo mi proyecto casi hecho me falta que al hacer click en un color se copie automáticamente, que diga un mensaje de copiado y que desaparezca"

- Uso: Implementar la función de copiar el color al portapapeles con confirmación visual.

- Resultado: Se agregó `navigator.clipboard.writeText()` dentro del evento `click` de cada cuadro, junto con un mensaje temporal eliminado mediante `setTimeout`.

17. Ícono de copiar

- Prompt: "lo que me falta es el icono de copiar"

- Uso: Agregar un ícono visual sobre cada cuadro de color.

- Resultado: Se creó un `<span>` con la clase `.icono-copiar`, insertado dentro de cada cuadro generado por JavaScript.

18. Comportamiento final del ícono al pasar el mouse

- Resultado: "ya entendi que quiero, que el icono de copiar salga cuando pase el mouse por el color y que al apretarlo se copie y aparezca el cartel de copiado"

- Uso:  Definir el comportamiento final de la interacción entre el ícono y el mensaje de confirmación.

- Resultado:Se explicó el flujo completo: pasar el mouse sobre el color → aparece el ícono → clic en el ícono → se copia el color → aparece el mensaje "Copiado" → el mensaje desaparece automáticamente.


## Autor

Nombre: Guadalupe Villena

Año: 2026