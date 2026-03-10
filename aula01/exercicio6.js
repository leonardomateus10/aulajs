document.write("<h1>Exercício 6</h1>");

var quantidade = Number(prompt("Digite a quantidade do produto:"));
var preco = Number(prompt("Digite o preço unitário do produto:"));

var subtotal = quantidade * preco;
var desconto = subtotal * 0.10; 
var valorFinal = subtotal - desconto;

document.write("<p>Subtotal: R$ " + subtotal + "</p>");
document.write("<p>Desconto (10%): R$ " + desconto + "</p>");
document.write("<h2>Valor Final a Pagar: R$ " + valorFinal + "</h2>");


