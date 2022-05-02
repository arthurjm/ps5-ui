<template>
  <div id="top-row">
    <div class="left">
      <div class="selected">Jeux</div>
      <div>Contenu multimédia</div>
    </div>
    <div class="right">
      <div class="search">
        <font-awesome-icon icon="magnifying-glass" size="1x" />
      </div>

      <div class="parameters">
        <font-awesome-icon icon="gear" size="1x" />
      </div>

      <div class="profile">
        <img src="@/assets/users/profile_picture.png" />
        <div class="status"></div>
      </div>

      <div class="clock">{{ currentTime }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "top-row",

  data: function () {
    return {
      currentTime: null,
    };
  },

  created() {
    this.getTime();
    setInterval(this.getTime, 1000);
  },

  methods: {
    getTime() {
      var date = new Date();
      const hours = date.getHours();
      const minutes = date.getMinutes();
      this.currentTime = `${hours}:${minutes}`;
    },
  },
};
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

#top-row {
  position: absolute;
  top: 3.5vh;
  left: 4.7vw;

  display: flex;
  justify-content: space-between;

  font-family: "SST Light";
  font-size: 3.2vh;
  letter-spacing: 0.045vw;
}

// Left
#top-row .left {
  display: flex;
}

#top-row .left .selected {
  font-family: "SST Bold";
}

#top-row .left :first-child {
  margin-right: 4.1vw;
}

// Right
.search,
.parameters,
.profile,
.clock {
  position: absolute;
}

.search {
  left: 67.9vw;
}

.parameters {
  left: 73.4vw;
}

.profile {
  left: 78.4vw;
  top: 0.1vh;
  height: 2.5vw;
  border-radius: 50%;
}

.profile img {
  @include square(2.5vw);
  height: inherit;
  border-radius: 50%;
}

.profile .status {
  position: absolute;
  top: 73%;
  left: 75%;
  @include square(29%);
  background-color: rgb(14, 226, 110);
  border-radius: 50%;
}

.clock {
  left: 86vw;
  letter-spacing: 0.17vw;
}
</style>
