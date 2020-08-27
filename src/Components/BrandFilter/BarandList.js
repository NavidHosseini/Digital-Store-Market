import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import BrandComponent from './BrandComponent'

const Barand = ({ title, Huawei, Panasonic, ParsKhazar, Acer, Philips, Xiaomi }) => {
    return (
        <View style={styles.View}>
            <Text style={styles.text}>{title}</Text>

            <View style={styles.ViewImage}>

                <BrandComponent
                    source={require('../../assets/Logo/Huawei.jpg')}
                    data={Huawei}
                />
                <BrandComponent
                    source={require('../../assets/Logo/Panasonic.jpg')}
                    data={Panasonic}
                />
                <BrandComponent
                    source={require('../../assets/Logo/ParsKhazar.jpg')}
                    data={ParsKhazar}
                />

            </View>
            <View style={styles.ViewImage}>

                <BrandComponent
                    source={require('../../assets/Logo/Acer.jpg')}
                    data={Acer}
                />
                <BrandComponent
                    source={require('../../assets/Logo/Philips.jpg')}
                    data={Philips}
                />
                <BrandComponent
                    source={require('../../assets/Logo/Xiaomi.jpg')}
                    data={Xiaomi}
                />

            </View>



        </View>
    )
}

export default Barand

const styles = StyleSheet.create({
    text: {
        fontSize: 20,
        fontFamily: "Sans",
        marginRight: 12,
    },

    View: {
        marginTop: 15,
        flex: 1,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 30
    },
    ViewImage: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 15
    }
})
