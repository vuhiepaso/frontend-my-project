import { reactive } from "vue";
import { io } from "socket.io-client";
interface StateSocket {
  connected: boolean;
  fooEvents: any[];
  barEvents: any[];
}
export const state: StateSocket = reactive({
  connected: false,
  fooEvents: [],
  barEvents: [],
});

// "undefined" means the URL will be computed from the `window.location` object
// const URL = process.env.NODE_ENV === "production" ? undefined : "http://localhost:3000";
const URL = "http://localhost:8001";
// const URL = "http://192.168.2.13:8001";
const token = localStorage?.getItem("token");
export const socket = io(URL, {
  auth: {
    token: token,
  },
});

socket.on("connect", () => {
  state.connected = true;
});

socket.on("disconnect", () => {
  state.connected = false;
});

// socket.on("foo", (...args) => {
//   state.fooEvents.push(args);
// });

// socket.on("bar", (...args) => {
//   state.barEvents.push(args);
// });
