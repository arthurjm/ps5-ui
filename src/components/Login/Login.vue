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

<script>
import { getUsers, getAvatar } from "@/data/users.js";

export default {
  name: "login-component",

  emits: ["login"],

  data() {
    return {
      users: [],
      selectedUser: 0,
    };
  },

  created() {
    this.users = getUsers();

    document.addEventListener("keydown", this.action);
  },

  beforeUnmount() {
    document.removeEventListener("keydown", this.action);
  },

  methods: {
    action(event) {
      if (event.code === "ArrowRight") {
        this.selectedUser = Math.min(
          this.selectedUser + 1,
          this.users.length - 1
        );
      } else if (event.code === "ArrowLeft") {
        this.selectedUser = Math.max(this.selectedUser - 1, 0);
      } else if (event.code === "Enter") {
        this.$emit("login", this.getSelectedUser());
      }
    },

    getSelectedUser() {
      return this.users[this.selectedUser];
    },

    getAvatar(i) {
      return getAvatar(i);
    },

    isSelected(i) {
      return i === this.selectedUser;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.select-user {
  height: 100%;
  /* width: 80%; */
  /* background-color: green; */
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
