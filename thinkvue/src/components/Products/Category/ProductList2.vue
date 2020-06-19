<template>
  <div class="list-product list-product_5item row">
    <div v-for="n in 5" :key="n" class="items">
      <a class="ava" href>
        <img src="../../../assets/css/images/graphics/pk1.jpg" />
      </a>
      <div class="content">
        <h4 class="name">
          <a href="#">Dell XPS 13 7390 (2019) - Hàng chính hãng</a>
        </h4>
        <div class="ch">
          <strong>3</strong> cấu hình tùy chọn
        </div>
        <div class="more">
          <p>
            <strong>Điểm nổi bật:</strong>
          </p>
          <p>Viền màn hình siêu mỏng</p>
          <p>CPU thế hệ 10th</p>
          <p>Mỏng nhẹ cao cấp</p>
          <p>Windows bản quyền</p>
        </div>
      </div>
      <div class="content_2">
        <div class="price">
          <strong>27.990.000đ</strong>
          <div class="price_old">35.000.000đ</div>
        </div>
        <a class="btn-default add-cart block" href="#">Thêm vào giỏ hàng</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList2"
};
</script>

<style>
</style>