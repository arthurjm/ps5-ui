<template>
  <div class="dropdown">
    <ul class="dropdown__list">
      <li
        v-for="(status, i) in elements"
        :key="status"
        class="dropdown__status"
        :class="{ 'dropdown__status--active': isSelected(i) }"
      >
        <div
          class="dropdown__dot"
          :class="'dropdown__dot--' + status.status"
        ></div>
        <div class="dropdown__text">{{ status.text }}</div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useEventListener } from "@/composables/event.js";
import { useArraySelect } from "@/composables/arraySelect.js";

const emit = defineEmits(["toggleDropdown", "connect"]);

useEventListener(document, "keydown", navigate, {
  capture: true,
});

const { elements, selectedElement, previousElement, nextElement, isSelected } =
  useArraySelect([
    {
      status: "online",
      text: "Se connecter comme étant en ligne",
    },
    {
      status: "busy",
      text: "Occupé",
    },
    {
      status: "offline",
      text: "Apparaître hors ligne",
    },
  ]);

function navigate(event) {
  event.stopPropagation();
  if (event.code === "ArrowUp") {
    previousElement();
  } else if (event.code === "ArrowDown") {
    nextElement();
  } else if (event.code === "KeyO") {
    emit("toggleDropdown");
  } else if (event.code === "Enter") {
    emit("connect", selectedElement.value.status);
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.dropdown {
  position: absolute;
  left: 58%;
  top: 40%;
  background-color: rgb(30, 29, 29);

  &__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }

  &__status {
    display: flex;
    align-items: center;
    position: relative;
  }

  &__status--active {
    outline: 1px solid white;
    border-radius: 5px;
  }

  $dot-size: 0.9 * $vw;
  &__dot {
    position: relative;
    border-radius: 50%;
    @include square($dot-size);
    margin: 0.7 * $vw 1.4 * $vw;

    @include status();
  }

  &__text {
    font-family: "SST Light";
    margin-right: 1.4 * $vw;
  }
}
</style>
