<template>
  <div class="text-start w-full box-input">
    <span :title="title">{{ title }}</span>
    <el-input
      class="input-tex"
      :class="
        errorMessage?.length || (message?.length && !meta.valid)
          ? 'is-error'
          : ''
      "
      :model-value="modelValue"
      :show-password="type === `password` ? true : false"
      @input="updateValue"
      :placeholder="placeholder"
      :type="type"
    />
    <div class="box-mess">
      <span v-if="errorMessage?.length" class="error-message">{{
        errorMessage
      }}</span>
      <span v-else-if="!meta.valid" class="error-message">{{ message }}</span>
    </div>
  </div>
</template>
<script setup lang="ts">
import { defineProps, defineEmits, toRef, ref, watch } from "vue";
import { useField, validate } from "vee-validate";
import ruleInput from "../../rule/ruleInput";

const emit = defineEmits(["update:modelValue"]);
type OnlyKeys = keyof typeof ruleInput;

const props = defineProps({
  placeholder: String,
  type: String,
  modelValue: {
    type: String,
    required: true,
  },
  title: String,
  rule: {
    type: String as () => OnlyKeys,
    default: "string",
    validator: (value: string) => Object.keys(ruleInput).includes(value),
  },
  isActiveValidate: {
    type: Boolean,
    default: false,
  },
});
const message = ref();

const valueProps = toRef(props, "modelValue");
let { meta, errorMessage, value } = useField(valueProps, ruleInput[props.rule]);

const validateInput = async () => {
  const { errors } = await validate(value.value, ruleInput[props.rule]);
  message.value = errors[0];
};
const updateValue = (value: string) => {
  emit("update:modelValue", value);
};

const isActiveProps = toRef(props, "isActiveValidate");
watch(isActiveProps, (newVal, oldVal) => {
  if (newVal) {
    validateInput();
  }
});
</script>
<style scoped>
.box-input {
  margin-bottom: 17px;
  position: relative;
}
.error-message {
  color: red;
  font-size: 12px;
}
.box-mess {
  line-height: 1;
  position: absolute;
  top: 100%;
}
:deep(.is-error .el-input__wrapper) {
  border: 1px solid red !important ;
  box-shadow: 0 0 0 0.5px rgba(255, 0, 0, 0.293) inset;
  box-shadow: none;
}
:deep(.is-error .el-input__wrapper.is-focus) {
  box-shadow: none;
}
</style>
