<template>
  <div class="app-container">
    <div class="header">
      <el-card class="box-card">
        <div class="clearfix">
          <span>商品总览</span>
        </div>
        <div class="text item">card content</div>
      </el-card>
      <el-card class="box-card">
        <div class="clearfix">
          <span>用户总览</span>
        </div>
        <div class="text item">card content</div>
      </el-card>
      <el-card class="box-card">
        <div class="clearfix">
          <span>销售总览</span>
        </div>
        <div class="text item">card content</div>
      </el-card>
    </div>
    <Charts/>
  </div>
</template>

<script>
import Charts from '@/components/charts'
export default {
  components:{
    Charts
  }
};
</script>

<style scoped>
.app-container {
  width: 100%;
  height: 100%;
}
.header {
  display: flex;
  height: 150px;
  margin-bottom: 20px;
  justify-content: space-around;
  width:100%;
  margin-top:20px;
}
.text {
  font-size: 14px;
  margin-top:15px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 360px;
  height: 150px;
}
</style>