import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getUsers = async () => {
  try {
    const response = await axios.get(
      "https://practice-api-u64r.onrender.com/testAPI"
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const useUsers = () => {
  return useQuery(["getUsers"], () => getUsers());
};
