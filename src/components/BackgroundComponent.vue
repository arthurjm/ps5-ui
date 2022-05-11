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
#background {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
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
