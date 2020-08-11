import React from 'react'
import { StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native'

const BrandComponent = ({ source, data }) => {

    const navigation = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigation.navigate('BrandResult', { data: data })}>
            <Image source={source} style={styles.image} />
        </TouchableOpacity>
    )
}

export default BrandComponent

const styles = StyleSheet.create({
    image: {
        width: 100,
        height: 100,
        borderRadius: 30
    },
})
