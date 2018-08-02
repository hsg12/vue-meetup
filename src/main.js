import Vue from 'vue'
import App from './App'
import * as firebase from 'firebase'
import router from './router'
import Vuetify from 'vuetify'
import store from './store'
import 'vuetify/dist/vuetify.min.css'
import DateFilter from './filters/date'
import AlertCmp from './components/Shared/Alert.vue'

Vue.use(Vuetify)

Vue.filter('date', DateFilter)

Vue.config.productionTip = false

Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyBNmUjtcEEchYUtPhkxJpIDlODe4gt26v0',
      authDomain: 'meetup-project-78f3d.firebaseapp.com',
      databaseURL: 'https://meetup-project-78f3d.firebaseio.com',
      projectId: 'meetup-project-78f3d',
      storageBucket: ''
    })

    this.$store.dispatch('loadMeetups')
  }
})
