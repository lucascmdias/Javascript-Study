let form = document.querySelector("#form-adiciona")

var botao = document.querySelector("#adicionar-paciente")



//para acessar um local de um form, com o INPUT tendo o id e name igual - exemplo id e name = peso
//PEGA O FORM PELO DOCUMENT E DEPOIS ACESSA PELO NAME E DEPOIS VALUE PARA SABER O VALOR MESMO
botao.addEventListener("click", (event) => {
    event.preventDefault()
    alert(`${form.nome.value} , ${form.peso.value} , ${form.altura.value} , ${form.gordura.value} `)

    let paciente = ObterInformacoesPaciente(form)

    let pacientesTr = montarTr(paciente)

    //colocando o TR com os TD no formulario
    let tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacientesTr)


    //limpar o formulario
    form.reset()
})

function ObterInformacoesPaciente(form) {
    let paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: imc(form.altura.value, form.peso.value)
    }

    return paciente
}
function montarTr(paciente) {
    //criando os elementos vazios da tabela
    let pacientesTr = document.createElement("tr")
    pacientesTr.classList.add("paciente")

    //let nomeTd = montarTd(paciente.nome,"info-nome")
    //let pesoTd = montarTd(paciente.peso,"info-peso")
    //let alturaTd = montarTd(paciente.altura,"info-altura")
    //let gorduraTd = montarTd(paciente.gordura,"info-gordura")
    //let imcTd = montarTd(paciente.imc,"info-imc")

    //colocando os elementos TD dentro de TR - como filho , child funcao appendchild
    pacientesTr.appendChild(montarTd(paciente.nome,"info-nome"))
    pacientesTr.appendChild(montarTd(paciente.peso,"info-peso"))
    pacientesTr.appendChild(montarTd(paciente.altura,"info-altura"))
    pacientesTr.appendChild(montarTd(paciente.gordura,"info-gordura"))
    pacientesTr.appendChild(montarTd(paciente.imc,"info-imc"))
    
    return pacientesTr
}
function montarTd(dado, classe){
    //colocando o text content das tags vazias com os valores acima
    let td = document.createElement("td")
    td.classList.add(classe)
    td.textContent = dado
    return td
}

//FOR EACH, ELE FAZ UMA FUNÇÃO DADA UMA LISTA, STRING
//LISTA.FOREACH( () =>{
    //FUNCAO
//})

//INNER.HTML É QUANDO QUER ACESSAR ALGUM HTML E TROCAR