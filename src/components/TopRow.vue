<template>
  <div id="top-row">
    <div class="left">
      <div class="selected">Jeux</div>
      <div>Contenu multimédia</div>
    </div>
    <div class="right">
      <div class="search">
        <font-awesome-icon icon="magnifying-glass" size="1x" />
      </div>

      <div class="parameters">
        <font-awesome-icon icon="gear" size="1x" />
      </div>

      <div class="profile">
        <img :src="avatar" />
        <div class="status"></div>
      </div>

      <div class="clock">{{ currentTime }}</div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useInterval } from "@/composables/interval.js";
import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";

const currentTime = ref("");

function getTime() {
  var date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  currentTime.value = `${hours}:${minutes}`;
}

onMounted(() => {
  getTime();
});

useInterval(getTime, 1000);

const userStore = useUserStore();
const { avatar } = storeToRefs(userStore);
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

#top-row {
  position: absolute;

  top: 3.2 * $vh;
  $left: 4.7 * $vw;
  left: $left;

  height: 5 * $vh;
  width: $width - 2 * $left;

  display: flex;
  justify-content: space-between;

  font-family: "SST Light";
  font-size: 3.2 * $vh;
  letter-spacing: 0.045 * $vw;
}

// Left
#top-row .left :first-child {
  margin-right: 9%;
}

#top-row .left .selected {
  font-family: "SST Bold";
}

.left {
  display: flex;
  align-items: center;
  width: 50%;
}

// Right
.right {
  display: flex;
  justify-content: space-between;
  width: 25%;
  align-items: center;
}

.profile {
  position: relative;
  height: 100%;
}

.profile img {
  height: 100%;
  border-radius: 50%;
}

.profile .status {
  position: absolute;
  top: 76%;
  left: 77%;
  @include square($vw * 0.6);
  background-color: rgb(14, 226, 110);
  border-radius: 50%;
}

.clock {
  margin-left: 8%;
  z-index: 10;
}
</style>
