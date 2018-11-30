<template>
  <v-card raised class="app-card">
    <a :href="app.link" target=”_blank” style="text-decoration: none;">
      <v-card-title
        class="app-card-title"
        :style="`background-color: #eee; border-top: 3px solid ${app.color};`"
        primary-title>
        <h3 class="app-name" :style="`color: #333;`">
          {{ app.title }}
        </h3>
        <a :href="app.github" target="_blank" style="text-decoration: none;" v-if="app.github">
          <v-btn flat icon color="black">
            <v-icon>code</v-icon>
          </v-btn>
        </a>
      </v-card-title>
    </a>
    <v-carousel style="height: 150px;" hide-controls hide-delimiters>
      <v-carousel-item v-for="(key, index) in app.images" :key="index">
        <img
          :src="getSrc(index)"
          width="100%"
          height="150px">
          <v-container fill-height fluid>
            <v-layout fill-height>
              <v-flex xs12 align-end flexbox>
                <span class="headline">{{ app.title }}</span>
              </v-flex>
            </v-layout>
          </v-container>
        </img>
      </v-carousel-item>
    </v-carousel>

    <v-card-title style="background-color: #fafafa;">
      <div class="app-description">{{ app.description }}</div>
      <v-chip
        v-for="tag in app.tags"
        :style="`${tagStyle(tag)}`"
        small>
        {{ tag }}
      </v-chip>
    </v-card-title>
  </v-card>
</template>

<script>
const props = {
  app: {
    type: Object,
    required: true
  }
}

const methods = {
  getSrc (index) {
    const number = index + 1
    return require('../assets/app-previews/' + this.app.imageName + '-' + number + '-min.png')
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
          name: 'vue.js',
          color: '#40b784',
          text: '#fff'
        },
        {
          name: 'node.js',
          color: '#323333',
          text: '#fff'
        },
        {
          name: 'd3.js',
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
.app-card {
  width: 100%;
  margin: 20px;
}

.app-card-title {
  height: 64px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
}

.app-name {
  font-size: 1.2em;
  font-weight: 400;
  letter-spacing: 0.1em;
}

.app-description {
  margin: 10px 0;
  color: #666;
  font-size: 0.9em;
  font-weight: 400;
  letter-spacing: 0.04em;
}

/* vuetify override */
.v-card__title--primary {
  padding-top: 16px;
}
</style>
