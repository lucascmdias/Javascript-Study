class NegociacaoController {

    constructor() {
        //colocar no constructor para guardar no cache, e não quando clicar
        let $ = document.querySelector.bind(document) //macete para economizar mais linhas, pode usar o $ para queryselector

        this._inputData = $("#data")
        this._inputQuantidade = $("#quantidade")
        this._inputValor = $("#valor")

        this._listaNegociacoes = new ListaNegociacao((model) =>{
            this._negociacaoView.update(model)
        }) //arrow function é LEXICO, esse this dentro da funcao é this da classe externa NegociacaoController


        this._negociacaoView = new NegociacaoView($('#negociacaoView'))
        this._negociacaoView.update(this._listaNegociacoes)

        this._mensagem = new Mensagem()
        this._mensagemView = new MensagemView($("#mensagemView"))
        this._mensagemView.update(this._mensagem)

        

    }

    adiciona(event) {
        event.preventDefault()

        //pois a data é retornada ANO-MES-DIA - PRECISA APLICAR O SPLIT PARA CRIAR UMA ARRAY DOS COMPONENTES
        //pode deste jeito pq ta chamando uma funcao estatica
        

        this._listaNegociacoes.adiciona(this._criaNegociacao())
       

        this._mensagem.texto = "negociacao adicionada com sucesso"
        this._mensagemView.update(this._mensagem)

        this._limpaForm()
        //pegar as datas certas, getDatae pega o dia ... e assim por diante
        //let diaMesAno = DateHelper.dataParaTexto(data)

        console.log(this._listaNegociacoes)
    }

    apaga(){
        this._listaNegociacoes.esvazia()
        

        this._mensagem.texto = "negociacao apagadas com sucesso"
        this._mensagemView.update(this._mensagem)
    }

    _criaNegociacao() {

        return new Negociacao(
            DateHelper.textoParaData(this._inputData.value),
            this._inputQuantidade.value,
            this._inputValor.value
        )

    }

    _limpaForm() {

        this._inputData.value = ''
        this._inputQuantidade.value = 1
        this._inputValor.value = 0.0

        this._inputData.focus()
    }
}

let negociacao = new NegociacaoController()