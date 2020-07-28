//import Cliente from "./cliente.js"
//import ContaCorrente from "./contacorrente.js"

//const Cliente = require("./cliente.js")
//const ContaCorrente = require ("./contacorrente.js")

let botao = document.querySelector(".botao")
let form = document.querySelector("#adicionarCliente")

console.log(botao)
console.log(form)
console.log(form.cpf)

let cliente2 = new Cliente("afsafa", 12323)
let contacorrente2 = new ContaCorrente(12421,124142,cliente2)

console.log(contacorrente2.saldo)
contacorrente2.depositar(100)
console.log(contacorrente2.saldo)
contacorrente2.depositar(100)
console.log(contacorrente2.saldo)
contacorrente2.sacar(50)
console.log(contacorrente2.saldo)


botao.addEventListener("click", (event) =>{
    console.log("ola entrei")
    event.preventDefault()
    //let nome = form.name.value
    //let cpf = form.cpf.value
    let cliente = new Cliente(form.name.value,form.cpf.value)
    console.log(cliente)
    let contacorrente1 = new ContaCorrente(form.agencia.value,form.conta.value,cliente)
    console.log(contacorrente1)
    


    var variavel = 0
    while(variavel <=3){
        variavel = prompt("digite o que deseja: 1 - ver o saldo, 2 - sacar, 3 - depositar, 4 - encerrar")

        if(variavel ==1){
            alert(contacorrente1.saldo)
        }
        if(variavel == 2){
            let numero = prompt("quanto voce deseja sacar")
            contacorrente1.sacar(numero)
        }
        if(variavel == 3){
            let numero2 = prompt("quanto voce deseja depositar")
            contacorrente1.depositar(numero2)
        }
        if(variavel == 4){
            break
        }
    }
    

    //alert(cliente.name)
})

//private, quando for declarar é so colcoar o hash #
//encapsulamento na hora é colocar o underscore _