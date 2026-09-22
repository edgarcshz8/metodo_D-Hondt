/**
 * Script para hacer el calculo de los puestos para cargos politicos tales como diputados, senadores. 
 **/

enum Partidos {
    RN = "Renovacion Nacional",
    NL = "Nacional libertario",
    FA = "Frente Amplio",
    UDI = "Union Democrata Independiente"
}

let cantidadVotos = new Map<string, number>([[Partidos.RN, 10000],[Partidos.NL, 15000], [Partidos.FA, 35000], [Partidos.UDI, 50000]])
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

console.log("los partidos escogidos son:")
for (let [partido, votos] of puestosElegidos) {
    console.log("-----------------------------")
    console.log(partido,"->",votos, "votos")
}
console.log("-----------------------------")