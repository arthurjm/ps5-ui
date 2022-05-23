import { ref, onMounted, onUnmounted } from "vue";

export function useInterval(callback, time) {
  const intervalId = ref(0);

  onMounted(() => {
    intervalId.value = setInterval(callback, time);
  });

  onUnmounted(() => {
    clearInterval(intervalId.value);
  });
}
