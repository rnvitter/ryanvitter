<template>
  <v-app>
    <v-content>
      <projects></projects>
      <!-- <photos></photos> -->
    </v-content>
  </v-app>
</template>

<script>
import { Photos, Projects } from './portfolios'

const components = {
  Photos,
  Projects
}

export default {
  name: 'App',
  components
}
</script>
