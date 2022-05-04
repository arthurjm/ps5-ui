<template>
  <div id="control-center">
    <div class="controls">
      <ControlButton
        v-for="(ctrl, i) in controls"
        :key="i"
        :control="ctrl"
        :isSelected="selectedControl === i"
      />
    </div>
  </div>
</template>

<script>
import { controls } from "@/data/controlCenter.js";

import ControlButton from "@/components/ControlCenter/ControlButton.vue";

export default {
  name: "control-center",

  components: {
    ControlButton,
  },

  data: function () {
    return {
      controls: [],
      selectedControl: 0,
    };
  },

  created() {
    this.controls = controls;

    document.addEventListener("keydown", this.navigateControls, {
      capture: true,
    });
  },

  beforeUnmount() {
    document.removeEventListener("keydown", this.navigateControls, true);
  },

  methods: {
    navigateControls(event) {
      if (event.code === "ArrowRight") {
        event.stopPropagation();
        this.selectedControl = Math.min(
          this.selectedControl + 1,
          this.controls.length - 1
        );
      }

      if (event.code === "ArrowLeft") {
        event.stopPropagation();
        this.selectedControl = Math.max(this.selectedControl - 1, 0);
      }
    },
  },
};
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
