import { StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import appColor from '../utils/appColor'

const AppStatusBar = () => {
    return (
        <StatusBar backgroundColor={appColor.BLACK} barStyle={'light-content'} />
    )
}

export default AppStatusBar;

