<template>
  <div class="result">
    <div v-if="loading&&!error">
      <Loading v-bind:query="this.query"/>
    </div>

    <div v-if="error" style="position: relative">
      <Error v-bind:message="this.error_message"/>
    </div>

    <div v-if="!error&&!loading" style="position: relative">
      <v-container fluid grid-list-md>
        <v-layout row wrap>
          <v-flex xs12>
            <EmojiStatus
              v-bind:sentiment="this.response.sentiment"
              v-bind:query="this.query"
              v-bind:percent="this.response.mean"
            />
          </v-flex>
        </v-layout>

        <v-layout row wrap>
          <v-flex xs12 md5>
            <Chart v-bind:values="this.mean_values" id="1"/>
          </v-flex>
          <v-flex xs12 md2></v-flex>
          <v-flex xs12 md5>
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
import EmojiStatus from "@/components/Result/EmojiStatus.vue";
import Error from "@/components/Result/Error.vue";

import axios from "axios";

export default {
  name: "result",
  data() {
    return {
      query: "",
      response: {},
      loading: true,
      error: false,
      status_code: 0,
      error_message: "",
      mean_values: [],
      total_values: []
    };
  },
  components: {
    Loading,
    Chart,
    EmojiStatus,
    Error
  },

  mounted: function() {
    let query = this.$route.params.query;
    this.query = query;

    axios
      .get("https://hashtaganalysis.herokuapp.com/api/" + query)
      .then(response => {
        this.response = response.data;

        this.status_code = this.response.status_code;

        if (this.status_code === 200) {
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
        } else {
          this.loading = false;
          this.error = true;
          if (this.status_code === 429) {
            this.error_message =
              "Too many requests at the moment. Try again later.";
          } else {
            this.error_message = "Server Error. Try Again later.";
          }
        }
      })
      .catch(error => {
        this.loading = false;
        this.error = true;
        this.error_message = error;
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

