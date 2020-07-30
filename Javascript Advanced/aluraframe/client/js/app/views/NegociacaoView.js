class NegociacaoView extends View {
    
    constructor(elemento) {
        super(elemento)
    }

    _template(model){

        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>DATA</th>
                    <th>QUANTIDADE</th>
                    <th>VALOR</th>
                    <th>VOLUME</th>
                </tr>
            </thead>
            
            <tbody>

                ${model.negociacoes.map((n) =>{

                    return `
                        <tr>

                            <td> ${DateHelper.dataParaTexto(n.data)} </td>
                            <td> ${n.quantidade} </td>
                            <td>${n.valor} </td>
                            <td> ${n.volume} </td>

                        </tr>
                    
                    `

                }).join('')}
    
            </tbody>
            
            <tfoot>
                <td colspan="3"></td>
                <td>
                    ${model.negociacoes.reduce( (total,n) =>{
                        return total + n.volume;
                    },0.0)}
                </td>

            </tfoot>
        </table>`
    }

    //.join é para colocar tudo que foi criado para cada elemento para se tornar uma string e poder ser colocado
    //ser colocado no innerHTML
    //.reduce É PARECIDO COM FOREACH, MAS ELE PEGA O VALOR RETORNADO DA ANTERIOR E FAZ NOVAMENTE
    //.REDUCE É BOM PARA SOMATORIO E ETC
    //.REDUCE DPS PRECISA DO 0, PARA INICIALIZAR COM 0

}