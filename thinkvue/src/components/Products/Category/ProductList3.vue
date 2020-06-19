<template>
  <div class="list-product list-product_5item row">
    <div v-for="n in 5" :key="n" class="items">
      <a class="ava" href>
        <img src="../../../assets/css/images/graphics/sp2.jpg" />
        <span class="status txt_12 bg-oranger">Đang về</span>
      </a>
      <div class="content">
        <div class="date txt_12 oranger mb5">Còn 5 ngày</div>
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
          Giá từ:
          <strong>27.990.000đ</strong>
          <div class="price_old">35.000.000đ</div>
        </div>
        <a class="btn-default add-cart" href="#">Thêm vào giỏ hàng</a>
        <a class="btn-default add-compare" href="#">Thêm vào so sánh</a>
        <div class="note">
          <img src="../../../assets/css/images/icons/color.svg" />
          Nhiều màu sắc
        </div>
        <div class="changer_color">
          <div>Trắng</div>
          <ul>
            <li class="active">
              <a href="#">
                <img src="../../../assets/css/images/graphics/product-slide.jpg" />
              </a>
            </li>
            <li>
              <a href="#">
                <img src="../../../assets/css/images/graphics/product-slide.jpg" />
              </a>
            </li>
          </ul>
        </div>
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