let pedra = 0;
let papel = 1;
let tesoura = 2;
let opcoes = ['Pedra','Papel','Tesoura']
function pedraPapeltesoura(opcao){
    let escolhaRôbo = Math.round(Math.random()*3)
    if(opcao == pedra && escolhaRôbo == pedra){
        console.log(`Você escolheu :${opcoes[opcao]} / Robô escolheu: ${opcoes[escolhaRôbo]}\nEmpate!`)
    }
   else if (opcao == pedra && escolhaRôbo == tesoura){
       console.log(`Você escolheu :${opcoes[opcao]} / Robô escolheu: ${opcoes[escolhaRôbo]}\nVocê Venceu!`)
   }
   else if (opcao == pedra && escolhaRôbo == papel){
       console.log(`Você escolheu :${opcoes[opcao]} / Robô escolheu: ${opcoes[escolhaRôbo]}\nVocê Perdeu!`)
   }
   else if(opcao == papel && escolhaRôbo == papel){
        console.log(`Você escolheu :${opcoes[opcao]} / Robô escolheu: ${opcoes[escolhaRôbo]}\nEmpate!`)
    }
    else if (opcao == papel && escolhaRôbo == tesoura){
        console.log(`Você escolheu :${opcoes[opcao]} / Robô escolheu: ${opcoes[escolhaRôbo]}\nVocê Perdeu!`)
    }
    else if (opcao == papel && escolhaRôbo == pedra){
        console.log(`Você escolheu :${opcoes[opcao]} / Robô escolheu: ${opcoes[escolhaRôbo]}\nVocê Venceu!`)
    }
    else if(opcao == tesoura && escolhaRôbo == tesoura){
        console.log(`Você escolheu :${opcoes[opcao]} / Robô escolheu: ${opcoes[escolhaRôbo]}\nEmpate!`)
    }
    else if (opcao == tesoura && escolhaRôbo == pedra){
        console.log(`Você escolheu :${opcoes[opcao]} / Robô escolheu: ${opcoes[escolhaRôbo]}\nVocê Perdeu!`)
    }
    else if (opcao == tesoura && escolhaRôbo == papel){
        console.log(`Você escolheu :${opcoes[opcao]} / Robô escolheu: ${opcoes[escolhaRôbo]}\nVocê Venceu!`)
}else{
    console.log(`[ERRO] Tente novamente`)
}
}
pedraPapeltesoura(1)