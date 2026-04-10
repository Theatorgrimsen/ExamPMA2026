import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Image, StyleSheet } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import AddTaskScreen from './screens/AddTaskScreen';
import InspirationScreen from './screens/InspirationScreen';

function HistoryScreen() {
  return (
    <View style={styles.dummyContainer}>
      <Text>History Screen coming soon...</Text>
    </View>
  );
}


const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

// Stack for Home
function HomeStackScreen({ taskTitle, taskDescription }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeMain"
        options={{ title: 'Home', headerShown: false }}
      >
        {() => <HomeScreen taskTitle={taskTitle} taskDescription={taskDescription} />}
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
            tabBarIcon: ({ focused, color }) => (
              <Image 
                source={
                  focused
                    ? require('./assets/HomeFilled.png')
                    : require('./assets/Home.png')
                }
                style={[styles.iconStyle, { tintColor: color }]}
              />
            ),
          }}
        >
          {() => <HomeStackScreen taskTitle={taskTitle} taskDescription={taskDescription}/>} 
        </Tab.Screen>

        {/* ADD tab */}
        <Tab.Screen
          name="Add"
          options={{
            title: 'Add',
            tabBarAccessibilityLabel: 'Add task tab',
            tabBarIcon: ({ focused, color }) => (
              <Image 
                source={
                  focused
                    ? require('./assets/AddFilled.png')
                    : require('./assets/Add.png')
                }
                style={[styles.iconStyle, { tintColor: color }]}
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
            tabBarIcon: ({ color }) => (
              <Image 
                source={require('./assets/History.png')} 
                style={[styles.iconStyle, { tintColor: color }]}
              />
            ),
          }}
        />

        {/* inspire tab */}
        <Tab.Screen
          name="Inspiration"
          component={InspirationScreen}
          options={{
            title: 'Inspiration',
            tabBarAccessibilityLabel: 'Inspiration tab',
            tabBarIcon: ({ focused, color }) => (
              <Image 
                source={
                  focused
                    ? require('./assets/InspireFilled.png')
                    : require('./assets/Inspire.png')
                }
                style={[styles.iconStyle, { tintColor: color }]}
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
