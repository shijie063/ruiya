<template>
    <div>
<!-- 客户信息列表页 -->
        <div class="message_bottom">
            <el-table
            class="radiu"
            :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
            
            style="width: 100%">
            <el-table-column
            prop="customer_number"
            label="客户编号">
            </el-table-column>
            <el-table-column
            prop="customer_name"
            label="客户名称">
            </el-table-column>
            <el-table-column
            prop="customer_phone"
            label="联系方式">
            </el-table-column>
            <el-table-column
            prop="account_status"
            label="客户状态">
            </el-table-column>
            <el-table-column
            prop="cfp_name"
            label="客户经理">
            </el-table-column>
            <el-table-column
            prop="create_date"
            label="创建日期">
            </el-table-column>
            <el-table-column
            prop="account_open_date"
            label="开户日期">
            </el-table-column>
            <el-table-column
            prop="operation"
            label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
              <!-- <el-button type="text" size="small">编辑</el-button> -->
            </template>
            </el-table-column>
            
            </el-table>
        </div>
        <div class="block">
        <el-pagination
            :page-size="this.pageSize"
            @current-change="current_change"
            :pager-Count = "4"
            layout="prev, pager, next, jumper"
            :total="this.tableData.length">
        </el-pagination>
        </div>
        
    </div>
</template>
<script>
import bus from '../../assets/eventBus'
import axios from '@/api/axios'
export default {
  data() {
    return {
       total: 0, //默认数据总数
       pageSize: 5, //每页的数据条数
       currentPage: 1, //默认开始页面
       tableData: [
      ],
      customer_id: null,
    };
   
  },

  methods:{
      current_change: function(currentPage) {
      this.currentPage = currentPage;
      },
      handleClick(row) {
        console.log(row);
        this.$router.push({
            name:'userDetail',
            params: {customer_id: row.id},
        })
      }
  },
  mounted(){
    let that = this
    bus.$on('userEvent', function(data){
    let final_result = []

      for (var line in data){
        console.log(line)
        console.log(data[line])
        let tmp_data = data[line]
        let formated_line = 
          { "id": tmp_data.id,
            "customer_number": tmp_data.vip_code,
          "customer_name": tmp_data.basic_info.real_name,
          "customer_phone": tmp_data.basic_info.phone,
          "account_status": tmp_data.account_status.intermediate,
          "cfp_name": tmp_data.cfp.username,
          "create_date":tmp_data.basic_info.create_datetime,
          "account_open_date": tmp_data.create_datetime
        }
        final_result.push(formated_line)  
      }
      console.log('final_result', final_result)
    that.tableData = final_result

    })
  },
  beforeDestroy(){
  bus.$off('userEvent')

  }
};
</script>
<style scoped>
.message_bottom {
  text-align: center;
  margin: 32px 0;
  color: #333;
  padding: 0 30px;
  box-shadow: 0 0 20px #eee;
}
.radiu {
  border-radius: 5px;
}
.el-input--prefix .el-input__inner {
  padding-left: 4px;
}
.block {
  float: right;
  margin-bottom: 32px;
}
.el-button{
  color: #c49a5b
}
.el-button:hover{
  background: none;
  border-color:rgba(1, 1, 1, 0)
}
</style>

