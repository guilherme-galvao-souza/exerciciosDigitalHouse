// Nomes : Ueber James
//         Erik Dornellas
//         Mahiny Andrade
//         Rafael Alves
//         Guilherme Galvão de Souza

// Desenvolver um script que permita somar um array de números consecutivos, de forma que se some o primeiro número com o segundo e o imprima através do console. 
// Depois, temos que pegar este resultado e somar o terceiro número, e assim por diante, até termos terminado de percorrer todo o array.
let numeros = [1,2,3,4,5,6]
let soma = 0
for(let i = 0 ; i<numeros.length ; i++){
    soma += numeros[i]
    console.log(soma)
}




