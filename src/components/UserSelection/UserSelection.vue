<template>
  <div class="select-user">
    <div
      v-for="(user, i) in users.list"
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
import { reactive, onMounted, onUnmounted } from "vue";
import { getUsers, getAvatar } from "@/data/users.js";

const emit = defineEmits(["login"]);

const users = reactive({
  list: getUsers(),
  selectedIndex: 0,
});

onMounted(() => {
  document.addEventListener("keydown", navigate);
});

onUnmounted(() => {
  document.removeEventListener("keydown", navigate);
});

function navigate(event) {
  if (event.code === "ArrowRight") {
    users.selectedIndex = Math.min(
      users.selectedIndex + 1,
      users.list.length - 1
    );
  } else if (event.code === "ArrowLeft") {
    users.selectedIndex = Math.max(users.selectedIndex - 1, 0);
  } else if (event.code === "Enter") {
    const selectedUser = users.list[users.selectedIndex];
    emit("login", selectedUser);
    // userStore.$patch({
    //   name: selectedUser.name,
    //   avatar: selectedUser.avatar,
    // });
  }
}

function isSelected(i) {
  return users.selectedIndex === i;
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
  top: -3vh;
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
