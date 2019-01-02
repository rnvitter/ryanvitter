<template>
  <div class="layout-container">
    <div class="splash-tagline">
      <div class="tagline-title">K.I.S.S.</div>
      <div class="tagline-description">Keep it simple stupid</div>
    </div>
    <div class="splash-wrapper">
      <ul class="splash-image">
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
      </ul>
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
  height: calc(100vh - 75px);
  width: 100%;
  margin-top: 55px;
}

.splash-image {
  list-style: none;
}

.splash-image li span {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
  color: transparent;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  animation: imageAnimation 36s linear infinite 0s;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.3);
}

.splash-image li:nth-child(1) span {
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/static/img/backgrounds/background-1.jpg);
}
.splash-image li:nth-child(2) span {
  animation-delay: 6s;
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/static/img/backgrounds/background-2.jpg);
}
.splash-image li:nth-child(3) span {
  animation-delay: 12s;
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/static/img/backgrounds/background-3.jpg);
}
.splash-image li:nth-child(4) span {
  animation-delay: 18s;
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/static/img/backgrounds/background-4.jpg);
}
.splash-image li:nth-child(5) span {
  animation-delay: 24s;
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/static/img/backgrounds/background-5.jpg);
}
.splash-image li:nth-child(6) span {
  animation-delay: 30s;
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/static/img/backgrounds/background-6.jpg);
}

@keyframes imageAnimation {
  0% { opacity: 0; animation-timing-function: ease-in; }
  8% { opacity: 1; animation-timing-function: ease-out; }
  17% { opacity: 1 }
  25% { opacity: 0 }
  100% { opacity: 0 }
}

.splash-tagline {
  position: absolute;
  top: 65vh;
  z-index: 11;
  color: white;
  margin-top: -80px;
  margin-left: 4vw;
  padding-top: 32px;
  padding-bottom: 32px;
  padding-right: 120px;
  /* background: rgba(0,0,0,0.5); */
}

.tagline-title {
  font-size: 2.4em;
  font-weight: 600;
}

.tagline-description {
  font-size: 1.8em;
  font-weight: 300;
}

@media only screen and (max-width: 370px) {
  .tagline-description {
    font-size: 1.6em;
  }
}
</style>
