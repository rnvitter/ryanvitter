<template>
  <div class="image-wrapper">
    <div class="front" :style="showOverlay ? 'opacity: 0.1;' : 'opacity: 1;'">
      <a :href="item.link" target=”_blank” style="text-decoration: none;">
        <img
          class="item-image"
          width="100%"
          :src="getSrc()"/>
      </a>
    </div>
    <div class="overlay" :style="showOverlay ? 'opacity: 1; pointer-events: auto;' : 'opacity: 0; pointer-events: none;'">
      <div class="detail-text" v-if="item.details">
        {{ item.details }}
      </div>
      <div class="detail-text" v-else-if="!item.details && item.description" v-html="item.description"></div>
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
  getSrc () {
    const item = this.item
    return require(`@/static/img/${item.type}/${item.imageName}.png`)
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
  margin: 0 10px;
}

.front {
  text-align: center;
  transition: .5s ease;
  background: #f5f5f5;
  border-radius: 8px;
}

.overlay {
  position: absolute;
  top: 0px;
  padding: 20px;
  height: calc(100% - 30px);
  overflow: auto;
  transition: 0.5s ease;
}

.detail-text {
  color: #333;
  font-size: 16px;
  font-weight: 300;
}

.image-wrapper img {
  transition: transform .5s ease;
}

/* [3] Finally, transforming the image when container gets hovered */
@media only screen and (min-width: 800px) {
  .item-card:hover img {
    transform: scale(1.1);
  }

  .item-card:hover .item-name {
    transition: ease 0.5s;
    color: var(--primary);
  }

  .item-card:hover .skill-tag {
    transition: ease 0.5s;
    background-color: var(--primary) !important;
  }

  .item-card:hover .divider-line {
    transition: ease 0.5s;
    border-bottom: 1px solid var(--primary);
  }

  .item-card:hover .item-description {
    transition: ease 0.5s;
    opacity: 0.9;
  }
}

@media only screen and (max-width: 420px) {
  .image-wrapper {
    margin: 0;
  }
}
</style>
