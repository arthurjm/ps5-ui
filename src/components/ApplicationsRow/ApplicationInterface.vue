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
defineProps(["background"]);
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

#application {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
}

.left {
  position: absolute;
  top: 56 * $vh;
  left: 9 * $vw;
  height: 28 * $vh;
  width: 21.9 * $vw;
  display: flex;
  flex-direction: column;
  align-items: stretch;
}

.banner {
  height: 44%;
}

.description {
  font-family: "SST Regular";
  font-size: 2.7 * $vh;
  letter-spacing: 0.006 * $vw;
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
  font-size: 2.7 * $vh;
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
