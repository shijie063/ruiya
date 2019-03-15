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
                  <el-form-item class="item" label="客户姓名">
                          <el-input class="change_w" v-model="sizeForm.ques"></el-input>
                  </el-form-item>
                   <el-form-item class="item" label="客户编号">
                          <el-input class="change_w" v-model="sizeForm.ques1"></el-input>
                  </el-form-item>
                   <el-form-item class="item" label="客户经理">
                          <el-input class="change_w" v-model="sizeForm.ques2"></el-input>
                  </el-form-item>                 
                  <el-form-item class="item" label="渠道来源">
                    <el-select class="input change_w"  v-model="sizeForm.region3" placeholder="">
                    <el-option label="区域一" value="shanghai"></el-option>
                    <el-option label="区域二" value="beijing"></el-option>
                    </el-select>
                  </el-form-item>
                  <el-form-item class="item" label="创建日期">
                    <el-col :span="7">
                    <el-date-picker  class="input" type="date" v-model="sizeForm.date5" style="width: 95%;"></el-date-picker>
                    </el-col>
                    <el-col class="line" :span="2">到</el-col>
                    <el-col :span="7">
                    <el-date-picker  class="input" type="date" v-model="sizeForm.date6" style="width: 95%;"></el-date-picker>
                    </el-col>
            </el-form-item>                  
                </el-form>  
                <el-button class="look">查询</el-button>                            
            </div> 
            <div class="box2">
                        <el-table
                                ref="multipleTable"
                                :data="tableData3"
                                tooltip-effect="dark"
                                style="width: 100%"
                                >
                                <el-table-column
                                type="selection"
                                width="55">
                                </el-table-column>
                                <el-table-column
                                label="客户编号"
                                width="120">
                                <template slot-scope="scope">{{ scope.row.date }}</template>
                                </el-table-column>
                                <el-table-column
                                prop="name"
                                label="客户姓名"
                                width="120">
                                </el-table-column>
                                <el-table-column
                                prop="address"
                                label="客户经理"
                                show-overflow-tooltip>
                                </el-table-column>
                        </el-table> 
                    </div>  
                    <div class="btn">
                        <el-button @click="close" class="cancel" >取消</el-button>
                        <el-button @click="send" class="ok">确认</el-button> 
                    </div>
                               
        </div> 
                   
    </div>
    
</div>
    
</template>
<script>
import bus from '../../assets/eventBus'
// import userList from "./userList";
export default {
  // components: { userList },
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
        ques1: "",
        ques2: "",
        textarea: ""
      },
      tableData3: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      show: true,
      show_two:true
    };
  },
  methods: {
    add() {},
    close() {
      this.show = false;
      this.$emit("getshow", this.show);
    },
    send(){
      this.show = false;
      this.$emit("getshow", this.show);
       bus.$emit('userEvent',this.show_two)
      //  console.log(this.show)

    },
    // handleSelectionChange(){

    // }
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
  height: 912px;
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
  width: 240px;
}
.box {
  padding: 32px;
}
.box2 {
  color: #333;
  width: 100%;
  padding: 32px 0 16px 0px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 0 20px #eee;
  height: 258px;
  margin-top: 32px;
  overflow-y: auto;
}
.box2::-webkit-scrollbar {
  /*滚动条整体样式*/
  width: 4px; /*高宽分别对应横竖滚动条的尺寸*/
  height: 4px;
}
.box2::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius: 5px;
  background: rgba(0, 0, 0, 0.2);
}
.box2::-webkit-scrollbar-track {
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
.ok,
.look {
  background: #c49a5b;
  color: #fff;
  margin-left: 40px;
}
.look {
  margin-left: 370px;
}
.ok:hover {
  background: #917f68;
}
.look:hover {
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


   


