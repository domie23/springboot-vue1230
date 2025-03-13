import Vue from 'vue';
//配置路由
import VueRouter from 'vue-router'
Vue.use(VueRouter);
    // 解决多次点击左侧菜单报错问题
    const VueRouterPush = VueRouter.prototype.push
    VueRouter.prototype.push = function push (to) {
    return VueRouterPush.call(this, to).catch(err => err)
    }
//1.创建组件
import Index from '@/views/index'
import Home from '@/views/home'
import Login from '@/views/login'
import NotFound from '@/views/404'
import UpdatePassword from '@/views/update-password'
import pay from '@/views/pay'
import register from '@/views/register'
import center from '@/views/center'
import beifen from '@/views/modules/databaseBackup/beifen'
import huanyuan from '@/views/modules/databaseBackup/huanyuan'

     import users from '@/views/modules/users/list'
    import baojian from '@/views/modules/baojian/list'
    import dictionary from '@/views/modules/dictionary/list'
    import huodong from '@/views/modules/huodong/list'
    import huodongYuyue from '@/views/modules/huodongYuyue/list'
    import jiankang from '@/views/modules/jiankang/list'
    import laoren from '@/views/modules/laoren/list'
    import shenghuo from '@/views/modules/shenghuo/list'
    import shenghuoOrder from '@/views/modules/shenghuoOrder/list'
    import tudi from '@/views/modules/tudi/list'
    import tudiOrder from '@/views/modules/tudiOrder/list'
    import yiliao from '@/views/modules/yiliao/list'
    import yonghu from '@/views/modules/yonghu/list'
    import config from '@/views/modules/config/list'
    import dictionaryBaojian from '@/views/modules/dictionaryBaojian/list'
    import dictionaryHuodong from '@/views/modules/dictionaryHuodong/list'
    import dictionaryHuodongYuyueYesno from '@/views/modules/dictionaryHuodongYuyueYesno/list'
    import dictionaryJiankang from '@/views/modules/dictionaryJiankang/list'
    import dictionarySex from '@/views/modules/dictionarySex/list'
    import dictionaryShenghuo from '@/views/modules/dictionaryShenghuo/list'
    import dictionaryShenghuoOrder from '@/views/modules/dictionaryShenghuoOrder/list'
    import dictionaryTudi from '@/views/modules/dictionaryTudi/list'
    import dictionaryTudiOrder from '@/views/modules/dictionaryTudiOrder/list'





//2.配置路由   注意：名字
const routes = [{
    path: '/index',
    name: '首页',
    component: Index,
    children: [{
      // 这里不设置值，是把main作为默认页面
      path: '/',
      name: '首页',
      component: Home,
      meta: {icon:'', title:'center'}
    }, {
      path: '/updatePassword',
      name: '修改密码',
      component: UpdatePassword,
      meta: {icon:'', title:'updatePassword'}
    }, {
      path: '/pay',
      name: '支付',
      component: pay,
      meta: {icon:'', title:'pay'}
    }, {
      path: '/center',
      name: '个人信息',
      component: center,
      meta: {icon:'', title:'center'}
    }, {
        path: '/huanyuan',
        name: '数据还原',
        component: huanyuan
    }, {
        path: '/beifen',
        name: '数据备份',
        component: beifen
    }, {
        path: '/users',
        name: '管理信息',
        component: users
    }
    ,{
        path: '/dictionaryBaojian',
        name: '医疗保健类型',
        component: dictionaryBaojian
    }
    ,{
        path: '/dictionaryHuodong',
        name: '文娱活动类型',
        component: dictionaryHuodong
    }
    ,{
        path: '/dictionaryHuodongYuyueYesno',
        name: '报名状态',
        component: dictionaryHuodongYuyueYesno
    }
    ,{
        path: '/dictionaryJiankang',
        name: '身体情况',
        component: dictionaryJiankang
    }
    ,{
        path: '/dictionarySex',
        name: '性别类型',
        component: dictionarySex
    }
    ,{
        path: '/dictionaryShenghuo',
        name: '生活照料类型',
        component: dictionaryShenghuo
    }
    ,{
        path: '/dictionaryShenghuoOrder',
        name: '订单类型',
        component: dictionaryShenghuoOrder
    }
    ,{
        path: '/dictionaryTudi',
        name: '土地类型',
        component: dictionaryTudi
    }
    ,{
        path: '/dictionaryTudiOrder',
        name: '订单类型',
        component: dictionaryTudiOrder
    }
    ,{
        path: '/config',
        name: '轮播图',
        component: config
    }


    ,{
        path: '/baojian',
        name: '医疗保健',
        component: baojian
      }
    ,{
        path: '/dictionary',
        name: '字典',
        component: dictionary
      }
    ,{
        path: '/huodong',
        name: '文娱活动',
        component: huodong
      }
    ,{
        path: '/huodongYuyue',
        name: '活动报名',
        component: huodongYuyue
      }
    ,{
        path: '/jiankang',
        name: '健康档案',
        component: jiankang
      }
    ,{
        path: '/laoren',
        name: '老人',
        component: laoren
      }
    ,{
        path: '/shenghuo',
        name: '生活照料',
        component: shenghuo
      }
    ,{
        path: '/shenghuoOrder',
        name: '生活照料订单',
        component: shenghuoOrder
      }
    ,{
        path: '/tudi',
        name: '土地',
        component: tudi
      }
    ,{
        path: '/tudiOrder',
        name: '土地承包',
        component: tudiOrder
      }
    ,{
        path: '/yiliao',
        name: '医疗人员',
        component: yiliao
      }
    ,{
        path: '/yonghu',
        name: '乡村志愿者',
        component: yonghu
      }


    ]
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {icon:'', title:'login'}
  },
  {
    path: '/register',
    name: 'register',
    component: register,
    meta: {icon:'', title:'register'}
  },
  {
    path: '/',
    name: '首页',
    redirect: '/index'
  }, /*默认跳转路由*/
  {
    path: '*',
    component: NotFound
  }
]
//3.实例化VueRouter  注意：名字
const router = new VueRouter({
  mode: 'hash',
  /*hash模式改为history*/
  routes // （缩写）相当于 routes: routes
})

export default router;
