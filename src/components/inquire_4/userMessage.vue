<template>
    <div class="app">
<!-- 客户信息详情页弹出开户信息 -->
        <h2>客户</h2>
        <div class="top">
            <div class="message">
                <div class="msg_top">
                    <img class="head_pic" src="../../assets/images/nan@2x.png" alt="">
                    <span class="name">{{name}}</span>
                    <img class="icon" src="../../assets/images/kaihu_1@2x.png" alt="">
                    <span class="icon_word">开户 ：<b>未开户</b></span>
                    <img class="icon small_jj" src="../../assets/images/yinjianka@2x.png" alt="">
                    <span class="icon_word">印鉴卡 : <b>已上传</b></span>
                    <img class="icon small_jj hege" src="../../assets/images/hegetouzizhe_1@2x.png" alt="">
                    <span class="icon_word">合格投资者 : <b>是</b></span>
                </div>
                <div class="msg_bottom">
                        <a>客户编号 </br><b>00000001</b></a>
                        <a>客户经理 </br><b>张三</b></a>
                        <a>渠道来源 </br><b>自有渠道</b></a>
                        <a>电话 </br><b>12345678910</b></a>
                        <a>风险承受能力 </br><b>稳健性</b></a>
                        <a>资产配置报告 </br><b><i>立即查看</i></b></a>
                        <a>所属营业部 </br><b>北京营业部</b></a>      
                </div>
            </div>
        </div>  
        <h2>详细信息</h2>
        <div class="message_botom">
            
            <div class="tab_box">
                <h3>基础信息</h3>
                <el-row class="tab" :gutter="20">
                <el-col :span="6"><span>客户姓名 : <b>张三</b></span></el-col>
                <el-col :span="6"><span>联系方式 : <b>12345678910</b></span></el-col>
                <el-col :span="6"><span>性别 : <b>男</b></span></el-col>
                <el-col :span="6"><span>国家地区 : <b>中国大陆</b></span></el-col>
                </el-row>
                <el-row class="tab" :gutter="20">
                <el-col :span="6"><span>渠道来源 : <b>自有渠道</b></span></el-col>
                <el-col :span="6"><span>客户经理 : <b>张三</b></span></el-col>
                <el-col :span="6"><span>年龄 : <b>34</b></span></el-col>
                <el-col :span="6"><span>出生日期 : <b>1990-01-03</b></span></el-col>
                </el-row>
                <el-row class="tab" :gutter="20">
                <el-col :span="6"><span>证件类型 : <b>身份证</b></span></el-col>
                <el-col :span="18"><span>证件号码 : <b>41080419950603001X</b></span></el-col>
                </el-row>
                <el-row class="tab" :gutter="20">
                <el-col :span="6"><span>最高学历 : <b>本科</b></span></el-col>
                <el-col :span="18"><span>邮箱地址 : <b>1232114@163.com</b></span></el-col>
                </el-row>
                <el-row class="tab" :gutter="20">
                <el-col :span="6"><span>是否海外账户 : <b>是</b></span></el-col>
                <el-col :span="6"><span>税收身份 : <b>仅为中国税收居民</b></span></el-col>
                </el-row>
                <el-row class="tab" :gutter="20">
                <el-col :span="6"><span>财富测评 : <b>高净值人群</b></span></el-col>
                <el-col :span="6"><span>需求类型 : <b>传承</b></span></el-col>
                </el-row>
                <h3>职业信息</h3>
                <el-row class="tab" :gutter="20">
                    <el-col :span="8"><span>职员 : <b>公务员</b></span></el-col>
                    <el-col :span="8"><span>行业 : <b>房地产</b></span></el-col>
                    <el-col :span="8"><span>单位名称 : <b>睿亚财富</b></span></el-col>
                </el-row>
                <h3>家庭信息</h3>
                <el-row class="tab" :gutter="20">
                    <el-col :span="6"><span>家庭年收入 : <b>20-50万</b></span></el-col>
                    <el-col :span="6"><span>婚姻状况 : <b>已婚</b></span></el-col>
                    <el-col :span="6"><span>谁是家庭经济支柱 : <b>本人</b></span></el-col>
                </el-row>
                <el-row class="tab" :gutter="20">
                    <el-col :span="24"><span>家庭成员(关系、性别、年龄、姓名) : <b>母女/女/55/李小华</b></span></el-col>
                </el-row>
                <h3>地址信息</h3>
                <el-row class="tab" :gutter="20">
                    <el-col :span="18"><span>家庭地址(省,市,区,详细地址) : <b>北京市朝阳区东三环中路22号了城中心A座21层</b></span></el-col>
                    <el-col :span="6"><span>邮政编码 : <b>100000</b></span></el-col>
                </el-row>
                <el-row class="tab" :gutter="20">
                    <el-col :span="18"><span>家庭地址(省,市,区,详细地址) : <b>北京市朝阳区东三环中路22号了城中心A座21层</b></span></el-col>
                    <el-col :span="6"><span>邮政编码 : <b>100000</b></span></el-col>
                </el-row>
                <h3>紧急联系人</h3>
                <el-row class="tab" :gutter="20">
                    <el-col :span="6"><span>姓名 : <b>张三</b></span></el-col>
                    <el-col :span="6"><span>联系方式12345678910 : <b>男</b></span></el-col>
                    <el-col :span="6"><span>性别 : <b>本人</b></span></el-col>
                    <el-col :span="6"><span>与您关系 : <b>父母</b></span></el-col>
                </el-row>
                <h3>方便接听回访电话时间<span class="sad">(仅适用于场外开户环境)</span> </h3>
                <el-row class="tab" :gutter="20">
                    <el-col :span="6"><span><b>工作日9:00-12:00</b></span></el-col>
                </el-row>
                <h3>其他信息</h3>
                <el-row class="tab" :gutter="20">
                    <el-col :span="8"><span>创建日期 : <b>2018-01-01 15:12:21</b></span></el-col>
                    <el-col :span="8"><span>最新修改日期 : <b>2018-01-01 15:12:21</b></span></el-col>
                </el-row>
                <el-row class="tab" :gutter="20">
                    <el-col :span="8"><span>开户日期 : <b>2018-01-01 15:12:21</b></span></el-col>
                    <el-col :span="8"><span>成为合格投资者日期 : <b>2018-01-01 15:12:21</b></span></el-col>
                </el-row>
                <el-row class="tab" :gutter="20">
                    <el-col :span="8"><span>印鉴卡上传日期日期 : <b>2018-01-01 15:12:21</b></span></el-col>
                    <el-col :span="8"><span>最新风险测评日期 : <b>2018-01-01 15:12:21</b></span></el-col>
                </el-row>
            </div>
        </div>
        <upload4></upload4>
    </div>
</template>
<script>

import upload4 from './upload4'
export default {
  components :{upload4},
  name: "userMessage",
  data() {
    return {
      name: "张三",
      revise_show:false,
      show: false
    };
  },
  methods: {
   
  }
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

