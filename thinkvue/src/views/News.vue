<template>
<section class="container clearfix">
  <div class="page-folder">
    <ArticleList />
  </div>
</section>
</template>

<script>
import ArticleList from "@/components/Articles/ArticleList.vue";
export default {
  name: "News",
  components: {
    ArticleList
  }
};
</script>
<style>
@import "../assets/css/article.css";
</style>