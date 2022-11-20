// ========================================  ========================================
// Mtro. Adrián Guzmán - Clase: Introducción a las Tecnologías de Información.
// Referencia de las funciones de la librería p5.js: https://p5js.org/reference/
// Video tutorial utilizado como referencia para esta práctica: https://www.youtube.com/watch?v=-HHFKpps7fQ
// ======================================== Primera parte ========================================

// Inicializar variables
// 1
pelotaX = 200;
pelotaY = 50;
// 4
// movimientoPelotaX = 0;
// 10
movimientoPelotaX = 5;

// movimientoPelotaY = 1;
// 9
movimientoPelotaY = 0;
// 7
const gravedad = 0.5;

// Función setup() para definir el espacio y forma del 'canvas' en HTML.
// 1
function setup(){
    createCanvas(1520, 730);
}

// Función draw() que 
// 1
function draw(){
    // color de fondo en RGB
    // 1
    background(256,256,256);

    // Mover la pelota
    // 8
    movimientoPelotaY = movimientoPelotaY + gravedad;
    // 5
    pelotaX = pelotaX + movimientoPelotaX;
    pelotaY = pelotaY + movimientoPelotaY;

    // Función rebote =============================================
    // 6
    if(pelotaY>720){
        movimientoPelotaY = movimientoPelotaY * -1;
    }

    if(pelotaY<10){
        movimientoPelotaY = movimientoPelotaY * -1;
    }

    // 11
    if(pelotaX>1510){
        movimientoPelotaX = movimientoPelotaX * -1;
    }

    // 12
    if(pelotaX<10){
        movimientoPelotaX = movimientoPelotaX * -1;
    }

    // Dibujar la pelota 
    // Parámetros circle(coordenada_X, coordenada_Y, Diámetro)
    // 
    circle(pelotaX, pelotaY, 20);
    // Color de la pelota en RGB
    // 2
    fill(0,0,0);

    // Evento click con pelota
    // 13
    if(mouseIsPressed){
        pelotaX = mouseX;
        pelotaY = mouseY;
    }
}
