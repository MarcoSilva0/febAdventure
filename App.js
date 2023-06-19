import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';

import LoginScreen from './src/pages/LoginScreen';
import HomeScreen from './src/pages/HomeScreen';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);

  const handleLogin = () => {
    // Aqui você faria a lógica de login e, em seguida, definiria loggedIn como true
    setLoggedIn(true);
  };

  const renderScreens = () => {
    if (loggedIn) {
      return (
        <Tab.Navigator>
          <Tab.Screen name="Home" component={HomeScreen} />
        </Tab.Navigator>
      );
    } else {
      return (
        <Stack.Navigator>
          <Stack.Screen name="Login">
            {(props) => <LoginScreen {...props} handleLogin={handleLogin} />}
          </Stack.Screen>
        </Stack.Navigator>
      );
    }
  };

  return (
    <NavigationContainer>
      {renderScreens()}
    </NavigationContainer>
  );
};

export default App;
