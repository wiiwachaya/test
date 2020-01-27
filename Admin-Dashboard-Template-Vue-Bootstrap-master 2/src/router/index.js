import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/components/Dashboard'
import Profile from '@/components/Profile'
import Tables from '@/components/Tables'
import Maps from '@/components/Maps'
import Task from '../components/Task'
import BadGateway from '@/components/BadGateway'
// eslint-disable-next-line camelcase
import Task_Work from '../components/Task_Work'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      props: { page: 1 },
      alias: '/'
    },
    {
      path: '/profile',
      name: 'Profile',
      props: { page: 2 },
      component: Profile
    },
    {
      path: '/tables',
      name: 'Tables',
      props: { page: 3 },
      component: Tables
    },
    {
      path: '/maps',
      name: 'Maps',
      props: { page: 4 },
      component: Maps
    },
    {
      path: '/task',
      name: 'Task',
      props: { page: 5 },
      component: Task
    },
    {
      path: '/404',
      name: 'BadGateway',
      props: { page: 6 },
      component: BadGateway
    },
    {
      path: '/task_work',
      name: 'Task_Work',
      props: { page: 7 },
      component: Task_Work
    },
    {
      path: '*',
      props: { page: 8 },
      redirect: '/404'
    }
  ]
})
