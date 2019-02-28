<template>
  <div class="page3">
    <v-layout row wrap>
      <v-flex xs12 md6>
        <div class="chart">
          <BarChart v-bind:values="this.values" v-bind:labels="this.labels" id="1"/>
        </div>
      </v-flex>
      <v-flex xs12 md6></v-flex>
    </v-layout>
  </div>
</template>

<script>
import BarChart from "@/components/Result/BarChart.vue";

export default {
  name: "PositiveTweets",
  data() {
    return {
      labels: [],
      values: []
    };
  },
  components: {
    BarChart
  },
  props: {
    tweets: Array,
    words: Array
  },
  mounted: function() {
    this.words.forEach(word => {
      this.labels.push(word.word);
      this.values.push(word.count);
    });
  }
};
</script>

<style scoped>
.chart {
  background-color: aliceblue;
}
</style>


