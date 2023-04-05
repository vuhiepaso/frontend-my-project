import axios from "axios";

const getList = () => {
  return axios.get("equipment/list");
};
const remove = (id: number) => {
  return axios.delete(`equipment/delete/${id}`);
};

export { getList, remove };
