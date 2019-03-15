<template>
<div id="main" v-show="show">
    <div class="mengban"></div>
    <div class="Message">
        <div class="head">
            <p>开户</p>
            <i @click="close" class="el-icon-close"></i>
        </div>
        <div class="box">  
            <div class="box3">                
                <el-form ref="form" :model="sizeForm" label-width="80px" size="small">
                  <el-form-item class="item" label="联系方式">
                          <el-input class="change_w" v-model="ques"></el-input>
                  </el-form-item>
                  <el-form-item class="item" label="题目类型">
                    <span>单选</span>
                  </el-form-item>
                  <el-form-item class="item" label="意见">
                                <el-input class="textarea" type="textarea" v-model="textarea"></el-input>
                            </el-form-item>
                        <el-form-item label-width="130px" class=" item_change" label="题目选项">
                            <el-select class="change_w home" v-model="sizeForm.home_bind1" placeholder="选项">
                                <el-option label="A" value="shanghai"></el-option>
                                <el-option label="B" value="tr"></el-option>
                                <el-option label="C" value="we"></el-option>
                                <el-option label="D" value="ef"></el-option>
                            </el-select>
                            <el-input class="other change_w home" v-model="sizeForm.home_age1" placeholder="选题内容"></el-input>
                            <el-input class=" change_w home" v-model="sizeForm.hone_name1" placeholder="分数" ></el-input>
                            <div class="add"></div>
                            <br/>
                            <el-select class="change_w home" v-model="sizeForm.home_bind2" placeholder="选项">
                                <el-option label="A" value="shanghai"></el-option>
                                <el-option label="B" value="beijing"></el-option>
                                <el-option label="C" value="sad"></el-option>
                                <el-option label="D" value="ds"></el-option>
                            </el-select>
                                <el-input class="other change_w home" v-model="sizeForm.home_age2" placeholder="选题内容"></el-input>
                                <el-input class=" change_w home" v-model="sizeForm.home_name2" placeholder="分数"></el-input>
                                <div class="cut"></div> 
                        </el-form-item>
                </el-form>                              
            </div>
            <div class="btn">
                <el-button @click="close" class="back">取消</el-button>
                <el-button class="ok">确认</el-button>
            </div>
        </div>             
    </div>
</div>
    
</template>
<script>
export default {
  name: "detailOpen7",
  data() {
    return {
      sizeForm: {
        home_money: "",
        home_bind1: "",
        home_sex1: "",
        home_age1: "",
        home_name1: "",
        ques: "",
        textarea: ""
      },
      show: true
    };
  },
  methods: {
    add() {},
    close() {
      this.show = false;
      this.$emit("getshow", this.show);
    }
  }
};
</script>
<style  scoped>
.mengban {
  position: absolute;
  height: 1260px;
  width: 100%;
  background: rgba(3, 3, 3, 0.2);
  left: 0px;
  top: 0px;
  z-index: 999;
}
.Message {
  width: 560px;
  height: 530px;
  position: absolute;
  left: 240px;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  margin: 100px auto;
  left: 0%;
  background: #fff;
  color: #333;
}
.head {
  width: 560px;
  height: 48px;
  background: #c49a5b;
  position: relative;
}
p {
  width: 560px;
  float: left;
  text-align: center;
  color: #fff;
  line-height: 48px;
  font-size: 16px;
}
/* 右上角叉号 */
.el-icon-close {
  position: absolute;
  font-size: 20px;
  color: #fff;
  right: 10px;
  top: 14px;
  cursor: pointer;
}
.change_w {
  width: 230px;
}
.box {
  height: 800px;
  padding: 32px;
  overflow-y: auto;
}
.box::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 6px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 4px;
}
.box::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.2);
}
.box::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  border-radius: 0;
  background: rgba(0, 0, 0, 0.1);
}

.home {
  padding-left: 0;
  width: 70px;
}
.box3 {
  box-shadow: 0 0 20px #eee;
  padding: 32px 0;
}
.box3 .other {
  width: 135px;
}
.add,
.cut {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  position: absolute;
  top: 5px;
  right: 30px;
  background: url(../../assets/images/jiahao@2x.png);
  background-size: 24px 24px;
  cursor: pointer;
}
.cut {
  background: url(../../assets/images/jianhao@2x.png);
  top: 38px;
  background-size: 24px 24px;
}
.el-button {
  width: 112px;
  height: 40px;
  font-size: 16px;
}
.back {
  border-color: #c49a5b;
  color: #c49a5b;
}
.back:hover {
  background: #ffecd1;
}
.ok {
  background: #c49a5b;
  color: #fff;
  margin-left: 20px;
}
.ok:hover {
  background: #917f68;
}
.btn {
  display: flex;
  justify-content: center;
  margin-top: 32px;
}
.item {
  margin-left: 50px;
}
span {
  font-size: 14px;
  color: #666;
}
.textarea {
  max-width: 330px;
  min-width: 80px;
  
}
</style>


   


