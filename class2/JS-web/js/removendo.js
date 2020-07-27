var pacientes = document.querySelectorAll(".paciente")

let table = document.querySelector("#tabela-pacientes")


//pega o todo, neste caso é a tabela
//event.target seria o alvo, se cliquei em uma celula ele pegara a celula
//mas como queremos excluir a linha toda, usa parentNode, pega o Pai
table.addEventListener("dblclick", (event) =>{
    let alvoEvento = event.target
    let alvoEventoPai = alvoEvento.parentNode

    event.target.parentNode.classList.add("fadeOut")

    setTimeout( () =>{
        event.target.parentNode.remove()
    },600)
    
})


//pacientes.forEach( (paciente) =>{
//   paciente.addEventListener("dblclick", ()=>{
//        alert("fui clicado 2 vezes")
//    })
// })
