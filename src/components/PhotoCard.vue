<template>
  <div class="item-card">
    <v-layout row wrap v-if="mobile">
      <v-flex xs12>
        <div>
          <div class="item-name-wrapper">
            <h2 class="item-name">
              {{ item.title }}
            </h2>
          </div>
          <div class="item-tagline">{{ item.location }}</div>
        </div>
      </v-flex>
      <v-flex xs12>
        <a :href="item.link" target=”_blank” style="text-decoration: none;">
          <img
            class="item-image item-image-override"
            :src="getSrc()"
            width="100%"
            height="auto">
          </img>
        </a>
        <div style="display: flex;" class="item-btns">
          <a :href="item.unsplash" target="_blank" class="item-link mr-3" v-if="item.unsplash">Unsplash</a>
          <a :href="item.yourshot" target="_blank" class="item-link" v-if="item.yourshot">Your Shot</a>
        </div>
      </v-flex>
    </v-layout>

    <v-layout row wrap v-else>
      <v-flex xs12 sm6>
        <a :href="item.link" target=”_blank” style="text-decoration: none;">
          <img
            class="item-image item-image-override"
            :src="getSrc()"
            width="100%"
            height="auto">
          </img>
        </a>
      </v-flex>
      <v-flex xs12 sm6 style="padding: 20px;">
        <div>
          <div class="item-name-wrapper">
            <h2 class="item-name">
              {{ item.title }}
            </h2>
          </div>
        </div>
        <div class="item-tagline">{{ item.location }}</div>
        <div class="item-description" style="margin-top: 0px;">{{ item.description }}</div>
        <a :href="item.unsplash" target="_blank" class="item-link mr-3" v-if="item.unsplash">Unsplash</a>
        <a :href="item.yourshot" target="_blank" class="item-link" v-if="item.yourshot">Your Shot</a>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const props = {
  item: {
    type: Object,
    required: true
  }
}

const computed = {
  ...mapGetters({
    mobile: 'ux/mobile'
  })
}

const methods = {
  getSrc () {
    return require('@/static/img/photos/' + this.item.imageName + '-min.jpg')
  }
}

export default {
  props,
  computed,
  methods
}
</script>

<style>
.item-image-override:hover {
  opacity: 1;
  cursor: auto;
}
</style>
