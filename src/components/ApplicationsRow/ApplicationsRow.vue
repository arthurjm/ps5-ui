<template>
  <div id="applications-row">
    <div
      v-for="(app, i) in applications"
      :key="i"
      class="application"
      :class="{ selected: isSelected(i) }"
    >
      <div class="icon" :style="`background-image: url(${app.icon})`"></div>
    </div>
  </div>
  <ApplicationVue v-bind="getSelectedApplication" />
</template>

<script>
import { games, getIconURL, getBackgroundURL } from "@/data/games.js";

import ApplicationVue from "./Application.vue";

export default {
  name: "applications-row",

  components: {
    ApplicationVue,
  },

  data: function () {
    return {
      applications: [],
      selectedApplication: 0,
    };
  },

  created() {
    this.applications = games;
    if (this.applications.length > 1) {
      this.selectedApplication = 1;
    }

    this.applications.forEach((app, i) => {
      app.icon = getIconURL(i);
      app.background = getBackgroundURL(i);
    });

    document.addEventListener("keydown", (event) => {
      if (event.code === "ArrowRight") {
        this.selectedApplication = Math.min(
          this.selectedApplication + 1,
          this.applications.length - 1
        );
      } else if (event.code === "ArrowLeft") {
        this.selectedApplication = Math.max(this.selectedApplication - 1, 0);
      }
    });
  },

  methods: {
    isSelected(i) {
      return i === this.selectedApplication;
    },
  },

  computed: {
    getSelectedApplication() {
      const selectedApp = this.applications[this.selectedApplication];
      const app = (({ name, background }) => ({ name, background }))(
        selectedApp
      );
      return app;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

// Icon
$i-size: 5.7vw;
$i-margin-right: 0.34vw;
$i-width: $i-size + $i-margin-right;

// Selected icon
$sel-i-size: 9vw;
$sel-i-border-width: 2px;

#applications-row {
  display: flex;
  position: absolute;
  top: 11.2vh;

  $margin-left: 8.6vw;
  margin-left: calc(
    $margin-left -
      ($i-width * v-bind(selectedApplication) - 2 * $sel-i-border-width)
  );
  width: 100vw - $margin-left * 2;
  height: 10vh;
}

#applications-row > .application {
  margin-right: $i-margin-right;
}

.application {
  position: relative;
  @include square($i-size);
  background-color: rgba(0, 0, 0, 0.578);
  border-radius: 15%;
}

.selected {
  @include square($sel-i-size);
  border: $sel-i-border-width solid white;
}

.icon {
  width: 100%;
  height: 100%;
  background-size: 100% 100%;
  background-repeat: no-repeat;
  border-radius: inherit;
}
</style>
