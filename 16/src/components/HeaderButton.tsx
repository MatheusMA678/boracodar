import React from "react";
import { TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface HeaderButtonProps {
  name: "trash-sharp" | "add" | "pencil";
}

export function HeaderButton({ name }: HeaderButtonProps) {
  return (
    <TouchableOpacity className="ml-4">
      <Ionicons name={name} size={20} color={"#E1E1E6"} />
    </TouchableOpacity>
  );
}
