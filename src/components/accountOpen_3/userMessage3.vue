<template>
    <div class="app"> 
      <div class="top" >
          <!--开户-->
          <div class="mt-32">
            <p class="of">
              <span class="fz-20">开户</span>
            </p>
          </div>
          <!-- top外框 -->
          <div class="topBox">
            <div class="tab"> 
            <!-- top内部框 -->
            <div class="userMes">
              <!-- 表头 -->
              <el-button @click="visit" class="btn">立即回访</el-button>
              <p class="title">客户信息</p>
              <!-- 客户基础信息 头部 -->
              <div class="mt-32">
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
                  <el-col :span="6"><div class="grid-content bg-purple">渠道来源:<span>{{1212}}</span></div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple">客户经理：<span>{{1212}}</span></div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple">年龄：<span>{{1212}}</span></div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple">出生日期：<span>{{1212}}</span></div></el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="6"><div class="grid-content bg-purple">证件类型：<span>{{1212}}</span></div></el-col>
                  <el-col :span="18"><div class="grid-content bg-purple">证件号码：<span>{{1212}}</span></div></el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="6"><div class="grid-content bg-purple">最高学历：<span>{{1212}}</span></div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple">邮箱地址：<span>{{1212}}</span></div></el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="6"><div class="grid-content bg-purple">是否有海外账户：<span>{{1212}}</span></div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple">税收身份：<span>{{1212}}</span></div></el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="6"><div class="grid-content bg-purple">财富测评：<span>{{1212}}</span></div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple">需求类型：<span>{{1212}}</span></div></el-col>
                </el-row>
                <!-- 职业信息 -->
              <div class="mt-32">
                <p class="of">
                  <span class="fz-20">职业信息</span>
                </p>
              </div>
                <el-row :gutter="20">
                  <el-col :span="6"><div class="grid-content bg-purple">职业:<span>{{1212}}</span></div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple">行业：<span>{{1212}}</span></div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple">单位名称：<span>{{1212}}</span></div></el-col>
                </el-row>
                <!-- 家庭信息 -->
                <div class="mt-32">
                  <p class="of">
                    <span class="fz-20">家庭信息</span>
                  </p>
                </div>
                <el-row :gutter="20">
                  <el-col :span="6"><div class="grid-content bg-purple">家庭年收入：<span>{{1212}}</span></div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple">婚姻状况：<span>{{1212}}</span></div></el-col>
                  <el-col :span="6"><div class="grid-content bg-purple">谁是家庭经济支柱：<span>{{1212}}</span></div></el-col>
                </el-row>
                <el-row :gutter="20">
                  <el-col :span="20"><div class="grid-content bg-purple">家庭成员（关系、性别、年龄、姓名）：<span>{{1212}}</span></div></el-col>
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
                  <!-- 紧急联系人 -->
                  <div class="mt-32">
                    <p class="of">
                      <span class="fz-20">紧急联系人</span>
                    </p>
                  </div>
                  <el-row :gutter="20">
                    <el-col :span="6"><div class="grid-content bg-purple">姓名：<span>{{1212}}</span></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">联系方式：<span>{{1212}}</span></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">性别：<span>{{1212}}</span></div></el-col>
                    <el-col :span="6"><div class="grid-content bg-purple">与您关系：<span>{{2131231}}</span></div></el-col>
                  </el-row>
                  <!-- 方便接听回访电话时间 -->
                  <div class="mt-32">
                    <p class="of">
                      <span class="fz-20">方便接听回访电话时间<span>（仅适用于场外开户场景）</span></span>
                    </p>
                  </div>
                  <el-row :gutter="20">
                    <el-col :span="6"><div class="grid-content bg-purple">工作日  9:00-12:00</div></el-col>
                  </el-row>
              </div>
              </div> 
          </div>
          <!-- 流程状态 -->
          <div class="bot">
              <div class="mt-32">
                <p class="of">
                  <span class="fz-20">流程状态</span>
                </p>
              </div>
            <div class="botBox">
                <div class="process">
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
              
    </div>
</template>
<script>
import upload from "./upload";
export default {
  components: { upload },
  name: "userMessage4",
  data() {
    return {};
  },
  methods:{
    visit(){
      this.$router.push({
        name:'visit'
      })
    }
    
  }
};
</script>
<style scoped>
.top {
  padding-left: 32px;
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
  margin-bottom: 30px;
  padding-top: 30px;
  padding-left: 48px;
  overflow: hidden;
}
.title {
  font-size: 16px;
  height: 32px;
  line-height: 32px;
  text-align: center;
}
.el-row {
  padding-left: 13px;
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
  padding: 30px 0 32px 48px;
}
.topBox {
  margin-bottom: 30px;
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
  font-size: 16px;
  text-indent: -4px;
}
.btn:hover {
  background: #928068;
}
</style>