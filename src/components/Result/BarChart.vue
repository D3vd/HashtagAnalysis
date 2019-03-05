<template>
  <div class="bar-chart">
    <canvas v-bind:id="'bar-chart-result' + this.id"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  name: "BarChart",
  props: {
    labels: Array,
    values: Array,
    id: String
  },
  methods: {
    createChart() {
      const ctx = document.getElementById("bar-chart-result" + this.id);
      // eslint-disable-next-line
      const myChart = new Chart(ctx, {
        type: "bar",
        data: {
          labels: this.labels,
          datasets: [
            {
              data: this.values
            }
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            yAxes: [
              {
                ticks: {
                  beginAtZero: true
                }
              }
            ]
          }
        }
      });
    }
  },
  mounted() {
    this.createChart();
  }
};
</script>

<style scoped>
.bar-chart {
  width: 100%;
}
</style>


