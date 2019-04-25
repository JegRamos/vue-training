<template>
  <v-toolbar dark color="red" class="mb-3" app dense>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>
        <h4>MEVN SPRINT: <span class="font-weight-light">CRUD APP</span></h4>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat>ADD FACILITY</v-btn>
        <v-btn @click="listFacilities" flat>LIST FACILITIES</v-btn>
        <v-btn flat>EDIT FACILITY</v-btn>
      </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  methods: {
    listFacilities () {
      this.$emit('listFacilities', true)
    }
  }
}
</script>
