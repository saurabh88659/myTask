import React from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import AppIcon, { Icon } from './AppIcon';
import appColor from '../utils/appColor';

const AppHeader = ({ navigation, title, isBackButton = true }) => {
    return (
        <View style={styles.container}>
            {isBackButton && (
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={styles.backButton}>
                    <AppIcon
                        Type={Icon.Fontisto}
                        name={'angle-left'}
                        color={appColor.WHITE}
                        size={16}
                    />
                </TouchableOpacity>
            )}
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
        height: 50,
        backgroundColor: '#000',
        paddingHorizontal: 15,
    },
    backButton: {
        height: 40,
        width: 50,
        justifyContent: 'center',
        position: 'absolute',
        left: 15,
        zIndex: 1,
    },
    title: {
        flex: 1,
        alignSelf: 'center',
        fontWeight: '800',
        color: '#fff',
        fontSize: 16.5,
        textAlign: 'center',
    },
});

export default AppHeader;
