import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import eventListing from "./screen/EventListingScreen";
import CreateEvent from "./screen/CreateEventScreen";

const Stack = createNativeStackNavigator();
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="EventScreen">
        <Stack.Screen name="EventScreen" component={eventListing} />
        <Stack.Screen name="Create" component={CreateEvent} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
