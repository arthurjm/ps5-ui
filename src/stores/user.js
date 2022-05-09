import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({ name: "", avatar: "" }),

  actions: {
    selectUser(user) {
      this.name = user.name;
      this.avatar = user.avatar;
    },
  },
});
