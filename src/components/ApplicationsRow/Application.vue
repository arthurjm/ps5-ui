<template>
  <div id="application">
    <div
      class="background"
      :style="`background-image: url(${background})`"
    ></div>
    <div class="name">{{ name }}</div>
    <div class="left">
      <div class="banner"></div>
      <div class="description">Lorem ipsum</div>
      <div class="bottom">
        <div class="play decoration">Jouer</div>
        <div class="options decoration">•••</div>
      </div>
    </div>
    <div class="trophies"></div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "application-component",

  props: ["name", "background"],
};
</script>

<style lang="scss" scoped>
.name {
  position: absolute;
  left: 18.5vw;
  top: 22vh;
  width: 70vw;
  font-family: "SST Light";
  font-size: 3vh;
  letter-spacing: -0.055vw;
}

.background {
  width: 100vw;
  height: 100vh;
  background-size: 100%;
  // display: none;
}

.left {
  position: absolute;
  top: 56vh;
  left: 9vw;
  height: 27.8vh;
  width: 22vw;
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
  line-height: 6.4vh;
}

.decoration {
  border-radius: 2vw;
  background-color: rgba(112, 112, 112, 0.418);
  font-family: "SST Bold";
  font-size: 2.7vh;
  vertical-align: text-bottom;
  text-align: center;
}

.play {
  width: 100%;
}

.options {
  margin-left: 4%;
  width: 4.8vw;
  font-size: 2vh;
  letter-spacing: 0.15vw;
}
</style>
