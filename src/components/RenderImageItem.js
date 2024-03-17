import { Image, StyleSheet, Text, View, } from 'react-native'
import React from 'react'

const RenderImageItem = ({ item }) => {
    console.log("item", item)
    return (
        <View style={styles.imageContainer}>
            <Image resizeMode='contain' source={{ uri: item.xt_image }} style={styles.image} />
        </View>
    )
}

export default RenderImageItem;
const styles = StyleSheet.create({
    imageContainer: {
        flex: 1,
        aspectRatio: 1,
        paddingHorizontal: 15
    },
    image: {
        width: "100%",
        height: "100%"
    },
})