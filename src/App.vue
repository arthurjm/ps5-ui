<template>
  <UserSelection v-if="!isUserSelected" />
  <Home v-else />
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";

import UserSelection from "@/components/UserSelection/UserSelection.vue";
import Home from "@/views/HomeView.vue";

const userStore = useUserStore();
const { isUserSelected } = storeToRefs(userStore);
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
  height: $height;
  width: $width;
  overflow: hidden;
  margin: 0 auto;

  color: white;
  background-image: url(@/assets/background.jpg); // en

  // compare to real ps5 ui
  // background-image: url(https://images.frandroid.com/wp-content/uploads/2020/10/menu-ps5.jpg); // en
  // background-image: url(https://www.generation-game.com/wp-content/uploads/2020/11/menu-interface-utilisateur-PS5-console.jpg); // fr

  // control center
  // background-image: url(https://cdn.mos.cms.futurecdn.net/XZiYbJyZhSM7sqZHPPVeQe.jpg);

  //trophies
  // background-image: url(https://pbs.twimg.com/media/EkYEZG0WsAIp26z.jpg:large);

  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
