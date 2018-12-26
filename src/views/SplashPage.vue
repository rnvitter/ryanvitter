<template>
  <div>
    <div class="splash-wrapper">
      <div class="splash-tagline">
        <div class="tagline-title">K.I.S.S.</div>
        <div class="tagline-description">Keep it simple stupid</div>
      </div>
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
}

.splash-image li:nth-child(1) span {
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/static/img/background-1.jpg);
}
.splash-image li:nth-child(2) span {
  animation-delay: 6s;
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/static/img/background-2.jpg);
}
.splash-image li:nth-child(3) span {
  animation-delay: 12s;
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/static/img/background-3.jpg);
}
.splash-image li:nth-child(4) span {
  animation-delay: 18s;
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/static/img/background-4.jpg);
}
.splash-image li:nth-child(5) span {
  animation-delay: 24s;
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/static/img/background-5.jpg);
}
.splash-image li:nth-child(6) span {
  animation-delay: 30s;
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/static/img/background-6.jpg);
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
  padding-left: 100px;
  top: 35%;
  margin: 80px 0;
  color: #fff;
  z-index: 11;
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
