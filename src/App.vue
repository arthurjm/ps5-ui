<template>
  <Home />
</template>

<script>
import Home from "@/views/Home.vue";

export default {
  name: "App",

  components: {
    Home,
  },
};
</script>

<style lang="scss">
body {
  margin: 0;
  padding: 0;
  user-select: none;
}

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
</style>
