<template>
  <div class="sticky_detail">
    <div class="container">
      <div class="sticky_detail__hotline">
        <span>Hotline</span>
        <strong>1900.63.3579</strong>
      </div>
      <div class="sticky_detail__right">
        <div class="price">
          Giá từ:
          <strong>27.990.000đ</strong>
          <div class="price_old">35.000.000đ</div>
        </div>
        <div class="sticky_detail__btn">
          <a href="#" class="like">
            <svg class="icon-svg">
              <use xlink:href="../../../assets/images/icons/icon.svg#heart1" />
            </svg>
          </a>
          <a class="btn-default add-cart" href="#">Thêm vào giỏ hàng</a>
          <a class="btn-default add-compare" href="#">Thêm vào so sánh</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: "ProductDetailSticky"
};
</script>

<style>
</style>