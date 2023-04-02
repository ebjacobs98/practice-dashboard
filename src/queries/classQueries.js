import { useQuery, useMutation } from "@tanstack/react-query";
import {
  updatePendingStudent,
  updateConfirmedStudent,
  createClass,
  deleteClass,
  getClasses,
  getClass,
} from "../apis/classApi";

export const useClasses = () => {
  return useQuery(["getClasses"], () => getClasses());
};

export const useClass = (payload) => {
  return useQuery(["getClass", payload], () => getClass(payload));
};

export const useCreateClass = () => {
  return useMutation(["createClass"], (payload) => createClass(payload));
};

export const useDeleteClass = () => {
  return useMutation(["deleteClass"], (payload) => deleteClass(payload));
};

export const useUpdatePendingStudent = () => {
  return useMutation(["updatePendingStudent"], (payload) =>
    updatePendingStudent(payload)
  );
};

export const useUpdateConfirmedStudent = () => {
  return useMutation(["updateConfirmedStudent"], (payload) =>
    updateConfirmedStudent(payload)
  );
};
