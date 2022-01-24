<template>
  <div class="create_order">
    <Header title="生成订单" />
    <van-contact-card
      type="edit"
      :name="currentContact.name"
      :tel="currentContact.tel"
      @click="onEdit"
    />
    <div class="content">
      <div v-for="i in store.state.orderList">
        <van-card
          :num="i.num"
          :price="i.price"
          :title="i.title"
          :thumb="i.pic"
        />
      </div>
    </div>
    <div class="pay-wrap">
      <div class="price">
        <span>商品金额</span>
        <span>￥{{ allPrice }}</span>
      </div>
      <van-button
        class="pay-btn"
        type="primary"
        @click="handleCreateOrder"
        color="#ffc400"
        block
      >
        生成订单
      </van-button>
    </div>
  </div>
</template>

<script>
import Header from "../../components/Header.vue";
import { toRefs, reactive, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Header,
  },
  setup() {
    const store = useStore();
    let data = reactive({
      currentContact: {
        name: "大钊",
        tel: "12345678911",
      },
      allPrice: 0,
    });

    const initPrice = () => {
      let price = 0;
      if (store.state.orderList.length) {
        store.state.orderList.forEach((item) => {
          price += item.num * item.price;
        });
        data.allPrice = price;
      }
    };
    onMounted(() => {
      initPrice();
    });

    //地址编辑按钮
    const onEdit = () => {};

    // 生成订单按钮
    const handleCreateOrder = () => {};
    return {
      ...toRefs(data),
      onEdit,
      store,
      handleCreateOrder,
    };
  },
};
</script>

<style lang='less' scoped>
.create_order {
  display: flex;
  flex-flow: column;
  height: 100%;
  .content {
    flex: 1;
    overflow-y: auto;
  }
  .pay-wrap {
    padding: 10px 0;
    width: 100%;
    background: #fff;
    border-top: 1px solid #e9e9e9;
    > div {
      display: flex;
      justify-content: space-between;
      padding: 0 5%;
      margin: 10px 0;
      font-size: 14px;
      span:nth-child(2) {
        color: red;
        font-size: 18px;
      }
    }
    .pay-btn {
      width: 90%;
      margin: 0 auto;
    }
  }
}
</style>