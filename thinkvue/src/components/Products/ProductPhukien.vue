<template>
  <div class="mb56 clearfix">
    <h2 class="title_cate">
      <span>Phụ kiện - Gear</span>
    </h2>
    <div class="tab-product">
      <a class="active" href="#tab-1">
        <svg class="icon-svg">
          <use xlink:href="../../assets/images/icons/icon.svg#003-keyboard-1" />
        </svg>
        <span>Chuột và bàn phím</span>
      </a>
      <a class href="#tab-2">
        <svg class="icon-svg">
          <use xlink:href="../../assets/images/icons/icon.svg#008-video-card" />
        </svg>
        <span>eGPU</span>
      </a>
      <a class href="#tab-3">
        <svg class="icon-svg">
          <use xlink:href="../../assets/images/icons/icon.svg#045-hard-drive-4" />
        </svg>
        <span>Ổ cứng</span>
      </a>
      <a class href="#tab-4">
        <svg class="icon-svg">
          <use xlink:href="../../assets/images/icons/icon.svg#019-ram-memory" />
        </svg>
        <span>RAM</span>
      </a>
      <a class href="#tab-5">
        <svg class="icon-svg">
          <use xlink:href="../../assets/images/icons/icon.svg#004-mouse-1" />
        </svg>
        <span>Hub chuyển đổi</span>
      </a>
      <a class href="#tab-6">
        <svg class="icon-svg">
          <use xlink:href="../../assets/images/icons/icon.svg#071-backpack" />
        </svg>
        <span>Balo Laptop</span>
      </a>
    </div>

    <div class="list-product list-product_5item row">
      <div v-for="n in 5" :key="n" class="items">
        <a class="ava" href>
          <img src="../../assets/css/images/graphics/pk1.jpg" />
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
      </div>
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
  name: "ProductPhukien"
};
</script>

<style>
</style>