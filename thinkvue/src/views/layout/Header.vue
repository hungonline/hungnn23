<template>
  <div class="sticky sticky_zindex">
    <header id="header" class="section sticky header header-mobile">
      <div class="btn_control_menu">
        <svg class="icon-svg">
          <use xlink:href="../../assets/images/icons/icon.svg#hamburger" />
        </svg>
      </div>
      <a class="img_logo" href>
        <img src="../../assets/css/images/graphics/logo.svg" />
      </a>
      <div class="header__right">
        <button id="auto_search_button" type="submit" value>
          <svg class="icon-svg">
            <use xlink:href="../../assets/images/icons/icon.svg#search" />
          </svg>
        </button>
        <a class="close-search">
          <svg class="icon-svg">
            <use xlink:href="../../assets/images/icons/icon.svg#close" />
          </svg>
        </a>
        <div class="block_search section">
          <form id="search" class="search" action method="get">
            <input
              class="search-input onclick-togle"
              type="text"
              name="q"
              placeholder="Tìm kiếm trên ThinkPro"
              autocomplete="off"
              maxlength="50"
            />
            <button type="submit" class="search-button">
              <svg class="icon-svg">
                <use xlink:href="../../assets/images/icons/icon.svg#search" />
              </svg>
            </button>
            <div class="suggest-search">
              <div class="suggest-product">
                <label>Laptop</label>
                <div class="items">
                  <a class="ava" href>
                    <img src="../../assets/css/images/graphics/sp1.jpg" />
                  </a>
                  <div class="content">
                    <h3 class="name">
                      <a href="#">Dell XPS 13 7390 (2019)</a>
                    </h3>
                    <div class="prie">
                      Giá từ
                      <strong>27.990.000đ</strong>
                    </div>
                  </div>
                </div>
                <div class="items">
                  <a class="ava" href>
                    <img src="../../assets/css/images/graphics/sp2.jpg" />
                  </a>
                  <div class="content">
                    <h3 class="name">
                      <a href="#">Dell XPS 13 7390 (2019)</a>
                    </h3>
                    <div class="prie">
                      Giá từ
                      <strong>27.990.000đ</strong>
                    </div>
                  </div>
                </div>
                <hr />
                <label>Phụ kiện</label>
                <div class="items">
                  <a class="ava" href>
                    <img src="../../assets/css/images/graphics/pk1.jpg" />
                  </a>
                  <div class="content">
                    <h3 class="name">
                      <a href="#">Dell XPS 13 7390 (2019)</a>
                    </h3>
                    <div class="prie">
                      Giá từ
                      <strong>27.990.000đ</strong>
                    </div>
                  </div>
                </div>
                <div class="items">
                  <a class="ava" href>
                    <img src="../../assets/css/images/graphics/pk2.jpg" />
                  </a>
                  <div class="content">
                    <h3 class="name">
                      <a href="#">Dell XPS 13 7390 (2019)</a>
                    </h3>
                    <div class="prie">
                      Giá từ
                      <strong>27.990.000đ</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
        <div class="gio-hang">
          <a href="javascript:;" class="onclick">
            <svg class="icon-svg">
              <use xlink:href="../../assets/images/icons/icon.svg#cart" />
            </svg>
            <b class="fs-cartic countTotalCart">3</b>
          </a>
          <div class="wrap-fill">
            <div class="title">
              <strong>2 sản phẩm</strong> trong giỏ hàng
              <a href="javascript:;" class="close">×</a>
            </div>
            <ul>
              <div class="note" style="display: none">Bạn chưa có sản phẩm nào trong giỏ hàng</div>
              <div class="list">
                <div class="items">
                  <div class="ava">
                    <a href="#">
                      <img src="../../assets/css/images/graphics/sp1.png" />
                    </a>
                  </div>
                  <div class="content">
                    <h3>
                      <a href="#">Razer Blade 15" 2019 - Hàng chính hãng</a>
                    </h3>
                    <span class="prie red">27.990.000đ</span>
                  </div>
                </div>
                <div class="items">
                  <div class="ava">
                    <a href="#">
                      <img src="../../assets/css/images/graphics/sp1.png" />
                    </a>
                  </div>
                  <div class="content">
                    <h3>
                      <a href="#">Razer Blade 15" 2019 - Hàng chính hãng</a>
                    </h3>
                    <span class="prie red">27.990.000đ</span>
                  </div>
                </div>
              </div>
              <div class="btn-bottom">
                <a class="buy btn" href="#">Giỏ hàng</a>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </header>
    <!--HEADER-->
    <header class="fs-header header-pc">
      <div class="f-hdtop">
        <div class="container f-wrap">
          <a class="fs-logo" href="/" title>
            <img src="../../assets/css/images/graphics/logo.svg" />
          </a>
          <div class="fs-search">
            <form action method="get" id="search" class="action-wrap search">
              <input
                class="fs-stxt onclick-togle search-input"
                type="text"
                name="q"
                placeholder="Tìm kiếm trên ThinkPro"
                autocomplete="off"
                maxlength="50"
              />
              <div class="suggest-search">
                <div class="suggest-product">
                  <h3 class="key">Laptop</h3>
                  <div class="items">
                    <a href="#" class="ava">
                      <img src="../../assets/css/images/graphics/sp1.jpg" />
                    </a>
                    <h3 class="name">
                      <a href="#">Dell XPS 13 7390 (2019)</a>
                    </h3>
                    <span class="prie">27.990.000đ</span>
                  </div>
                  <div class="items">
                    <a href="#" class="ava">
                      <img src="../../assets/css/images/graphics/sp2.jpg" />
                    </a>
                    <h3 class="name">
                      <a href="#">Dell XPS 13 7390 (2019)</a>
                    </h3>
                    <span class="prie">27.990.000đ</span>
                  </div>
                  <hr />
                  <h3 class="key">Phụ kiện</h3>
                  <div class="items">
                    <a href="#" class="ava">
                      <img src="../../assets/css/images/graphics/pk1.jpg" />
                    </a>
                    <h3 class="name">
                      <a href="#">Dell XPS 13 7390 (2019)</a>
                    </h3>
                    <span class="prie">27.990.000đ</span>
                  </div>
                  <div class="items">
                    <a href="#" class="ava">
                      <img src="../../assets/css/images/graphics/pk2.jpg" />
                    </a>
                    <h3 class="name">
                      <a href="#">Dell XPS 13 7390 (2019)</a>
                    </h3>
                    <span class="prie">27.990.000đ</span>
                  </div>
                </div>
              </div>

              <button type="submit" class="search-button">
                <svg class="icon-svg">
                  <use xlink:href="../../assets/images/icons/icon.svg#search" />
                </svg>
              </button>
            </form>
          </div>
          <ul class="fs-hdmn">
            <h3 class="lbl-title">Tin tức</h3>
            <li class="new">
              <a href="/tin-tuc" title>
                <svg class="icon-svg">
                  <use xlink:href="../../assets/images/icons/icon.svg#clipboard-notes1" />
                </svg>
                <span class="cart-count">2</span>
              </a>
              <div class="wrap-fill">
                <ul>
                  <li>
                    <div class="content">
                      <span class="tag">#Tuyendung</span>
                      <span class="time">1 phút</span>
                      <p>ThinkPro tuyển dụng nhiều vị trí</p>
                    </div>
                  </li>
                  <li>
                    <div class="content">
                      <span class="tag">#Khuyenmai</span>
                      <span class="time">1 phút</span>
                      <p>Thinhpro tưng bừng khuyến mãi chào mừng Khai trương cơ sở mới tại 31...</p>
                    </div>
                  </li>
                  <li class="active">
                    <div class="content">
                      <span class="tag">#Tuyendung</span>
                      <span class="time">1 phút</span>
                      <p>ThinkPro tuyển dụng nhiều vị trí</p>
                    </div>
                  </li>
                  <li>
                    <div class="content">
                      <span class="tag">#Khuyenmai</span>
                      <span class="time">1 phút</span>
                      <p>Thinhpro tưng bừng khuyến mãi chào mừng Khai trương cơ sở mới tại 31...</p>
                    </div>
                  </li>
                  <a class="view-all">
                    Xem tất cả cập nhật
                    <svg class="icon-svg">
                      <use xlink:href="../../assets/images/icons/icon.svg#arrow-right" />
                    </svg>
                  </a>
                </ul>
              </div>
            </li>

            <li class="notifi">
              <a href="/ffriends" title="ffriends">
                <svg class="icon-svg">
                  <use xlink:href="../../assets/images/icons/icon.svg#notifi" />
                </svg>
                <span class="cart-count">2</span>
              </a>
              <div class="wrap-fill">
                <ul>
                  <li>
                    <svg class="icon-svg">
                      <use xlink:href="../../assets/images/icons/icon.svg#location-pin-alt1" />
                    </svg>
                    <div class="content">
                      <span class="tag">#CapNhatDonHang</span>
                      <span class="time">1 phút</span>
                      <p>Đơn hàng đã đến tay bạn. Cảm ơn bạn đã mua hàng. Chúc bạn có trải nii...</p>
                    </div>
                  </li>
                  <li class="active">
                    <svg class="icon-svg">
                      <use xlink:href="../../assets/images/icons/icon.svg#truck1" />
                    </svg>
                    <div class="content">
                      <span class="tag">#CapNhatDonHang</span>
                      <span class="time">1 phút</span>
                      <p>Đơn hàng đã đến tay bạn. Cảm ơn bạn đã mua hàng. Chúc bạn có trải nii...</p>
                    </div>
                  </li>
                  <li>
                    <svg class="icon-svg">
                      <use xlink:href="../../assets/images/icons/icon.svg#envelope-star1" />
                    </svg>
                    <div class="content">
                      <span class="tag">#CapNhatDonHang</span>
                      <span class="time">1 phút</span>
                      <p>Đơn hàng đã đến tay bạn. Cảm ơn bạn đã mua hàng. Chúc bạn có trải nii...</p>
                    </div>
                  </li>
                  <li>
                    <svg class="icon-svg">
                      <use xlink:href="../../assets/images/icons/icon.svg#asterisk1" />
                    </svg>
                    <div class="content">
                      <span class="tag">#CapNhatDonHang</span>
                      <span class="time">1 phút</span>
                      <p>Đơn hàng đã đến tay bạn. Cảm ơn bạn đã mua hàng. Chúc bạn có trải nii...</p>
                    </div>
                  </li>
                  <li>
                    <svg class="icon-svg">
                      <use xlink:href="../../assets/images/icons/icon.svg#chat" />
                    </svg>
                    <div class="content">
                      <span class="tag">#CapNhatDonHang</span>
                      <span class="time">1 phút</span>
                      <p>Đơn hàng đã đến tay bạn. Cảm ơn bạn đã mua hàng. Chúc bạn có trải nii...</p>
                    </div>
                  </li>
                  <li>
                    <svg class="icon-svg">
                      <use xlink:href="../../assets/images/icons/icon.svg#gift1" />
                    </svg>
                    <div class="content">
                      <span class="tag">#CapNhatDonHang</span>
                      <span class="time">1 phút</span>
                      <p>Đơn hàng đã đến tay bạn. Cảm ơn bạn đã mua hàng. Chúc bạn có trải nii...</p>
                    </div>
                  </li>
                  <a class="view-all">
                    Xem tất cả thông báo
                    <svg class="icon-svg">
                      <use xlink:href="../../assets/images/icons/icon.svg#arrow-right" />
                    </svg>
                  </a>
                </ul>
              </div>
            </li>
            <li class="gio-hang">
              <a href="/gio-hang-v2" title>
                <svg class="icon-svg">
                  <use xlink:href="../../assets/images/icons/icon.svg#cart" />
                </svg>
                <span class="cart-count">2</span>
              </a>
              <div class="wrap-fill">
                <ul>
                  <div class="note center" style="display: none">
                    <strong>
                      Bạn chưa có sản phẩm nào trong
                      giỏ hàng
                    </strong>
                  </div>
                  <div class="note">
                    <strong>2 sản phẩm</strong> trong giỏ hàng
                  </div>
                  <div class="list">
                    <div class="items">
                      <div class="ava">
                        <a href="#">
                          <img src="../../assets/css/images/graphics/sp1.png" />
                        </a>
                      </div>
                      <div class="content">
                        <h3>
                          <a href="#">Razer Blade 15" 2019</a>
                        </h3>
                        <span class="prie">27.990.000đ</span>
                      </div>
                    </div>
                    <div class="items">
                      <div class="ava">
                        <a href="#">
                          <img src="../../assets/css/images/graphics/sp1.png" />
                        </a>
                      </div>
                      <div class="content">
                        <h3>
                          <a href="#">Razer Blade 15" 2019</a>
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div class="btn-bottom">
                    <strong>Giỏ hàng:</strong>
                    <strong>24.000.000 đ</strong>
                  </div>
                </ul>
              </div>
            </li>
            <li class="user">
              <a href="/gio-hang-v2" title>
                <svg class="icon-svg">
                  <use xlink:href="../../assets/images/icons/icon.svg#user" />
                </svg>
              </a>
              <div class="wrap-fill">
                <ul>
                  <li>
                    <h3>
                      <a href>
                        <i class="iconfont-user"></i>Tài khoản
                      </a>
                    </h3>
                  </li>
                  <li>
                    <h3>
                      <a href>
                        <i class="iconfont-notes1"></i>Quản lý đơn hàng
                      </a>
                    </h3>
                  </li>
                  <li>
                    <h3>
                      <a href>
                        <i class="iconfont-history1"></i>Lịch sử mua hàng
                      </a>
                    </h3>
                  </li>
                  <li>
                    <h3>
                      <a href>
                        <i class="iconfont-shield-check1"></i>Kiểm tra bảo hành
                      </a>
                    </h3>
                  </li>
                  <li>
                    <h3>
                      <a href>
                        <i class="iconfont-exit1"></i>Thoát
                      </a>
                    </h3>
                  </li>
                  <li class="before-login">
                    <h3>
                      <a class="login" href>
                        <i class="iconfont-login"></i>Đăng nhập
                      </a>
                      <a href>Đăng ký</a>
                    </h3>
                  </li>
                </ul>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
    <!--END HEADER-->
  </div>
</template>

<script>
import $ from "jquery";
export default {
  name: "Header",
  mounted() {
    $('form.search input[name="keyword"], form.search input[name="q"]').on(
      "keyup",
      e => {
        let query = $(e.currentTarget).val();
        if (query.length) {
          $(e.currentTarget)
            .parents("form")
            .addClass("active");
          return;
        } else {
          $(e.currentTarget)
            .parents("form")
            .removeClass("active");
          return;
        }
      }
    );
  }
};
</script>

<style>
</style>