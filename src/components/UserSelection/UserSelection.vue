<template>
  <div class="user-selection row">
    <ul class="list" :class="indexClass">
      <li
        v-for="(user, i) in users"
        :key="user.name"
        class="user"
        :class="{ selected: isSelected(i) }"
      >
        <div class="representation">
          <div class="background"></div>
          <img class="avatar" :src="getAvatar(i)" v-if="getAvatar(i)" />
        </div>

        <div class="name">
          {{ user.name }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
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

$user-width: 12 * $vw;
$user-height: 28 * $vh;

$sel-user-width: $user-width * 1.5;
$sel-border-width: 0.1 * $vw;
$sel-padding: -0.18 * $vw;

.row {
  position: absolute;
  left: 50 * $vw - $sel-user-width/2;
  top: 50 * $vh - $user-height/2;
  display: flex;
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
}

.user.selected {
  width: $sel-user-width;
}

.representation {
  position: relative;
  @include square($user-width * 0.75);
  margin: auto 0;
}

.selected .representation {
  @include square($sel-user-width * 0.75);
}

.background,
.avatar {
  @include whole-space();
  border-radius: 50%;
}

.background {
  background-color: rgba(0, 0, 0, 0.578);
}

.selected .representation:after {
  content: "";
  position: absolute;
  top: $sel-padding;
  left: $sel-padding;
  right: $sel-padding;
  bottom: $sel-padding;
  border: #919191 $sel-border-width solid;
  border-radius: 50%;
}

.name {
  font-family: "SST Light";
  font-size: 2vh;
  letter-spacing: 0.006 * $vw;
}
</style>
