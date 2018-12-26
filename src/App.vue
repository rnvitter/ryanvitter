<template>
  <v-app>
    <div class="app-wrapper">
      <div v-if="mobile">
        <header></header>
        <v-content class="content-wrapper">
          <splash-page></splash-page>
          <portfolio></portfolio>
        </v-content>
      </div>
      <div v-else>
        <!-- <navbar-old></navbar-old> -->
        <navbar></navbar>
        <div id="portfolio-wrapper">
          <portfolio></portfolio>
        </div>
      </div>
    </div>
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

import { Header, Navbar, NavbarOld } from '@/components/layout'
import Portfolio from './views/Portfolio'
import SplashPage from './views/SplashPage'

const components = {
  Header,
  Navbar,
  NavbarOld,
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

    // if (!this.mobile) {
    //   const navbar = document.getElementById('navbar')
    //   const portfolio = document.getElementById('portfolio-wrapper')
    //   navbar.style.left = portfolio.clientWidth - 40 + 'px'
    // }
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
.app-wrapper {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* @media only screen and (min-width: 1200px) {
  #portfolio-wrapper {
    width: 1040px;
    margin: 0;
  }
}

@media only screen and (max-width: 960px) {
  #portfolio-wrapper {
    width: 100%;
  }
} */
</style>
