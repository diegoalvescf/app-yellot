import { ERouteName } from "@routes/routes";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import React from "react";
import { HomeScreen } from "@screens/Home";
import { GraphicDetailsScreen } from "@screens/GraphicDetails";

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name={ERouteName.HomeScreen} component={HomeScreen} />

      <Screen
        name={ERouteName.GraphicDetailsScreen}
        component={GraphicDetailsScreen}
      />
    </Navigator>
  );
}
