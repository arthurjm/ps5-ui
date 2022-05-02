<template>
  <div id="applications-row">
    <div
      v-for="(app, i) in applications"
      :key="i"
      class="application"
      :class="{ selected: selectedApplication === i }"
    >
      <div
        class="icon"
        :style="`background-image: url(${this.getImageURL(app.image)});`"
      ></div>
      <div v-if="selectedApplication === i" class="name">{{ app.name }}</div>
    </div>
  </div>
</template>

<script>
import { games } from "@/data/games.js";

export default {
  name: "applications-row",

  data: function () {
    return {
      applications: [],
      selectedApplication: 0,
    };
  },

  created() {
    this.applications = games;

    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        this.selectedApplication = Math.min(
          this.selectedApplication + 1,
          this.applications.length - 1
        );
      } else if (event.key === "ArrowLeft") {
        this.selectedApplication = Math.max(this.selectedApplication - 1, 0);
      }
    });
  },

  methods: {
    getImageURL(image) {
      try {
        image = require("@/assets/applications/" + image);
      } catch (e) {
        image = ""; // I used a default image.
      }
      return image;
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
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: inherit;
}

.application .name {
  position: absolute;
  left: 9.7vw;
  top: 10.8vh;
  width: 500px;
  font-family: "SST Light";
  font-size: 3vh;
  letter-spacing: -0.055vw;
}
</style>
