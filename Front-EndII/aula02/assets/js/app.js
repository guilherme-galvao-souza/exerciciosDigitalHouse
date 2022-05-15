let nomePagina = document.getElementById('nome-cliente')
let nome = prompt('Digite seu nome :')
alert(`Seja bem vindo, ${nome}`);
alert(`Que bom que voltou!`)
let resultado = confirm(`${nome} ,você quer continuar no site?`)
if(!resultado){
    alert('É uma pena ter que ir embora :(')
    nomePagina.innerHTML = `Tchau ${nome}, espero que volte algum dia :(`
}
else{
    
    alert('Que bom que quer continuar com a gente!!!')
    nomePagina.innerHTML +=nome
}