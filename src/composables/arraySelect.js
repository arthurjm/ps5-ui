import { ref, computed } from "vue";

export function useArraySelect(array) {
  const elements = ref(array);
  const currentIndex = ref(0);
  const selectedElement = computed({
    get: () => elements.value[currentIndex.value],
    set: (val) => {
      if (val >= 0 && val <= elements.value.length - 1) {
        currentIndex.value = val;
      }
    },
  });

  function previousElement() {
    currentIndex.value = Math.max(0, currentIndex.value - 1);
  }

  function nextElement() {
    currentIndex.value = Math.min(
      elements.value.length - 1,
      currentIndex.value + 1
    );
  }

  function isSelected(elementIndex) {
    return currentIndex.value === elementIndex;
  }

  return {
    elements,
    currentIndex,
    selectedElement,
    previousElement,
    nextElement,
    isSelected,
  };
}
