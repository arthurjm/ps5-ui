<template>
  <Background />
  <UserSelection v-if="!isUserSelected" />
  <Home v-else />
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";

import Background from "@/components/BackgroundComponent.vue";
import UserSelection from "@/components/UserSelection/UserSelection.vue";
import Home from "@/views/HomeView.vue";

import { useClock } from "@/composables/clock.js";

const userStore = useUserStore();
const { isUserSelected } = storeToRefs(userStore);

useClock();
</script>

<style lang="scss">
@import "@/styles/main.scss";

@font-face {
  font-family: "SST Regular";
  src: url("@/assets/fonts/SSTRg.TTF");
}

@font-face {
  font-family: "SST Light";
  src: url("@/assets/fonts/SSTLight.TTF");
}

@font-face {
  font-family: "SST Bold";
  src: url("@/assets/fonts/SSTBold.TTF");
}

body {
  margin: 0;
  padding: 0;
  user-select: none;
  background-color: rgb(25, 25, 25);
}

#app {
  position: relative;
  height: $app-height;
  width: $app-width;
  overflow: hidden;
  margin: 0 auto;
  color: white;
}
</style>
