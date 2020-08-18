import React, { useState, useEffect } from "react"
import { StyleSheet, Text, View, ActivityIndicator, BackHandler, Alert } from "react-native"
import { ScrollView } from "react-native-gesture-handler"
import Recommend from "../Components/Recommend/Recommend"
import config from '../../config'
import BarandList from "../Components/BrandFilter/BarandList"

const Home = ({ navigation }) => {

  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    fetch(`${config.BASE_URL}/digital-store-markets`)
      .then(response => response.json())
      .then(json => setData(json))
      .catch(() => ButtonAlert())
      .finally(() => setLoading(false))

  }, [])
  const ButtonAlert = () =>
    Alert.alert(
      "هشدار",
      "خطا در ارتباط با سرور",
      [{
        text: "خروج",
        onPress: () => BackHandler.exitApp(),
        style: "cancel"
      },
      {
        text: "دوباره امتحان کن", onPress: () => {
          navigation.reset({
            index: 1,
            routes: [{ name: 'Home' }],
          })
        }
      }
      ],
      { cancelable: false },
    )

  const filterResults = Type => {
    return data.filter(result => {
      return result.Type === Type
    })
  }

  const filterBrands = Brand => {
    return data.filter(result => {
      return result.Brand === Brand
    })
  }



  //console.log(filterBrands("Samsung"))
  return (
    <View style={{ flex: 1 }}>
      {isLoading ? (
        <View style={styles.ActivityIndicator}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
          <View style={styles.Container}>
            <View style={styles.welcomeStyle}>
              <Text style={styles.welcomeTitle}>
                به فروشگاه دیجیتال خوش امدید
            </Text>
            </View>
            <ScrollView>
              <View >
                <Recommend
                  title="موبایل های پیشنهادی ..."
                  result={filterResults("Mobile")}
                />
                <Recommend
                  title="لپ تاپ های پیشنهادی ..."
                  result={filterResults("LapTop")}
                />
                <Recommend
                  title="دوربین های پیشنهادی ..."
                  result={filterResults("Camera")}
                />
                <BarandList
                  title="برندهای پیشنهادی ..."
                  Huawei={filterBrands("Huawei")}
                  Panasonic={filterBrands("Panasonic")}
                  parsKhazar={filterBrands("ParsKhazar")}
                  Acer={filterBrands("Acer")}
                  Philips={filterBrands("Philips")}
                  Xiaomi={filterBrands("Xiaomi")}
                />


              </View>
            </ScrollView>
          </View>
        )}
    </View>
  )
}
export default Home

const styles = StyleSheet.create({
  welcomeTitle: {
    fontSize: 20,
    color: "#fff",
    fontFamily: "SansBold",
  },
  welcomeStyle: {
    alignItems: "center",
    marginTop: 15,
    marginBottom: 25,
    backgroundColor: "#ff8040",
    marginHorizontal: 25,
    padding: 8,
    borderRadius: 15
  },
  ActivityIndicator: {
    alignItems: "center",

    justifyContent: "center",
    flex: 1,
  },
  Container: {
    backgroundColor: '#fbf3ee',
    flex: 1
  }
})
