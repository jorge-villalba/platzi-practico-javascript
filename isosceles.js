// Altura de triangulo

function alturaTrianguloIsosceles(ladoA, ladoB, base) {
    if (ladoA != ladoB){
        console.log("Los lados A y B no son iguales");
    }else{
        const alturaTriangulo = Math.sqrt(ladoA**2-((base**2)/4));
        console.log(`La altura es ${alturaTriangulo}`);
    };
}

alturaTrianguloIsosceles(4,4,5);

a= 1;
b= String(a);
console.log(typeof(b));
c=Number(b);
console.log(typeof(c));

