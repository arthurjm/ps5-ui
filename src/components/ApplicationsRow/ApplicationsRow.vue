<template>
  <div id="applications-row" :class="indexClass">
    <div
      v-for="(app, i) in applications"
      :key="i"
      class="application"
      :class="{ selected: isSelected(i) }"
    >
      <img class="icon" :src="app.icon" />
      <div v-if="isSelected(i)" class="name" :class="app.version">
        {{ app.name }}
      </div>
    </div>
  </div>
  <ApplicationInterface />
</template>

<script setup>
import ApplicationInterface from "./ApplicationInterface.vue";

import { ref, watch, onMounted, computed } from "vue";
import { useArraySelect } from "@/composables/arraySelect.js";
import { useEventListener } from "@/composables/event.js";

import { useInterfaceStore } from "@/stores/interface";

import { games, getIconURL, getBackgroundURL } from "@/data/games.js";

onMounted(() => {
  index.value = 1;

  applications.value.forEach((app, i) => {
    app.icon = getIconURL(i);
    app.background = getBackgroundURL(i);
  });
});

const {
  elements,
  index,
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

const indexClass = computed(() => `index-${index.value}`);

const interfaceStore = useInterfaceStore();
watch(selectedElement, () => {
  interfaceStore.background = selectedElement.value.background;
});
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

// Icon
$icon-size: 9.9 * $vh;
$icon-margin-right: 0.65 * $vh;
$icon-width: $icon-size + $icon-margin-right;

// Selected icon
$sel-icon-size: 15.64 * $vh;
$sel-border-width: 0.2 * $vw;
$sel-margin: 0.7 * $vh;
$sel-padding: -0.28 * $vw;

#applications-row {
  position: absolute;
  top: 11.63 * $vh;
  left: 8.55 * $vw;
  display: flex;
  animation: slide-in 0.7s ease-in;
}

@keyframes slide-in {
  from {
    left: 150 * $vw;
    opacity: 0;
    transform: scale(0.1);
    transform: scale(2, 0.4);
  }
}

@for $i from 1 through 10 {
  .index-#{$i} {
    margin-left: -$i * $icon-width;
  }
}

#applications-row > .application {
  margin-right: $icon-margin-right;
}

.application {
  position: relative;
  @include square($icon-size);
  background-color: rgba(0, 0, 0, 0.578);
  border-radius: 15%;
}

.application.selected {
  @include square($sel-icon-size);
  margin-right: $icon-margin-right + $sel-margin !important;
  margin-left: $sel-margin;
}

.application.selected:after {
  content: "";
  position: absolute;
  top: $sel-padding;
  left: $sel-padding;
  right: $sel-padding;
  bottom: $sel-padding;
  border: white $sel-border-width solid;
  border-radius: inherit;
}

.icon {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: inherit;
}

.name {
  display: flex;
  align-items: center;
  position: absolute;
  left: 109%;
  top: 67%;
  width: 70 * $vw;
  font-family: "SST Light";
  font-size: 3 * $vh;
  letter-spacing: -0.055 * $vw;
}

.ps5::before {
  content: "PS5";
  background-color: white;
  color: black;
  border: black;
}

.ps4::before {
  content: "PS4";
  background-color: black;
  color: white;
  border: white;
}

.ps5::before,
.ps4::before {
  margin-right: 0.5777777778 * $vh;
  padding: 0.5 * $vh 1.5 * $vh;
  border: 1px solid;
  border-radius: 5px;
  font-family: "SST Bold";
  font-size: 1.5 * $vh;
  letter-spacing: 0;
}
</style>
