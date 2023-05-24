
    function validar() {
    var nombre=document.getElementById("nombre22");
    var valor=nombre.value; 
    var mayuscula=0;
    
    for (i=0;i<valor.length;i++){
        letra = valor.substr(i,1);

        if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(letra)>=0){
            mayuscula=1;
        }
        
    }
    if (mayuscula==1){
        document.getElementById("mensajeError").innerHTML="";
        nombre.classList.replace("error","válido");
        return 1;
           
    }
    else {
        document.getElementById("mensajeError").innerHTML="Nombre incorrecto";
        nombre.classList.replace("válido","error");
        return 0;
    
        
    }
}

    function validar2() {
    var apellidos=document.getElementById("apellidos22");
    var valor=apellidos.value; 
    var mayuscula=0;

    for (i=0;i<valor.length;i++){
        letra = valor.substr(i,1);
        if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(letra)>=0){
            mayuscula=1;
        }
    
    }
    if (mayuscula==1){
        document.getElementById("mensajeError2").innerHTML="";
        apellidos.classList.replace("error","válido");
        return 1;
        
    }
    else {
        document.getElementById("mensajeError2").innerHTML="Apellidos incorrectos";
        apellidos.classList.replace("válido","error");
        return 0;
    }
}

    function validar3() {
    var contraseña=document.getElementById("contraseña2");
    var valor=contraseña.value; 
    var mayuscula=0;
    var minuscula=0;
    var numero=0;

     
    for (i=0;i<valor.length;i++){
        letra = valor.substr(i,1);
        if ("ABCDEFGHIJKLMNOPQRSTUVWXYZ".indexOf(letra)>=0){
            mayuscula=1;

        }    
        if ("abcdefghijklmnñopqrstuvwxyz".indexOf(letra)>=0){
            minuscula=1;
    
        }
        if ("0123456789".indexOf(letra)>=0){
            numero=1;
    
        }
                }
    if (mayuscula==1 && minuscula==1 && numero==1 && valor.length>=5){
        document.getElementById("mensajeError3").innerHTML="";
            contraseña.classList.replace("error","válido");
            return 1;
            
        }
        else {
            document.getElementById("mensajeError3").innerHTML="Contraseña incorrecta";
            contraseña.classList.replace("válido","error");
            return 0;
        }
        
    
}

    function validar4(){

        
        var nickUsuario=document.getElementById("nickDeUsuario2");
        var valor=nickUsuario.value; 

        if (valor.length >=3) {
            document.getElementById("mensajeError4").innerHTML="";
            nickUsuario.classList.replace("error","válido");
            return 1;
    
        } else {
            document.getElementById("mensajeError4").innerHTML="Nickname incorrecto";
            nickUsuario.classList.replace("válido","error");
            return 0;
        }
}

function validar5(){

        
    var email=document.getElementById("email22");
    var valor=email.value; 
    var punto=0;
    var arroba=0;

    for (i=0;i<valor.length;i++){
        letra = valor.substr(i,1);
        if ("@".indexOf(letra)>=0){
            arroba=1;
        }
        if (".".indexOf(letra)>=0){
            punto=1;
        }
    }

    if (arroba==1 && punto>=1) {
        document.getElementById("mensajeError5").innerHTML="";
        email.classList.replace("error","válido");
        return 1;

    } else {
        document.getElementById("mensajeError5").innerHTML="Email incorrecto";
        email.classList.replace("válido","error");
        return 0;
    }
   

}

function total(){


    var a=validar();
    var b=validar2();
    var c=validar3();
    var d=validar4();
    var e=validar5();

    if (a==1){
        a.classList.replace("error","válido");
          
    }
    else {
        a.classList.replace("válido","error");
    }

    if (b==1){
        b.classList.replace("error","válido");
          
    }
    else {
        b.classList.replace("válido","error");
    }
    if (c==1){
        c.classList.replace("error","válido");
          
    }
    else {
        c.classList.replace("válido","error");
    }
    if (d==1){
        d.classList.replace("error","válido");
          
    }
    else {
        d.classList.replace("válido","error");
    }
    if (e==1){
        e.classList.replace("error","válido");
          
    }
    else {
        e.classList.replace("válido","error");
    }
}


function limpiarCampos(){
   
    var nombre=document.getElementById("nombre22");
    var apellidos=document.getElementById("apellidos22");
    var contraseña=document.getElementById("contraseña2");
    var nick=document.getElementById("nickDeUsuario2");
    var email=document.getElementById("email22");
    var mensaje=document.getElementById("mensajeError");
    var mensaje2=document.getElementById("mensajeError2");
    var mensaje3=document.getElementById("mensajeError3");
    var mensaje4=document.getElementById("mensajeError4");
    var mensaje5=document.getElementById("mensajeError5");

    valor=nombre.value ="";
    valor2=apellidos.value="";
    valor3=contraseña.value="";
    valor4=nick.value="";
    valor5=email.value="";
    valor6=mensaje.innerHTML="";
    valor6=mensaje2.innerHTML="";
    valor6=mensaje3.innerHTML="";
    valor6=mensaje4.innerHTML="";
    valor6=mensaje5.innerHTML="";

    nombre.classList.replace("error","válido");
    apellidos.classList.replace("error","válido");
    contraseña.classList.replace("error","válido");
    nick.classList.replace("error","válido");
    email.classList.replace("error","válido");


    
}


