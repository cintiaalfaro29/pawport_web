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

//limpiamos datos del formulario
function validarNombre(nombre) {
  const regexNombre = /^[a-zA-ZÀ-ÿ\s]{3,40}$/; //verifica si el nombre tiene entre 3-40 letras y espacios
  return regexNombre.test(nombre);
}
function validarEmail(email) {
  const regexEmail =
    /^[^\s@]+@(gmail\.com|hotmail\.com|yahoo\.com|outlook\.com)$/i; //i(insencible a mayus/minus)
  return regexEmail.test(email);
}
function validarTelefono(telefono) {
  const regexTelefono = /^\+?[0-9\s]{6,20}$/;
  return regexTelefono.test(telefono);
}

formulario.addEventListener("submit", function (event) {
  event.preventDefault(); //evita el envio y que se recargue la página
  //capturamos los datos del usuario
  const nombre = document.getElementById("nombreForm").value.trim();
  const email = document.getElementById("emailForm").value.trim();
  const telefono = document.getElementById("telefonoForm").value.trim();
  const mascota = document.getElementById("mascotaForm").value;
  const detalles = document.getElementById("detallesForm").value.trim();

  //validaciones
  if (!validarNombre(nombre)) {
    alert("Por favor, ingrese su nombre correctamente");
    return;
  }
  if (!validarEmail(email)) {
    alert("El correo ingresado no es válido");
    return;
  }
  if (!validarTelefono(telefono)) {
    alert("El teléfono ingresado no es válido");
    return;
  }

  //guardamos los datos del usuario en un object
  const datosUser = { nombre, email, telefono, mascota, detalles };

  //convertimos el string.enUnObjeto y guardamos en un array de objetos
  let guardarUsuarios =
    JSON.parse(localStorage.getItem("datosFormulario")) || [];

  guardarUsuarios.push(datosUser);
  //guardamos en localStorage (comollamarenconsola, conviertoElObjetoAjson.yLoConvierteEnUnString())
  localStorage.setItem("datosFormulario", JSON.stringify(guardarUsuarios));

  //mensaje para el usuario
  mensaje.textContent = "¡Enviado!";
  //limpia el formulario
  formulario.reset();
});
