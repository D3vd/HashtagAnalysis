<template>
  <div>
    <full-page ref="fullpage" :options="options" id="fullpage">
      <div class="section">
        <Page1
          v-bind:sentiment="this.response.sentiment"
          v-bind:percent="this.response.mean"
          v-bind:query="this.response.query"
        />
      </div>
      <div class="section">Second section ...</div>
      <div class="section">Third section ...</div>
    </full-page>
  </div>
</template>

<script>
import Page1 from "@/components/Result/Pages/Page1.vue";

export default {
  name: "Pages",
  components: {
    Page1
  },
  data() {
    return {
      options: {
        menu: "#menu",
        sectionsColor: ["", "", "#0798ec"]
      }
    };
  },
  props: {
    response: Object
  }
};
</script>

<style scoped>
</style>
