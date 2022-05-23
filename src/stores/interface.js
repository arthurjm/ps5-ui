import { defineStore } from "pinia";

export const useInterfaceStore = defineStore("interface", {
  state: () => ({
    indexes: {},
    background: "",
    time: "",
  }),

  getters: {
    getTime: (state) => state.time,
  },

  actions: {
    setTime(time) {
      this.time = time;
    },
  },
});
