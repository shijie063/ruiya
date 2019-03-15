<template>
    <div class="app">
         <!-- input框 -->
         <div class="topBox">
                <div class="topInput">
                    <el-row type="flex" class="row-bg" justify="center">
                        <el-col :span="12"><div class="grid-content bg-purple">
                            <el-form  ref="form" label-width="80px" size='small'>
                                <el-form-item label="客户姓名">
                                    <el-input class="input"></el-input>
                                </el-form-item>
                            </el-form>   
                        </div></el-col>
                        <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
                        <el-col :span="12"><div class="grid-content bg-purple">
                            <el-form  ref="form" label-width="80px" size='small'>
                                <el-form-item label="客户编号">
                                    <el-input class="input"></el-input>
                                </el-form-item>
                            </el-form> 
                        </div></el-col>
                    </el-row>
                    <!-- 客户编号与开户状态 -->
                        <el-row type="flex" class="row-bg" justify="center">
                            <el-col :span="12"><div class="grid-content bg-purple">
                                <el-form  ref="form" label-width="130px" class="item_change" size='small'>
                                    <el-form-item label="原客户经理">
                                        <el-input class="input"></el-input>
                                    </el-form-item>
                                </el-form>   
                            </div></el-col>
                            <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
                            <el-col :span="12"><div class="grid-content bg-purple">
                                <el-form  ref="form" label-width="130px" size='small' class="item_change">
                                    <el-form-item label="新客户经理">
                                        <el-input class="input"></el-input>
                                    </el-form-item>
                                </el-form> 
                            </div></el-col>
                        </el-row>

                        <!-- 创建日期和开户日期 -->
                        <el-row type="flex" class="row-bg" justify="center">
                            <el-col :span="12"><div class="grid-content bg-purple">
                                <el-form  ref="form" label-width="80px" size='small'>
                                    <el-form-item label="操作人">
                                    <el-input class="input"></el-input>
                                </el-form-item>
                                </el-form> 
                            </div></el-col>
                            <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
                            <el-col :span="12"><div class="grid-content bg-purple">
                                <el-form  ref="form" label-width="80px" size='small'>
                                      <el-form-item label="操作日期">
                                        <el-col :span="11">
                                        <el-form-item prop="date1">
                                            <el-date-picker class="input" type="date" placeholder="选择日期" v-model="ruleForm.date3" style="width: 90%;"></el-date-picker>
                                        </el-form-item>
                                        </el-col>
                                        <el-col class="line" :span="2">到</el-col>
                                        <el-col :span="11">
                                        <el-form-item prop="date2">
                                          <el-date-picker class="input" type="date" placeholder="选择日期" v-model="ruleForm.date4" style="width: 90%;"></el-date-picker>
                                        </el-form-item>
                                        </el-col>
                                    </el-form-item>
                                </el-form> 
                            </div></el-col>
                        </el-row>
                    <div class="check">
                        <el-row>
                            <el-button class="btn">查询</el-button>
                        </el-row>
                    </div>
                    </div>
                </div>
            </div>
        
</template>
<script>
export default {
  name: "second",

  data() {
    return {
      a: "",
      c: "",
      b: "",
      ruleForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        date3: "",
        date4: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      }
    };
  }
};
</script>

<style scoped>
.el-col {
  border-radius: 4px;
}
.grid-content {
  border-radius: 4px;
  min-height: 32px;
}
.el-select {
  display: block;
}
.el-input__prefix {
  display: none !important;
}
.topBox {
  width: 100%;
  padding: 32px 0;
  box-shadow: 0 0 20px #eee;
}
.topInput {
  width: 800px;
  padding-right: 50px;
}
.el-button {
  background: #c49a5b;
  color: #ffffff;
  border-color: #c49a5b;
}
.el-row {
  display: flex;
  justify-content: flex-end;
}
.input {
  width: 230px;
}
.line {
  text-indent: -3px;
}
.btn {
  width: 110px;
  height: 38px;
}
.btn:hover {
  background: #928068;
}
.input:focus {
  border-color: #c49a5b;
}
.input:hover {
  border-color: #c49a5b;
}
.item_change {
  margin-left: -50px;
}
.row-bg{
    padding-left: 32px
}
</style>

