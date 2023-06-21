import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { UserProps } from "../types";

export function User({ name, phone, avatar }: UserProps) {
  return (
    <TouchableOpacity className="flex-row items-center mb-8">
      <View className="mr-4 rounded-full overflow-hidden border border-purple-500">
        <Image
          source={{
            uri: avatar,
          }}
          className="w-12 h-12"
        />
      </View>
      <View>
        <Text className="text-[#E1E1E6] font-bold">
          {name ? name : "Sem nome"}
        </Text>
        <Text className="text-[#8C8CBA] text-xs">
          {phone ? phone : "Sem número"}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
