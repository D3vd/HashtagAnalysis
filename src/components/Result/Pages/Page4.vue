<template>
  <div class="page4">
    <v-layout row wrap>
      <v-flex md12>
        <div class="page-title">Negative Tweets</div>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 md3></v-flex>
      <v-flex xs12 md6>
        <div class="chart-content">
          <div class="chart-title">Most Used words</div>
          <div class="chart">
            <BarChart v-bind:values="this.values" v-bind:labels="this.labels" id="2"/>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 md3></v-flex>
    </v-layout>
  </div>
</template>

<script>
import BarChart from "@/components/Result/BarChart.vue";

export default {
  name: "NegativeTweets",
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
@import url("https://fonts.googleapis.com/css?family=Raleway");

.page-title {
  text-align: center;
  font-size: 200px;
  position: absolute;
  left: 50%;
  line-height: 200px;
  width: 100%;
  transform: translate(-50%, 0%);
  font-family: "Oswald", sans-serif;
  color: #801515;
}

.chart-content {
  padding: 0 10px 0 10px;
  background-color: aliceblue;
  margin-top: 25%;
  position: relative;
  z-index: 999;
}

.chart-title {
  font-family: "Oswald", sans-serif;
  font-size: 50px;
  text-align: center;
}
</style>


