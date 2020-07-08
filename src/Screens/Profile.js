import React, { useEffect, useState, useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
  TouchableOpacity
} from "react-native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useNavigation } from "@react-navigation/native";
import Context from "../../Context";

const Profile = () => {
  const navigation = useNavigation();
  const [data, setData] = useState({});
  const { baseUrl } = useContext(Context);

  useEffect(() => {
    const dataFetch = async () => {
      const token = await AsyncStorage.getItem("token")
      // console.log(token)
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
  }, []);


  if (data) {
    return (
      <View>
        <View style={styles.profileTextView}>
          <Text style={styles.profileText}>پروفایل کاربر</Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <View style={{ flexDirection: "row" }}>
            <View style={styles.ViewText} >

              <Text style={styles.profilename}>
                نام و نام خانوادگی :
                {`${data.name} ${data.family}`}
              </Text>
            </View>

          </View>
          <View
            style={styles.ViewText2}
          >

            <Text style={styles.email}>ایمیل : {data.email}</Text>
          </View>
          <View
            style={styles.ViewText2}
          >
            <TouchableOpacity style={{ flexDirection: 'row' }} onPress={() => navigation.navigate('EditProfile', {
              id: data.id,
              name: data.name,
              family: data.family,
              email: data.email
            })}>

              <MaterialCommunityIcons name="pencil" style={styles.icon} />
              <Text style={styles.profilename}>
                ویرایش پروفایل
            </Text>
            </TouchableOpacity>

            <Text>

            </Text>
          </View>

        </View>
        <TouchableOpacity
          onPress={() => {
            AsyncStorage.removeItem("token"), navigation.navigate("SignIn");
          }}
          style={styles.exitButton}
        >
          <Text>خروج</Text>
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View>
        <Button
          title="خروج"
          onPress={() => {
            AsyncStorage.removeItem("token"), navigation.navigate("SignIn");
          }}
        />
      </View>
    );
  }
};
export default Profile;

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
    width: 100,
    height: 100,
    borderRadius: 150,
    marginRight: 15,
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
    backgroundColor: "#8080ff",
    alignItems: "center",
    padding: 20,
    margin: 30,
    borderRadius: 20,
  }
});
