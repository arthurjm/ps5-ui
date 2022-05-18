<template>
  <Transition name="fade">
    <div
      id="background"
      :style="backgroundImage"
      :key="interfaceStore.background"
    ></div>
  </Transition>
</template>

<script setup>
import { computed } from "vue";
import { useInterfaceStore } from "@/stores/interface";

const interfaceStore = useInterfaceStore();

const backgroundImage = computed(() => {
  const url = interfaceStore.background || require("@/assets/background.jpg");
  return `background-image: url(${url});`;
});
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

#background {
  @include whole-space();
  background-size: 100% 100%;
  background-repeat: no-repeat;
  // background-image: url(@/assets/background.jpg); // en

  // compare to real ps5 ui
  background-image: url(https://images.frandroid.com/wp-content/uploads/2020/10/menu-ps5.jpg); // en
  background-image: url(https://www.generation-game.com/wp-content/uploads/2020/11/menu-interface-utilisateur-PS5-console.jpg); // fr

  // control center
  // background-image: url(https://cdn.mos.cms.futurecdn.net/XZiYbJyZhSM7sqZHPPVeQe.jpg);

  //trophies
  // background-image: url(https://pbs.twimg.com/media/EkYEZG0WsAIp26z.jpg:large);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease-in;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
