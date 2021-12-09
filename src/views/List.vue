<template>
  <div class="app-container">
    <div class="header">
      <el-form :inline="true" class="demo-form-inline">
        <el-form-item label="搜索关键词">
          <el-input v-model="searchWord" placeholder="搜索关键词"></el-input>
        </el-form-item>
        <el-form-item label="商品分类">
          <el-select v-model="category" placeholder="分类">
            <el-option
              v-for="item in categoryList"
              :key="item.id"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <div class="content">
      <el-table :data="data" style="width: 100%">
        <el-table-column label="序号" width="50">
          <template slot-scope="scope">
            {{ scope.$index + 1 + (page - 1) * size }}
          </template>
        </el-table-column>
        <el-table-column label="ID" width="100" prop="id"> </el-table-column>
        <el-table-column label="名称" width="150" prop="title">
        </el-table-column>
        <el-table-column label="类目" width="80" prop="category">
          <template slot-scope="scope">
            {{ categoryName(scope.row.category) }}
          </template>
        </el-table-column>
        <el-table-column label="描述" width="180" prop="desc">
        </el-table-column>
        <el-table-column label="价格" width="80" prop="price">
        </el-table-column>
        <el-table-column label="折扣价" width="80" prop="price_off">
        </el-table-column>
        <el-table-column label="是否上架" width="80">
          <template slot-scope="scope">
            {{ scope.row.status === 1 ? "上架" : "下架" }}
          </template>
        </el-table-column>
        <el-table-column label="销量" width="100" prop="sale">
        </el-table-column>
        <el-table-column label="库存" width="100" prop="inventory">
        </el-table-column>

        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="handleEdit(scope.row)"
              >编辑</el-button
            >
            <el-button
              size="mini"
              type="danger"
              @click="handleDelete(scope.row)"
              >删除</el-button
            >
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="footer">
      <el-pagination
        background
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="page"
        :page-sizes="[5, 10, 20, 30]"
        :page-size="size"
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      >
      </el-pagination>
    </div>
  </div>
</template>

<script>
import { getProducts, getCategory, delProduct } from "@/api/product";
export default {
  data() {
    return {
      data: [],
      page: 1,
      size: 10,
      searchWord: "",
      category: 1,
      total: 0,
      categoryList: [],
    };
  },
  created() {
    this.fetchData();
    getCategory().then((el) => {
      el.status === "success" && (this.categoryList = el.data.data);
    });
  },
  methods: {
    // getProduct
    async fetchData() {
      const resp = await getProducts(
        this.page,
        this.size,
        this.category,
        this.searchWord
      );
      if (resp.status === "success") {
        const { data } = resp;
        this.data = data.data;
        this.total = data.total;
      }
    },
    // 产品编辑
    handleEdit(row) {
      console.log(row);
    },
    // delProduct 
    handleDelete(row) {
      this.$confirm("此操作将永久删除该文件, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          delProduct(row.id).then(() => {
            this.$message.success("删除成功!");
            this.fetchData();
          });
        })
        .catch(() => {
          this.$message.info('已取消删除');
        });
    },
    // 改变每页显示条数
    handleSizeChange(val) {
      this.size = val;
      this.page = 1;
      this.fetchData();
    },
    // 翻页
    handleCurrentChange(val) {
      this.page = val;
      this.fetchData();
    },
    // search
    onSubmit() {
      this.fetchData();
    },
    // 根据category的id获取对应的name
    categoryName(id) {
      if (this.categoryList.length) {
        return this.categoryList.filter((r) => r.id === id)[0].name;
      }
    },
  },
};
</script>

<style scoped>
.footer {
  padding: 30px 0;
}
</style>