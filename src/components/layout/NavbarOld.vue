<template>
  <div id="navbar-side">
    <div class="navbar-top">
      <div class="navbar-item">Projects</div>
      <div class="navbar-item">Maps</div>
      <div class="navbar-item">Photos</div>

      <v-divider class="navbar-divider"></v-divider>

      <div class="navbar-item">Linkedin</div>
      <div class="navbar-item">Github</div>
      <div class="navbar-item">Flickr</div>
      <div class="navbar-item">Instagram</div>
    </div>

    <div class="navbar-bottom">
      <div class="header-title">Ryan Vitter</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style>
#navbar-side {
  position: fixed;
  left: 0;
  width: 200px;
  display: flex;
  justify-content: flex-end;
}

.navbar-top {
  position: fixed;
  top: 0;
  margin-top: 10px;
}

.navbar-bottom {
  position: fixed;
  bottom: 0;
  margin-bottom: 10px;
}

.header-title {
  font-size: 1.8em;
  font-weight: 600;
  color: #333;
  text-align: end;
  text-transform: uppercase;
}

.navbar-title {
  font-size: 1.4em;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: rgba(0,0,0,0.9);
}

.navbar-item {
  font-size: 1.2em;
  font-weight: 500;
  letter-spacing: 0.05em;
  color: rgba(0,0,0,0.4);
}

.navbar-divider {
  margin: 10px 0;
}

.navbar-item {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 5px;
}

.toolbar-icon {
  display: block;
  font-size: 1.8em;
  margin-left: 5px;
  cursor: pointer;
}

.toolbar-icon:hover {
  opacity: 0.8;
}
</style>
