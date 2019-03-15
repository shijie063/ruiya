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
              <el-button class="btn">公民网验证</el-button>
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
          <!-- 证明材料 -->
          <upload></upload>
          
      </div>
              
    </div>
</template>
<script>
import upload from "./upload";
export default {
  components: { upload },
  name: "userMessage3",
  data() {
    return {};
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
  padding-bottom: 32px;
}
.btn {
  float: right;
  width: 96px;
  height: 32px;
  line-height: 8px;
  background: #c49a5b;
  color: #fff;
  font-size: 16px;
  text-indent: -12px;
}
.btn:hover {
  background: #928068;
}
</style>