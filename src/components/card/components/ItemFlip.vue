<template>
  <div class="image-wrapper">
    <div class="front" :style="showOverlay ? 'opacity: 0.1;' : 'opacity: 1;'">
      <a :href="item.link" target=”_blank” style="text-decoration: none;">
        <img
          class="item-image"
          :srcset="getSrcSet()"
          width="100%"
          :src="getSrc(item.section === 'featured' ? 600 : 580)"/>
      </a>
    </div>
    <div class="overlay" :style="showOverlay ? 'opacity: 1;' : 'opacity: 0;'">
      <div class="detail-text" v-if="item.details">
        {{ item.details }}
      </div>
      <div class="detail-text" v-else-if="!item.details && item.description">
        {{ item.description }}
      </div>
    </div>
  </div>
</template>

<script>
const props = {
  item: {
    type: Object,
    required: true
  },
  showOverlay: {
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
.image-wrapper {
  position: relative;
}

.front {
  text-align: center;
  transition: .5s ease;
}

.overlay {
  position: absolute;
  top: 0px;
  padding: 20px;
  height: 100%;
  overflow: auto;
  transition: 1s ease;
}

.detail-text {
  color: #333;
  font-size: 1.4em;
  font-weight: 300;
}

@media only screen and (max-width: 960px) {
  .detail-text {
    margin: 10px 0;
  }
}
</style>
