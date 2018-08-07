<template>
  <v-container>
    <v-layout row wrap v-if="loading">
      <v-flex xs12 class="text-xs-center">
        <v-progress-circular
        :size="70"
        :width="7"
        color="purple darken-4"
        indeterminate
      ></v-progress-circular>
      </v-flex>
    </v-layout>

    <v-layout row wrap v-else>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h3 class="purple--text text--darken-4">{{ meetup.title }}</h3>
            <template v-if="userIsCreator">
              <v-spacer></v-spacer>
              <app-edit-meetup :meetup="meetup"></app-edit-meetup>
            </template>
          </v-card-title>
          <v-card-media
            :src="meetup.imageUrl"
            height="400px"
          ></v-card-media>
          <v-card-text>
            <div>
              <strong>{{ meetup.date | date }} - {{ meetup.location }}</strong>
              <app-edit-meetup-date :meetup="meetup" v-if="userIsCreator"></app-edit-meetup-date>
              <app-edit-meetup-time :meetup="meetup" v-if="userIsCreator"></app-edit-meetup-time>
            </div>
            <hr class="my-3">
            <div>{{ meetup.description }}</div>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn dark class="purple darken-4">Register</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  props: ['id'], // we receive props from router
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    },
    userIsAuthenticated () {
      return this.$store.getters.user !== null && this.$store.getters.user !== undefined
    },
    userIsCreator () {
      if (!this.userIsAuthenticated) {
        return false
      }

      return this.$store.getters.user.id === this.meetup.creatorId
    },
    loading () {
      return this.$store.getters.loading
    }
  }
}
</script>

<style>
  
</style>
