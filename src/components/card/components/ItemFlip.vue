<template>
  <div class="flip-container">
    <div :id="cardId" class="flipper">
      <div class="front" v-if="!flipped">
        <a :href="item.link" target=”_blank” style="text-decoration: none;">
          <img
            class="item-image"
            :src="getSrc()"
            width="100%"
            height="auto">
          </img>
        </a>
      </div>
      <div class="back" v-if="flipped">
        <div class="detail-text" v-if="item.details">{{ item.details }}</div>
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

const methods = {
  getSrc () {
    return this.src
  }
}

export default {
  props,
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
  max-height: 350px;
  overflow: auto;
	transform: rotateX(180deg);
}

.detail-text {
  font-size: 1em;
  font-weight: 500;
  opacity: 0.5;
}

@media only screen and (max-width: 960px) {
  .detail-text {
    margin: 10px 0;
  }
}
</style>
