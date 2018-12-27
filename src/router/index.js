import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Project from '@/components/Project'
import Contact from '@/components/Contact'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'About',
      component: About,
      redirect: '/about'
    },
    {
      path: '/about',
      name: 'About',
      component: About
    },
    {
      path: '/project',
      name: 'Project',
      component: Project
    },
    {
      path: '/contact',
      name: 'Contact',
      component: Contact
    }
  ]
})
