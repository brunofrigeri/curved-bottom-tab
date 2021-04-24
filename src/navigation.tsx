import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBar from './components/TabBar';
import First from './screens/First';
import Third from './screens/Third';
import Secondary from './screens/Secondary';
import TabBarButton from './components/TabBarButton';

export enum SCREENS {
  FIRST = 'FIRST',
  SECONDARY = 'SECONDARY',
  THIRD = 'THIRD',
}

export type ParamsList = {
  FIRST: undefined;
  SECONDARY: undefined;
  THIRD: undefined;
};

const Stack = createStackNavigator<ParamsList>();

const Tab = createBottomTabNavigator<ParamsList>();

export function FirstStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SCREENS.FIRST} component={First} />
    </Stack.Navigator>
  );
}

export function SecondaryStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SCREENS.SECONDARY} component={Secondary} />
    </Stack.Navigator>
  );
}

export function ThirdStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={SCREENS.THIRD} component={Third} />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator tabBar={props => <TabBar props={props} />}>
        <Tab.Screen name={SCREENS.FIRST} component={FirstStack} />
        <Tab.Screen
          name={SCREENS.SECONDARY}
          options={{tabBarButton: props => <TabBarButton props={props} />}}
          component={SecondaryStack}
        />
        <Tab.Screen name={SCREENS.THIRD} component={ThirdStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
