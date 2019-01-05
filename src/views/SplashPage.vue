<template>
  <div :class="!mobile ? 'layout-container' : ''" style="position: relative; padding: 0;">
    <div class="splash-tagline">
      <!-- <headline-animation class="tagline-title" style="font-size: 2.4em;"></headline-animation> -->
      <div class="tagline-title">Hello,</div>
      <div class="tagline-title">I'm Ryan Vitter</div>
      <div class="tagline-description">Developer / Cartographer / Photographer</div>
      <div id="contact-me" @click="copyEmail">Contact Me</div>
    </div>
    <div class="moto">
      <span class="moto-abbrev">
        <span class="moto-letter">K</span><span class="moto-slash"> /</span>
        <span class="moto-letter">I</span><span class="moto-slash"> /</span>
        <span class="moto-letter">S</span><span class="moto-slash"> /</span>
        <span class="moto-letter">S</span>
      </span>
      <br>
      <span class="moto-tagline">Keep It Simple Stupid</span>
      <!-- <div class="load-wrapper">
        <div class="load-bar">
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
      </div> -->
    </div>
    <div class="splash-wrapper">
      <ul class="splash-image">
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
        <li><span></span></li>
      </ul>
    </div>
    <div class="splash-background"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import { HeadlineAnimation } from '@/components'

const components = {
  HeadlineAnimation
}

const computed = {
  ...mapGetters({
    mobile: 'ux/mobile'
  })
}

const methods = {
  copyEmail () {
    var email = document.getElementById('copy-email')
    var textArea = document.createElement('textarea')
    textArea.value = email.textContent
    document.body.appendChild(textArea)
    textArea.select()
    document.execCommand("Copy")
    textArea.remove()
    this.copied = true
  }
}

export default {
  name: 'splash-page',
  components,
  computed,
  methods
}
</script>

<style>
.splash-wrapper {
  position: relative;
  height: 100vh;
  width: 100%;
}

.splash-background {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100%;
  background-color: #333;
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
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  opacity: 0;
  animation: imageAnimation 24s linear infinite 0s;
  animation-delay: 2s;
  filter: grayscale(100%);
}

.splash-image li:nth-child(1) span {
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(../static/img/backgrounds/background-1.jpg);
}
.splash-image li:nth-child(2) span {
  animation-delay: 6s;
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(../static/img/backgrounds/background-2.jpg);
}
.splash-image li:nth-child(3) span {
  animation-delay: 12s;
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(../static/img/backgrounds/background-3.jpg);
}
.splash-image li:nth-child(4) span {
  animation-delay: 18s;
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(../static/img/backgrounds/background-4.jpg);
}

@keyframes imageAnimation {
  0% { opacity: 0; animation-timing-function: ease-in; }
  4% { opacity: 1; }
  22% { opacity: 1; animation-timing-function: ease-out;  }
  32% { opacity: 0; }
  100% { opacity: 0; }
}

.splash-tagline {
  position: absolute;
  bottom: 10vh;
  z-index: 11;
  color: white;
  margin-top: -75px;
  margin-left: 4vw;
  padding-top: 32px;
  padding-bottom: 32px;
  padding-right: 120px;
  opacity: 0;
  animation: 1s normal forwards letter-fade-in;
  animation-timing-function: ease-in;
  animation-delay: 2s;
}

.tagline-title {
  font-size: 3em;
  font-weight: 600;
  letter-spacing: -0.02em;
  line-height: 42px;
}

.tagline-description {
  font-size: 1.2em;
  font-weight: 300;
  letter-spacing: 0.1em;
}

.moto {
  position: absolute;
  top: 45vh;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 21;
  pointer-events: none;
  color: white;
  -webkit-backface-visibility: hidden;
  font-size: 1.2em;
  font-weight: 300;
  text-align: center;
  letter-spacing: 0.05em;
}

.moto-abbrev {
  font-weight: 400;
  letter-spacing: -1em;
  animation: 0.5s normal forwards letter-slide;
  animation-timing-function: ease-in;
  animation-delay: 0.5s;
}

.moto-slash {
  color: #ECBB11;
  padding-right: 5px;
}

.moto-letter {
  opacity: 0;
  animation: 1s normal forwards letter-fade-in;
  animation-timing-function: ease-in;
  animation-delay: 1s;
}

.moto-tagline {
  opacity: 0;
  animation: 1s normal forwards letter-fade-in;
  animation-timing-function: ease-in;
  animation-delay: 1.5s;
}

@keyframes letter-slide {
  0% { letter-spacing: -1em; }
  100% { letter-spacing: 0.1em; }
}

@keyframes letter-fade-in {
  0% { opacity: 0; }
  100% { opacity: 1; }
}

.load-wrapper {
  position: absolute;
  width: 100%;
  margin-top: 10px;
}

.load-bar {
  position: relative;
  width: 100%;
  height: 6px;
  background-color: #fdba2c;
}
.bar {
  content: "";
  display: inline;
  position: absolute;
  left: 50%;
  text-align: center;
}

.bar:nth-child(1) {
  background-color: #333;
}
.bar:nth-child(2) {
  background-color: #fdba2c;
  animation: loading 3s linear 2s infinite;
}
@keyframes loading {
  from { left: 0%; width: 0; z-index: 100 ;}
  33.3333% { left: 50%; width: 100%; z-index: 10; }
  to { left: 100%; width: 100%; }
}

#contact-me {
  background-color: rgba(0,0,0,0);
  height: 100%;
  text-align: center;
  padding: 5px 20px;
  border: 1px solid #ECBB11;
  color: #ECBB11;
  font-size: 1.2em;
  font-weight: 700;
  width: fit-content;
  margin: 10px 0;
  border-radius: 20px;
}

@media only screen and (max-width: 420px) {
  .splash-tagline {
    padding-right: 20px;
  }
}

@media only screen and (max-width: 370px) {
  .tagline-description {
    font-size: 1.6em;
  }
}
</style>
