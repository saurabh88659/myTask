import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { store } from './src/app/Store';
import { NavigationContainer } from '@react-navigation/native'
import MainStack from './src/shells/MainStack';
import AuthStack from './src/shells/AuthStack';
import InternetConnectivityWrapper from './src/features/checkInternetConnectivity/InternetConnectivityWrapper';


const App = () => {
    const loggedIn = useSelector((state) => state.auth.loggedIn)
    return (
        <InternetConnectivityWrapper>
            <NavigationContainer>
                {loggedIn ? <MainStack /> : <AuthStack />}
            </NavigationContainer>
        </InternetConnectivityWrapper>
    )
};

const AppWapper = () => {
    return (
        <Provider store={store}>
            <App />
        </Provider>
    );
}
export default AppWapper;

