import Vue from 'vue'
import Router from 'vue-router'
import Top from '@/components/Top'
import EventCreate from '@/components/EventCreate'
import Participate from '@/components/Participate'
import Event from '@/components/Event'
import Room from '@/components/Room'
import Organizer from '@/components/Organizer'
import EventEdit from '@/components/EventEdit'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Top',
      component: Top
    },
    {
      path: '/event-create',
      name: 'EventCreate',
      component: EventCreate
    },
    {
      path: '/participate',
      name: 'Participate',
      component: Participate
    },
    {
      path: '/event',
      name: 'Event',
      component: Event
    },
    {
      path: '/room',
      name: 'Room',
      component: Room
    },
    {
      path: '/organizer',
      name: 'Organizer',
      component: Organizer
    },
    {
      path: '/event-edit',
      name: 'EventEdit',
      component: EventEdit
    }
  ]
})
