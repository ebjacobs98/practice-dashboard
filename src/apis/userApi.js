import axios from "axios";

// const localEndpoint = "http://localhost:9000/testAPI";
// const prodEndpoint = "https://practice-api-u64r.onrender.com/testAPI"

export const getUsers = async () => {
  try {
    const response = await axios.get(
      "https://practice-api-u64r.onrender.com/users"
    );
    return response.data;
  } catch (error) {
    return error?.response?.data?.message;
  }
};

export const login = async (payload) => {
  try {
    const response = await axios.post(
      "https://practice-api-u64r.onrender.com/users/login",
      payload
    );
    return response.data;
  } catch (error) {
    return error?.response?.data?.message;
  }
};

export const register = async (payload) => {
  try {
    const response = await axios.post(
      "https://practice-api-u64r.onrender.com/users/create",
      payload
    );
    return response.data;
  } catch (error) {
    return error?.response?.data?.message;
  }
};
