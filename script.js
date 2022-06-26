//Crie um objeto que receba ao menos três propriedades sobre você.
let properties = {
    nome: "João",
    idade: 19,
    cidade: "RJ"
}

// Adicione uma nova propriedade sem alterar seu objeto inicial.
properties.hobbie = "jogar"

// Remova uma propriedade desse objeto.
delete properties.nome

//Mostre no console todas as propriedades desse objeto.
console.log(properties)

// Crie um array  chamado "cadastro" contendo ao menos 5 objetos. 
//Cada objeto deve receber as seguintes propriedades: nome,  idade,  telefone, amigos. 
//Na propriedade amigos, adicione ao menos 4 itens.
let cadastro = [{
    nome: "João",
    idade: 19,
    telefone: 98213 - 5432,
    amigos: ["Jordan", "Leno", "Hamom", "Débora"]
},
{
    nome: "Jordan",
    idade: 18,
    telefone: 171 - 171,
    amigos: ["Débora", "Aline", "Robert", "kelly", "Luiz"]
},
{
    nome: "Shiellyn",
    idade: 20,
    telefone: 98422 - 5535,
    amigos: ["João", "Leno", "Robert", "Kelly", "Gabriel"]
},
{
    nome: "Aline",
    idade: 25,
    telefone: 98378 - 2896,
    amigos: ["Débora", "Pamela", "Stéfanny", "Leandro", "Nikolas"]
},
{
    nome: "Leno",
    idade: 25,
    telefone: 98367 - 7787,
    amigos: ["Robert", "Jordan", "Larissa", "Kelly", "Hélio"]
}
]
// Mostre no console o nome de um amigo de cada lista.
console.log(cadastro[0].amigos[0])
console.log(cadastro[1].amigos[1])
console.log(cadastro[2].amigos[2])
console.log(cadastro[3].amigos[3])
console.log(cadastro[4].amigos[4])



