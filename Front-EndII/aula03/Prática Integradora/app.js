// Desenvolver um script que permita somar um array de números consecutivos, de forma que se some o primeiro número com o segundo e o imprima através do console. 
// Depois, temos que pegar este resultado e somar o terceiro número, e assim por diante, até termos terminado de percorrer todo o array.

//1° Forma utilizando um for padrão
let numeros = [1,2,4,8]
let soma = 0
for(let i = 0 ; i<numeros.length ; i++){
     soma += numeros[i]
     console.log(soma)
}
console.log('-----------------------------------------')
//2° Forma utilizando um for of
let numbers = [1,2,4,8]
let sum = 0
for(let somaNumeros of numbers){
     console.log(sum +=somaNumeros)
}