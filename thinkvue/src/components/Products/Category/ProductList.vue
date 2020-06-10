<template>
  <div class="col_right">
    <div class="sort-fillter flex">
      <div class="sort-fillter__left flex">
        <strong>Sắp xếp theo:</strong>
        <a href="#" title>Giá thấp</a>
        <a href="#" title>Giá cao</a>
        <a href="#" title>Hàng mới</a>
        <a href="#" title>Bán chạy</a>
        <a href="#" title>Chọn lọc</a>
      </div>
      <div class="sort-fillter__right">
        <a href="javascript:;" data-id="view-list">
          <svg class="icon-svg">
            <use xlink:href="../../../assets/images/icons/icon.svg#list-ul1" />
          </svg>
        </a>
        <a class="active" href="javascript:;" data-id="view-grid">
          <svg class="icon-svg">
            <use xlink:href="../../../assets/images/icons/icon.svg#apps1" />
          </svg>
        </a>
      </div>
    </div>
    <div class="list-product gird gird_4col row">
      <div class="items" v-for="n in 24" :key="n">
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
            <img src="../../../assets/images/icons/color.svg" />
            Nhiều màu sắc
          </div>
        </div>
      </div>
    </div>
    <div id="pagination" class="center">
      <ul class="pagination">
        <li class="page-item">
          <a class="page-link prev" href="#"></a>
        </li>
        <li class="page-item">
          <a class="page-link active" href="#">1</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">2</a>
        </li>
        <li class="page-item">
          <a class="page-link" href="#">3</a>
        </li>
        <li class="page-item">
          <a class="page-link next" href="#"></a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductList"
};
</script>

<style>
</style>