document.write("<h1>Exercício 10 - Cálculo de Salário Mensal</h1>");

var valorHora = Number(prompt("Digite o valor da sua hora de trabalho:"));
var horasPorDia = Number(prompt("Digite a quantidade de horas trabalhadas por dia:"));

var salarioFinal = valorHora * horasPorDia * 30;

document.write("<p>Valor por hora: R$ " + valorHora.toFixed(2) + "</p>");
document.write("<p>Horas por dia: " + horasPorDia + " horas</p>");
document.write("<p>Período considerado: 30 dias</p>");
document.write("<h2>Salário ao final do mês: R$ " + salarioFinal.toFixed(2) + "</h2>");