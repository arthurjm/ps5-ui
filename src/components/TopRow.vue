<template>
  <div id="top-row">
    <div class="left">
      <div class="selected">Games</div>
      <div>Media</div>
    </div>
    <div class="right">
      <div><font-awesome-icon icon="magnifying-glass" size="1x" /></div>
      <div><font-awesome-icon icon="gear" size="1x" /></div>
      <div id="profile">
        <img src="@/assets/users/profile_picture.png" />
        <div class="status"></div>
      </div>
      <div>{{ currentTime }}</div>
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
@mixin square($size) {
  width: $size;
  height: $size;
}

#top-row {
  display: flex;
  justify-content: space-between;
  $marge: 5vw;
  position: absolute;
  top: 4%;
  margin: 0 $marge;
  width: 100vw - $marge * 2;
  font-family: "SST Light";
  font-size: xxx-large;
}

#top-row .left,
#top-row .right {
  display: flex;
}

#top-row .left .selected {
  font-family: "SST Bold";
}

#top-row .left > *,
#top-row .right > * {
  margin-right: 4vw;
}

$profile-pic-size: 55px;

#profile {
  position: relative;
  display: flex;
  align-items: center;
}

#profile img {
  @include square($profile-pic-size);
  border-radius: 50%;
}

#profile .status {
  @include square(15px);
  background-color: rgb(17, 167, 17);
  border-radius: 50%;
  position: absolute;
  top: $profile-pic-size * 0.8;
  left: $profile-pic-size * 0.8;
}
</style>
