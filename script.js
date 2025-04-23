// Atividade 1 - Área do Retângulo (com prompt)
console.log("Vamos calcular a área de um retângulo!");
let largura = Number(prompt("Qual é a largura do retângulo?"));
let altura = Number(prompt("Qual é a altura do retângulo?"));
let area = largura * altura;
console.log("A área do retângulo é: " + area);

// Atividade 2 - Média das Notas
console.log("\nAgora vamos calcular a média das notas!");
let nota1 = Number(prompt("Digite a primeira nota:"));
let nota2 = Number(prompt("Digite a segunda nota:"));
let nota3 = Number(prompt("Digite a terceira nota:"));
let media = (nota1 + nota2 + nota3) / 3;
console.log("A média das notas é: " + media.toFixed(2));

// Atividade 3 - Cálculo de Troco
console.log("\nPor último, vamos calcular o troco!");
let valorCompra = Number(prompt("Qual o valor total da compra?"));
let valorPago = Number(prompt("Quanto você pagou?"));
let troco = valorPago - valorCompra;
console.log("O troco é: R$ " + troco.toFixed(2));
