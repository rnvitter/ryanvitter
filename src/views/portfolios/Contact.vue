<template>
  <div id="contact">
    <div style="padding: 0 20px;">
      <div class="contact-section app-container">
        <div class="contact-text">If you'd like to talk to me or have freelance work shoot me an email</div>
        <div id="email-btn" class="contact-btn" @click="copyEmail">Reach Me Here</div>
        <span id="copy-email" style="display: none;">ryanvitter@gmail.com</span>
        <div class="contact-text pb-2" style="color: #fff; font-weight: 500;" v-if="copied">My email has been copied to your clipboard!</div>
        <div class="contact-text">If you're interested in my photography or a photo shoot go to my photography website</div>
        <a href="https://www.rnv-photo.com/" target="_blank" class="contact-btn" style="text-decoration: none;">rnv-photo.com</a>
        <div class="contact-text pt-2">You can also find me on these social media platforms as well</div>
        <div>
          <a href="https://www.linkedin.com/in/rnvitter" target="_blank" class="icon icon-linkedin"></a>
          <a href="https://github.com/rnvitter" target="_blank" class="icon icon-github"></a>
          <a href="https://www.flickr.com/photos/52039563@N07/" target="_blank" class="icon icon-flickr"></a>
          <a href="https://www.instagram.com/rnv.photo/" target="_blank" class="icon icon-instagram"></a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const name = 'About'

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
  name,
  methods,
  data () {
    return {
      copied: false
    }
  }
}
</script>

<style>
#contact {
  margin: 0 -20px;
  background-color: #333;
  color: #f5f5f5;
  height: 100%;
  text-align: center;
}

.contact-section {
  padding: 50px 0;
}

.contact-text {
  margin: 20px;
}

.contact-btn {
  padding: 10px 30px;
  border: 1px solid #ECBB11;
  border-radius: 20px;
  color: #ECBB11;
  font-size: 1.2em;
  font-weight: 700;
  width: fit-content;
  margin: 10px auto 20px;
}

.icon {
  color: #ECBB11;
  font-size: 2.4em;
  margin: 20px;
  text-decoration: none;
}

.contact-btn:hover, .icon:hover {
  opacity: 0.7;
  cursor: pointer;
}
</style>
