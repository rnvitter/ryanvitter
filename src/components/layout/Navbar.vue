<template>
  <div id="navbar">
    <div class="navbar-content">
      <div class="header-title">Ryan Vitter</div>

      <div style="display: flex; align-items: center;">
        <ul class="primary-nav-menu" v-if="!mobile && menu">
          <li class="nav-menu-item" @click="toggleMenu">
            <div><a href="#about">About Me</a></div>
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

        <div class="kebab" @click="toggleMenuClick">
          <figure></figure>
          <figure class="middle"></figure>
          <p class="cross">x</p>
          <figure></figure>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import NavMenu from './NavMenu'

const components = {
  NavMenu
}

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
  headerStyle () {
    const header = document.getElementById('navbar')
    const title = document.getElementsByClassName('header-title')[0]
    const menu = document.getElementsByClassName('nav-menu-line')
    const scrollTop = window.scrollY
    const breakPoint = window.innerHeight - 20
    if ((scrollTop > breakPoint && !header.classList.contains('fixed-navbar') && this.mobile) || this.menu) {
      header.classList.add('fixed-navbar')
      title.style.opacity = 1
    }
    else if ((scrollTop < breakPoint && header.classList.contains('fixed-navbar') && !this.menu) || !this.mobile) {
      header.classList.remove('fixed-navbar')
      title.style.opacity = 0
    }
  },
  menuStyle () {
    const kebab = document.querySelector('.kebab')
    const middle = document.querySelector('.middle')
    const cross = document.querySelector('.cross')

    if (this.menu && !middle.classList.contains('active')) {
      middle.classList.add('active')
      cross.classList.add('active')
    } else if (!this.menu && middle.classList.contains('active')) {
      middle.classList.remove('active')
      cross.classList.remove('active')
    }
  },
  toggleMenuClick () {
    const header = document.getElementById('navbar')
    const title = document.getElementsByClassName('header-title')[0]
    const menu = document.getElementsByClassName('nav-menu-line')
    if (!header.classList.contains('fixed-navbar')) {
      header.classList.add('fixed-navbar')
      title.style.opacity = 1
    }
    else if (header.classList.contains('fixed-navbar')) {
      header.classList.remove('fixed-navbar')
      title.style.opacity = 0
    }

    this.toggleMenu()
  }
}

const watch = {
  mobile () {
    this.headerStyle()
    this.menuStyle()
  },
  menu () {
    this.menuStyle()
    this.headerStyle()
  }
}

export default {
  name: 'navbar',
  components,
  computed,
  methods,
  watch,
  mounted () {
    this.headerStyle()
    this.menuStyle()
    window.addEventListener('scroll', () => this.headerStyle())
    document.querySelector('.kebab').addEventListener('click', () => this.menuStyle())
  },
  beforeDestroy () {
    window.removeEventListener('scroll', () => this.headerStyle())
    document.querySelector('.kebab').removeEventListener('click', () => this.menuStyle())
  }
}
</script>

<style>
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 100;
  opacity: 0;
  animation: 1s normal forwards letter-fade-in;
  animation-timing-function: ease-in;
  animation-delay: 2s;
}

.fixed-navbar {
  background-color: #fff;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.3);
}

.navbar-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  padding: 0 20px;
}

.header-title {
  font-size: 1.8em;
  font-weight: 700;
  /* letter-spacing: -0.02em; */
  color: #333;
  text-transform: uppercase;
  opacity: 0;
}

.kebab {
  cursor: pointer;
  position: relative;
  display: inline-block;
  box-sizing: border-box;
}

.kebab figure {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #ECBB11;
  margin: 3px;
}

.middle {
  transition: all 0.25s cubic-bezier(.72,1.2,.71,.72);
  transform: scale(1);
  position: relative;
  box-shadow: 0 0.1px 0.1px 0 rgba(0, 0, 0, 0.16), 0 0.1px 0.3px 0 rgba(0, 0, 0, 0.12);
  /* filter: blur(.1px); */
}

.middle.active {
  transform: scale(4.5);
  transition: all 0.25s cubic-bezier(.32,2.04,.85,.54);
  box-shadow: 0 0.1px 0.1px 0 rgba(0, 0, 0, 0.16), 0 0.1px 0.3px 0 rgba(0, 0, 0, 0.12);
}

.cross {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0);
  color: white;
  transition: all 0.2s cubic-bezier(.72,1.2,.71,.72);
  font-weight: 500;
  font-size: 1.4em;
  margin-top: -2px;
  user-select: none;
}

.cross.active {
  transform: translate(-50%, -50%) scale(1);
  transition: all 0.15s cubic-bezier(.32,2.04,.85,.54);
}

.primary-nav-menu {
  display: flex;
  list-style-type: none;
  margin-right: 30px;
}

.nav-menu-item a {
  text-transform: uppercase;
  margin-right: 20px;
  text-align: end;
  text-decoration: none;
  color: #333;
  font-size: 1.2em;
  font-weight: 700;
  letter-spacing: -0.02em;
}
</style>
