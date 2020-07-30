class ListaNegociacao{
    constructor(armadilha){
        this._negociacoes = []
        this._armadilha = armadilha
        
    }

    adiciona(negociacao){
        this._negociacoes.push(negociacao)
        //armadilha seria a funcao que vai ser aplicada quando declarar a ListaNegociacao
        //contexto seria o This, apontando para o contexto a classe Negociacao Controller - fora
        //troca o THIS para o externo
        //this seria o parametro
        //Reflect.apply(this._armadilha, this._contexto, [this])
        this._armadilha(this)
    }

    get negociacoes(){
        return [].concat(this._negociacoes)
    }

    esvazia(){
        this._negociacoes = []
        //Reflect.apply(this._armadilha, this._contexto, [this])
        this._armadilha(this)
    }
}