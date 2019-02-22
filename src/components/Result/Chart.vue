<template>
  <div class="chart">
    <canvas v-bind:id="'result' + this.id"></canvas>
  </div>
</template>

<script>
import Chart from "chart.js";

export default {
  name: "Chart",
  props: {
    values: Array,
    id: String
  },
  methods: {
    createChart(values) {
      const ctx = document.getElementById("result" + this.id);
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
                "rgba(222, 45, 45)",
                "rgba(36, 178, 36)",
                "rgba(54, 55, 54)"
              ],
              borderColor: ["rgba(0, 0, 0)", "rgba(0, 0, 0)", "rgba(0, 0, 0)"],
              borderWidth: 1
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

<style scoped>
.chart {
  width: 100%;
  position: relative;
}
</style>

