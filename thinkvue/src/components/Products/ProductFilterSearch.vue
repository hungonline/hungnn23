<template>
  <div class="flex result_box">
    <h1 class="title_cate">
      <span>741 kết quả</span>
    </h1>
    <div class="wrap">
      <div class="tr">
        <div class="txt_16 medium">Hiển thị:</div>
        <label class="check-list cricle">
          <span class="text">Tất cả kết quả liên quan</span>
          <input type="checkbox" checked />
          <span class="checkmark"></span>
        </label>
        <label class="check-list cricle">
          <span class="text">Chính xác từ khóa</span>
          <input type="checkbox" />
          <span class="checkmark"></span>
        </label>
      </div>
      <div class="tr">
        <div class="txt_16 medium">Khác:</div>
        <label class="result_key">
          <strong>dell</strong> xps
        </label>
        <label class="result_key">
          <strong>dell</strong> inspiron
        </label>
        <label class="result_key">
          <strong>dell</strong> laptop
        </label>
        <label class="result_key">
          <strong>dell</strong> accessories
        </label>
        <label class="result_key">
          <strong>dell</strong> xps
        </label>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductFilterSearch"
};
</script>

<style>
</style>