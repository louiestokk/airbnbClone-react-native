import { View, Text, StyleSheet, TextInput, FlatList } from "react-native";
import React, { useState } from "react";
import search from "../assets/data/search";
import Entypo from "react-native-vector-icons/Entypo";
const DestinationSearch = () => {
  const [inputText, setInputText] = useState("");

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
          <View key={index} style={styles.row}>
            <View style={styles.iconContainer}>
              <Entypo name="location-pin" size={30} />
            </View>
            <Text style={styles.locationText}>{item.description}</Text>
          </View>
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
