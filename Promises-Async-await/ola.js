class Conta{
    constructor(nome,conta,agencia){
        this._nome = nome
        this._conta = conta
        this._agencia = agencia
        this._saldo = 0
    }

    get saldo(){
        return this._saldo
    }

    set atualizaSaldo(novo){
        this._saldo = novo
    }
    get nome(){
        return this._nome
    }

    get conta() {
        return this._conta
    }

    get agencia(){
        return this._agencia
    }

    async depositar(valor){
        if(valor <= 0){
            return Promise.reject('VALOR MENOR')
        }
        let novo = this.saldo + valor
        this.atualizaSaldo = novo
        return novo
    }
    
}

export default Conta