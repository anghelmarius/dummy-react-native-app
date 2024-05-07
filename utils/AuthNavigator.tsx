import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import LoginScreen from "../screens/login";
import RegisterScreen from "../screens/register";
import HomeScreen from "../screens/home";
import routes from "./routes";
import { navigationRef } from "./RootNavigation";
import { getfromLocalStorage } from "./AsyncStorageHandler";

const Stack = createStackNavigator();

const AuthNavigator = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    getfromLocalStorage("isLoggedIn").then((res) => {
      if (res && res === "true") {
        setIsLoggedIn(true);
      }
    });
  }, []);
  const defaultScreenOptions = { headerShown: false };
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName={isLoggedIn ? routes.HOME : routes.REGISTER}
      >
        <Stack.Screen
          key={1}
          name="Login"
          component={LoginScreen}
          options={defaultScreenOptions}
        />
        <Stack.Screen
          key={2}
          name="Register"
          component={RegisterScreen}
          options={defaultScreenOptions}
        />
        <Stack.Screen
          key={3}
          name="Home"
          component={HomeScreen}
          options={defaultScreenOptions}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthNavigator;
