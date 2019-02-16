<template>
  <div class="result">
    <div v-if="loading&&!error">
      <Loading v-bind:query="this.query"/>
    </div>

    <div v-if="error" style="position: relative; text-align:center">
      <h1>Unable to process request</h1>
    </div>

    <div v-if="!error&&!loading" style="position: relative; color: white; text-align: center">
      <h1>{{this.query}}</h1>
      <h2>{{this.response.sentiment}}</h2>
      <h3>Positive: {{this.response.results.positive}}%</h3>
      <h3>Negative: {{this.response.results.negative}}%</h3>
      <h3>Neutral: {{this.response.results.neutral}}%</h3>
      <Chart v-bind:values="this.mean_values"/>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Result/Loading.vue";
import Chart from "@/components/Result/Chart.vue";

import axios from "axios";

export default {
  name: "result",
  data() {
    return {
      query: "",
      response: {},
      loading: true,
      error: false,
      error_code: 0,
      error_message: "",
      mean_values: [],
      total_values: []
    };
  },
  components: {
    Loading,
    Chart
  },

  mounted: function() {
    let query = this.$route.params.query;
    this.query = query;

    axios
      .get("https://hashtaganalysis.herokuapp.com/api/" + query)
      .then(response => {
        this.response = response.data;
        this.mean_values = [
          this.response.mean.negative,
          this.response.mean.positive
        ];
        this.total_values = [
          this.response.results.negative,
          this.response.results.positive,
          this.response.results.neutral
        ];
        this.loading = false;
        this.error = false;
      })
      .catch(error => {
        console.log(error);
        this.error = true;
      });
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Noto+Sans");

html {
  font-family: "Noto Sans", sans-serif;
}
</style>

