<template>
<!-- 新增用户线索 -->
<div class="app">
    <h2>客户信息查询</h2>
    <div class="message">
      <div class="tab">
        <el-form ref="form" class="left" :model="sizeForm" label-width="80px" size="small">
            <el-form-item label="客户姓名">
                <el-input class="input" v-model="sizeForm.message"></el-input>
            </el-form-item>
            <el-form-item label="客户编号">
                <el-input class="input" v-model="sizeForm.num"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
                <el-input class="input" v-model="sizeForm.phone"></el-input>
            </el-form-item>
            <el-form-item label="渠道来源">
                <el-select class="input" v-model="sizeForm.region1" placeholder="">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="创建日期">
                <el-col :span="8">
                <el-date-picker  class="input" type="date" v-model="sizeForm.date1" style="width: 90%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">到</el-col>
                <el-col :span="8">
                <el-date-picker  class="input" type="date" v-model="sizeForm.date2" style="width: 90%;"></el-date-picker>
                </el-col>
            </el-form-item>
           
        </el-form>
        <el-form ref="form" class="right" :model="sizeForm" label-width="80px" size="small">
            <el-form-item label="客户经理">
                <el-input class="input" v-model="sizeForm.manager"></el-input>
            </el-form-item>
            <el-form-item  label="客户状态">
                <el-select class="input" v-model="sizeForm.region2" placeholder="">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="证件号码">
                <el-input class="input" v-model="sizeForm.manager"></el-input>
            </el-form-item>
            <el-form-item label="营业部">
                <el-select class="input" v-model="sizeForm.region3" placeholder="">
                <el-option label="区域一" value="shanghai"></el-option>
                <el-option label="区域二" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <div>
            <el-form-item label="开户日期">
                    <el-col :span="10">
                    <el-date-picker  class="input" type="date" v-model="sizeForm.date5" style="width: 88%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">到</el-col>
                    <el-col :span="10">
                    <el-date-picker  class="input" type="date" v-model="sizeForm.date6" style="width: 88%;"></el-date-picker>
                    </el-col>
            </el-form-item>
                <el-form-item>
                    <el-button class="btn"  @click="detail">查询</el-button>
                </el-form-item>
            </div>   
        </el-form>
      </div>
        
    </div>
    <userList></userList>
    
</div>

</template>
<script>
import axios from '@/api/axios'
import userList from "./userList";
export default {
  components: { userList },
  name: "openList",
  data() {
    return {
      sizeForm: {
        message: "",
        num: "",
        resource: "",
        phone: "",
        region1: "",
        region2: "",
        region3: "",
        date1: "",
        date2: "",
        date3: "",
        date4: "",
        date5: "",
        date6: "",
        life: "",
        open: "",
        manager: ""
      },
      show: false
    };
  },

  methods: {
   
    detail() {
      // axios.post('',{}).then(res=>{
      //   console.log(res)
      // }).catch(err=>{
      //   conole.log('err')
      // })
      this.$router.push({
        name: "userMessage"
      });
    },
   
  }
};
</script>

<style scoped>
.app {
  padding: 0 10px;
}
h2 {
  height: 16px;
  line-height: 16px;
  font-size: 16px;
  margin: 32px 0 16px 0;
  padding-left: 10px;
  border-left: 4px solid #c49a5b;
}
.tab {
  width: 966px;
}
.message {
  color: #333;
  width: 100%;
  padding-top: 32px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 0 20px #eee;
}
.input {
  width: 230px;
}
.line {
  text-indent: -3px;
}
.left {
  float: left;
  width: 410px;
  padding-left: 64px;
}
.right {
  float: left;
  width: 410px;
  padding-left: 64px;
}
.btn {
  width: 112px;
  height: 40px;
  font-size: 16px;
  color: #fff;
  background: #c49a5b;
  border: none;
  
  margin: 32px 0 20px 118px;
}
.el-button:hover {
  background: #928068 !important;
}
.input:focus {
  border-color: #c49a5b;
}
.input:hover {
  border-color: #c49a5b;
}
</style>




