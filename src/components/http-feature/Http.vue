<template>
  <div>
    <app-header
      @listFacilities="handleListFacilities">
    </app-header>
    <app-add-facility
      :facility="facility"
      :resourceTypeList="uiData.resourceTypeList"
      @addFacility="handleAddFacility">
    </app-add-facility>
    <app-facility-list
      :facilityList="facilityList"
      @destroyFacility="handleDestroyFacility"
      class="mt-3">
    </app-facility-list>
  </div>
</template>

<script>
import AddFacility from './AddFacility.vue'
import Header from './Header.vue'
import FacilityList from './FacilityList.vue'

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
      facilityList: [],
      uiData: {
        resourceTypeList: ['Medical Assistance', 'Fire Station',
          'Police Station', 'Motor and Traffic Assistance',
          'Red Cross', 'National Disaster Hotline']
      }
    }
  },
  components: {
    appAddFacility: AddFacility,
    appHeader: Header,
    appFacilityList: FacilityList
  },
  methods: {
    handleAddFacility (facility) {
      this.facility = facility
      this.$http.post('http://127.0.0.1:3000/facilities', this.facility)
        .then(res => {
          console.log({ res })
          this.handleListFacilities()
        })
        .catch(err => {
          console.log({ err })
        })
    },
    handleListFacilities (isVerified) {
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
    handleDestroyFacility (id) {
      this.$http.delete(`http://127.0.0.1:3000/facilities/${id}`)
        .then(res => {
          console.log({ res })
          this.handleListFacilities()
        })
        .catch(err => {
          console.log({ err })
        })
    }
  },
  mounted () {
    this.handleListFacilities()
  }
}
</script>
