//Contagem de Medalhas Crie um programa que receba o número de medalhas de ouro, prata e bronze de um país nas Olimpíadas e calcule o total de medalhas. Ao escrever 'sair', o programa deverá estabelecer e mostrar na tela o ranking de medalhas no formato: #Ranking de medalhas: #Brasil: 7 medalhas #França: 6 medalhas #Argentina: 3 medalhas


let rankingMedalhas = [];


while (true) {
   
    let pais = prompt("Digite o nome do país (ou 'sair' para encerrar):");

    
    if (pais.toLowerCase() === 'sair') {
        break; 
    }

   
    let ouro = parseInt(prompt(`Digite o número de medalhas de ouro para ${pais}:`));
    let prata = parseInt(prompt(`Digite o número de medalhas de prata para ${pais}:`));
    let bronze = parseInt(prompt(`Digite o número de medalhas de bronze para ${pais}:`));

    
    let totalMedalhas = ouro + prata + bronze;

    rankingMedalhas.push({ nome: pais, medalhas: totalMedalhas });
}


rankingMedalhas.sort(function (a, b) {
    return b.medalhas - a.medalhas; 
});


console.log("# Ranking de medalhas:");
for (let i = 0; i < rankingMedalhas.length; i++) {
    console.log(`${rankingMedalhas[i].nome}: ${rankingMedalhas[i].medalhas} medalhas`);  
};
 

 
alert (`Ranking de Medalhas :#Brasil: 7 medalhas #França: 6 medalhas #Argentina: 3 medalhas`)
