<template>
  <div id="application" :style="`background-image: url(${background})`">
    <div class="left">
      <div class="banner"></div>
      <div class="description">Lorem ipsum</div>
      <div class="bottom">
        <div class="play decoration">Jouer</div>
        <div class="options decoration">•••</div>
      </div>
    </div>
    <div class="trophies"></div>
  </div>
</template>

<script setup>
defineProps(["name", "background"]);
</script>

<style lang="scss" scoped>
#application {
  width: 100vw;
  height: 100vh;
  background-size: 100% 100%;
}

.left {
  position: absolute;
  top: 56vh;
  left: 9vw;
  /* height: 27.8vh; */
  height: 28vh;
  width: 21.9vw;
  /* width: 22vw; */
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.banner {
  // background-color: green; // add game banner
  height: 44%;
}

.description {
  font-family: "SST Regular";
  font-size: 2.7vh;
  letter-spacing: 0.006vw;
}

.bottom {
  display: flex;
  margin-top: auto;
  height: 24%;
  justify-content: space-between;
}

.decoration {
  border-radius: 50px;
  background-color: rgba(112, 112, 112, 0.418);
  font-family: "SST Bold";
  font-size: 2.7vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.play {
  width: 79%;
}

.options {
  width: 17%;
}
</style>
