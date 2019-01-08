<template>
  <div id="photos">
    <div class="section-title">Featured Photos</div>
    <v-layout row wrap class="app-container mb-5">
      <v-flex xs12 v-for="photo in photos.featuredPhotos" :key="photo.title">
        <photo-card :item="photo"></photo-card>
      </v-flex>
      <v-flex xs12 style="display: flex; align-items: center;" class="mb-4">
        <div class="more-title">More Photos</div>
        <v-divider class="ml-4"></v-divider>
      </v-flex>
      <v-flex xs12>
        <template v-for="(category, index) in allCategories">
          <carousel :index="index" navColor="white">
            <template v-for="photo in category.category">
              <img class="photos" :src="photo.src" style="height:25vh; vertical-align: middle;"/>
            </template>
          </carousel>
        </template>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { Carousel, PhotoCard } from '@/components'
import { photos } from '@/config.js'

const name = 'Photos'

const components = {
  Carousel,
  PhotoCard
}

const computed = {
  photos () {
    return photos
  },
  allCategories () {
    const categories = []
    const tags = ['nature', 'animal', 'people', 'misc']
    tags.forEach(tag => {
      let category = (this.photoset.filter((photo) => photo.tags.includes(tag))).reverse()
      categories.push({
        'name': tag,
        'category': category
      })
    })
    return categories
  }
}

export default {
  name,
  components,
  computed,
  data () {
    return {
      photoset: []
    }
  },
  created () {
    const API_KEY = process.env.VUE_APP_API_KEY
    const PHOTOSET_ID = process.env.VUE_APP_PHOTOSET_ID
    const USER_ID = process.env.VUE_APP_USER_ID

    const url = `https://api.flickr.com/services/rest/?method=flickr.photosets.getPhotos&api_key=${API_KEY}&photoset_id=${PHOTOSET_ID}&user_id=${USER_ID}&extras=tags&format=json`

    this.$http.jsonp(url, {
      jsonpCallback: 'jsonFlickrApi'
    }).then((data) => {
      const photos = data.data.photoset.photo
      photos.forEach((photo) => {
        let url = 'https://farm' + photo.farm + '.staticflickr.com/' + photo.server + '/' + photo.id + '_' + photo.secret + '.jpg'
        let obj = {
          src: url,
          tags: photo.tags
        }
        this.photoset.push(obj)
      })
    }, (error) => {
      console.log(error)
    })
  }
}
</script>

<style scoped>
  .photos {
    padding: 0.5px 0;
  }

  .photos:not(:first-child) {
    padding-left: 0.5px;
  }

  .photos:not(:last-child) {
    padding-right: 0.5px;
  }

  @keyframes photo-fade-in {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
</style>
