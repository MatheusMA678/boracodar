import React from "react";
import { View, Text, ActivityIndicator } from "react-native";

export function Loading() {
  return (
    <View className="flex-1 justify-center items-center p-8">
      <ActivityIndicator size={48} color="white" />
      {/* <Text className="text-xl font-semibold text-white/50">
        Carregando contatos...
      </Text> */}
    </View>
  );
}
