<template>
  <div id="applications-row">
    <div
      v-for="(app, i) in applications"
      :key="i"
      class="icon"
      :class="{ selected: selected === i }"
      :style="`background-image: url(/applications/${app.image});`"
    >
      <div v-if="selected === i" class="name">{{ app.name }}</div>
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
      selected: 0,
    };
  },

  created() {
    this.applications = games;

    document.addEventListener("keydown", (event) => {
      if (event.key === "ArrowRight") {
        this.selected = Math.min(
          this.selected + 1,
          this.applications.length - 1
        );
      } else if (event.key === "ArrowLeft") {
        this.selected = Math.max(this.selected - 1, 0);
      }
    });
  },
};
</script>

<style lang="scss" scoped>
#applications-row {
  display: flex;
  $marge: 8%;
  position: absolute;
  top: 12%;
  margin: 0 $marge;
  height: 10vh;
  width: 100% - $marge * 2;
}

#applications-row > .icon {
  margin-right: 0.5%;
}

.icon {
  position: relative;
  $icon-size: 130px;
  width: $icon-size;
  height: $icon-size;
  background-color: rgba(0, 0, 0, 0.578);
  border-radius: 15%;
  background-size: contain;
  background-repeat: no-repeat;
}

.icon .name {
  position: absolute;
  left: 100%;
  top: 75%;
  width: 500px;
  margin-left: 10px;
  font-family: "SST Light";
  font-size: x-large;
}

.selected {
  $icon-size: 200px;
  width: $icon-size;
  height: $icon-size;
  border: 2px solid white;
}
</style>
