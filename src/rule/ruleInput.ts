import * as yup from "yup";
function isRequired(value: string) {
  if (value && value.trim()) {
    return true;
  }
  return "This is required";
}
function checkPassword(value: string, ctx: yup.TestContext<yup.AnyObject>) {
  const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^\w\s])[^\s]{8,}$/;
  if (regex.test(value)) {
    return true;
  }
  return ctx.createError({
    message:
      "this including at least 1 lowercase letter, 1 uppercase letter, and 1 special character.",
  });
}
const ruleInput = {
  string: yup.string(),
  required: yup.string().required(),
  requiredMin: yup.string().required("thông tin không được thiêu").min(8),
  email: yup.string().required().email(),
  password: yup
    .string()
    .required()
    .min(8)
    .test({
      name: "is-passwrord",
      skipAbsent: true,
      test(value, ctx) {
        return checkPassword(value, ctx);
      },
    })
    .max(12),
  isRequired,
};
export default ruleInput;
