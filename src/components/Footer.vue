<template>
  <div class="footer">
    <a href="https://www.github.com/R3l3ntl3ss/HashtagAnalysis" target="_blank">
      🍴
      <span>R3l3ntl3ss/HashtagAnalysis</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "Footer"
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Noto+Sans");

.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 50px;
  text-align: center;
}

.footer a {
  font-family: "Noto Sans", sans-serif;
  text-decoration: none;
  color: black;
}

.footer a span {
  color: aliceblue;
}

.footer a span:hover {
  text-decoration: underline;
}
</style>


