<template>
  <div id="control-center">
    <div class="controls">
      <ControlButton
        v-for="(ctrl, i) in controlsReact.list"
        :key="i"
        :control="ctrl"
        :isSelected="isSelected(i)"
      />
    </div>
  </div>
</template>

<script setup>
import { reactive, onMounted, onUnmounted } from "vue";

import ControlButton from "@/components/ControlCenter/ControlButton.vue";

import { controls } from "@/data/controlCenter.js";

const controlsReact = reactive({
  list: controls,
  selectedIndex: 0,
});

onMounted(() => {
  document.addEventListener("keydown", navigateControls, {
    capture: true,
  });
});

onUnmounted(() => {
  document.removeEventListener("keydown", navigateControls, true);
});

function navigateControls(event) {
  console.log("event: ", event);
  if (event.code === "ArrowRight") {
    event.stopPropagation();
    controlsReact.selectedIndex = Math.min(
      controlsReact.selectedIndex + 1,
      controlsReact.list.length - 1
    );
  }

  if (event.code === "ArrowLeft") {
    event.stopPropagation();
    controlsReact.selectedIndex = Math.max(controlsReact.selectedIndex - 1, 0);
  }
}

function isSelected(i) {
  return controlsReact.selectedIndex === i;
}
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

#control-center {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 16%,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.9)
  );
}

#control-center .controls {
  position: absolute;
  top: 92.2vh;
  display: flex;
  justify-content: space-evenly;
  $margin: 18.7vw;
  margin: 0 $margin;
  width: calc(100vw - 2 * $margin);
  font-size: 2.8vh;
}
</style>
