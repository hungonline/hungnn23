<template>
  <div class="page-folder">
    <Breadcrumb />
    <section class="container folder-show clearfix">
      <h1 class="title_cate hidden-md">
        <span>Máy tính xách tay</span>
      </h1>
      <div class="flex mb56">
        <ProductSidebarFilter />
        <ProductList />
      </div>
    </section>
  </div>
</template>

<script>
import $ from "jquery";
import Breadcrumb from "@/views/layout/Breadcrumb.vue";
import ProductSidebarFilter from "@/components/Products/Category/ProductSidebarFilter.vue";
import ProductList from "@/components/Products/Category/ProductList.vue";

export default {
  name: "ProductFolder",
  components: {
    Breadcrumb,
    ProductSidebarFilter,
    ProductList
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
</style>