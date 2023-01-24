import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from "react-native";
import "react-native-gesture-handler";
import Icon from "react-native-vector-icons/FontAwesome";
import Home from "./screens/Home";
import Post from "./components/Post";
import feed from "./assets/data/feed";
import SearchResults from "./screens/SearchResults";
import DestinationSearch from "./screens/DestinationSearch";
import Guest from "./screens/Guest";
import Router from "./navigation/Router";
const App = () => {
  const post1 = feed[0];
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        animated={true}
        backgroundColor="#61dafb"
      />
      <Router />
    </>
  );
};

export default App;
