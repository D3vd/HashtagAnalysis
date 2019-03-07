<template>
  <div class="page3">
    <v-layout row wrap>
      <v-flex md12>
        <div class="page-title">Positive Tweets</div>
      </v-flex>
    </v-layout>
    <v-layout row wrap>
      <v-flex xs12 md6>
        <div class="chart-content">
          <div class="chart-title">Most Used words</div>
          <div class="chart">
            <BarChart v-bind:values="this.values" v-bind:labels="this.labels" id="1"/>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 md6>
        <div class="cards">
          <div v-for="tweet in tweets" :key="tweet.id" class="card">
            <Card
              v-bind:name="tweet.name"
              v-bind:profile_img="tweet.profile_img"
              v-bind:text="tweet.text"
              v-bind:rt="tweet.retweet_count"
            />
          </div>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import BarChart from "@/components/Result/BarChart.vue";
import Card from "@/components/Result/TwitterCard.vue";

export default {
  name: "PositiveTweets",
  data() {
    return {
      labels: [],
      values: []
    };
  },
  components: {
    BarChart,
    Card
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
  color: #156711;
}

.chart-content {
  padding: 0 10px 0 10px;
  background-color: aliceblue;
  position: relative;
  z-index: 999;
  margin: 25% 10px 0 10px;
}

.chart-title {
  font-family: "Oswald", sans-serif;
  font-size: 50px;
  text-align: center;
}

.cards {
  padding: 20px;
}

.card {
  margin: 10px 0;
}

@media screen and (max-width: 767px) {
  .chart-title {
    font-size: 30px;
  }

  .page-title {
    font-size: 50px;
    line-height: 60px;
  }

  .chart-content {
    margin: 60px 10px 0 10px;
    padding: 0;
  }
}
</style>


