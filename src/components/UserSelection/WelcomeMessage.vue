<template>
  <div id="welcome">
    <div class="messages">
      <div>{{ welcome }}</div>
      <div>{{ controller }}</div>
    </div>
    <div class="controller">
      <div class="number">1</div>
      <div class="icon">
        <font-awesome-icon icon="gamepad" />
      </div>
    </div>
  </div>
</template>

<script setup>
const welcome = "Content de vous revoir sur PlayStation";
const controller = "Qui utilise cette manette ?";
</script>

<style lang="scss" scoped>
@import "@/styles/main.scss";

#welcome,
.messages,
.controller {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#welcome {
  margin-top: 12 * $vh;
  height: 24 * $vh;
}

.messages {
  :nth-child(1) {
    font-size: 4 * $vh;
  }

  :nth-child(2) {
    font-size: 2 * $vh;
    line-height: 6 * $vh;
  }
}

.controller {
  margin-top: auto;

  .number {
    font-size: 1 * $vh;
  }

  .icon {
    font-size: 2 * $vh;
  }
}
</style>
