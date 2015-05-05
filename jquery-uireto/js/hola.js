function ValidarDatos() {

  if($("#nombre").val() == ""){
    alert("El campo Nombre no puede estar vacio.");   
    return false;
  }
  if($("#apellidos").val() == ""){
    alert("El campo Apellidos no puede estar vacio.");
    return false;
  }
  if($("#Dir").val() == ""){ //direccion 
    alert("El campo Direccion no puede estar vacio.");
    return false;
  }
  if($("#correo").val() == ""){
    alert("El campo Correo no puede estar vacio.");
    return false;
  }

  if ($("#cedula").val() == ""){
    alert("El campo Cedula no puede estar vacio.");
    return false; 
  }

  if($("#telefono").val() == ""){
    alert("el campo Telefono no puede estar vacio.");
    return false;
  }
  return true;
}

var uri_r = 'http://192.168.7.102/services/regpersonas.php'
var user = {nombre:
            apellido:
            correo:
            cedula:
            telefono:
            direccion:
    }

function user(){
  $.ajax({
    type:'post',
    url: uri_r,
    data: user,
    dataType: 'json'
    success: function(data){
      console.log(data);
    },
    error: function(data){
      console.log(data);
    }
  });
};

user();