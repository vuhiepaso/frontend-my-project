import * as yup from "yup";
function isRequired(value: string) {
  if (value && value.trim()) {
    return true;
  }
  return "This is required";
}
const ruleInput = {
  string: yup.string(),
  required: yup.string().required("thông tin không được thiêu"),
  requiredMin: yup.string().required("thông tin không được thiêu").min(8),
  isRequired,
};
export default ruleInput;
