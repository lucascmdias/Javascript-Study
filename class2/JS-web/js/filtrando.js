let campoBusca = document.querySelector("#filtrar-tabela")
console.log(campoBusca.value)


campoBusca.addEventListener("input", function(){
    console.log(this.value)
    let pacientes = document.querySelectorAll(".paciente")
    
    if(this.value.length > 0 ){
        
        pacientes.forEach( (paciente)=>{
            let tdNome = paciente.querySelector(".info-nome")
            let nome = tdNome.textContent

            //essa RegExp é para criar uma expressão com o que escreveu e com o "i" fica insensitive, pega maiusculo e minusculo
            //o test é para testar se bate alguma string la
            let expressao = new RegExp(this.value, "i")
            if(!expressao.test(nome)){
                paciente.classList.add("invisivel")

            }else{
                paciente.classList.remove("invisivel")
            }
        })
    }else{
        pacientes.forEach( (paciente) =>{
            paciente.classList.remove("invisivel")
        })
    }
})