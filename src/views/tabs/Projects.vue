<template>
  <div id="projects">
    <div class="app-container">
      <div class="layout">
        <div class="xs12" v-for="app in apps" :key="app.title">
          <item-card :item="app"></item-card>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ItemCard } from '@/components/card'
import { apps } from '@/config.js'

const components = {
  ItemCard
}

const computed = {
  apps () {
    return apps
  }
}

export default {
  name: 'projects',
  components,
  computed
}
</script>
