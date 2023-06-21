import React, { useState } from "react";
import { View } from "react-native";
import { GroupedUsers } from "../types";
import { useContacts } from "../hooks/useContacts";

import { Loading } from "../components/Loading";
import { ContactsList } from "../components/ContactsList";
import { Header } from "../components/Header";

export function Home() {
  const [searchInputValue, setSearchInputValue] = useState("");
  const { data, isLoading } = useContacts();

  const handleSearchInputChange = (text: string) => {
    setSearchInputValue(text);
  };

  const filteredContactsBySearch = data?.filter((user) =>
    user.firstName.toLowerCase().includes(searchInputValue.toLowerCase())
  );

  const sortedData = filteredContactsBySearch?.sort((a, b) =>
    a.firstName.localeCompare(b.firstName)
  );

  const groupContacts = () => {
    const groups = sortedData!.reduce<GroupedUsers>((groups, contact) => {
      // Pega a primeira letra do Contato
      const letter = contact.firstName[0].toUpperCase();

      if (!groups[letter]) {
        groups[letter] = [];
      }
      groups[letter].push(contact);
      return groups;
    }, {});

    return Object.keys(groups)
      .sort()
      .map((letter) => ({ letter, data: groups[letter] }));
  };

  return (
    <View className="flex-1 bg-[#1A1924]">
      <Header
        inputValue={searchInputValue}
        onInputChange={handleSearchInputChange}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <ContactsList contactGroups={groupContacts()} />
      )}
    </View>
  );
}
