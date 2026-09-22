let cantidadVotos = new Map<string, number>([["listaA", 10000],["listaB", 15000], ["listaC", 35000], ["listaD", 50000]])
let cantidadDePuestos: number = 4 

let resultadoPuestosLista: [string, number][] = [];

for (let [llave, valor] of cantidadVotos) {
    for (let i = 1; i <= cantidadDePuestos; i++) {
        let division = valor/i
        //  aca se agrega al array de resultados
        resultadoPuestosLista.push([llave, division])
    }
}

let puestosElegidos = resultadoPuestosLista.sort((a, b) => b[1] - a[1]).slice(0, cantidadDePuestos);

