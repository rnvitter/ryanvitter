<template>
  <div class="item-card-preview">
    <!-- card-header -->
    <v-layout row wrap>
      <v-flex xs12>
        <div>
          <h2 class="item-name-preview">
            {{ item.title }}
          </h2>
          <div class="item-tagline-preview">{{ item.tagline }}</div>
          <div class="item-tags" v-if="!hideTags">
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
        <div style="display: flex;" class="item-btns">
          <a :href="item.link" target="_blank" class="item-link mr-3">Explore</a>
          <div @click="" class="item-link">Details</div>
          <a :href="item.github" target="_blank" class="item-link ml-3" v-if="item.github">Github</a>
        </div>
      </v-flex>
    </v-layout>

    <a :href="item.link" target=”_blank” style="text-decoration: none;" v-if="item.link">
      <img class="item-image"
        :src="getSrc()"
        width="100%"
        height="auto">
      </img>
    </a>

    <img
      v-else
      class="item-image"
      :src="getSrc()"
      :width="width"
      :height="height">
    </img>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const props = {
  item: {
    type: Object,
    required: true
  },
  hideTags: {
    type: Boolean,
    default: false,
    require: false
  },
  src: {
    type: String,
    required: false
  },
  width: {
    type: String,
    required: false,
    default: '100%'
  },
  height: {
    type: String,
    required: false,
    default: 'auto'
  }
}

const methods = {
  getSrc () {
    if (this.src) {
      return this.src
    }
    return require('../../public/static/img/app-previews/' + this.item.imageName + '-min.png')
  },
  tagStyle (tag) {
    const obj = this.tagColors.find(item => item.name === tag)
    return `background-color: ${obj.color}; color: ${obj.text};`
  }
}

export default {
  props,
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
.item-card-preview {
  width: 100%;
  padding: 30px 20px;
}

.item-name-preview {
  color: #333;
  font-size: 1.8em;
  line-height: 28px;
}

.item-tagline-preview {
  font-size: 1.2em;
  font-weight: 600;
  color: #333;
  opacity: 0.3;
  line-height: 28px;
  margin: 5px 0;
}

@media only screen and (max-width: 960px) {
  .item-name-preview,
  .item-tagline-preview {
    text-align: center;
  }

  .item-btns {
    justify-content: center;
  }
}
</style>
