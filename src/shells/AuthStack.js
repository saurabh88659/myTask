import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/authStackScreens/SplashScreen';
import { Routes } from '../utils/constants';
import { routes } from '../utils/routes';



const AuthStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={routes.SPLASH_SCREEN} component={SplashScreen} />
        </Stack.Navigator>
    );
};

export default AuthStack;

