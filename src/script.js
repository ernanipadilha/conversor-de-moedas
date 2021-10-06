function Converter(dolar) {
  atualizarValor()
  var valorDolar = parseFloat(document.getElementById("valor").value);
  var valorDoDolar = parseFloat(exibeMoeda(dolar.USDBRL.high));
  var valorConvertido = valorDolar * valorDoDolar;

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var exibeValor = "O valor em Real é R$ " + valorConvertido.toFixed(2);
  elementoValorConvertido.innerHTML = exibeValor;
  


}

function ConverterEuro() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorConvertido = valorEmDolarNumerico * 0.85;

  var elementoValorConvertido = document.getElementById("valorConvertidoEuro");
  var exibeValor = "O valor em Euro é € " + valorConvertido.toFixed(2);
  elementoValorConvertido.innerHTML = exibeValor;

}

function ConverterBit() {
  var valorElemento = document.getElementById("valor");
  var valor = valorElemento.value;
  var valorEmDolarNumerico = parseFloat(valor);
  var valorConvertido = valorEmDolarNumerico * 0.000021;

  var elementoValorConvertido = document.getElementById("valorConvertidoBit");
  var exibeValor = "O valor em BitCoin é ₿ " + valorConvertido.toFixed(5);
  elementoValorConvertido.innerHTML = exibeValor;

}

function exibeMoeda(moedinhas) {
  var moedasPesquisadas = moedinhas;
  console.log(moedasPesquisadas)
  return moedasPesquisadas
}

var requestURL = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,BRL-USD,BTC-USD,USD-EUR";

function atualizarValor(){
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json"; // now we're getting a string!
request.send();

 request.onload = function () {
  var moedas = request.response; // get the string from the response
  exibeMoeda(moedas)
  //Converter(moedas)
};
}

