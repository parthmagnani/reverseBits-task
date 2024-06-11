import axios from "axios";
import { API_URL } from "../utils/apiUrl";

// export const getUsers = async () => {
//   const response = await axios.get(API_URL + "users");
//   return response;
// };

export const getUserList = async () => {
  const response = await axios.get(API_URL + "users");

  return response.data;
};
