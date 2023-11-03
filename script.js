let menu_responsive = document.querySelector(".checkbtn");
      menu_responsive.onclick = function () {
        navBar = document.querySelector(".navbar");
        navBar.classList.toggle("active");
      };

     //alert("Hola este es mi Javascript");

//let nombe = "Alexander";

//ver nombre1 = "Alexander";

//const nombre2 = "Alexander";

//console.log(nombre);

let contenidoTitulo = "Mi web"

let titulo = document.querySelector(".logo .fuente-acento");
titulo.innerHTML = contenidoTitulo;

let textoTitulo = titulo.innerText;
console.log(textoTitulo);

if (textoTitulo == "Mi web") {
    titulo.innerHTML = "Mi Primera Wed";
    
}

const form = document.getElementById("form");
const nombre = document.getElementById("nombre");
const parrafo = document.getElementById("alertas");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    warnings += `El nombre debe contener más de 4 carcateres`;
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});