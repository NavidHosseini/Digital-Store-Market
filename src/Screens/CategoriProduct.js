import React, { useContext, useState } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    ScrollView,
    TouchableOpacity,
    Alert
} from "react-native";
import { useRoute } from "@react-navigation/native";
import Context from "../../Context";
import AsyncStorage from '@react-native-community/async-storage';


const CategoriProduct = ({ navigation }) => {
    const route = useRoute();
    const { addCart, baseUrl } = useContext(Context);

    const [Token, setToken] = useState();

    const title = route.params.name;
    const url = route.params.picUrl
    const price = route.params.price;
    const detail = route.params.detail

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
        );

    AsyncStorage.getItem("token").then(token => setToken(token));
    //console.log(Token);

    return (
        <View>
            <ScrollView>
                <View>
                    <Image
                        style={{ width: "100%", height: 250 }}
                        source={{
                            uri: `${baseUrl}${url}`,
                        }}
                    />
                </View>
                <View style={styles.ViewText}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{
                            textAlign: "right",
                            fontFamily: "SansBold",
                            fontSize: 15,
                        }}>نام محصول :</Text>
                    </View>
                    <Text style={styles.TextStyle}>{title}</Text>

                    <Text style={styles.TextStyle}>قیمت :{price} تومان </Text>
                    <Text style={styles.TextStyle}>توضیحات :</Text>
                    <Text style={styles.TextStyle}>{detail}</Text>
                    <TouchableOpacity
                        onPress={() => {
                            if (Token) {
                                addCart({ title, url, price });
                                alert("به سبد خرید اضافه شد");
                            } else {
                                { ButtonAlert() }
                            }
                        }}
                    >
                        <View
                            style={styles.Button}
                        >
                            <Text style={styles.ButtonText}>
                                اضافه به سبد خرید
              </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};
export default CategoriProduct;

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
    }
});
