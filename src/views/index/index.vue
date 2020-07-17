<template>
  <div>
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in images" :key="index">
        <img :src="item.src" alt="">
      </van-swipe-item>
    </van-swipe>
    <van-card
      num="2"
      :price="item.price"
      :title="item.title"
      :thumb="item.cover"
      v-for="(item,index) in lists" :key="index"
      @click="toGoods(index)"
    />
<!--addToCart(item)-->
  </div>
</template>

<script>
import mock from '../../../mock/index';

export default {
  name: 'index',
  data() {
    return {
      images: mock.carouselList,
      lists: mock.goodsLists,
      cartLists: [],
    };
  },
  methods: {
    toGoods(id) {
      this.$router.push({ path: `/goods/detail/${id}` });
    },
    addToCart(item) {

      console.log(item.id);
      // 当购物为空时
      if (this.cartLists.length === 0) {
        item.num = 1;
        // 直接把商品push购物车里
        this.cartLists.push(item);
      } else {
        // 当购物车不为空时
        let s = 0;
        // 遍历购物中的商品
        this.cartLists.forEach((goods) => {
          // 判断购物点击加入的商品是存在购物中
          if (goods.id === item.id) {
            // 商品在购物车中的数量加1
            item.num++;
            // 用于判断点击加入购物的商品已经存在购物车中
            s++;
          }
        });

        // 如果sum值没有变化，说明点击的商品并没有存在购物车中，直接将该商品push到购物列表里
        if (s === 0) {
          item.num = 1;
          this.cartLists.push(item);
        }
      }

      console.log(this.cartLists);
    },
  },
};
</script>

<style scoped lang="scss">
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;

  img {
    width: 100%;
  }
}
</style>
