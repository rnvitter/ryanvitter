<template>
  <div id="about" class="app-container">
    <div class="section-title mb-5">About Me</div>
    <div class="about-description">
      <span class="about-text">
        I am a freelancer based in the DC area.
        My focus is on front end code and UX design.
        My specialty is
      </span>
      <span class="skill">Vue.js</span>
      <span class="about-text">, but I also have experience with </span>
      <span class="skill">Illustrator</span>
      <span class="about-text">, </span>
      <span class="skill">Lightroom</span>
      <span class="about-text">, and several GIS software, including </span>
      <span class="skill">QGIS</span>
      <span class="about-text">and </span>
      <span class="skill">ArcGIS</span>
      <span class="about-text">. </span>
      <!-- <span class="about-text">I studied Geography and GIS in school and started out doing GIS work professionally before transitioning to front end development. I took a liking to the UI and UX design aspects of building apps and websites. </span> -->
      <span class="about-text">I enjoy work the most when I am sketching out designs for features, bringing them to life with </span>
      <span class="skill">JavaScript</span>
      <span class="about-text"> and working with the users to better improve the experience and the overall look of the product.</span>
      <div style="margin: 20px 0;"></div>
      <div id="contact">
        <span class="about-text">If you have any kind of work including UX designing and UX design implementation, map making and GIS analysis, or graphic design you can reach me at </span>
        <span
          @click="copyEmail"
          class="about-text link-text">
          ryanvitter@gmail.com
        </span>
        <!-- <div id="email-btn" class="contact-btn" @click="copyEmail">Get in touch</div> -->
        <span id="copy-email" style="display: none;">ryanvitter@gmail.com</span>
        <div class="about-text mt-3 pb-2" style="color: #ECBB11; font-weight: 500;" v-if="copied">My email has been copied to your clipboard!</div>
        <div style="margin: 40px 0;"></div>
        <div class="about-text">I am also available for hire for any photography job. You can find my portfolio and past shoots ony my photography website at </div>
        <span>
          <a class="about-text link-text" href="https://www.rnv-photo.com/" target="_blank" style="text-decoration: none;">rnv-photo.com</a>
        </span>
      </div>
      <!-- <span class="contact-text pt-2">You can also find me on these social media platforms as well.</span> -->
    </div>
    <div style="text-align: center;">
      <div style="display: flex; align-items: center;">
        <v-divider class="mr-4"></v-divider>
        <div class="skills-header more-title">Top Skills</div>
        <v-divider class="ml-4"></v-divider>
      </div>
      <div class="skills-wrapper">
        <span>Javascript</span>
        <span>Vue.js</span>
        <span>Illustrator</span>
        <span>QGIS</span>
        <span>Lightroom</span>
        <span>D3</span>
      </div>
      <div style="display: flex; align-items: center;">
        <v-divider class="mr-4"></v-divider>
        <div class="skills-header more-title">Additional Skills</div>
        <v-divider class="ml-4"></v-divider>
      </div>
      <div class="skills-wrapper">
        <span>Node</span>
        <span>Photoshop</span>
        <span>Adobe XD</span>
        <span>ArcGIS</span>
        <span>PostgresSQL</span>
        <span>PostGIS</span>
        <span>Python</span>
        <span>Django</span>
        <span>GraphQL</span>
      </div>
    </div>
  </div>
</template>

<script>
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
  name: 'about',
  methods,
  data () {
    return {
      copied: false
    }
  }
}
</script>

<style>
#about {
  padding: 0 20px 30px 20px;
}

.about-description {
  vertical-align: top;
  font-weight: 500;
  text-align: center;
  margin-bottom: 30px;
}

.about-text {
  font-size: 1.4em;
}

.link-text {
  color: #757575;
  border-bottom: 2px solid #ECBB11;
  padding-bottom: 4px;
  font-weight: 700;
  letter-spacing: 0.05em;
}

.link-text:hover {
  cursor: pointer;
  color: #ECBB11;
}

.skills-header {
  margin: 20px 0;
  font-size: 1.2em !important;
  font-weight: 500;
  font-weight: 300;
  letter-spacing: 0.05em;
}
</style>
