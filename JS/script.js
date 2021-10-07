

/*document.getElementById("boton_inicio_sesión").addEventListener("click", iniciaSesion);
document.getElementById("boton_registro").addEventListener("click", register);


// declaracion de variables
var contenedor_login=document.querySelector(".contenedor_login-register")
var formulario__login=document.querySelector(".formulario__login")
var formulario__registro=document.querySelector(".formulario__registro")
var caja__inicio=document.querySelector(".caja__inicio-login")
var caja__Registro=document.querySelector(".caja__Registro-register")


function iniciaSesion(){
    if(window.innerWidth>850){
        formulario__registro.style.display="none";
        contenedor_login.style.left= "10px";
        formulario__login.style.display="block";
        caja__Registro.style.opacity="1";
        caja__inicio.style.opacity="0";  
    }else{
        formulario__registro.style.display="none";
        contenedor_login.style.left= "0px";
        formulario__login.style.display="block";
        caja__Registro.style.display="block";
        caja__inicio.style.display="none";
    }
    
}

/*function register(){

    formulario__registro.style.display="block";
    contenedor_login.style.left= "410px";
    formulario__login.style.display="none";
    caja__Registro.style.opacity="0";
    caja__inicio.style.opacity="1";*/

}