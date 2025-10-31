<template>
  <label
    class="relative inline-flex items-center gap-2 cursor-pointer select-none"
  >
    <span class="relative inline-block w-14 h-8">
      <input
        type="checkbox"
        class="sr-only peer"
        v-model="localChecked"
      />

      <span
        class="absolute inset-0 bg-gray-900 rounded-full transition-colors duration-300 ease-in-out peer-checked:bg-slate-700 shadow-inner"
      ></span>

      <span
        class="absolute top-1 left-1 w-6 h-6 bg-white rounded-full transition-all duration-300 ease-in-out transform peer-checked:translate-x-6 shadow-md"
      ></span>
    </span>
  </label>
</template>

<script setup>
import { ref, watch, defineProps, defineEmits } from "vue";

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  checked: { type: Boolean, default: false },
});

const emit = defineEmits(["update:modelValue"]);

const localChecked = ref(props.checked || props.modelValue);

watch(localChecked, (val) => emit("update:modelValue", val));
watch(
  () => props.modelValue,
  (val) => (localChecked.value = val)
);
</script>
