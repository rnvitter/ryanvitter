<template>
  <div style="position: relative; padding: 0;">
    <div class="splash-tagline">
      <div class="tagline-title">Hello,</div>
      <div class="tagline-title">I'm Ryan Vitter</div>
      <div class="tagline-description">Developer / UX Designer / Cartographer</div>
      <div id="contact-me" @click="copyEmail">Contact Me</div>
      <span id="copy-email-splash" style="display: none;">ryanvitter@gmail.com</span>
      <div class="copied-text" v-if="copied">My email has been copied to your clipboard!</div>
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

const computed = {
  ...mapGetters({
    mobile: 'ux/mobile'
  })
}

const methods = {
  copyEmail () {
    var email = document.getElementById('copy-email-splash')
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
  methods,
  data () {
    return {
      copied: false
    }
  }
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
  animation-delay: 2s;
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(../static/img/backgrounds/background-1.jpg);
}
.splash-image li:nth-child(2) span {
  animation-delay: 8s;
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(../static/img/backgrounds/background-2.jpg);
}
.splash-image li:nth-child(3) span {
  animation-delay: 14s;
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(../static/img/backgrounds/background-3.jpg);
}
.splash-image li:nth-child(4) span {
  animation-delay: 20s;
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(../static/img/backgrounds/background-4.jpg);
}

@keyframes imageAnimation {
  0% { opacity: 0; animation-timing-function: ease-in; }
  4% { opacity: 1; }
  22% { opacity: 1; }
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
  animation-delay: 3s;
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
  animation: 0.5s normal forwards letter-slide;
  -webkit-animation: 0.5s normal forwards letter-slide;
  -webkit-animation-timing-function: ease-in;
  -webkit-animation-delay: 0.5s;
}

.moto-slash {
  color: #ECBB11;
  padding-right: 5px;
}

.moto-letter {
  opacity: 0;
  animation: 0.7s normal forwards letter-fade-in;
  animation-timing-function: ease-in;
  animation-delay: 1s;
  -webkit-animation: 0.7s normal forwards letter-fade-in;
  -webkit-animation-timing-function: ease-in;
  -webkit-animation-delay: 1s;
}

.moto-tagline {
  opacity: 0;
  animation: 1s normal forwards letter-fade-in;
  animation-timing-function: ease-in;
  animation-delay: 1.5s;
  -webkit-animation: 1s normal forwards letter-fade-in;
  -webkit-animation-timing-function: ease-in;
  -webkit-animation-delay: 1.5s;
}

@keyframes letter-slide {
  0% { letter-spacing: -1em; }
  100% { letter-spacing: 0.1em; }
}

@keyframes letter-fade-in {
  0% { opacity: 0; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
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
  cursor: pointer;
}

.copied-text {
  color: #ECBB11;
  font-weight: 500;
  letter-spacing: 0.05em;
  margin-left: 10px;
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
