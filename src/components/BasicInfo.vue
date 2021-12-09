<template>
  <div class="app-container">
    <el-form
      :model="form"
      ref="form"
      :rules="rules"
      label-width="100px"
      class="demo-form"
    >
      <el-form-item label="标题" prop="title">
        <el-input v-model="form.title"></el-input>
      </el-form-item>

      <el-form-item label="商品描述" prop="desc">
        <el-input v-model="form.desc"></el-input>
      </el-form-item>

      <el-form-item label="商品分类" prop="category">
        <el-select v-model="form.category" placeholder="添加分类">
          <el-option
            :label="item.name"
            :value="item.id"
            v-for="item in categoryList"
            :key="item.id"
          ></el-option>
        </el-select>
        <el-select v-model="form.c_items" placeholder="添加子目录">
          <el-option 
          v-for="(item,i) in c_itemsList" 
          :key='i'
          :label="item" 
          :value="item"></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="商品标签" prop="tags">
        <el-select v-model="form.tags" multiple placeholder="商品标签">
          <el-option
            v-for="(item, i) in options"
            :key="i"
            :label="item"
            :value="item"
          >
          </el-option>
        </el-select>
      </el-form-item>

      <div class="button">
        <el-button type="primary" @click="next('form')">下一步</el-button>
      </div>
    </el-form>
  </div>
</template>

<script>
import { getCategory } from "@/api/product";
export default {
  props: ["basicForm", "msg"],
  data() {
    return {
      options: ["显示抢购", "满100减20", "包送到家", "准时送达"],
      form: {
        title: "",
        desc: "",
        category: "",
        c_items: [],
        tags: [],
      },
      rules: {
        title: [{ required: true, message: "请填写商品名称", trigger: "blur" }],
        desc: [{ required: true, message: "请填写商品描述", trigger: "blur" }],
        category: [
          { required: true, message: "请选择商品分类", trigger: "blur" },
        ],
        c_items: [{ required: true, message: "请选择子分类", trigger: "blur" }],
        tags: [{ required: true, message: "请选择标签", trigger: "blur" }],
      },
      categoryList: [],
    };
  },
  created() {
    this.copy();
    getCategory().then((resp) => {
      resp.status === "success" && (this.categoryList = resp.data.data);
    });
  },
  computed: {
    c_itemsList() {
        if(!this.categoryList.length || !this.form.category) return ;
        let arr = this.categoryList.filter(r => r.id === this.form.category)
        return arr[0].c_items
    },
  },
  methods: {
    next(formName) {
      formName
      // console.log(this.form);
      // this.$refs[formName].validate((valid) => {
        // if (valid) {
          this.$emit("next", this.form);
        // } else {
          // console.log("error submit!!");
          // return false;
        // }
      // });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
    copy() {
      this.form.title = this.basicForm.title;
      this.form.desc = this.basicForm.desc;
      this.form.category = this.basicForm.category;
      this.form.c_items = [...this.basicForm.c_items];
      this.form.tags = [...this.basicForm.tags];
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