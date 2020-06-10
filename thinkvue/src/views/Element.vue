<template>
  <div>
    <section class="container clearfix">
      <p class="mt20">
        <a href="#vote-popup" class="open-popup">Popup đánh giá</a>
      </p>
      <p class="mt20">
        <a href="#otp-popup" class="open-popup">Popup nhập mã OPT</a>
      </p>
      <p class="mt20">
        <a href="#otp-popup2" class="open-popup">Popup nhập mã OPT và tên</a>
      </p>
      <p class="mt20">
        <a href="#thongso-popup" class="open-popup">Popup thông số</a>
      </p>
      <p class="mt40"></p>
    </section>

    <!--POPUP Đánh giá-->
    <div id="vote-popup" class="white-popup mfp-hide">
      <div class="content_lightbox center">
        <p class="txt_20 mb20">
          <strong>Đánh giá của bạn về sản phẩm</strong>
        </p>
        <ul class="list-star">
          <li class="active">
            <svg class="icon-svg">
              <use xlink:href="images/icons/icon.svg#star1" />
            </svg>
          </li>
          <li class="active">
            <svg class="icon-svg">
              <use xlink:href="images/icons/icon.svg#star1" />
            </svg>
          </li>
          <li class="active">
            <svg class="icon-svg">
              <use xlink:href="images/icons/icon.svg#star1" />
            </svg>
          </li>
          <li class="active">
            <svg class="icon-svg">
              <use xlink:href="images/icons/icon.svg#star1" />
            </svg>
          </li>
          <li>
            <svg class="icon-svg">
              <use xlink:href="images/icons/icon.svg#star1" />
            </svg>
          </li>
        </ul>
        <div class="login-form">
          <div class="form-group flex">
            <label class="mb10" for="inputEmail">
              <strong>Bình luận của bạn</strong>
            </label>
            <div class="input-wrap">
              <textarea class="form-control textarea" placeholder="Mời bạn để lại bình luận"></textarea>
              <span class="error" style="display: none;">Thông báo lỗi</span>
            </div>
          </div>
          <div class="form-group flex">
            <label class="mb10" for="inputEmail">
              <strong>Số điện thoại</strong>
            </label>
            <div class="input-wrap">
              <input
                type="email"
                id="inputEmail"
                class="form-control"
                placeholder="Nhập số điện thoại"
              />
              <span class="error" style="display: none;">Thông báo lỗi</span>
            </div>
          </div>
        </div>
        <div class="center">
          <a class="btn btn-default" href="javascript:;">Gửi đánh giá</a>
        </div>
      </div>
    </div>

    <!--POPUP OTP-->
    <div id="otp-popup" class="white-popup mfp-hide">
      <div class="content_lightbox">
        <p class="txt_20 mb20">
          <strong>Nhập mã OTP để đăng nhập và gửi đánh giá</strong>
        </p>
        <div class="login-form">
          <div class="form-group flex">
            <div class="input-wrap">
              <input type="email" id="inputEmail" class="form-control" placeholder="Mã OTP" />
              <span class="error" style="display: none;">Thông báo lỗi</span>
            </div>
          </div>
        </div>
        <div class="center">
          <a class="btn btn-default" href="javascript:;">Xong</a>
        </div>
      </div>
    </div>
    <!--POPUP OTP-->
    <div id="otp-popup2" class="white-popup mfp-hide">
      <div class="content_lightbox">
        <div class="login-form">
          <div class="form-group flex">
            <label class="mb10" for="inputEmail">
              <strong>Tên của bạn</strong>
            </label>
            <div class="input-wrap">
              <input type="email" id="inputEmail" class="form-control" placeholder="Tên của bạn" />
            </div>
          </div>
          <div class="form-group flex">
            <label class="mb10" for="inputEmail">
              <strong>
                Nhập mã OTP để đăng nhập và gửi đánh
                giá
              </strong>
            </label>
            <div class="input-wrap">
              <input type="email" id="inputEmail" class="form-control" placeholder="Mã OTP" />
            </div>
          </div>
        </div>
        <div class="center">
          <a class="btn btn-default" href="javascript:;">Xong</a>
        </div>
      </div>
    </div>
    <!--POPUP Thông số-->
    <div id="thongso-popup" class="thongso-popup white-popup mfp-hide">
      <div class="content_lightbox">
        <p class="txt_20 mb20 center">
          <strong>Thông số chi tiết</strong>
        </p>
        <ul class="scrollbar-inner">
          <p class="txt_16 mb15 medium">Bộ vi xử lý</p>
          <li>
            <div>Công nghệ CPU</div>
            <div>Comet Lake</div>
          </li>
          <li>
            <div>Loại</div>
            <div>CPU i5 - 1021U</div>
          </li>
          <li>
            <div>Tốc độ CPU</div>
            <div>CPU i5 - 1021U</div>
          </li>
          <li>
            <div>Tốc độ CPU</div>
            <div>CPU i5 - 1021U</div>
          </li>
          <li>
            <div>Tốc độ CPU</div>
            <div>CPU i5 - 1021U</div>
          </li>
          <p class="txt_16 mt20 mb15 medium">Ram, ổ cứng</p>
          <li>
            <div>Công nghệ CPU</div>
            <div>Comet Lake</div>
          </li>
          <li>
            <div>Loại</div>
            <div>CPU i5 - 1021U</div>
          </li>
          <li>
            <div>Tốc độ CPU</div>
            <div>CPU i5 - 1021U</div>
          </li>
          <li>
            <div>Tốc độ CPU</div>
            <div>CPU i5 - 1021U</div>
          </li>
          <li>
            <div>Tốc độ CPU</div>
            <div>CPU i5 - 1021U</div>
          </li>
          <p class="txt_16 mt20 mb15 medium">màn hình</p>
          <li>
            <div>Công nghệ CPU</div>
            <div>Comet Lake</div>
          </li>
          <li>
            <div>Loại</div>
            <div>CPU i5 - 1021U</div>
          </li>
          <li>
            <div>Tốc độ CPU</div>
            <div>CPU i5 - 1021U</div>
          </li>
          <li>
            <div>Tốc độ CPU</div>
            <div>CPU i5 - 1021U</div>
          </li>
          <li>
            <div>Tốc độ CPU</div>
            <div>CPU i5 - 1021U</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import $ from "jquery";
import "magnific-popup";
export default {
  name: "Element",
  mounted() {
      $('.open-popup').magnificPopup({
			type: 'inline',
			midClick: true,
			mainClass: 'mfp-with-zoom',
			fixedContentPos: false,
			fixedBgPos: true,
			overflowY: 'auto',
			closeBtnInside: true,
			preloader: false,
			removalDelay: 300,
		});
  }
};
</script>

<style>
</style>