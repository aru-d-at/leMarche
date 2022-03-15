import React from "react";
import { View, Image, FlatList, useWindowDimensions } from "react-native";
import styles from "./styles";

interface CarouselProps {
  images: [string];
}

const Carousel = ({ images }: CarouselProps) => {
  const windowW = useWindowDimensions().width;
  return (
    <View>
      <FlatList
        data={images}
        renderItem={({ item }) => (
          <Image
            style={[styles.image, { width: windowW - 40 }]}
            source={{ uri: item }}
          />
        )}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowW - 20}
        snapToAlignment={"center"}
      />
      {/* Dot */}
      <View style={styles.dots}>
        {images.map((im, i) => (
          <View style={styles.dot}></View>
        ))}
      </View>
    </View>
  );
};

export default Carousel;
