import React, { useState } from 'react';
import { View, ScrollView, Image, StyleSheet, StatusBar } from 'react-native';
import { SaveUserData } from '../../network/APIs/apiRequest';
import AppButton from '../../components/AppButton';
import { Icon } from '../../components/AppIcon';
import appColor from '../../utils/appColor';
import AppHeader from '../../components/AppHeader';
import AppTextInputWithLabel from '../../components/AppTextInputWithLabel';
import Toast from 'react-native-simple-toast';
import AppStatusBar from '../../components/AppStatusBar';

const SubmitDataScreen = ({ navigation, route }) => {
    const image = route.params.image;
    const aspectRatio = route.params.aspectRatio

    const [firstName, setFirstName] = useState('');
    const [firstNameError, setFirstNameError] = useState('');

    const [lastName, setLastName] = useState('');
    const [lastNameError, setLastNameError] = useState('');

    const [email, setEmail] = useState('');
    const [emailError, setEmailError] = useState('');

    const [phoneNumber, setPhoneNumber] = useState('');
    const [phoneNumberError, setPhoneNumberError] = useState('');
    const [buttonLoading, setButtonLoading] = useState(false);



    //validation function===
    const validateForm = () => {
        let isValid = true;
        const phoneRegex = /^[6-9]\d{9}$/;
        const emailRegex = /^[^\s@]+@gmail\.com$/;
        const nameRegex = /^[a-zA-Z\s]+$/;

        // Email Validation
        if (!email.trim()) {
            setEmailError("Email is required");
            isValid = false;
        } else if (!emailRegex.test(email)) {
            setEmailError("Please enter a valid email address");
            isValid = false;
        } else {
            setEmailError('')
        }

        // Phone Validation
        if (!phoneNumber.trim()) {
            setPhoneNumberError("Phone number is required");
            isValid = false;
        } else if (!phoneRegex.test(phoneNumber)) {
            setPhoneNumberError("Please enter a valid phone number");
            isValid = false;
        } else {
            setPhoneNumberError('')
        }

        // First Name Validation
        if (!firstName.trim()) {
            setFirstNameError("First name is required");
            isValid = false;
        } else if (!nameRegex.test(firstName)) {
            setFirstNameError("Please enter a valid First name");
            isValid = false;
        } else {
            setFirstNameError('')
        }

        // Last Name Validation
        if (!lastName.trim()) {
            setLastNameError("Last name is required");
            isValid = false;
        } else if (!nameRegex.test(lastName)) {
            setLastNameError("Please enter a valid Last name");
            isValid = false;
        } else {
            setLastNameError('')
        }
        return isValid;
    }

    const createFormData = () => {
        const formData = new FormData();
        formData.append("first_name", firstName);
        formData.append("last_name", lastName);
        formData.append("email", email);
        formData.append("phone", phoneNumber);
        if (image) {
            formData.append('user_image', {
                uri: image,
                name: 'image.jpg',
                type: 'image/jpeg',
            });
        }
        return formData;
    };

    const handleSaveUserData = async () => {
        if (validateForm()) {
            setButtonLoading(true);
            const formData = createFormData();
            const res = await SaveUserData(formData);
            if (res.data.status == "success") {
                // console.log("res data", res.data);
                setButtonLoading(false);
                Toast.show(res.data.message, Toast.BOTTOM);
                setFirstName('');
                setLastName('')
                setEmail('')
                setPhoneNumber('')

            } else {
                // console.log("error", res);
                setButtonLoading(false);
            }
        }
    };

    return (
        <View style={styles.container}>
            <AppStatusBar />
            <AppHeader navigation={navigation} title="DETAILS" />
            <View style={styles.contentContainer}>
                <ScrollView contentContainerStyle={styles.scrollViewContent}>
                    <View style={{ aspectRatio: aspectRatio }}>
                        <Image style={styles.image} source={{ uri: image }} />
                    </View>
                    <AppTextInputWithLabel
                        value={firstName}
                        onChangeText={(text) => setFirstName(text)}
                        placeholder={"Enter your First name"}
                        IconType={Icon.Ionicons}
                        Iconname={'person'}
                        Iconsize={20}
                        Iconcolor={appColor.DARK_GRAY}
                        labelText="First name"
                        style={{ marginTop: 15 }}
                        validationError={firstNameError}
                        maxLength={25}
                    />
                    <AppTextInputWithLabel
                        value={lastName}
                        onChangeText={(text) => setLastName(text)}
                        placeholder={"Enter your Last name"}
                        IconType={Icon.Ionicons}
                        Iconname={'person'}
                        Iconsize={20}
                        Iconcolor={appColor.DARK_GRAY}
                        labelText="Last name"
                        style={styles.input}
                        validationError={lastNameError}
                        maxLength={25}

                    />
                    <AppTextInputWithLabel
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder={"Enter your Email"}
                        IconType={Icon.MaterialCommunityIcons}
                        Iconname={'email'}
                        Iconsize={20}
                        Iconcolor={appColor.DARK_GRAY}
                        labelText="Email"
                        style={styles.input}
                        validationError={emailError}
                        maxLength={50}
                    />
                    <AppTextInputWithLabel
                        value={phoneNumber}
                        onChangeText={(text) => setPhoneNumber(text)}
                        placeholder={"Enter your Phone number"}
                        IconType={Icon.FontAwesome}
                        Iconname={'mobile-phone'}
                        Iconsize={27}
                        Iconcolor={appColor.DARK_GRAY}
                        labelText="Phone"
                        style={styles.input}
                        validationError={phoneNumberError}
                        maxLength={10}
                        keyboardType={'numeric'}
                    />
                    <AppButton
                        bgcolor={'#f0f8ff'}
                        title={"SUBMIT"}
                        buttonLoader={buttonLoading}
                        onPress={handleSaveUserData}
                    />
                </ScrollView>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 20,
        paddingVertical: 10,
    },
    scrollViewContent: {
        paddingBottom: 10,
    },

    image: {
        flex: 1,
    },
    input: {
        marginTop: 5,
    },
});

export default SubmitDataScreen;
