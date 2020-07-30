class DateHelper {

    constructor() {
        throw new Error("esta classe não pode ser instanciada")
    }


    static dataParaTexto(data) {
        return `${data.getDate()}/${data.getMonth() + 1}/${data.getFullYear()}`

    }

    static textoParaData(texto) {

        // \d é quando quero pegar somente NUMERO - {2} so pode 2 digitos
        if (!/\d{4}-\d{2}-\d{2}/.test(texto)) {
            throw new Error("não digitou a data correta yyyy-mm-date")
        }
            return new Date(...texto.split("-").map((item, indice) => {
                if (indice == 1) {
                    return item - 1

                } else {
                    return item
                }

            }))



    }

}