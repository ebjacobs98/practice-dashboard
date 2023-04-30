import axios from "axios";

// some of the api design here was inspired by the following tutorials
// https://www.youtube.com/watch?v=CvCiNeLnZ00&ab_channel=DaveGray
// https://www.youtube.com/watch?v=-0exw-9YJBo&ab_channel=TraversyMedia
// https://www.youtube.com/watch?v=mvfsC66xqj0&t=3307s&ab_channel=TraversyMedia

const dev = false;

const endpoint = dev
  ? "http://localhost:9000/"
  : "https://practice-api-u64r.onrender.com/";

export const getUsers = async (payload) => {
  try {
    if (!localStorage.getItem("token")) {
      return "Not Authorized";
    }
    const response = await axios.post(endpoint + "users", payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
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

export const setTopicMetrics = async (payload) => {
  try {
    if (!localStorage.getItem("token")) {
      return "Not Authorized";
    }
    const response = await axios.patch(endpoint + "users/topic", payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data?.message;
  }
};
