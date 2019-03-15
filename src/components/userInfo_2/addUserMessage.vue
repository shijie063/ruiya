<template>
<div id="main" v-show="show">
    <div class="mengban"></div>
    
    <div class="Message">
                <div class="head">
                    <p>新增客户线索</p>
                    <i @click="close" class="el-icon-close"></i>
                </div>
                <div class="box">
                    <div class="box1">
                        <h2>基本信息</h2>
                        <el-form ref="form" :model="basic_info" label-width="80px" size="small">
                            <el-form-item class="item" label="客户姓名">
                                <el-input class="change_w" v-model="basic_info.real_name"></el-input>
                            </el-form-item>
                            <el-form-item class="item" label="联系方式">
                                <el-input class="change_w" v-model="basic_info.phone"></el-input>
                            </el-form-item>
                            <el-form-item class="item" label="性别" prop="resource">
                                <el-radio-group v-model="basic_info.sex">
                                <el-radio label="男"></el-radio>
                                <el-radio label="女"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item class="item" label="国家地区">
                                <el-select class="change_w" v-model="basic_info.country" placeholder="">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                                其他 <el-input style="width:90px" class="change_w other" v-model="basic_info.other"></el-input>
                            </el-form-item>
                            <el-form-item class="item" label="渠道来源">
                                <el-select class="change_w" v-model="basic_info.channel" placeholder="">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item class="item" label="客户经理">
                                <el-input class="change_w" v-model="cfp"></el-input>
                            </el-form-item>
                            <el-form-item class="item" label="出生日期">
                                <el-col :span="14">  
                                <el-date-picker type="date" class="change_w"  v-model="basic_info.birthday" style="width: 101%;"> </el-date-picker>
                                </el-col>
                            </el-form-item>
                            <el-form-item class="item" label="证件类型">
                                <el-select class="change_w" v-model="basic_info.card_type" placeholder="">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item class="item" label="证件号码">
                                <el-input class="change_w" v-model="basic_info.card_id"></el-input>
                            </el-form-item>
                                
                                <el-form-item
                                    class="item"
                                    prop="email"
                                    label="邮箱"
                                    :rules="[
                                    { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                                    { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }
                                    ]">
                                <el-input class="change_w" v-model="basic_info.email"></el-input>
                            </el-form-item>
                            <el-form-item  label-width="130px" class="item_change" label="是否有海外账户" prop="resource">
                                <el-radio-group v-model="basic_info.is_oversea">
                                <el-radio label="是"></el-radio>
                                <el-radio label="否"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item class="item" label="税收身份">
                                <el-select class="change_w" v-model="basic_info.tax_status" placeholder="">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item class="item" label="最高学历">
                                <el-select class="change_w" v-model="basic_info.education" placeholder="">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item class="item" label="财富测评">
                                <el-select class="change_w" v-model="basic_info.assessment" placeholder="">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item class="item" label="需求类型">
                                <el-select class="change_w" v-model="basic_info.demand" placeholder="">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="box2">
                        <h2>职业信息</h2>
                        <el-form ref="form" :model="job_info" label-width="80px" size="small">
                                <el-form-item class="item" label="职业">
                                    <el-select class="change_w" v-model="job_info.profession" placeholder="">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                    其他 <el-input class="other change_w" v-model="job_info.other2"></el-input>
                                </el-form-item>
                                <el-form-item class="item" label="行业">
                                    <el-select class="change_w" v-model="job_info.industry" placeholder="">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item class="item" label="单位名称">
                                    <el-input class="change_w" v-model="job_info.company"></el-input>
                                </el-form-item>
                        </el-form>
                    </div>
                    <div class="box3">
                        <h2>家庭信息</h2>
                        <el-form ref="form" :model="family_info" label-width="80px" size="small">
                            <el-form-item  label-width="130px" class="item item_change" label="家庭年收入">
                                <el-select class="change_w" v-model="family_info.home_income" placeholder="">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item class="item" label="婚姻状况">
                                    <el-select class="change_w" v-model="family_info.marriage" placeholder="">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label-width="130px" class="item item_change" label="谁是家庭经济支柱">
                                    <el-select class="change_w" v-model="family_info.home_money" placeholder="">
                                    <el-option label="区域一" value="shanghai"></el-option>
                                    <el-option label="区域二" value="beijing"></el-option>
                                    </el-select>
                                </el-form-item>
                                <el-form-item label-width="130px" class="item item_change" label="家庭成员">
                                
                                    <el-select class="change_w home" v-model="family_info.home_bind1" placeholder="关系">
                                    <el-option label="父亲" value="shanghai"></el-option>
                                    <el-option label="母亲" value="beijing"></el-option>
                                    </el-select>
                                    <el-select class="change_w home" v-model="family_info.home_sex1" placeholder="性别">
                                    <el-option label="男" value="shanghai"></el-option>
                                    <el-option label="女" value="beijing"></el-option>
                                    </el-select>
                                    <el-input class="other change_w home" v-model="family_info.home_age1" placeholder="年龄"></el-input>
                                    <el-input class="other change_w home" v-model="family_info.hone_name1" placeholder="姓名" ></el-input>
                                    <div class="add"></div>
                                    <br/>

                                    <el-select class="change_w home" v-model="family_info.home_bind2" placeholder="关系">
                                    <el-option label="父亲" value="shanghai"></el-option>
                                    <el-option label="母亲" value="beijing"></el-option>
                                    </el-select>
                                    <el-select class="change_w home" v-model="family_info.home_sex2" placeholder="性别">
                                    <el-option label="男" value="shanghai"></el-option>
                                    <el-option label="女" value="beijing"></el-option>
                                    </el-select>
                                    <el-input class="other change_w home" v-model="family_info.home_age2" placeholder="年龄"></el-input>
                                    <el-input class="other change_w home" v-model="family_info.home_name2" placeholder="姓名"></el-input>
                                    <div class="cut"></div> 
                                </el-form-item>
                        </el-form>
                    </div>
                    <div class="box4">
                        <h2>地址信息</h2>
                        <el-form ref="form" :model="address" label-width="80px" size="small">
                            <el-form-item  label-width="130px" class="item item_change" label="所在地区">
                                <el-select class="change_w" v-model="address.area" placeholder="">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>
                            <el-form-item class="item" label="详细地址">
                                <el-input class="change_w" v-model="address.load"></el-input>
                            </el-form-item>
                            <el-form-item class="item" label="邮政编码">
                                <el-input class="change_w" v-model="address.email_num"></el-input>
                            </el-form-item>
                            <el-form-item class="item" label="邮寄地址">
                                <el-input class="change_w" v-model="address.load_email"></el-input>
                            </el-form-item>
                        </el-form>
                    </div>
                    <div class="box5">
                        <h2>紧急联系人</h2>
                        <el-form ref="form" :model="emergency" label-width="80px" size="small">
                            <el-form-item class="item" label="姓名">
                                <el-input class="change_w" v-model="emergency.jjname"></el-input>
                            </el-form-item>
                            <el-form-item class="item" label="联系方式">
                                <el-input class="change_w" v-model="emergency.jjphone"></el-input>
                            </el-form-item>
                            <el-form-item   label="性别" prop="resource">
                                <el-radio-group v-model="emergency.jjsex">
                                <el-radio label="男"></el-radio>
                                <el-radio label="女"></el-radio>
                                </el-radio-group>
                            </el-form-item>
                            <el-form-item  label-width="130px" class="item item_change" label="与您的关系">
                                <el-select class="change_w" v-model="emergency.guanxi" placeholder="">
                                <el-option label="区域一" value="shanghai"></el-option>
                                <el-option label="区域二" value="beijing"></el-option>
                                </el-select>
                            </el-form-item>       
                        </el-form>
                    </div>
                    <div class="box6">
                        <h2>方便接听电话时间</h2>
                        <el-form ref="form" :model="emergency" label-width="80px" size="small">
                            <el-radio-group v-model="emergency.jjtime">
                                <el-radio class="dan dan1" label="工作日09:00-12:00"></el-radio>
                                <el-radio class="dan" label="工作日13:00-18:00"></el-radio>
                            </el-radio-group>
                            <el-form-item >
                                <el-button class="btn btn_cha" >查询</el-button>
                                <el-button class="btn btn_creat" @click="add">新建</el-button>
                            </el-form-item>
                        </el-form>
                    </div>
                </div>
            </div>
</div>
    
</template>
<script>
import axios from '@/api/axios'
export default {
  name: "assUserMessage",
  data() {
    return {
      basic_info: {//基本信息
        real_name:'zhangsan',
        phone:'',
        sex:'',
        country:'',
        channel:'',
        birthday:'',
        card_type:'',
        card_id:'',
        email:'',
        is_oversea:'',
        tax_status:'',
        education:'',
        assessment:'',
        demand:'',
        other:''
      }, 
    // basic_info: {//基本信息
    //     real_name:'',
    //     phone:'',
    //     sex:'',
    //     country:'',
    //     channel:'',
    //     birthday:'',
    //     card_type:'',
    //     card_id:'',
    //     email:'',
    //     is_oversea:'',
    //     tax_status:'',
    //     education:'',
    //     assessment:'',
    //     demand:'',
    //     other:''
    //   },
      cfp:'',
      job_info:{//职业信息
        profession:'',
        other2:'',
        industry:'',
        company:''

      },
      family_info:{//家庭信息
        home_income:'',
        marriage:'',
        home_money:'',
        home_bind1:'',
        home_sex1:'',
        home_sex2:'',
        home_age1:'',
        home_age2:'',
        home_name1:'',
        home_name2:'',
        home_bind2:''
      },
      address:{//地址信息
        area:'',
        email_num:'',
        load:'',
        load_email:''
      },
      emergency:{//紧急联系人
        jjname:'',
        jjphone:'',
        jjsex:'',
        guanxi:'',
        jjtime:''
      },
      show: true
    };
  },
  methods: {
    add() {
        axios.post('',{}).then(res=>{
            console.log(res)
        }).catch(err=>{
        console.log(error) 
        })
    },
    init(){      
    }
  },
  mounted(){
      axios.get('',{}).then(res=>{

      }).catch(err=>{
          console
      })
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
  /* display: none; */
  height: 800px;
  padding: 32px 0 32px 84px;
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
h2 {
  font-size: 16px;
  width: 200px;
  height: 16px;
  line-height: 16px;
  border-left: 4px solid #c49a5b;
  margin-bottom: 10px;
  padding-left: 8px;
  margin-left: -20px;
}
/* input */
.change_w {
  width: 230px;
}
.item {
  margin-top: -2px;
}

.box2 .other {
  width: 90px;
}
.home {
  padding-left: 0;
  width: 70px;
}
.box3 .other {
  width: 85px;
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
.dan {
  margin: 8px 0 0 10px;
}
.dan1 {
  padding-right: 32px;
}
.item_change {
  margin-left: -50px;
}
.el-button {
  background: none;
  border: 1px solid #f1f1f1;
  color: #c49a5b;
  width: 112px;
  height: 40px;
  font-size: 16px;
}
.btn_creat {
  background: #c49a5b;
  color: #fff;
  margin-top: 32px;
  margin-left: 72px;
}
.btn_cha {
  margin-left: -42px;
  border: 1px solid #c49a5b;
}
.btn_creat:hover {
  background: #917f68;
}
.btn_cha:hover {
  background: #ffecd1;
}
</style>

