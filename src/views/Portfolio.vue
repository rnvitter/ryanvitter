<template>
  <div class="portfolio">
    <div class="portfolio-header">
      <tabs></tabs>
    </div>
    <projects v-if="tab === 'Apps'"></projects>
    <photos v-if="tab === 'Photos'"></photos>
    <about v-if="tab === 'About'"></about>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { About, Photos, Projects } from './tabs'
import Tabs from '@/components/Tabs'


const components = {
  About,
  Photos,
  Projects,
  Tabs
}

const computed = {
  ...mapGetters({
    tab: 'ux/tab'
  })
}

export default {
  components,
  computed
}
</script>

<style>
.portfolio {
  padding: 0 10px;
}

.portfolio-header {
  margin: 40px 0;
  text-align: center;
}
</style>
