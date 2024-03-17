import { StyleSheet, View, Text, TouchableOpacity, ActivityIndicator } from 'react-native';
import React from 'react';
import appColor from '../utils/appColor';

const AppButton = ({
    bgcolor,
    title,
    onPress,
    ContainerStyle,
    marginTop = 20,
    textStyle,
    buttonLoader = false,
    loaderColor = appColor.BLACK
}) => {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                styles.button,
                { backgroundColor: bgcolor, marginTop: marginTop },
                { ...ContainerStyle }
            ]}
        >
            {buttonLoader ? (
                <ActivityIndicator color={loaderColor} size={25} />
            ) : (
                <Text style={[styles.buttonText, textStyle]}>{title}</Text>
            )}
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 55,
        borderRadius: 10,
        borderWidth: 1.5,
        borderBottomWidth: 4,
        borderColor: appColor.BLACK
    },
    buttonText: {
        color: appColor.BLACK,
        fontSize: 19,
        fontWeight: '700'
    }
});

export default AppButton;
