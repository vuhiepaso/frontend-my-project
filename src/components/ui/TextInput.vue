<template>
  <div>
    <input v-model="value" type="text" />
    <span>{{ errorMessage }}</span>
  </div>
</template>
<script setup>
import { useField } from "vee-validate";
import { defineProps, toRef } from "vue";
const props = defineProps({
  name: {
    type: String,
    required: true,
  },
});
function isRequired(value) {
  if (value && value.trim()) {
    return true;
  }
  return "This is required";
}
// make sure to convert the name prop to a ref to maintain its reactivity
// this way vee-validate can react to the field name changing
const nameRef = toRef(props, "name");
const { errorMessage, value } = useField(nameRef, isRequired);
</script>
