<template>
  <el-menu
    :default-active="active"
    class="el-menu-vertical-demo"
    background-color="#545c64"
    active-text-color="#ffd04b"
    text-color='#fff'
    :unique-opened="true"
  >
    <el-submenu index="1">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>首页</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="Census"
          ><router-link :to="{ name: 'Census' }"
            >数据展示</router-link
          ></el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>

    <el-submenu index="2">
      <template slot="title">
        <i class="el-icon-location"></i>
        <span>商品</span>
      </template>
      <el-menu-item-group>
        <el-menu-item index="Add"
          ><router-link :to="{ name: 'Add' }">新增商品</router-link>
        </el-menu-item>
        <el-menu-item index="List"
          ><router-link :to="{ name: 'List' }"
            >商品列表</router-link
          ></el-menu-item
        >
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>

<script>
export default {
  data(){
    return {
      active:''
    }
  },
  created(){
    this.active = this.$route.name
  },
};
</script>

<style scoped>
.el-menu-vertical-demo.el-menu {
  height: 100%;
}
a {
  color: #fff;
  text-decoration: none;
  display: block;
  height: 100%;
}
a.router-link-active {
  color: rgb(255, 208, 75);
}
</style>