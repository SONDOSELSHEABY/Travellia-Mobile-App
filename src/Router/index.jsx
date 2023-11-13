import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Search from '../pages/Search';
import Favourites from '../pages/Favourites';
import StackNavigator from './StackNavigator';
const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarStyle={{ borderTopColor: 'red' }}
        screenOptions={{
          activeTintColor: 'black',
          labelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
          tabBarStyle: {
            borderTopColor: '#84E9BD',
            borderTopWidth: 2,
          },
          headerShown: false,
        }}
      >
        <Tab.Screen
          name="explore"
          component={StackNavigator}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="home-outline"
                size={size}
                color={color}
              />
            ),
            tabBarLabel: 'Explore',
            tabBarLabelPosition: 'below-icon',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Search"
          component={Search}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="book-search-outline"
                size={size}
                color={color}
              />
            ),
            tabBarLabel: 'Search',
            tabBarLabelPosition: 'below-icon',
            headerShown: false,
          }}
        />
        <Tab.Screen
          name="Favourites"
          component={Favourites}
          options={{
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons
                name="heart-outline"
                size={size}
                color={color}
              />
            ),
            tabBarLabel: 'Favourites',
            tabBarLabelPosition: 'below-icon',
            headerShown: false,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Router;
