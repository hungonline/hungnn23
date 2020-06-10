<template>
  <div class="page-detail">
    <Breadcrumb />
    <section class="container content-middle productdetail clearfix">
      <div class="border-bottom flex">
        <ProductDetailThumb />
        <ProductDetailInfo />
      </div>
    </section>
    <ProductDetailContent />
    <ProductDetailSticky />
  </div>
</template>

<script>
import $ from "jquery";
import Swiper from "swiper";
import Breadcrumb from "@/views/layout/Breadcrumb.vue";
import ProductDetailThumb from "@/components/Products/Detail/ProductDetailThumb.vue";
import ProductDetailInfo from "@/components/Products/Detail/ProductDetailInfo.vue";
import ProductDetailContent from "@/components/Products/Detail/ProductDetailContent.vue";
import ProductDetailSticky from "@/components/Products/Detail/ProductDetailSticky.vue";

export default {
  name: "ProductDetail",
  components: {
    Breadcrumb,
    ProductDetailThumb,
    ProductDetailInfo,
    ProductDetailSticky,
    ProductDetailContent
  },
  mounted() {
    let galleryThumbs2 = new Swiper(".slideshow .slideshow__thumbs", {
      spaceBetween: 8,
      slidesPerView: 5,
      // loopedSlides: 8,
      direction: "vertical",
      freeMode: true,
      // centeredSlides: true,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      speed: 500,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        767: {
          direction: "horizontal"
        }
      }
    });
    new Swiper(".slideshow .slideshow__gallery", {
      // loopedSlides: 8,
      direction: "vertical",
      speed: 700,
      thumbs: {
        swiper: galleryThumbs2
      },
      breakpoints: {
        767: {
          direction: "horizontal",
          spaceBetween: 0
        }
      }
    });
    // class active
    $(".click--hover").click(function() {
      $(".click--hover").removeClass("active");
      $(this).addClass("active");
    });

    $(".view-full a").click(function(e) {
      e.preventDefault();
      if ($(".content-danhgia").hasClass("has-toggle")) {
        $(".content-danhgia").removeClass("has-toggle");
        $(".view-full").addClass("view-less");
        $(this).html("Thu gọn");
      } else {
        $(".content-danhgia").addClass("has-toggle");
        $(".view-full").removeClass("view-less");
        $(this).html("Xem đầy đủ");
      }
    });
  }
};
</script>

<style>
@import "../assets/css/product.css";
</style>