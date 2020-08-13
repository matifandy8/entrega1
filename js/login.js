//Función que se ejecuta una vez que se haya lanzado el evento de
//que el documento se encuentra cargado, es decir, se encuentran todos los
//elementos HTML presentes.
document.addEventListener("DOMContentLoaded", function(e){

});

function validation(){
    var email = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;
    var error_message = document.getElementById('error_message');
    var text;

    error_message.style.padding = "10px";

    if(email === ''){
      text = "Escriba un email";
      error_message.innerHTML = text;
      return false;
    }
    if(password === ''){
      text = "Escriba una contraseña";
      error_message.innerHTML = text;
      return false;
    }
    window.location="index.html"
    return true;
}

// ------------------------

const form = document.getElementById('myform');

form.addEventListener('submit', (e) => {
      e.preventDefault();

      validation();
});