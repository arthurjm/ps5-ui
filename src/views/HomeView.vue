<template>
  {{ isCCActive }}
  <TopRow />
  <ApplicationsRow />
  <ControlCenter v-if="isCCActive" />
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

import TopRow from "@/components/TopRow.vue";
import ApplicationsRow from "@/components/ApplicationsRow/ApplicationsRow.vue";
import ControlCenter from "@/components/ControlCenter/ControlCenter.vue";

const isCCActive = ref(false);

onMounted(() => {
  document.addEventListener("keydown", toggleControlCenter);
});

onUnmounted(() => {
  document.removeEventListener("keydown", toggleControlCenter);
});

function toggleControlCenter(event) {
  if (event.code === "Space") {
    isCCActive.value = !isCCActive.value;
  }
}

// import { useUserStore } from "@/stores/user.js";
// const userStore = useUserStore();
// console.log(userStore.name);
</script>

<style lang="scss" scoped></style>
