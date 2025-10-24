<template>
  <canvas ref="lineChart"></canvas>
</template>

<script setup>
import { onMounted, ref } from "vue";
import {
  Chart,
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  LineController,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const lineChart = ref(null);

onMounted(() => {
  new Chart(lineChart.value, {
    type: "line",
    data: {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
      datasets: [
        {
          label: "",
          data: [0, 0, 80, 50, 120, 60, 90, 50, 120],
          borderColor: "#ffffff",
          backgroundColor: "transparent",
          pointBackgroundColor: "#ffffff",
          pointBorderColor: "#ffffff",
          pointRadius: 4,
          pointHoverRadius: 8,
          tension: 0,
        },
      ],
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: false,
        },
        tooltip: {
          callbacks: {
            label: function (context) {
              const value = context.parsed.y;
              const month = context.label;
              return `Desktop Apps ${value}`;
            },
          },

        },
      },
      scales: {
        x: {
          type: "category",
          ticks: {
            color: "#ffffff",
            font: {
              size: 12,
            },
          },
          grid: {
            color: "#ffffff33",
          },
        },
        y: {
          type: "linear",
          beginAtZero: true,
          ticks: {
            color: "#ffffff",
            stepSize: 50,
            font: {
              size: 12,
            },
          },
          grid: {
            color: "#ffffff33",
          },
        },
      },
    },
  });
});
</script>
