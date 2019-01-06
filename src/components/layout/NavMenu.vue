<template>
  <div class="layout-container nav-menu"
    :style="mobile ? 'padding-top: 100px !important;' : 'padding-top: 90px;'"
    @click="toggleMenu">
    <ul class="primary-nav-menu">
      <li class="nav-menu-item" @click="toggleMenu">
        <div><a href="about">About Me</a></div>
      </li>
      <li class="nav-menu-item" @click="toggleMenu">
        <div><a href="#projects">Projects</a></div>
      </li>
      <li class="nav-menu-item" @click="toggleMenu">
        <div><a href="#maps">Maps</a></div>
      </li>
      <li class="nav-menu-item" @click="toggleMenu">
        <div><a href="#photos">Photos</a></div>
      </li>
      <li class="nav-menu-item" @click="toggleMenu">
        <div><a href="#contact">Contact</a></div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

const computed = {
  ...mapGetters({
    mobile: 'ux/mobile',
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
.nav-menu {
  position: fixed;
  top: 0px;
  left: 50%;
  transform: translateX(-50%);
  width: 101%;
  height: 100%;
  z-index: 50;
  overflow: auto;
  background-color: #fff;
  opacity: 0.97;
}

.nav-menu-item {
  font-size: 1.8em;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-transform: uppercase;
  margin-bottom: 20px;
  margin-right: 20px;
  text-align: end;
}

.nav-menu-item a {
  text-decoration: none;
}

.nav-menu-item a {
  color: #333;
  background: rgba(0,0,0,0);
}

.primary-nav-menu, .secondary-nav-menu {
  list-style-type: none;
}

@media only screen and (max-width: 960px) {
  .nav-menu-item a {
    color: #333;
    font-size: 1.4em;
    font-weight: 700;
    letter-spacing: -0.02em;
    background: none;
    box-shadow: none;
  }
}

@media only screen and (max-width: 420px) {
  .nav-menu-item {
    font-size: 1.2em;
  }
}
</style>
