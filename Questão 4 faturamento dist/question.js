// Valores de faturamento mensal por estado
const faturamentoSP = 67836.43;
const faturamentoRJ = 36678.66;
const faturamentoMG = 29229.88;
const faturamentoES = 27165.48;
const faturamentoOutros = 19849.53;

// Calcula o valor total mensal
const valorTotalMensal = faturamentoSP + faturamentoRJ + faturamentoMG + faturamentoES + faturamentoOutros;

// Calcula o percentual de representação de cada estado
const percentualSP = (faturamentoSP / valorTotalMensal) * 100;
const percentualRJ = (faturamentoRJ / valorTotalMensal) * 100;
const percentualMG = (faturamentoMG / valorTotalMensal) * 100;
const percentualES = (faturamentoES / valorTotalMensal) * 100;
const percentualOutros = (faturamentoOutros / valorTotalMensal) * 100;

// Exibe os resultados
console.log(`Percentual de representação de cada estado:`);
console.log(`SP: ${percentualSP.toFixed(2)}%`);
console.log(`RJ: ${percentualRJ.toFixed(2)}%`);
console.log(`MG: ${percentualMG.toFixed(2)}%`);
console.log(`ES: ${percentualES.toFixed(2)}%`);
console.log(`Outros: ${percentualOutros.toFixed(2)}%`);