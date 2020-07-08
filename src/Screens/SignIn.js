import React, { useState, useContext, useEffect } from "react";
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  AsyncStorage,
} from "react-native";
import Context from "../../Context";
import Profile from "./Profile";
import { useNavigation } from "@react-navigation/native";

const Signin = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [Token, setToken] = useState();

  const { signin } = useContext(Context);

  const tokenAssignment = async () => {
    const token = await AsyncStorage.getItem("token")

    setToken(token)
  }

  useEffect(() => {
    tokenAssignment()
  });
  //console.log(Token);

  return (
    <>
      {Token === null ? (
        <ScrollView>
          <View>
            <View style={styles.View}>
              <Text style={styles.ProfileText}>پروفایل کاربری</Text>
            </View>

            <View style={styles.TextInput}>
              <TextInput
                placeholder="ایمیل"
                value={email}
                onChangeText={text => setEmail(text)}
                autoCapitalize="none"
                style={styles.TextInputstyle}
              />
            </View>

            <View style={styles.TextInput}>
              <TextInput
                placeholder="پسورد"
                secureTextEntry={true}
                value={password}
                onChangeText={text => setPassword(text)}
                autoCapitalize="none"
                place
                style={styles.TextInputstyle}
              />
            </View>
            <TouchableOpacity>
              <View style={styles.forgotpasswordView}>
                <Text style={styles.forgotpasswordText}>
                  کلمه عبور خود را فراموش کرده ام ؟
              </Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={async () => {
                await signin({ email, password });

                await tokenAssignment()

                if (Token) {
                  navigation.navigate("Profile");
                } else {
                  // return alert("اشکال در ایمیل یا پسورد");
                }
              }}
            >
              <Text style={styles.buttonText}>ورود به حساب</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.button2}
              onPress={() => navigation.navigate("SignUp")}
            >
              <Text style={styles.buttonText}>ساخت حساب کاربری</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      ) : (
          <Profile />
        )}
    </>
  )
};

export default Signin;

const styles = StyleSheet.create({
  View: {
    alignItems: "center",
    marginVertical: 20,
  },
  TextInput: {
    backgroundColor: "#cccccc",
    borderRadius: 10,
    margin: 20,
  },
  button: {
    backgroundColor: "#ff8040",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    margin: 20,
  },
  button2: {
    backgroundColor: "#f5cbae",
    borderRadius: 10,
    padding: 20,
    alignItems: "center",
    margin: 20,
  },
  TextInputstyle: {
    textAlign: "right",
    fontFamily: "Sans",
    marginRight: 15,
  },
  buttonText: {
    fontFamily: "Sans",
  },
  ProfileText: {
    paddingHorizontal: 90,
    paddingVertical: 12,
    fontSize: 25,
    fontFamily: "SansBold",
  },
  forgotpasswordView: {
    marginRight: 25,
  },
  forgotpasswordText: {
    color: "#004e9b",
  },
});
