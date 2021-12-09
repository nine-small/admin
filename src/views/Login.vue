<template>
  <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">

  <el-form-item label="邮箱" prop="email">
    <el-input v-model="ruleForm.email"></el-input>
  </el-form-item>

  <el-form-item label="密码" prop="password">
    <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
  </el-form-item>

  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
    <el-button @click="resetForm('ruleForm')">重置</el-button>
  </el-form-item>
</el-form>
</template>

<script>
  export default {
    data() {
      return {
        ruleForm: {
          password: '',
          email: '',
        },
        rules: {
          password: [
            { validator: this.notNull('密码不能为空'), trigger: 'blur' }
          ],
          email: [
            { validator: this.notNull('邮箱不能为空'), trigger: 'blur' }
          ]
        }
      };
    },
    methods: {
      submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            this.login()
            
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      notNull(msg){
        return (urle,value,cb)=>{
          if(!('' + value)){
            cb(msg)
          }else{
            cb()
          }
        }
      },
      async login(){
        this.$store.dispatch('user/login',this.ruleForm)
          .then((resp)=>{
            localStorage.setItem('USER',JSON.stringify(resp.data))
            this.$message.success(resp.msg)
            const want = this.$route.query.want;
            this.$router.push({
              path:want || '/'
            })
          },(msg)=>{
            this.$message.info(msg)
          }).catch(err=>{
            console.log(err)
          })
      }
    }
  }
</script>