import { useQuery, useMutation } from "@tanstack/react-query";
import {
  getUsers,
  login,
  register,
  getCurrentUser,
  setTopicMetrics,
} from "../apis/userApi";

export const useUsers = (payload) => {
  return useQuery(["getUsers", payload.type, payload.userIds], () =>
    getUsers(payload)
  );
};

export const useLogin = () => {
  return useMutation(["login"], (payload) => login(payload));
};

export const useRegister = () => {
  return useMutation(["register"], (payload) => register(payload));
};

export const useCurrentUser = () => {
  return useQuery(["getCurrentUser"], () => getCurrentUser());
};

export const useTopicMetrics = () => {
  return useMutation(["setTopicMetrics"], (payload) =>
    setTopicMetrics(payload)
  );
};
