import { Directive, DirectiveBinding } from "vue";

// with value = string[] example v-role="['user',...]"
const role: Directive = {
  mounted(el, binding) {
    const INFO_USER = JSON?.parse(localStorage.getItem("info") || "");
    let listRole = ["admin"];
    if (binding.value) {
      listRole = [...listRole, ...binding.value];
    }
    if (!listRole.includes(INFO_USER?.role)) {
      el.parentNode.removeChild(el);
    }
  },
};

export { role };
