
document.getElementById("myForm2").addEventListener("submit", function(event){
    event.preventDefault();
  
    var user = document.getElementById("user").value;
    var password = document.getElementById("password").value;
    var name = document.getElementById("name").value;
    var fecha = document.getElementById("fecha").value;
  
    if (!validateuser(user)) {
      alert("Por favor, introduce un usuario.");
      return false;
    }
  
    if (!validatePassword(password)) {
      alert("Por favor, introduce una contraseña válida.");
      return false;
    }

    if (!validateFecha(fecha)) {
        alert("Por favor, introduce una fecha válida.");
        return false;
      }

      if (!validateName(name)) {
        alert("Por favor, introduce un nombre válido.");
        return false;
      }
  
    alert("Formulario enviado correctamente.");
  });
  
  function validateuser(user) {
    return user.length > 0;
  }
  
  function validatePassword(password) {
    
    return password.length >= 8;
  }

  function validateFecha(fecha) {
    
    return fecha.length > 0;
  }

  function validateName(name) {
    
    return name.length >= 3;
  }