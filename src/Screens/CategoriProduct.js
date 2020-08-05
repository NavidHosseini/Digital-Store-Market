import React, { useContext, useState, useEffect } from "react"
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Alert
}
    from "react-native"
import { useRoute } from "@react-navigation/native"
import AsyncStorage from '@react-native-community/async-storage'
import Context from '../../Context'

import config from '../../config'

const CategoriProduct = ({ navigation }) => {

    const { addCart } = useContext(Context)

    const [Token, setToken] = useState()
    const [StockNull, setStockNull] = useState('')
    const [StockTrue, setStockTrue] = useState('')

    const route = useRoute()

    const title = route.params.name
    const url = route.params.picUrl
    const price = route.params.price
    const detail = route.params.detail
    const item = route.params.item

    useEffect(() => {
        if (item.stock === null) {
            setStockNull('عدم موجودی')
        } else {
            setStockTrue('موجود در انبار')
        }
    }, [])


    const ButtonAlert = () =>
        Alert.alert(
            "هشدار",
            "لطفا ابتدا وارد شوید",
            [
                {
                    text: "بعدا",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "باشه", onPress: () => { navigation.navigate('SignIn') } }
            ],
            { cancelable: false },
        )

    AsyncStorage.getItem("token").then(token => setToken(token))
    //console.log(Token)

    return (
        <View>
            <ScrollView>
                <View>
                    <Image
                        style={styles.Image}
                        source={{ uri: `${config.BASE_URL}${url}` }}
                    />
                </View>
                <View style={styles.ViewText}>
                    <View>
                        <Text style={styles.ProductName}>نام محصول : {title}</Text>
                    </View>
                    <Text style={styles.TextStyle}>توضیحات :</Text>
                    <Text style={styles.TextStyle}>{detail}</Text>
                    <Text style={styles.TextStyle}>قیمت :{price} تومان </Text>
                    <View>
                        {StockNull ?
                            (<Text style={styles.StockNull}>{StockNull}</Text>)
                            :
                            (<Text style={styles.StockTrue}>{StockTrue}</Text>)}
                    </View>
                    <TouchableOpacity

                        onPress={() => {
                            if (Token) {
                                if (StockTrue) {
                                    addCart({ title, url, price })
                                    alert("به سبد خرید اضافه شد")
                                } else {
                                    alert('موجودی تمام شده')
                                }

                            } else {
                                { ButtonAlert() }
                            }
                        }}>
                        <View style={styles.Button} >
                            <Text style={styles.ButtonText}> اضافه به سبد خرید</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    )
}
export default CategoriProduct

const styles = StyleSheet.create({
    TextStyle: {
        textAlign: "right",
        fontFamily: "Sans",
        fontSize: 15,

    },
    ViewText: {
        marginHorizontal: 15,
    },
    Button: {
        alignItems: "center",
        backgroundColor: "#ff8040",
        padding: 18,
        marginTop: 20,
        marginBottom: 40,
    },
    ButtonText: {
        fontFamily: "Sans",
        color: "#fff",
        fontSize: 17
    },
    Image: {
        width: "100%",
        height: 250
    },
    ProductName: {
        textAlign: "right",
        fontFamily: "SansBold",
        fontSize: 15,
    },
    StockNull: {
        color: 'red',
        fontFamily: 'Sans',
        marginBottom: 5,
        textDecorationLine: 'line-through',
        textAlign: 'center',
        fontSize: 18
    },
    StockTrue: {
        color: 'green',
        fontFamily: 'Sans',
        marginBottom: 5,
        fontSize: 18,
        textAlign: 'center',

    },
})
