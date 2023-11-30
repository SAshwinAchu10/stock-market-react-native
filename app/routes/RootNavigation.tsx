/**
 * This is a Navigation file which is wired already with Bottom Tab Navigation.
 * If you don't like it, feel free to replace with your own setup.
 * Uncomment commented lines from return() of RootNavigation to wire Login flow
 */
import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import {useSelector, useDispatch} from 'react-redux';
// import MaterialCommunityIcons from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon from 'react-native-vector-icons/Feather';

// Hook for theme change (Light/Dark Mode)
import {useTheme} from '../theme/useTheme';
// Get Value from Keyring (Encrypted token)
// Redux slice for updating Access Token to store

// import {RootState} from '../store/store';

// Screens
// import Login from '../screens/auth/Login';
import Tasks from '../screens/Tasks';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Sell from '../screens/Sell';

// Root Navigation
// const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function RootNavigation() {
  const {theme} = useTheme();
  // const user = useSelector((state: RootState) => state.user);

  const Stack = createNativeStackNavigator();

  function TabNavigator() {
    return (
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: 'white',
            borderTopColor: theme?.layoutBg,
          },
          headerShown: false,
          // headerTitle: '',
          tabBarInactiveTintColor: theme.color,
          tabBarActiveTintColor: 'blue',
          headerStyle: {backgroundColor: theme.cardBg, height: 50},
          headerTitleAlign: 'center',
          headerTitleStyle: {
            color: theme.primary,
            fontSize: 25,
            fontWeight: 'bold',
          },
          tabBarShowLabel: true,
        }}>
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="bookmark-outline"
                color={color}
                size={size}
              />
            ),
          }}
          name="Watchlist"
          component={Tasks}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="text-box-multiple-outline"
                color={color}
                size={size}
              />
            ),
          }}
          name="Orders"
          component={Tasks}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="briefcase" color={color} size={size} />
            ),
          }}
          name="Portfolio"
          component={Tasks}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="tool" color={color} size={size} />
            ),
          }}
          name="Tools"
          component={Tasks}
        />
        <Tab.Screen
          options={{
            tabBarIcon: ({color, size}) => (
              <Icon name="user" color={color} size={size} />
            ),
          }}
          name="User"
          component={Tasks}
        />
      </Tab.Navigator>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerMode: 'none',
          statusBarHidden: true,
          headerShown: false,
        }}>
        <Stack.Screen options={{ headerShown: false, headerMode: 'none' }} name="home" component={TabNavigator} />
        <Stack.Screen options={{ headerShown: false, headerMode: 'none' }} name="Sell" component={Sell} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
