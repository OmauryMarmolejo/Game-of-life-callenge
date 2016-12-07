var cx=1000;
var cy=400;
var tamaniocelda=10;
var ancho =cx/10;
var alto =cy/10;
var tablero, canvas, ctx, cronometro, i, j;


var cambiartamano=function(){
    cx=0;
    cy=0;
    cx=document.getElementById('x').value;
    cy=document.getElementById('y').value;
    console.log(cy);
    document.getElementsByClassName('table')[0].width=(cx*10)+"px";
    document.getElementsByClassName('table')[0].height=(cy*10)+"px";
    console.log(document.getElementsByClassName('table')[0].width=(cx*10));
    console.log(document.getElementsByClassName('table')[0].height=(cy*10));
    ancho=cx*10;
    alto=cy*10;
    dibujarTablero();
}
function iniciarJuego() {
    canvas=document.getElementById("tablero");
    ctx=canvas.getContext("2d");      
    canvas.addEventListener("click", onCanvasClick, false); 
    inicializarTablero();
    dibujarTablero();
}


function inicializarTablero() {
    tablero = [];
    for ( i = 0; i < ancho; i++) {
        tablero[i] = [];
        for ( j = 0; j < alto; j++ ) {
            tablero[i][j] = 0;
        }
    }
}
         
function dibujarTablero() {
    for (i = 0; i < ancho; i++) {
        for (j = 0; j < alto; j++ ) {
            if ( tablero[i][j] == 0){
                ctx.fillStyle = "#E74C3C";
            } else {
                ctx.fillStyle = "#3498DB";
            }
            ctx.strokeStyle = '#D44637'; 
            ctx.lineWidth = 1;
            ctx.strokeRect(i*tamaniocelda, j*tamaniocelda, tamaniocelda, tamaniocelda);                   
            ctx.fillRect(i*tamaniocelda, j*tamaniocelda, tamaniocelda, tamaniocelda);      
        }
    }
}

