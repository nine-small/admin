<template>
  <div class="app-container">
    <el-form
      :model="form"
      ref="form"
      :rules="rules"
      label-width="100px"
      class="demo-form"
    >
      <el-form-item label="商品售价">
        <el-input v-model="form.price"></el-input>
      </el-form-item>

      <el-form-item label="折扣价格" prop="price_off">
        <el-input v-model="form.price_off"></el-input>
      </el-form-item>

      <el-form-item label="计量单位" prop="unit">
        <el-select v-model="form.unit" placeholder="添加分类">
          <el-option
            v-for="(item, i) in unitList"
            :key="i"
            :label="item"
            :value="item"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="商品库存" prop="inventory">
        <el-input v-model="form.inventory"></el-input>
      </el-form-item>

      <el-form-item label="商品相册" prop="images">
        <upload></upload>
      </el-form-item>

      <div class="button">
        <el-button type="primary" @click="prev('form')">上一步</el-button>
        <el-button type="primary" @click="next('form')">确认</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import Upload from './Upload.vue'
export default {
  components:{Upload},
  props: ["saleForm", "msg"],
  data() {
    return {
      unitList: ["个", "斤", "捆", "袋"],
      form: {
        price: 0,
        price_off: 0,
        unit: "",
        inventory: 0,
        images: [],
      },
      rules: {
        unit: [
          { required: true, message: "上屏单位必须要写哦", trigger: "blur" },
        ],
        image: [{ required: true, message: "上传图片", trigger: "blur" }],
      },
      categoryList: [],
    };
  },
  created() {
    // this.copy();
  },
  methods: {
    next(formName) {
      console.log(this.form);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$emit("next", this.form);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    prev() {
      this.$emit("prev");
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    copy() {
      this.form.price = this.saleForm.price;
      this.form.price_off = this.saleForm.price_off;
      this.form.unit = this.saleForm.unit;
      this.form.inventory = this.saleForm.inventory;
      this.form.images = [...this.saleForm.images];
    },
  },
};
</script>

<style scoped>
.app-container {
  width: 60%;
  margin: 0 auto;
  min-width: 600px;
  padding-top: 100px;
}
.el-select {
  width: 100%;
  margin-bottom: 10px;
}
.button {
  display: flex;
  justify-content: center;
}
</style>