<template>
  <div>
    <van-nav-bar
      title="标题"
      left-text="返回"
      left-arrow
      @click-left="$router.back(-1)"
    />
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item,index) in images" :key="index">
        <img :src="item" alt="">
      </van-swipe-item>
    </van-swipe>

    <van-goods-action>
      <van-goods-action-icon icon="chat-o" text="客服" dot/>
      <van-goods-action-icon icon="cart-o" text="购物车" badge="5" @click="toCart"/>
      <van-goods-action-icon icon="shop-o" text="店铺" badge="12"/>
      <van-goods-action-button type="warning" text="加入购物车" @click="addCart()"
                               :disabled="ableDisabled"/>
      <van-goods-action-button type="danger" text="立即购买"/>
    </van-goods-action>
  </div>
</template>

<script>
import mock from '../../../mock/index';

export default {
  name: 'goods',
  data() {
    return {
      images: [],
      detail: {},
      ableDisabled: false,
    };
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

