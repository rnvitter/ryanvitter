<template>
  <v-app>
    <div class="stripe-wrapper">
      <div class="stripe" style="background-color: #F25652;"></div>
      <div class="stripe" style="background-color: #F2B134;"></div>
      <div class="stripe" style="background-color: #4FB99F;"></div>
    </div>
    <rv-header></rv-header>
    <v-content class="content-wrapper">
      <splash-page></splash-page>
        <projects></projects>
        <!-- <div class="section-title" style="color: #F2B134;">Maps & Posters</div>
        <div class="section-title" style="color: #4FB99F;">Photography</div>
        <div class="section-title" style="color: #666;">Contact Me</div> -->
        <!-- <photos></photos> -->
      </div>
    </v-content>
  </v-app>
</template>

<script>
import { mapActions } from 'vuex'

import { RvHeader } from '@/components'
import { Photos, Projects, SplashPage } from './portfolios'

const components = {
  RvHeader,
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
.stripe-wrapper {
  z-index: 100;
  position: fixed;
  left: 10px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, .14), 0 3px 1px -2px rgba(0, 0, 0, .2), 0 1px 5px 0 rgba(0, 0, 0, .12);
}

.content-wrapper {
  z-index: 2;
  padding-left: 60px;
}

.stripe {
  position: relative;
  display: inline-block;
  height: 100vh;
  width: 5px;
  opacity: 0.7;
}

.section-title {
  color: #fff;
  font-size: 3em;
  font-weight: 600;
}

@media only screen and (max-width: 960px) {
  .content-wrapper {
    padding-left: 30px !important;
  }
}

@media only screen and (max-width: 420px) {
  .stripe-wrapper {
    left: 5px;
  }

  .stripe {
    width: 4px;
  }

  .content-wrapper {
    padding-left: 20px !important;
  }

  .section-title {
    font-size: 2.6em;
  }
}
</style>
