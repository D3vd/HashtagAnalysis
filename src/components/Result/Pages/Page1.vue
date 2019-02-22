<template>
  <div class="page1">
    <div v-if="this.sentiment=='Positive'">
      <div class="percent">{{this.percent.positive}}%</div>
      <div class="text">of people feel positive about {{this.query}}</div>
    </div>

    <div v-if="this.sentiment=='Negative'">
      <div class="percent">{{this.percent.negative}}%</div>
      <div class="text">of people feel negative about {{this.query}}</div>
    </div>

    <div v-if="this.sentiment=='Controversial'">
      <h1>{{this.query}}Controversial at the moment</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Page1",
  props: {
    percent: Object,
    sentiment: String,
    query: String
  }
};
</script>

<style scoped>
.percent {
  font-size: 300px;
  color: aliceblue;
}

.text {
  font-size: 50px;
  float: right;
}
</style>

