<template>
  <div class="chart" style="position: relative">
    <canvas id="result"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  name: "Chart",
  props: {
    values: Array
  },
  methods: {
    createChart(values) {
      const ctx = document.getElementById("result");
      // eslint-disable-next-line
      const myChart = new Chart(ctx, {
        type: "pie",
        data: {
          labels: ["Negative", "Positive", "Neutral"],
          datasets: [
            {
              label: "",
              data: values,
              backgroundColor: [
                "rgba(255, 0, 0)",
                "rgba(0, 255, 0)",
                "rgba(0, 0, 0)"
              ],
              borderColor: [
                "rgba(255, 0, 0)",
                "rgba(0, 255, 0)",
                "rgba(0, 0, 0)"
              ],
              borderWidth: 3
            }
          ]
        },
        options: {
          legend: {
            display: false
          }
        }
      });
    }
  },
  mounted() {
    this.createChart(this.values);
  }
};
</script>
