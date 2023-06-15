import { ERouteName } from '@routes/routes';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import React from 'react';
import { HomeScreen } from '@screens/Home';

const { Navigator, Screen } = createNativeStackNavigator();

export function StackRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen
        name={ERouteName.HomeScreen}
        component={HomeScreen}
      />
    </Navigator>
  );
}
