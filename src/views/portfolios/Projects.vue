<template>
  <div>
    <div class="section-title">Projects</div>
    <v-divider></v-divider>
    <v-layout row wrap class="app-container">
      <v-flex xs12 v-for="app in featuredApps" :key="app.title">
        <app-card :item="app"></app-card>
      </v-flex>
      <v-flex xs12 style="display: flex; align-items: center;">
        <h3 style="font-size: 1.6em;">More Projects</h3>
        <v-divider class="ml-4"></v-divider>
      </v-flex>
      <v-flex xs12 sm6 v-for="app in moreApps" :key="app.title">
        <app-card-preview :item="app"></app-card-preview>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { AppCard, AppCardPreview } from '@/components'

const components = {
  AppCard,
  AppCardPreview
}

export default {
  name: 'projects',
  components,
  data () {
    return {
      featuredApps: [
        {
          title: 'Election Results',
          link: 'https://results.decisiondeskhq.com/',
          imageName: 'election-results',
          tags: ['work', 'vue', 'd3', 'python'],
          tagline: '2018 Live Election Night Dashboard',
          description: 'I developed this app while working at 0ptimus with one other person. I worked on the UI/UX design, frontend code, and developed all the maps and charts from scratch with d3. We had upwards of 1,500 people on the site at a time during election night.'
        },
        {
          title: 'Statify',
          link: 'http://my-statify.ryanvitter.com/',
          github: 'https://github.com/rnvitter/my-statify',
          imageName: 'statify',
          tags: ['personal', 'vue', 'node'],
          tagline: 'Tool For Discovering Your Music Trends',
          description: 'App for discovering your top music over time and sharing it with friends. I created the entirety of this app as a personal project using vue, node, and the spotify and bitly apis.'
        }
      ],
      moreApps: [
        {
          title: 'Election Forecasting',
          link: 'https://0ptimus.decisiondeskhq.com/',
          imageName: 'forecasting',
          tags: ['work', 'vue', 'd3', 'python'],
          tagline: 'Election Forecasting for the 2018 Elections',
          // description: 'I developed this app while working at 0ptimus with one other person. I worked on the UI/UX design, frontend code, and developed all the maps and charts from scratch with d3. We had upwards of 1,500 people on the site at a time during election night.'
        },
        {
          title: 'Bucketlist',
          link: null,
          imageName: 'coming-soon',
          tags: ['personal', 'vue', 'node'],
          tagline: 'Manage your travel bucket list and plan trips',
          // description: 'I developed this app while working at 0ptimus with one other person. I worked on the UI/UX design, frontend code, and developed all the maps and charts from scratch with d3. We had upwards of 1,500 people on the site at a time during election night.'
        },
      ]
    }
  }
}
</script>
