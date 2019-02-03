<template>
  <div id="app">
    <div id="particleground"></div>
    <router-view/>
  </div>
</template>

<script>
export default {
  mounted() {
    // eslint-disable-next-line
    particleground(document.getElementById("particleground"), {
      dotColor: "#1174ad",
      lineColor: "#1174ad",
      density: 8000,
      proximity: 80
    });
  }
};
</script>

<style>
#particleground {
  background-color: #1da1f2;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 0;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

html,
body,
div {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
</style>
