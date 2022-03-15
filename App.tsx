import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Home from "./src/screens/home";
import Product from "./src/screens/product";

export default function App() {
  return (
    <View style={styles.container}>
      <Product/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
