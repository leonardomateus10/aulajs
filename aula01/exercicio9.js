document.write("<h1>Exercício 9 - Juros Simples</h1>");

var principal = Number(prompt("Digite o valor inicial (Principal):"));
var taxaPorcentagem = Number(prompt("Digite a taxa de juros (em % ao ano):"));
var tempo = Number(prompt("Digite o tempo (em anos):"));

var taxaDecimal = taxaPorcentagem / 100;
var montante = principal * (1 + (taxaDecimal * tempo));

document.write("<p>Valor Inicial: R$ " + principal.toFixed(2) + "</p>");
document.write("<p>Taxa de Juros: " + taxaPorcentagem + "% ao ano</p>");
document.write("<p>Tempo: " + tempo + " anos</p>");
document.write("<h2>Montante Final: R$ " + montante.toFixed(2) + "</h2>");