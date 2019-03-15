<template>

  <div id="app">
    <el-container class="box">
      <el-header class="header">
        <img class="logo" src="../../assets/images/logo@2x.png" alt="">
      </el-header>
    <el-main class="main">
      <h1>欢迎登录CRM系统</h1>
      <el-row type="flex" justify="center">
        <el-col :span="5"><el-input  class="login_input input1" v-model="username" placeholder="请输入账号"></el-input><span class="mail">@rheafin.com</span></el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="5"><el-input @keyup.enter.native="login" type="password" class="login_input input2" v-model="password" placeholder="请输入密码"></el-input><span @click="forget" class="forget">忘记密码</span></el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="1.5"><el-button @click="login" class="login_btn" >登录</el-button></el-col>
      </el-row>
    </el-main>
  </el-container>
  </div>
  
</template>
<script>
// import axios from "@/api/axios";
/// import { getUser } from "@/api/login.api";
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: "",
      a:1
    };
  },
 
  methods: {
    login() {
      debugger
     if(0){
       console.log(1)
     }else{
       console.log(this.a)
     }
    //   axios.post('https://gateway.rheafin.com/crm/api/v1/userauth/login/',{username:this.username + '@rheafin.com',password:this.password}).then((res)=>{
    //     console.log(res)
    //     if(res.status == 200){
    //         this.$router.push({
    //         name:'indexNoMes'
    //       })
    //     }else if(res.status == 400){
    //       alert('请输入正确的密码')
    //     }
    //   }).catch((err)=>{
    //     console.log('err')
    //   })
    // },
    // forget() {
    //   this.$router.push({
    //     name: "getPassWord"
    //   });
    }
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
  height: 100px;
  width: 100%;
}
.main {
  margin: 0;
  padding: 0;
  height: 1103px;
}
.input1 {
  margin-top: 64px;
   position: relative;
}
.input2 {
  margin-top: 16px;
  position: relative;
}
.login_input {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
  border:none !important
}
.forget {
  font-size: 13px;
  display: block;
  position: absolute;
  right: 40%;
  top: 30%;
  color: #ddd;
  cursor: pointer;
  display: block;
  height: 40px;
  line-height: 40px;
}
.login_btn {
  border: none;
  color: #fff;
  width: 112px;
  height: 40px;
  background: #c49a5b;
  margin-top: 40%;
  line-height: 20px;
}
.el-button:hover {
  background: #928068;
}
.mail {
  font-size: 13px;
  display: block;
  position: absolute;
  right: 40%;
  top: 62%;
  color: #ddd;
  cursor: pointer;
  display: block;
  height: 40px;
  line-height: 40px;
}
</style>
