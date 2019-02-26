<template>
  <div class="page3">
    <BarChart v-bind:values="this.values" v-bind:labels="this.labels" id="1"/>
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
</style>


