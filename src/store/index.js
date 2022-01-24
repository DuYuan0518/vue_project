import { createStore } from 'vuex';

export default createStore({
  state: {
    cartList: [], //购物车列表数据
    orderList: [], //生成订单列表数据
    edit: true, //编辑的状态
  },
  mutations: {
    ADDCART(state, value) {
      state.cartList = value;
    },
    PAY(state, value) {
      state.orderList = value;
    },
    DELETE(state, value) {
      state.cartList = value;
    },
    EDIT(state, value) {
      if (value === 'delete') {
        state.edit = true;
      } else {
        state.edit = !state.edit;
      }
    },
  },
  actions: {},
});
