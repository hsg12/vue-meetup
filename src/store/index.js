import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: 'https://www.cornellclubnyc.com/Images/Library/slider-2.jpg',
        id: '1',
        title: 'Meetup in New-York',
        date: '2018-09-15'
      },
      {
        imageUrl: 'https://odis.homeaway.com/odis/destination/89743017-322b-4941-a653-9f404eabda04.hw1.jpg',
        id: '2',
        title: 'Meetup in Paris',
        date: '2019-02-20'
      },
      {
        imageUrl: 'http://www.ibsa-master.com/fileadmin/_processed_/0/c/csm_Study_in_Moscow_MBA_Master_d22e7f9236.jpg',
        id: '3',
        title: 'Meetup in Moscow',
        date: '2019-10-23'
      }
    ],
    user: {
      id: 'someUserId',
      registeredMeetups: ['1'] // id for first meetup
    }
  },
  mutations: {
    createMeeetup (state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeeetup ({commit}, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date
      }
      commit('createMeeetup', meetup)
    }
  },
  getters: {
    loadedMeetups (state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date // will sort meetups by date
      })
    },
    featuredMeetups (state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup (state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
