<template>
    <div class="app">
        <div class="head">
            <div class="bor">
                <h2>产品名称</h2>
                <div class="spa">
                    <span>{{msg1}}&nbsp;&nbsp;|</span>
                    <span>{{msg2}}&nbsp;&nbsp;|</span>
                    <span>{{msg3}}</span>
                </div>
                
            </div>
             
        </div>
        <div class="msg">
                <p>一夜之间，土耳其货币里拉汇率暴跌20%——</p>
                <p>就在8月10日，从1美元兑换5.2里拉暴跌至6.5里拉。</p>
                <p>起因呢？</p>
                <p>是周五美国总统特朗普公布对土耳其的钢、铝关税翻倍，而且宣称将扩大对土耳其的制裁，由此引起土耳其股市和汇率的大崩盘。</p>
                <p>哎，果然又是美帝国主义兴风作浪，土耳其人民多么无辜……</p>
                <p>对此，无比爱国的土耳其总统埃尔多安发表讲话，声称土耳其经济基本面没问题，只是遭遇“某个国家发起的一场经济战”，毫无疑问的是，“任何一个成为土耳其人民痛苦根源的人早晚都将付出代价，为此负责。”</p>
                <p>土耳其财政部长阿尔巴伊拉克也在周五发表讲话，宣称土耳其将实施“新经济模式”，以此化解投资者的担心。</p>
                <p>可惜，里拉汇率丝毫不理会总统和部长大人的讲话，依然是直线下跌——忘了说，财政部长本人，是伟光正的埃尔多安的女婿。</p>
                <p>伴随着里拉汇率暴跌，土耳其的国债价格也再度暴跌，其两年期国债收益率升至25%，已经取代阿根廷国债，成为全世界2018年以来最糟糕主权债务投资。</p>
                <p>要知道，2015年在世界银行的经济体发展程度划分中，土耳其在人均国民收入上，可是排在上中等收入经济体（仅此于发达国家的经济体）的第一名，比其他国家牛多了。</p>
                
        </div>
        <img class="erweima" src="../assets/images/erweima.png" alt="">
        <p class="f_er">产品二维码</p>
    </div>
</template>
<script>
export default {
  name: "",
  data() {
    return {
        msg1:'高效',
        msg2:'稳健',
        msg3:'增长'
    };
  }
};
</script>
<style scoped>
.head {
  height: 3.5rem;
  background: url("../assets/images/tu@2x.png");
  background-size: 100% 3.5rem;
  background-repeat: no-repeat;
  position: relative;
  overflow: hidden;
}
.bor {
  width: 3.8rem;
  height: 1.8rem;
  background: url('../assets/images/chanpinzhuanti@2x.png');
  background-size: 3.8rem 1.8rem;
  background-repeat: no-repeat;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  margin: auto;
}
.chanpin {
  display: block;
  width: 1.2rem;
  height: 0.3rem;
  margin: 0.75rem auto;
}
.msg{
    padding: .3rem;
    font-size: .27rem
}
.erweima{
    width: 2rem;
    height: 2rem;
    margin: 0 auto;
    margin-top: .5rem
}
.f_er{
   text-align: center;
   margin: .2rem 0 1rem 0;
   font-size: .3rem;
   
}
h2{
    font-size: .36rem;
    color: #fff;
    margin-top: .5rem;
    text-align: center;
}
span{
    margin-left: .1rem;
    color: #fff;
}
.spa{
    text-align: center
}
</style>


