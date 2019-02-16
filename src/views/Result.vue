<template>
  <div class="result">
    <div v-if="loading&&!error">
      <Loading v-bind:query="this.query"/>
    </div>

    <div v-if="error" style="position: relative; text-align:center">
      <h1>Unable to process request</h1>
    </div>

    <div v-if="!error&&!loading" style="position: relative">
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex xs12 md4>
            <Chart v-bind:values="this.mean_values" id="1"/>
          </v-flex>
          <v-flex xs12 md4></v-flex>
          <v-flex xs12 md4>
            <Chart v-bind:values="this.total_values" id="2"/>
          </v-flex>
        </v-layout>
      </v-container>
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

