<template>
  <div id="navbar">
    <div class="navbar-content">
      <div class="header-title">Ryan Vitter</div>

      <div class=nav-menu>
        <span class="nav-menu-line"></span>
        <span class="nav-menu-line" style="margin-top: 5px;"></span>
        <span class="nav-menu-line" style="margin-top: 5px;"></span>
      </div>
    </div>
  </div>
</template>

<script>
const methods = {
  headerStyle () {
    const header = document.getElementById('navbar')
    const title = document.getElementsByClassName('header-title')[0]
    const menu = document.getElementsByClassName('nav-menu-line')
    const scrollTop = window.scrollY
    if (scrollTop > 10 && !header.classList.contains('fixed-navbar')) {
      header.classList.add('fixed-navbar')
      title.style.color = '#fff'
      for (var i = 0, all = menu.length; i < all; i++){
        menu[i].classList.add('dark')
      }
    }
    if (scrollTop < 10 && header.classList.contains('fixed-navbar')) {
      header.classList.remove('fixed-navbar')
      title.style.color = '#333'
      for (var i = 0, all = menu.length; i < all; i++){
        menu[i].classList.remove('dark')
      }
    }
  }
}

export default {
  name: 'navbar',
  methods,
  mounted () {
    this.headerStyle()
    window.addEventListener('scroll', () => this.headerStyle())
  },
  beforeDestroy () {
    window.removeEventListener('scroll', () => this.headerStyle())
  }
}
</script>

<style>
#navbar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 20;
}

.fixed-navbar {
  background-color: #333;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.3);
}

.navbar-content {
  /* width: 1200px; */
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
}

.nav-menu {
  width: 25px;
}

.nav-menu-line {
  background-color: #333;
  height: 3px;
  width: 100%;
  display: block;
}

.dark {
  background-color: #fff;
}
</style>
