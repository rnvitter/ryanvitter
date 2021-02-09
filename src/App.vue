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
import Portfolio from './views/Portfolio'
import SplashScreen from './views/SplashScreen'

const components = {
  Portfolio,
  SplashScreen
}

export default {
  name: 'App',
  components
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
