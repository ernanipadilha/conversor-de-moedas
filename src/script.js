var requestURL = "https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL,BRL-USD,BTC-USD,USD-EUR";
var request = new XMLHttpRequest();
request.open("GET", requestURL);
request.responseType = "json"; // now we're getting a string!
request.send();

function Converter() {
  var dolar = request.response;
  var valorDolar = parseFloat(document.getElementById("valor").value);
  var valorConvertido = parseFloat(valorDolar * dolar.USDBRL.high);

  var elementoValorConvertido = document.getElementById("valorConvertido");
  var exibeValor = "O valor em Real é R$ " + valorConvertido.toFixed(2);
  elementoValorConvertido.innerHTML = exibeValor;

}

function ConverterEuro() {
  var euro = request.response;
  var valorDolar = document.getElementById("valor").value;
  var valorConvertido = parseFloat(valorDolar * euro.USDEUR.high);

  var elementoValorConvertido = document.getElementById("valorConvertidoEuro");
  var exibeValor = "O valor em Euro é € " + valorConvertido.toFixed(2);
  elementoValorConvertido.innerHTML = exibeValor;

}

function ConverterBit() {
  var btc = request.response;
  var valorDolar = document.getElementById("valor").value;
  var valorConvertido = valorDolar / btc.BTCUSD.high;

  var elementoValorConvertido = document.getElementById("valorConvertidoBit");
  var exibeValor = "O valor em BitCoin é ₿ " + valorConvertido.toFixed(10);
  elementoValorConvertido.innerHTML = exibeValor;

}


