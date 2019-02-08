<template>
  <div id="footer" style="margin-top: 80px;">
    <div class="footer-section">
      <div v-if="!mobilePhone">
        <div class="about-text mb-3 pb-2" style="color: #fff; font-weight: 400; letter-spacing: 0.1em; font-size: 1em;" v-if="copied">My email has been copied to your clipboard!</div>
        <div id="email-btn" class="contact-btn" @click="copyEmail">Get in touch by email</div>
        <div id="email-btn" class="contact-btn" @click="copyEmail">My photography site</div>
        <span id="copy-email-footer" style="display: none;">ryanvitter@gmail.com</span>
      </div>
      <!-- <div class="footer-text pt-2">You can also find me on these social media platforms as well.</div> -->
      <div>
        <a href="https://www.linkedin.com/in/rnvitter" target="_blank" class="icon icon-linkedin"></a>
        <a href="https://github.com/rnvitter" target="_blank" class="icon icon-github"></a>
        <a href="https://www.flickr.com/photos/52039563@N07/" target="_blank" class="icon icon-flickr"></a>
        <a href="https://www.instagram.com/rnv.photo/" target="_blank" class="icon icon-instagram"></a>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const computed = {
  ...mapGetters({
    mobilePhone: 'ux/mobilePhone'
  })
}

const methods = {
  copyEmail () {
    var email = document.getElementById('copy-email-footer')
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
  name: 'rv-footer',
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
#footer {
  background-color: #333;
  color: #f5f5f5;
  height: 100%;
  text-align: center;
}

.footer-section {
  padding: 40px 0;
}

.footer-text {
  margin: 20px;
  letter-spacing: 0.05em;
  font-size: 1.2em;
}

.contact-btn {
  padding: 10px 30px;
  display: inline-block;
  margin: 0px 10px 30px;
  background-color: rgba(0,0,0,0);
  border: 2px solid #ECBB11;
  color: #ECBB11;
  font-size: 1.2em;
  font-weight: 700;
  width: fit-content;
}

.contact-btn a {
  color: #fff;
}

.contact-btn:hover {
  cursor: pointer;
  color: #fff;
  background-color: #ECBB11;
}

.icon {
  color: #ECBB11;
  font-size: 2.4em;
  margin: 20px;
  text-decoration: none;
}

.icon:hover {
  opacity: 0.7;
  cursor: pointer;
}
</style>
