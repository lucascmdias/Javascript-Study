import Conta from "./ola.js"

const conta1 = new Conta("olad",242,2424)

console.log(conta1.saldo)

conta1.depositar(0).then(()=>{
    console.log(`novo saldo é ${conta1.saldo}`)
}).catch((error)=>{
    console.log(error)
})

