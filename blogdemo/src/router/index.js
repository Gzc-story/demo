import Vue from 'vue'
import Router from 'vue-router'
import mainpage from '@/components/pages/mainpage'
import blog from '@/components/pages/blog'
import slidebar from '@/components/pages/slidebar'
import "../animate.css";
Vue.use(Router)

export default new Router({
  routes: [
   {
      path: '/', 
      name: 'blog',
      component:blog,
    },
    {
      path:'/sli',
      name:"slide",
      component:slidebar
    },
    {
      path: '/main',
      name: 'mainpage',
      component:mainpage
    },
    {
      path:"*",redirect:"/blog"
    }
   
  ]
})
