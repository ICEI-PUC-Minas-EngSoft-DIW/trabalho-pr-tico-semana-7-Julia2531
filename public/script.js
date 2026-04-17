let nome = prompt("Qual é o seu nome?");

function lerNumero(mensagem) {
    let valor = prompt(mensagem);
    while (valor ==="" || isNaN(Number(valor))) {
        valor = prompt("Entrada inválida! Por favor, digite um número válido para: " + mensagem)

    }
    return Number(valor);
}

let rendaMensal = lerNumero("Informe sua renda mensal: ");
let qtdDespesas = lerNumero("Quantas despesas deseja informar ( min 1, max 5)?");

if (qtdDespesas < 1) {
    qtdDespesas = 1;
}
else if (qtdDespesas > 5) {
    qtdDespesas = 5;
}

let totalDespesas = 0;

for(let i = 1; i <= qtdDespesas; i++) {
    let valorDespesas = lerNumero("Digite o valor da despesa" + i + ":");
    totalDespesas += valorDespesas;
}

let mensagemClassificacao = "";
let sobra = rendaMensal - totalDespesas;

if (totalDespesas > rendaMensal) {
    mensagemClassificacao = " ⚠️ Ateção: você gastou mais do que ganhou.";
}
else {
    let margemSeguranca = rendaMensal * 0.3;
    if (sobra >= margemSeguranca) {
        mensagemClassificacao = "✅ Ótimo: boa margem de sobra."; 
    }
    else {
        mensagemClassificacao = "🙂 Ok: Dá para melhorar a sobra."
    } 
}

let resumo = `____Resumo do Orçamento____
Usuário: ${nome}
Renda: R$ ${rendaMensal.toFixed(2)}
Total de Despesas: R$ ${totalDespesas.toFixed(2)}
Sobra: R$ ${sobra.toFixed(2)}
---------------------------
Status: ${mensagemClassificacao}`;

alert(resumo);
console.log(resumo);

