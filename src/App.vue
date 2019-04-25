<template>
  <v-app>
    <v-content>
      <v-container>
        <v-layout row justify-center>
          <v-flex xs12 sm10 md8>
            <app-http></app-http>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import Http from './components/http-feature/Http.vue'

export default {
  name: 'App',
  components: {
    appHttp: Http
  },
  data () {
    return {
      //
    }
  }
}
</script>
