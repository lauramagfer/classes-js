// escrevendo as classes de um jogo

// 1- definindo os heróis


let vingadores = {
    herois: {
        0: [ "Steve Rogers", 33, "Capitão América" ],
        1: [ "Tony Stark", 30, "Homem de Ferro" ],
        2: [ "Peter Parker", 18, "Homem Aranha" ],
        3: [ "Bruce Banner", 35, "Hulk" ]
    }
}

// 2- criando a classe
// obs: um laço for pode ser criado dentro de uma classe, desde que ele esteja alocado dentro de um método, e não solto por aí 

class ataqueHeroi {
    constructor (nome, idade, tipo) {
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar() {
        for (let indice in vingadores.herois) {
            let [ nomeHeroi, idadeheroi, tipoHeroi ] = vingadores.herois[ indice ]

            switch (tipoHeroi) {
                case "Capitão América":
                    console.log(`O herói ${tipoHeroi} usou o escudo para atacar`)
                    break;
                case "Homem de Ferro":
                    console.log(`O herói ${tipoHeroi} usou sua armadura para atacar`)
                    break;
                case "Homem Aranha":
                    console.log(`O herói ${tipoHeroi} usou sua teia pra atacar`)
                    break;
                case "Hulk":
                    console.log(`O herói ${tipoHeroi} usou sua força para atacar`)
                    break;
            }
        }

    }
}

let ataqueFinal = new ataqueHeroi(vingadores)

ataqueFinal.atacar()