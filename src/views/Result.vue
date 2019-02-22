<template>
  <div class="result">
    <!-- <Header style="position: relative"/> -->
    <div v-if="loading&&!error">
      <Loading v-bind:query="this.query"/>
    </div>

    <div v-if="error" style="position: relative">
      <Error v-bind:message="this.error_message"/>
    </div>

    <div v-if="!error&&!loading" style="position: relative">
      <Pages v-bind:response="this.response"/>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Result/Loading.vue";
import Error from "@/components/Result/Error.vue";
import Pages from "@/components/Result/Pages.vue";

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
    Error,
    Pages
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
          } else if (this.status_code === 400) {
            this.error_message = "Enter a valid Query";
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

