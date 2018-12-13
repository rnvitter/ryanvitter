<template>
  <div class="app-card">
    <!-- card-header -->
    <v-layout row wrap>
      <v-flex xs12 sm12 md6>
        <div style="width: 90%;">
          <h2 class="app-name">
            {{ app.title }}
          </h2>
          <div class="app-tagline">{{ app.tagline }}</div>
          <div class="app-tags">
            <v-chip
              v-for="tag in app.tags"
              class="app-tag"
              :style="`${tagStyle(tag)}`"
              small>
              {{ tag }}
            </v-chip>
          </div>
        </div>
      </v-flex>
      <v-flex xs12 sm12 md6 v-if="!mobile">
        <div class="app-description">{{ app.description }}</div>
        <a :href="app.link" target="_blank" class="app-link mr-3">Explore</a>
        <a :href="app.github" target="_blank" class="app-link" v-if="app.github">Github</a>
      </v-flex>
    </v-layout>

    <!-- card body -->
    <a :href="app.link" target=”_blank” style="text-decoration: none;">
      <img class="app-image"
        :src="getSrc()"
        width="100%"
        height="auto">
      </img>
    </a>

    <!-- card-footer -->
    <div style="display: flex;" v-if="mobile">
      <a :href="app.link" target="_blank" class="app-link mr-3">Explore</a>
      <div @click="descriptionDialog = true" class="app-link mr-3">Details</div>
      <a :href="app.github" target="_blank" class="app-link" v-if="app.github">Github</a>
    </div>

    <v-dialog v-model="descriptionDialog" max-width="320">
      <v-card>
        <v-card-title class="headline">{{ app.title }}</v-card-title>
        <v-card-text>{{ app.description }}</v-card-text>
        <v-card-actions>
          <v-btn color="black" flat="flat" @click="descriptionDialog = false">Close</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const props = {
  app: {
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
    return require('../../static/img/app-previews/' + this.app.imageName + '-min.png')
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
      descriptionDialog: false,
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
.app-card {
  width: 100%;
  margin: 30px 0;
}

.app-name {
  color: #333;
  letter-spacing: 0.05em;
  font-size: 2.2em;
  margin-bottom: 10px;
}

.app-tagline {
  font-size: 1.6em;
  font-weight: 600;
  color: #bdbdbd;
  line-height: 24px;
  margin-bottom: 10px;
}

.app-description {
  font-size: 1.1em;
  font-weight: 500;
  color: #757575;
  margin: 15px 10px 10px 0;
}

.app-link {
  font-size: 1.2em;
  font-weight: 600;
  color: #333;
  text-decoration: none;
  /* padding: 5px 10px; */
  /* border: 1px solid #333; */
}

.app-link:hover {
  opacity: 0.85;
}

.app-image {
  margin: 10px 0;
  border: 1px solid #bdbdbd;
}

.app-image:hover {
  opacity: 0.85;
}

.app-tags {
  margin: 10px 0;
}

.app-tag {
  padding: 2px;
  font-size: 0.9em;
  letter-spacing: 0.07em;
  height: 22px;
}
</style>
