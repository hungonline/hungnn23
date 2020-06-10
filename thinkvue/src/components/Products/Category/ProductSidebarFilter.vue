<template>
  <div class="col_left">
    <div class="sort-mobile">
      <strong>Sắp xếp theo:</strong>
      <select id="resizing_select">
        <option>Giá thấp</option>
        <option>Giá cao</option>
        <option>Hàng mới</option>
        <option>Bán chạy</option>
        <option>Chọn lọc</option>
      </select>
      <select id="width_tmp_select">
        <option id="width_tmp_option"></option>
      </select>
      <div class="fillter">
        <svg class="icon-svg">
          <use xlink:href="../../../assets/images/icons/icon.svg#filter1" />
        </svg>
        Lọc
        <span>(1)</span>
      </div>
      <a class="btn-default apply" href="#">Áp dụng</a>
    </div>
    <div class="txt_16 tong_sp">
      <strong>1- 30</strong> trên 300 sản phẩm
    </div>
    <div class="catalogue-wrap sticky">
        <div class="scrollbar-inner">
          <div class="catalogue catalogue_final">
            <h3>Bộ lọc được áp dụng</h3>
            <a class="cancel" href="#">Bỏ lọc</a>
            <ul>
              <li>
                Apple (12)
                <a class="iconfont-close"></a>
              </li>
              <li>
                Tiết kiệm điện
                <a class="iconfont-close"></a>
              </li>
              <li>
                Intel HD Graphics
                <a class="iconfont-close"></a>
              </li>
            </ul>
          </div>
          <div class="catalogue">
            <h3 class="active">Thương hiệu</h3>
            <div class="show catalogue__list">
              <label class="check-list">
                <span class="text">Apple (12)</span>
                <input type="checkbox" checked />
                <span class="checkmark"></span>
              </label>
              <label class="check-list">
                <span class="text">Acer (9)</span>
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label class="check-list">
                <span class="text">Asus (10)</span>
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label class="check-list">
                <span class="text">Dell (12)</span>
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label class="check-list">
                <span class="text">HP (8)</span>
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label class="check-list">
                <span class="text">Lenovo (7)</span>
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <a class="view-more">Xem thêm thương hiệu</a>
            </div>
          </div>
          <div class="catalogue">
            <h3>Khoảng giá</h3>
            <div class="catalogue__list">
              <label class="check-list">
                <span class="text">50 triệu</span>
                <input type="checkbox" checked />
                <span class="checkmark"></span>
              </label>
              <label class="check-list">
                <span class="text">30 triệu</span>
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label class="check-list">
                <span class="text">20 triệu</span>
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
              <label class="check-list">
                <span class="text">15 triệu</span>
                <input type="checkbox" />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div class="catalogue">
            <h3>Tình trạng máy</h3>
            <div class="catalogue__list">
              <label class="check-list">
                <span class="text">50 triệu</span>
                <input type="checkbox" checked />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div class="catalogue">
            <h3>GPU</h3>
            <div class="catalogue__list">
              <label class="check-list">
                <span class="text">50 triệu</span>
                <input type="checkbox" checked />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div class="catalogue">
            <h3>RAM</h3>
            <div class="catalogue__list">
              <label class="check-list">
                <span class="text">50 triệu</span>
                <input type="checkbox" checked />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div class="catalogue">
            <h3>Kích thước màn hình</h3>
            <div class="catalogue__list">
              <label class="check-list">
                <span class="text">50 triệu</span>
                <input type="checkbox" checked />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div class="catalogue">
            <h3>Độ phân giải màn hình</h3>
            <div class="catalogue__list">
              <label class="check-list">
                <span class="text">50 triệu</span>
                <input type="checkbox" checked />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div class="catalogue">
            <h3>Công nghệ màn hình</h3>
            <div class="catalogue__list">
              <label class="check-list">
                <span class="text">50 triệu</span>
                <input type="checkbox" checked />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div class="catalogue">
            <h3>Tần số quét</h3>
            <div class="catalogue__list">
              <label class="check-list">
                <span class="text">50 triệu</span>
                <input type="checkbox" checked />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div class="catalogue">
            <h3>Cân nặng</h3>
            <div class="catalogue__list">
              <label class="check-list">
                <span class="text">50 triệu</span>
                <input type="checkbox" checked />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>
          <div class="catalogue">
            <h3>Khả năng nâng cấp</h3>
            <div class="catalogue__list">
              <label class="check-list">
                <span class="text">50 triệu</span>
                <input type="checkbox" checked />
                <span class="checkmark"></span>
              </label>
            </div>
          </div>        
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProductSideberFilter"
};
</script>

<style>
</style>