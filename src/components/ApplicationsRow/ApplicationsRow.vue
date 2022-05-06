<template>
  <div id="applications-row">
    <div
      v-for="(app, i) in applications"
      :key="i"
      class="application"
      :class="{ selected: isSelected(i) }"
    >
      <div class="icon" :style="`background-image: url(${app.icon})`"></div>
    </div>
  </div>
  <ApplicationInterface v-bind="selectedElement" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import { games, getIconURL, getBackgroundURL } from "@/data/games.js";

import ApplicationInterface from "./ApplicationInterface.vue";

import { useArraySelect } from "@/composables/arraySelect.js";
const {
  elements,
  currentIndex,
  selectedElement,
  previousElement,
  nextElement,
  isSelected,
} = useArraySelect(games);
const applications = ref(elements);

onMounted(() => {
  document.addEventListener("keydown", navigate);
});

onUnmounted(() => {
  document.removeEventListener("keydown", navigate);
});

function navigate(event) {
  if (event.code === "ArrowRight") {
    nextElement();
  } else if (event.code === "ArrowLeft") {
    previousElement();
  }
}

onMounted(() => {
  selectedElement.value = 1;

  applications.value.forEach((app, i) => {
    app.icon = getIconURL(i);
    app.background = getBackgroundURL(i);
  });
});
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

// Icon
$i-size: 5.7vw;
$i-margin-right: 0.34vw;
$i-width: $i-size + $i-margin-right;

// Selected icon
$sel-i-size: 9vw;
$sel-i-border-width: 2px;

#applications-row {
  display: flex;
  position: absolute;
  top: 11.2vh;

  $margin-left: 8.6vw;
  margin-left: calc(
    $margin-left - ($i-width * v-bind(currentIndex) - 2 * $sel-i-border-width)
  );
  width: 100vw - $margin-left * 2;
  height: 10vh;
}

#applications-row > .application {
  margin-right: $i-margin-right;
}

.application {
  position: relative;
  @include square($i-size);
  background-color: rgba(0, 0, 0, 0.578);
  border-radius: 15%;
}

.selected {
  @include square($sel-i-size);
  border: $sel-i-border-width solid white;
}

.icon {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: inherit;
}
</style>
