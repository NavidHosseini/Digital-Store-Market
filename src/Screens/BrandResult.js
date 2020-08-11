import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { useRoute } from "@react-navigation/native"
import BrandResultComponent from '../Components/BrandFilter/BrandResultComponent'

const BrandResult = () => {
    const route = useRoute()
    const data = route.params.data
    console.log(data)
    return (
        <View>
            <FlatList
                data={data}
                keyExtractor={CustomData => CustomData.id.toString()}
                renderItem={({ item }) => {
                    return (<BrandResultComponent item={item} />)
                }}
            />
        </View>
    )
}

export default BrandResult

const styles = StyleSheet.create({})
