var nombre= document.getElementById('nombre');
var nombre=document.getElementById('comentario');
var error=document.getElementById('error');
error.style.color= 'red';

function enviarComentario(){
    console.log('Enviando comentario....' );

    var mensajesError = [];

    if(nombre.value === null || nombre.value ===''){
        mensajesError.push('Ingresa tu nombre');
    }
    if(comentario.value === null || nombre.value ===''){
        mensajesError.push('Ingresa tu comentario');
    }

    error.innerHTML= mensajesError.join(', ');

    return false;
    
}