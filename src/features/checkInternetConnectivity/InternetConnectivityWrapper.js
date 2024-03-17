// InternetConnectivityWrapper.js
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import NetInfo from '@react-native-community/netinfo';

const InternetConnectivityWrapper = ({ children }) => {
    const [isConnected, setIsConnected] = useState(true);

    useEffect(() => {
        const unsubscribe = NetInfo.addEventListener(state => {
            setIsConnected(state.isConnected);
        });
        return () => {
            unsubscribe();
        };
    }, [isConnected]);


    if (!isConnected) {
        return (
            <View
                style={{
                    height: '100%',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <Text
                    style={{
                        fontSize: 20,
                        fontWeight: '500',
                        color: '#000',
                        marginTop: 20,
                    }}>
                    No Internet Connection
                </Text>
            </View>
        );
    }
    return <>{children}</>
};


export default InternetConnectivityWrapper;
