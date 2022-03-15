import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  root: {
    flexDirection: "row",
    marginVertical: 6,
    borderWidth: 1,
    borderColor: "#d1d1d1",
    borderRadius: 10,
    backgroundColor: "#fff",
  },
  image: {
    flex: 2,
    height: 150,
    marginLeft: 8,
    resizeMode: "contain",
  },
  rightContainer: {
    flex: 3,
    padding: 8,
  },
  title: {
    fontSize: 18,
    width: "100%",
  },
  ratingsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  ratings: {
    margin: 1,
  },
  votes: {
    fontSize: 12,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
  },
  oldPrice: {
    fontSize: 12,
    textDecorationLine: "line-through",
    textDecorationStyle: "solid",
  },
});

export default styles;