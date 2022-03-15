import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
      width: 98,
      borderWidth: 1,
      borderRadius: 6,
      borderColor: "#d1d1d1",
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
    borderColor: "#c8c8c8",
    backgroundColor: "#e8e8e8",
  },
  lock: {
    alignItems: "center",
    justifyContent: "center",
    width: 32,
    height: 32,
  },
  input: {
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    width: 32,
    height: 32,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "#c8c8c8",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default styles;
