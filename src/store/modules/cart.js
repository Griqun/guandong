const state = {
  cartLists: [],
};
const actions = {
  addToCart: ({ state }, item) => {
    if (state.cartLists.length === 0) { // 如果购物车为空
      item.num = 1; // 默认为1个
      state.cartLists.push(item);// 直接陈商品push到购物车里
    } else {
      let s = 0;
      // 相当于一个标识,判断加入商品的数量标识
      // 当购物车不为空时，已经有添加胡商品存在的情况下，需要遍历购物车的商品
      state.cartLists.forEach((goods) => {
        // 判断点击加入购物车的商品是否存在购物车中
        if (goods.id === item.id) {
          item.num++; // 如果存在，就原基础上num++
          s++; // 次数就++
        }
      });
      if (s === 0) {
        item.num = 1;
        // 直接商品push到购物车
        state.cartLists.push(item);
      }
    }

    console.log(state.cartLists);
  },
};
const mutations = {};

export default {
  state,
  actions,
  mutations,
};
