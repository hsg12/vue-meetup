<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-carousel class="pointer">
          <v-carousel-item
            v-for="meetup in meetups"
            :key="meetup.id"
            :src="meetup.imageUrl"
            @click.native="onLoadMeetup(meetup.id)"
          >
            <div class="title">{{ meetup.title }}</div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="mt-3">
      <v-flex xs12 sm6 class="text-xs-center text-sm-right">
        <v-btn large router :to="{name: 'meetups'}" color="purple darken-4" dark>Explore Meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-xs-center text-sm-left">
        <v-btn large router :to="{name: 'createMeetup'}" color="purple darken-4" dark>Organize Meetup</v-btn>
      </v-flex>
    </v-layout>

    <v-layout row wrap class="mt-3">
      <v-flex xs12 class="text-xs-center">
        <p>Join our meetups!</p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      meetups: [
        {imageUrl: 'https://www.cornellclubnyc.com/Images/Library/slider-2.jpg', id: '1', title: 'Meetup in New-York'},
        {imageUrl: 'https://odis.homeaway.com/odis/destination/89743017-322b-4941-a653-9f404eabda04.hw1.jpg', id: '2', title: 'Meetup in Paris'},
        {imageUrl: 'http://www.ibsa-master.com/fileadmin/_processed_/0/c/csm_Study_in_Moscow_MBA_Master_d22e7f9236.jpg', id: '3', title: 'Meetup in Moscow'}
      ]
    }
  },
  methods: {
    onLoadMeetup (meetupId) {
      //this.$router.push('/meetup/' + meetupId)
      this.$router.push({name: 'meetup', params: {id: meetupId}})
    }
  }
}
</script>

<style scoped>
  .title {
    position: absolute;
    bottom: 50px;
    left: 50%;
    transform: translate(-50%, 0);
    padding: 5px 15px;
    background-color: rgba(0,0,0,.5);
    color: #fff;
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  }
</style>
