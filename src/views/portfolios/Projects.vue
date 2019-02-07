<template>
  <div id="projects">
    <div class="section-title">Featured Projects</div>
    <v-layout row wrap class="app-container">
      <v-flex xs12 v-for="(app, index) in apps.featuredApps" :key="app.title">
        <item-card :cardId="`app-${index}`" :item="app"></item-card>
      </v-flex>
      <v-flex xs12 style="display: flex; align-items: center;">
        <div class="more-title">More Projects</div>
        <v-divider class="ml-4"></v-divider>
      </v-flex>
      <v-flex xs12 sm6 v-for="(app, index) in apps.moreApps" :key="app.title">
        <item-card-preview :cardId="`app-${index + 2}`" :item="app"></item-card-preview>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { ItemCard, ItemCardPreview } from '@/components/card'
import { apps } from '@/config.js'

const components = {
  ItemCard,
  ItemCardPreview
}

const computed = {
  apps () {
    return apps
  }
}

export default {
  name: 'projects',
  components,
  computed
}
</script>
