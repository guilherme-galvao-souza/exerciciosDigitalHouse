let pessoa ={
    nome : 'Guilherme',
    sobrenome:'Galvão',
    idade:'19',
    emprego:'Desempregado'
}
for(let dadosCliente in pessoa){ //é utilizado apenas para objetos
    console.log(dadosCliente+':'+pessoa[dadosCliente])
}

let filmes = ['Bad guys','Homem - Aranha no AranhaVerso', 'Kimi no na wa','Koe no Katachi','A viagem de Chihiro']
for(let todosFilmes of filmes){ //é utilizado para objetos iteráveis, por exemplo, matrizes e Strings.
    console.log(todosFilmes)
}
// for(let i = 0 ; i<filmes.length; i++){
//     console.log(filmes[i])
// }