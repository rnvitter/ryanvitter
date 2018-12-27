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
          <div class="item-tagline">{{ item.tagline }}</div>
        </div>
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
        <div style="display: flex; justify-content: center;">
          <a :href="item.link" target="_blank" class="item-link mr-3">Explore</a>
          <a :href="item.github" target="_blank" class="item-link" v-if="item.github">Github</a>
        </div>
      </v-flex>
      <v-flex xs12>
        <a :href="item.link" target=”_blank” style="text-decoration: none;">
          <img
            class="item-image"
            :src="getSrc()"
            width="100%"
            height="auto">
          </img>
        </a>
      </v-flex>
    </v-layout>

    <v-layout row wrap v-else>
      <v-flex xs12 sm6>
        <a :href="item.link" target=”_blank” style="text-decoration: none;">
          <img
            class="item-image"
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
        <div class="item-description" style="margin-top: 0px;">{{ item.description }}</div>
        <a :href="item.link" target="_blank" class="item-link mr-3">Explore</a>
        <a :href="item.github" target="_blank" class="item-link" v-if="item.github">Github</a>
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

.item-name-wrapper {
  background-color: rgba(0,0,0,0.8);
  width: calc(100% + ((100vw - 1200px) / 2 + 20px));
  padding: 15px;
  margin-bottom: 20px;
}

.item-name {
  color: #fff;
  font-size: 2.8em;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 42px;
}

.item-tagline {
  font-size: 2em;
  font-weight: 700;
  color: #333;
  opacity: 0.3;
  letter-spacing: -0.02em;
  line-height: 28px;
  margin-bottom: 10px;
}

.item-description {
  font-size: 1.4em;
  font-weight: 500;
  color: #333;
  opacity: 0.5;
  margin: 15px 10px 10px 0;
}

.item-link {
  font-size: 1.4em;
  font-weight: 600;
  color: #333;
  text-decoration: none;
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

@media only screen and (max-width: 1200px) {
  .item-name-wrapper {
    width: calc(100% + 40px);
  }
}

@media only screen and (max-width: 960px) {
  .item-tagline,
  .item-tags {
    text-align: center;
  }
}

@media only screen and (max-width: 420px) {
  .item-name-wrapper {
    width: calc(100% + 20px);
    padding: 10px 15px;
  }

  .item-name {
    font-size: 2.6em;
    letter-spacing: 0em;
  }
}
</style>
