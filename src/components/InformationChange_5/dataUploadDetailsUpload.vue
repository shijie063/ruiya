<template>
    <div class="app">
        <div class="h2">证明材料   <span class="fz-12">请上传客户证件及开户申请表，支持图片和PDF格式，大小不超过2M</span></div>
        <div class="box">
            <h3>上传变更申请书</h3>
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
            <h3>上传佐证材料</h3>
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
            <el-button class="btn">提交</el-button>
        </div>
        
    </div>
</template>
<script>
export default {
  name: "dataUploadDetailsUpload",
  data() {
    return {
      fileList: [],
      kkk: "",
      radio: ""
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
  padding-bottom: 12px;
}
.h2,
h3 {
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
.process {
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 0 20px #eee;
  margin: 32px 48px 0 48px;
  padding: 32px 0 16px 32px;
  font-size: 14px;
}
.textarea {
  max-width: 620px;
  min-width: 100px;
}
.form {
  margin-top: 32px;
}
.min_width {
  min-width: 966px;
}
.btn {
  width: 112px;
  height: 40px;
  font-size: 16px;
  color: #fff;
  background: #c49a5b;
  border: none;
  margin: 32px 0 20px 340px;
}
.el-button:hover {
  background: #928068 !important;
}
.el-step__description.is-process {
  width: 500px;
  height: 300px;
  background: #c49a5b;
}
.botBox_width {
  padding: 32px 48px;
}
.el-step__description.is-process {
  height: 50px;
  background: #c49a5b;
}
.botBox {
  padding-bottom: 32px;
  margin-bottom: 32px;
}
.fz-12 {
  font-size: 12px;
  color: #666;
}
.upload1{
    margin-top: 16px
}
</style>


