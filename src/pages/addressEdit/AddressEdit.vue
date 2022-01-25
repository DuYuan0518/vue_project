<template>
  <Header title="地址编辑" />
  <van-address-edit
    :area-list="areaList"
    show-delete
    show-set-default
    :area-columns-placeholder="['请选择', '请选择', '请选择']"
    @save="onSave"
    @delete="onDelete"
  />
</template>

<script>
import { reactive, toRefs } from "@vue/reactivity";
import Header from "../../components/Header.vue";

export default {
  components: { Header },
  setup() {
    let data = reactive({
      areaList: {
        province_list: {
          110000: "广东省",
          120000: "浙江省",
        },
        city_list: {
          110100: "广州市",
          110200: "深圳市",
          120100: "杭州市",
          120200: "宁波市",
        },
        county_list: {
          110101: "天河区",
          110102: "海珠区",
          120102: "上城区",
          130102: "下城区",
        },
      },
    });

    //保存的按钮
    const onSave = () => {};

    //删除的按钮
    const onDelete = () => {};

    return {
      ...toRefs(data),
      onSave,
      onDelete,
    };
  },
};
</script>

<style lang='less' scoped>
/deep/ .van-button--danger {
  background-color: #ffc400;
  border-color: #ffc400;
}
/deep/ .van-switch--on {
  background-color: #ffc400;
}
</style>