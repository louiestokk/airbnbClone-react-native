import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import DestinationSearch from "../screens/DestinationSearch";
import Guest from "../screens/Guest";
import HomeTabNavigator from "./HomeTabNavigator";
const Stack = createStackNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeTabNavigator}
          options={{
            headerShown: false
          }}
        />
        <Stack.Screen
          name="Destination Search"
          component={DestinationSearch}
          options={{
            title: "Search your destination"
          }}
        />
        <Stack.Screen
          name="Guests"
          component={Guest}
          options={{
            title: "How many people?"
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Router;
