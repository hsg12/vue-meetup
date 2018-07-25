<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 offset-sm1>
        <v-card v-for="meetup in meetups" :key="meetup.id" class="mb-4">
          <v-container fluid>
            <v-layout row>
              <v-flex xs6 sm5 md4>
                <v-card-media
                  :src="meetup.imageUrl"
                  height="200px"
                ></v-card-media>
              </v-flex>
              <v-flex xs6 sm7 md8>
                <v-card-title primary-title>
                  <div>
                    <h2 class="purple--text text--darken-4 ">{{ meetup.title }}</h2>
                    <div>{{ meetup.date }}</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat color="primary" :to="{name: 'meetup', params: {id: meetup.id}}">
                    <v-icon left>arrow_forward</v-icon>
                    View Meetup
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  computed: {
    meetups () {
      return this.$store.getters.loadedMeetups
    }
  }
}
</script>

<style>
  
</style>
