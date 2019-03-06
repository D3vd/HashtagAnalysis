<template>
  <div class="page1">
    <div v-if="this.sentiment=='Positive'">
      <div class="percent">{{this.roundPercent.positive}}</div>
      <div class="text">
        percent of people feel positive about
        <span class="query">{{this.query}}</span>
      </div>
    </div>

    <div v-if="this.sentiment=='Negative'">
      <div class="percent">{{this.roundPercent.negative}}</div>
      <div class="text">
        of people feel negative about
        <span class="query">{{this.query}}</span>
      </div>
    </div>

    <div v-if="this.sentiment=='Controversial'">
      <div class="contro-text contro-top">
        <span class="query">{{this.query}}</span> is
      </div>
      <div class="controversial">CONTROVERSIAL</div>
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
      textColor: "",
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
      this.textColor = "#152615";

      document.querySelector(".percent").style.color = this.particleColor;
      document.querySelector(".text").style.color = this.textColor;
    } else if (this.sentiment === "Negative") {
      this.backgroundColor = "#AA3939";
      this.particleColor = "#801515";
      this.textColor = "#2F1A1A";

      document.querySelector(".percent").style.color = this.particleColor;
      document.querySelector(".text").style.color = this.textColor;
    } else {
      this.backgroundColor = "#2F2F2F";
      this.particleColor = "#020302";
      document.querySelector(".controversial").style.color = this.particleColor;
    }

    document.getElementById("particleground").style.opacity = 0;

    document.body.style.backgroundColor = this.backgroundColor;
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Oswald");
@import url("https://fonts.googleapis.com/css?family=Raleway");

.percent {
  font-family: "Oswald", sans-serif;
  font-size: 300px;
  font-size: 70vw;
  text-align: center;
  margin-right: 200px;
  z-index: -1;
  position: absolute;
  top: -300px;
  left: -20px;
  padding: 0;
}

.text {
  padding: 20px;
  font-family: "Raleway", sans-serif;
  margin-top: 100px;
  width: 60vw;
  font-size: 60px;
  float: right;
  z-index: 950;
  text-align: right;
}

.query {
  color: #cdcdcd;
}

.controversial {
  font-family: "Oswald", sans-serif;
  width: 100%;
  font-size: 16vw;
  text-align: center;
  transform: scale(1, 3);
  position: absolute;
  top: 150px;
  z-index: -1;
}

.contro-text {
  text-align: center;
  font-size: 60px;
}
</style>
