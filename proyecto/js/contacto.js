function validarFormulario() {
  const validationLimit = $("#validationLimit")[0];
  const txtNombres = $("#txtNombres")[0].value;
  const txtEmail = $("#txtEmail")[0].value;
  const txtTelefono = $("#txtTelefono")[0].value;

  const regexNombres = /^([A-Z]{1}[a-zñáéíóú]+[\s]*)+$/;
  const regexEmail = /\S+@\S+\.\S+/;
  const regexTelefono = /^[0-9]{9}$/;

  if (!regexNombres.test(txtNombres)) {
    alert("Nombre no válido");
    return 0;
  }

  if (!regexEmail.test(txtEmail)) {
    alert("Correo Electrónico no válido");
    return 0;
  }

  if (!regexTelefono.test(txtTelefono)) {
    alert("Celular no válido");
    return 0;
  }

  const formulario = $("#formulario")[0];
  formulario.reset();
  validationLimit.innerText = "";

  alert("Se ha enviado tu consulta correctamente");
}

function validarEntrada(event, value, maxLength) {
  const validationLimit = $("#validationLimit")[0];

  console.log("value: " + event.key);

  if (value !== undefined && value.toString().length >= maxLength && event.key !== 'Backspace') {
    validationLimit.innerText = `El motivo no puede ser mayor a ${maxLength} caracteres`;
    event.preventDefault();
  } else {
    validationLimit.innerText = "";
  }
}
