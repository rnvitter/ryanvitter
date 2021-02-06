<template>
  <div id="about" class="app-container">
    <div class="about-description">
      <span class="about-text">
        I am a freelancer based in the DC area.
        My focus is on front end code and UX design.
        My specialty is Vue, but I also have experience with Flutter, Illustrator, Lightroom, and QGIS.
        I enjoy work the most when I am designing apps in Sketch, bringing them to life with JavaScript or Flutter
        and working with people to improve the experience and overall look of the product.
      </span>
      <div id="contact">
        <span class="about-text">If you have any kind of work including web design, app development, cartography, or photography you can reach me at </span>
        <span
          @click="copyEmail"
          class="about-text link-text">
          ryanvitter@gmail.com
        </span>
        <span id="copy-email-about" style="display: none;">ryanvitter@gmail.com</span>
        <span>.</span>
      </div>
      <!-- <span class="contact-text pt-2">You can also find me on these social media platforms as well.</span> -->
    </div>
    <div style="text-align: center;">
      <div class="skills-header more-title">Top Skills</div>
      <div class="skills-wrapper">
        <span>Javascript</span>
        <span>Vue.js</span>
        <span>Flutter</span>
        <span>Sketch</span>
        <span>Lightroom</span>
        <span>D3</span>
        <span>Illustrator</span>
      </div>
      <div class="skills-header more-title">Additional Skills</div>
      <div class="skills-wrapper additional-skills">
        <span>Node</span>
        <span>Photoshop</span>
        <span>QGIS</span>
        <span>ArcGIS</span>
        <span>PostgresSQL</span>
        <span>PostGIS</span>
        <span>Django</span>
      </div>
    </div>
  </div>
</template>

<script>
const methods = {
  copyEmail () {
    var email = document.getElementById('copy-email-about')
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
  name: 'about',
  methods
}
</script>

<style>
#about {
  margin-bottom: 60px;
}

.about-description {
  vertical-align: top;
  font-weight: 400;
  margin-bottom: 30px;
}

.about-text {
  font-size: 18px;
  line-height: 32px;
}

.about-description .skill {
  font-size: 13px;
}

.link-text {
  color: var(--text-color);
  border-bottom: 2px solid var(--primary);
  padding-bottom: 1px;
  font-weight: 500;
}

.link-text:hover {
  cursor: pointer;
  color: var(--primary);
}

.skills-header {
  margin: 20px 0;
  font-size: 1.2em !important;
  font-weight: 500;
  font-weight: 300;
  letter-spacing: 0.05em;
}

.skills-wrapper span, .skill {
  display: inline-block;
  margin-right: 5px;
  background: var(--primary);
  color: var(--text-color);
  padding: 4px 12px;
  border-radius: 4px;
  font-weight: 400;
  font-size: 13px;
  letter-spacing: 1px;
}

.skills-wrapper span {
  margin: 3px 5px;
}

.additional-skills span, .skill {
  background: var(--secondary);
}
</style>
