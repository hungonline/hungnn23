

<template>
  <div>
    <Breadcrumb />
    <section class="container clearfix">
      <h1 class="title_cate">
        <span>Tính trả góp</span>
      </h1>
      <TraGop />
    </section>
  </div>
</template>


<script>
import Breadcrumb from "@/views/layout/Breadcrumb.vue";
import TraGop from "@/components/Products/Cart/TraGop.vue";
export default {
  name: "ProductTraGop",
  components: {
    Breadcrumb,
    TraGop
  }
};
</script>
<style>
@import "../assets/css/user.css";
</style>