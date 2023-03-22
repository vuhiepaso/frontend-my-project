import { useAuthStore } from "../store/useAuth";

export default {
  install: ({ config }: any) => {
    config.globalProperties.$auth = useAuthStore();
    if (useAuthStore().loggedIn) {
      // console.log("plugins/auth");
      //   useAuthStore().ftechUser();
    }
  },
};
