<template>
  <v-card style="borderStyle: solid; borderColor: tomato; borderWidth: 1px">
    <v-card-title style="backgroundColor: tomato">
      <v-layout row>
        <v-flex>
          <h1 class="text-xs-center white--text heading">FACILITY LIST</h1>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-divider color="tomato"></v-divider>
    <v-card-text>
      <v-slide-x-transition group tag="div" class="layout row wrap" hide-on-leave> <!-- Fix for trans group on flex container -->
        <v-flex sm12 md6 v-for="facility in facilityList" :key="facility._id">
          <v-card @click="destroyFacility(facility._id)" class="ma-2" style="borderStyle: solid; borderColor: tomato; borderWidth: 1px">
            <v-card-title>
              <h3>Emergency Resource: <span class="font-weight-regular">{{ facility.emergencyResource }}</span></h3>
            </v-card-title>
            <v-divider color="tomato"></v-divider>
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
          </v-card>
        </v-flex>
      </v-slide-x-transition>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    facilityList: {
      type: Array,
      required: true
    }
  },
  methods: {
    destroyFacility (id) {
      this.$emit('destroyFacility', id)
    }
  }
}
</script>
