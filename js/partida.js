function iniciar() {
    if (!cronometro) {
        cronometro = setInterval("repeticion()", 50);
    }
}
function repeticion() {
        turno();
        dibujarTablero();
    }
         
function detener() {
    clearInterval(cronometro);
    cronometro = undefined;
}
         
function limpiar() {
    detener();
    iniciarJuego();
}

function onMouseMove(evt) {
            ctx.fillStyle="#3498DB";        
            ctx.fillRect(evt.clientX - canvas.offsetLeft, evt.clientY - canvas.offsetTop, tamaniocelda, tamaniocelda);
        }
         
function onCanvasClick(evt) {
            var x = evt.clientX - canvas.offsetLeft;
            var y = evt.clientY - canvas.offsetTop;
            var tableroX = parseInt(x/tamaniocelda);
            var tableroY = parseInt(y/tamaniocelda);
            if (vivo(tableroX, tableroY) ) tablero[tableroX][tableroY] = 0;
            else tablero[tableroX][tableroY] = 1;
            dibujarTablero();
        }
         
function NumeroVecinos(x, y) {
    var contador=0;
    if (vivo(x-1, y)) contador++;
    if (vivo(x-1, y-1)) contador++;
    if (vivo(x-1, y+1)) contador++;
    if (vivo(x, y-1)) contador++;
    if (vivo(x, y+1)) contador++;
    if (vivo(x+1, y-1)) contador++;
    if (vivo(x+1, y+1)) contador++;
    if (vivo(x+1, y)) contador++;
    return contador;
}

function vivo(x,y) {
            if (tablero[x] ) 
                if (tablero[x][y]==1) return true;
            return false;
        }
         
function turno() {
    var nuevoTablero = [];
    for (i= 0; i< ancho; i++) {
        nuevoTablero[i] = [];
        for (j= 0; j< alto; j++ ) {
            var vecinos = NumeroVecinos(i, j);
            if ( vivo(i,j) && vecinos<2)nuevoTablero[i][j]=0;
            else if (vivo(i,j) && vecinos>3 ) nuevoTablero[i][j]=0;
            else if (vivo(i,j) && (vecinos==2||vecinos==3))nuevoTablero[i][j]= 1;
            else if (!vivo(i,j) && (vecinos== 3) ) nuevoTablero[i][j] = 1;
            else nuevoTablero[i][j] = 0;
        }
    }
    tablero = nuevoTablero;
}
         
      