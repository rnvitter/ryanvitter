<template>
  <v-app>
    <v-content>
      <splash-page></splash-page>
      <div class="section-title" style="background-color: #F25652;">Projects</div>
      <projects></projects>
      <div class="section-title" style="background-color: #F2B134;">Maps & Posters</div>
      <div class="section-title" style="background-color: #4FB99F;">Photography</div>
      <!-- <photos></photos> -->
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

import { Photos, Projects, SplashPage } from './portfolios'

const components = {
  Photos,
  Projects,
  SplashPage
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
.section-title {
  color: #fff;
  padding-left: 50px;
  font-size: 3em;
  font-weight: 600;
  margin-bottom: 30px;
}

@media only screen and (max-width: 420px) {
  .section-title {
    font-size: 2.6em;
    padding-left: 10px;
  }
}
</style>
