<template>
  <v-dialog persistent width="350px" v-model="editDialog">
    
    <v-btn accent slot="activator">
      Edit Date
    </v-btn>
    <v-card>
      <v-container>

        <v-layout row wrap>
          <v-flex xs12>
            <v-card-title>Edit Meetup Date</v-card-title>
          </v-flex>
        </v-layout>

        <v-divider></v-divider>

        <v-layout row wrap>
          <v-flex xs12>
            <v-date-picker v-model="editableDate" style="width: 100%" actions>
              <template scope="{save, cancel}">
                <v-btn flat dark class="purple--text darken-4" @click.native="editDialog = false">Close</v-btn>
                <v-spacer></v-spacer>
                <v-btn flat dark class="purple--text darken-4" @click.native="onSaveChanges">Save</v-btn>
              </template>
            </v-date-picker>
          </v-flex>
        </v-layout>

      </v-container>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: ['meetup'],
  data () {
    return {
      editDialog: false,
      editableDate: null
    }
  },
  methods: {
    onSaveChanges () {
      const newDate = new Date(this.meetup.date)
      const newDay = new Date(this.editableDate).getUTCDate()
      const newMonth = new Date(this.editableDate).getUTCMonth()
      const newYear = new Date(this.editableDate).getUTCFullYear()

      newDate.setUTCDate(newDay)
      newDate.setUTCMonth(newMonth)
      newDate.setUTCFullYear(newYear)

      this.$store.dispatch('updateMeetupData', {
        id: this.meetup.id,
        date: newDate
      })
    }
  },
  created () {
    let date = new Date(this.meetup.date)
    let day = date.getUTCDate()
    if (day.toString().length === 1) {
      day = '0' + day
    }

    let month = date.getUTCMonth() + 1
    if (month.toString().length === 1) {
      month = '0' + month
    }

    let year = date.getUTCFullYear()
    this.editableDate = year + '-' + month + '-' + day
  }
}
</script>

<style>
  
</style>