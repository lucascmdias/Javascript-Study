//import { Cliente } from "./cliente.js"

class ContaCorrente{
    constructor(agencia,conta,cliente){
        this.agencia = agencia
        this.conta = conta
        this._saldo = 0
        this._cliente = cliente

    }

    get saldo(){
        return this._saldo
    }

    set saldoNovo(novosaldo){
        this._saldo = novosaldo
    }

    depositar(valor){
        let saldonovo = parseInt(this._saldo) + parseInt(valor)
        this._saldo = parseInt(saldonovo)
        
    }

    sacar(valor){
        if(parseInt(valor) <= parseInt(this._saldo)){
            let saldonovo = parseInt(this._saldo) - parseInt(valor)
            this._saldo = parseInt(saldonovo)
            
        }else{
            console.log("SALDO INFERIOR AO VALOR - SACAR VALOR MENOR")
        }
    }

    set clienteNovo(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente
        }
    }


}
