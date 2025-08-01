/* menu hamburguesa */
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav_links");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navLinks.classList.toggle("active");
});

/* storage */
const formulario = document.getElementById("form");
const mensaje = document.getElementById("mensaje");

formulario.addEventListener("submit", function (event) {
  event.preventDefault(); //evita el envio y que se recargue la página
  //capturamos los datos del usuario
  const datosUser = {
    nombre: document.getElementById("nombreForm").value,
    email: document.getElementById("emailForm").value,
    telefono: document.getElementById("telefonoForm").value,
    mascota: document.getElementById("mascotaForm").value,
    detalles: document.getElementById("detallesForm").value,
  };
  //guardamos en localStorage (comollamarenconsola, conviertoElObjetoAjson.yLoConvierteEnUnString())
  localStorage.setItem("datosFormulario", JSON.stringify(datosUser));
  //mensaje para el usuario
  mensaje.textContent = "¡Enviado!";
  //limpia el formulario
  formulario.reset();
});

