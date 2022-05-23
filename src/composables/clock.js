import { useInterval } from "@/composables/interval.js";

import { useInterfaceStore } from "@/stores/interface";

export function useClock() {
  const { setTime } = useInterfaceStore();

  updateTime();
  useInterval(updateTime, 1000);

  function format(number) {
    return number < 10 ? "0" + number : number;
  }

  function updateTime() {
    const date = new Date();
    const h = date.getHours();
    const m = date.getMinutes();
    const time = `${format(h)}:${format(m)}`;
    setTime(time);
  }
}
