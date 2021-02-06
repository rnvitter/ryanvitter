<template>
  <div style="position: relative; padding: 0;">
    <snackbar></snackbar>
    <div class="splash-tagline">
      <div class="tagline-title">Hello,</div>
      <div class="tagline-title">I'm Ryan Vitter</div>
      <div class="tagline-description">Developer. Designer. Photographer.</div>
      <div class="tagline-footer">
        <div id="contact-me" @click="copyEmail">Contact Me</div>
        <div>
          <a href="https://www.linkedin.com/in/rnvitter" target="_blank" class="icon icon-linkedin"></a>
          <a href="https://github.com/rnvitter" target="_blank" class="icon icon-github"></a>
          <a href="https://www.instagram.com/ryanvitter/" target="_blank" class="icon icon-instagram"></a>
        </div>
      </div>
      <span id="copy-email-splash" style="display: none;">ryanvitter@gmail.com</span>
    </div>
    <!-- <div class="moto">
      <span class="moto-abbrev">
        <span class="moto-letter">K</span><span class="moto-slash"> /</span>
        <span class="moto-letter">I</span><span class="moto-slash"> /</span>
        <span class="moto-letter">S</span><span class="moto-slash"> /</span>
        <span class="moto-letter">S</span>
      </span>
      <br>
      <span class="moto-tagline">Keep It Simple Stupid</span>
    </div> -->
    <div class="splash-wrapper">
      <div class="splash-image"></div>
    </div>
    <div class="splash-background"></div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import Snackbar from '@/components/Snackbar'

const components = {
  Snackbar
}

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

    var snackbar = document.getElementById('snackbar')
    snackbar.className = 'show'
    setTimeout(function() { snackbar.className = snackbar.className.replace('show', '') }, 4000)
  }
}

export default {
  name: 'splash-screen',
  components,
  computed,
  methods
}
</script>

<style>
.splash-wrapper {
  position: relative;
  height: 300px;
  width: 100%;
}

.splash-background {
  position: absolute;
  top: 0;
  height: 300px;
  width: 100%;
  background-color: #333;
}

.splash-image {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  z-index: 10;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  filter: grayscale(100%);
  background-image: linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(../static/img/background.jpg);
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
  top: 70px;
  left: 40px;
  z-index: 11;
  color: white;
  opacity: 1;
  /* animation: 1s normal forwards letter-fade-in;
  animation-timing-function: ease-in;
  animation-delay: 3s; */
}

.tagline-title {
  font-size: 36px;
  font-weight: 600;
  letter-spacing: -0.5px;
  line-height: 38px;
}

.tagline-description {
  line-height: 24px;
  font-size: 20px;
  font-weight: 300;
  letter-spacing: 1px;
  margin: 5px 0 15px;
  opacity: 0.9;
}

.moto {
  position: absolute;
  top: 10px;
  right: 50px;
  z-index: 21;
  pointer-events: none;
  color: white;
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
}

.moto-slash {
  color: var(--primary);
  padding-right: 5px;
}

.moto-letter {
  opacity: 0;
  animation: 0.7s normal forwards letter-fade-in;
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
  50% { opacity: 0.4; }
  100% { opacity: 1; }
}

#contact-me {
  background-color: rgba(0,0,0,0);
  height: 100%;
  text-align: center;
  padding: 5px 20px;
  border: 1px solid var(--primary);
  color: var(--primary);
  font-size: 16px;
  font-weight: 700;
  margin-right: 15px;
  width: fit-content;
  border-radius: 8px;
}

.tagline-footer  {
  display: flex;
  align-items: flex-end;
  margin-top: 10px;
}

.icon {
  color: var(--primary);
  font-size: 28px;
  margin: 0 15px;
  text-decoration: none;
}

#contact-me:hover, .icon:hover {
  opacity: 0.7;
  cursor: pointer;
}

@media only screen and (max-width: 420px) {
  .splash-tagline {
    padding-right: 20px;
    left: 20px;
  }

  .tagline-description {
    font-size: 16px;
  }
}
</style>
