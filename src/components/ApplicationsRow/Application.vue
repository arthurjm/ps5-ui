<template>
  <div id="application">
    <div
      class="background"
      :style="`background-image: url(${background})`"
    ></div>
    <div class="name">{{ name }}</div>
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
}
</style>
