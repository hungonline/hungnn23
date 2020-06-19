<template>
  <div class="account-information__left">
    <ul class="menu__nav sticky" style="top: 80px;">
      <li class="active">
        <a href="javascript:">
          <svg class="icon-svg">
            <use xlink:href="../../assets/images/icons/icon.svg#user" />
          </svg>
          Tải khoản
        </a>
      </li>
      <li>
        <a href="javascript:">
          <svg class="icon-svg">
            <use xlink:href="../../assets/images/icons/icon.svg#heart1" />
          </svg>
          Sản phẩm ưa thích
        </a>
      </li>
      <li>
        <a href="javascript:">
          <svg class="icon-svg">
            <use xlink:href="../../assets/images/icons/icon.svg#history1" />
          </svg>
          Lịch sử mua hàng
        </a>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "UserLeft"
};
</script>

<style>
</style>