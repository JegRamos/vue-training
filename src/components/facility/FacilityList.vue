<template>
  <v-card style="border: solid black 1px" flat>
    <v-card-title>
      <v-layout row>
        <v-flex>
          <h1 class="text-xs-center">FACILITY LIST</h1>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-divider color="black"></v-divider>
    <v-card-text>
      <v-slide-x-transition group tag="div" class="layout row wrap" hide-on-leave> <!-- Fix for trans group on flex container -->
        <v-flex sm12 md6 v-for="facility in facilityList" :key="facility._id">
          <v-card class="ma-2" style="border: solid black 1px" flat>
            <v-card-title>
              <h3>Emergency Resource: <span class="font-weight-regular">{{ facility.emergencyResource }}</span></h3>
            </v-card-title>
            <v-divider color="black"></v-divider>
            <v-card-text>
              <p><strong>Resource Type: </strong>{{ facility.resourceType }}</p>
              <p><strong>Name: </strong>{{ facility.name }}</p>
              <p><strong>Address: </strong>{{ facility.address }}</p>
              <p><strong>City: </strong>{{ facility.city }}</p>
              <p><strong>Region: </strong>{{ facility.region }}</p>
              <p><strong>Longitude: </strong>{{ facility.longitude }}</p>
              <p><strong>Latitude: </strong>{{ facility.latitude }}</p>
              <p><strong>Telephone Number: </strong>{{ facility.telephoneNumber }}</p>
            </v-card-text>
            <v-toolbar flat color="white">
              <v-spacer></v-spacer>
              <v-btn :to="{ name: 'editFacility', params: { id: facility._id } }" color="warning" icon class="right">
                <v-icon>edit</v-icon>
              </v-btn>
              <v-btn @click="destroyFacility(facility._id)" color="error" icon class="right">
                <v-icon>delete</v-icon>
              </v-btn>
          </v-toolbar>
          </v-card>
        </v-flex>
      </v-slide-x-transition>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  data () {
    return {
      facilityList: []
    }
  },
  methods: {
    fetchFacilities () {
      this.$http.get('http://127.0.0.1:3000/facilities')
        .then(res => {
          return res.json()
        })
        .then(data => {
          this.facilityList = data.facilities.reverse()
          console.log(this.facilityList)
        })
        .catch(err => console.log({ err }))
    },
    destroyFacility (id) {
      this.$http.delete(`http://127.0.0.1:3000/facilities/${id}`)
        .then(res => {
          console.log({ res })
          this.fetchFacilities()
        })
        .catch(err => {
          console.log({ err })
        })
    }
  },
  created () {
    this.fetchFacilities()
  }
}
</script>
