<template>
  <div class="item-toggle-container">
    <div :id="cardId" class="toggle">
      <div class="front" v-if="!flipped">
        <a :href="item.link" target=”_blank” style="text-decoration: none;">
          <img
            class="item-image"
            :srcset="getSrcSet()"
            width="100%"
            :src="getSrc(item.section === 'featured' ? 600 : 580)"/>
        </a>
      </div>
      <div class="back" v-else>
        <div class="detail-text" v-if="item.details">
          {{ item.details }}
        </div>
        <div class="detail-text" v-else-if="!item.details && item.description">
          {{ item.description }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const props = {
  cardId: {
    type: String,
    required: true
  },
  item: {
    type: Object,
    required: true
  },
  flipped: {
    type: Boolean,
    required: false
  }
}

const methods = {
  getSrc (size) {
    const item = this.item
    return require(`@/static/img/previews/${item.section}/${size}/${item.type}/${item.imageName}-${size}.jpg`)
  },
  getSrcSet () {
    if (this.item.section === 'featured') {
      return `
        ${this.getSrc(375)} 375w,
        ${this.getSrc(420)} 420w,
        ${this.getSrc(600)} 600w
      `
    } else {
      return `
        ${this.getSrc(375)} 375w,
        ${this.getSrc(580)} 580w,
      `
    }
  },
  getSizes () {
    if (this.item.section === 'featured') {
      return `
        (max-width: 375px) 355px,
        (max-width: 420px) 400px,
        (max-width: 600px) 580px,
        580px
      `
    } else {
      return `
        (max-width: 375px) 100%,
        (max-width: 580px) 100%,
        580px
      `
    }
  }
}

export default {
  props,
  methods
}
</script>

<style>
.front {
  text-align: center;
}

.detail-text {
  font-size: 1.1em;
  font-weight: 500;
  opacity: 0.5;
}

@media only screen and (max-width: 960px) {
  .detail-text {
    margin: 10px 0;
  }
}
</style>
