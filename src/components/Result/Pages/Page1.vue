<template>
  <div class="page1">
    <div v-if="this.sentiment=='Positive'">
      <h1>{{this.percent.positive}}% feel positive</h1>
    </div>

    <div v-if="this.sentiment=='Negative'">
      <h1>{{this.sentiment.negative}}% feel negative</h1>
    </div>

    <div v-if="this.sentiment=='Controversial'">
      <h1>Controversial at the mooment</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page1",
  props: {
    percent: Object,
    sentiment: String
  }
};
</script>

<style scoped>
</style>

