import Home from '../components/Home.vue'
import AddFacility from '../components/facility/AddFacility.vue'
import FacilityList from '../components/facility/FacilityList.vue'
import EditFacility from '../components/facility/EditFacility.vue'

export const routes = [
  { path: '', component: Home, name: 'home' },
  { path: '/facilities/add', component: AddFacility, name: 'addFacility' },
  { path: '/facilities/list', component: FacilityList, name: 'facilityList' },
  { path: '/facilities/:id/edit', component: EditFacility, name: 'editFacility' }
]
