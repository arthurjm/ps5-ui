<template>
  <TopRow />
  <ApplicationsRow />
  <ControlCenter v-if="isCCActive" />
</template>

<script>
import TopRow from "@/components/TopRow.vue";
import ApplicationsRow from "@/components/ApplicationsRow/ApplicationsRow.vue";
import ControlCenter from "@/components/ControlCenter/ControlCenter.vue";

export default {
  name: "ps5-ui",

  components: { TopRow, ApplicationsRow, ControlCenter },

  data: function () {
    return {
      isCCActive: false,
    };
  },

  created() {
    document.addEventListener("keydown", (event) => {
      if (event.code === "Space") {
        this.isCCActive = !this.isCCActive;
      }
    });
  },
};
</script>

<style lang="scss" scoped></style>
