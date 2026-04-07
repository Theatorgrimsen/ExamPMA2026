import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';

// Screens
import HomeScreen from './screens/HomeScreen';
import FeedScreen from './screens/AddScreen';
import HistoryScreen from './screens/HistoryScreen';
import InspirationScreen from './screens/InspirationScreen';

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

function HomeStackScreen({ catName, personName, amountInGrams, feedNotes }) {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="HomeMain"
        options={{ title: 'Home', headerShown: false }}
      >
        {() => <HomeScreen catName={catName} />}
      </HomeStack.Screen>

      <HomeStack.Screen
        name="History"
        options={{
          title: 'Feeding History',
          headerShown: true,
          presentation: 'modal',
          animation: 'slide_from_bottom',
        }}
      >
        {() => (
          <HistoryScreen
            personName={personName}
            amountInGrams={amountInGrams}
            feedNotes={feedNotes}
          />
        )}
      </HomeStack.Screen>
    </HomeStack.Navigator>
  );
}

export default function App() {
  const [catName, setCatName] = useState('');
  const [personName, setPersonName] = useState('');
  const [amountInGrams, setAmountInGrams] = useState('20');
  const [feedNotes, setfeedNotes] = useState('');

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: '#B3541E',
          tabBarInactiveTintColor: '#5A5A5A',
          tabBarStyle: {
            backgroundColor: '#F7F3EB',
          },
          tabBarLabelStyle: { fontSize: 12 },
        }}
      >
        <Tab.Screen
          name="Home"
          options={{
            title: 'Home',
            tabBarAccessibilityLabel: 'Home tab',
            tabBarIcon: () => <Text style={{ fontSize: 22 }}>🏠</Text>,
          }}
        >
          {() => (
            <HomeStackScreen
              catName={catName}
              personName={personName}
              amountInGrams={amountInGrams}
              feedNotes={feedNotes}
            />
          )}
        </Tab.Screen>

        <Tab.Screen
          name="Feed"
          options={{
            title: 'Feed Log',
            tabBarAccessibilityLabel: 'Feed log tab',
            tabBarIcon: () => <Text style={{ fontSize: 22 }}>📝</Text>,
          }}
        >
          {() => (
            <FeedScreen
              personName={personName}
              setPersonName={setPersonName}
              amountInGrams={amountInGrams}
              setAmountInGrams={setAmountInGrams}
              feedNotes={feedNotes}
              setfeedNotes={setfeedNotes}
              catName={catName}
              setCatName={setCatName}
            />
          )}
        </Tab.Screen>

        <Tab.Screen
          name="Inspiration"
          component={InspirationScreen}
          options={{
            title: 'Inspiration',
            tabBarAccessibilityLabel: 'Inspiration tab',
            tabBarIcon: () => <Text style={{ fontSize: 22 }}>🐈</Text>,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}