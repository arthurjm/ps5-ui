import { defineStore } from "pinia";

export const useUserStore = defineStore("user", {
  state: () => ({ name: "", avatar: "", status: "" }),

  getters: {
    isUserSelected: (state) => (state.name !== "" ? true : false),
  },

  actions: {
    selectUser(user) {
      this.name = user.name;
      this.avatar = user.avatar;
      this.status = user.status;
    },
  },
});
