<template>
  <div class="page-cart">
    <Breadcrumb />
    <section class="container clearfix">
      <h1 class="title_cate">
        <span>Giỏ hàng (0)</span>
      </h1>
      <div class="cart-null">
        <div class="icon">
          <svg class="icon-svg">
            <use xlink:href="../assets/images/icons/icon.svg#cart2" />
          </svg>
        </div>
        <p class="mb24">Bạn chưa có sản phẩm nào trong giỏ hàng</p>
        <a class="btn-default color-white" href="#">Tiếp tục mua sắm</a>
      </div>
      <div class="cart-null">
        <div class="icon">
          <svg class="icon-svg">
            <use xlink:href="../assets/images/icons/icon.svg#user" />
          </svg>
        </div>
        <p class="mb24">Bạn chưa đăng nhập, đăng nhập để xem giỏ hàng</p>
        <a class="btn-default color-white" href="#">Đăng nhập</a>
      </div>
      <div class="mb56 clearfix">
        <h2 class="title_cate">
          <span>Sản phẩm bạn ưa thích</span>
        </h2>
        <ProductList3 />
      </div>
    </section>
  </div>
</template>

<script>
import Breadcrumb from "@/views/layout/Breadcrumb.vue";
import ProductList3 from "@/components/Products/Category/ProductList3.vue";
export default {
  name: "ProductCartNull",
  components: {
    Breadcrumb,
    ProductList3
  }
};
</script>
<style>
@import "../assets/css/cart.css";
</style>