<template>
  <div class="dropdown">
    <ul class="dropdown__list">
      <li class="dropdown__status dropdown__status--active">
        <div class="dropdown__dot dropdown__dot--green"></div>
        <div class="dropdown__text">Se connecter comme étant en ligne</div>
      </li>
      <li class="dropdown__status">
        <div class="dropdown__dot dropdown__dot--orange"></div>
        <div class="dropdown__text">Occupé</div>
      </li>
      <li class="dropdown__status">
        <div class="dropdown__dot dropdown__dot--transparent"></div>
        <div class="dropdown__text">Apparaître hors ligne</div>
      </li>
    </ul>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

.dropdown {
  position: absolute;
  left: 58%;
  top: 40%;
  background-color: rgb(30, 29, 29);

  &__list {
    list-style: none;
    display: flex;
    flex-direction: column;
    padding: 0;
    margin: 0;
  }

  &__status {
    display: flex;
    align-items: center;
    position: relative;
  }

  &__status--active {
    border: 1px solid white;
    border-radius: 5px;
  }

  $dot-size: 0.9 * $vw;
  &__dot {
    position: relative;
    border-radius: 50%;
    @include square($dot-size);
    margin: 0.7 * $vw 1.4 * $vw;
  }

  &__dot--green {
    background-color: green;
  }
  &__dot--orange {
    background-color: orange;
  }
  &__dot--transparent {
    border: 2px dashed white;
    box-sizing: border-box;
  }

  &__text {
    font-family: "SST Light";
    margin-right: 1.4 * $vw;
  }
}
</style>
