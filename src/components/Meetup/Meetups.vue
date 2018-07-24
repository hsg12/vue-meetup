<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm10 offset-sm1>
        <v-card>
          <v-container fluid>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media
                  src="https://www.cornellclubnyc.com/Images/Library/slider-2.jpg"
                  height="200px"
                ></v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <h2 class="purple--text text--darken-4 ">My Meetup</h2>
                    <div>12th May 2019</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat color="info" :to="{name: 'meetup', params: {id: 1}}">
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
  
</script>

<style>
  
</style>
