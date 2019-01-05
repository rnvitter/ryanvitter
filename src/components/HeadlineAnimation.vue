<template>
  <div class="headline">
    <div class="words-wrapper">
      <span>HELLO</span>
      <span>BONJOUR</span>
      <span>HOLA</span>
      <!-- <span>GUTEN TAG</span>
      <span>CIAO</span>
      <span>OLÀ</span>
      <span>NAMASTE</span>
      <span>KONNICHIWA</span>
      <Span>MARHABA</Span> -->
    </div>
  </div>
</template>

<script>
  const name = 'HeadlineAnimation'

  export default {
    name
  }
</script>

<style scoped>
  .headline {
    z-index: 20;
    pointer-events: none;
    transform-style: preserve-3d;
    transform: translate3d(0,0,0);
    backface-visibility: hidden;
    animation: 3s ease 0s normal forwards 1 title-fade-in;
    color: white;
    text-transform: uppercase;
    display: inline;
  }

  .words-wrapper {
    position: relative;
  }

  .words-wrapper span {
    /* position: absolute; */
    opacity: 0;
    overflow: hidden;
    -webkit-backface-visibility: hidden;
    will-change: transform;
  	animation: rotateWords 18s linear infinite 0s;
  }

  .words-wrapper span:nth-child(2) {
  	animation-delay: 6s;
  }
  .words-wrapper span:nth-child(3) {
  	animation-delay: 12s;
  }

  @keyframes rotateWords {
    0% { opacity: 1; animation-timing-function: ease-in; animation-timing-function: ease-in; height: 0px; }
    8% { opacity: 1; height: 60px; }
    16% { opacity: 1; height: 60px; }
    36% { opacity: 0; height: 60px; }
    100% { opacity: 0; }
  }

  @keyframes title-fade-in {
    0% { opacity: 0; }
    30% { opacity: 0; }
    100% { opacity: 1; }
  }
</style>
