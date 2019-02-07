<template>
  <div class="layout-container mobile-nav-menu">
    <ul class="mobile-primary-nav-menu">
      <li class="mobile-nav-menu-item" @click="toggleMenu">
        <div><a href="#about">About Me</a></div>
      </li>
      <li class="mobile-nav-menu-item" @click="toggleMenu">
        <div><a href="#projects">Projects</a></div>
      </li>
      <li class="mobile-nav-menu-item" @click="toggleMenu">
        <div><a href="#maps">Maps</a></div>
      </li>
      <!-- <li class="mobile-nav-menu-item" @click="toggleMenu">
        <div><a href="#photos">Photos</a></div>
      </li> -->
      <li class="mobile-nav-menu-item" @click="toggleMenu">
        <div><a href="#contact">Contact</a></div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

const computed = {
  ...mapGetters({
    menu: 'ux/menu'
  })
}

const methods = {
  ...mapActions({
    toggleMenu: 'ux/toggleMenu'
  })
}

export default {
  computed,
  methods,
  mounted () {
    window.addEventListener('scroll', () => {
      if (this.menu) this.toggleMenu()
    })
  },
  beforeDestroy () {
    window.removeEventListener('scroll', () => {
      if (this.menu) this.toggleMenu()
    })
  }
}
</script>

<style>
.mobile-nav-menu {
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 101%;
  height: 100%;
  z-index: 50;
  overflow: auto;
  opacity: 0.97;
  background-color: #fff;
  padding-top: 100px;
}

.mobile-nav-menu-item {
  font-size: 1.8em;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  margin-bottom: 20px;
  margin-right: 20px;
  text-align: end;
}

.mobile-nav-menu-item a {
  text-decoration: none;
  color: #333;
  font-size: 1.4em;
  font-weight: 700;
  letter-spacing: -0.02em;
  background: none;
  box-shadow: none;
}

.mobile-primary-nav-menu {
  list-style-type: none;
}

@media only screen and (max-width: 420px) {
  .nav-menu-item {
    font-size: 1.2em;
  }
}
</style>
