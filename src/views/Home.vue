<template>
  <div id="ps5-ui">
    <TopRow />
    <ApplicationsRow />
  </div>
</template>

<script>
import TopRow from "@/components/TopRow.vue";
import ApplicationsRow from "@/components/ApplicationsRow.vue";

export default {
  name: "ps5-ui",

  components: {
    TopRow,
    ApplicationsRow,
  },
};
</script>

<style lang="scss" scoped>
#ps5-ui {
  position: relative;
  width: 100vw;
  height: 100vh;

  // compare to real ps5 ui
  // background-image: url(https://images.frandroid.com/wp-content/uploads/2020/10/menu-ps5.jpg); // en
  // background-image: url(https://www.generation-game.com/wp-content/uploads/2020/11/menu-interface-utilisateur-PS5-console.jpg); // fr
  // background-size: contain;
  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
