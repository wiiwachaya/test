import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/Home'
import Contacts from '../view/Contacts'
import Profile from '../view/Profile'
import Task from '../view/Task'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      name: 'Home',
      component: Home,
      props: { page: 1 },
      alias: '/'
    },
    {
      path: '/profile',
      name: 'Profile',
      props: { page: 5 },
      component: Profile
    },
    {
      path: '/contacts',
      name: 'Contacts',
      props: { page: 3 },
      component: Contacts
    },
    {
      path: '/task',
      name: 'Task',
      props: { page: 4 },
      component: Task
    }
  ]
})
