import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 10,
  },
  image: {
    margin: 10,
    height: 250,
    resizeMode: "contain",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#c8c8c8",
    backgroundColor: "#a8a8a8",
    margin: 6,
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default styles;
