<template>
<!-- 5.2 -->
<div id="main" v-show="show">
    <div class="mengban"></div>
    <div class="Message">
                <div class="head">
                    <p>选择客户</p>
                    <i @click="close" class="el-icon-close"></i>
                </div>
                <div class="box">
                    <div class="box1">
                        <el-form ref="form" :model="sizeForm" label-width="80px" size="small">
                            <el-form-item class="item" label="客户姓名">
                                <el-input class="change_w" v-model="sizeForm.name"></el-input>
                            </el-form-item>
                            <el-form-item class="item" label="客户编号">
                                <el-input class="change_w" v-model="sizeForm.num"></el-input>
                            </el-form-item>  
                        </el-form>
                        <el-button class="btn btn_cha">查询</el-button>
                    </div>
                    <div class="box2">
                        <el-table
                                ref="multipleTable"
                                :data="tableData3"
                                tooltip-effect="dark"
                                style="width: 100%"
                                @selection-change="handleSelectionChange">
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
                        <el-button @click="cancel" class="btn cancel" >取消</el-button>
                        <el-button @click="sendParent" class="btn ok">确认</el-button>   
                </div>   
    </div>
</div>
    
</template>
<script>
export default {
  name: "inquireOpen",
  data() {
    return {
      sizeForm: {
        name:'',
        num:''
      },
      tableData3: [{
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-08',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-06',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }],
        multipleSelection: [],
      show: true,
      kg:false,
    };
  },
  methods: {
    add() {},
    close() {
      this.show = false;
      this.$emit("getshow", this.show);
    },
    cancel(){
        this.show = false;
      this.$emit("getshow", this.show);
    },
    toggleSelection(rows) {
        if (rows) {
          rows.forEach(row => {
            this.$refs.multipleTable.toggleRowSelection(row);
          });
        } else {
          this.$refs.multipleTable.clearSelection();
        }
      },
      handleSelectionChange(val) {
        this.multipleSelection = val;
      },
      sendParent() {
      this.show = false
      this.$emit("getshow", this.show);
      
    },
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
  height: 780px;
  position: absolute;
  left: 240px;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 999;
  margin: 100px auto;
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
.box {
  /* height: 500px; */
  padding: 32px;
}
/* input */
.change_w {
  width: 230px;
}
.box1,.box2{
  color: #333;
  width: 100%;
  padding: 32px 0 32px 0px;
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 0 20px #eee;
}
.box2{
    height: 286px;
    margin-top:32px;
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
.el-button {
  background: none;
  border: 1px solid #f1f1f1;
  color: #c49a5b;
  width: 112px;
  height: 40px;
  font-size: 16px;
}
.ok,.btn_cha{
  background: #c49a5b;
  color: #fff;
  margin-top: 32px;
  margin-left: 48px;
}
.btn_cha{
    width: 96px;
    height: 32px;
    float: right;
    margin-right: 60px;
    margin-top: 0px;
    line-height: 8px;
   
}
.item{
  margin-left: 32px
}
.cancel{
  margin-left: 100px;
  border:1px solid #c49a5b;
}
.ok:hover {
  background: #917f68;
}
.cancel:hover {
  background: #FFECD1;
}
.change_w:focus {
  border-color: #c49a5b;
}
.change_w:hover {
  border-color: #c49a5b;
}

</style>

