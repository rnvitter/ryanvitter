<template>
  <v-container grid-list-lg>
    <v-layout row wrap>
      <v-flex xs12>
        <div class="splash-wrapper">
          <div class="splash">
            <div class="splash-tagline">
              <div class="tagline-title">K.I.S.S.</div>
              <div class="tagline-description">Keep it simple stupid</div>
            </div>
          </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapGetters } from 'vuex'

const computed = {
  ...mapGetters({
    mobile: 'ux/mobile'
  })
}

export default {
  computed
}
</script>

<style>
.splash-wrapper {
  position: relative;
  height: 100vh;
  width: 100%;
}

.splash {
  padding-top: 70px;
  width: 100%;
}

.splash-tagline {
  padding-left: 100px;
}

.splash-tagline {
  position: absolute;
  bottom: 160px;
  margin: 80px 0;
  color: #333;
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
