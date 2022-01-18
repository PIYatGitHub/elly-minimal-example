import { StatusBar } from "expo-status-bar";
import { useCallback, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

interface IsearchProps {
  searchTerm: string;
  handleChange: (arg1: string) => void;
}
export default function Search(props: IsearchProps) {
  const st = props.searchTerm;
  return (
    <TextInput
      value={st}
      onChangeText={(t) => props.handleChange(t)}
      style={{ width: "90%", height: 50, borderWidth: 2, borderColor: "red" }}
    />
  );
}
