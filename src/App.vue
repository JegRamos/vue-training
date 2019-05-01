<template>
  <v-app>
    <v-content>
      <v-container>
        <app-header></app-header>
        <v-layout row justify-center>
          <v-flex>
            <v-slide-x-transition hide-on-leave>
              <router-view></router-view>
            </v-slide-x-transition>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    appHeader: Header
  },
  data () {
    return {
      //
    }
  }
}
</script>
