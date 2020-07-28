import { Cliente } from "./cliente.js"
import { Conta } from "./conta.js"

export class ContaCorrente extends Conta{
    constructor(agencia,cliente,conta){
        super(agencia,0,cliente)
        this.conta = conta

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
        let taxa = 1.1
        this._sacar(valor,taxa)
    }

    set clienteNovo(novoCliente){
        if(novoCliente instanceof Cliente){
            this._cliente = novoCliente
        }
    }


}
