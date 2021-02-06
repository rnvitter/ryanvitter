<template>
  <div class="item-card" @click="goTo">
    <div class="layout" v-if="mobile">
      <div class="centered">
        <div>
          <h2 class="item-name">
            {{ item.title }}
          </h2>
        </div>
        <div class="item-tags" v-if="item.tags">
          <span
            class="skill skill-tag"
            v-for="(tag, index) in item.tags"
            :key="index">
            {{ tag }}
          </span>
        </div>
      </div>
      <div class="centered">
        <item-flip :item="item" :showOverlay="showOverlay"></item-flip>
      </div>
      <div class="centered" style="margin-top: 10px;">
          <a :href="item.link" target="_blank" class="item-link">View</a>
          <a @click="showOverlay = !showOverlay" class="item-link">
            {{ showOverlay ? 'Less' : 'Details' }}
          </a>
          <a :href="item.github" target="_blank" class="item-link" v-if="item.github">Github</a>
      </div>
    </div>

    <div class="layout" v-else>
      <div style="width: 60%;">
        <item-flip :item="item" :showOverlay="showOverlay"></item-flip>
      </div>
      <div style="width: 40%;">
        <div style="padding: 0 20px;">
          <h2 class="item-name">
            {{ item.title }}
          </h2>
          <!-- <div class="item-tagline">{{ item.tagline }}</div> -->
          <div class="divider-line"></div>
          <div class="item-description" style="margin-top: 0px;" v-html="item.description"></div>
          <div class="item-tags" v-if="item.tags">
            <span
              class="skill skill-tag"
              v-for="(tag, index) in item.tags"
              :key="index">
              {{ tag }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ItemFlip from './ItemFlip'

const props = {
  item: {
    type: Object,
    required: true
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
  goTo () {
    if (this.mobile) return
    window.open(this.item.link, '_blank');
  }
}

export default {
  props,
  components,
  computed,
  methods,
  data () {
    return {
      showOverlay: false
    }
  }
}
</script>

<style>
.item-card {
  margin-bottom: 60px;
  cursor: pointer;
}

.item-name {
  color: var(--text-color);
  font-size: 24px;
  line-height: 26px;
  font-weight: 700;
}

.item-description {
  font-size: 16px;
  font-weight: 400;
  color: var(--text-color);
  opacity: 0.7;
  margin: 15px 10px 10px 0;
}

.item-link {
  font-size: 18px;
  margin-right: 10px;
  font-weight: 600;
  color: #333;
  text-decoration: none;
}

.item-link:hover {
  opacity: 0.85;
}

.item-image {
  /* border: 1px solid #e9e9e9; */
  /* border-radius: 4px; */
  /* max-width: 500px; */
  width: 100%;
}

.item-image:hover {
  opacity: 0.95;
}

.item-tags {
  margin: 5px 0 10px 0;
}

.item-tags .skill:first-child {
  margin-left: 0 !important;
}

.centered {
  width: 100%;
  text-align: center;
}

.divider-line {
  width: 70px;
  border-bottom: 1px solid #e9e9e9;
  margin: 10px 0;
}
</style>
