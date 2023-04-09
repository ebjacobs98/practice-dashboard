import axios from "axios";

const dev = false;

const endpoint = dev
  ? "http://localhost:9000/"
  : "https://practice-api-u64r.onrender.com/";

export const getClasses = async () => {
  try {
    if (!localStorage.getItem("token")) {
      return "Not Authorized";
    }
    const response = await axios.get(endpoint + "classes", {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data?.message;
  }
};

export const createClass = async (payload) => {
  try {
    if (!localStorage.getItem("token")) {
      return "Not Authorized";
    }
    const response = await axios.post(endpoint + "classes", payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data?.message;
  }
};

export const deleteClass = async (payload) => {
  try {
    if (!localStorage.getItem("token")) {
      return "Not Authorized";
    }
    const response = await axios.delete(endpoint + "classes", {
      data: payload,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data?.message;
  }
};

export const getClass = async (payload) => {
  try {
    if (!localStorage.getItem("token")) {
      return "Not Authorized";
    }
    const response = await axios.post(endpoint + "classes/class", payload, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });
    return response.data;
  } catch (error) {
    return error?.response?.data?.message;
  }
};

export const updatePendingStudent = async (payload) => {
  try {
    if (!localStorage.getItem("token")) {
      return "Not Authorized";
    }
    const response = await axios.patch(
      endpoint + "classes/pendingStudent",
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error?.response?.data?.message;
  }
};

export const updateConfirmedStudent = async (payload) => {
  try {
    if (!localStorage.getItem("token")) {
      return "Not Authorized";
    }
    const response = await axios.patch(
      endpoint + "classes/confirmedStudent",
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error?.response?.data?.message;
  }
};

export const updateAssignedTopics = async (payload) => {
  try {
    if (!localStorage.getItem("token")) {
      return "Not Authorized";
    }
    const response = await axios.patch(
      endpoint + "classes/assignedTopics",
      payload,
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
    return response.data;
  } catch (error) {
    return error?.response?.data?.message;
  }
};
