import { defineStore } from "pinia";
import axios from "axios";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    loggedIn: localStorage.getItem("token") ? true : false,
    user: null,
  }),

  getters: {},

  actions: {
    async login(credentials: any) {
      const response = (await axios.post("api/login", credentials)).data;
      console.log(response);
      if (response) {
        // const token = `Bearer ${response.token}`;
        // localStorage.setItem("token", token);
        // axios.defaults.headers.common["Authorization"] = token;
        // this.user =
        // this.loggedIn = true;
      }
    },

    async logout() {
      //   const response = (await axios.post("api/logout")).data;
      //   if (response) {
      localStorage.removeItem("token");
      this.$reset();
      //   }
    },
  },
});
