<template>
<!-- 新增用户线索 -->
<div class="app">
    <h2>客户</h2>
    <div class="message">
      <div class="tab">
        <el-form ref="form" class="left" :model="sizeForm" label-width="80px" size="small">
            <el-form-item label="客户姓名">
                <el-input class="input" v-model="sizeForm.basic_info__real_name"></el-input>
            </el-form-item>
            <el-form-item label="客户编号">
                <el-input class="input" v-model="sizeForm.vip_code"></el-input>
            </el-form-item>
            <el-form-item label="联系方式">
                <el-input class="input" v-model="sizeForm.basic_info__phone"></el-input>
            </el-form-item>
            <el-form-item label="渠道来源">
                <el-select class="input" v-model="sizeForm.channel" placeholder="">
                <el-option label="区域一" value="1"></el-option>
                <el-option label="区域二" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="创建日期">
                <el-col :span="8">
                <el-date-picker  class="input" type="date" v-model="sizeForm.create_datetime_start" style="width: 85%;" value-format="yyyy-MM-dd"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">到</el-col>
                <el-col :span="8">
                <el-date-picker  class="input" type="date" v-model="sizeForm.create_datetime_end" style="width: 85%;" value-format="yyyy-MM-dd"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label-width="120px"  label="是否有海外账户" prop="resource">
                <el-radio-group v-model="sizeForm.offshore_account">
                    <el-radio label=true>是</el-radio>
                    <el-radio label=false>否</el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form>
        <el-form ref="form" class="right" :model="sizeForm" label-width="80px" size="small">
            <el-form-item label="客户经理">
                <el-input class="input" v-model="sizeForm.cfp__username"></el-input>
            </el-form-item>
            <el-form-item  label="客户状态">
                <el-select class="input" v-model="sizeForm.account_status__is_open" placeholder="">
                <el-option label="已开户" value="1"></el-option>
                <el-option label="未开户" value="2"></el-option>
                </el-select>
            </el-form-item>
            <el-form-item label="出生日期">
                <el-col :span="8">
                <el-date-picker  class="input" type="date" v-model="sizeForm.birthday_date_start" style="width: 85%;"></el-date-picker>
                </el-col>
                <el-col class="line" :span="2">到</el-col>
                <el-col :span="8">
                <el-date-picker  class="input" type="date" v-model="sizeForm.birthday_date_end" style="width: 85%;"></el-date-picker>
                </el-col>
            </el-form-item>
            <el-form-item label="营业部">
                <el-select class="input" v-model="sizeForm.department" placeholder="">
                <el-option label="一部" value="shanghai"></el-option>
                <el-option label="二部" value="beijing"></el-option>
                </el-select>
            </el-form-item>
            <div>
            <el-form-item label="开户日期">
                    <el-col :span="8">
                    <el-date-picker  class="input" type="date" v-model="sizeForm.account_open_datetime_start" style="width: 85%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">到</el-col>
                    <el-col :span="8">
                    <el-date-picker  class="input" type="date" v-model="sizeForm.account_open_datetime_end" style="width: 85%;"></el-date-picker>
                    </el-col>
            </el-form-item>
                <el-form-item>
                    <el-button class="btn"  @click="detail">查询</el-button>
                    <el-button class="btn" type="primary" @click="creat">新建</el-button>
                </el-form-item>
            </div>   
        </el-form>
      </div>
        
    </div>
    <userList></userList>
    <addUserMessage @getshow = "getVal" v-show="show"></addUserMessage>
</div>

</template>
<script>
import bus from '../../assets/eventBus'
import axios from '@/api/axios'
import addUserMessage from "./addUserMessage";
import userList from "./userList";
export default {
  components: { addUserMessage, userList },
  name: "addUserClue",
  data() {
    return {
      data:{
        asd:'wqe',
        asd:'',
      },
      sizeForm: {
        basic_info__real_name: "p1",
        vip_code: "",
        basic_info__phone: "",
        channel: "",
        create_datetime_start:"",
        create_datetime_end:"",
        offshore_account:"",
        cfp__username: "",
        account_status__is_open: "",
        birthday_date_start: "",
        birthday_date_end:"",
        department:"",
        account_open_datetime_start:"",
        account_open_datetime_end:"",
      },
      show: false,
    };
  },

  methods: {
    creat() {
      this.show = true;
    },
    detail() {             //查询返回列表
      let request_data = {}
      if (this.check_null(this.sizeForm.basic_info__real_name)) request_data["basic_info__real_name"] = this.sizeForm.basic_info__real_name

        // basic_info__real_name: this.sizeForm.basic_info__real_name,
        // cfp__username: this.sizeForm.cfp__username,
        // vip_code: this.sizeForm.vip_code,
        // channel: this.sizeForm.channel,
        // basic_info__phone: this.sizeForm.basic_info__phone,
        // create_datetime_start: this.sizeForm.create_datetime_start,
        // create_datetime_end: this.sizeForm.create_datetime_end,
        // offshore_account: this.sizeForm.offshore_account,
        // account_status__is_open: this.sizeForm.account_status__is_open,
        // birthday_date_start: this.sizeForm.birthday_date_start,
        // birthday_date_end: this.sizeForm.birthday_date_end,
        // department: this.sizeForm.department,
        // account_open_datetime_start: this.sizeForm.account_open_datetime_start,
        // account_open_datetime_end: this.sizeForm.account_open_datetime_end,
      //}
      console.log(request_data)
      axios.post("/rheafin/crm/api/v1/query/potential-customer/",request_data).then(res=>{
        console.log(res)
        bus.$emit('userEvent', res.data)
        
        console.log('in add user clue')
        
      }).catch(err=>{
        console.log('err')
      })
      // this.$router.push({
      //   name: "userDetail"
      // });

    },
  getVal(isshow) {
      this.show = isshow;
    },
  check_null(data){
    if (data !== null || data !== undefined || data !== '')
      return true
    else
      return false
    }
  },
mounted(){
  this.data=this.$route.data
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
  margin-bottom: 16px;
  margin-top: 32px;
}
.el-button:hover {
  background: #928068;
}

</style>

