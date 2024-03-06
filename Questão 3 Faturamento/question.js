
// não chegou o email com o json, então improvisei...
const faturamentoMensal = {
  "dados": [
    {"dia": 1, "valor": 100},
    {"dia": 2, "valor": 150},
    {"dia": 3, "valor": 15},
    {"dia": 4, "valor": 3000},
    {"dia": 5, "valor": 1500},
    {"dia": 6, "valor": 0},
    {"dia": 7, "valor": 0},
  ]
};
  
function calcularFaturamento(faturamento) {
  const valoresDiarios = faturamento.dados.map(dia => dia.valor);

  // Encontrar o menor e o maior valor de faturamento
  const menorFaturamento = Math.min(...valoresDiarios);
  const maiorFaturamento = Math.max(...valoresDiarios);

  // Calcular a média mensal, ignorando dias sem faturamento
  const valoresComFaturamento = valoresDiarios.filter(valor => valor > 0);
  const mediaMensal = valoresComFaturamento.reduce((acc, valor) => acc + valor, 0) / valoresComFaturamento.length;

  // Contar o número de dias com faturamento acima da média
  const diasAcimaDaMedia = valoresComFaturamento.filter(valor => valor > mediaMensal).length;

  return {
    menorFaturamento,
    maiorFaturamento,
    diasAcimaDaMedia
  };
}
  
const resultado = calcularFaturamento(faturamentoMensal);
console.log("Menor Faturamento:", resultado.menorFaturamento);
console.log("Maior Faturamento:", resultado.maiorFaturamento);
console.log("Dias com Faturamento acima da Média:", resultado.diasAcimaDaMedia);
  