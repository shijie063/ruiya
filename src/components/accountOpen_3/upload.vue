<template>
    <div class="app">
        <div class="h2">证明材料<span class="fz-12">请上传客户证件及开户申请表，支持图片和PDF格式，大小不超过2M</span></div>
        <div class="box">
            <h3>上传开户申请书</h3>
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
            <h3>上传身份证件</h3>
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
            <h3>上传其他材料</h3>
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
        </div>
        <h2>流程状态</h2>
        <div class="box">
            <div class="process"> 
                <div class="min_width">
                    <span>审核意见</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <el-radio v-model="radio" label="1">通过</el-radio>
                    <el-radio v-model="radio" label="2">驳回</el-radio><br/><br>
                    <span>客户回访</span>&nbsp;&nbsp;&nbsp;&nbsp;
                    <el-checkbox v-model="kkk" label="1">需要客户回访(不勾选，审核通过则开户成功)</el-checkbox>
                    <el-form class="form">
                            <el-form-item label="意见">
                                <el-input class="textarea" type="textarea" v-model="textarea"></el-input>
                            </el-form-item>
                    </el-form>
                <el-button class="btn">提交</el-button>
                </div>
              </div>
           <div class="botBox">
                  <div style="height: 300px;">
                    <el-steps direction="vertical" :active="0">
                      <el-step title="2018-06-02 16:32:12 集团运营王五审核客户开户信息" description="2018-06-02 16:32:12 集团运营王五审核客户开户信息"></el-step>
                      <el-step title="2018-06-02 16:32:12 集团运营王五审核客户开户信息" description="2018-06-02 16:32:12 集团运营王五审核客户开户信息"></el-step>
                      <el-step title="2018-06-02 16:32:12 集团运营王五审核客户开户信息" description="这是一段很长很长很长的描述性文字"></el-step>        
                    </el-steps>
                  </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: "upload",
  data() {
    return {
      fileList: [],
      kkk: "",
      radio: "",
      textarea: ""
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
.process {
  overflow: hidden;
  border-radius: 5px;
  box-shadow: 0 0 20px #eee;
  margin: 32px 48px 0 48px;
  padding: 0px 0 16px 32px;
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
  margin-top: 32px;
}
.btn {
  width: 112px;
  height: 40px;
  font-size: 16px;
  color: #fff;
  background: #c49a5b;
  border: none;
  margin-bottom: 20px;
  margin-left: 550px;
}
.el-button:hover {
  background: #928068 !important;
}
.el-step__description.is-process {
  width: 500px;
  height: 300px;
  background: #c49a5b;
}
.topBox,
.botBox {
  width: 100%;
  /* box-shadow: 0 0 20px #eee; */
  padding: 30px 0 32px 48px;
}
.topBox {
  margin-bottom: 30px;
}
.botBox {
  padding-bottom: 150px;
}
.fz-12 {
  font-size: 12px;
  color: #666;
}
</style>


