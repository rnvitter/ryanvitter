<template>
  <div id="about" class="app-container">
    <div class="section-title mb-5">About Me</div>
    <div class="about-description">
      <span class="about-text">
        I am a software engineer based in the DC area.
        My focus is on frontend code and UI/UX design.
        My speciality is
      </span>
      <span class="skill">Vue.js</span>
      <span class="about-text">, but I also have experience with </span>
      <span class="skill">Illustrator</span>
      <span class="about-text">, </span>
      <span class="skill">Lightroom</span>
      <span class="about-text">, and several GIS softwares.</span>
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
        <div class="skills-header more-title">Some Experience</div>
        <v-divider class="ml-4"></v-divider>
      </div>
      <div class="skills-wrapper">
        <span>Python</span>
        <span>Node</span>
        <span>Photoshop</span>
        <span>Adobe XD</span>
        <span>ArcGIS</span>
        <span>PostgresSQL</span>
        <span>PostGIS</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'about'
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
  font-size: 1.6em;
}

.skill  {
  font-size: 1em;
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
  margin: 5px;
  background: #ECBB11;
  color: #fff;
  padding: 6px 16px;
  border-radius: 50px;
  font-weight: 400;
  letter-spacing: 0.1em;
}
</style>
