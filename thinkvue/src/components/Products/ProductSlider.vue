<template>
  <div class="mb56 product-slide product-slide__dangve clearfix">
    <h2 class="title_cate">
      <span>{{ title }}</span>
    </h2>
    <div class="swiper-container padding-swiper list-product">
      <div class="swiper-wrapper">
        <div class="swiper-slide items" v-for="product in products" :key="product.id">
          <a class="ava" href>
            <img src="../../assets/css/images/graphics/sp3.jpg" />
            <span class="status txt_12" :class="colorStatus">{{ product.status }}</span>
          </a>
          <div class="content">
            <div class="date txt_12 oranger mb5">{{ product.date }}</div>
            <h4 class="name">
              <a href="#">{{ product.name }}</a>
            </h4>
            <span class="txt_12 code">{{ product.code }}</span>
            <div class="more">
              <div class="description">
                <p>
                  <strong>Điểm nổi bật:</strong>
                </p>
                <p
                  v-for="(description, index) in product.description"
                  :key="index"
                >{{ description }}</p>
              </div>
              <div v-if="notifiButton === true" class="notifi txt_14">
                <a href>Nhận thông báo khi có</a>
              </div>
            </div>
          </div>
          <div class="content_2">
            <div class="price">
              Giá từ:
              <strong>{{ product.price }}đ</strong>
              <div class="price_old">{{ product.price_old }}đ</div>
            </div>
            <a class="btn-default add-cart" href="#">Thêm vào giỏ hàng</a>
            <a class="btn-default add-compare" href="#">Thêm vào so sánh</a>
          </div>
        </div>
      </div>
      <!-- Add Arrows -->
      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
    </div>
    <div class="view-more view-more__border">
      <a href="javascript:;">
        Xem tất cả
        <svg class="icon-svg">
          <use xlink:href="../../assets/images/icons/icon.svg#arrow-right" />
        </svg>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductSlider",
  props: {
    title: String,
    products: Array,
    colorStatus: String,
    notifiButton: Boolean
  },
  mounted() {}
};
</script>

<style>
</style>