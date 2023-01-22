import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Post = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: "https://www.blognone.com/sites/default/files/externals/e08363656966efae98d844937080d0a8.jpg"
        }}
      />
      <Text style={styles.bedrooms}>1 bed 1 bedroom</Text>
      <Text style={styles.description} numberOfLines={2}>
        Entire flat - Puerto de la Cruz Bonito estudio con vistas en el Taor. It
        has roots in a piece of classical Latin literature from 45 BC, making it
        over 2000 years old.
      </Text>
      <Text style={styles.prices}>
        <Text style={styles.oldPrice}>36$</Text>
        <Text style={styles.newPrice}> 30$ </Text> /night
      </Text>
      <Text style={styles.totalPrice}>230$ total</Text>
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
