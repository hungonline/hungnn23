<template>
  <div id="app">
    <Header />
    <main id="main">
      
        <router-view />
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from "@/views/layout/Header.vue";
import Footer from "@/views/layout/Footer.vue";
export default {
  components: {
    Header,
    Footer
  }
};
</script>
<style>
@import "./assets/css/style.css";
</style>
