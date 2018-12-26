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
    const scrollTop = window.scrollY
    if (scrollTop > 10 && !header.classList.contains('fixed-navbar')) {
      header.classList.add('fixed-navbar')
    }
    if (scrollTop < 10 && header.classList.contains('fixed-navbar')) {
      header.classList.remove('fixed-navbar')
    }
  }
}

export default {
  name: 'navbar',
  methods,
  mounted () {
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
  background-color: #fff;
  box-shadow: 0 4px 4px -2px rgba(0, 0, 0, 0.3);
}

.navbar-content {
  width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 10px auto;
  padding: 0 20px;
}

.header-title {
  font-size: 2em;
  font-weight: 600;
  letter-spacing: 0.03em;
  color: #333;
}

.nav-menu {
  width: 30px;
}

.nav-menu-line {
  background-color: #333;
  height: 4px;
  width: 100%;
  display: block;
}
</style>
