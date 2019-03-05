<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <Percent
          v-bind:sentiment="this.response.sentiment"
          v-bind:percent="this.response.mean"
          v-bind:query="this.response.query"
        />
      </div>
      <div class="section">
        <PieChart v-bind:mean="this.mean" v-bind:total="this.total"/>
      </div>
      <div class="section">
        <PositiveTweets
          v-bind:words="this.response.word_count.positive"
          v-bind:tweets="this.response.tweets.positive_tweets"
        />
      </div>
      <div class="section">
        <NegativeTweets
          v-bind:words="this.response.word_count.negative"
          v-bind:tweets="this.response.tweets.negative_tweets"
        />
      </div>
      <div class="section">trending section ...</div>
    </full-page>
  </div>
</template>

<script>
import Percent from "@/components/Result/Pages/Page1.vue";
import PieChart from "@/components/Result/Pages/Page2.vue";
import PositiveTweets from "@/components/Result/Pages/Page3.vue";
import NegativeTweets from "@/components/Result/Pages/Page4.vue";

export default {
  name: "Pages",
  components: {
    Percent,
    PieChart,
    PositiveTweets,
    NegativeTweets
  },
  data() {
    return {
      options: {
        menu: "#menu",
        sectionsColor: ["", "#6B6B6B", "#338A2E", "#AA3939", ""]
      }
    };
  },
  props: {
    response: Object,
    mean: Array,
    total: Array
  }
};
</script>

<style scoped>
</style>
