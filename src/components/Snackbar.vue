<template>
  <div id="snackbar">
    My email was copied to your clipboard
  </div>
</template>

<script>
export default {}
</script>

<style>
#snackbar {
  visibility: hidden;
  position: fixed;
  top: 15px;
  left: 50%;
  transform: translateX(-50%);
  background-color: var(--primary);
  padding: 8px 20px;
  border-radius: 8px;
  box-shadow: 0 3px 5px -1px rgb(0 0 0 / 20%), 0 6px 10px 0 rgb(0 0 0 / 14%), 0 1px 18px 0 rgb(0 0 0 / 12%);
  z-index: 20;
  width: fit-content;
  height: fit-content;
}

#snackbar.show {
  visibility: visible;
  animation: fadein 0.5s, fadeout 0.5s 4s;
}

@keyframes fadein {
  from { opacity: 0 }
  to { opacity: 1 }
}

@keyframes fadeout {
  from { opacity: 1 }
  to { opacity: 0 }
}
</style>
