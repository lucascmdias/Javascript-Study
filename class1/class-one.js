let a = "lucas"
let b = "dias"

//concatenação de strigs
console.log(a + b)

const numero1 = "22"
const numero2 = "11"

// parseInt transforma uma string em um numero inteiro - parseFloat transforma em float
console.log(parseInt(numero1) + parseInt(numero2))

//divisão de strigs - JS irá automaticamente transformar em inteiro e efetuar a divisao
//quando nao for numero ambos, irá dar NaN
console.log(numero2 / numero1)

//declaração de variáveis 
const nome = "lucas"
const sobrenome = "dias"
//duas formas de chamar variáveis com separação correta
console.log(nome,sobrenome)
console.log(`meu nome é: ${nome} ${sobrenome}`)

//trabalhando com listas - duas formas de criar listas
listasCidades = ["Recife", "alagoas", "paraiba"]
listasCidade2 = new Array (
    "Recife2",
    "alagoas2",
    "paraiba2"
)
console.log(listasCidades)
console.log(listasCidade2)

//adicionando um item na lista
listasCidades.push("Coritba")
console.log(listasCidades)

//removendo o ultimo da lista
listasCidades.pop()
console.log(listasCidades)

//removendo em uma localização especifica da lista - exemplo, removendo o segundo posição 1 na lsita
//splice ( localização na lista, quantidade de numeros removidos nesta localizaçao)
listasCidades.splice(1,1)
console.log(listasCidades)


// condicional 
const acompanhada = true;
let idade1 = 10

//condicional OU é || , E é &&
if(idade1 >=20){
    console.log("é maior de idade")
}else{
    console.log("é menor de idade")
    if (acompanhada){
        console.log("está acompanhada então é")
    }

}

//LOOPS FOR E WHILE 
let contador = 0
while(contador <=1){
    console.log(listasCidades[contador])
    contador += 1
}




