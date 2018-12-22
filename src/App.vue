<template>
  <v-app>
    <div class="app-wrapper">
      <div class="stripe-wrapper">
        <div class="stripe" style="background-color: #F25652;"></div>
        <div class="stripe" style="background-color: #F2B134;"></div>
        <div class="stripe" style="background-color: #4FB99F;"></div>
      </div>
      <splash-page></splash-page>
      <template v-if="mobile">
        <header></header>
        <v-content class="content-wrapper">
          <portfolio></portfolio>
        </v-content>
      </template>
      <div class="portfolio-wrapper" v-else>
        <portfolio style="padding: 0 120px 0 40px;"></portfolio>
        <navbar></navbar>
      </div>
    </div>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import { Header, Navbar } from '@/components/layout'
import Portfolio from './views/Portfolio'
import SplashPage from './views/SplashPage'

const components = {
  Header,
  Navbar,
  Portfolio,
  SplashPage
}

const computed = {
  ...mapGetters({
    mobile: 'ux/mobile'
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
  },
  beforeDestroy () {
    window.removeEventListener('resize', this.getWindowSize)
  }
}
</script>

<style>
.stripe-wrapper {
  z-index: 100;
  position: fixed;
  left: 10px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
}

.stripe {
  position: relative;
  display: inline-block;
  height: 100vh;
  width: 5px;
  opacity: 0.7;
}

@media only screen and (max-width: 420px) {
  .stripe-wrapper {
    left: 5px;
  }

  .stripe {
    width: 4px;
  }
}
</style>
