let form = document.querySelector("#form-adiciona")

var botao = document.querySelector("#adicionar-paciente")



//para acessar um local de um form, com o INPUT tendo o id e name igual - exemplo id e name = peso
//PEGA O FORM PELO DOCUMENT E DEPOIS ACESSA PELO NAME E DEPOIS VALUE PARA SABER O VALOR MESMO
botao.addEventListener("click", (event) => {
    event.preventDefault()
    alert(`${form.nome.value} , ${form.peso.value} , ${form.altura.value} , ${form.gordura.value} `)

    let nomeForm = form.nome.value
    let pesoForm = form.peso.value
    let alturaForm = form.altura.value
    let gorduraForm = form.gordura.value


    //criando os elementos vazios da tabela
    let pacientesTr = document.createElement("tr")

    let nomeTd = document.createElement("td")
    let pesoTd = document.createElement("td")
    let alturaTd = document.createElement("td")
    let gorduraTd = document.createElement("td")

    //colocando o text content das tags vazias com os valores acima
    nomeTd.textContent = nomeForm
    pesoTd.textContent = pesoForm
    alturaTd.textContent = alturaForm
    gorduraTd.textContent = gorduraForm

    //colocando os elementos TD dentro de TR - como filho , child funcao appendchild
    pacientesTr.appendChild(nomeTd)
    pacientesTr.appendChild(pesoTd)
    pacientesTr.appendChild(alturaTd)
    pacientesTr.appendChild(gorduraTd)

    //colocando o TR com os TD no formulario
    let tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacientesTr)
})