<template>
  <v-app>
    <div class="app-wrapper">
      <navbar></navbar>
      <nav-menu v-if="menu && mobile"></nav-menu>
      <div id="portfolio-wrapper">
        <splash-page></splash-page>
        <about></about>
        <portfolio></portfolio>
      </div>
      <rv-footer></rv-footer>
    </div>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import { RvFooter, Navbar, NavMenu } from '@/components/layout'
import About from './views/About'
import Portfolio from './views/Portfolio'
import SplashPage from './views/SplashPage'

const components = {
  About,
  RvFooter,
  Navbar,
  NavMenu,
  Portfolio,
  SplashPage
}

const computed = {
  ...mapGetters({
    mobile: 'ux/mobile',
    menu: 'ux/menu'
  })
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
  computed,
  methods,
  mounted () {
    this.getWindowSize()
    window.addEventListener('resize', this.getWindowSize)
    window.onbeforeunload = function() { window.scrollTo(0,0) }
  },
  ready () {
    window.scrollTo(0,0)
  },
  beforeDestroy () {
    window.scrollTo(0,0)
    window.removeEventListener('resize', this.getWindowSize)
  }
}
</script>

<style>
.app-wrapper {
  position: relative;
}

.app-container {
  max-width: 1200px;
  margin: 0 auto;
}

@media only screen and (max-width: 1200px) {
  .app-container {
    width: 100%;
  }
}
</style>
