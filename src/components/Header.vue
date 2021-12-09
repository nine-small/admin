<template>
  <div class="app-container">
    <div class="left">
      <el-breadcrumb separator-class="el-icon-arrow-right">
        <el-breadcrumb-item
          v-for="item in bread"
          :key="item.name"
          :to="item.click ? null :{ name: item.name }"
          >{{ item.title }}</el-breadcrumb-item
        >
      </el-breadcrumb>
    </div>
    <div class="right">
      <el-dropdown :hide-on-click="false">
        <span class="el-dropdown-link">
          个人中心<i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>修改密码</el-dropdown-item>
          <el-dropdown-item>个人中心</el-dropdown-item>
          <el-dropdown-item>退出登陆</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bread: [],
    };
  },
  created(){
    this.bread = this.$route.meta.bread;
  },
  watch: {
    $route() {
      this.bread = this.$route.meta.bread;
    },
  },
};
</script>

<style scoped>
.app-container {
  display: flex;
  justify-content: space-between;
}
.left,
.right {
  height: 30px;
  line-height: 30px;
  padding-top: 20px;
}
.left {
  padding-top: 20px;
  padding-left: 30px;
}
.right {
  padding-right: 30px;
  cursor: pointer;
}
</style>