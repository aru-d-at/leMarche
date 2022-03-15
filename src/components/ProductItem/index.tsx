import { StyleSheet, View, Image, Text } from "react-native";
import FAIcons from "@expo/vector-icons/FontAwesome";
import styles from "./styles";

interface ProductItemProps {
  item: {
    id: string;
    title: string;
    image: string;
    avgRating: number;
    ratings: number;
    price: number;
    oldPrice?: number;
  };
}

interface StarRatingProps {
  id: string;
  avgRating: number;
  ratings: number;
}

const ProductItem = ({ item }: ProductItemProps) => {
  return (
    /* Card of
    /* Product items */
    <View style={styles.root}>
      <Image style={styles.image} source={{ uri: item.image }} />
      <View style={styles.rightContainer}>
        <Text style={styles.title} numberOfLines={3}>
          {item.title}
        </Text>
        {/* Ratings */}
        <StarRating
          id={item.id}
          avgRating={item.avgRating}
          ratings={item.ratings}
        />
        <Text style={styles.price}>
          ${item.price}{" "}
          {item.oldPrice && (
            <Text style={styles.oldPrice}>${item.oldPrice}</Text>
          )}
        </Text>
      </View>
    </View>
  );
};

const StarRating = (props: StarRatingProps) => {
  return (
    <View style={styles.ratingsContainer}>
      {[0, 0, 0, 0, 0].map((el, i) => (
        <FAIcons
          key={`${props.id}.${i}`}
          name={
            i < Math.floor(props.avgRating)
              ? "star"
              : i < Math.round(props.avgRating)
              ? "star-half-full"
              : "star-o"
          }
          size={18}
          color={"#e34"}
          style={styles.ratings}
        />
      ))}
      <Text style={styles.votes}>{props.ratings}</Text>
    </View>
  );
};

export default ProductItem;
