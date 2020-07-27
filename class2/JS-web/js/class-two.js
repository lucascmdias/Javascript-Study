let titulo = document.querySelector(".titulo")

//acessar um texto de alguma tag de string é por document.textContent

//titulo.textContent = "TESTANDO TIUTLO NOVO"

//selecionando alguma tag pelo nome da classe
//let subtitulo = document.querySelector(".subtitulo")
//alert(subtitulo.textContent)

var pacientes = document.querySelectorAll(".paciente")

// LENGTH diz o tamanho da lista
//alert(pacientes.length)


for (var i = 0; i< pacientes.length; i++) {
    var tdpeso = pacientes[i].querySelector(".info-peso")
    var peso = tdpeso.textContent

    //pegar dados de uma tag, o text content local no site
    var tdaltura = pacientes[i].querySelector(".info-altura")
    var altura = tdaltura.textContent

    //pegando o IMC do primeiro paciente e mudando o conteudo do texto e colocando la
    let tdIMC = pacientes[i].querySelector(".info-imc")

    //usando condicionais javascript com html
    let peso_valido = true
    let altura_valido = true

    if (peso <= 0 || peso >= 300) {
        console.log("peso é invalido")
        peso_valido = false
        tdIMC.textContent = "peso é invalido"
        tdIMC.style.backgroundColor = "red"
    }

    if (altura <= 0 || altura >= 3.00) {
        console.log("altura é invalida")
        altura_valido = false
        tdIMC.textContent = "altura é invalida"
        //esta função classList irá pegar todas as classes e adicionar esta classe na linha indicada
        tdIMC.classList.add("campo-invalido")
    }


    //se ambos forem true, irá efetuar o calculo do imc e colocar no html
    if (altura_valido && peso_valido) {
        let IMC = (peso / (altura * altura))
        console.log(IMC)

        //funcao toFixed( numero de casas decimais) , limita as casas, round
        tdIMC.textContent = IMC.toFixed(2)
    }
}

//add eventListener é adicioanr algum evento, neste caso como click
//element.addEventListener(event, listener);
//event : event can be any valid JavaScript event.Events are used without “on” prefix like 
//use “click” instead of “onclick” or “mousedown” instead of “onmousedown”.

// 1° forma de usar
//titulo.addEventListener("click",mostrarmsg)

//segunda forma, arrow function ou com o nome Function na frente
titulo.addEventListener("click", ()=>{
    alert("olá fui clicado")
})


//quando quer pegar o valor de uma informacao, H1, H2, H3, é por DOCUMENT.TEXTCONTENT
//QUANDO FOR PEGAR ALGO DE UM FORM, OU BOTAO, PEGA POR DOCUMENT.VALUE

//EVENTO PADRAO DO BOTÃO - usar EVENT.PREVENTDEFAULT()

var botao = document.querySelector("#adicionar-paciente")

botao.addEventListener("click", (event)=>{
    event.preventDefault()
    alert("meu botão foi clicado")
})
