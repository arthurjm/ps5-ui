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
        <img :src="avatar" class="profile__img" />
        <div class="profile__status"></div>
      </div>

      <Clock />
    </div>
  </div>
</template>

<script setup>
import Clock from "@/components/ClockComponent.vue";

import { storeToRefs } from "pinia";
import { useUserStore } from "@/stores/user";

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
.left {
  display: flex;
  align-items: center;

  & :first-child {
    margin-right: 4 * $vw;
  }

  & .selected {
    font-family: "SST Bold";
  }
}

// Right
.right {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 9.7 * $vw;
}

.parameters {
  margin-left: 6.4vh;
}

.profile {
  position: relative;
  height: 100%;
  margin-left: 5.35vh;

  &__img {
    height: 100%;
    border-radius: 50%;
  }

  &__status {
    position: absolute;
    top: 76%;
    left: 79%;
    @include square($vw * 0.6);
    background-color: rgb(14, 226, 110);
    border-radius: 50%;
  }
}
</style>
