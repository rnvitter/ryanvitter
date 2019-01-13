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
        <div class="item-tags" v-if="item.tags">
          <span
            class="skill skill-tag"
            v-for="(tag, index) in item.tags"
            :key="index">
            {{ tag }}
          </span>
        </div>
      </v-flex>
      <v-flex xs12>
        <item-flip :item="item" :src="src" :cardId="cardId" :flipped="flipped"></item-flip>
      </v-flex>
      <v-flex xs12>
        <div style="display: flex; justify-content: center;">
          <a :href="item.link" target="_blank" class="item-link mr-3">View</a>
          <a @click="flipCard" class="item-link mr-3">
            {{ flipped ? 'Image' : 'Details' }}
          </a>
          <a :href="item.github" target="_blank" class="item-link" v-if="item.github">Github</a>
        </div>
      </v-flex>
    </v-layout>

    <v-layout row wrap v-else>
      <v-flex xs12 sm6>
        <item-flip :item="item" :src="src" :cardId="cardId" :flipped="flipped"></item-flip>
      </v-flex>
      <v-flex xs12 sm6 style="padding: 0 20px;">
        <div>
          <div class="item-name-wrapper">
            <h2 class="item-name">
              {{ item.title }}
            </h2>
          </div>
          <div class="item-tagline">{{ item.tagline }}</div>
          <div class="item-tags" v-if="item.tags">
            <span
              class="skill skill-tag"
              v-for="(tag, index) in item.tags"
              :key="index">
              {{ tag }}
            </span>
          </div>
        </div>
        <div class="item-description" style="margin-top: 0px;">{{ item.description }}</div>
        <div style="display: flex;">
          <a :href="item.link" target="_blank" class="item-link mr-3">View</a>
          <a @click="flipCard" class="item-link mr-3" v-if="showDetails">
            {{ flipped ? 'Image' : 'Details' }}
          </a>
          <a :href="item.github" target="_blank" class="item-link" v-if="item.github">Github</a>
        </div>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
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
  src: {
    type: String,
    required: false
  },
  showDetails: {
    type: Boolean,
    required: false,
    default: true
  }
}

const components = {
  ItemFlip
}

const computed = {
  ...mapGetters({
    mobile: 'ux/mobile'
  })
}

const methods = {
  flipCard () {
    this.flipped = !this.flipped
    document.querySelector(`#${this.cardId}`).classList.toggle('flip')
  }
}

export default {
  props,
  components,
  computed,
  methods,
  data () {
    return {
      flipped: false
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
  margin-bottom: 15px;
  background-color: rgba(0,0,0,0.8);
  width: calc(100% + ((100vw - 1200px) / 2 + 20px));
  padding: 15px;
  margin-bottom: 20px;
}

.item-name {
  color: #fff;
  font-size: 2.6em;
  font-weight: 700;
  letter-spacing: -0.02em;
  line-height: 42px;
}

.item-tagline {
  font-size: 1.8em;
  font-weight: 700;
  color: #333;
  opacity: 0.3;
  letter-spacing: -0.02em;
  line-height: 28px;
  margin-bottom: 10px;
}

.item-description {
  font-size: 1.2em;
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
  border: 1px solid #bdbdbd;
}

.item-image:hover {
  opacity: 0.85;
}

.item-tags {
  margin: 10px 0;
}

@media only screen and (max-width: 1200px) {
  .item-name-wrapper {
    width: calc(100% + 20px);
  }
}

@media only screen and (max-width: 960px) {
  .item-name-wrapper {
    margin-bottom: 0px;
    background-color: rgba(0,0,0,0);
    width: 100%;
  }

  .item-name {
    color: #333;
    font-size: 2.4em;
  }

  .item-tagline {
    font-size: 1.6em;
    padding-bottom: 10px;
  }

  .item-description {
    font-size: 1em;
  }

  .item-name,
  .item-tagline,
  .item-tags {
    text-align: center;
  }

  .item-image {
    margin: 10px 0;
  }
}

@media only screen and (max-width: 420px) {
  .item-name-wrapper {
    padding: 10px 15px;
  }

  .item-name {
    font-size: 2.2em;
    letter-spacing: 0em;
  }
}
</style>
