import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Image, StyleSheet } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import AddTaskScreen from './screens/AddTaskScreen';

function HistoryScreen() {
  return (
    <View style={styles.dummyContainer}>
      <Text>History Screen coming soon...</Text>
    </View>
  );
}

function InspireScreen() {
  return (
    <View style={styles.dummyContainer}>
      <Text>Inspire Screen coming soon...</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

// Stack for Home
function HomeStackScreen({ taskTitle }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeMain"
        options={{ title: 'Home', headerShown: false }}
      >
        {() => <HomeScreen taskTitle={taskTitle} />}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
}

export default function App() {
  const [taskTitle, setTaskTitle] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Add"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#000000',
          tabBarInactiveTintColor: '#8E8E93',
          tabBarStyle: {
            backgroundColor: '#FFFFFF',
            height: 90,
            paddingBottom: 30,
            borderTopWidth: 1,
            borderTopColor: '#E5E5EA',
          },
          tabBarLabelStyle: { fontSize: 12, fontWeight: '500' },
        }}
      >
        {/* home tab */}
        <Tab.Screen
          name="Home"
          options={{
            title: 'Home',
            tabBarAccessibilityLabel: 'Home tab',
            tabBarIcon: () => (
              <Image 
                source={require('../assets/Home.png')} 
                style={styles.iconStyle} 
              />
            ),
          }}
        >
          {() => <HomeStackScreen taskTitle={taskTitle} />}
        </Tab.Screen>

        {/* ADD tab */}
        <Tab.Screen
          name="Add"
          options={{
            title: 'Add',
            tabBarAccessibilityLabel: 'Add task tab',
            tabBarIcon: () => (
              <Image 
                source={require('../assets/Plus.png')} 
                style={styles.iconStyle} 
              />
            ),
          }}
        >
          {() => (
            <AddTaskScreen 
              taskTitle={taskTitle} 
              setTaskTitle={setTaskTitle}
              taskDescription={taskDescription}
              setTaskDescription={setTaskDescription}
            />
          )}
        </Tab.Screen>

        {/* history tab */}
        <Tab.Screen
          name="History"
          component={HistoryScreen}
          options={{
            title: 'History',
            tabBarAccessibilityLabel: 'History tab',
            tabBarIcon: () => (
              <Image 
                source={require('../assets/History.png')} 
                style={styles.iconStyle} 
              />
            ),
          }}
        />

        {/* inspire tab */}
        <Tab.Screen
          name="Inspire"
          component={InspireScreen}
          options={{
            title: 'Inspire',
            tabBarAccessibilityLabel: 'Inspire tab',
            tabBarIcon: () => (
              <Image 
                source={require('../assets/Inspire.png')} 
                style={styles.iconStyle} 
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}


const styles = StyleSheet.create({
  dummyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
  },
  iconStyle: {
    width: 24,
    height: 24,
    resizeMode: 'contain'
  }
});