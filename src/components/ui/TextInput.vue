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
import ruleInput from "../../rule/ruleInput";
const emit = defineEmits(["update:modelValue"]);

type OnlyKeys = keyof typeof ruleInput;
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  rule: {
    type: String as () => OnlyKeys,
    default: "required",
  },
});
const valueProps = toRef(props, "modelValue");

const { errorMessage } = useField(valueProps, ruleInput[props.rule]);

const updateValue = (value: string) => {
  emit("update:modelValue", value);
};
</script>

<!-- <TextInput rule="required" /> -->
