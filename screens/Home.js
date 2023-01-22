import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  ImageBackground,
  Pressable,
  Dimensions
} from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
const Home = () => {
  return (
    <View>
      <Pressable
        style={styles.searchButton}
        onPress={() => console.warn("search btn clicked")}
      >
        <Fontisto name="search" size={25} color="#f15454" />
        <Text style={styles.buttonText}>Where are you going?</Text>
      </Pressable>
      <ImageBackground
        source={require("../assets/images/wallpaper.jpg")}
        style={styles.image}
      >
        <Text style={styles.title}>Go Near</Text>
        <Pressable
          style={styles.button}
          onPress={() => console.warn("console btn clicked")}
        >
          <Text style={styles.searchButtonText}>Explore nearby stays</Text>
        </Pressable>
      </ImageBackground>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 500,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
  title: {
    fontSize: 80,
    fontWeight: "bold",
    color: "white",
    width: "70%",
    marginLeft: 25
  },
  button: {
    backgroundColor: "white",
    width: 200,
    height: 40,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    marginRight: 45,
    marginTop: 20
  },
  buttonText: {
    fontSize: 16,
    fontWeight: "bold"
  },
  searchButton: {
    backgroundColor: "white",
    width: Dimensions.get("screen").width - 20,
    height: 50,
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    marginHorizontal: 10,
    alignItems: "center",
    textAlign: "center",
    position: "absolute",
    top: 20,
    zIndex: 100
  },
  searchButtonText: {
    fontSize: 16,
    fontWeight: "bold"
  }
});
