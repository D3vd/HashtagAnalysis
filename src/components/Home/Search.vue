<template>
  <div class="search-form">
    <form @submit.prevent="search()" class="search">
      <div class="form">
        <div class="hashtag">
          <strong>#</strong>
        </div>
        <input class="form-query" name="query" v-model="query" @keypress="toggle()">
        <div class="hashtag-mobile">#</div>
        <button class="form-btn" type="submit">Search</button>
      </div>
      <p v-if="showError" class="show-error">Please Enter a Query</p>
    </form>
  </div>
</template>

<script>
export default {
  name: "Search",
  data() {
    return {
      query: "",
      showError: false
    };
  },
  mounted: function() {
    if (this.$route.query.search) {
      this.query = this.$route.query.search;
    }
  },
  methods: {
    search: function() {
      let query = this.query;
      if (query) {
        this.$router.push("/result/" + query);
      } else {
        this.showError = true;
      }
    },
    toggle: function() {
      this.showError = false;
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Noto+Sans");

* {
  box-sizing: border-box;
}

.search-form {
  position: relative;
  margin: 100px 0px;
}

.form {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 100%;
}

.hashtag {
  background-color: white;
  height: 50px;
  font-size: 35px;
  padding: 0 10px;
  padding-top: 2px;
  font-family: "Noto Sans", sans-serif;
}

.form-query {
  border: none;
  height: 50px;
  width: 500px;
  font-size: 35px;
  font-family: "Noto Sans", sans-serif;
  background-color: white;
}

.form-btn {
  height: 50px;
  font-size: 30px;
  font-family: "Noto Sans", sans-serif;
  border: none;
  color: aliceblue;
  background-color: black;
  padding: 0 5px;
}

.form-btn:hover {
  color: black;
  background-color: white;
}

.form-btn:focus {
  outline: none;
}

.form-query:focus {
  outline: none;
}

.show-error {
  text-align: center;
  font-family: "Noto Sans", sans-serif;
  color: #fe5e44;
  font-size: 20px;
  margin-top: 20px;
}

.hashtag-mobile {
  display: none;
}

@media screen and (max-width: 767px) {
  .form {
    justify-content: initial;
    height: 100%;
    padding: 0;
    margin: 0;
    position: relative;
  }

  .search-form {
    margin-top: 50px;
    margin-left: 20px;
    margin-right: 20px;
  }

  .form-query {
    height: 40px;
    font-size: 25px;
    margin: 0 auto;
    width: 100%;
    position: relative;
    padding-left: 25px;
  }

  .hashtag-mobile {
    display: unset;
    position: absolute;
    left: 6px;
    font-family: "Noto Sans", sans-serif;
    font-size: 25px;
  }

  .hashtag {
    display: none;
    height: 40px;
    font-size: 25px;
  }

  .form-btn {
    display: none;
  }
}
</style>
