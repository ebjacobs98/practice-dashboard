import { useQuery, useMutation } from "@tanstack/react-query";
import { getUsers, login, register, getCurrentUser } from "../apis/userApi";

export const useUsers = () => {
  return useQuery(["getUsers"], () => getUsers());
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
