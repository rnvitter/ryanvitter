<template>
  <div>
    <!-- <div class="splash-image"></div> -->
    <div class="splash-wrapper">
      <div class="splash-tagline">
        <div class="tagline-title">K.I.S.S.</div>
        <div class="tagline-description">Keep it simple stupid</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'splash-page'
}
</script>

<style>
.splash-wrapper {
  position: relative;
  height: 100vh;
  width: 100%;
}

.splash-image {
  position: absolute;
  width: 100%;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0)), url(/static/img/background-2.jpg);
}

.splash-tagline {
  position: absolute;
  padding-left: 100px;
  top: 35%;
  margin: 80px 0;
  color: #333;
}

.tagline-title {
  font-size: 2.4em;
  font-weight: 600;
}

.tagline-description {
  font-size: 1.8em;
  font-weight: 300;
}

@media only screen and (max-width: 420px) {
  .splash {
    padding-top: 120px;
  }

  .splash-tagline {
    padding-left: 10px;
  }
}
</style>
