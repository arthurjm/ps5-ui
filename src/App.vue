<template>
  <div id="ps5-ui">
    <Login v-if="!isConnected" @login="isConnected = true" />
    <Home v-else />
  </div>
</template>

<script>
import Login from "@/components/Login/Login.vue";
import Home from "@/views/Home.vue";

export default {
  name: "App",

  components: {
    Login,
    Home,
  },

  data: function () {
    return {
      isConnected: false,
    };
  },
};
</script>

<style lang="scss">
@font-face {
  font-family: "SST Regular";
  src: url("@/assets/fonts/SSTRg.TTF");
}

@font-face {
  font-family: "SST Light";
  src: url("@/assets/fonts/SSTLight.TTF");
}

@font-face {
  font-family: "SST Bold";
  src: url("@/assets/fonts/SSTBold.TTF");
}

body {
  margin: 0;
  padding: 0;
  user-select: none;
}

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

  background-size: 100% 100%;
  background-repeat: no-repeat;
}
</style>
