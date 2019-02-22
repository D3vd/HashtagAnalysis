<template>
  <div class="emoji">
    <div v-if="this.sentiment=='Positive'">
      <!-- <img src="../../assets/positive.png" alt="positive"> -->
      <h1>
        <span class="percent">{{this.percent.positive}}%</span> of people feel
        <span class="positive">Positive</span>
        about {{this.query}}
      </h1>
    </div>

    <div v-if="this.sentiment=='Negative'">
      <!-- <img src="../../assets/negative.png" alt="negative"> -->
      <h1>
        <span class="percent">{{this.percent.negative}}%</span> of people feel
        <span class="negative">Negative</span>
        about {{this.query}}
      </h1>
    </div>

    <div v-if="this.sentiment=='Controversial'">
      <!-- <img src="../../assets/controversial.png" alt="controversial"> -->
      <h1>
        {{this.query}} is
        <span class="controversial">Controversial</span> at the moment
      </h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "EmojiStatus",
  props: {
    sentiment: String,
    query: String,
    percent: Object
  }
};
</script>

<style scoped>
.emoji div img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
}

.emoji div h1 {
  text-align: center;
  color: aliceblue;
  padding: 30px;
}

.positive {
  color: rgb(0, 255, 0);
}

.negative {
  color: rgb(255, 0, 0);
}

.controversial {
  color: rgb(83, 83, 83);
}

.percent {
  color: rgb(97, 97, 97);
}

@media screen and (max-width: 767px) {
  .emoji div img {
    width: 70%;
  }
}
</style>
