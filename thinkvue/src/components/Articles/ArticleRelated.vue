<template>
  <div class="list-article article_other mb56">
    <h2 class="title_cate">
      <span>Bài viết liên quan</span>
    </h2>
    <div class="gird gird_2">
      <article class="art_item" v-for="n in 2" :key="n">
        <div class="ava">
          <a href="#" title="#" class="thumb_img thumb_5x2">
            <img src="../../assets/images/graphics/thumb2.jpg" />
          </a>
        </div>
        <div class="content">
          <div class="flex tag">
            <a href="#" class="folder">Công nghệ</a>
            <span>
              By
              <a href="#" class="color-main">Long Tran</a> | Hôm nay lúc
              8:57am
            </span>
          </div>
          <h3 class="title_news">
            <a href="#" title="#">
              Xiaomi ra mắt máy tính để bàn all-in-one: Chip Intel thế
              hệ 9, màn hình 24
              inch, giá từ 10.6 triệu đồng
            </a>
          </h3>
          <div class="description">
            Máy tính để bàn all-in-one Ningmei CR600 mới của Xiaomi có thiết kế đẹp mắt, cấu
            hình phần cứng
            mạnh
            mẽ nhưng đi kèm mức giá khá là phải chăng.
          </div>
        </div>
      </article>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>