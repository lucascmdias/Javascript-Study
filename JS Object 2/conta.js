export class Conta{
    constructor(agencia,saldoInicial,cliente){
        this.agencia = agencia
        this._saldo = saldoInicial
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
        let taxa = 1
        this._sacar(valor,taxa)
    }

    _sacar(valor, taxa){
        valor = valor * taxa
        if(parseInt(valor) <= parseInt(this._saldo)){
            let saldonovo = parseInt(this._saldo) - parseInt(valor)
            this._saldo = parseInt(saldonovo)
            
        }else{
            console.log("SALDO INFERIOR AO VALOR - SACAR VALOR MENOR")
        }

    }
}