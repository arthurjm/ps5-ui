<template>
  <div class="control" :class="{ selected: isSelected }">
    <font-awesome-icon :icon="control.icon" size="1x" />
    <div v-show="isSelected" class="name">{{ control.name }}</div>
  </div>
</template>

<script setup>
defineProps(["control", "isSelected"]);
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.control {
  display: flex;
  justify-content: center;
  align-items: center;
  @include square(2.5vw);
}

.selected {
  position: relative;
  background-color: white;
  color: black;
  border-radius: 50%;
}

.selected:after {
  content: "";
  position: absolute;
  $padding: -5px;
  top: $padding;
  left: $padding;
  right: $padding;
  bottom: $padding;
  border: white 2px solid;
  border-radius: 50%;
}

.name {
  color: white;
  font-family: "SST Light";
  font-size: 2vh;
  position: absolute;
  top: -3.4vh;
}
</style>
