<template>
  <canvas ref="barChart"></canvas>
</template>

<script setup>
import { onMounted, ref } from "vue";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const barChart = ref(null);

onMounted(() => {
  new Chart(barChart.value, {
    type: "bar",
    data: {
      labels: ["M", "T", "W", "T", "F", "S", "S"],
      datasets: [
        {
          label: "",
          data: [45, 20, 25, 20, 50, 5, 40],
          backgroundColor: "#ffffff",
          barThickness: 10,
        },
      ],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          type: "linear",
          beginAtZero: true,
          ticks: {
            color: "#ffffff",
            stepSize: 20, // رنگ اعداد محور y
          },
          grid: {
            color: "#a0a0a07c", // رنگ خطوط راه‌راه محور y
          },
        },
        x: {
          type: "category",
          ticks: {
            color: "#ffffff", // رنگ نوشته‌های محور x
          },
          grid: {
            color: "#a0a0a07c", // رنگ خطوط راه‌راه محور x
          },
        },
      },
      plugins: {
        legend: {
            display: false,
          labels: {
            color: "#ffffff", // رنگ نوشته‌های legend
          },
        },
        title: {
          display: false,
          text: "Sales by Day",
          color: "#ffffff", // رنگ عنوان
        },
      },
    },
  });
});
</script>
