import { StyleSheet, View, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { getImageListData } from '../../network/APIs/apiRequest';
import AppButton from '../../components/AppButton';
import appColor from '../../utils/appColor';
import AppHeader from '../../components/AppHeader';
import AppStatusBar from '../../components/AppStatusBar';
import Lottie from 'lottie-react-native';
import RenderImageItem from '../../components/RenderImageItem';

const ImageListScreen = ({ navigation }) => {
    const [imageList, setImageList] = useState([]);
    const [offset, setOffset] = useState(0);
    const [buttonLoading, setButtonLoding] = useState(false);
    const [screenLoading, setScrenLoading] = useState(true);

    useEffect(() => {
        handleGetImageListData();
    }, []);

    // formdata function
    const createFormData = () => {
        const formData = new FormData();
        formData.append('user_id', '108');
        formData.append('offset', offset);
        formData.append('type', 'popular');
        return formData;
    };

    //api for get Image
    const handleGetImageListData = async () => {
        setButtonLoding(true);
        const formData = await createFormData();
        const res = await getImageListData(formData);
        // console.log("res of handleGetImageListData==", res.data)
        if (res.data.status == 'success') {
            setScrenLoading(false);
            setButtonLoding(false);
            setImageList(prevData => [...prevData, ...res.data.images]);
            setOffset(offset + 1);
        } else {
            setButtonLoding(false);
            // console.log("error", res)
        }
    };

    return (
        <View style={styles.container}>
            <AppStatusBar />
            <AppHeader navigation={navigation} title="HOME" isBackButton={false} />
            {screenLoading ? (
                <View style={styles.lottieContainer}>
                    <Lottie
                        source={require('../../assets/animations/loading.json')}
                        autoPlay
                        loop={true}
                        style={styles.lottieStyle}
                    />
                </View>
            ) : (
                <FlatList
                    data={imageList}
                    renderItem={({ item }) => <RenderImageItem item={item} navigation={navigation} />}
                    keyExtractor={(item, index) => index.toString()}
                    ListFooterComponent={
                        <View style={styles.footer}>
                            <AppButton
                                loaderColor={appColor.WHITE}
                                bgcolor={appColor.BLACK}
                                title={'Click here to Loadmore...'}
                                textStyle={{ color: appColor.WHITE, fontSize: 17 }}
                                buttonLoader={buttonLoading}
                                onPress={handleGetImageListData}
                                ContainerStyle={{ height: 50 }}
                            />
                        </View>
                    }
                />
            )}
        </View>
    );
};

export default ImageListScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
    subContainer: {
        flex: 1,
    },
    imageContainer: {
        flex: 1,
        aspectRatio: 1,
        paddingHorizontal: 15,
    },
    image: {
        flex: 1,
    },
    footer: { width: '75%', alignSelf: 'center', paddingBottom: 20 },
    lottieContainer: {
        backgroundColor: appColor.WHITE,
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    lottieStyle: {
        height: '25%',
        width: '60%',
    },
});
