
document.getElementById("myForm").addEventListener("submit", function(event){
  event.preventDefault();

  var user = document.getElementById("user").value;
  var password = document.getElementById("password").value;

  if (!validateUser(user)) {
    alert("Por favor, introduce un nombre de usuario");
    return false;
  }

  if (!validatePassword(password)) {
    alert("La contraseña debe ser de minimo 8 caracteres");
    return false;
  }

  alert("Formulario enviado correctamente.");
});

function validateUser(user) {
  return user.length > 0;
}

function validatePassword(password) {
  return password.length >= 8;
}
