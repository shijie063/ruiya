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
        <h1>找回密码</h1>
        <el-row type="flex" justify="center">
          <el-col :span="5"><el-input class="login_input input1" v-model="username" placeholder="请输入账号"></el-input><span class="mail">@rheafin.com</span></el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="5"><el-input class="login_input input2" v-model="confirm" placeholder="请输入您收到的验证码"></el-input><span class="confirm" @click="forget">{{confirmTime}}</span></el-col>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="1.5"><el-button @click="test" class="test">验证身份</el-button></el-col>
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
      username: "",
      confirm: "",
      confirmTime: "获取验证码",
      confirmTimeFlag: "true"
    };
  },
  methods: {
    test() {
      axios
        .post("https://gateway.rheafin.com/crm/api/v1/userauth/retrieve-password/", {
          email: this.username+'@rheafin.com',
          code: this.confirm,
        })
        .then(res => {
          console.log(res);
          if (res.status === 200) {
            
            this.$router.push({
              name: "test" ,
            });
          } else {
            alert("请输入正确的验证码");
          }
        })
        .catch(err => {
          console.log("err");
        });
     
    },
    to_login() {
      this.$router.push({
        name: "login"
      });
    },
    forget() {
      if (this.confirmTimeFlag) {
        axios
          .post("https://gateway.rheafin.com/crm/api/v1/userauth/create-code/", { phone_or_email: this.username + '@rheafin.com', verify_type: 3 })
          .then(res => {
            console.log(res);
            this.countDown(30);
          })
          .catch(res => {
            console.log("err");
          });
      } else {
        alert("请稍后发送");
      }
    },
    countDown(time) {
      var timer = setInterval(() => {
        if (time == 0) {
          clearInterval(timer);
          this.confirmTime = "点击发送验证码";
          this.confirmTimeFlag = true;
        } else {
          time--;
          this.confirmTime = "(" + time + ")" + "秒后重新发送";
          this.confirmTimeFlag = false;
        }
      }, 1000);
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
  margin-top: 14%;
}
.input2 {
  margin-top: 16px;
  position: relative;
}
.login_input {
  color: #fff !important;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 4px;
}
.el-input__inner {
  color: #000;
}
.confirm,
.mail {
  font-size: 12px;
  position: absolute;
  right: 40%;
  top: 30%;
  color: #ddd;
  cursor: pointer;
  display: block;
  height: 40px;
  line-height: 40px;
}
.mail {
  font-size: 13px;
  position: absolute;
  right: 40%;
  top: 60%;
  line-height: 40px;
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
}
.rember {
  color: #fff;
  font-size: 14px;
  padding-right: 10px;
}
.el-button:hover {
  background: #928068 !important;
}
</style>
