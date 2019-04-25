<template>
  <v-card style="borderStyle: solid; borderColor: tomato; borderWidth: 1px">
    <v-card-title style="backgroundColor: tomato">
      <v-layout row>
        <v-flex>
          <h1 class="text-xs-center white--text heading">ADD FACILITY</h1>
        </v-flex>
      </v-layout>
    </v-card-title>
    <v-divider color="tomato"></v-divider>
    <v-card-text>
      <v-form>
        <v-container>
          <!-- EMERGENCY RESOURCE & RESOURCE TYPE -->
          <v-layout row wrap>
            <v-flex xs12 md6>
              <v-text-field color="red" label="EMERGENCY RESOURCE" v-model="facility.emergencyResource"></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-combobox
                v-model="facility.resourceType"
                :items="resourceTypeList"
                label="RESOURCE TYPE"
                color="error">
              </v-combobox>
            </v-flex>
          </v-layout>
          <!-- NAME & ADDRESS -->
          <v-layout row wrap>
            <v-flex xs12 md6>
              <v-text-field color="red" label="NAME" v-model="facility.name"></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field color="red" label="ADDRESS" v-model="facility.address"></v-text-field>
            </v-flex>
          </v-layout>
          <!-- CITY & REGION -->
          <v-layout row wrap>
            <v-flex xs12 md6>
              <v-text-field color="red" label="CITY" v-model="facility.city"></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field color="red" label="REGION" v-model="facility.region"></v-text-field>
            </v-flex>
          </v-layout>
          <!-- CITY & REGION -->
          <v-layout row wrap>
            <v-flex xs12 md6>
              <v-text-field color="red" label="LONGITUDE" v-model="facility.longitude"></v-text-field>
            </v-flex>
            <v-flex xs12 md6>
              <v-text-field color="red" label="LATITUDE" v-model="facility.latitude"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row wrap>
            <v-flex xs12 md6>
              <v-text-field color="red" label="TELEPHONE NUMBER" v-model="facility.telephoneNumber"></v-text-field>
            </v-flex>
          </v-layout>
          <v-layout row>
            <v-flex>
              <v-btn @click="addFacility" fab depressed dark color="mt-3 red right">
                <v-icon dark>save</v-icon>
              </v-btn>
            </v-flex>
          </v-layout>
        </v-container>
      </v-form>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: {
    facility: {
      type: Object,
      require: true
    },
    resourceTypeList: {
      type: Array,
      require: true
    }
  },
  methods: {
    addFacility () {
      this.$emit('addFacility', this.facility)
    }
  }
}
</script>
