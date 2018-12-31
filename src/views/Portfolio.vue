<template>
  <div class="portfolio">
    <projects></projects>
    <maps></maps>
    <photos></photos>
    <contact></contact>
  </div>
</template>

<script>
import { Contact, Maps, Projects, Photos } from './portfolios'

const components = {
  Contact,
  Maps,
  Projects,
  Photos
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

.section-title {
  font-size: 2.4em;
  font-weight: 300;
  letter-spacing: 0.1em;
  color: #333;
  /* background-color: rgba(0,0,0,0.8); */
  width: fit-content;
  padding: 15px 30px;
  text-align: center;
  margin: 60px auto 0;
  text-transform: uppercase;
}

.more-title {
  font-size: 1.6em;
  font-weight: 300;
  letter-spacing: 0.1em;
}

@media only screen and (max-width: 420px) {
  .section-title {
    font-size: 2.6em;
  }
}
</style>
