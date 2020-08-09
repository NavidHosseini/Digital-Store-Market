import React from 'react'
import { StyleSheet, Image, View, Text } from 'react-native'
import config from '../../../config'

const RecommendImages = ({ data }) => {
    //console.log(data.url)


    return (
        <View style={{ alignItems: 'center', flex: 1 }}>
            <Image
                source={{ uri: `${config.BASE_URL}${data.url}` }}
                style={styles.image} />


        </View>

    )
}

export default RecommendImages

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200,
        marginTop: 20
    }
})
