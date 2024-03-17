import React from 'react';
import { Text, TextInput, View, StyleSheet } from 'react-native';
import appColor from '../utils/appColor';
import AppIcon, { Icon } from './AppIcon';

const AppTextInputWithLabel = ({
    value,
    placeholder,
    onChangeText,
    labelText = 'Enter label',
    IconType,
    Iconsize,
    Iconname,
    Iconcolor,
    style,
    keyboardType,
    validationError = "",
    maxLength
}) => {
    return (
        <View style={[styles.container, style]}>
            <Text style={styles.labelText}>
                {labelText}
            </Text>
            <View style={[styles.inputContainer, { borderColor: validationError ? appColor.red : appColor.GRAY }]}>
                <AppIcon
                    Type={IconType}
                    name={Iconname}
                    size={Iconsize}
                    color={Iconcolor}
                    style={styles.icon}
                />
                <TextInput
                    keyboardType={keyboardType}
                    value={value}
                    placeholder={placeholder}
                    onChangeText={onChangeText}
                    placeholderTextColor={appColor.DARK_GRAY}
                    maxLength={maxLength}
                    style={styles.input}
                />
            </View>
            {validationError &&
                <Text style={styles.errorText}>
                    {validationError}
                </Text>
            }
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        height: 100,
    },
    labelText: {
        fontSize: 15,
        color: appColor.BLACK,
        fontWeight: '700',
    },
    inputContainer: {
        borderRadius: 10,
        borderWidth: 1,
        borderBottomWidth: 3,
        marginTop: '2%',
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        marginRight: 10,
        marginLeft: 15,
    },
    input: {
        flex: 1,
        fontSize: 15,
        alignSelf: 'center',
        borderTopRightRadius: 25,
        borderBottomRightRadius: 25,
        color: appColor.BLACK,
    },
    errorText: {
        fontSize: 13,
        color: appColor.red,
    },
});

export default AppTextInputWithLabel;