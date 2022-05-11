<template>
  <div id="control-center">
    <div class="controls">
      <ControlButton
        v-for="(ctrl, i) in elements"
        :key="i"
        :control="ctrl"
        :isSelected="isSelected(i)"
      />
    </div>
  </div>
</template>

<script setup>
import ControlButton from "@/components/ControlCenter/ControlButton.vue";

import { useArraySelect } from "@/composables/arraySelect.js";
import { useEventListener } from "@/composables/event.js";

import { controls } from "@/data/controlCenter.js";

const { elements, previousElement, nextElement, isSelected } = useArraySelect(
  controls,
  "ControlCenter"
);

useEventListener(document, "keydown", navigate, {
  capture: true,
});

function navigate(event) {
  if (event.code === "ArrowRight") {
    event.stopPropagation();
    nextElement();
  }

  if (event.code === "ArrowLeft") {
    event.stopPropagation();
    previousElement();
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

#control-center {
  position: absolute;
  top: 0;
  left: 0;
  width: 100 * $vw;
  height: 100 * $vh;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 1) 16%,
    rgba(0, 0, 0, 0.1),
    rgba(0, 0, 0, 0.9)
  );
}

#control-center .controls {
  position: absolute;
  top: 92.2 * $vh;
  display: flex;
  justify-content: space-evenly;
  $margin: 18.7 * $vw;
  margin: 0 $margin;
  width: calc(100 * $vw - 2 * $margin);
  font-size: 2.8 * $vh;
}
</style>
