<template>
  <div id="maps">
    <div class="section-title">Featured Maps</div>
    <v-layout row wrap class="app-container">
      <v-flex xs12 v-for="map in featuredMaps" :key="map.title">
        <map-card :item="map" :src="getSrc(map.imageName)"></map-card>
      </v-flex>
      <v-flex xs12 style="display: flex; align-items: center;">
        <div class="more-title">More Maps</div>
        <v-divider class="ml-4"></v-divider>
      </v-flex>
      <v-flex xs12 sm6 v-for="map in moreMaps" :key="map.title">
        <app-card-preview :item="map" :src="getSrc(map.imageName)" :hideTags="true"></app-card-preview>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { MapCard, AppCardPreview } from '@/components'
import { mapGetters } from 'vuex'

const components = {
  AppCardPreview,
  MapCard
}

const methods = {
  getSrc (img) {
    return require(`@/static/img/maps/${img}.jpg`)
  }
}

export default {
  name: 'maps',
  components,
  methods,
  data () {
    return {
      featuredMaps: [
        {
          title: '0ptimus Poster',
          link: '',
          imageName: '0ptimus_poster',
          tags: ['work', 'qgis', 'illustrator'],
          tagline: 'Visualizing the poltical and advertising landscape of the U.S.',
          description: 'A map I made for 0ptimus clients during the 2016 presidential campaign depicting designated market areas, congressional districts, and major cities. CDs are labled and DMAs are color coded in the key at the bottom, along with a graph of the top 30 DMAs. There are several insets for the major U.S. cities.'
        },
        {
          title: 'HDI and Terrorism',
          link: '',
          imageName: 'human_development_and_terrorism',
          tags: ['school', 'arcgis', 'illustrator'],
          tagline: 'Is the HDI Index correlated with terrorism?',
          description: 'I developed this poster for a group project my senior year. We looked at the correlation between the human development index of countries and prevalence of terrorism. I designed the poster by making the map the central part and using it to visually split it up by the regions we looked at.',
        }
      ],
      moreMaps: [
        {
          title: 'GDP vs SPI',
          link: '',
          imageName: 'gdp_vs_spi',
          tags: ['school', 'arcgis', 'illustrator'],
          tagline: 'Measuring the Success of Countries',
          description: ''
        },
        {
          title: 'The West Indies',
          link: '',
          imageName: 'west_indies_reference',
          tags: ['school', 'arcgis', 'illustrator'],
          tagline: 'A reference map for the west indies region',
          description: ''
        },
        {
          title: 'Google Trends & Political Issues',
          link: '',
          imageName: 'google_trends_political_issues',
          tags: ['school', 'arcgis', 'illustrator'],
          tagline: 'Can Google Trends Predict the Political Leanings of Geographies?',
          description: ''
        },
        {
          title: 'Texas Likely Voters',
          link: '',
          imageName: 'tx_likely_voters',
          tags: ['work', 'qgis', 'illustrator'],
          tagline: 'Finding Likely Voters By Congressional District',
          description: ''
        }
      ]
    }
  }
}
</script>
