import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from 'react-native-vector-icons';
import Home from '../pages/home';
import Search from '../pages/Search';
import Favourites from '../pages/favourites';

const Tab = createBottomTabNavigator();

const Router = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        labelStyle: {
          fontSize: 12,
          fontWeight: 'bold',
        },
        tabBarStyle: {
          borderTopColor: '#222',
          borderTopWidth: 1,
          backgroundColor: '#222',
        },
        headerShown:false,
      }}
      tabBarOptions={{
        activeTintColor: 'white',
        inactiveTintColor: 'gray', 
      }}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="home-outline"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: 'Explore',
          tabBarLabelPosition: 'below-icon',
          headerShown:false,
        }}/>  
        <Tab.Screen name="Settings" component={Search} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="book-search-outline"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: 'Search',
          tabBarLabelPosition: 'below-icon',
          headerShown:false,
        }} />
        <Tab.Screen name="Favourites" component={Favourites} options={{
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons
              name="heart-outline"
              size={size}
              color={color}
            />
          ),
          tabBarLabel: 'Favourites',
          tabBarLabelPosition: 'below-icon',
          headerShown:false,
        }}/>
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default Router