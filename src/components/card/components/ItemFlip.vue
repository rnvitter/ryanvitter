<template>
  <div class="flip-container">
    <div :id="cardId" class="flipper" :style="`height: ${height}px;`">
      <div class="front">
        <a :href="item.link" target=”_blank” style="text-decoration: none;">
          <img
            class="item-image"
            :src="getSrc()"
            width="100%">
          </img>
        </a>
      </div>
      <div class="back" :style="`height: ${height}px;`">
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
  src: {
    type: String,
    required: true
  },
  flipped: {
    type: Boolean,
    required: false
  }
}

const computed = {
  height () {
    const card = document.getElementById(this.cardId)
    if (card) {
      return document.getElementById(this.cardId).getElementsByClassName('front')[0].clientHeight
    }
  }
}

const methods = {
  getSrc () {
    return this.src
  }
}

export default {
  props,
  computed,
  methods
}
</script>

<style>
.flip-container {
	position: relative;
}

.flip-container .flipper {
  transform-origin: 100% calc(100% / 2);
}

.flip {
  transform: rotateX(-180deg);
}

.flip-container, .front, .back {
	height: auto;
}

.flipper {
	transition: 0.6s;
	transform-style: preserve-3d;
	position: relative;
  min-height: 200px;
}

.front, .back {
	backface-visibility: hidden;
	top: 0;
	left: 0;
}

.front {
	z-index: 2;
	transform: rotateY(0deg);
}

.back {
  position: absolute;
  top: 0;
  height: 100%;
  overflow: auto;
	transform: rotateX(180deg);
  /* border: 1px solid #bdbdbd; */
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
