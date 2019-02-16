<template>
  <div class="emoji">
    <div v-if="this.sentiment=='Positive'">
      <img src="../../assets/positive.png" alt="positive">
    </div>
    <div v-if="this.sentiment=='Negative'">
      <img src="../../assets/negative.png" alt="negative">
    </div>
    <div v-if="this.sentiment=='Controversial'">
      <img src="../../assets/controversial.png" alt="controversial">
    </div>
  </div>
</template>

<script>
export default {
  name: "EmojiStatus",
  props: {
    sentiment: String
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

@media screen and (max-width: 767px) {
  .emoji div img {
    width: 70%;
  }
}
</style>
