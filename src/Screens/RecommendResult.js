import React, { useContext, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  AsyncStorage,
  TouchableOpacity,
  Alert
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import Context from "../../Context";
import { useRoute } from "@react-navigation/native";

const RecommendResult = ({ navigation }) => {
  const route = useRoute();
  const { addCart, baseUrl } = useContext(Context);

  const [Token, setToken] = useState();

  const data = route.params.data;
  const title = route.params.data.name;
  const url = route.params.data.picCover.url;
  const price = route.params.data.price;

  const createTwoButtonAlert = () =>
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
          <Text style={styles.TextStyle}>{title}: نام محصول</Text>
          <Text style={styles.TextStyle}>قیمت :{price} تومان </Text>
          <Text style={styles.TextStyle}>توضیحات :</Text>
          <Text style={styles.TextStyle}>{data.detail}</Text>
          <TouchableOpacity
            onPress={() => {
              if (Token) {
                addCart({ title, url, price });
                alert("به سبد خرید اضافه شد");
              } else {
                { createTwoButtonAlert() }
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
export default RecommendResult;

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
