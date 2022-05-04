<template>
  <div id="ps5-ui">
    <TopRow />
    <ApplicationsRow />
    <ControlCenter v-if="isCCActive" />
  </div>
</template>

<script>
import TopRow from "@/components/TopRow.vue";
import ApplicationsRow from "@/components/ApplicationsRow/ApplicationsRow.vue";
import ControlCenter from "@/components/ControlCenter/ControlCenter.vue";

export default {
  name: "ps5-ui",

  components: {
    TopRow,
    ApplicationsRow,
    ControlCenter,
  },

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

<style lang="scss" scoped>
#ps5-ui {
  position: relative;
  width: 100vw;
  height: 100vh;

  color: white;
  background-color: rgb(25, 25, 25);
  background-color: rgb(255, 255, 255);
  background-image: url(@/assets/background.jpg); // en

  // compare to real ps5 ui
  // background-image: url(https://images.frandroid.com/wp-content/uploads/2020/10/menu-ps5.jpg); // en
  // background-image: url(https://www.generation-game.com/wp-content/uploads/2020/11/menu-interface-utilisateur-PS5-console.jpg); // fr

  // control center
  // background-image: url(https://cdn.mos.cms.futurecdn.net/XZiYbJyZhSM7sqZHPPVeQe.jpg);

  //trophies
  // background-image: url(https://pbs.twimg.com/media/EkYEZG0WsAIp26z.jpg:large);

  background-size: 100%;
  background-repeat: no-repeat;
}
</style>
