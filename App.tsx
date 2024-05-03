import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';

import GenreScreen from './screens/GenreScreen.js';
import HistoryScreen from './screens/HistoryScreen.js';
import { AddBookNavigator } from './CustomNavigation.js';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: 'green',
          tabBarInactiveTintColor: 'gray',
          tabBarLabelStyle: {
            fontSize:22,
          },
          tabBarIcon: () => null,
        }}
      >
        <Tab.Screen
          name="Home"
          component={AddBookNavigator}
          options={{
            tabBarLabel: 'Home',
          }}
        />
        <Tab.Screen
          name="Genre"
          component={GenreScreen}
          options={{
            tabBarLabel: 'Genre',
          }}
        />
        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={{
            tabBarLabel: 'History',
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
