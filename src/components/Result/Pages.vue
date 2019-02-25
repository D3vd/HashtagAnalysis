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
      <div class="section">Third section ...</div>
    </full-page>
  </div>
</template>

<script>
import Percent from "@/components/Result/Pages/Page1.vue";
import PieChart from "@/components/Result/Pages/Page2.vue";

export default {
  name: "Pages",
  components: {
    Percent,
    PieChart
  },
  data() {
    return {
      options: {
        menu: "#menu",
        sectionsColor: ["", "#0798ec", "#0798ec"]
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
