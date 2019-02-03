<template>
  <div class="home">
    <Header/>
    <Search/>
    <Footer/>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header.vue";
import Search from "@/components/Search.vue";
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
