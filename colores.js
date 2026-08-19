const cantidad = document.querySelector("#cantidad-colores");
const formato = document.querySelector("#formato-color");
const boton = document.querySelector("#boton");
const paleta = document.querySelector("#paleta");

function generarHex() {
  let hex = "#";
  const caracteres = "0123456789abcdef";

  for (let i = 0; i < 6; i++) {
    hex += caracteres[Math.floor(Math.random() * 16)];
  }

  return hex;
}

function generarHsl() {
  const h = Math.floor(Math.random() * 361);
  const s = Math.floor(Math.random() * 101);
  const l = Math.floor(Math.random() * 101);

  return `hsl(${h}, ${s}%, ${l}%)`;
}

function generarPaleta() {
  paleta.innerHTML = "";

  const numColores = Number(cantidad.value);

  for (let i = 0; i < numColores; i++) {
    let color;

    if (formato.value === "hex") {
      color = generarHex();
    } else {
      color = generarHsl();
    }

    const cuadro = document.createElement("div");
    cuadro.classList.add("color");
    cuadro.style.backgroundColor = color;

    const textoColor = document.createElement("span");
    textoColor.textContent = color;

    const botonCopiar = document.createElement("button");
    botonCopiar.classList.add("boton-copiar");
    botonCopiar.innerHTML = "⧉";
    botonCopiar.title = "Copiar color";

    botonCopiar.addEventListener("click", (event) => {
      event.stopPropagation();

      navigator.clipboard.writeText(color);

      const mensaje = document.createElement("div");
      mensaje.textContent = "✓ Copiado";
      mensaje.classList.add("mensaje-copiado");

      document.body.appendChild(mensaje);

      setTimeout(() => {
        mensaje.remove();
      }, 1500);
    });

    cuadro.appendChild(textoColor);
    cuadro.appendChild(botonCopiar);

    paleta.appendChild(cuadro);
  }
}

boton.addEventListener("click", generarPaleta);
formato.addEventListener("change", generarPaleta);