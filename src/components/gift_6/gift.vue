<template>
    <div class="app">
        <div class="box">
            <div class="mt-32">
                <p class="of">
                    <span class="fz-20">客户赠与</span>
                </p>
            </div>
                <!-- 顶部按钮 -->
                <div class="topButton">
                     <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
                        <el-tab-pane label="客户赠与" name="first">                            
                                <first v-bind:show = 'show' v-on:listenChild="showFromChild" class="myfirst"></first>                         
                                <firstBot v-bind:show = 'show_three' v-on:send="send_three" class="myfirst"></firstBot>  
                        </el-tab-pane>
                        <el-tab-pane label="客户赠与记录" name="second">
                            <second class="myfirst"></second>
                            <secondBot class="myfirst"></secondBot>
                        </el-tab-pane>
                    </el-tabs>
                        
                </div>
        </div>
         <giftOpen7  v-show="show" @getshow = "getVal"></giftOpen7>
         <giftOpen8  v-if="show_two" @getshow_two = "getVal_two"></giftOpen8>
         <giftOpen9  v-if="show_three" @getshow_three = "getVal_three"></giftOpen9>

    </div>
</template>
<script>
import bus from "../../assets/eventBus";

import giftOpen7 from "./giftOpen7";
import giftOpen8 from "./giftOpen8";
import giftOpen9 from "./giftOpen9";
import first from "./card/first";
import firstBot from "./card/firstBot";
import second from "./card/second";
import secondBot from "./card/secondBot";

export default {
  name: "gift",
  components: {
    first,
    firstBot,
    second,
    secondBot,
    giftOpen7,
    giftOpen8,
    giftOpen9,
  },
  data() {
    return {
      activeName2: "first",
      show: false,
      show_two: false,
      show_three:false
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    eventFromChild(dataIf) {
      this.show = dataIf.show;
    },
    showFromChild(data) {
      this.show = data;
    },
    getVal(isshow) {
      this.show = isshow;
    },
    getVal_two(asd){
      this.show_two = asd;
    },
    send_three(qwe){
      this.show_three = qwe
    },
    getVal_three(kk){
      this.show_three = kk;
    }

  },
  mounted() {
    bus.$on("userEvent", data=> {
        this.show_two = data; 
    });

  },
  beforeDestroy(){
    bus.$off('userEvent',this.show_two)
  }
};
</script>
<style scoped>
.mt-32 {
  margin: 32px 0 16px 16px;
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
  padding: 16px 10px;
}
.el-tabs__nav-scroll {
  margin-left: 16px;
}
</style>

