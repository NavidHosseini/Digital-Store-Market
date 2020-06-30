import React, { useContext } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  AsyncStorage,
  Image,
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import Context from "../../Context";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  //const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch("http://192.168.1.6:1337/users/me")
  //     .then(response => response.json())
  //     .then(json => setData(json))
  //     .catch(error => console.log(error));
  // }, []);
  //console.log(data);
  const { datauser } = useContext(Context);
  //console.log(datauser.user.pic.url);
  if (datauser) {
    return (
      <View>
        <View style={styles.profileTextView}>
          <Text style={styles.profileText}>پروفایل کاربر</Text>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <View style={{ flexDirection: "row" }}>
            <View
              style={{
                alignSelf: "center",
                marginRight: 15,
                flexDirection: "row",
              }}
            >
              <MaterialCommunityIcons
                name="pencil-outline"
                style={styles.icon}
              />
              <Text style={styles.profilename}>
                نام و نام خانوادگی :
                {datauser.user.name}
                {datauser.user.family}
              </Text>
            </View>
            <Image
              source={{
                uri: `http://192.168.1.6:1337${datauser.user.pic.url}`,
              }}
              style={styles.image}
            />
          </View>
          <View
            style={{
              flexDirection: "row",
              marginRight: 15,
              marginTop: 15,
            }}
          >
            <MaterialCommunityIcons name="pencil-outline" style={styles.icon} />
            <Text style={styles.email}>ایمیل : {datauser.user.email}</Text>
          </View>
        </View>
        <TouchableOpacity
          onPress={() => {
            AsyncStorage.removeItem("token"), navigation.navigate("SignIn");
          }}
          style={{
            backgroundColor: "#8080ff",
            alignItems: "center",
            padding: 20,
            margin: 30,
            borderRadius: 20,
          }}
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
    marginRight: 15,
  },
});
