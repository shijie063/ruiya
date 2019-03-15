<template>
    <div class="bar"> 
        <el-container>
            <el-header>
                <img src="../../assets/images/logo@2x.png" alt="">
            </el-header>
        <el-container>
                <el-aside>
                    <el-row class="tac">
                            <el-menu
                            default-active="2"
                            class="el-menu-vertical-demo"
                            background-color='#928068'
                            text-color="#fff"
                            active-text-color='#fff'
                            :default-openeds="['2']"
                            router>
                                <el-menu-item index="indexNoMes"><i class="shouye@2"></i><span>首页</span></el-menu-item>                            
                                <el-menu-item :disabled='true' index=""><i class="kehuxinxiguanli"></i><span>客户信息管理</span></el-menu-item >                               
                                <el-menu-item  v-for="(val,key,index) in obj" v-if="bar[key] != undefined" :key="index" :index="bar[key]"><span>{{key}}</span></el-menu-item>
                                <!-- <el-menu-item index="entryInformation"><span>开户</span></el-menu-item>                                 
                                <el-menu-item index="inquireList"><span>客户信息查询</span></el-menu-item>
                                <el-menu-item index="changeList"><span>客户信息变更</span></el-menu-item>
                                <el-menu-item index="gift"><span>客户赠与</span></el-menu-item>
                                <el-menu-item index="2-6"><span>风险测评</span></el-menu-item>
                                <el-menu-item index="2-7"><span>合格投资者</span></el-menu-item>
                                <el-menu-item index="2-8"><span>印鉴卡管理</span></el-menu-item>
                                <el-menu-item index="2-9"><span>资产配置报告</span></el-menu-item> -->
                            </el-menu>
                    </el-row>
                </el-aside>
                <el-main>
                    <router-view></router-view>
                </el-main>
            </el-container>
        </el-container>
        
    </div>
</template>
<script>
import axios from "@/api/axios";
import indexNoMes from "../indexNoMes/indexNoMes";
import userMessage from "../accountOpen_3/userMessage";
export default {
  name: "bar",
  components: {
    userMessage,
    indexNoMes
  },
  data() {
    return {
      show: true,
      obj: {},
      bar:{
          '开户':'entryInformation',
          '新增客户线索':'addUserClue',
          '风险测评':'inquireList',
          '客户信息修改': 'changeList' 
      }
    };
  },
  mounted() {
    axios
      .get("/rheafin/crm/api/v1/userauth/get-perm/")
      .then(res => {
        console.log(res.data);
        this.obj = res.data;
        console.log(obj);
        //   var newArr = this.newArr
        //   for(let key in data){
        //       var obj =new Object()
        //       obj[key] = data[key]
        //     newArr.push(obj)

        //   }
        //   console.log(newArr)
        // console.log(arr)
      })
      .catch(err => {
        console.log("err");
      });
  }
};
</script>
<style scoped>
.el-header {
  background-color: #928068;
  color: #fff;
  text-align: center;
  line-height: 60px;
}
.el-header img {
  width: 178px;
  height: 32px;
  margin-top: 20px;
}
.el-aside {
  background-color: #928068;
  text-align: left;
  min-height: 1200px; /*最小高度*/
  width: 250px;
}

.el-menu-item {
  padding-left: 50px !important;
  position: relative;
}
.el-menu-item span {
  margin-left: 30px;
}
.is-active {
  background: #c49a5b !important;
}
.is-disabled {
  background: #999999 !important;
  opacity: 1 !important;
}
i {
  display: inline-block;
  width: 24px;
  height: 24px;
  background: url("../../assets/images/shouye@2x.png") no-repeat;
  background-size: cover;
  position: absolute;
  top: 20px;
}
.kehuxinxiguanli {
  display: inline-block;
  width: 20px;
  height: 24px;
  background: url("../../assets/images/kehuxinxiguanli@2x.png") no-repeat;
  background-size: cover;
}
.el-main {
  padding: 0 50px 20px;
}
</style>