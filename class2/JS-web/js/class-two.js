//let titulo = document.querySelector("h1")


//acessar um texto de alguma tag de string é por document.textContent

//titulo.textContent = "TESTANDO TIUTLO NOVO"

//selecionando alguma tag pelo nome da classe
//let subtitulo = document.querySelector(".subtitulo")
//alert(subtitulo.textContent)

var primeiro_paciente = document.querySelector("#primeiro-paciente")
var tdpeso = primeiro_paciente.querySelector(".info-peso")
var peso = tdpeso.textContent

//pegar dados de uma tag, o text content local no site
var tdaltura = primeiro_paciente.querySelector(".info-altura")
var altura = tdaltura.textContent

//pegando o IMC do primeiro paciente e mudando o conteudo do texto e colocando la
let tdIMC = primeiro_paciente.querySelector(".info-imc")

//usando condicionais javascript com html
let peso_valido = true
let altura_valido = true

if (peso <= 0 || peso >= 300) {
    console.log("peso é invalido")
    peso_valido = false
    tdIMC.textContent = "peso é invalido"
}

if (altura <= 0 || altura >= 3.00) {
    console.log("altura é invalida")
    altura_valido = false
    tdIMC.textContent = "altura é invalida"
}


//se ambos forem true, irá efetuar o calculo do imc e colocar no html
if (altura_valido && peso_valido) {
    let IMC = (peso / (altura * altura))
    console.log(IMC)

    tdIMC.textContent = IMC
}