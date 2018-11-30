<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex xs12 sm6 md4 v-for="(app, index) in apps" :key="index">
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
          description: 'App for live election results. I developed this app with one other person for work, I worked on the UI/UX design, frontend code, and developed all the maps and charts from scratch with d3'
        },
        {
          title: 'Statify',
          link: 'http://my-statify.ryanvitter.com/',
          github: 'https://github.com/rnvitter/my-statify',
          imageName: 'statify',
          images: 4,
          color: '#2bb355',
          tags: ['personal', 'vue.js', 'node.js'],
          description: 'App for discovering your top music over time and sharing it with friends. Created using vue, node, and the spotify api.'
        }
      ]
    }
  }
}
</script>
