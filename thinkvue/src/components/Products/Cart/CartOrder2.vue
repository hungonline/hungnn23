<template>
  <div class="page-cart__wrap">
    <div class="col-left">
      <ul class="list-cart">
        <li v-for="n in 2" :key="n">
          <div class="ava">
            <a href>
              <img src="../../../assets/images/graphics/sp1.jpg" />
            </a>
          </div>
          <div class="content">
            <h3 class="title">
              <a href="#">Dell G5 15 5590 hàng xịn xò</a>
            </h3>
            <p>Dell G5 15 5590 i7-9750H</p>
            <div class="price price_mobile">
              <strong class="new">19.990.000đ</strong>
            </div>
            <div class="option">
              <a href="#">Xóa</a>
              <a href="#">Để dành mua sau</a>
            </div>
          </div>
          <div class="number-price">
            <div class="number dropdown">
              <div class="dropbtn">
                <a href="javascript:;">
                  3
                  <svg class="icon-svg">
                    <use xlink:href="../../../assets/images/icons/icon.svg#arrow-right" />
                  </svg>
                </a>
              </div>
              <ul class="dropdown__content" style="display: none">
                <li>
                  <a href="javascript:;">1</a>
                </li>
                <li>
                  <a href="javascript:;">2</a>
                </li>
              </ul>
            </div>
            <div class="option option_mobile">
              <a href="#">Xóa</a>
              <a href="#">Để dành mua sau</a>
            </div>
            <div class="price">
              <strong class="new">19.990.000đ</strong>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="col-right">
      <div class="checkout_sidebar">
        <div class="head flex space-between">
          <div>
            <strong>Tạm tính:</strong>
          </div>
          <div class="txt_16">39.980.000đ</div>
        </div>
        <ul class="checkout_tt">
          <li class="mb24">
            <div>
              <strong>Thành tiền</strong>
            </div>
            <div class="txt_18 red">
              <strong>39.980.000đ</strong>
            </div>
          </li>
          <div class="page-cart__bottom mobile">
            <input type="email" id="inputEmail" class="form-control" placeholder="Mã giảm giá..." />
            <a class="btn-default white" href="#">Áp dụng</a>
          </div>
          <a class="btn-default full color-white mb16" href="#">Tiến hành đặt hàng</a>
          <a class="btn-default full white mb16" href="#">Tính trả góp</a>
        </ul>
      </div>
    </div>
    <div class="page-cart__bottom">
      <input type="email" id="inputEmail" class="form-control" placeholder="Mã giảm giá..." />
      <a class="btn-default white" href="#">Áp dụng</a>
    </div>
  </div>
</template>
<script>
export default {
  name: "CartOrder2"
};
</script>

<style>
</style>