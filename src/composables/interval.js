import { onMounted, onUnmounted } from "vue";

export function useInterval(callback, time) {
  let intervalId = 0;

  onMounted(() => {
    intervalId = setInterval(callback, time);
  });

  onUnmounted(() => clearInterval(intervalId));
}
