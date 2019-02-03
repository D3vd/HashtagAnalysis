<template>
  <div class="header">
    <header>
      <img src="../assets/logo.png" alt="Hashtag Analysis">
      <h1>Hashtag Analysis</h1>
    </header>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Noto+Sans");

header {
  color: aliceblue;
  position: relative;
  overflow: hidden;
  margin-left: 19%;
}

header h1 {
  font-size: 70px;
  font-family: "Noto Sans", sans-serif;
  position: relative;
  left: 10px;
}

header img {
  height: 200px;
  float: left;
}

@media screen and (max-width: 767px) {
  header h1 {
    font-size: 30px;
    left: 0;
    padding-top: 5px;
  }

  header img {
    height: 100px;
  }

  header {
    margin-left: 2%;
  }
}
</style>



