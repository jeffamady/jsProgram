let cuadrado = document.getElementById("cuadrado");
let estiloDelCuadrado = getComputedStyle(cuadrado);

// console.log(estiloDelCuadrado)

// reset valor

var topInicial= "0px";
var leftInicial = "0px";

var posicionTop = parseInt(estiloDelCuadrado.top);
var posicionLeft = parseInt(estiloDelCuadrado.left)


let moveUp = () => {
    posicionTop = posicionTop - 10;
    cuadrado.style.top = posicionTop + 'px';
};

let moveDown = () => {
    posicionTop = posicionTop + 10;
    cuadrado.style.top = posicionTop + 'px';
};

let moveLeft = () => {
    posicionLeft = posicionLeft - 10;
    cuadrado.style.left = posicionLeft + 'px';
};

let moveRight = () => {
    posicionLeft = posicionLeft + 10;
    cuadrado.style.left = posicionLeft + 'px';
};

let moveInitial = () => {
    cuadrado.style.left = topInicial;
    cuadrado.style.top = leftInicial;

    posicionLeft = 0;
    posicionTop = 0;
}
