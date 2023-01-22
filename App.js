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
const App = () => {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        animated={true}
        backgroundColor="#61dafb"
      />
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </>
  );
};

export default App;
