<template>
  <div class="page2">
    <v-layout row wrap>
      <v-flex xs12 md6>
        <div class="chart">
          <Chart v-bind:values="this.mean" id="1"/>
        </div>
      </v-flex>
      <v-flex xs12 md6>
        <div class="chart">
          <Chart v-bind:values="this.total" id="2"/>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import Chart from "@/components/Result/Chart.vue";

export default {
  name: "PieChart",
  components: {
    Chart
  },
  props: {
    mean: Array,
    total: Array
  }
};
</script>

<style scoped>
.page2 {
  height: 100%;
  width: 100%;
  padding: 12% 0;
}
</style>


