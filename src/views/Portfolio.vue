<template>
  <div class="portfolio">
    <splash-page></splash-page>
    <projects></projects>
    <maps></maps>
    <photos></photos>
  </div>
</template>

<script>
import SplashPage from './SplashPage'
import { Maps, Projects, Photos } from './portfolios'

const components = {
  Maps,
  Projects,
  Photos,
  SplashPage
}

export default {
  components
}
</script>

<style>
.portfolio {
  padding: 0 20px;
  width: 100%;
}

.content-wrapper {
  z-index: 2;
  padding-left: 60px;
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
  .content-wrapper {
    padding-left: 20px !important;
  }

  .section-title {
    font-size: 2.6em;
  }
}
</style>
