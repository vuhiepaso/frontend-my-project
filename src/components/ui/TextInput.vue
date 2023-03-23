<template>
  <input type="text" :value="modelValue" @input="updateValue" />
</template>
<script setup lang="ts">
import { reactive, defineProps, toRef, ref, defineEmits } from "vue";

const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    default: "",
    required: true,
  },
});

const updateValue = (event: Event) => {
  emit("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>
