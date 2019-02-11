<template>
  <div class="result">
    <div v-if="loading&&!error">
      <Loading/>
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
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Result/Loading.vue";

import axios from "axios";

export default {
  name: "result",
  data() {
    return {
      query: "",
      response: {},
      loading: true,
      error: false
    };
  },
  components: {
    Loading
  },

  mounted: function() {
    let query = this.$route.params.query;
    this.query = query;

    axios
      .get("https://hashtaganalysis.herokuapp.com/api/" + query)
      .then(response => {
        this.response = response.data;
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

