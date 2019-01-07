<template>
  <div id="projects">
    <div class="section-title">Featured Projects</div>
    <v-layout row wrap class="app-container">
      <v-flex xs12 v-for="(app, index) in featuredApps" :key="app.title">
        <item-card :cardId="`app-${index}`" :item="app" :src="getSrc(app.imageName)"></item-card>
      </v-flex>
      <v-flex xs12 style="display: flex; align-items: center;">
        <div class="more-title">More Projects</div>
        <v-divider class="ml-4"></v-divider>
      </v-flex>
      <v-flex xs12 sm6 v-for="(app, index) in moreApps" :key="app.title">
        <item-card-preview :cardId="`app-${index + 2}`" :item="app" :src="getSrc(app.imageName)"></item-card-preview>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { ItemCard, ItemCardPreview } from '@/components/card'
import { mapGetters } from 'vuex'

const components = {
  ItemCard,
  ItemCardPreview
}

const methods = {
  getSrc (img) {
    return require(`@/static/img/app-previews/${img}-min.jpg`)
  }
}

export default {
  name: 'projects',
  components,
  methods,
  data () {
    return {
      featuredApps: [
        {
          title: 'Election Results',
          link: 'https://results.decisiondeskhq.com/',
          imageName: 'election-results',
          tags: ['Javascript', 'Vue.js', 'D3', 'Python'],
          tagline: '2018 Live Election Night Dashboard',
          description: 'I developed this app while working at 0ptimus with one other person. I worked on the UI/UX design, frontend code, and developed all the maps and charts from scratch with d3. We had upwards of 1,500 people on the site at a time during election night.'
        },
        {
          title: 'Statify',
          link: 'http://my-statify.ryanvitter.com/',
          github: 'https://github.com/rnvitter/my-statify',
          imageName: 'statify',
          tags: ['Javascript', 'Vue.js', 'Node'],
          tagline: 'Tool For Discovering Your Music Trends',
          description: 'App for discovering your top music over time and sharing it with friends. I created the entirety of this app as a personal project using vue, node, and the spotify and bitly apis.'
        }
      ],
      moreApps: [
        {
          title: 'Election Forecasting',
          link: 'https://0ptimus.decisiondeskhq.com/',
          imageName: 'forecasting',
          tags: ['Javascript', 'Vue.js', 'D3', 'Python'],
          tagline: 'Election Forecasting for the 2018 Elections',
          // description: 'I developed this app while working at 0ptimus with one other person. I worked on the UI/UX design, frontend code, and developed all the maps and charts from scratch with d3. We had upwards of 1,500 people on the site at a time during election night.'
        },
        {
          title: 'Portfolio V1',
          link: 'http://v1.ryanvitter.com/',
          imageName: 'portfolioV1',
          tags: ['Javascript', 'Vue.js', 'Node'],
          tagline: 'The first version of my portfolio website'
        },
        {
          title: 'Bucketlist',
          link: null,
          imageName: 'coming-soon',
          tags: ['Javascript', 'Vue.js', 'Node'],
          tagline: 'Manage your travel bucket list and plan trips',
          // description: 'I developed this app while working at 0ptimus with one other person. I worked on the UI/UX design, frontend code, and developed all the maps and charts from scratch with d3. We had upwards of 1,500 people on the site at a time during election night.'
        },
      ]
    }
  }
}
</script>
