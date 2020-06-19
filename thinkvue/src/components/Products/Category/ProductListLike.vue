<template>
  <div class="list-product list-product__like">
    <div v-for="n in 10" :key="n" class="items">
      <a class="ava" href>
        <img src="../../../assets/css/images/graphics/sp1.jpg" />
        <span class="status txt_12 bg-oranger">Đang về</span>
      </a>
      <div class="content">
        <h4 class="name">
          <a href="#">Dell XPS 13 7390 (2019) - Hàng chính hãng</a>
        </h4>
        <div class="code color-gray txt_12 mb10">MPN: 1234567</div>
        <div class="more">
          <p>CPU thế hệ 10th</p>
          <p>Mỏng nhẹ cao cấp</p>
          <p>Windows bản quyền</p>
        </div>
        <div class="price price_mobile">
          Giá từ:
          <strong>27.990.000đ</strong>
          <div class="price_old">35.000.000đ</div>
        </div>
      </div>
      <div class="content_2">
        <div class="price">
          <strong>27.990.000đ</strong>
          <div class="price_old">35.000.000đ</div>
        </div>
        <a class="btn-default add-cart" href="#">Thêm vào giỏ hàng</a>
        <a class="btn-default add-compare" href="#">Thêm vào so sánh</a>
        <a class="like active">
          <svg class="icon-svg">
            <use xlink:href="../../../assets/images/icons/icon.svg#heart1" />
          </svg>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList3"
};
</script>

<style>
</style>