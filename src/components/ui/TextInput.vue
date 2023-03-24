<template>
  <div class="text-start">
    <el-input
      :model-value="modelValue"
      @input="updateValue"
      placeholder="Please input"
    />
    <span>{{ errorMessage }}</span>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, toRef } from "vue";
import { useField } from "vee-validate";
import * as yup from "yup";
const emit = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
});
const valueProps = toRef(props, "modelValue");

const rule = yup.string().required("thông tin không được thiêu").min(8);

const { errorMessage } = useField(valueProps, rule);

const updateValue = (value: string) => {
  emit("update:modelValue", value);
};
</script>
