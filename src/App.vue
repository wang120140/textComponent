<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
  html, body{
    overflow: hidden;
    background:black;

  }
  html, body, div {
    padding: 0;
    margin: 0;
    -webkit-tap-highlight-color: transparent;
    tap-highlight-color: transparent;
    -webkit-text-size-adjust:none;
    -moz-text-size-adjust: none;
    user-select: none;
    outline: none;
    box-sizing: border-box !important;
  }

  #app {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 19.20rem;
    height: 10.80rem;
    margin: 0 auto;
    left: 0;
    right: 0;
    top: 50%;
    transform: translate(0, -50%);
    transform-origin: center center;
    background: white;
    overflow: hidden;
    box-sizing: border-box;
  }

</style>
