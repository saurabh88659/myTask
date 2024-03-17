import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ImageListScreen from '../screens/MainStackScreens/ImageListScreen';
import SubmitDataScreen from '../screens/MainStackScreens/SubmitDataScreen';
import { routes } from '../utils/routes';


const MainStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator initialRouteName={routes.IMAGE_LIST_SCREEN} screenOptions={{ headerShown: false }}>
            <Stack.Screen name={routes.IMAGE_LIST_SCREEN} component={ImageListScreen} />
            <Stack.Screen name={routes.SUBMIT_DATA_SCREEN} component={SubmitDataScreen} />
        </Stack.Navigator>
    );
};

export default MainStack;

