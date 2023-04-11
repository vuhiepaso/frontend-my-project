import axios from "axios";

const getList = () => {
  return axios.get("equipment/list");
};
const remove = (id: number) => {
  return axios.delete(`equipment/delete/${id}`);
};

const update = (id: number, equipment: any) => {
  return axios.patch(`equipment/update/${id}`, equipment);
};

const addNew = (equipment: any) => {
  return axios.post("equipment", equipment);
};

export { getList, remove, update, addNew };
