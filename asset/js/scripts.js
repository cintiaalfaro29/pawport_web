/* menu hamburguesa */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav_links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

/* storage */

const form = document.getElementById("form");
const mensaje = document.getElementById("mensaje");

//save datos
function guardarDatos() {
  const datos = {
    nombre: form.nombre.value,
    email: form.email.value,
    telefono: form.telefono.value,
    mascota: form.mascota.value,
    detalles: form.detalles.value,
  };
  localStorage.setItem("formTraslado", JSON.stringify(datos));
}

// enviar form
form.addEventListener("submit", (e) => {
  e.preventDefault(); // No enviar
  guardarDatos();
  mensaje.textContent = "¡Enviado!";
});

