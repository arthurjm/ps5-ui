<template>
  <div id="ps5-ui">
    <UserSelection v-if="!isConnected" @login="isConnected = true" />
    <Home v-else />
  </div>
</template>

<script setup>
import { ref } from "vue";

import UserSelection from "@/components/UserSelection/UserSelection.vue";
import Home from "@/views/HomeView.vue";

const isConnected = ref(false);
</script>

<style lang="scss">
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
}

#ps5-ui {
  position: relative;
  width: 100vw;
  height: 100vh;

  color: white;
  background-color: rgb(255, 255, 255);
  background-color: rgb(25, 25, 25);
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
