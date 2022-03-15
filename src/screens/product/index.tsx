import { useState } from "react";
import { Text, View, FlatList } from "react-native";
import { Picker } from "@react-native-picker/picker";
import QuantitySelector from "../../components/QuantitySelector";
import Button from "../../components/Button";
import Carousel from "../../components/Carousel";
import FAIcons from "@expo/vector-icons/FontAwesome";
import styles from "./styles";

import product from "../../../assets/data/product";

const Product = () => {
  const [selectedType, setSelectedType] = useState(
    product.options ? product.options[0] : null
  );
  const [quantity, setQuantity] = useState(1);

  return (
    <View style={styles.page}>
      {/* Carousel */}
      <Carousel images={product.images}/>
      {/* Options Selector */}
      <Picker style={styles.picker}
        selectedValue={selectedType}
        onValueChange={(itemValue) => setSelectedType(itemValue)}
      >
        {product.options.map((el, i) => (
          <Picker.Item
            label={el.toString()}
            value={el.toString()}
            key={i.toString()}
          />
        ))}
      </Picker>
      {/* Quantity */}
      <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
      {/* Price */}
      <Text style={styles.price}>
        ${product.price}{" "}
        {product.oldPrice && (
          <Text style={styles.oldPrice}>${product.oldPrice}</Text>
        )}
      </Text>
      {/* Button */}
      <Button
        type="secondary"
        text="Add To Cart"
        onPress={() => {
          console.warn("Added to Cart");
        }}
      />
      <Button
        type="main"
        text="Buy Now"
        onPress={() => {
          console.warn("Buying Screen");
        }}
      />
      {/* Description */}
      <Text style={styles.description}>{product.description}</Text>
    </View>
  );
};

export default Product;
