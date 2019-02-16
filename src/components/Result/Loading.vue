<template>
  <div class="loading">
    <div class="v-align">
      <h1 class="loading-text">Collecting Tweets on {{this.query}}...</h1>
      <div class="loader">
        <aside class="loader__box loader--left">
          <span class="loader__circle"></span>
        </aside>
        <aside class="loader__box loader--right">
          <span class="loader__circle"></span>
        </aside>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loading",
  props: {
    query: String
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Noto+Sans");

@-moz-keyframes leftAnim {
  0% {
    -moz-transform: translateX(97px);
    transform: translateX(97px);
  }
  100% {
    -moz-transform: translateX(0);
    transform: translateX(0);
  }
}
@-webkit-keyframes leftAnim {
  0% {
    -webkit-transform: translateX(97px);
    transform: translateX(97px);
  }
  100% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@keyframes leftAnim {
  0% {
    -moz-transform: translateX(97px);
    -ms-transform: translateX(97px);
    -webkit-transform: translateX(97px);
    transform: translateX(97px);
  }
  100% {
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
}
@-moz-keyframes rightAnim {
  0% {
    -moz-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -moz-transform: translateX(-93px);
    transform: translateX(-93px);
  }
}
@-webkit-keyframes rightAnim {
  0% {
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -webkit-transform: translateX(-93px);
    transform: translateX(-93px);
  }
}
@keyframes rightAnim {
  0% {
    -moz-transform: translateX(0);
    -ms-transform: translateX(0);
    -webkit-transform: translateX(0);
    transform: translateX(0);
  }
  100% {
    -moz-transform: translateX(-93px);
    -ms-transform: translateX(-93px);
    -webkit-transform: translateX(-93px);
    transform: translateX(-93px);
  }
}
.loader {
  width: 300px;
  height: 150px;
  margin: 0 auto;
  position: relative;
}
.loader::after {
  content: "";
  display: inline-block;
  position: absolute;
  left: 50%;
  margin-left: -1px;
  width: 2px;
  z-index: 1;
  height: 150px;
  border-left: 2px dotted #000;
}
.loader__box {
  position: absolute;
  top: 0;
  width: 150px;
  height: 150px;
  overflow: hidden;
  z-index: 2;
}
.loader--left {
  left: 0;
}
.loader--left .loader__circle {
  background-color: #fff;
  right: 10px;
  -moz-animation: leftAnim 1.3s ease-in-out alternate infinite;
  -webkit-animation: leftAnim 1.3s ease-in-out alternate infinite;
  animation: leftAnim 1.3s ease-in-out alternate infinite;
}
.loader--right {
  right: 0;
}
.loader--right .loader__circle {
  left: 10px;
  -moz-animation: rightAnim 1.3s ease-in-out alternate infinite;
  -webkit-animation: rightAnim 1.3s ease-in-out alternate infinite;
  animation: rightAnim 1.3s ease-in-out alternate infinite;
}
.loader__circle {
  width: 75px;
  height: 75px;
  border: solid 2px black;
  display: block;
  background-color: #000;
  -moz-border-radius: 50%;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  margin-top: -37.5px;
}

* {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}

html,
body {
  min-height: 100%;
}

body {
  position: relative;
}

.v-align {
  position: absolute;
  text-align: center;
  left: 0;
  width: 100%;
  max-height: 90vh;
  top: 50%;
  -moz-transform: translateY(-50%);
  -ms-transform: translateY(-50%);
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.loading-text {
  font-family: "Noto Sans", sans-serif;
  margin-bottom: 20px;
  color: white;
}
</style>
