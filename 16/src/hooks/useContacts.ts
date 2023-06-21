import { useQuery } from "@tanstack/react-query";
import { api } from "../services/api";
import { DataTypes, UserTypes } from "../types";

const getContacts = async (): Promise<UserTypes[]> => {
  const res = await api.get("/");
  return res.data.users;
};

export function useContacts() {
  return useQuery({
    queryKey: ["contacts"],
    queryFn: getContacts,
  });
}
