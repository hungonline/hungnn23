<template>
  <div class="mb56 product-review slide-other clearfix">
    <h2 class="title_cate">
      <span>Sản phẩm liên quan</span>
    </h2>
    <div class="swiper-container padding-swiper list-product">
      <div class="swiper-wrapper">
        <div class="swiper-slide items" v-for="n in 10" :key="n">
          <a class="ava" href>
            <img src="../../assets/css/images/graphics/sp3.jpg" />
          </a>
          <div class="content">
            <h4 class="name">
              <a href="#">Dell XPS 13 7390 (2019) - Hàng chính hãng</a>
            </h4>
            <div class="ch">
              <strong>3</strong> cấu hình tùy chọn
            </div>
            <div class="price">
              Giá từ:
              <strong>27.990.000đ</strong>
              <div class="price_old">35.000.000đ</div>
            </div>
            <div class="note">
              <img src="../../assets/images/icons/color.svg" />
              Nhiều màu sắc
            </div>
          </div>
        </div>
      </div>
      <!-- Add Arrows -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductRelated"
};
</script>

<style>
</style>