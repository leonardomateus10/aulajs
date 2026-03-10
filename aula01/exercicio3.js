document.write("<h1>exercicio 3</h1>");

var valor = Number(prompt("digite o valor da prestação em atraso:"))
var taxa  = Number(prompt ("digite o valor a taxa:"));
var tempo = Number(prompt ("digite o tmpo:"));

var resultado = valor + (valor * ( taxa * taxa/100)*tempo);

document.write("<p> o valor da parcela" + resultado + "</p>");

