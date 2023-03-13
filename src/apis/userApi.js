import axios from "axios";

const dev = true;

const endpoint = dev
  ? "http://localhost:9000/"
  : "https://practice-api-u64r.onrender.com/";

export const getUsers = async () => {
  try {
    const response = await axios.get(endpoint + "users");
    return response.data;
  } catch (error) {
    return error?.response?.data?.message;
  }
};

export const login = async (payload) => {
  try {
    const response = await axios.post(endpoint + "users/login", payload);
    return response.data;
  } catch (error) {
    return error?.response?.data?.message;
  }
};

export const register = async (payload) => {
  try {
    const response = await axios.post(endpoint + "users/create", payload);
    return response.data;
  } catch (error) {
    return error?.response?.data?.message;
  }
};

export const getCurrentUser = async () => {
  try {
    if (!localStorage.getItem("token")) {
      return "Not Authorized";
    }
    const response = await axios.get(endpoint + "users/me", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data?.message;
  }
};
