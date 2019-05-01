<template>
  <div>
    <v-slide-x-transition hide-on-leave>
      <div v-if="uiData.alertSuccess">
        <v-alert :value="uiData.alertSuccess" type="success" class="mb-3">
          FACILITY ADDED SUCCESSFULY
        </v-alert>
      </div>
    </v-slide-x-transition>
    <v-card flat style="border: solid black 1px">
      <v-card-title>
        <v-layout row>
          <v-flex>
            <h1 class="text-xs-center heading">ADD FACILITY</h1>
          </v-flex>
        </v-layout>
      </v-card-title>
      <v-divider color="black"></v-divider>
      <v-card-text>
        <v-form>
          <v-container>
            <!-- EMERGENCY RESOURCE & RESOURCE TYPE & NAME-->
            <v-layout row wrap>
              <v-flex xs12 md4>
                <v-text-field color="dark" label="EMERGENCY RESOURCE" v-model="facility.emergencyResource"></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-combobox
                  v-model="facility.resourceType"
                  :items="uiData.resourceTypeList"
                  label="RESOURCE TYPE"
                  color="dark">
                </v-combobox>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field label="NAME" color="dark" v-model="facility.name"></v-text-field>
              </v-flex>
            </v-layout>
            <!-- ADDRESS, CITY & REGION -->
            <v-layout row wrap>
              <v-flex xs12 md4>
                <v-text-field label="ADDRESS" color="dark" v-model="facility.address"></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field label="CITY" color="dark" v-model="facility.city"></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field label="REGION" color="dark" v-model="facility.region"></v-text-field>
              </v-flex>
            </v-layout>
            <!-- LONGITUDE, LATITUDE, TELEPHONE -->
            <v-layout row wrap>
              <v-flex xs12 md4>
                <v-text-field label="LONGITUDE" color="dark" v-model="facility.longitude"></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field label="LATITUDE" color="dark" v-model="facility.latitude"></v-text-field>
              </v-flex>
              <v-flex xs12 md4>
                <v-text-field label="TELEPHONE NUMBER" color="dark" v-model="facility.telephoneNumber"></v-text-field>
              </v-flex>
            </v-layout>
            <v-layout row>
              <v-flex>
                <v-btn @click="addFacility" depressed fab dark color="mt-2 success right">
                  <v-icon dark>save</v-icon>
                </v-btn>
              </v-flex>
            </v-layout>
          </v-container>
        </v-form>
      </v-card-text>
    </v-card>
  </div>
</template>

<script>
export default {
  data () {
    return {
      facility: {
        emergencyResource: '',
        resourceType: '',
        name: '',
        address: '',
        city: '',
        region: '',
        longitude: undefined,
        latitude: undefined,
        telephoneNumber: ''
      },
      uiData: {
        resourceTypeList: ['Medical Assistance', 'Fire Station',
          'Police Station', 'Motor and Traffic Assistance',
          'Red Cross', 'National Disaster Hotline'],
        alertSuccess: false
      }
    }
  },
  methods: {
    addFacility (facility) {
      this.$http.post('http://127.0.0.1:3000/facilities', this.facility)
        .then(res => {
          console.log({ res })
          this.uiData.alertSuccess = true
          this.resetAddForm()
        })
        .catch(err => {
          console.log({ err })
        })
    },
    resetAddForm () {
      for (let prop in this.facility) {
        if (this.facility.hasOwnProperty(prop)) {
          this.facility[prop] = ''
        }
      }
    }
  }
}
</script>
