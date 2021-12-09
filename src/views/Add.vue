<template>
  <div class="app-container">
    <div class="header">
      <el-steps :active="step" align-center>
        <el-step title="填写商品基本信息"></el-step>
        <el-step title="填写商品销售信息"></el-step>
      </el-steps>
    </div>

    <div class="content">
      <basic-info
        :basicForm="basicForm"
        msg="add"
        @next="next"
        v-show="step === 0"
      ></basic-info>
      <sale-info 
      :saleForm="saleForm" 
      msg="add" 
      v-show="step === 1"
      @prev='prev'></sale-info>
    </div>
  </div>
</template>

<script>
import BasicInfo from "../components/BasicInfo.vue";
import SaleInfo from "../components/SaleInfo.vue";
export default {
  components: { BasicInfo, SaleInfo },
  data() {
    return {
      saleForm: {
        price: 0,
        price_off: 0,
        unit: "",
        inventory: 0,
        images: [],
      },
      basicForm: {
        title: "",
        desc: "",
        category: "",
        c_items: [],
        tags: [],
      },
      step: 0,
    };
  },
  methods: {
    next(data) {
      this.copyBasicInfo(data);
      this.step = 1;
    },
    prev() {
      this.step = 0;
    },
    copyBasicInfo(data) {
      this.basicForm.title = data.title;
      this.basicForm.desc = data.desc;
      this.basicForm.category = data.category;
      this.basicForm.c_items = [...data.c_items];
      this.basicForm.tags = [...data.tags];
    },
  },
};
</script>

<style scoped>
.app-container {
  height: 100%;
}
.header {
  height: 50px;
  border-bottom: 1px dashed #ccc;
  padding-bottom: 30px;
}
.content {
  height: calc(100% - 81px);
  background-color: #eee;
}
</style>