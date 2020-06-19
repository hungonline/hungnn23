<template>
  <div class="page-cart">
    <Breadcrumb />
    <section class="container clearfix">
      <h1 class="title_cate">
        <span>Giỏ hàng (2)</span>
      </h1>
      <CartOrder2 />
      <div class="mb56 clearfix">
        <h2 class="title_cate">
          <span>Thường được mua cùng</span>
        </h2>
        <ProductList2 />
      </div>
    </section>
  </div>
</template>

<script>
import Breadcrumb from "@/views/layout/Breadcrumb.vue";
import CartOrder2 from "@/components/Products/Cart/CartOrder2.vue";
import ProductList2 from "@/components/Products/Category/ProductList2.vue";
export default {
  name: "ProductCart",
  components: {
    Breadcrumb,
    CartOrder2,
    ProductList2
  }
};
</script>
<style>
@import "../assets/css/cart.css";
</style>