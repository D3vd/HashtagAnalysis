<template>
  <div class="header">
    <header>
      <img src="../../assets/logo.png" alt="Hashtag Analysis">
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
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
}

header h1 {
  font-size: 80px;
  font-family: "Noto Sans", sans-serif;
  position: relative;
  left: 10px;
}

header img {
  height: 120px;
  float: left;
  margin: 0 20px 0 0;
}

@media screen and (max-width: 767px) {
  .header {
    margin-top: 50%;
  }

  header h1 {
    font-size: 29px;
    left: 0;
    padding-top: 5px;
  }

  header img {
    height: 70px;
    margin: 0 10px 0 0;
  }
}
</style>



