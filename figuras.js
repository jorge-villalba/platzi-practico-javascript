// Cuadrado

console.group("Cuadrados"); // Agrupar console logs

// const ladoCuadrado = 5;
// console.log("Los lados del cuadrado miden: " + ladoCuadrado + " cm");

function perimetroCuadrado(lado) {
    return lado * 4;
};

// console.log("El perimetro del cuadrado es: " + perimetroCuadrado + " cm");

function areaCuadrado(lado) {
    return lado * lado;
};

// console.log("El area del cuadrado es: " + areaCuadrada + " cm^2");

console.groupEnd();

// Triángulo

console.group("Triangulos");

// const ladoTriangulo1 = 6;
// const ladoTriangulo2 = 6;
// const baseTriangulo = 4;

// console.log(`Los lados del triangulo miden: ${ladoTriangulo1} cm, ${ladoTriangulo2} cm, ${baseTriangulo} cm`);

// const alturaTriangulo = 5.5;
// console.log(`La altura del triangulo es ${alturaTriangulo} cm`);


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
};

// console.log("El perimetro del triangulo es: " + perimetroCuadrado + " cm");

function areaTriangulo(base, altura) {
    return (base * altura) / 2;
};

// console.log("El area del triangulo es: " + areaCuadrada + " cm^2");

console.groupEnd();

// Circulo

console.group("Circulos");

// // Radio
// const radioCirculo = 4;
// console.log(`El radio del circulo es: ${radioCirculo} cm`);

// Diametro
function diametroCirculo(radio) {
    return radio * 2;
};
// console.log(`El diametro del circulo es: ${diametroCirculo} cm`)

// PI
const PI = Math.PI;
// console.log(`PI es: ${PI}`)

//Circunferencia
function perimetroCirculo(radio) {
    const diametro = diametroCirculo(radio);
    return diametro * PI;
};

// console.log(`La circunferencia del circulos es: ${perimetroCirculo} cm`)

//Area
function areaCirculo(radio) {
    return (radio * radio) * PI
};

// console.log(`El area del circulo es: ${areaCirculo} cm`)

console.groupEnd();



// Interacción con HTML

// Cuadrado
function calcularPerimetroCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value; // Valor del inpur de HTML

    const perimetro = perimetroCuadrado(value);
    document.getElementById("perimetroCuadrado").value = perimetro;
};

function calcularAreaCuadrado() {
    const input = document.getElementById("inputCuadrado");
    const value = input.value; // Valor del inpur de HTML

    const area = areaCuadrado(value);
    document.getElementById("areaCuadrado").value = area;
};

//Circulo
function calcularPerimetroCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value; // Valor del inpur de HTML

    const perimetro = perimetroCirculo(value);
    document.getElementById("perimetroCirculo").value = perimetro;
};

function calcularAreaCirculo() {
    const input = document.getElementById("inputCirculo");
    const value = input.value; // Valor del inpur de HTML

    const area = areaCirculo(value);
    document.getElementById("areaCirculo").value = area;
};


// Triangle
function calcularPerimetroTriangulo() {
    const lado1 = document.getElementById("lado1Triangulo").value;
    const lado2 = document.getElementById("lado2Triangulo").value;
    const base = document.getElementById("baseTriangulo").value;

    const perimetro = perimetroTriangulo(lado1, lado2, base);
    document.getElementById("perimetroTriangulo").value = perimetro;
};

function calcularAreaTriangulo() {
    const base = document.getElementById("baseTriangulo").value;
    const altura = document.getElementById("alturaTriangulo").value

    const area = areaTriangulo(base, altura);
    document.getElementById("areaTriangulo").value = area;
};
