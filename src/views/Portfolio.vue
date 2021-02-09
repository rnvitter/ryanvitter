<template>
  <div class="portfolio">
    <div class="portfolio-header">
      <tabs
        :selectedTab="tab"
        @on-select="tab = $event">
      </tabs>
    </div>
    <projects v-if="tab === 'Apps'"></projects>
    <photos v-if="tab === 'Photos'"></photos>
    <about v-if="tab === 'About'"></about>
  </div>
</template>

<script>
import { About, Photos, Projects } from './tabs'
import Tabs from '@/components/Tabs'


const components = {
  About,
  Photos,
  Projects,
  Tabs
}

export default {
  components,
  data: () => ({
    tab: 'Apps'
  })
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
