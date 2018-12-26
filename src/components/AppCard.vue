<template>
  <div class="item-card">
    <!-- card-header -->
    <v-layout row wrap>
      <v-flex xs12 sm12 md6>
        <div style="width: 90%;">
          <h2 class="item-name">
            {{ item.title }}
          </h2>
          <div class="item-tagline">{{ item.tagline }}</div>
          <div class="item-tags">
            <v-chip
              v-for="(tag, index) in item.tags"
              :key="index"
              class="item-tag"
              :style="`${tagStyle(tag)}`"
              small>
              {{ tag }}
            </v-chip>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 sm12 md6 v-if="!mobile">
        <div class="item-description">{{ item.description }}</div>
        <a :href="item.link" target="_blank" class="item-link mr-3">Explore</a>
        <a :href="item.github" target="_blank" class="item-link" v-if="item.github">Github</a>
      </v-flex>
    </v-layout>

    <a :href="item.link" target=”_blank” style="text-decoration: none;" v-if="item.link">
      <img
        class="item-image"
        :src="getSrc()"
        width="100%"
        height="auto">
      </img>
    </a>

    <img
      v-else
      class="item-image"
      :src="getSrc()"
      width="100%"
      height="auto">
    </img>

    <div style="display: flex;" v-if="mobile">
      <a :href="item.link" target="_blank" class="item-link mr-3">Explore</a>
      <div @click="" class="item-link mr-3">Details</div>
      <a :href="item.github" target="_blank" class="item-link" v-if="item.github">Github</a>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const props = {
  item: {
    type: Object,
    required: true
  },
  src: {
    type: String,
    required: false
  }
}

const computed = {
  ...mapGetters({
    mobile: 'ux/mobile'
  })
}

const methods = {
  getSrc () {
    return require('../../public/static/img/app-previews/' + this.item.imageName + '-min.png')
  },
  tagStyle (tag) {
    const obj = this.tagColors.find(item => item.name === tag)
    return `background-color: ${obj.color}; color: ${obj.text};`
  }
}

export default {
  props,
  computed,
  methods,
  data () {
    return {
      tagColors: [
        {
          name: 'personal',
          color: '#2196F3',
          text: '#fff'
        },
        {
          name: 'work',
          color: '#FA3138',
          text: '#fff'
        },
        {
          name: 'vue',
          color: '#40b784',
          text: '#fff'
        },
        {
          name: 'node',
          color: '#323333',
          text: '#fff'
        },
        {
          name: 'd3',
          color: '#f69b4f',
          text: '#fff'
        },
        {
          name: 'python',
          color: '#fce571',
          text: '#333'
        }
      ]
    }
  }
}
</script>

<style>
.item-card {
  width: 100%;
  margin: 60px 0;
}

.item-name {
  color: #333;
  letter-spacing: 0.05em;
  font-size: 2.2em;
  margin-bottom: 10px;
  line-height: 34px;
}

.item-tagline {
  font-size: 1.6em;
  font-weight: 600;
  color: #bdbdbd;
  line-height: 24px;
  margin-bottom: 10px;
}

.item-description {
  font-size: 1.1em;
  font-weight: 500;
  color: #757575;
  margin: 15px 10px 10px 0;
}

.item-link {
  font-size: 1.2em;
  font-weight: 600;
  color: #333;
  text-decoration: none;
  /* padding: 5px 10px; */
  /* border: 1px solid #333; */
}

.item-link:hover {
  opacity: 0.85;
}

.item-image {
  margin: 10px 0;
  border: 1px solid #bdbdbd;
}

.item-image:hover {
  opacity: 0.85;
}

.item-tags {
  margin: 10px 0;
}

.item-tag {
  padding: 2px;
  font-size: 0.9em;
  letter-spacing: 0.07em;
  height: 22px;
}
</style>
