// Dados mockados para os gráficos do usuário
const portfolioData = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  values: [350000, 365000, 375000, 390000, 405000, 420000, 415000, 430000, 445000, 460000, 475000, 487650]
};

const rentabilityData = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  rendaFixa: [1.2, 1.3, 1.1, 1.4, 1.2, 1.3, 1.5, 1.4, 1.3, 1.6, 1.4, 1.5],
  acoes: [3.5, -2.1, 4.2, 2.8, 3.9, -1.5, 5.2, 3.8, 2.5, 4.1, 3.2, 2.9],
  fiis: [0.8, 0.9, 1.0, 0.7, 0.9, 1.1, 0.8, 1.0, 0.9, 1.2, 1.0, 0.9],
  crypto: [8.5, -5.2, 12.3, -3.8, 7.5, 4.2, 15.8, -2.5, 6.8, 9.2, -4.1, 5.5]
};

const contributionsData = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  aportes: [5000, 5200, 5000, 5500, 5200, 5000, 5300, 5400, 5100, 5600, 5200, 5000],
  retiradas: [0, 0, 0, 0, 0, 2000, 0, 0, 0, 0, 0, 3000]
};

const goalsData = {
  labels: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
  valores: [350000, 365000, 375000, 390000, 405000, 420000, 415000, 430000, 445000, 460000, 475000, 487650],
  meta: Array(12).fill(1000000)
};

const projectionData = {
  labels: ['2025', '2026', '2027', '2028', '2029', '2030'],
  values: [487650, 580000, 685000, 805000, 940000, 1090000]
};

// Configuração comum para todos os gráficos
Chart.defaults.font.family = 'Poppins, sans-serif';
Chart.defaults.color = '#666';

// Função para criar gradiente
function createGradient(ctx, color1, color2) {
  const gradient = ctx.createLinearGradient(0, 0, 0, 400);
  gradient.addColorStop(0, color1);
  gradient.addColorStop(1, color2);
  return gradient;
}

// Gráfico Principal - Evolução do Patrimônio
const portfolioCtx = document.getElementById('portfolioChart').getContext('2d');
const portfolioGradient = createGradient(portfolioCtx, 'rgba(0, 200, 83, 0.3)', 'rgba(0, 200, 83, 0.01)');

const portfolioChart = new Chart(portfolioCtx, {
  type: 'line',
  data: {
    labels: portfolioData.labels,
    datasets: [{
      label: 'Patrimônio',
      data: portfolioData.values,
      borderColor: '#00c853',
      backgroundColor: portfolioGradient,
      borderWidth: 3,
      fill: true,
      tension: 0.4,
      pointRadius: 0,
      pointHoverRadius: 6,
      pointHoverBackgroundColor: '#00c853',
      pointHoverBorderColor: '#fff',
      pointHoverBorderWidth: 2
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 12,
        cornerRadius: 8,
        callbacks: {
          label: function(context) {
            return 'R$ ' + context.parsed.y.toLocaleString('pt-BR', {minimumFractionDigits: 2});
          }
        }
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#999', font: { size: 11 } }
      },
      y: {
        position: 'right',
        grid: { color: 'rgba(0, 0, 0, 0.05)' },
        ticks: {
          color: '#999',
          font: { size: 10 },
          callback: function(value) {
            return 'R$ ' + (value / 1000).toFixed(0) + 'k';
          }
        }
      }
    },
    interaction: {
      mode: 'index',
      intersect: false
    }
  }
});

// Gráfico de Rentabilidade
const rentabilityCtx = document.getElementById('rentabilityChart').getContext('2d');

const rentabilityChart = new Chart(rentabilityCtx, {
  type: 'line',
  data: {
    labels: rentabilityData.labels,
    datasets: [
      {
        label: 'Renda Fixa',
        data: rentabilityData.rendaFixa,
        borderColor: '#2196f3',
        backgroundColor: 'rgba(33, 150, 243, 0.1)',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0
      },
      {
        label: 'Ações',
        data: rentabilityData.acoes,
        borderColor: '#f44336',
        backgroundColor: 'rgba(244, 67, 54, 0.1)',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0
      },
      {
        label: 'FIIs',
        data: rentabilityData.fiis,
        borderColor: '#00bcd4',
        backgroundColor: 'rgba(0, 188, 212, 0.1)',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0
      },
      {
        label: 'Crypto',
        data: rentabilityData.crypto,
        borderColor: '#ff9800',
        backgroundColor: 'rgba(255, 152, 0, 0.1)',
        borderWidth: 2,
        tension: 0.4,
        pointRadius: 0
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        mode: 'index',
        intersect: false,
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 10,
        cornerRadius: 6,
        callbacks: {
          label: function(context) {
            return context.dataset.label + ': ' + context.parsed.y.toFixed(1) + '%';
          }
        }
      }
    },
    scales: {
      x: { display: false },
      y: { display: false }
    }
  }
});

// Gráfico de Aportes e Retiradas
const contributionsCtx = document.getElementById('contributionsChart').getContext('2d');

const contributionsChart = new Chart(contributionsCtx, {
  type: 'bar',
  data: {
    labels: contributionsData.labels,
    datasets: [
      {
        label: 'Aportes',
        data: contributionsData.aportes,
        backgroundColor: '#00c853',
        borderRadius: 4
      },
      {
        label: 'Retiradas',
        data: contributionsData.retiradas,
        backgroundColor: '#ff1744',
        borderRadius: 4
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 10,
        cornerRadius: 6,
        callbacks: {
          label: function(context) {
            return context.dataset.label + ': R$ ' + context.parsed.y.toLocaleString('pt-BR');
          }
        }
      }
    },
    scales: {
      x: { display: false },
      y: { display: false },
      x: { stacked: false },
      y: { stacked: false }
    }
  }
});

// Gráfico de Metas
const goalsCtx = document.getElementById('goalsChart').getContext('2d');
const goalsGradient = createGradient(goalsCtx, 'rgba(156, 39, 176, 0.2)', 'rgba(156, 39, 176, 0.01)');

const goalsChart = new Chart(goalsCtx, {
  type: 'line',
  data: {
    labels: goalsData.labels,
    datasets: [
      {
        label: 'Atual',
        data: goalsData.valores,
        borderColor: '#9c27b0',
        backgroundColor: goalsGradient,
        borderWidth: 2,
        fill: true,
        tension: 0.4,
        pointRadius: 0
      },
      {
        label: 'Meta',
        data: goalsData.meta,
        borderColor: '#ffd700',
        borderWidth: 2,
        borderDash: [5, 5],
        fill: false,
        tension: 0,
        pointRadius: 0
      }
    ]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false }
    },
    scales: {
      x: { display: false },
      y: { display: false }
    }
  }
});

// Gráfico de Projeção
const projectionCtx = document.getElementById('projectionChart').getContext('2d');

const projectionChart = new Chart(projectionCtx, {
  type: 'bar',
  data: {
    labels: projectionData.labels,
    datasets: [{
      data: projectionData.values,
      backgroundColor: ['#9c27b0', '#9c27b0', '#9c27b0', '#9c27b0', '#9c27b0', '#00c853'],
      borderRadius: 4,
      barThickness: 25
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { display: false },
      tooltip: {
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 10,
        cornerRadius: 6,
        callbacks: {
          label: function(context) {
            return 'R$ ' + (context.parsed.y / 1000).toFixed(0) + 'k';
          }
        }
      }
    },
    scales: {
      x: {
        grid: { display: false },
        ticks: { color: '#999', font: { size: 9 } }
      },
      y: {
        position: 'right',
        grid: { color: 'rgba(0, 0, 0, 0.05)' },
        ticks: {
          color: '#999',
          font: { size: 9 },
          callback: function(value) {
            return 'R$ ' + (value / 1000).toFixed(0) + 'k';
          }
        }
      }
    }
  }
});

// Adicionar interatividade aos cards
document.querySelectorAll('.index-item, .crypto-item, .commodity-item').forEach(item => {
  item.addEventListener('mouseenter', function() {
    this.style.transform = 'translateX(4px)';
  });
  
  item.addEventListener('mouseleave', function() {
    this.style.transform = 'translateX(0)';
  });
});

// Animação de entrada para os cards
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.card').forEach(card => {
  card.style.opacity = '0';
  card.style.transform = 'translateY(20px)';
  card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(card);
});

console.log('Dashboard de investimentos pessoais carregado com sucesso!');
console.log('Patrimônio atual: R$ 487.650,00');
console.log('Rentabilidade em 12 meses: +18,5%');