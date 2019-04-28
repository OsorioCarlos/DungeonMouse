//Almacena los id de las celdas que se hacen click.
var celdas = [];

//Estado booleano, indica que no se hizo click al raton
var mouseSeleccionado = false;

//se activa cuando hago click en el ratón
var seleccionarRaton = function () {
    mouseSeleccionado = true;
}

//Mueve al personaje con clicks.
function mover(click){
    if(mouseSeleccionado===true){
         //Agraga los clicks que da el jugador al array "celdas".
        celdas.push(click);
        //Recupera el primer click del jugador y lo almacena.
        var inicio = document.getElementById(celdas[0]);
        //Recupera el segundo click del jugador y lo almacena.
        var destino = document.getElementById(celdas[1]);
        
        //Cambia de color al personaje para saber si ha sido sellecionado.
        if(celdas.length === 1){
            inicio.innerHTML = '<img src="img/player-clicked.png">';
        } else {
            inicio.innerHTML = '<img src="img/player.png" id="jugador" onclick="seleccionarRaton(this.id)">';
        }

        //Determina el numero de clicks que ha hecho el jugador
        if(celdas.length === 2){
            //Determina si el jugador ha hecho click sobre si mismo.
            if(inicio != destino){
                //Valida el movimiento que realiza el jugador.
                if(validarMovimiento()){
                    //Mueve al personaje.
                    destino.innerHTML = '<img src="img/player.png" id="jugador" onclick="seleccionarRaton(this.id)">';
                    inicio.innerHTML = "";
                    document.getElementById('efectos').innerHTML = '<embed src="sounds/mouse_walk.flac" autostarty="true" loop="false" volume="0" width="0" height="0">';
                } 
            }
            //Limpia el numero del clicks almacenados en el array
            celdas = [];
            mouseSeleccionado = false
        }
    }
}

//Función que valida el movimiento del personaje.
function validarMovimiento(){
    //Calcula cuanto se va a mover el personaje.
    var resultado = celdas[0]*1 - celdas[1]*1;
    //Si el movimiento es válido(movimiento celda x celda), regresa true; caso contrario regresa false
    if(Math.abs(resultado) === 1 || Math.abs(resultado) === 10){
        return true;
    } else {
        return false;
    }
}

//Lleva al jugador a la pantalla de game over.
function gameOver(){
    location.href='perdiste.html';
}

function perderNivel1(){
    //Almacena la etiqueta de la imagen del raton.
    var player = document.getElementById("jugador");
    var trampa1 = document.getElementById("91").firstElementChild;
    var trampa2 = document.getElementById("133").firstElementChild;
    var trampa3 = document.getElementById("85").firstElementChild;
    var trampa4 = document.getElementById("16").firstElementChild;
    
    //Si el raton cae en alguna trampa, el jugador pierde.
    if(trampa1 == player || trampa2 == player || trampa3 == player || trampa4 == player){
        document.getElementById('efectos').innerHTML = '<embed src="sounds/mousetrap.flac" autostarty="true" loop="false" volume="80" width="0" height="0">';
        setTimeout(gameOver, 300);
    }
}

//Función que evalua si se gana o pierde.
function ganarNivel1(){
    //Almacena la etiqueta de la imagen del raton.
    var player = document.getElementById("jugador");
    //Recupera la etiqueta de la imagen del queso
    var final = document.getElementById("173").firstElementChild;
    //Evalua si el raton esta en la casilla donde se encuentra el queso.
    if(final == player){
        document.getElementById('efectos').innerHTML = '<embed src="sounds/eating.mp3" autostarty="true" loop="false" volume="90" width="0" height="0">';
        setTimeout(pasar, 300);

        function pasar(){
            location.href='nivel-2.html';
        }
    }
}

function perderNivel2(){
    //Almacena la etiqueta de la imagen del raton.
    var player = document.getElementById("jugador");
    var trampa1 = document.getElementById("122").firstElementChild;
    var trampa2 = document.getElementById("73").firstElementChild;
    var trampa3 = document.getElementById("167").firstElementChild;
    var trampa4 = document.getElementById("48").firstElementChild;

    //Si el raton cae en alguna trampa, el jugador pierde.
    if(trampa1 == player || trampa2 == player || trampa3 == player || trampa4 == player){
        document.getElementById('efectos').innerHTML = '<embed src="sounds/mousetrap.flac" autostarty="true" loop="false" volume="80" width="0" height="0">';
        setTimeout(gameOver, 300);
    }
}

//Función que evalua si se gana o pierde.
function ganarNivel2(){
    //Almacena la etiqueta de la imagen del raton.
    var player = document.getElementById("jugador");
    //Recupera la etiqueta de la imagen del queso
    var final = document.getElementById("176").firstElementChild;
    //Evalua si el raton esta en la casilla donde se encuentra el queso.
    if(final == player){
        document.getElementById('efectos').innerHTML = '<embed src="sounds/eating.mp3" autostarty="true" loop="false" volume="90" width="0" height="0">';
        setTimeout(pasar, 300);
        
        function pasar(){
            location.href='nivel-3.html';
        }
    }
}

function perderNivel3(){
    //Almacena la etiqueta de la imagen del raton.
    var player = document.getElementById("jugador");
    var trampa1 = document.getElementById("84").firstElementChild;
    var trampa2 = document.getElementById("146").firstElementChild;

    //Si el raton cae en alguna trampa, el jugador pierde.
    if(trampa1 == player || trampa2 == player){
        document.getElementById('efectos').innerHTML = '<embed src="sounds/mousetrap.flac" autostarty="true" loop="false" volume="80" width="0" height="0">';
        setTimeout(gameOver, 300);
    }
}

//Función que evalua si se gana o pierde.
function ganarNivel3(){
    //Almacena la etiqueta de la imagen del raton.
    var player = document.getElementById("jugador");
    //Recupera la etiqueta de la imagen del queso
    var final = document.getElementById("171").firstElementChild;
    //Evalua si el raton esta en la casilla donde se encuentra el queso.
    if(final == player){
        document.getElementById('efectos').innerHTML = '<embed src="sounds/eating.mp3" autostarty="true" loop="false" volume="90" width="0" height="0">';
        setTimeout(pasar, 300);
        
        function pasar(){
            location.href='ganaste.html';
        }
    }
}

//Hace que el temporizador siempre este activo.
setInterval(temporizador, 1000);

//Función que controla el temporizador.
function temporizador(){
    if(segundos > 0){
        segundos--;
        document.getElementById('Segundos').innerText = segundos;
    } else {
        segundos = 60;
    }
    if(segundos <= 10){
        document.getElementById('Segundos').style.color = 'red';
        document.getElementById('sonido').innerHTML = '<embed src="sounds/time_running.flac" autostarty="true" loop="false" volume="70" width="0" height="0">';
    }
    if(segundos < 10){
        document.getElementById('Segundos').innerText = '0' + segundos;
    }
    
    //Si el temporizador llega a cero el jugador pierde
    if(segundos == 0){
        alert("SE ACABÓ EL TIEMPO");
        location.href='perdiste.html';
    }
}