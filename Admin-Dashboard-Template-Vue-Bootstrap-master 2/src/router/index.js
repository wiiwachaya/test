import Vue from 'vue'
import Router from 'vue-router'
import Home from '../view/Home'
import Contacts from '../view/Contacts'
import Profile from '../view/Profile'
import Task from '../view/Task'
import Calendar from '../view/Calendar'
import DaySpanVuetify from 'dayspan-vuetify'
import Test from '../view/Test'

Vue.use(DaySpanVuetify, {
  // options is vue definition, the resulting reactive component is stored in components as this.$dayspan or Vue.$dayspan
  data: {
    // data or computed to override
  },
  computed: {
    // data or computed to override
  },
  methods: {
    // methods to override
  }
})

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
      path: '/calendar',
      name: 'Calendar',
      component: Calendar,
      props: { page: 2 }
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
    },
    {
      path: '/test',
      name: 'Test',
      props: { page: 6 },
      component: Test
    }
  ]
})
