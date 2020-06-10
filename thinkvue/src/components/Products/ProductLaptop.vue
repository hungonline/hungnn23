<template>
  <!-- Phụ kiện - Gear -->
  <div class="mb56 clearfix">
    <h2 class="title_cate">
      <span>Máy tính xách tay</span>
    </h2>
    <div class="fillter-home">
      <div class="flex thuong-hieu">
        <div class="title">Thương hiệu</div>
        <div class="swiper-container content">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <a class="asus" href="#">
                <svg class="icon-svg">
                  <use xlink:href="../../assets/images/icons/icon.svg#asus" />
                </svg>
              </a>
            </div>
            <div class="swiper-slide">
              <a class="acer" href="#">
                <svg class="icon-svg">
                  <use xlink:href="../../assets/images/icons/icon.svg#acer" />
                </svg>
              </a>
            </div>
            <div class="swiper-slide">
              <a class="think" href="#">
                <svg class="icon-svg">
                  <use xlink:href="../../assets/images/icons/icon.svg#thinkpad" />
                </svg>
              </a>
            </div>
            <div class="swiper-slide">
              <a class="dell" href="#">
                <svg class="icon-svg">
                  <use xlink:href="../../assets/images/icons/icon.svg#dell" />
                </svg>
              </a>
            </div>
            <div class="swiper-slide">
              <a class="msi" href="#">
                <svg class="icon-svg">
                  <use xlink:href="../../assets/images/icons/icon.svg#msi" />
                </svg>
              </a>
            </div>
            <div class="swiper-slide">
              <a class="lenovo" href="#">
                <svg class="icon-svg">
                  <use xlink:href="../../assets/images/icons/icon.svg#lenovo" />
                </svg>
              </a>
            </div>
            <div class="swiper-slide">
              <a class="alienware" href="#">
                <svg class="icon-svg">
                  <use xlink:href="../../assets/images/icons/icon.svg#alienware" />
                </svg>
              </a>
            </div>
            <div class="swiper-slide">
              <a class="iphone" href="#">
                <svg class="icon-svg">
                  <use xlink:href="../../assets/images/icons/icon.svg#apple" />
                </svg>
              </a>
            </div>
            <div class="swiper-slide">
              <a class="razor" href="#">
                <svg class="icon-svg">
                  <use xlink:href="../../assets/images/icons/icon.svg#razor" />
                </svg>
              </a>
            </div>
            <div class="swiper-slide">
              <a class="hp" href="#">
                <svg class="icon-svg">
                  <use xlink:href="../../assets/images/icons/icon.svg#hp" />
                </svg>
              </a>
            </div>
          </div>
          <!-- Add Arrows -->
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
        </div>
      </div>
      <div class="flex">
        <div class="title">Khoảng giá</div>
        <div class="content">
          <label>Trên 50 triệu</label>
          <label>40 - 50 triệu</label>
          <label>30 - 40 triệu</label>
          <label>20 - 30 triệu</label>
          <label>15 - 20 triệu</label>
          <label>10 - 15 triệu</label>
        </div>
      </div>
      <div class="flex">
        <div class="title">Nhu cầu:</div>
        <div class="content">
          <label>Gaming</label>
          <label>Thiết kế đồ họa</label>
          <label>Dựng phim</label>
          <label>Văn phòng</label>
          <label>Doanh nhân</label>
        </div>
      </div>
      <div class="flex">
        <div class="title">Khác:</div>
        <div class="content">
          <label>Chuyên trang laptop cũ</label>
          <label>Nhập khẩu chính hãng</label>
        </div>
      </div>
    </div>
    <div class="list-product row">
      <div v-for="n in 10" :key="n" class="items">
        <a class="ava" href>
          <img src="../../assets/css/images/graphics/sp2.jpg" />
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
            Giá từ:
            <strong>27.990.000đ</strong>
            <div class="price_old">35.000.000đ</div>
          </div>
          <a class="btn-default add-cart" href="#">Thêm vào giỏ hàng</a>
          <a class="btn-default add-compare" href="#">Thêm vào so sánh</a>
          <div class="note">
            <img src="../../assets/css/images/icons/color.svg" />
            Nhiều màu sắc
          </div>
          <div class="changer_color">
            <div>Trắng</div>
            <ul>
              <li class="active">
                <a href="#">
                  <img src="../../assets/css/images/graphics/product-slide.jpg" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="../../assets/css/images/graphics/product-slide.jpg" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductLaptop"
};
</script>

<style>
</style>