import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const getUsers = async () => {
  try {
    const response = await axios.get(
      process.env.PROD_ENDPOINT + "/testAPI" || "http://localhost:9000/testAPI"
    );
    return response.data;
  } catch (error) {
    return [];
  }
};

export const useUsers = () => {
  return useQuery(["getUsers"], () => getUsers());
};
