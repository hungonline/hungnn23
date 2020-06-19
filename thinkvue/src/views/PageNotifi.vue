

<template>
  <div>
    <Breadcrumb />
    <section class="container clearfix">
      <div class="min-container notifi-user">
        <div class="head flex space-between">
          <h1 class="title_cate">
            <span>Thông báo của tôi</span>
          </h1>
          <div class="option">
            <a href="#">Đánh dấu đã đọc tất cả</a>
            <a href="#">Xóa tất cả</a>
          </div>
        </div>
        <ListNotifi />
        <div id="pagination" class="center">
          <ul class="pagination">
            <li class="page-item">
              <a class="page-link prev" href="#"></a>
            </li>
            <li class="page-item">
              <a class="page-link active" href="#">1</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">2</a>
            </li>
            <li class="page-item">
              <a class="page-link" href="#">3</a>
            </li>
            <li class="page-item">
              <a class="page-link next" href="#"></a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>


<script>
import Breadcrumb from "@/views/layout/Breadcrumb.vue";
import ListNotifi from "@/components/User/ListNotifi.vue";
export default {
  name: "PageNotifi",
  components: {
    Breadcrumb,
    ListNotifi
  }
};
</script>