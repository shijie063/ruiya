<template>
    <div class="app">
         <!-- input框 -->
         <div class="topBox">
                <div class="topInput">
                        <!-- 客户姓名与客户经理 -->
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
                                <el-form-item label="客户经理">
                                    <el-input class="input"></el-input>
                                </el-form-item>
                            </el-form> 
                        </div></el-col>
                    </el-row>
                    <!-- 客户编号与开户状态 -->
                        <el-row type="flex" class="row-bg" justify="center">
                            <el-col :span="12"><div class="grid-content bg-purple">
                                <el-form  ref="form" label-width="80px" size='small'>
                                    <el-form-item label="客户编号">
                                        <el-input class="input"></el-input>
                                    </el-form-item>
                                </el-form>   
                            </div></el-col>
                            <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
                            <el-col :span="12"><div class="grid-content bg-purple">
                                <el-form  ref="form" label-width="80px" size='small'>
                                    <el-form-item label="开户状态">
                                        <el-select class="input" placeholder="" v-model="b">
                                        <el-option label="已开户" value="shanghai"></el-option>
                                        <el-option label="未开户" value="beijing"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-form> 
                            </div></el-col>
                        </el-row>
                        <!-- 联系方式和证件号码 -->
                        <el-row type="flex" class="row-bg" justify="center">
                            <el-col :span="12"><div class="grid-content bg-purple">
                                <el-form  ref="form" label-width="80px" size='small'>
                                    <el-form-item label="联系方式">
                                        <el-input class="input"></el-input>
                                    </el-form-item>
                                </el-form>   
                            </div></el-col>
                            <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
                            <el-col :span="12"><div class="grid-content bg-purple">
                                <el-form  ref="form" label-width="80px" size='small'>
                                    <el-form-item label="证件号码">
                                        <el-input class="input"></el-input>
                                    </el-form-item>
                                </el-form> 
                            </div></el-col>
                        </el-row>
                        <!-- 渠道来源和营业部 -->
                         <el-row type="flex" class="row-bg" justify="center">
                            <el-col :span="12"><div class="grid-content bg-purple">
                                <el-form  ref="form" label-width="80px" size='small'>
                                    <el-form-item label="渠道来源" v-model="a">
                                        <el-select class="input" v-model="c" placeholder="">
                                        <el-option label="区域1" value="shanghai"></el-option>
                                        <el-option label="区域2" value="beijing"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-form>   
                            </div></el-col>
                            <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
                            <el-col :span="12"><div class="grid-content bg-purple">
                                <el-form  ref="form" label-width="80px" size='small'>
                                    <el-form-item label="营业部">
                                        <el-select class="input" placeholder="" v-model="a">
                                        <el-option label="区域1" value="shanghai"></el-option>
                                        <el-option label="区域2" value="beijing"></el-option>
                                        </el-select>
                                    </el-form-item>
                                </el-form> 
                            </div></el-col>
                        </el-row>
                        <!-- 创建日期和开户日期 -->
                        <el-row type="flex" class="row-bg" justify="center">
                            <el-col :span="12"><div class="grid-content bg-purple">
                                <el-form  ref="form" label-width="80px" size='small'>
                                     <el-form-item label="创建日期">
                                        <el-col :span="10">
                                        <el-form-item prop="date1">
                                            <el-date-picker class="input" type="date" placeholder="选择日期" v-model="ruleForm.date1" style="width: 90%;"></el-date-picker>
                                        </el-form-item>
                                        </el-col>
                                        <el-col class="line" :span="2">到</el-col>
                                        <el-col :span="10">
                                        <el-form-item prop="date2">
                                          <el-date-picker class="input" type="date" placeholder="选择日期" v-model="ruleForm.date2" style="width: 90%;"></el-date-picker>
                                        </el-form-item>
                                        </el-col>
                                    </el-form-item>
                                </el-form> 
                            </div></el-col>
                            <el-col :span="4"><div class="grid-content bg-purple-light"></div></el-col>
                            <el-col :span="12"><div class="grid-content bg-purple">
                                <el-form  ref="form" label-width="80px" size='small'>
                                      <el-form-item label="开户日期">
                                        <el-col :span="10">
                                        <el-form-item prop="date1">
                                            <el-date-picker class="input" type="date" placeholder="选择日期" v-model="ruleForm.date3" style="width: 90%;"></el-date-picker>
                                        </el-form-item>
                                        </el-col>
                                        <el-col class="line" :span="2">到</el-col>
                                        <el-col :span="10">
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
  name: "third",

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
  padding: 30px;
  box-shadow: 0 0 20px #eee;

}
.topInput {
  width: 800px;
  padding-right: 50px;
}
.el-button {
  float: right;
  background: #c49a5b;
  color: #ffffff;
  border-color: #c49a5b;
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
</style>

