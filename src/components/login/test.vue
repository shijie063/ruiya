<template>

  <div id="app">
    <el-container class="box">
      <el-header class="header">
        <img class="logo" src="../../assets/images/logo@2x.png" alt="">
        <div class="to_loginBox">
          <span class="rember">记得密码 ？</span>
          <button @click="to_login" class="to_login">直接登录</button>
        </div>
      </el-header>
    <el-main class="main">
      <h1>设置新的登录密码</h1>
      <p>您的登录密码需要符合以下条件<br/>6-16位，需要包含数字、大小写字母和特殊字符两种以上</p>
      <el-row type="flex" justify="center">
        <el-col :span="5"><el-input type="password" class="login_input input1" v-model="new_password" placeholder="请输入您的新密码"></el-input></el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="5"><el-input type="password" class="login_input input2" v-model="new_password2" placeholder="请输入您的新密码"></el-input></el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="1.5"><el-button @click="test" class="test">确认</el-button></el-col>
      </el-row>
    </el-main>
  </el-container>
  </div>
  
</template>
<script>
import axios from "@/api/axios";
export default {
  name: "getPassWord",
  data() {
    return {
      new_password:"",
      new_password2:""
    };
  },
  methods: {
    test(){
      axios.post('https://gateway.rheafin.com/crm/api/v1/userauth/reset-password-token/',{password1:this.new_password,password2:this.new_password2}).then(res=>{
        if(res.status == 200){
           this.$router.push({
              name:"login"
          })
        }else if(res.status == 400){
          alert('两次密码不一致')
        }
      }).catch(res=>{
        console.log('err')
      })
    },
    to_login() {
      this.$router.push({
        name: "login"
      });
    },
  }
};
</script>
<style scoped>
#app {
  width: 100%;
  height: 100%;
}
.box {
  min-height: 1045px;
  max-height: 1200px;
  min-width: 800px;
  width: 100%;
  height: 100%;
  background: url(../../assets/images/login.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
}
.logo {
  float: left;
  width: 220px;
  height: 40px;
  margin: 2% 0 0 3%;
}
h1 {
  width: 200px;
  font-size: 24px;
  color: #fff;
  font-weight: 100;
  margin: 0 auto;
  margin-top: 9%;
  text-align: center;
}
.header {
  padding: 0;
  width: 100%;
}
.main {
  margin: 0;
  padding: 0;
  height: 1103px;
}
.input1 {
  margin-top: 4%;
}
.input2 {
  margin-top: 16px;
  position: relative;
}
.login_input {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}
.test {
  border: none;
  color: #fff;
  width: 112px;
  height: 40px;
  background: #c49a5b;
  margin-top: 40%;
  line-height: 20px;
  float: right;
}
.to_loginBox {
  float: right;
  margin: 2% 3%;
}
.to_login {
  width: 94px;
  height: 30px;
  border: 1px solid #c49a5b;
  background: none;
  color: #c49a5b;
  font-size: 16px;
  line-height: 8px;
  border-radius: 4px;
  cursor: pointer;
}
.to_login:hover {
  background: rgb(255, 236, 209);
  border: 1px solid #c49a5b
}
.rember {
  color: #fff;
  font-size: 14px;
  padding-right: 10px;
}
.el-button:hover {
  background: #928068 !important;
}
p{
  width: 350px;
  text-align: center;
  font-size: 12px;
  margin: 0 auto;
  margin-top: .52%;
  color:#fff;
}
</style>
