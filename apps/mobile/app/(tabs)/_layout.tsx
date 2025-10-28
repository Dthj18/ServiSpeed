import { Tabs } from 'expo-router';
import React from 'react';
import { View } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faChartPie } from '@fortawesome/free-solid-svg-icons';

const CustomTabBarBackground = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'transparent',
      borderWidth: .7,
      borderColor: '#000000',
      borderRadius: 25,
    }}
  />
);


export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarInactiveTintColor: '#FFFFFF',
        tabBarActiveTintColor: '#7EE2B5',
        tabBarStyle: {
          position: "absolute",
          bottom: 25,
          marginHorizontal: 20,
          height: 60,
          backgroundColor: "transparent",
          borderTopWidth: 0,
          elevation: 0,
        },
        tabBarBackground: () => <CustomTabBarBackground />,
      }}
    >

      <Tabs.Screen
        name='cotizaciones'
        options={{
          title: 'Cotizaciones',
          tabBarIcon: ({ color, size }) => (
            <FontAwesomeIcon icon={faChartPie} size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}