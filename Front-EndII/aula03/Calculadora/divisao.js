//Crie um arquivo dividir.js contendo uma função chamada dividir, que deve ser exportada no final do arquivo. Esta função deve receber 2
//parâmetros e retornar a divisão dos mesmos. Importante:
//Considere o cenário em que se um dos dois parâmetros for zero, a função retornará "Não se pode dividir por zero".

function divisao(num1,num2){
    
    if(num1 == 0 || num2 ==0){
        console.log('Não se pode dividir por zero')
    }else{
         return num1 / num2
    }
   
}

export default divisao