<template>
    <div class="app">
        <div class="h2">证明材料</div>
        <div class="box">
            <h3>开户<span>最新上传时间：{{date}}</span></h3>
            <div class="upload">
                <el-upload
                        class="upload-demo"
                        action=""
                        :on-exceed="handleExceed"
                        :limit="1"
                        :file-list="fileList">
                        <!-- <el-button size="small" type="primary" icon="el-icon-upload">点击上传</el-button> -->
                        <i class="el-icon-upload"></i>
                        <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>          
            </div>
            <div class="upload upload1">
                <el-upload
                        class="upload-demo"
                        action=""
                        :on-exceed="handleExceed"
                        :limit="1"
                        :file-list="fileList">
                        <!-- <el-button size="small" type="primary" icon="el-icon-upload">点击上传</el-button> -->
                        <i class="el-icon-upload"></i>
                        <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>          
            </div>
            <div class="upload upload1">
                <el-upload
                        class="upload-demo"
                        action=""
                        :on-exceed="handleExceed"
                        :limit="1"
                        :file-list="fileList">
                        <!-- <el-button size="small" type="primary" icon="el-icon-upload">点击上传</el-button> -->
                        <i class="el-icon-upload"></i>
                        <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>          
            </div>
            <h3>客户信息变更<span>最新上传时间：{{date}}</span></h3>
            <div class="upload">
                <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        
                        :on-exceed="handleExceed"
                        :limit="1"
                        :file-list="fileList">
                        <!-- <el-button size="small" type="primary" icon="el-icon-upload">点击上传</el-button> -->
                        <i class="el-icon-upload"></i>
                        
                        <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>
            </div>
            <div class="upload upload1">
                <el-upload
                        class="upload-demo"
                        action=""
                        :on-exceed="handleExceed"
                        :limit="1"
                        :file-list="fileList">
                        <!-- <el-button size="small" type="primary" icon="el-icon-upload">点击上传</el-button> -->
                        <i class="el-icon-upload"></i>
                        <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>          
            </div>
            <div class="upload upload1">
                <el-upload
                        class="upload-demo"
                        action=""
                        :on-exceed="handleExceed"
                        :limit="1"
                        :file-list="fileList">
                        <!-- <el-button size="small" type="primary" icon="el-icon-upload">点击上传</el-button> -->
                        <i class="el-icon-upload"></i>
                        <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>          
            </div>
            <h3 class="border_none"><span>最新上传时间：{{date}}</span></h3>
            <div class="upload">
                <el-upload
                        class="upload-demo"
                        action="https://jsonplaceholder.typicode.com/posts/"
                        
                        :on-exceed="handleExceed"
                        :limit="1"
                        :file-list="fileList">
                        <!-- <el-button size="small" type="primary" icon="el-icon-upload">点击上传</el-button> -->
                        <i class="el-icon-upload"></i>
                        
                        <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>
            </div>
            <div class="upload upload1">
                <el-upload
                        class="upload-demo"
                        action=""
                        :on-exceed="handleExceed"
                        :limit="1"
                        :file-list="fileList">
                        <!-- <el-button size="small" type="primary" icon="el-icon-upload">点击上传</el-button> -->
                        <i class="el-icon-upload"></i>
                        <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>          
            </div>
            <div class="upload upload1">
                <el-upload
                        class="upload-demo"
                        action=""
                        :on-exceed="handleExceed"
                        :limit="1"
                        :file-list="fileList">
                        <!-- <el-button size="small" type="primary" icon="el-icon-upload">点击上传</el-button> -->
                        <i class="el-icon-upload"></i>
                        <!-- <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div> -->
                </el-upload>          
            </div>
        </div>
        
    </div>
</template>
<script>
export default {
    name:'upload',
  data() {
    return {
      fileList: [],
      kkk: "",
      radio: "",
      textarea:'',
      date:'2017-09-7'
    };
  },
  methods: {
    handleExceed(files, fileList) {
      this.$message.warning(
        `当前限制选择 1 个文件，本次选择了 ${files.length} 个文件，共选择了 ${
          fileList.length
        } 个文件`
      );
    }
  }
};
</script>
<style scoped>
.box {
  color: #333;
  width: 100%;
  /* padding-top: 32px; */
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 0 20px #eee;
  padding-bottom: 32px;
}
.h2,
h2,
h3 {
    display: block;
  height: 16px;
  line-height: 16px;
  font-size: 16px;
  margin: 32px 0 16px 0;
  padding-left: 10px;
  border-left: 4px solid #c49a5b;
}
h3 {
  margin-left: 46px;
}
.upload {
  position: relative;
  padding-bottom: 32px;
  min-width: 320px;
  max-width: 400px;
  height: 48px;
  border: 1px solid #f1f1f1;
  margin: 0 48px 0 56px;
}
.el-icon-upload {
  position: absolute;
  top: 14px;
  left: 20px;
  font-size: 20px;
  color: #f1f1f1;
  float: left;
}
.el-icon-upload span {
  font-size: 12px;
}
.border_none{
  border:none
}
span{
  color: #666;
  font-size: 12px;
  position: absolute;
  left: 600px
}
.upload1{
  margin-top: 16px
}
</style>


