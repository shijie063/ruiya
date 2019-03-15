<template>
    <div class="app">
        <h2>客户回访</h2>
        <div class="box">
            <div class="min_width">
                <el-row class="row" :gutter="20">
                    <el-col :span="12" :offset="6"><div class="grid-content bg-purple">
                        <p>是否客户本人接听</p>
                        <el-radio v-model="one" label="1">是</el-radio>
                        <el-radio v-model="one" label="2">否</el-radio></div>
                    </el-col>
                </el-row>
                <el-row class="row" :gutter="20">
                    <el-col :span="12" :offset="6"><div class="grid-content bg-purple">
                        <p>客户姓名是否为<span>张三</span></p>
                        <el-radio v-model="two" label="1">是</el-radio>
                        <el-radio v-model="two" label="2">否</el-radio></div>
                    </el-col>
                </el-row>
                <el-row class="row" :gutter="20">
                    <el-col :span="12" :offset="6"><div class="grid-content bg-purple">
                        <p>客户邮寄地址是否为<span>北京市朝阳区东三环中路22号了城中心A座22层</span></p>
                        <el-radio v-model="three" label="1">是</el-radio>
                        <el-radio v-model="three" label="2">否</el-radio></div>
                    </el-col>
                </el-row>
                <el-row class="row" :gutter="20">
                    <el-col :span="12" :offset="6"><div class="grid-content bg-purple">
                        <p>客户证件号码后四位是否为<span>0120</span></p>
                        <el-radio v-model="four" label="1">是</el-radio>
                        <el-radio v-model="four" label="2">否</el-radio></div>
                    </el-col>
                </el-row>
                <el-row class="row" :gutter="20">
                    <el-col :span="12" :offset="6"><div class="grid-content bg-purple">
                        <p>客户的客户经理是否为<span>李四</span></p>
                        <el-radio v-model="five" label="1">是</el-radio>
                        <el-radio v-model="five" label="2">否</el-radio></div>
                    </el-col>
                </el-row>
                <el-row class="row" :gutter="20">
                    <el-col :span="12" :offset="6"><div class="grid-content bg-purple">
                        <p>开户申请数及印鉴卡是否本人亲笔签名、签字？</p>
                        <el-radio v-model="six" label="1">是</el-radio>
                        <el-radio v-model="six" label="2">否</el-radio></div>
                    </el-col>
                </el-row>
                <el-row class="row" :gutter="20">
                    <el-col :span="12" :offset="6"><div class="grid-content bg-purple">
                        <p>是否已提示风险信息</p>
                        <el-radio v-model="seven" label="1">是</el-radio>
                        <el-radio v-model="seven" label="2">否</el-radio></div>
                    </el-col>
                </el-row>
                <el-row class="row" :gutter="20">
                    <el-col :span="12" :offset="6"><div class="grid-content bg-purple">
                        <el-form class="form">
                        <el-form-item label="活动形式">
                            <el-input class="textarea" type="textarea" v-model="textarea"></el-input>
                        </el-form-item></el-form></div>
                    </el-col>
                </el-row>
                <el-row class="row_last" :gutter="20">
                    <el-col :span="12" :offset="6"><div class="grid-content btn_center ">
                        <el-button class="btn btn1" @click="close" >取消</el-button>
                        <el-button class="btn" type="primary" >待跟进</el-button>
                        <el-button class="btn" @click="success" type="primary" >回访通过</el-button></div>
               </el-col>
                </el-row>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {
      one: "",
      two: "",
      three: "",
      four: "",
      five: "",
      six: "",
      seven: "",
      textarea: ""
    };
  },
  methods:{
      success(){
          this.$router.push({
              name:'success'
          })
      },
      close(){
          this.$router.push({
              name:'userMessage3'
          })
      }
  }
};
</script>
<style scoped>
.box {
  width: 100%;
  padding: 32px 0 0 0;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 0 20px #eee;
}
h2 {
  font-size: 16px;
  margin: 32px 0 16px 0;
  padding-left: 10px;
  border-left: 4px solid #c49a5b;
  height: 16px;
  line-height: 16px;
}
.bg-purple {
  border-radius: 5px;
  box-shadow: 0 0 20px #eee;
  padding: 16px 0 16px 48px;
  color: #333;
}
.min_width {
  min-width: 560px;
  overflow: hidden;
}
p {
  font-size: 14px;
  padding-bottom: 8px;
}
.radio {
  font-size: 12px;
}
.row {
  margin-bottom: 16px;
}
.el-radio__label {
  color: #666;
  font-size: 12px !important ;
}
span {
  color: #c49a5b;
}
.textarea {
  max-width: 620px;
  min-width: 100px;
}
.form {
  padding-right: 48px;
}
.btn {
  width: 112px;
  height: 40px;
  font-size: 16px;
  color: #fff;
  background: #c49a5b;
  border: none;
  margin: 0 16px;
}
.btn1 {
  background: none;
  border: 1px solid #c49a5b;
  color: #c49a5b;
}
.btn_center {
  display: flex;
  justify-content: center;
  margin: 32px 0 32px 0;
}
.btn:hover {
  background: #928068;
}
.btn1:hover {
  background: #ffecd1;
}
.btn1 {
  border: 1px solid #c49a5b;
}
</style>


