import React from "react";
import { View, Text, ScrollView } from "react-native";
import { ContactsListProps } from "../types";

import { User } from "./User";

export function ContactsList({ contactGroups }: ContactsListProps) {
  return (
    <ScrollView className="p-8">
      {contactGroups.map((group, index) => {
        return (
          <View className="flex-row mb-8" key={index}>
            <View className="h-10 w-10 mr-8 rounded-lg bg-[#633BBC] items-center justify-center">
              <Text className="text-[#E1E1E6] font-bold">{group.letter}</Text>
            </View>
            <View>
              {group.data.map((user) => {
                return (
                  <User
                    key={user.id}
                    name={`${user.firstName} ${user.lastName}`}
                    phone={user.phone}
                    avatar={user.image}
                  />
                );
              })}
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}
