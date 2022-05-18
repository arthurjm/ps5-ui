import { onMounted, ref, computed } from "vue";
import { useInterval } from "@/composables/interval.js";

export function useClock() {
  const hours = ref(0);
  const minutes = ref(0);

  onMounted(() => {
    updateTime();
    useInterval(updateTime, 1000);
  });

  function updateTime() {
    const date = new Date();
    hours.value = date.getHours();
    minutes.value = date.getMinutes();
  }

  function format(number) {
    return number < 10 ? "0" + number : number;
  }

  const time = computed({
    get: () => {
      const h = hours.value;
      const m = minutes.value;
      const t = `${format(h)}:${format(m)}`;
      return t;
    },
  });

  return {
    time,
  };
}
