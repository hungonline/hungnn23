<template>
  <section class="container width-article clearfix">
    <ArticleDetail />
    <ProductRelated />
    <ArticleTag />
    <ArticleRelated />
  </section>
</template>

<script>
import Swiper from "swiper";
import ArticleDetail from "@/components/Articles/ArticleDetail.vue";
import ArticleTag from "@/components/Articles/ArticleTag.vue";
import ArticleRelated from "@/components/Articles/ArticleRelated.vue";
import ProductRelated from "@/components/Products/ProductRelated.vue";

export default {
  name: "NewsDetail",
  components: {
    ArticleDetail,
    ProductRelated,
    ArticleTag,
    ArticleRelated
  },
  mounted() {
    new Swiper(".slide-other .swiper-container", {
      slidesPerView: 2,
      spaceBetween: 8,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        480: {
          loop: true,
          slidesPerView: 1
        }
      }
    });
  }
};
</script>

<style>
</style>