<template>
  <div class="home">
    <Header/>
    <Search/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Home/Header.vue";
import Search from "@/components/Home/Search.vue";
import Footer from "@/components/Footer.vue";

export default {
  name: "home",
  components: {
    Header,
    Search,
    Footer
  }
};
</script>
