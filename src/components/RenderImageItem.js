import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import { routes } from '../utils/routes';

const RenderImageItem = ({ item, navigation }) => {
    const [aspectRatio, setAspectRatio] = useState(1);

    // to get aspectRatio
    Image.getSize(item.xt_image, (width, height) => {
        setAspectRatio(width / height);
    });
    return (
        <TouchableOpacity
            onPress={() => navigation.navigate(routes.SUBMIT_DATA_SCREEN, { image: item.xt_image, aspectRatio })}
            style={[styles.imageContainer, { aspectRatio: aspectRatio }]}>
            <Image
                resizeMode="contain"
                source={{ uri: item.xt_image }}
                style={styles.image}
            />
        </TouchableOpacity>
    );
};

export default RenderImageItem;
const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        paddingHorizontal: 15,
    },
    image: { height: undefined, width: undefined, flex: 1 },
});
