<template>
  <div class="select-user">
    <div
      v-for="(user, i) in users"
      :key="user.name"
      class="user"
      :class="{ selected: isSelected(i) }"
    >
      <div class="avatar">
        <img :src="getAvatar(i)" class="avatar" />
      </div>

      <div class="name">
        {{ user.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

import { useArraySelect } from "@/composables/arraySelect.js";
import { useEventListener } from "@/composables/event.js";

import { getUsers, getAvatar } from "@/data/users.js";

import { useUserStore } from "@/stores/user";
const { selectUser } = useUserStore();

const { elements, selectedElement, previousElement, nextElement, isSelected } =
  useArraySelect(getUsers());
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
      avatar: getAvatar(selectedElement.value.id),
    };
    selectUser(user);
  }
}
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.select-user {
  height: 100%;
  display: flex;
  margin: auto;
  justify-content: center;
  align-items: center;
}

.select-user > .user {
  margin-right: 3vw;
}

$user-size: 10vw;
.user {
  @include square($user-size);
  position: relative;
  border-radius: 50%;
}
.selected {
  @include square($user-size * 1.3);
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
  position: absolute;
  top: -3 * $vh;
  left: 0;
  width: 100%;
  text-align: center;
  //   background-color: red;
  font-family: "SST Light";
  //   font-size: 3vh;
  //   letter-spacing: -0.055vw;
}

.avatar {
  position: absolute;
  top: 0;
  left: 0;
  width: inherit;
  height: inherit;
  border-radius: inherit;
}
</style>
