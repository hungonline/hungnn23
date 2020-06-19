

<template>
  <div>
    <div class="back_step sticky">
      <a class="back" href="#">
        <svg class="icon-svg">
          <use xlink:href="../assets/images/icons/icon.svg#arrow-left" />
        </svg>
      </a>
      <h1 class="title_cate">
        <span>Thông tin tài khoản</span>
      </h1>
    </div>
    <Breadcrumb />
    <section class="container clearfix">
      <div class="account-information flex">
        <UserLeft />
        <UserRight />
      </div>
      <ListNotifi />
    </section>
  </div>
</template>


<script>
import Breadcrumb from "@/views/layout/Breadcrumb.vue";
import UserLeft from "@/components/User/UserLeft.vue";
import UserRight from "@/components/User/UserRight.vue";
export default {
  name: "PageUser",
  components: {
    Breadcrumb,
    UserLeft,
    UserRight
  }
};
</script>
<style>
@import "../assets/css/user.css";
</style>