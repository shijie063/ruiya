<template>
    <div>
<!-- 客户信息列表页 -->
        <div class="message_bottom">
            <el-table
            class="radiu"
            :data="tableData.slice((currentPage-1)*pageSize,currentPage*pageSize)"
            
            style="width: 100%">
            <el-table-column
            prop="num"
            label="客户编号">
            </el-table-column>
            <el-table-column
            prop="name"
            label="客户姓名">
            </el-table-column>
            <el-table-column
            prop="tel"
            label="联系方式">
            </el-table-column>
            <el-table-column
            prop="status"
            label="申请状态">
            </el-table-column>
            <el-table-column
            prop="manaher"
            label="客户经理">
            </el-table-column>
            <el-table-column
            prop="data"
            label="创建日期">
            </el-table-column>
            <el-table-column
            prop="openData"
            label="开户日期">
            </el-table-column>
            <el-table-column
            prop="operating"
            label="操作">
            <template slot-scope="scope">
              <el-button @click="handleClick(scope.row)" type="text" size="small">回访</el-button>
              <!-- <el-button type="text" size="small">编辑</el-button> -->
            </template>
            </el-table-column>
            
            </el-table>
        </div>
        <div class="block">
        <el-pagination
            :page-size="this.pageSize"
            @current-change="current_change"
            pagerCount = 4
            layout="prev, pager, next, jumper"
            :total="this.tableData.length">
        </el-pagination>
        </div>
        
    </div>
</template>
<script>
export default {
  data() {
    return {
       total: 0, //默认数据总数
       pageSize: 5, //每页的数据条数
       currentPage: 1, //默认开始页面
      
       tableData: [
        {
          num: "2016-05-02",
          name: "王小虎1",
          tel: "12345678910",
          status:'未开户',
          manaher:'张三',
          data:'2018-08-01',
          openData:'2018-08-01',
          operating:'查看'
        },
        {
          num: "2016-05-02",
          name: "王小虎1",
          tel: "12345678910",
          status:'未开户',
          manaher:'张三',
          data:'2018-08-01',
          openData:'2018-08-01',
          operating:'查看'
        },
        {
          num: "2016-05-02",
          name: "王小虎1",
          tel: "12345678910",
          status:'未开户',
          manaher:'张三',
          data:'2018-08-01',
          openData:'2018-08-01',
          operating:'查看'
        },
        {
          num: "2016-05-02",
          name: "王小虎1",
          tel: "12345678910",
          status:'未开户',
          manaher:'张三',
          data:'2018-08-01',
          openData:'2018-08-01',
          operating:'查看'
        },
        {
          num: "2016-05-02",
          name: "王小虎1",
          tel: "12345678910",
          status:'未开户',
          manaher:'张三',
          data:'2018-08-01',
          openData:'2018-08-01',
          operating:'查看'
        },
        {
          num: "2016-05-02",
          name: "王小虎1",
          tel: "12345678910",
          status:'未开户',
          manaher:'张三',
          data:'2018-08-01',
          openData:'2018-08-01',
          operating:'查看'
        },
        {
          num: "2016-05-02",
          name: "王小虎1",
          tel: "12345678910",
          status:'未开户',
          manaher:'张三',
          data:'2018-08-01',
          openData:'2018-08-01',
          operating:'查看'
        },
        {
          num: "2016-05-02",
          name: "王小虎1",
          tel: "12345678910",
          status:'未开户',
          manaher:'张三',
          data:'2018-08-01',
          openData:'2018-08-01',
          operating:'查看'
        },
        
      ]
    };
  },
  methods:{
      current_change: function(currentPage) {
      this.currentPage = currentPage;
      },
      handleClick(row) {
        console.log(row);
        this.$router.push({
           name:'userMessage3'
        })
      },
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





