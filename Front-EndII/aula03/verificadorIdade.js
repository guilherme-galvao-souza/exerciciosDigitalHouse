let idade = parseInt(prompt("Introduza sua idade")); 

if(isNaN(idade) || idade == 0){
    alert('[ERRO] Os dados digitados estão incorretos, tente novamente.')
     
}else if(idade<18){
    alert('Você é menor de idade!')
}
else{
    alert('Você é maior de idade!')
}



