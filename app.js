let numeroAleatorio = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo =10;


function generarNumeroAleatorio(){
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    console.log(listaNumerosSorteados);

    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los numeros posibles');
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return generarNumeroAleatorio();
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    if (numeroDeUsuario === numeroAleatorio){
        asignarTextoElemento('p',`Acertaste en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}!`);
        //remover el disable del boton para activarlo
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        //El usuairo no acerto
        if(numeroDeUsuario > numeroAleatorio){
            asignarTextoElemento('p','El numero secreto es menor!');
        }else{
            asignarTextoElemento('p','El numero secreto es mayor!');
        }
        intentos++;
        limpiar();
    }
    return;
}

function limpiar(){
    document.querySelector('#valorUsuario').value='';
    return;
}

function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p',`Indica un numero del 1 al ${numeroMaximo}!`);
    numeroAleatorio = generarNumeroAleatorio();
    console.log(numeroAleatorio);
    intentos = 1;
}

function reiniciarJuego() {
    //limpiar la caja
    limpiar();
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled','true');
}

condicionesIniciales();
