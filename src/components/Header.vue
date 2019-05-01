<template>
  <v-toolbar app>
    <v-toolbar-side-icon></v-toolbar-side-icon>
    <v-toolbar-title>Samsung321</v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" :to="{ name: 'home' }" flat exact><v-icon>home</v-icon></v-btn>
        </template>
        <span>Go to Home</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" :to="{ name: 'addFacility' }" flat exact><v-icon>note_add</v-icon></v-btn>
        </template>
        <span>Create new faciltiy</span>
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on }">
          <v-btn icon v-on="on" :to="{ name: 'facilityList' }" flat exact><v-icon>list_alt</v-icon></v-btn>
        </template>
        <span>List all facilities</span>
      </v-tooltip>
    </v-toolbar-items>
  </v-toolbar>
</template>
