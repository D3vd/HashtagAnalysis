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
  },
  mounted() {
    // eslint-disable-next-line
    particleground(document.getElementById("particleground"), {
      dotColor: "#1174ad",
      lineColor: "#1174ad",
      density: 8000,
      proximity: 80
    });

    document.getElementById("particleground").style.backgroundColor = "#1da1f2";
  }
};
</script>
