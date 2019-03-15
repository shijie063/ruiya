<template>
    <div class="app">
<!-- 客户信息详情页弹出开户信息 -->
        <h2>客户</h2>
        <div class="top">
            <div class="message">
                <div class="msg_top">
                    <img class="head_pic" src="../../assets/images/nan@2x.png" alt="">
                    <span class="name">{{basic_info.real_name}}</span>
                    <img class="icon" src="../../assets/images/kaihu_1@2x.png" alt="">
                    <span class="icon_word">开户 ：<b>{{account_status.is_open}}</b></span>
                    <img class="icon small_jj" src="../../assets/images/yinjianka@2x.png" alt="">
                    <span class="icon_word">印鉴卡 : <b>{{account_status.is_signature}}</b></span>
                    <img class="icon small_jj hege" src="../../assets/images/hegetouzizhe_1@2x.png" alt="">
                    <span class="icon_word">合格投资者 : <b>{{account_status.is_qualified}}</b></span>
                    <el-button class="btn btn1" @click="revise" type="primary">编辑</el-button>
                    <el-button class="btn" @click="open" type="primary">开户</el-button>
                </div>
                <div class="msg_bottom">
                        <a>客户编号 </br><b>{{vip_code}}</b></a>
                        <a>客户经理 </br><b>{{cfp.username}}</b></a>
                        <a>渠道来源 </br><b>{{basic_info.channel}}</b></a>
                        <a>电话 </br><b>{{basic_info.phone}}</b></a>
                        <a>风险承受能力 </br><b>{{risk_evaluation}}</b></a>
                        <a>资产配置报告 </br><b><i>立即查看</i></b></a>
                        <a>所属营业部 </br><b>{{cfp.department}}</b></a>      
                </div>
            </div>
        </div>  
        <h2>详细信息</h2>
        <div class="message_botom">
            
            <div class="tab_box">
                <h3>基础信息</h3>
                <el-row class="tab" :gutter="20">
                <el-col :span="6"><span>客户姓名 : <b>{{basic_info.real_name}}</b></span></el-col>
                <el-col :span="6"><span>联系方式 : <b>{{basic_info.phone}}</b></span></el-col>
                <el-col :span="6"><span>性别 : <b>{{basic_info.sex}}</b></span></el-col>
                <el-col :span="6"><span>国家地区 : <b>{{basic_info.country}}</b></span></el-col>
                </el-row>
                <el-row class="tab" :gutter="20">
                <el-col :span="6"><span>渠道来源 : <b>{{basic_info.channel}}</b></span></el-col>
                <el-col :span="6"><span>客户经理 : <b>{{cfp.username}}</b></span></el-col>
                <el-col :span="6"><span>年龄 : <b>{{basic_info.age}}</b></span></el-col>
                <el-col :span="6"><span>出生日期 : <b>{{basic_info.birthday_date}}</b></span></el-col>
                </el-row>
                <el-row class="tab" :gutter="20">
                <el-col :span="6"><span>证件类型 : <b>{{basic_info.card_type}}</b></span></el-col>
                <el-col :span="18"><span>证件号码 : <b>{{basic_info.card_id}}</b></span></el-col>
                </el-row>
                <el-row class="tab" :gutter="20">
                <el-col :span="6"><span>最高学历 : <b>{{basic_info.education}}</b></span></el-col>
                <el-col :span="18"><span>邮箱地址 : <b>{{basic_info.email}}</b></span></el-col>
                </el-row>
                <el-row class="tab" :gutter="20">
                <el-col :span="6"><span>是否海外账户 : <b>{{basic_info.offshore_account}}</b></span></el-col>
                <el-col :span="6"><span>税收身份 : <b>{{basic_info.tax_status}}</b></span></el-col>
                </el-row>
                <el-row class="tab" :gutter="20">
                <el-col :span="6"><span>财富测评 : <b>{{basic_info.assessment}}</b></span></el-col>
                <el-col :span="6"><span>需求类型 : <b>{{basic_info.demand}}</b></span></el-col>
                </el-row>
                <h3>职业信息</h3>
                <el-row class="tab" :gutter="20">
                    <el-col :span="8"><span>职员 : <b>{{job_info.profession}}</b></span></el-col>
                    <el-col :span="8"><span>行业 : <b>{{job_info.industry}}</b></span></el-col>
                    <el-col :span="8"><span>单位名称 : <b>{{job_info.company}}</b></span></el-col>
                </el-row>
                <h3>家庭信息</h3>
                <el-row class="tab" :gutter="20">
                    <el-col :span="6"><span>家庭年收入 : <b>{{family_info.income}}</b></span></el-col>
                    <el-col :span="6"><span>婚姻状况 : <b>{{family_info.marital}}</b></span></el-col>
                    <el-col :span="6"><span>谁是家庭经济支柱 : <b>{{family_info.host}}</b></span></el-col>
                </el-row>
                <el-row class="tab" :gutter="20">
                    <el-col :span="24"><span>家庭成员(关系、性别、年龄、姓名) : <b v-for="(val,key) of family_info.members" :key="key">{{val.relationship}}/{{val.sex}}/{{val.age}}//{{val.name}}   </b></span></el-col>
                </el-row>
                <h3>地址信息</h3>
                <el-row class="tab" :gutter="20" v-for="(value, key) in  address " :key="key">
                    <el-col :span="18" > <span>{{value.atype}}(省,市,区,详细地址) : <b>{{value.country}}</b></span></el-col>
                    <el-col :span="6"><span>邮政编码 : <b>{{value.post_code}}</b></span></el-col>
                </el-row>
                <h3>紧急联系人</h3>
                <el-row class="tab" :gutter="20">
                    <el-col :span="6"><span>姓名 : <b>{{emergency.name}}</b></span></el-col>
                    <el-col :span="6"><span>联系方式 : <b>{{emergency.phone}}</b></span></el-col>
                    <el-col :span="6"><span>性别 : <b>{{emergency.sex}}</b></span></el-col>
                    <el-col :span="6"><span>与您关系 : <b>{{emergency.relationship}}</b></span></el-col>
                </el-row>
                <h3>方便接听回访电话时间<span class="sad">(仅适用于场外开户环境)</span> </h3>
                <el-row class="tab" :gutter="20">
                    <el-col :span="6"><span><b>{{revisit.interval}}</b></span></el-col>
                </el-row>
                <h3>其他信息</h3>
                <el-row class="tab" :gutter="20">
                    <el-col :span="8"><span>创建日期 : <b>{{other_info.create_datetime}}</b></span></el-col>
                    <el-col :span="8"><span>最新修改日期 : <b>{{other_info.latest_update_datetime}}</b></span></el-col>
                </el-row>
                <el-row class="tab" :gutter="20">
                    <el-col :span="8"><span>开户日期 : <b>{{other_info.account_open_datetime}}</b></span></el-col>
                    <el-col :span="8"><span>成为合格投资者日期 : <b>{{other_info.qualified_datetime}}</b></span></el-col>
                </el-row>
                <el-row class="tab" :gutter="20">
                    <el-col :span="8"><span>印鉴卡上传日期日期 : <b>{{other_info.signatured_datetime}}</b></span></el-col>
                    <el-col :span="8"><span>最新风险测评日期 : <b>{{other_info.risk_evaluation_datetime}}</b></span></el-col>
                </el-row>
            </div>
            
        </div>
        <userDetailOpen @getshow = "getVal" v-show="show"></userDetailOpen>
        <userDetailRevise @revise = "reviseVal" v-show="revise_show"></userDetailRevise>
    </div>
</template>
<script>
import axios from '@/api/axios'
import userDetailOpen from "./userDetailOpen";
import userDetailRevise from "./userDetailRevise";
export default {
  // props: ["userId"],
  components: { userDetailOpen,userDetailRevise},
  name: "userDetail",
  data() {
    return {
      hello:{

      },
      name: "",
      revise_show:false,
      show: false,
      vip_code: '',
      risk_evaluation: '',
      cfp: {
        username: '',
        department:''
      },
      basic_info: {
        real_name: '',
        phone: '',
        sex: '',
        country: '',
        channel: '',
        age: '',
        birthday_date:'',
        card_type: '',
        card_id: '',
        education: '',
        email: '',
        offshore_account: '',
        tax_status: '',
        assessment: '',
        demand:'',
      },
      job_info: {
        profession: '',
        industry: '',
        company: '',
      },
      family_info: {
        income: '',
        marital: '',
        host: '',
        members: [
        {        
          name: '',
        phone: '',
        sex: '',
        relationship: '',
      },
        {
        name: '',
        phone: '',
        sex: '',
        relationship: '',},],
      },
      address: [{
        country: '',
        province: '',
        city: '',
        district: '',
        address_detail: '',
        post_code: '',
        atype: '',
      },
      {
        country: '',
        province: '',
        city: '',
        district: '',
        address_detail: '',
        post_code: '',
        atype: '',
      }],
      emergency:{
        name: '',
        phone: '',
        sex: '',
        relationship: '',
      },
      revisit: {
        interval: ''
      },
      other_info: {
        create_datetime: '',
        latest_update_datetime:'',
        account_open_datetime: '',
        qualified_datetime: '',
        signature_datetime: '',
        risk_evaluation_datetime: '',
      },
      account_status:{
        is_open: '',
        is_signature: '',
    },
    };
  },
  methods: {
    open() {

      this.show = true;
    },
    
    getVal(isshow) {
      this.show = isshow;
    },
    revise() {
      this.revise_show = true;
    },
    reviseVal(isshow){
        this.revise_show = isshow;
    }
  },
  mounted(){
    let tmp = this.$route.params   
    console.log('userdetail: ', tmp)

    let query_url = '/rheafin/crm/api/v1/potential-customer/' + tmp.customer_id + '/'
    console.log(query_url)

    axios.get(query_url).then(res=>{
      // this.name = res.data
      console.log(res.data)
      let data = res.data 
      console.log('customer queried data: ', data)
      for (let key in res.data.basic_info){
        this.basic_info[key] = res.data.basic_info[key]
      }
    }).catch(err=>{
      console.log(err)
    })
  },
};
</script>

<style scoped>
.top {
  color: #333;
  width: 100%;
  padding: 0 64px;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 0 20px #eee;
}
h2,
h3 {
  height: 16px;
  line-height: 16px;
  font-size: 16px;
  margin: 32px 0 16px 0;
  padding-left: 10px;
  border-left: 4px solid #c49a5b;
}
h3 {
  margin: 32px 0 16px -16px;
}
.message,
.tab_box {
  width: 930px;
}
.name {
  display: inline-block;
  align-self: center;
  font-size: 16px;
  margin-left: 8px;
}
.msg_top {
  height: 90px;
  border-bottom: 1px solid #f1f1f1;
  display: flex;
  flex-direction: row;
}
.head_pic {
  align-self: center;
  width: 32px;
  height: 32px;
}
b {
  font-size: 14px;
  color: #333;
  font-weight: 500;
}
.icon {
  width: 24px;
  height: 16px;
  align-self: center;
  margin-left: 48px;
}
.icon_word {
  align-self: center;
  margin-left: 4px;
  font-size: 12px;
}
.small_jj {
  margin-left: 32px;
}
.btn {
  width: 96px;
  height: 32px;
  font-size: 16px;
  color: #fff;
  background: #c49a5b;
  border: none;
  align-self: center;
  text-align: center;
  line-height: 12px;
  margin-left: 32px;
}
.btn1 {
  margin-left: 60px;
}
.el-button:hover {
  background: #928068 !important;
}
.hege {
  width: 24px;
  height: 24px;
}
.msg_bottom {
  display: flex;
  height: 90px;
}
.msg_bottom a {
  padding: 0 22px;
  text-align: center;
  align-self: center;
  font-size: 12px;
  line-height: 24px;
  color: #666;
}
i {
  color: rgb(63, 188, 238);
  font-style: normal;
  cursor: pointer;
}
.message_botom {
  color: #666;
  width: 100%;
  padding: 0 64px;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 0 20px #eee;
  margin-bottom: 32px;
}
.tab_box {
  margin: 16px 0 32px 0;
  color: #666;
}
.tab {
  margin-top: 18px;
}
.sad {
  font-size: 12px;
}
</style>

