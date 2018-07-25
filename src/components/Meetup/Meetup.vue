<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h4 class="purple--text text--darken-4">{{ meetup.title }}</h4>
          </v-card-title>
          <v-card-media
            :src="meetup.imageUrl"
            height="400px"
          ></v-card-media>
          <v-card-text>
            <div><strong>{{ meetup.date }} - Where it take place</strong></div>
            <br>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam dignissimos, consectetur corporis blanditiis rerum molestiae necessitatibus sint, provident illo distinctio animi, ea quas fuga fugiat nisi! Nostrum distinctio natus incidunt!
            </div>
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
      // let id = this.$route.params.id
      // return this.$store.getters.loadedMeetup(id)

      return this.$store.getters.loadedMeetup(this.id)
    }
  }
}
</script>

<style>
  
</style>
