import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import SearchResults from "../screens/SearchResults";
const Stack = createStackNavigator();

const ExploreNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={"Welcome"}
        component={Home}
        options={{
          headerShown: false
        }}
      />
      <Stack.Screen
        name={"SearchResults"}
        component={SearchResults}
        options={{
          title: "Search your destination"
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
