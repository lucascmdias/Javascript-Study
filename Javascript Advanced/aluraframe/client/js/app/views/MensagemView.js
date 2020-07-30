class MensagemView extends View{
    
    constructor(elemento) {
        super(elemento)
    }

    _template(model){
        
        if(model.texto){
            return `<p class "alert alert-info">${model.texto}</p>`
        }
            return `<p></p>`

    }
}
    