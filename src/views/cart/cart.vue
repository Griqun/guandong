<template>
  <div>
    <van-nav-bar
      title="标题"
      left-text="返回"
      left-arrow
      @click-left="$router.back(-1)"
    />
    <div v-if="empty">
      购物车是空的~
    </div>
    <van-card
      v-else
      :num="item.num"
      :price="item.price"
      :title="item.title"
      :thumb="item.cover"
      v-for="(item,index) in lists" :key="index"
    />
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'cart',
  data() {
    return {
      lists: [],
      empty: true,
    };
  },
  computed: {
    ...mapState({
      cartLists: state => state.cart.cartLists,
    }),
  },
  mounted() {
    this.lists = this.cartLists;
  },
  watch: {
    lists(e) {
      this.empty = e.length <= 0;
    },
  },

};
</script>

<style scoped>

</style>
