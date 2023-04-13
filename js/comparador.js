function encontrarMayor() {
  
    var toggle= document.getElementById('container');
    var body= document.querySelector('body');
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var resultado = "";
    

    toggle.onclick=function(){
      toggle.classList.toggle('active');
      body.classList.toggle('active');
    }
  
    if (num1 > num2) {
      resultado = "El número mayor es " + num1;
    } else if (num1 < num2) {
      resultado = "El número mayor es " + num2;
    } else {
      resultado = "Los números son iguales";
    }
  
    document.getElementById("resultado").innerHTML =resultado;
}

