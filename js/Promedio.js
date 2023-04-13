function Calificacion(){
    
    
    var toggle= document.getElementById('container');
    var body= document.querySelector('body');
    var cal1=parseFloat(document.getElementById("cal1").value);
    var cal2=parseFloat(document.getElementById("cal2").value);
    var cal3=parseFloat(document.getElementById("cal3").value);
    var promedio=(cal1+cal2+cal3)/3;
    var resultado = document.getElementById("resultado");

    toggle.onclick=function(){
        toggle.classList.toggle('active');
        body.classList.toggle('active');
    }

    if(promedio>=7){
        resultado.innerHTML="El alumno aprobo " + promedio;
    }else{
        resultado.innerHTML="El alumno reprobo " + promedio;
    }

    

}