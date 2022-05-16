let pessoa ={
    nome : 'Guilherme',
    sobrenome:'Galvão',
    idade:'19',
    emprego:'Desempregado'
}
for(let dadosCliente in pessoa){
    console.log(dadosCliente+':'+pessoa[dadosCliente])
}

let filmes = ['Bad guys','Homem - Aranha no AranhaVerso', 'Kimi no na wa','Koe no Katachi','A viagem de Chihiro']
for(let todosFilmes of filmes){
    console.log(todosFilmes)
}
// for(let i = 0 ; i<filmes.length; i++){
//     console.log(filmes[i])
// }