<template>
  <div class="error">
    <img src="../../assets/error.png" alt="error">
    <h1>Sorry about that</h1>
    <h2>{{this.message}}</h2>
  </div>
</template>

<script>
export default {
  name: "Error",
  props: {
    message: String
  }
};
</script>

<style scoped>
.error {
  margin-top: 10%;
}

.error img {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 20%;
}

.error h1 {
  text-align: center;
  color: aliceblue;
  padding: 30px;
}
.error h2 {
  text-align: center;
  color: aliceblue;
}

@media screen and (max-width: 767px) {
  .error img {
    width: 70%;
  }
}
</style>

