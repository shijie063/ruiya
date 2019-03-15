<template>
<!-- 5.4 -->
    <div class="app"> 
      <div class="top" >
          <!--开户-->
          <div class="mt-32">
            <p class="of">
              <span class="fz-20">客户信息</span>
            </p>
          </div>
          <!-- top外框 -->
          <div class="topBox">
            <div class="tab"> 
            <!-- top内部框 -->
            <div class="userMes">
              <!-- 表头 -->
              <el-button class="btn">修改</el-button>
              <p class="title">客户信息</p>
              <!-- 客户基础信息 头部 -->
              <el-row :gutter="20">
                  <el-col :span="6"><div class="grid-content bg-purple">客户姓名：<span>{{1212}}</span></div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple">客户编号：<span>{{1212}}</span></div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple">客户经理：<span>{{1212}}</span></div></el-col>
                  
                </el-row>
              <div class="mt-32">
                  <p class=" title title1">变更内容</p>
                <p class="of">
                  <span class="fz-20">基础信息</span>
                </p>
              </div>
                <!-- 基本信息 -->
                <el-row :gutter="20">
                  <el-col :span="6"><div class="grid-content bg-purple">客户姓名：<span>{{1212}}</span></div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple">联系方式：<span>{{1212}}</span></div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple">性别：<span>{{1212}}</span></div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple">国家地区：<span>{{1212}}</span></div></el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="6"><div class="grid-content bg-purple">最高学历：<span>{{1212}}</span></div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple">邮箱地址：<span>{{1212}}</span></div></el-col>
                </el-row>
                <!-- 地址信息 -->
                <div class="mt-32">
                  <p class="of">
                    <span class="fz-20">地址信息</span>
                  </p>
                </div>
                  <el-row :gutter="20">
                    <el-col :span="18"><div class="grid-content bg-purple">家庭地址（省，市，区，详细地址）：<span>{{1212}}</span></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">邮政编码：：<span>{{1212}}</span></div></el-col>
                  </el-row>
                  <el-row :gutter="20">
                    <el-col :span="18"><div class="grid-content bg-purple">家庭地址（省，市，区，详细地址）：<span>{{1212}}</span></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">邮政编码：：100000</div></el-col>
                  </el-row> 
              </div>
              </div> 
          </div>
          <dataUploadDetailsUpload></dataUploadDetailsUpload>
          <!-- 流程状态 -->
          <div class="bot">
              <div class="mt-32">
                <p class="of">
                  <span class="fz-20">流程状态</span>
                </p>
              </div>
            <div class="botBox">
                
                  <div style="height: 300px;">
                    <el-steps direction="vertical" :active="0">
                      <el-step title="2018-06-02 16:32:12 集团运营王五审核客户开户信息" description="2018-06-02 16:32:12 集团运营王五审核客户开户信息"></el-step>
                      <el-step title="2018-06-02 16:32:12 集团运营王五审核客户开户信息" description="2018-06-02 16:32:12 集团运营王五审核客户开户信息"></el-step>
                      <el-step title="2018-06-02 16:32:12 集团运营王五审核客户开户信息" description="这是一段很长很长很长的描述性文字"></el-step>
                      
                    </el-steps>
                  </div>
                
            </div>
          </div>
      </div>
              
    </div>
</template>
<script>
import dataUploadDetailsUpload from "./dataUploadDetailsUpload";
export default {
  components: { dataUploadDetailsUpload },
  name: "dataUploadDetailsUserMessage",
  data() {
    return {
      textarea: "",
      kkk: ""
    };
  }
};
</script>
<style scoped>
.top {
  padding: 32px;
}
.tab {
  width: 966px;
}
.mt-32 {
  margin: 32px 0 16px 0;
}
.mt-32 .of {
  background: url("../../assets/images/biaotou@2x.png") no-repeat left center;
  background-size: 4px 16px;
}
.mt-32 .fz-20 {
  font-size: 16px;
  margin-left: 12px;
}
.mt-32 .fz-20 span {
  font-size: 12px;
  color: #999;
}
.topBox,
.botBox {
  width: 100%;
  box-shadow: 0 0 20px #eee;
  padding: 30px 0 32px 48px;
}
.topBox {
  margin-bottom: 30px;
}
.title {
  font-size: 16px;
  height: 32px;
  line-height: 32px;
  text-align: center;
}
.title1{
    text-indent: -96px;
}
.el-row {
  padding-left: 13px;
}
.min_width {
  min-width: 966px;
  margin-top: 32px;
}
.grid-content {
  min-height: 36px;
  line-height: 36px;
}
.bg-purple {
  font-size: 12px;
  color: #999;
}
.bg-purple span {
  font-size: 14px;
  color: #333;
}
.botBox {
  padding-bottom: 150px;
}
.btn {
  float: right;
  width: 96px;
  height: 32px;
  line-height: 8px;
  background: #c49a5b;
  color: #fff;
}
.btn:hover {
  background: #928068;
}
.process {
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 0 20px #eee;
  margin: 0px 48px 32px 0;
  padding: 0px 0 16px 32px;
  font-size: 14px;
}
.textarea {
  max-width: 620px;
  min-width: 100px;
  padding-top: 16px;
}
.btn_b {
  width: 112px;
  height: 40px;
  font-size: 16px;
  color: #fff;
  background: #c49a5b;
  border: none;
  /* margin-bottom: 20px; */
  margin-left: 550px;
}
</style>