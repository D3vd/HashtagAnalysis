<template>
  <div class="header" style="text-align: center">
    <a href="/">
      <img class="logo-image" style="vertical-align:middle" src="../../assets/logo.png" alt>
      <span class="logo-text" style="vertical-align:middle">Hashtag Analysis</span>
    </a>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  margin-top: 20px;
}

.logo-image {
  width: 70px;
}

a {
  text-decoration: none;
}

.logo-text {
  font-size: 30px;
  margin-left: 20px;
  color: aliceblue;
}
</style>
