<template>
  <div id="app">
    <div class="app-wrapper">
      <div id="portfolio-wrapper">
        <splash-screen></splash-screen>
        <portfolio></portfolio>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

import Portfolio from './views/Portfolio'
import SplashScreen from './views/SplashScreen'

const components = {
  Portfolio,
  SplashScreen
}

const methods = {
  ...mapActions({
    setScreenWidth: 'ux/setWidth'
  }),
  getWindowSize () {
    if (this.resizeTimeout !== null) {
      clearTimeout(this.resizeTimeout)
    }
    setTimeout(() => {
      this.setScreenWidth(document.documentElement.clientWidth)
      this.resizeTimeout = null
    }, 200)
  }
}

export default {
  name: 'App',
  components,
  methods,
  beforeMount () {
    this.getWindowSize()
    window.addEventListener('resize', this.getWindowSize)
    window.onbeforeunload = function() { window.scrollTo(0,0) }
  },
  // ready () {
  //   window.scrollTo(0,0)
  // },
  beforeDestroy () {
    window.scrollTo(0,0)
    window.removeEventListener('resize', this.getWindowSize)
  }
}
</script>

<style>
.app-wrapper {
  position: relative;
  padding-bottom: 60px;
}

.app-container {
  max-width: 1024px;
  margin: 0 auto;
}

@media only screen and (max-width: 1024px) {
  .app-container {
    width: 100%;
  }
}
</style>
