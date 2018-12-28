<template>
  <div class="layout-container nav-menu"
    :style="mobile ? 'padding-top: 100px !important;' : 'padding-top: 90px;'"
    @click="toggleMenu">
    <ul class="primary-nav-menu">
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
        <div><a href="#about">About</a></div>
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
  }),
  goTo () {
    this.toggleMenu()
  }
}

export default {
  computed,
  methods,
  mounted () {
    window.addEventListener('scroll', () => {
      if (this.menu) {
        this.toggleMenu()
      }
    })
  },
  beforeDestroy () {
    window.removeEventListener('scroll', () => {
      if (this.menu) {
        this.toggleMenu()
      }
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
  width: 100%;
  height: 100%;
  z-index: 1001;
  overflow: auto;
}

.nav-menu-item {
  font-size: 1.8em;
  font-weight: 300;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 20px;
}

.nav-menu-item a {
  text-decoration: none;
}

.nav-menu-item a {
  color: #fff;
  padding: 10px 16px;
  background: #333;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.3);
}

.nav-menu-item .router-link-exact-active {
  color: #FA3138 !important;
}

.primary-nav-menu, .secondary-nav-menu {
  list-style-type: none;
}

.active-nav-menu-item {
  color: #FA3138 !important;
}

@media only screen and (max-width: 960px) {
  .nav-menu {
    background-color: #333;
  }
}

@media only screen and (min-width: 421px) {
  .nav-menu-item {
    text-align: end;
  }
}

@media only screen and (max-width: 420px) {
  .nav-menu {
    z-index: 1002;
  }

  .nav-menu-item {
    font-size: 1.2em;
  }
}
</style>
