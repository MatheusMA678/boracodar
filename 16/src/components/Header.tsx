import React from "react";
import { View, Text } from "react-native";
import { HeaderProps } from "../types";

import { HeaderButton } from "./HeaderButton";
import { InputGroup } from "./InputGroup";

export function Header({ inputValue, onInputChange }: HeaderProps) {
  return (
    <View className="p-8 bg-[#16151E]">
      <View className="flex-row justify-between items-center mb-6">
        <Text className="text-[#E1E1E6] text-2xl font-bold">Meus contatos</Text>
        <View className="flex-row">
          <HeaderButton name="add" />
          <HeaderButton name="pencil" />
          <HeaderButton name="trash-sharp" />
        </View>
      </View>
      <InputGroup value={inputValue} onChangeText={onInputChange} />
    </View>
  );
}
