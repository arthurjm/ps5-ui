import { ref, computed } from "vue";
import { useInterfaceStore } from "@/stores/interface";

export function useArraySelect(array, componentName) {
  const interfaceStore = useInterfaceStore();

  const elements = ref(array);
  const currentIndex = ref(interfaceStore.indexes[componentName] || 0);

  const index = computed({
    get: () => currentIndex.value,
    set: (val) => {
      if (val >= 0 && val <= elements.value.length - 1) {
        currentIndex.value = val;

        if (componentName) {
          interfaceStore.indexes[componentName] = val;
        }
      }
    },
  });

  const selectedElement = computed({
    get: () => elements.value[currentIndex.value],
  });

  function previousElement() {
    index.value--;
  }

  function nextElement() {
    index.value++;
  }

  function isSelected(elementIndex) {
    return currentIndex.value === elementIndex;
  }

  return {
    elements,
    index,
    selectedElement,
    previousElement,
    nextElement,
    isSelected,
  };
}
