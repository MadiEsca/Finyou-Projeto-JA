const receitaEl = document.getElementById("valor-receita");
const despesaEl = document.getElementById("valor-despesa");
const lucroEl = document.getElementById("valor-lucro");
const poupancaEl = document.getElementById("valor-poupanca");

const inputReceita = document.getElementById("input-receita");
const inputDespesa = document.getElementById("input-despesa");
const inputPoupanca = document.getElementById("input-poupanca");
const btnAtualizar = document.getElementById("btn-atualizar");

// Gráficos
const graficoReceitas = new Chart(document.getElementById('graficoReceitas'), {
    type: 'bar',
    data: {
        labels: ['Janeiro', 'Fevereiro', 'Março'],
        datasets: [{
            label: 'Receitas',
            data: [0, 0, 0],
            backgroundColor: 'rgba(0, 200, 83, 0.6)',
        }]
    }
});

const graficoDespesas = new Chart(document.getElementById('graficoDespesas'), {
    type: 'pie',
    data: {
        labels: ['Serviços', 'Produtos', 'Outros'],
        datasets: [{
            data: [0, 0, 0],
            backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
        }]
    }
});

// Atualizar os dados
btnAtualizar.addEventListener("click", () => {
    const receita = parseFloat(inputReceita.value) || 0;
    const despesa = parseFloat(inputDespesa.value) || 0;
    const poupanca = parseFloat(inputPoupanca.value) || 0;
    const lucro = receita - despesa;

    receitaEl.textContent = `R$ ${receita.toLocaleString()}`;
    despesaEl.textContent = `R$ ${despesa.toLocaleString()}`;
    lucroEl.textContent = `R$ ${lucro.toLocaleString()}`;
    poupancaEl.textContent = `R$ ${poupanca.toLocaleString()}`;

    // Atualiza os gráficos
    graficoReceitas.data.datasets[0].data = [receita, receita * 1.1, receita * 0.9];
    graficoDespesas.data.datasets[0].data = [despesa * 0.5, despesa * 0.3, despesa * 0.2];

    graficoReceitas.update();
    graficoDespesas.update();
});