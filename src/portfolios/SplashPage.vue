<template>
  <div class="splash-wrapper">
    <div class="splash">
      <h1 class="splash-title">Ryan Vitter</h1>
      <div class="splash-overview">
        <div class="splash-tag" style="background-color: #F25652;">Developer</div>
        <div class="splash-tag" style="background-color: #F2B134;">Cartographer</div>
        <div class="splash-tag" style="background-color: #4FB99F;">Photographer</div>
      </div>
      <div class="splash-tagline">
        <div class="tagline-title">K.I.S.S.</div>
        <div class="tagline-description">Keep it simple stupid</div>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>
.splash-wrapper {
  position: relative;
  height: 100vh;
  width: 100%;
}

.splash {
  position: absolute;
  top: 100px;
  left: 100px;
}

.splash-title {
  font-size: 7em;
  font-weight: 600;
  letter-spacing: 0.02em;
  line-height: 100px;
  color: #333;
}

.splash-overview {
  margin-top: 20px;
  font-size: 1.2em;
  font-weight: 400;
  color: #fff;
  line-height: 40px;
  letter-spacing: 0.05em;
}

.splash-tag {
  display: inline-block;
  padding: 0px 20px;
  border-radius: 50px;
  margin: 5px;
}

.splash-tagline {
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
    top: 70px;
    left: 30px;
  }
}
</style>
