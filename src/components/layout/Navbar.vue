<template>
  <div class="navbar">
    <div class="header-title">Ryan Vitter</div>

    <div class="navbar-title">Menu</div>
    <div class="navbar-item">Projects</div>
    <div class="navbar-item">Maps</div>
    <div class="navbar-item">Photos</div>

    <v-divider class="navbar-divider"></v-divider>

    <div class="navbar-title">Social</div>
    <div class="navbar-item">Linkedin</div>
    <div class="navbar-item">Github</div>
    <div class="navbar-item">Flickr</div>
    <div class="navbar-item">Instagram</div>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style>
.navbar {
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  padding: 10px;
  text-align: end;
  /* color: white; */
  /* mix-blend-mode: difference; */
}

.header-title {
  margin-bottom: 20px;
  font-size: 1.4em;
  font-weight: 600;
  letter-spacing: 0.02em;
  color: #333;
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
  margin: 20px 0;
}

.navbar-item {
  display: flex;
  justify-content: flex-end;
  align-items: center;
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
