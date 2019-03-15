<template>
    <div class="app">
        <div class="box">
            <div class="mt-32">
                <p class="of">
                    <span class="fz-20">开户</span>
                </p>
            </div>
                <!-- 顶部按钮 -->
                <div class="topButton">
                     <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
                        <el-tab-pane label="开户信息录入" name="first">                            
                                <first v-bind:show = 'show' v-on:listenChild="showFromChild" class="myfirst"></first>                         
                                <firstBot class="myfirst"></firstBot>  
                        </el-tab-pane>
                        <el-tab-pane label="材料上传" name="second">
                            <second class="myfirst"></second>
                            <secondBot class="myfirst"></secondBot>
                        </el-tab-pane>
                        <el-tab-pane label="开户审核" name="third">
                            <third class="myfirst"></third>
                            <thirdBot class="myfirst"></thirdBot>
                        </el-tab-pane>
                        <el-tab-pane label="客户回访" name="fourth">
                            <fourth class="myfirst"></fourth>
                            <fourthBot class="myfirst"></fourthBot>
                        </el-tab-pane>
                    </el-tabs>
                </div>


        </div>
         <userDetailOpen  v-show="show" @getshow = "getVal"></userDetailOpen>
    </div>
</template>
<script>
import userDetailOpen from './userDetailOpen'
import first from "./card/first";
import firstBot from "./card/firstBot";
import second from "./card/second";
import secondBot from "./card/secondBot";
import third from "./card/third";
import thirdBot from "./card/thirdBot";
import fourth from "./card/fourth";
import fourthBot from "./card/fourthBot";

export default {
  name: "entryInformation",
  components: {
    first,
    firstBot,
    second,
    secondBot,
    third,
    thirdBot,
    fourth,
    fourthBot,
    userDetailOpen
  },
  data() {
    return {
      activeName2: "first",
      show:false
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
     eventFromChild(dataIf){
        this.show=dataIf.show
      },
      showFromChild(data){
          this.show = data
      },
      getVal(isshow) {
      this.show = isshow;
    }
  }
};
</script>
<style scoped>
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
.myfirst {
  padding:16px 10px;
  
}
.topButton{
  height: 32px;
}

</style>
