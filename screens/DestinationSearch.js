import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Pressable
} from "react-native";
import React, { useState } from "react";
import search from "../assets/data/search";
import Entypo from "react-native-vector-icons/Entypo";
import { useNavigation } from "@react-navigation/native";
const DestinationSearch = () => {
  const [inputText, setInputText] = useState("");
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Where are you going?"
        value={inputText}
        onChangeText={setInputText}
      />
      <FlatList
        data={search}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => navigation.navigate("Guests")}
            key={index}
            style={styles.row}
          >
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </Pressable>
        )}
      />
    </View>
  );
};

export default DestinationSearch;

const styles = StyleSheet.create({
  conatiner: {
    margin: 20
  },
  input: {
    fontSize: 20,
    marginBottom: 10,
    marginTop: 10,
    marginLeft: 15
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderColor: "lightgray"
  },
  iconContainer: {
    backgroundColor: "#e7e7e7",
    padding: 5,
    marginRight: 15,
    marginLeft: 10,
    borderRadius: 10
  },
  locationText: {}
});
