<template>
  <div id="photos">
    <div>
      <img
        v-for="n in 9" :key="n"
        class="photo"
        :src="getSrc(n)"
        :alt="`photo-${n}`"/>
    </div>
    <div class="insta-link-text">
      See more of my photography on
      <a
        class="link-text"
        href="https://www.instagram.com/ryanvitter/"
        target="_blank"
        rel="noreferrer">
        Instagram
      </a>
    </div>
  </div>
</template>

<script>
const methods = {
  getSrc (n) {
    return require(`@/static/img/photos/photo-${n}.jpg`)
  }
}

export default {
  name: 'photos',
  methods
}
</script>

<style>
#photos {
  max-width: 600px;
  margin: 0 auto;
}

.photo {
  display: inline-block;
  width: calc(33.333% - 2px);
  padding: 1px;
  float: left;
}

.insta-link-text {
  clear: both;
  text-align: center;
  padding-top: 20px;
  display: block;
}
</style>
