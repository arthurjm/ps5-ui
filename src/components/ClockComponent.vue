<template>
  <div class="clock">
    <span class="clock__time">{{ getTime }}</span>
  </div>
</template>

<script setup>
import { storeToRefs } from "pinia";
import { useInterfaceStore } from "@/stores/interface";

const interfaceStore = useInterfaceStore();
const { getTime } = storeToRefs(interfaceStore);
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.clock {
  position: fixed;
  top: 3.5vh;
  $left: 9.4 * $vw;
  left: calc(#{$margin} / 2 + #{$width - $left});

  &__time {
    font-family: "SST Light";
    font-size: 3.2vh;
    letter-spacing: 0;
    font-variant-numeric: tabular-nums;
  }
}
</style>
