

<template>
  <div>
    <Breadcrumb />
    <section class="container clearfix">
      <div class="account-information flex"></div>
      <ListNotifi />
    </section>
  </div>
</template>


<script>
import Breadcrumb from "@/views/layout/Breadcrumb.vue";
import ListNotifi from "@/components/User/ListNotifi.vue";
export default {
  name: "PageUser",
  components: {
    Breadcrumb,
    ListNotifi
  }
};
</script>
<style>
@import "../assets/css/user.css";
</style>