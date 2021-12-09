<template>
  <div class="app-container">
    <div class="left">
      <Menu></Menu>
    </div>
    <div class="main">
      <div class="header">
        <Header></Header>
      </div>
      <div class="content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
import Menu from "../components/Menu.vue";
import Header from "../components/Header.vue"
export default {
  components: {
    Menu,
    Header
  },
};
</script>

<style scoped >
.app-container {
  width: 100%;
  height: 100%;
  display: flex;
  overflow: hidden;
}
.left {
  width: 220px;
  height: 100%;
  flex: 0 0 auto;
  background-color: #f00;
}


.main {
  flex: 1 1 auto;
  height:100%;
  overflow: hidden auto;
}
.main > .header {
  height: 50px;
  width: 100%;
}
.main > .content {
  height: calc(100% - 50px);
  width: 100%;
}
</style>