import { View, Text, StyleSheet, FlatList } from "react-native";
import React from "react";
import feed from "../assets/data/feed";
import Post from "../components/Post";
const SearchResults = () => {
  return (
    <View>
      <FlatList
        data={feed}
        renderItem={({ item }) => <Post post={item} key={item.id} />}
      />
    </View>
  );
};

export default SearchResults;

const styles = StyleSheet.create({});
