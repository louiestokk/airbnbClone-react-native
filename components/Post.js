import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Post = (props) => {
  const {
    image,
    bed,
    type,
    title,
    price,
    description,
    oldPrice,
    newPrice,
    coordinate,
    bedroom,
    totalPrice
  } = props.post;

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: image
        }}
      />
      <Text style={styles.bedrooms}>
        {bed} bed {bedroom} bedroom
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        {type}. {title}
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>{oldPrice}$</Text>
        <Text style={styles.newPrice}> {newPrice}$ </Text> /night
      </Text>
      <Text style={styles.totalPrice}>{totalPrice}$ total</Text>
    </View>
  );
};

export default Post;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 220,
    resizeMode: "cover",
    borderRadius: "10"
  },
  container: {
    margin: 20
  },
  bedrooms: {
    marginVertical: 10,
    color: "#5b5b5b"
  },
  description: {
    fontSize: 18,
    lineHeight: 26
  },
  prices: {
    fontSize: 18,
    marginVertical: 10
  },
  oldPrice: {
    color: "#5b5b5b",
    textDecorationLine: "line-through"
  },
  newPrice: {
    fontWeight: "bold"
  },
  totalPrice: {
    color: "#5b5b5b",
    textDecorationLine: "underline"
  }
});
