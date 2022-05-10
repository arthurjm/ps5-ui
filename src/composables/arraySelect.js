import { ref, computed } from "vue";
import { useInterfaceStore } from "@/stores/interface";

export function useArraySelect(array, componentName) {
  const useInterface = useInterfaceStore();

  const elements = ref(array);
  const currentIndex = ref(useInterface.indexes[componentName] || 0);
  const selectedElement = computed({
    get: () => elements.value[currentIndex.value],
    set: (val) => {
      if (val >= 0 && val <= elements.value.length - 1) {
        currentIndex.value = val;

        if (componentName) {
          useInterface.indexes[componentName] = val;
        }
      }
    },
  });

  function previousElement() {
    selectedElement.value = currentIndex.value - 1;
  }

  function nextElement() {
    selectedElement.value = currentIndex.value + 1;
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
