<template>
  <div class="clock">
    <span class="clock__time">{{ time }}</span>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useInterval } from "@/composables/interval.js";

const hours = ref(0);
const minutes = ref(0);

updateTime();
useInterval(updateTime, 1000);

function updateTime() {
  console.log("tic tac");
  const date = new Date();
  hours.value = date.getHours();
  // minutes.value = date.getMinutes();
  minutes.value = date.getSeconds();
}

function format(number) {
  return number < 10 ? "0" + number : number;
}

const time = computed({
  get: () => {
    const h = hours.value;
    const m = minutes.value;
    const t = `${format(h)}:${format(m)}`;
    return t;
  },
});
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.clock {
  position: fixed;
  top: 3.6vh;
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
