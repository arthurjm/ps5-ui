<template>
  <div id="applications-row">
    <div
      v-for="(app, i) in applications"
      :key="i"
      class="application"
      :class="{ selected: isSelected(i) }"
    >
      <img class="icon" :src="app.icon" />
      <div class="name" v-if="isSelected(i)">{{ app.name }}</div>
    </div>
  </div>
  <ApplicationInterface
    :name="selectedElement.name"
    :background="selectedElement.background"
  />
</template>

<script setup>
import { ref, onMounted } from "vue";

import { useArraySelect } from "@/composables/arraySelect.js";
import { useEventListener } from "@/composables/event.js";

import { games, getIconURL, getBackgroundURL } from "@/data/games.js";

import ApplicationInterface from "./ApplicationInterface.vue";

onMounted(() => {
  selectedElement.value = 1;

  applications.value.forEach((app, i) => {
    app.icon = getIconURL(i);
    app.background = getBackgroundURL(i);
  });
});

const {
  elements,
  currentIndex,
  selectedElement,
  previousElement,
  nextElement,
  isSelected,
} = useArraySelect(games);
const applications = ref(elements);

useEventListener(document, "keydown", navigate);

function navigate(event) {
  if (event.code === "ArrowRight") {
    nextElement();
  } else if (event.code === "ArrowLeft") {
    previousElement();
  }
}
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

.name {
  position: absolute;
  left: 107%;
  top: 68%;
  width: 70vw;
  font-family: "SST Light";
  font-size: 3vh;
  letter-spacing: -0.055vw;
}
</style>
