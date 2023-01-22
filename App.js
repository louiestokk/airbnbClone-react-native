import React from "react";
import {
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  StatusBar
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import Home from "./screens/Home";
import Post from "./components/Post";
const App = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        animated={true}
        backgroundColor="#61dafb"
      />
      <SafeAreaView>
        {/* <Home /> */}
        <Post />
      </SafeAreaView>
    </>
  );
};

export default App;
