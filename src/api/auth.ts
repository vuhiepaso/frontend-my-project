import axios from "axios";

const register = (data: any) => {
  return axios.post("accounts/register", data);
};

export { register };
