import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setLoggedIn } from '../../features/reducers/auth.reducer'
import Lottie from 'lottie-react-native';

const SplashScreen = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        handleSpalsh();
    }, [])

    const handleSpalsh = () => {
        setTimeout(() => {
            dispatch(setLoggedIn(true))
        }, 1700);
    }

    return (
        <View style={{ flex: 1, backgroundColor: "white", justifyContent: "center", alignItems: "center" }}>
            <Lottie
                source={require('../../assets/animations/welcome.json')}
                autoPlay
                loop={true}
                style={{
                    height: "25%",
                    width: '60%',
                }}
            />

        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({})