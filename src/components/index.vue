<template>
<div class="app">
 <el-container>
    <el-header>Header</el-header> 
 

</el-container>
  
</div>






</template>
<script>
export default {
    name : "register",
    data(){
        return {

        }
    }
}
</script>

<style>
  .el-header, .el-footer {
    background-color: #928068;
    color: #fff;
    line-height: 60px;
  }
  .el-aside {
    background-color: #928068;
    color: #fff;
    text-align: center;
    line-height: 200px;
  }
  
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
  
  body > .el-container {
    margin-bottom: 40px;
  }
  
  .el-container:nth-child(5) .el-aside,
  .el-container:nth-child(6) .el-aside {
    line-height: 260px;
  }
  
  .el-container:nth-child(7) .el-aside {
    line-height: 320px;
  }
</style>



