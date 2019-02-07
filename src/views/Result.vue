<template>
  <div class="result">
    <div v-if="loading">
      <Loading/>
    </div>

    <div v-if="!loading" style="position: relative">
      <h1>{{this.query}}</h1>
    </div>
  </div>
</template>

<script>
import Loading from "@/components/Result/Loading.vue";
export default {
  name: "result",
  data() {
    return {
      query: "",
      loading: true
    };
  },
  components: {
    Loading
  },

  mounted: function() {
    let query = this.$route.params.query;
    this.query = query;

    setTimeout(() => {
      this.loading = false;
    }, 3000);
  }
};
</script>



