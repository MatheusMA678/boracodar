import React from "react";
import { View, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";

interface InputGroupProps {
  value: string;
  onChangeText: (text: string) => void;
}

export function InputGroup({ value, onChangeText }: InputGroupProps) {
  return (
    <View className="h-12 text-[#E1E1E6] bg-[#24243D] rounded-md flex-row items-center px-4">
      <Ionicons name="search" size={20} color={"#E1E1E6"} />
      <TextInput
        placeholder="Busque por nome ou por dados de contato..."
        className="flex-1 text-white ml-4"
        placeholderTextColor="#E1E1E6"
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  );
}
