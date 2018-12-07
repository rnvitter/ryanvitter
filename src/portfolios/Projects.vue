<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12 v-for="(app, index) in apps" :key="index">
        <app-card :app="app"></app-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { AppCard } from '@/components'

const components = {
  AppCard
}

export default {
  components,
  data () {
    return {
      apps: [
        {
          title: 'Election Results',
          link: 'https://results.decisiondeskhq.com/',
          imageName: 'election-results',
          images: 6,
          color: '#FA3138',
          tags: ['work', 'vue.js', 'd3.js', 'python'],
          tagline: '2018 Live Results Dashboard for Primary and General Elections',
          description: 'I developed this app while working at 0ptimus with one other person. I worked on the UI/UX design, frontend code, and developed all the maps and charts from scratch with d3. We had upwards of 1,500 people on the site at a time during election night.'
        },
        {
          title: 'Statify',
          link: 'http://my-statify.ryanvitter.com/',
          github: 'https://github.com/rnvitter/my-statify',
          imageName: 'statify',
          images: 4,
          color: '#2bb355',
          tags: ['personal', 'vue.js', 'node.js'],
          tagline: 'Tool For Discovering Your Music Trends',
          description: 'App for discovering your top music over time and sharing it with friends. I created the entirety of this app as a personal project using vue, node, and the spotify and bitly apis.'
        }
      ]
    }
  }
}
</script>
