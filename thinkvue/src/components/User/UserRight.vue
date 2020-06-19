<template>
  <div class="account-information__right">
    <!-- Thông tin tài khoản  -->
    <div class="items_dropdown mb40">
      <h2 class="title_cate active">
        <span>Thông tin tài khoản</span>
        <svg class="icon-svg">
          <use xlink:href="../../assets/images/icons/icon.svg#arrow-left" />
        </svg>
      </h2>
      <div class="border-warp padding_24">
        <div class="form-default min-width">
          <div class="row">
            <div class="col-md-6 form-group">
              <div class="choose-ava">
                <div class="ava">
                  <img src="../../assets/images/graphics/Avatar.png" alt />
                </div>
                <label class="choose">
                  <input type="file" name="myFile" />
                  <span>Thay ảnh đại diện</span>
                </label>
              </div>
            </div>
            <div class="col-md-6 form-group">
              <label class="block">Số điện thoại</label>
              <div class="input-wrap">
                <input type="text" id class="form-control" value="0136587995" disabled />
              </div>
            </div>
            <div class="col-md-6 form-group">
              <label class="block">Họ và tên</label>
              <div class="input-wrap">
                <input type="text" id class="form-control" value="Nguyễn Như Hùng" />
              </div>
            </div>
            <div class="col-md-6 form-group">
              <label class="block">Họ và tên</label>
              <div class="input-wrap">
                <input
                  type="email"
                  id
                  class="form-control"
                  placeholder="Nhận email để nhận thông tin khuyến mãi"
                />
              </div>
            </div>
          </div>
          <div class="mt30">
            <a class="btn-default color-white" href="#">Cập nhật</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Hạng thành viên -->
    <div class="items_dropdown mb40">
      <h2 class="title_cate">
        <span>Hạng thành viên</span>
        <svg class="icon-svg">
          <use xlink:href="../../assets/images/icons/icon.svg#arrow-left" />
        </svg>
      </h2>
      <div class="border-warp padding_24">
        Bạn đang là
        <strong class="medium">Thành viên Thân Thiết</strong> của ThinkPro
        <a class="color-main medium txt_16 ml_16" href="#">Xem ưu đãi</a>
      </div>
    </div>
    <!-- Địa chỉ giao hàng -->
    <div class="items_dropdown mb40">
      <h2 class="title_cate">
        <span>Địa chỉ giao hàng</span>
        <svg class="icon-svg">
          <use xlink:href="../../assets/images/icons/icon.svg#arrow-left" />
        </svg>
      </h2>
      <div class="border-warp padding_24">
        <div class="form-default min-width">
          <div class="mb8">
            <div class="txt_16 flex space-between">
              <label class="block medium">Địa chỉ 1</label>
              <label class="check-list">
                <span class="text">Đặt làm mặc định</span>
                <input type="checkbox" checked />
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="row">
              <div class="col-md-6 form-group">
                <div class="input-wrap">
                  <select class="form-control">
                    <option>Tỉnh/ Thành phố</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6 form-group">
                <div class="input-wrap">
                  <select class="form-control">
                    <option>Quận/ Huyện</option>
                  </select>
                </div>
              </div>
              <div class="col-md-12 form-group">
                <div class="input-wrap">
                  <input
                    type="email"
                    id="inputEmail"
                    class="form-control"
                    placeholder="Số nhà, tên đường, phường xã"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="mb8">
            <div class="txt_16 flex space-between">
              <label class="block medium">Địa chỉ 2</label>
              <label class="check-list">
                <span class="text">Đặt làm mặc định</span>
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
            <div class="row">
              <div class="col-md-6 form-group">
                <div class="input-wrap">
                  <select class="form-control">
                    <option>Tỉnh/ Thành phố</option>
                  </select>
                </div>
              </div>
              <div class="col-md-6 form-group">
                <div class="input-wrap">
                  <select class="form-control">
                    <option>Quận/ Huyện</option>
                  </select>
                </div>
              </div>
              <div class="col-md-12 form-group">
                <div class="input-wrap">
                  <input
                    type="email"
                    id="inputEmail"
                    class="form-control"
                    placeholder="Số nhà, tên đường, phường xã"
                  />
                </div>
              </div>
            </div>
          </div>
          <a class="color-main medium">+ Thêm địa chỉ</a>
          <div class="mt24">
            <a class="btn-default color-white" href="#">Cập nhật</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Thay đổi mật khẩu -->
    <div class="items_dropdown mb40">
      <h2 class="title_cate">
        <span>Thay đổi mật khẩu</span>
        <svg class="icon-svg">
          <use xlink:href="../../assets/images/icons/icon.svg#arrow-left" />
        </svg>
      </h2>
      <div class="border-warp padding_24">
        <div class="form-default min-width">
          <div class="row mb30">
            <div class="col-md-6 form-group">
              <label class="block">Nhập mật khẩu hiện tại</label>
              <div class="input-wrap">
                <input type="password" id class="form-control" placeholder="Nhập mật khẩu hiện tại" />
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 form-group">
              <label class="block">Mật khẩu mới</label>
              <div class="input-wrap">
                <input
                  type="password"
                  id
                  class="form-control"
                  placeholder="Nhập mật khẩu có ít nhất 8 ký tự"
                />
              </div>
            </div>
            <div class="col-md-6 form-group">
              <label class="block">Nhập lại mật khẩu mới</label>
              <div class="input-wrap">
                <input
                  type="password"
                  id
                  class="form-control"
                  placeholder="Nhập mật khẩu có ít nhất 8 ký tự"
                />
              </div>
            </div>
          </div>
          <div class="mt30">
            <a class="btn-default color-white" href="#">Cập nhật</a>
          </div>
        </div>
      </div>
    </div>
    <!-- Cài đặt thông báo -->
    <div class="items_dropdown mb40">
      <h2 class="title_cate">
        <span>Cài đặt nhận thông báo</span>
        <svg class="icon-svg">
          <use xlink:href="../../assets/images/icons/icon.svg#arrow-left" />
        </svg>
      </h2>
      <div class="border-warp padding_24">
        <div class="setting-notifi flex">
          <div class="items">
            <span class="icon">
              <img src="../../assets/images/icons/zalo.svg" alt />
            </span>
            Nhận thông báo từ
            <strong class="medium">Zalo</strong>
            <a class="toggle active" href="javascript:;"></a>
          </div>
          <div class="items">
            <span class="icon">
              <img src="../../assets/images/icons/telegram.svg" alt />
            </span>
            Nhận thông báo từ
            <strong class="medium">Telegram</strong>
            <a class="toggle" href="javascript:;"></a>
          </div>
          <div class="items">
            <span class="icon">
              <img src="../../assets/images/icons/call.svg" alt />
            </span>
            Nhận thông báo từ
            <strong class="medium">Viber</strong>
            <a class="toggle active" href="javascript:;"></a>
          </div>
          <div class="items">
            <span class="icon">
              <img src="../../assets/images/icons/whatsapp.svg" alt />
            </span>
            Nhận thông báo từ
            <strong class="medium">What's App</strong>
            <a class="toggle active" href="javascript:;"></a>
          </div>
          <div class="items">
            <span class="icon">
              <img src="../../assets/images/icons/sms.svg" alt />
            </span>
            Nhận thông báo từ
            <strong class="medium">SMS</strong>
            <a class="toggle active" href="javascript:;"></a>
          </div>
        </div>
      </div>
    </div>
    <!-- Sản phẩm ưa thích -->
    <h2 class="title_cate hidden-sm">
      <span>Sản phẩm ưa thích</span>
    </h2>
    <ProductListLike />
    <Pagination />
    <!-- Lịch sử mua hàng -->
    <HistoryOrder />
  </div>
</template>

<script>
import $ from "jquery";
import ProductListLike from "@/components/Products/Category/ProductListLike.vue";
import HistoryOrder from "@/components/Products/HistoryOrder.vue";
import Pagination from "@/components/Pagination.vue";
export default {
  name: "UserRight",
  components: {
    ProductListLike,
    HistoryOrder,
    Pagination
  },
  mounted() {
    $(".toggle").click(function() {
      if ($(this).hasClass("active")) {
        $(this).removeClass("active");
      } else {
        $(this).addClass("active");
      }
    });
    $("body").addClass("page-step");
  }
};
</script>

