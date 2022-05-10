import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({ name: "", avatar: "" }),

  getters: {
    isUserSelected: (state) => (state.name !== "" ? true : false),
  },

  actions: {
    selectUser(user) {
      this.name = user.name;
      this.avatar = user.avatar;
    },
  },
});
