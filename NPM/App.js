import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text, View, Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native';

import HomeScreen from './screens/HomeScreen';
import AddTaskScreen from './screens/AddTaskScreen';
import InspirationScreen from './screens/InspirationScreen';
import HistoryScreen from './screens/HistoryScreen';

{/* Importing the pop-up Screens */}
import HealthScreen from './screens/InspirationStack/Health';
import CareerScreen from './screens/InspirationStack/Career';
import LearningScreen from './screens/InspirationStack/Learning';

{/* Importing the Onboarding Screens */}
import OnboardingOne from './screens/OnboardingScreens/OnboardingOne';
import OnboardingTwo from './screens/OnboardingScreens/OnboardingTwo';
import OnboardingThree from './screens/OnboardingScreens/OnboardingThree';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();
const OnboardingStack = createNativeStackNavigator();
const InspirationStack = createNativeStackNavigator();

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

{/* Stack for home */}
function HomeStackScreen({ tasks, onToggleTask }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeMain"
        options={{ title: 'Home', headerShown: false }}
      >
        {() => <HomeScreen tasks={tasks} onToggleTask={onToggleTask} />}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
}

{/* Inspiration stack */}
function InspirationStackScreen() {
  return (
    <InspirationStack.Navigator
      screenOptions={{ headerShown: false }}
    >
      <InspirationStack.Screen
        name="InspirationMain"
        component={InspirationScreen}
      />
      <InspirationStack.Screen
        name="HealthDetail"
        component={HealthScreen}
        options={{
          presentation: 'modal', //Screens slides from the bottom
        }}
      />
      <InspirationStack.Screen
        name="CareerDetail"
        component={CareerScreen}
        options={{
          presentation: 'modal',
        }}
      />
      <InspirationStack.Screen
        name="LearningDetail"
        component={LearningScreen}
        options={{
          presentation: 'modal',
        }}
      />
    </InspirationStack.Navigator>
  );
}

export default function App() {
  const [tasks, setTasks] = useState([]);

  function handleAddTask(taskTitle, taskDescription) {
    const trimmedTitle = taskTitle.trim();
    const trimmedDescription = taskDescription.trim();

    if (!trimmedTitle) {
      return;
    }

    setTasks((currentTasks) => [
      ...currentTasks,
      {
        id: Date.now().toString(),
        title: trimmedTitle,
        description: trimmedDescription,
        completed: false,
        completedAt: null,
      },
    ]);
  }

  function handleToggleTask(taskId) {
    setTasks((currentTasks) =>
      currentTasks.map((task) =>
        task.id === taskId
          ? {
            ...task,
            completed: !task.completed,
            completedAt: !task.completed ? new Date().toISOString() : null,
          }
          : task
      )
    );
  }

  function MainTabs() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
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
            tabBarAccessibilityHint: 'Navigates to your daily task list',
            tabBarIcon: ({ focused, color }) => (
              <Image
                source={
                  focused
                    ? require('./assets/HomeFilled.png')
                    : require('./assets/Home.png')
                }
                style={[styles.iconStyle, { tintColor: color }]}
                accessibilityLabel="Home icon"
              />
            ),
          }}
        >
          {() => <HomeStackScreen tasks={tasks} onToggleTask={handleToggleTask} />}
        </Tab.Screen>

        {/* ADD tab */}
        <Tab.Screen
          name="Add"
          options={{
            title: 'Add',
            tabBarAccessibilityLabel: 'Add task tab',
            tabBarAccessibilityHint: 'Opens the screen to create a new task',
            tabBarIcon: ({ focused, color }) => (
              <Image
                source={
                  focused
                    ? require('./assets/AddFilled.png')
                    : require('./assets/Add.png')
                }
                style={[styles.iconStyle, { tintColor: color }]}
                accessibilityLabel="Plus icon"
              />
            ),
          }}
        >
          {() => (
            <AddTaskScreen onAddTask={handleAddTask} />
          )}
        </Tab.Screen>

        {/* history tab */}
        <Tab.Screen
          name="History"
          options={{
            title: 'History',
            tabBarAccessibilityLabel: 'History tab',
            tabBarAccessibilityHint: 'Shows your completed tasks',
            tabBarIcon: ({ color }) => (
              <Image
                source={require('./assets/History.png')}
                style={[styles.iconStyle, { tintColor: color }]}
                accessibilityLabel="History clock icon"
              />
            ),
          }}
        >
          {() => <HistoryScreen tasks={tasks} />}
        </Tab.Screen>

        {/* inspire tab */}
        <Tab.Screen
          name="Inspiration"
          component={InspirationStackScreen}
          options={{
            title: 'Inspiration',
            tabBarAccessibilityLabel: 'Inspiration tab',
            tabBarAccessibilityHint: 'Navigates to wellness and growth ideas',
            tabBarIcon: ({ focused, color }) => (
              <Image
                source={
                  focused
                    ? require('./assets/InspireFilled.png')
                    : require('./assets/Inspire.png')
                }
                style={[styles.iconStyle, { tintColor: color }]}
                accessibilityLabel="Inspiration icon"
              />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }

  {/* onboarding */ }
  return (
    <NavigationContainer>
      <OnboardingStack.Navigator
        initialRouteName="OnboardingOne"
        screenOptions={{ headerShown: false }}
      >
        <OnboardingStack.Screen name="OnboardingOne" component={OnboardingOne} />
        <OnboardingStack.Screen name="OnboardingTwo" component={OnboardingTwo} />
        <OnboardingStack.Screen name="OnboardingThree" component={OnboardingThree} />

        <OnboardingStack.Screen name="MainTabs" component={MainTabs} />
      </OnboardingStack.Navigator>
    </NavigationContainer>
  );
}
