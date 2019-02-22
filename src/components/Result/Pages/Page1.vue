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
  },
  data() {
    return {
      backgroundColor: "",
      particleColor: ""
    };
  },
  mounted: function() {
    if (this.sentiment === "Positive") {
      this.backgroundColor = "#338A2E";
      this.particleColor = "#156711";
    } else if (this.sentiment === "Negative") {
      this.backgroundColor = "#AA3939";
      this.particleColor = "#801515";
    } else {
      this.backgroundColor = "#2F2F2F";
      this.particleColor = "#020302";
    }

    // eslint-disable-next-line
    var pg = particleground(document.getElementById("particleground"), {
      dotColor: this.particleColor,
      lineColor: this.particleColor
    });

    document.getElementById(
      "particleground"
    ).style.backgroundColor = this.backgroundColor;
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
