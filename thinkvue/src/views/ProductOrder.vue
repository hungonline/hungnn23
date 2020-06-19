<template>
  <div class="page-cart">
    <Breadcrumb />
    <section class="container clearfix">
      <h1 class="title_cate">
        <span>Đặt hàng</span>
      </h1>
      <CartOrder />
    </section>
  </div>
</template>

<script>
import Breadcrumb from "@/views/layout/Breadcrumb.vue";
import CartOrder from "@/components/Products/Cart/CartOrder.vue";
export default {
  name: "ProductOrder",
  components: {
    Breadcrumb,
    CartOrder
  }
};
</script>
<style>
@import "../assets/css/cart.css";
</style>