<template>
  <div id="photos">
    <div class="section-title">Featured Photos</div>
    <v-layout row wrap class="app-container mb-5">
      <v-flex xs12 v-for="photo in featuredPhotos" :key="photo.title">
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
import { Carousel, PhotoCard } from '@/components'
import { mapGetters } from 'vuex'

const name = 'Photos'

const components = {
  Carousel,
  PhotoCard
}

const computed = {
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
      photoset: [],
      featuredPhotos: [
        {
          title: 'The Black White and Grey',
          yourshot: 'https://yourshot.nationalgeographic.com/photos/10685273/',
          imageName: 'bald_eagle',
          location: 'Juneau, Alaska',
          description: 'This is one of my favorite photos that I have taken, it is of a bald eagle in Juneau, Alaska that was shot. What I love about this photo is the contrast created by the use of black and white, and the differences in highlights and shadows on the different sides of her face.'
        },
        {
          title: 'Purple Wave',
          unsplash: 'https://unsplash.com/photos/DzHihgxNiko',
          imageName: 'antelope',
          location: 'Antelope Canyon, Arizona',
          description: 'This shot was taken in Antelope Canyon, it was awarded one of the most viewed photos in Spring 2018 on Unsplash and currently has over 10,000,000 views.  I love how the rock formations give the impression of an ocean and the gradient from the orange to dark purple from the top left to bottom left.'
        },
      ]
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
