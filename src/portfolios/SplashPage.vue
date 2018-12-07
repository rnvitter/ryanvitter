<template>
  <div class="splash-wrapper">
    <div class="splash">
      <div class="splash-title-wrapper">
        <h1 class="splash-title">Ryan Vitter</h1>
        <div class="splash-tags">
          <div class="splash-tag" style="background-color: #F25652;">{{ mobile ? 'Code' : 'Developer' }}</div>
          <div class="splash-tag" style="background-color: #F2B134;">{{ mobile ? 'Maps' : 'Cartographer' }}</div>
          <div class="splash-tag" style="background-color: #4FB99F;">Photography</div>
        </div>
      </div>
      <div class="splash-btns">
        <div class="splash-btn">Projects</div>
        <div class="splash-btn">Maps & Posters</div>
        <div class="splash-btn">Photography</div>
        <div class="splash-btn">Contact Me</div>
      </div>
      <div class="splash-tagline">
        <div class="tagline-title">K.I.S.S.</div>
        <div class="tagline-description">Keep it simple stupid</div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const computed = {
  ...mapGetters({
    mobile: 'ux/mobile'
  })
}

const methods = {
  getPic () {
    return require('../../static/pictures/bald_eagle.jpg')
  }
}

export default {
  computed,
  methods
}
</script>

<style>
.splash-wrapper {
  position: relative;
  height: 100vh;
  width: 100%;
}

.splash {
  padding-top: 70px;
  width: 100%;
}

.splash-title-wrapper,
.splash-btn,
.splash-tagline {
  padding-left: 100px;
}


.splash-title-wrapper {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.splash-title {
  font-size: 1.5em;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #333;
  text-transform: uppercase;
}

.splash-tags {
  font-size: 0.9em;
  font-weight: 400;
  color: #fff;
  letter-spacing: 0.05em;
  margin-left: 10px;
}

.splash-tag {
  display: inline-block;
  padding: 2px 20px;
  border-radius: 50px;
  margin: 5px;
  color: #fff;
}

.splash-btn {
  color: #bdbdbd;
  padding-top: 10px;
  padding-bottom: 10px;
  font-size: 2em;
  font-weight: 600;
  line-height: 20px;
  cursor: pointer;
  text-transform: uppercase;
}

.splash-btn:hover {
  color: #fff;
  background-color: #F25652;
}

.splash-tagline {
  margin: 80px 0;
  color: #333;
}

.tagline-title {
  font-size: 2.4em;
  font-weight: 600;
}

.tagline-description {
  font-size: 1.8em;
  font-weight: 300;
}

@media only screen and (max-width: 420px) {
  .splash-title-wrapper,
  .splash-btn,
  .splash-tagline {
    padding-left: 10px;
  }
  .splash-title-wrapper {
    display: block;
  }

  .splash-tags {
    margin-left: 0;
  }
}
</style>
