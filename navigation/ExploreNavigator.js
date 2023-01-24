import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/Home";
import SearchResults from "../screens/SearchResults";
import SearchResultsTabNavigator from "./SearchResultsTabNavigator";
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
        component={SearchResultsTabNavigator}
        options={{
          title: "Search your destination"
        }}
      />
    </Stack.Navigator>
  );
};

export default ExploreNavigator;
