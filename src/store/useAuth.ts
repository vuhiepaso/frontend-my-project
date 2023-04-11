import { defineStore } from "pinia";
import axios from "axios";
import router from "../router";
JSON.parse(localStorage.getItem("info") || "{}");
export const useAuthStore = defineStore("auth", {
  state: () => ({
    loggedIn: localStorage.getItem("token") ? true : false,
    user: JSON.parse(localStorage.getItem("info") || "{}"),
  }),

  getters: {},

  actions: {
    async login(credentials: any) {
      const response = (await axios.post("login", credentials)).data;
      if (response.data) {
        const token = `Bearer ${response.data.token}`;
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;

        this.user = response.data.info;
        localStorage.setItem("info", JSON.stringify(response.data.info));

        this.loggedIn = true;
      }
    },

    async logout() {
      localStorage.removeItem("token");
      localStorage.removeItem("info");
      axios.defaults.headers.common["Authorization"] = "";
      this.$reset();
    },
  },
});
