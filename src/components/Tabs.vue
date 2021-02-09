<template>
  <div class="tabs">
    <div
      v-for="(item, index) in tabs"
      :key="index"
      @click="$emit('on-select', item)"
      :class="selectedTab === item ? 'selected-tab' : 'tab-item'">
      {{ item }}
    </div>
  </div>
</template>

<script>
const props = {
  selectedTab: {
    type: String,
    required: true
  }
}

export default {
  props,
  data: () => ({
    tabs: ['Apps', 'Photos', 'About']
  })
}
</script>

<style>
.tabs div {
  display: inline-block;
  margin: 0 10px;
  cursor: pointer;
  font-size: 20px;
}

.tab-item {
  opacity: 0.6;
  font-weight: 400;
}

.tab-item:hover {
  opacity: 0.9;
}

.selected-tab {
  opacity: 1;
  font-weight: 700;
  border-bottom: 3px solid var(--primary);
}
</style>