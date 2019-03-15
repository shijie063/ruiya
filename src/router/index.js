import Vue from 'vue'
import Router from 'vue-router'
import getPassWord from '@/components/login/getPassWord' //找回密码
import test from '@/components/login/test'  //验证
import login from '@/components/login/login' // 登陆
import bar from '@/components/bar/bar' //导航列表
import indexNoMes from '@/components/indexNoMes/indexNoMes' //首页



import addUserClue from '@/components/userInfo_2/addUserClue'
import userList from '@/components/userInfo_2/userList'
import userDetail from '@/components/userInfo_2/userDetail'

import visit from '@/components/accountOpen_3/visit'
import success from '@/components/accountOpen_3/success'
import upload from '@/components/accountOpen_3/upload'
import entryInformation from '@/components/accountOpen_3/entryInformation'
import userMessage1 from '@/components/accountOpen_3/userMessage1'
import userMessage2 from '@/components/accountOpen_3/userMessage2'
import userMessage3 from '@/components/accountOpen_3/userMessage3'
import look from '@/components/accountOpen_3/look'

import userMessage from '@/components/inquire_4/userMessage' //客户信息
import upload4 from '@/components/inquire_4/upload4'
import inquireList from '@/components/inquire_4/inquireList'

import changeList from '@/components/informationChange_5/changeList'
import dataUploadDetails from '@/components/informationChange_5/dataUploadDetails'
import dataUploadDetailsUserMessage from '@/components/informationChange_5/dataUploadDetailsUserMessage'
import imformationLook from '@/components/informationChange_5/imformationLook'
import imformationLook1 from '@/components/informationChange_5/imformationLook1'

import gift from '@/components/gift_6/gift'

import risk from '@/components/risk_7/risk'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [{
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/getPassWord',
      name: 'getPassWord',
      component: getPassWord
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/bar',
      name: 'bar',
      component: bar,
      // redirect:indexNoMes,
      children: [{
          path: '/indexNoMes', //首页
          name: 'indexNoMes',
          component: indexNoMes
        },
        {
          path: '/addUserClue', //userInfo_2新增用户线索首页
          name: 'addUserClue',
          component: addUserClue,
        },
        {
          path: '/userDetail', //userInfo_2 客户信息组件（可以点击）
          name: 'userDetail',
          component: userDetail,
          props: true,
        },
        {
          path: '/userList', //userInfo_2下面列表组件
          name: 'userList',
          component: userList,
        },

        {
          path: '/entryInformation', //accountOpen_3下面的选项卡
          name: 'entryInformation',
          component: entryInformation
        },
        {
          path: '/visit', //accountOpen_3客户回访
          name: 'visit',
          component: visit,
        },
        {
          path: '/upload', //accountOpen_3上传证件组件
          name: 'upload',
          component: upload
        },
        {
          path: '/userMessage1',//accountOpen_3开户下面附件上传详情页
          name: 'userMessage1',
          component: userMessage1,
        },
        {
          path: '/userMessage2',//accountOpen_3开户下面 审核页面
          name: 'userMessage2',
          component: userMessage2,
        },
        {
          path: '/userMessage3', //accountOpen_3开户下面  回访
          name: 'userMessage3',
          component: userMessage3,
        },
        {
          path: '/look',  //accountOpen_3开户下面 查看
          name: 'look',
          component: look
        },
        {
          path: '/success',
          name: 'success',
          component: success//accountOpen_3开户下面  回访成功
        },

        {
          path: '/upload4', //inquire_4 客户信息列表查询下方上传组件
          name: 'upload4',
          component: upload4
        },
        {
          path: '/inquireList', //inquire_4客户信息查询首页
          name: 'inquireList',
          component: inquireList,
        },
        {
          path: '/userMessage', //inquire_4客户信息查询首页
          name: 'userMessage',
          component: userMessage,
        },

        {
          path: '/changeList', //informationChange_5 客户信息变更首页
          name: 'changeList',
          component: changeList,
        },
        {
          path: '/dataUploadDetails', //informationChange_5客户信息变更上传材料附件页  5.4
          name: 'dataUploadDetails',
          component: dataUploadDetails,
        },
        {
          path: '/dataUploadDetailsUserMessage',//informationChange_5客户信息变更上传材料附件页  5.5
          name: 'dataUploadDetailsUserMessage',
          component: dataUploadDetailsUserMessage,
        }, 
        {
          path: '/imformationLook',//informationChange_5客户信息变更查看（营业部运营）5.8
          name: 'imformationLook',
          component: imformationLook,
        }, 
        {
          path: '/imformationLook1',//informationChange_5客户信息变更查看（客户经理）5.7
          name: 'imformationLook1',
          component: imformationLook1,
        }, 
        
        
        
        {
          path: '/gift',  //客户赠与首页
          name: 'gift',
          component: gift
        },


        {
          path: '/risk',  //风险测评首页
          name: 'risk',
          component: risk
        }

      ]
    },

  ]
})
