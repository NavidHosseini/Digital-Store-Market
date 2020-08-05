import React, { useEffect, useState, useContext } from "react"
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView
} from "react-native"

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import { useNavigation } from "@react-navigation/native"
import Context from "../../Context"
import AsyncStorage from '@react-native-community/async-storage'


const Profile = () => {

  const navigation = useNavigation()
  const [data, setData] = useState({})

  const { baseUrl } = useContext(Context)

  useEffect(() => {
    const dataFetch = async () => {
      const token = await AsyncStorage.getItem("token")
      console.log(token)
      fetch(`${baseUrl}/users/me`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
      })
        .then(response => response.json())
        .then(json => setData(json))
        .catch(error => console.log(error))
    }

    dataFetch()
  }, [])

  //Image not read my Api

  return (
    <View>
      <ScrollView>
        <View style={styles.profileTextView}>
          <Text style={styles.profileText}>پروفایل کاربر</Text>
        </View>
        <View style={styles.View}>
          <View >
            <View style={styles.ViewImage}>
              <Image
                style={styles.image}
                source={{ uri: 'https://nihongocenter.com/wp-content/uploads/2017/08/laurence-rideout.jpg' }} />
            </View>
            <View style={styles.ViewText} >

              <Text style={styles.profilename}>
                نام و نام خانوادگی :
                {`${data.name} ${data.family}`}
              </Text>
            </View>

          </View>
          <View style={styles.ViewText2}>
            <Text style={styles.email}>ایمیل : {data.email}</Text>

          </View>
          <View style={styles.ViewText2} >

            <Text style={styles.email}>شماره موبایل : {data.PhoneNumber}</Text>
          </View>
          <View style={styles.ViewText2}>

            <Text style={styles.email}>کد پستی : {data.PostalCode}</Text>
          </View>
          <View style={styles.ViewText2}>

            <Text style={styles.email}>آدرس : {data.Address}</Text>
          </View>
          <View style={styles.ViewText2} >
            <TouchableOpacity style={styles.ViewIcon}
              onPress={() => navigation.navigate('EditProfile', {
                id: data.id,
                name: data.name,
                family: data.family,
                email: data.email,
                PhoneNumber: data.PhoneNumber,
                PostalCode: data.PostalCode,
                Address: data.Address
              })}>

              <MaterialCommunityIcons name="pencil" style={styles.icon} />
              <Text style={styles.profilename}>
                ویرایش پروفایل
            </Text>
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity
          onPress={async () => {
            await AsyncStorage.clear(),
              navigation.reset({
                index: 0,
                routes: [{ name: 'SignIn' }],
              });
          }}
          style={styles.exitButton}
        >
          <Text style={styles.exitButtonText}>خروج</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  profileTextView: {
    alignItems: "center",
    backgroundColor: "#ff5050",
    marginHorizontal: 15,
    padding: 15,
    marginVertical: 10,
  },
  profileText: {
    fontFamily: "Sans",
    color: "#fff",
    fontSize: 18,
  },
  image: {
    width: 90,
    height: 90,
    borderRadius: 50,
    justifyContent: 'center'
  },
  profilename: {
    fontFamily: "Sans",
    fontSize: 15,
  },
  email: {
    fontFamily: "Sans",
    fontSize: 15,
  },
  icon: {
    fontSize: 22,
    marginRight: 8,
  },
  ViewText: {
    alignSelf: "center",
    marginRight: 15,
    flexDirection: "row",
  },
  ViewText2: {
    flexDirection: "row",
    marginRight: 15,
    marginTop: 15,

  },
  exitButton: {
    backgroundColor: "#eb8f54",
    alignItems: "center",
    padding: 20,
    margin: 30,
    borderRadius: 20,
  },
  ViewImage: {
    justifyContent: 'center',
    marginRight: 130,
    marginBottom: 20
  },
  View: {
    alignItems: "flex-end"
  },
  ViewIcon: {
    flexDirection: 'row'
  },
  exitButtonText: {
    fontFamily: 'Sans',
    color: '#fff'
  }
})
