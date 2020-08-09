import React, { useContext, useState, useEffect } from "react"
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
  StatusBar
} from "react-native"
import AsyncStorage from '@react-native-community/async-storage'
import Context from "../../Context"
import { useRoute } from "@react-navigation/native"
import Carousel from 'react-native-snap-carousel'
import RecommendImages from "../Components/Recommend/RecommendImages"

const RecommendResult = ({ navigation }) => {
  const route = useRoute()
  const { addCart } = useContext(Context)

  const [Token, setToken] = useState('')
  const [StockNull, setStockNull] = useState('')
  const [StockTrue, setStockTrue] = useState('')


  const data = route.params.data
  const title = route.params.data.name
  const url = route.params.data.picCover.url
  const price = route.params.data.price
  const picturs = route.params.picturs
  // const url = route.params.picturs.url

  //console.log(url)



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
    )

  AsyncStorage.getItem("token").then(token => setToken(token))
  //console.log(Token)
  useEffect(() => {
    if (data.stock === null) {
      setStockNull('عدم موجودی')
    } else {
      setStockTrue('موجود در انبار')
    }
  }, [])

  return (
    <>
      {/* <StatusBar hidden={true} /> */}
      <View>
        <ScrollView>
          <View style={{ alignItems: 'center' }}>
            <Carousel
              layout='tinder'
              layoutCardOffset={50}
              sliderWidth={300}
              itemWidth={300}
              data={picturs}
              keyExtractor={() => Math.floor(Math.random() * 9999).toString()}
              renderItem={({ item }) => {
                return (
                  <RecommendImages data={item} />
                )
              }}
            />
          </View>
          <View style={styles.ViewText}>
            <Text style={styles.ProductName}>{title}: نام محصول</Text>
            <Text style={styles.TextStyle}>توضیحات :</Text>
            <Text style={styles.TextStyle}>{data.detail}</Text>
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
                  { createTwoButtonAlert() }
                }
              }}
            >
              <View style={styles.Button}>
                <Text style={styles.ButtonText}>
                  اضافه به سبد خرید
              </Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </>
  )
}
export default RecommendResult

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
    borderRadius: 10
  },
  ButtonText: {
    fontFamily: "Sans",
    color: "#fff",
    fontSize: 17,
  },
  Image: {
    width: "100%",
    height: 250
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
  ProductName: {
    textAlign: "right",
    fontFamily: "SansBold",
    fontSize: 15,
  }
})
