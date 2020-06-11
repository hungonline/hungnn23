<template>
  <div class="page-folder">
    <Breadcrumb />
    <section class="container folder-show clearfix">
      <ProductFilterSearch />
      <ProductTab />
      <div class="flex mb56">
        <ProductSidebarFilter />
        <ProductList />
      </div>

      <div class="flex space-between">
        <ProductLeft />
        <ProductRight />
      </div>

      <div class="flex space-between">
        <ArticleStream />
        <ProductRight />
      </div>
    </section>
  </div>
</template>

<script>
import $ from "jquery";
import Breadcrumb from "@/views/layout/Breadcrumb.vue";
import ProductFilterSearch from "@/components/Products/ProductFilterSearch.vue";
import ProductTab from "@/components/Products/ProductTab.vue";
import ProductSidebarFilter from "@/components/Products/Category/ProductSidebarFilter.vue";
import ProductList from "@/components/Products/Category/ProductList.vue";
import ProductLeft from "@/components/Products/Category/ProductLeft.vue";
import ProductRight from "@/components/Products/Category/ProductRight.vue";
import ArticleStream from "@/components/Articles/ArticleStream.vue";
export default {
  name: "ProductSearch",
  components: {
    Breadcrumb,
    ProductFilterSearch,
    ProductTab,
    ProductSidebarFilter,
    ProductList,
    ProductLeft,
    ArticleStream,
    ProductRight
  },
  mounted() {
    $(".sort-fillter__right a").click(function() {
      $(".sort-fillter__right a").removeClass("active");
      if (!$(this).hasClass("active")) {
        $(this).addClass("active");
      } else {
        $(this).removeClass("active");
      }
      if ($(this).attr("data-id") == "view-list") {
        $(".list-product.gird").removeClass("view-grid");
        $(".list-product.gird").addClass("view-list");
      } else if ($(this).attr("data-id") == "view-grid") {
        $(".list-product.gird").removeClass("view-list");
        $(".list-product.gird").addClass("view-grid");
      }
    });
  }
};
</script>

<style>
@import "../assets/css/comment.css";
</style>