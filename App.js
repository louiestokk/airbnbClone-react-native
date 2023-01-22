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
import feed from "./assets/data/feed";
const App = () => {
  const post1 = feed[0];
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        animated={true}
        backgroundColor="#61dafb"
      />
      <SafeAreaView>
        {/* <Home /> */}
        <Post post={post1} />
      </SafeAreaView>
    </>
  );
};

export default App;
