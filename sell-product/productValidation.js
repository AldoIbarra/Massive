
document.getElementById("myForm3").addEventListener("submit", function(event){
    event.preventDefault();
  
    
    var precio = document.getElementById("precio").value;
    var name = document.getElementById("nameP").value;
    var categ = document.getElementById("categoria").value;
      if (!validateName(name)) {
        alert("Por favor, introduce un nombre válido.");
        return false;
      }
      if (!validatePrecio(precio)) {
        alert("Por favor, introduce un precio válido.");
        return false;
      }
  
    alert("Formulario enviado correctamente.");
  });
  
  function validateName(name) {
    
    return name.length >= 3;
  }
  
  function validatecateg(categ) {
    
    return categ.length >= 8;
  }

  function validatePrecio(precio) {
    var re = /^\d+(\.\d{1,2})?$/;
    return re.test(precio);
  }

