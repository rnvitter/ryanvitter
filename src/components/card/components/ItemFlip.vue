<template>
  <div class="flip-container">
    <div :id="cardId" class="flipper">
      <div class="front">
        <a :href="item.link" target=”_blank” style="text-decoration: none;">
          <img
            class="item-image"
            :src="getSrc()"
            width="100%"
            height="auto">
          </img>
        </a>
      </div>
      <div class="back">
        <h4>I am the back</h4>
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
  position: absolute;
  height: 100%;
	transform: rotateX(180deg);
}
</style>
