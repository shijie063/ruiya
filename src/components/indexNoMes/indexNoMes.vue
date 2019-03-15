<template>
    <div class="app"> 
        <div class="top">
            <div class="mt-32">
                <p class="of">
                    <span class="fz-20">客户数据情况</span>
                </p>
            </div>
            <div class="borderBox">
                <div class="userClue">   
                    <p class="pO">{{one}}</p>
                    <p class="pT">
                        <img class="img" src="../../assets/images/kehuxiansuo@2x.png" alt="">
                        <span>客户线索</span>
                    </p>
                </div>
                <div class="Account">
                    <p class="pO">{{two}}</p>
                    <p class="pT">
                        <img class="img" src="../../assets/images/kaihu@2x.png" alt="">
                        <span>开户</span>
                    </p>    
                </div> 
                <div class="investor">
                    <p class="pO">{{three}}</p>
                    <p class="pT">
                        <img class="img" src="../../assets/images/hegetouzizhe@2x.png" alt="">
                        <span>合格投资者</span>
                    </p>    
                </div>
            </div>

        </div>
        <div class="center">
            <div class="C_top">
                 <div class="mt-32">
                    <p class="of">
                        <span class="fz-20">在投数据信息</span>
                    </p>
                 </div>
            </div>
            <div class="c_content">
                <div class="c_left">
                    <div class="c_left_t">
                        <p class="pO">--</p>
                        <p class="pT">
                            <span>在投人数</span>
                         </p>    
                    </div>
                    <div class="c_left_b">
                        <p class="pO">--</p>
                        <p class="pT">
                            <span>在投总金额(万元)</span>
                        </p>    
                    </div>
                </div>
                <div class="c_right">
                    <div id="main"></div>
                    <p>其中理财产品包括固定收益类产品、浮动收益类产品、海外基金产品；<br>
保险产品包括国内保险、UI、HI。</p>
                </div>
            </div>
            <div></div>

        </div>

        <div class="bottom">
            <div class="b_top">
                 <div class="mt-32">
                    <p class="of">
                        <span class="fz-20">业务考核信息</span>
                    </p>
                 </div>
            </div>
            <div class="b_bot">
                    <div class="b_bot_left">
                        <div class="b_bot_left_l">
                            <p class="fz32">1,580.00</p>
                            <p class="c666">EOPplus（万元）</p>
                        </div>
                        <div class="b_bot_left_l">
                            <p class="fz32">1,580.00</p>
                            <p class="c666">EOP（万元）</p>
                        </div>
                        <div class="b_bot_left_l">
                            <p class="fz32">5800</p>
                            <p class="c666">NTR（人）</p>
                        </div>
                    </div>
                    <div class="b_bot_right">
                        <div class="pd32">
                            <p>①   EOP：月末余额。</p>
                            <p>②   EOP plus：各大类产品按规模业绩计入(固收1年以下为折标。含二次到账规模      业绩，例如Capital call产品）。理财产品以认购金额计入规模业绩，保险产品以总保费计入规模业绩，房产以房价计入规模业绩，移民以投资金额计入规模业绩。</p>
                            <p>③   NTR定义：首次购买大于等于30万的客户（EOP plus口径）。</p>
                        </div>
                    </div>
            </div>
        </div>
              
    </div>
</template>
<script>
import axios from "@/api/axios";
var echarts = require("echarts");
export default {
  name: "accountOpen",
  data() {
    return {
      one:'',
      two:'',
      three:'',
      options: {
        // tooltip: {   蒙版信息
        //   trigger: "axis",
        //   axisPointer: {
        //     // 坐标轴指示器，坐标轴触发有效
        //     type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
        //   }
        // },
        legend: {
          data: ["人数", "金额"],
          x: "right"
        },
        grid: {
          left: "3%",
          right: "4%",
          bottom: "3%",
          containLabel: true
        },

        xAxis: {
          type: "category",
          data: ["理财产品", "保险产品", "移民产品", "海外置业"],
          axisTick: { show: false },
          axisLine: {
            lineStyle: {
              color: "#F1F1F1 "
            }
          }
        },
        yAxis: {
          axisTick: { show: false },
          type: "value",
          splitLine: {
            lineStyle: {
              color: "#F1F1F1 "
            }
          },
          axisLine: {
            lineStyle: {
              color: "#F1F1F1 "
            }
          }
        },
        series: [
          {
            name: "人数",
            type: "bar",
            data: [320, 332, 301, 334],
            barWidth: "24px",
            label: {
              //标签，柱状图显示的文字
              normal: {
                show: true, //默认为不显示
                position: "top" //默认显示在内部，当为0时，影响视觉
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#A5E3FF" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#6CC3FF" // 100% 处的颜色
                    }
                  ],
                  false
                )
              }
            }
          },

          {
            name: "金额",
            type: "bar",
            stack: "广告",
            data: [120, 132, 101, 134],
            barWidth: "24px",
            label: {
              //标签，柱状图显示的文字
              normal: {
                show: true, //默认为不显示
                position: "top" //默认显示在内部，当为0时，影响视觉
              }
            },
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(
                  0,
                  1,
                  0,
                  0,
                  [
                    {
                      offset: 0,
                      color: "#FAD961" // 0% 处的颜色
                    },
                    {
                      offset: 1,
                      color: "#F76B1C" // 100% 处的颜色
                    }
                  ],
                  false
                )
              }
            }
          }
        ],
        textStyle: {
          //显示文字的样式
          color: "#999",
          fontWeight: 300,
          fontSize: 12 //文字的字体大小
        }
      }
    };
  },
  mounted() {
    var myChart = echarts.init(document.getElementById("main"));
    myChart.setOption(this.options);
    axios
      .get("/rheafin/crm/api/v1/home-account")
      .then(res => {
        // console.log(res);
        this.one = res.data.clue_account
        this.two = res.data.open_count
        this.three = res.data.qualified_count

      })
      .catch(err => {
        console.log("err");
      });
  }
};
</script>
<style scoped>
.mt-32 .of {
  background: url("../../assets/images/biaotou@2x.png") no-repeat left center;
  background-size: 4px 16px;
}
.mt-32 .fz-20 {
  font-size: 16px;
  margin-left: 12px;
}
.mt-32 {
  margin: 32px 0 16px 0;
}
.top {
  width: 100%;
}
.top .borderBox {
  width: 100%;
  height: 112px;
  display: flex;
  justify-content: space-between;
}
.top .userClue,
.top .Account,
.top .investor {
  display: flex;
  /* width: 264px; */
  width: 27%;
  height: 112px;
  background: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 12px 0 #ddd;
}
.c_left_t,
.c_left_b {
  width: 192px;
  height: 112px;
  display: flex;
  background: #fff;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 12px 0 #ddd;
}
.pO {
  height: 40px;
  text-align: center;
  line-height: 40px;
  color: #c49a5b;
  font-size: 32px;
}
.pT {
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #666;
  font-size: 12px;
  font-weight: 600;
}
.pT .img {
  width: 24px;
  height: 24px;
  display: inline-block;
  margin-right: 8px;
}
.center {
  /* width: 966px; */
  background: #fff;
}
.c_content {
  width: 100%;
  height: 430px;
  box-shadow: 0 2px 12px 0 #ddd;
  display: flex;
}
.c_left {
  height: 100%;
  display: flex;
  flex: 4;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
}
.c_right {
  flex: 6;
  padding: 22px 60px 0;
}
#main {
  width: 100%;
  height: 330px;
}
.c_right p {
  font-size: 12p;
  color: #999;
  padding-left: 40px;
}
.b_bot {
  display: flex;
  /* width: 966px; */
  height: 144px;
  box-shadow: 0 2px 12px 0 #ddd;
}
.b_bot_left {
  display: flex;
  flex: 5;
  height: 100%;
  justify-content: space-around;
  align-items: center;
}
.b_bot_right {
  flex: 5;
  height: 100%;
  padding: 32px 0;
}
.b_bot_left_l {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.fz32 {
  font-size: 32px;
  line-height: 36px;
  color: #c49a5b;
}
.c666 {
  color: #666;
  font-size: 12px;
}
.pd32 {
  height: 80px;
  width: 435px;
  font-size: 12px;
  color: #999;
  line-height: 16px;
}
</style>