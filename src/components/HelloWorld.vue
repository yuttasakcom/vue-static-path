<template>
  <div class="bg">
    <img src="../assets/logo.png" alt="Vue Logo">
  </div>
</template>

<style scoped>
.bg {
  background-image: url("/static/img/bg.gif");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 100vh;
}

img {
  max-height: 100%;
  max-width: 100%;
  width: auto;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
}
</style>