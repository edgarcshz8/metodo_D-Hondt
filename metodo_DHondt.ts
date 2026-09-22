/**
 * Script para hacer el calculo de los puestos para cargos politicos tales como diputados, senadores. 
 **/

let cantidadVotos = new Map<string, number>([["Renovacion-nacional", 10000],["Nacional-libertarios", 15000], ["Frente-amplio", 35000], ["UDI", 50000]])
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

console.log(puestosElegidos)

