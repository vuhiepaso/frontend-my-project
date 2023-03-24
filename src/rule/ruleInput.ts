import * as yup from "yup";
const ruleInput = {
  required: yup.string().required("thông tin không được thiêu").min(8),
};
export default ruleInput;
