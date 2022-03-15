import React, { Dispatch, SetStateAction } from "react";
import { View, Text, TextInput, Pressable } from "react-native";
import FAIcons from "@expo/vector-icons/FontAwesome";
import styles from "./styles";

interface props {
  quantity: number;
  setQuantity: Dispatch<SetStateAction<number>>;
}

const QuantitySelector = ({ quantity, setQuantity }: props) => {
  const onMinus = () => {
    setQuantity(Math.max(1, quantity - 1));
  };

  const onPlus = () => {
    setQuantity(Math.max(quantity + 1));
  };

  return (
    <View style={styles.root}>
      <Pressable style={styles.button} onPress={onMinus}>
        <FAIcons name="minus" />
      </Pressable>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        defaultValue="1"
        placeholder="1"
        value={quantity.toString()}
        onChangeText={(text) =>
          setQuantity(text ? parseInt(text) : parseInt("1"))
        }
      />
      <Pressable style={styles.button} onPress={onPlus}>
        <FAIcons name="plus" />
      </Pressable>
      <Pressable style={styles.lock} onPress={onPlus}>
        <FAIcons name="lock" />
      </Pressable>
    </View>
  );
};

export default QuantitySelector;
