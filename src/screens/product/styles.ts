import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  page: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    width: "100%",
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
  detailsContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  description: {
    marginVertical: 10,
    lineHeight: 16,
    fontSize: 12,
    width: "100%",
  },
  descriptionExpand: {
    marginVertical: 10,
    lineHeight: 24,
    fontSize: 14,
    width: "100%",
  },
  picker: {
    width: "50%",
  }
});

export default styles;
