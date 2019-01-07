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
              small>
              {{ tag }}
            </v-chip>
          </div>
        </div>
      </v-flex>
    </v-layout>

    <item-flip :item="item" :src="src" :cardId="cardId"></item-flip>

    <div style="display: flex;" class="item-btns" v-if="showButtons">
      <a :href="item.link" target="_blank" class="item-link-preview mr-3">Explore</a>
      <a @click="flipCard" class="item-link-preview">Details</a>
      <a :href="item.github" target="_blank" class="item-link-preview ml-3" v-if="item.github">Github</a>
    </div>
  </div>
</template>

<script>
import ItemFlip from './components/ItemFlip'

const props = {
  cardId: {
    type: String,
    required: true
  },
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
  },
  showButtons: {
    type: Boolean,
    require: false,
    default: true
  }
}

const components = {
  ItemFlip
}

const methods = {
  getSrc () {
    return this.src
  },
  flipCard () {
    document.querySelector(`#${this.cardId}`).classList.toggle('flip')
  }
}

export default {
  props,
  components,
  methods
}
</script>

<style>
.item-card-preview {
  width: 100%;
  padding: 30px 10px;
}

.item-name-preview {
  color: #333;
  font-size: 1.6em;
  line-height: 28px;
}

.item-tagline-preview {
  font-size: 1.2em;
  font-weight: 600;
  color: #333;
  opacity: 0.3;
  line-height: 20px;
  margin: 5px 0;
}

.item-link-preview {
  font-size: 1.4em;
  font-weight: 600;
  color: #333;
  text-decoration: none;
}

@media only screen and (max-width: 960px) {
  .item-name-preview,
  .item-tagline-preview {
    text-align: center;
  }

  .item-tagline-preview {
    font-size: 1em;
  }

  .item-btns {
    justify-content: center;
  }
}

@media only screen and (max-width: 420px) {
  .item-card-preview {
    padding: 30px 0;
  }
}
</style>
