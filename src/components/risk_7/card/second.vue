<template>
    <div class="app">
        <el-button class="btn" @click="sendParent">新建</el-button>
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
.el-button {
  float: right;
  background: #c49a5b;
  color: #ffffff;
  border-color: #c49a5b;
  margin-top: -10px;
  margin-right: 32px;
}

.btn {
  width: 110px;
  height: 38px;
}

.btn:hover {
  background: #928068;
}
</style>

