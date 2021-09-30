/*
funções
    funções do js
        alert()
        console.log()

    funções personalizadas
        - funções criadas pela pessoa que está desenvolvendo
        - a função precisa ser chamada para ser executada
        - para criar uma função usamos a palavra "function"

*/

// parseFloat --> converte de texto para decimal
// parseInt --> converte de texto para inteiro
function Converter(){
    //DOM - document object model

    /** PEGAR O VALOR DO CAMPO */
    //let valorEmDolar = document.getElementsById ("valor").value
    let valorEmDolar = document.querySelector("#valor").value
    
    /** CONVERTER O VALOR DO CAMPO EM NUMERO */
    let valorEmDolarNumerico = parseFloat(valorEmDolar)

    let cotacaoDolar = 5
    let valorEmReal = valorEmDolarNumerico * cotacaoDolar

    /** INSERIR O RESULTADO NA TELA */
    document.querySelector("#valorConvertido").innerHTML = "O resultado em real é R$ " + valorEmReal.toFixed(2)

    let bitcoin = valorEmReal / 225000
    document.querySelector("#valorBitcoin").innerHTML = "O resultado em Bitcoin é " + bitcoin.toFixed(2)
}