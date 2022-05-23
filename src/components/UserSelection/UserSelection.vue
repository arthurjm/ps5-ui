<template>
  <div class="user-selection">
    <Clock />
    <WelcomeMessage />
    <div class="row">
      <ul class="list" :class="indexClass">
        <li
          v-for="(user, i) in users"
          :key="user.name"
          class="user"
          :class="{ selected: isSelected(i) }"
        >
          <div class="representation">
            <div class="background"></div>
            <img v-if="getAvatar(i)" class="avatar" :src="getAvatar(i)" />
          </div>

          <div class="name">
            <div>{{ user.name }}</div>
            <img
              v-if="user.psplus"
              class="ps-plus"
              src="@/assets/icons/ps-plus.png"
              alt="PS Plus icon"
            />
          </div>
        </li>
      </ul>
    </div>
    <div class="power"><font-awesome-icon icon="power-off" size="2x" /></div>
  </div>
</template>

<script setup>
import Clock from "@/components/ClockComponent.vue";
import WelcomeMessage from "@/components/UserSelection/WelcomeMessage.vue";

import { ref, computed } from "vue";

import { useArraySelect } from "@/composables/arraySelect.js";
import { useEventListener } from "@/composables/event.js";
import { getUsers, getAvatar } from "@/data/users.js";

import { useUserStore } from "@/stores/user";
const { selectUser } = useUserStore();

const {
  elements,
  index,
  selectedElement,
  previousElement,
  nextElement,
  isSelected,
} = useArraySelect(getUsers());
const users = ref(elements);

useEventListener(document, "keydown", navigate);

function navigate(event) {
  if (event.code === "ArrowRight") {
    nextElement();
  } else if (event.code === "ArrowLeft") {
    previousElement();
  } else if (event.code === "Enter") {
    const selectedUser = selectedElement.value;
    const user = {
      name: selectedUser.name,
      avatar: getAvatar(selectedUser.id),
    };
    selectUser(user);
  }
}
const indexClass = computed(() => `index-${index.value}`);

index.value = 1;
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.user-selection {
  @include whole-space();
  display: flex;
  flex-direction: column;
  font-family: "SST Light";
}

$user-width: 12 * $vw;
$user-height: 28 * $vh;

$sel-user-width: $user-width * 1.5;
$sel-border-width: 0.1 * $vw;
$sel-padding: -0.18 * $vw;

.row {
  display: flex;
  margin-left: 50 * $vw - $sel-user-width/2;
}

@for $i from 1 through 10 {
  .index-#{$i} {
    margin-left: -$i * $user-width;
  }
}

.list {
  display: flex;
  align-items: center;
  list-style: none;
  padding: 0;
  @include margin-y(0);
}

.user {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: $user-width;
  height: $user-height;

  &.selected {
    width: $sel-user-width;
  }
}

.representation {
  position: relative;
  $ratio: 0.75;
  @include square($user-width * $ratio);
  margin: auto 0;

  .selected & {
    @include square($sel-user-width * $ratio);

    &:after {
      content: "";
      position: absolute;
      top: $sel-padding;
      left: $sel-padding;
      right: $sel-padding;
      bottom: $sel-padding;
      border: #919191 $sel-border-width solid;
      border-radius: 50%;
    }
  }
}

.background,
.avatar {
  @include whole-space();
  border-radius: 50%;
}

.background {
  background-color: rgba(0, 0, 0, 0.578);
}

.name {
  display: flex;
  align-items: center;
  $height: 2 * $vh;
  font-size: $height;
  letter-spacing: 0.006 * $vw;

  .ps-plus {
    height: $height;
    margin-left: 0.3 * $vw;
  }
}

.power {
  margin: auto auto 2 * $vh auto;
}
</style>
