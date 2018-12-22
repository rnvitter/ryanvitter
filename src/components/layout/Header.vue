<template>
  <div class="header-wrapper">
    <div id="rv-header">
      <div class="mobile-header-title">Ryan Vitter</div>
      <v-icon class="header-menu">menu</v-icon>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

const computed = {
  ...mapGetters({
    mobile: 'ux/mobile'
  })
}

const methods = {
  onScroll () {
    const header = document.getElementById('rv-header')
    const scrollTop = window.scrollY
    if (scrollTop > 10 && !header.classList.contains('fixed-header')) {
      if (this.mobile) header.classList.add('mobile-header')
    }
    if (scrollTop < 10 && header.classList.contains('fixed-header')) {
      if (this.mobile) header.classList.remove('mobile-header')
    }
  }
}

export default {
  computed,
  methods,
  data () {
    return {
      isIE11: false
    }
  },
  mounted () {
    this.isIE11 = !!window.MSInputMethodContext && !!document.documentMode
    if (this.isIE11) {
      const header = document.getElementById('header')
      header.classList.add('fixed-header')
    } else {
      window.addEventListener('resize', () => { this.onScroll() })
      window.addEventListener('scroll', () => { this.onScroll() })
    }
  },
  beforeDestroy () {
    if (!this.isIE11) {
      window.removeEventListener('resize', () => { this.onScroll() })
      window.removeEventListener('scroll', () => { this.onScroll() })
    }
  }
}
</script>

<style>
  .header-wrapper {
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: fit-content;
    padding: 10px 35px;
    z-index: 50;
  }

  #rv-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .mobile-header {
    padding: 10px 25px !important;
    background-color: #fff;
    box-shadow: 0 3px 4px 0 rgba(0, 0, 0, .14), 0 3px 3px -2px rgba(0, 0, 0, .2), 0 1px 8px 0 rgba(0, 0, 0, .12);
  }

  .mobile-header-title {
    font-size: 1.2em;
    font-weight: 600;
    letter-spacing: 0.02em;
    color: #333;
    text-transform: uppercase;
  }

  .header-menu {
    font-size: 1.6em;
    font-weight: 400;
    color: black;
    cursor: pointer;
  }
</style>
