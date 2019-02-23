<template>
  <div class="page1">
    <div v-if="this.sentiment=='Positive'">
      <div class="percent">{{this.roundPercent.positive}}</div>
      <div class="text">of people feel positive about {{this.query}}</div>
    </div>

    <div v-if="this.sentiment=='Negative'">
      <div class="percent">{{this.roundPercent.negative}}</div>
      <div class="text">of people feel negative about {{this.query}}</div>
    </div>

    <div v-if="this.sentiment=='Controversial'">
      <h1>{{this.query}} is controversial at the moment</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Percent",
  props: {
    percent: Object,
    sentiment: String,
    query: String
  },
  data() {
    return {
      backgroundColor: "",
      particleColor: "",
      roundPercent: {}
    };
  },
  mounted: function() {
    this.roundPercent = {
      negative: Math.floor(this.percent.negative),
      positive: Math.floor(this.percent.positive)
    };

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

    document.getElementById("particleground").style.opacity = 0;

    document.body.style.backgroundColor = this.backgroundColor;
    document.querySelector(".percent").style.color = this.particleColor;
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Righteous");

.percent {
  font-family: "Righteous", cursive;
  font-size: 300px;
  font-size: 70vw;
  text-align: center;
  margin-right: 200px;
  z-index: 900;
  position: absolute;
  top: -150px;
  left: -50px;
  padding: 0;
}

.text {
  width: 40vw;
  font-size: 50px;
  float: right;
  z-index: 950;
}
</style>
