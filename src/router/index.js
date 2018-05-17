import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import tree from '@/components/element/tree'
import page from '@/components/element/page'
import alert from '@/components/element/page'
import layout from '@/components/element/layout'
import layout1 from '@/components/element/left-lay-center-right'
import icon from '@/components/element/icon'
import form from '@/components/element/form'
import progress from '@/components/element/progress'
import loading from '@/components/element/loading'
import dropdown from '@/components/element/dropdown'

import checkbox from '@/components/element/form/checkbox'
import input from '@/components/element/form/input'
import select from '@/components/element/form/select'
import align from '@/components/element/form/alignment'
import upload from '@/components/element/form/upload'
import color from '@/components/element/form/colorPicker'

/*布局*/
import layoutHolyGrail from '@/components/plug-in-unit/layout_holy-grail'//左中右

//练习
import eApp from '@/components/practice/app'
import filters from '@/components/plug-in-unit/filters'
import jsonp from '@/components/plug-in-unit/Hello'

//组件
import group from '@/components/group/group'

//优质组件
import userful from '@/components/userful'
//iveiw
import iview from '@/components/iview'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/iview',
      name: 'iview',
      component: iview
    },
    {
      path: '/userful',
      name: 'userful',
      component: userful
    },
    {
      path: '/jsonpBaidu',
      name: 'jsonp',
      component: jsonp
    },
    {
      path: '/group',
      name: 'group',
      component: group
    },
    {
      path: '/filters',
      name: 'filters',
      component: filters
    },
    {
      path:'/eApp',
      name:'eApp',
      component: eApp,
    },
    {
      path: '/form',
      name: 'form',
      component: form,
      children:[
       {
         path:'/form/color',
        name:'color',
        component:color
       },
       {
         path:'/form/upload',
        name:'upload',
        component:upload
       },
       {
         path:'/form/align',
        name:'align',
        component:align
       },
       {
         path:'/form/checkbox',
        name:'checkbox',
        component:checkbox
       },
       {
         path:'/form/input',
        name:'input',
        component:input
       },
       {
         path:'/form/select',
        name:'select',
        component:select
       },
      ]
    },
    {
      path: '/layoutHolyGrail',
      name: 'layoutHolyGrail',
      component: layoutHolyGrail
    },
    {
      path: '/dropdown',
      name: 'dropdown',
      component: dropdown
    },
    {
      path: '/loading',
      name: 'loading',
      component: loading
    },
    {
      path: '/progress',
      name: 'progress',
      component: progress
    },
    {
      path: '/icon',
      name: 'icon',
      component: icon
    },
    {
      path: '/layout1',
      name: 'layout1',
      component: layout1
    },
    {
      path: '/layout',
      name: 'layout',
      component: layout
    },
    {
      path: '/tree',
      name: 'tree',
      component: tree
    },
    {
      path: '/page',
      name: 'page',
      component: page
    },
    {
      path: '/h',
      name: 'Hello',
      component: Hello
    },
    {
      redirect:'/h',
      path:'/'
    }
  ]
})
