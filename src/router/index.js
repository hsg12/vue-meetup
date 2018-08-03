import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import CreateMeetup from '@/components/Meetup/CreateMeetup'
import Meetups from '@/components/Meetup/Meetups'
import Meetup from '@/components/Meetup/Meetup'
import Profile from '@/components/User/Profile'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/meetup/new',
      name: 'createMeetup',
      component: CreateMeetup,
      beforeEnter: AuthGuard
    },
    {
      path: '/meetups',
      name: 'meetups',
      component: Meetups
    },
    {
      path: '/meetups/:id',
      name: 'meetup',
      props: true, // we can get id like props in component
      component: Meetup
    },
    {
      path: '/profile',
      name: 'profile',
      component: Profile,
      beforeEnter: AuthGuard
    },
    {
      path: '/signin',
      name: 'signin',
      component: Signin
    },
    {
      path: '/signup',
      name: 'signup',
      component: Signup
    }
  ],
  mode: 'history'
})
