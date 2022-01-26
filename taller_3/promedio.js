
// const lista1 = [100, 200, 300, 500];

function mediaAritmetica(lista) {

    // let sumaLista = 0;
    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    //Reduce - Recibe una función y permite sumar cada uno de los elementos
    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedioLista = sumaLista / lista.length;

    return promedioLista
}
const promedio = mediaAritmetica([1, 2, 3, 5]);

console.log(promedio);