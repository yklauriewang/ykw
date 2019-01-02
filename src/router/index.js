import Vue from 'vue'
import Router from 'vue-router'
import About from '@/components/About'
import Project from '@/components/Project'
import Contact from '@/components/Contact'
import Project1 from '@/components/projects/Project1'
import Project2 from '@/components/projects/Project2'
import Project3 from '@/components/projects/Project3'
import Project4 from '@/components/projects/Project4'
import Project5 from '@/components/projects/Project5'
import Project6 from '@/components/projects/Project6'


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
    },
    {
      path: '/project1',
      name: 'Project1',
      component: Project1
    },
    {
      path: '/project2',
      name: 'Project2',
      component: Project2
    },
    {
      path: '/project3',
      name: 'Project3',
      component: Project3
    },
    {
      path: '/project4',
      name: 'Project4',
      component: Project4
    },
    {
      path: '/project5',
      name: 'Project5',
      component: Project5
    },
    {
      path: '/project6',
      name: 'Project6',
      component: Project6
    }
  ]
})
