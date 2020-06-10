<template>
<section class="container clearfix">
  <div class="homepage">
    <Slider />
    <ProductReview />
    <ProductSlider
      title="Hàng đang về"
      :products="products"
      colorStatus="bg-oranger"
      :notifiButton="true"
    />
    <ProductSlider
      title="Hàng mới về"
      :products="products"
      colorStatus="bg-green"
      :notifiButton="false"
    />
    <ProductSlider
      title="Giảm giá sốc"
      :products="products"
      colorStatus="bg-red"
      :notifiButton="false"
    />
    <ProductLaptop />
    <ProductPhukien />
  </div>
</section>
</template>

<script>
import Swiper from "swiper";
import $ from "jquery";
import Slider from "@/components/Products/Slider.vue";
import ProductReview from "@/components/Products/ProductReview.vue";
import ProductSlider from "@/components/Products/ProductSlider.vue";
import ProductLaptop from "@/components/Products/ProductLaptop.vue";
import ProductPhukien from "@/components/Products/ProductPhukien.vue";
export default {
  data() {
    return {
      products: [
        {
          id: 1,
          name: "Dell XPS 13 7390 (2019) - Hàng chính hãng",
          image: "../../assets/css/images/graphics/sp3.jpg",
          status: "Đang về",
          date: "Còn 5 ngày",
          code: "MPN: 1234567",
          description: [
            "Viền màn hình siêu mỏng",
            "CPU thế hệ 10th",
            "Mỏng nhẹ cao cấp",
            "Windows bản quyền"
          ],
          price: "27.990.000",
          price_old: "35.000.000"
        },
        {
          id: 2,
          name: "Dell XPS 15 7390 (2019) - Hàng chính hãng",
          image: "../../assets/css/images/graphics/sp3.jpg",
          status: "Đang về",
          date: "Còn 5 ngày",
          code: "MPN: 1234567",
          description: [
            "Viền màn hình siêu mỏng",
            "CPU thế hệ 10th",
            "Mỏng nhẹ cao cấp",
            "Windows bản quyền"
          ],
          price: "27.990.000",
          price_old: "35.000.000"
        },
        {
          id: 3,
          name: "Dell XPS 14 7390 (2019) - Hàng chính hãng",
          image: "../../assets/css/images/graphics/sp3.jpg",
          status: "Đang về",
          date: "Còn 5 ngày",
          code: "MPN: 1234567",
          description: [
            "Viền màn hình siêu mỏng",
            "CPU thế hệ 10th",
            "Mỏng nhẹ cao cấp",
            "Windows bản quyền"
          ],
          price: "27.990.000",
          price_old: "35.000.000"
        },
        {
          id: 4,
          name: "Dell XPS 14 7390 (2019) - Hàng chính hãng",
          image: "../../assets/css/images/graphics/sp3.jpg",
          status: "Đang về",
          date: "Còn 5 ngày",
          code: "MPN: 1234567",
          description: [
            "Viền màn hình siêu mỏng",
            "CPU thế hệ 10th",
            "Mỏng nhẹ cao cấp",
            "Windows bản quyền"
          ],
          price: "27.990.000",
          price_old: "35.000.000"
        },
        {
          id: 5,
          name: "Dell XPS 154 7390 (2019) - Hàng chính hãng",
          image: "../../assets/css/images/graphics/sp3.jpg",
          status: "Đang về",
          date: "Còn 5 ngày",
          code: "MPN: 1234567",
          description: [
            "Viền màn hình siêu mỏng",
            "CPU thế hệ 10th",
            "Mỏng nhẹ cao cấp",
            "Windows bản quyền"
          ],
          price: "27.990.000",
          price_old: "35.000.000"
        },
        {
          id: 6,
          name: "Dell XPS 154 7390 (2019) - Hàng chính hãng",
          image: "../../assets/css/images/graphics/sp3.jpg",
          status: "Đang về",
          date: "Còn 5 ngày",
          code: "MPN: 1234567",
          description: [
            "Viền màn hình siêu mỏng",
            "CPU thế hệ 10th",
            "Mỏng nhẹ cao cấp",
            "Windows bản quyền"
          ],
          price: "27.990.000",
          price_old: "35.000.000"
        },
        {
          id: 7,
          name: "Dell XPS 154 7390 (2019) - Hàng chính hãng",
          image: "../../assets/css/images/graphics/sp3.jpg",
          status: "Đang về",
          date: "Còn 5 ngày",
          code: "MPN: 1234567",
          description: [
            "Viền màn hình siêu mỏng",
            "CPU thế hệ 10th",
            "Mỏng nhẹ cao cấp",
            "Windows bản quyền"
          ],
          price: "27.990.000",
          price_old: "35.000.000"
        }
      ]
    };
  },
  name: "Home",
  components: {
    Slider,
    ProductReview,
    ProductSlider,
    ProductLaptop,
    ProductPhukien
  },
  mounted() {
    // home slider
    var galleryThumbs2 = new Swiper(".fs-aslide__left .gallery-thumbs", {
      slidesPerView: 4,
      freeMode: true,
      loopedSlides: 5,
      watchSlidesVisibility: true,
      watchSlidesProgress: true,
      breakpoints: {
        480: {
          slidesPerView: 2,
          loopedSlides: 3
        },
        1024: {
          slidesPerView: 3,
          loopedSlides: 4
        }
      }
    });
    new Swiper(".fs-aslide__left .gallery-top", {
      loopedSlides: 5,
      autoplay: {
        delay: 5000
      },
      thumbs: {
        swiper: galleryThumbs2
      },
      pagination: {
        el: ".swiper-pagination",
        type: "progressbar"
      }
    });
    // review slider
    new Swiper(".slide-review .swiper-container", {
      slidesPerView: 3,
      spaceBetween: 8,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        480: {
          loop: true,
          slidesPerView: 1
        },
        991: {
          slidesPerView: 3
        }
      }
    });
    $(".product-review .swiper-slide").mouseover(function() {
      $(".product-review .swiper-container").css({
        "padding-bottom": "214px",
        "margin-bottom": "-214px",
        "z-index": "8"
      });
    });
    $(".product-review .swiper-slide").mouseout(function() {
      $(".product-review .swiper-container").css({
        "padding-bottom": "0",
        "margin-bottom": "0"
      });
    });
    // product slider
    new Swiper(".product-slide .swiper-container", {
      slidesPerView: 5,
      // autoplay: {
      // 	delay: 6000,
      // },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        480: {
          slidesPerView: 2
        },
        991: {
          slidesPerView: 3
        },
        1025: {
          slidesPerView: 4
        }
      }
    });
    $(".product-slide .swiper-slide").mouseover(function() {
      $(".product-slide .swiper-container").css({
        "padding-bottom": "214px",
        "margin-bottom": "-214px",
        "z-index": "8"
      });
    });
    $(".product-slide .swiper-slide").mouseout(function() {
      $(".product-slide .swiper-container").css({
        "padding-bottom": "0",
        "margin-bottom": "0"
      });
    });
    // product laptop
    new Swiper(".thuong-hieu .swiper-container", {
      slidesPerView: 8,
      spaceBetween: 8,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      },
      breakpoints: {
        480: {
          slidesPerView: 5
        },
        991: {
          slidesPerView: 4
        }
      }
    });
  }
};
</script>
