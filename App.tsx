import { useCallback, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Search from "./Search";

export default function App() {
  const [someState, setSomeState] = useState("");

  const handleSearch = useCallback((myNewState: string) => {
    console.log("calling the function with...", myNewState);
    setSomeState(myNewState);
  }, []);

  return (
    <View style={styles.container}>
      <Search searchTerm={someState} handleChange={(a) => handleSearch(a)} />
      <Text>{someState}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
