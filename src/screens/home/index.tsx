import { StyleSheet, View, FlatList } from "react-native";
import FAIcons from "@expo/vector-icons/FontAwesome";
import ProductItem from "../../components/ProductItem";

import products from "../../../assets/data/products";

const Home = () => {
  return (
    <View style={styles.page}>
      <FlatList
        data={products}
        renderItem={({ item }) => <ProductItem item={item}/>}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    padding: 10,
  },
});

export default Home;
