<template>
  <div id="maps">
    <div class="section-title">Featured Maps</div>
    <v-layout row wrap class="app-container">
      <v-flex xs12 v-for="(map, index) in maps.featuredMaps" :key="map.title">
        <item-card
          :cardId="`map-${index}`"
          :item="map"
          :src="getSrc(map.imageName)"
          :showDetails="mobile">
        </item-card>
      </v-flex>
      <v-flex xs12 style="display: flex; align-items: center;">
        <div class="more-title">More Maps</div>
        <v-divider class="ml-4"></v-divider>
      </v-flex>
      <v-flex xs12 sm6 v-for="(map, index) in maps.moreMaps" :key="map.title">
        <item-card-preview
          :cardId="`map-${index + 2}`"
          :item="map"
          :src="getSrc(map.imageName)">
        </item-card-preview>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { ItemCard, ItemCardPreview } from '@/components/card'
import { maps } from '@/config.js'

const components = {
  ItemCardPreview,
  ItemCard
}

const computed = {
  ...mapGetters({
    mobile: 'ux/mobile'
  }),
  maps () {
    return maps
  }
}

const methods = {
  getSrc (img) {
    return require(`@/static/img/maps/${img}.jpg`)
  }
}

export default {
  name: 'maps',
  components,
  computed,
  methods
}
</script>
