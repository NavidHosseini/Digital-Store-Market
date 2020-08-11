import React, { useState, useContext, useEffect } from "react"
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from "react-native"
import Context from "../../Context"
import AsyncStorage from '@react-native-community/async-storage'
import { useNavigation } from "@react-navigation/native"

const Signin = () => {

  const navigation = useNavigation()

  const { signup, signin } = useContext(Context)

  const [Token, setToken] = useState()
  const [email, setEmail] = useState("")
  const [username, setUsername] = useState("")
  const [name, setName] = useState("")
  const [family, setFamily] = useState("")
  const [password, setPassword] = useState("")

  useEffect(() => {
    AsyncStorage.getItem("token").then(token => setToken(token))
  })

  return (
    <ScrollView>
      <View>
        <View style={{ alignItems: "center", marginVertical: 20 }}>
          <Text style={styles.ProfileText}>ایجاد پروفایل کاربری</Text>
        </View>
        <View style={styles.TextInput}>
          <TextInput
            placeholder="نام"
            value={name}
            onChangeText={text => setName(text)}
            autoCapitalize="none"
            style={styles.TextInputstyle}
          />
        </View>
        <View style={styles.TextInput}>
          <TextInput
            placeholder="نام خانوادگی"
            value={family}
            onChangeText={text => setFamily(text)}
            autoCapitalize="none"
            style={styles.TextInputstyle}
          />
        </View>
        <View style={styles.TextInput}>
          <TextInput
            placeholder="نام کاربری"
            value={username}
            onChangeText={text => setUsername(text)}
            autoCapitalize="none"
            style={styles.TextInputstyle}
          />
        </View>

        <View style={styles.TextInput}>
          <TextInput
            placeholder="ایمیل"
            value={email}
            onChangeText={text => setEmail(text)}
            autoCapitalize="none"
            keyboardType="email-address"
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
            style={styles.TextInputstyle}
          />
        </View>

        <TouchableOpacity
          style={styles.button}
          onPress={async () => {
            {
              if (Token === null) {
                await signup({ email, password, username, password, name, family })
                await signin({ email, password })

                navigation.navigate("Profile")
              }
              else {
                alert('لطفا ابتدا خارج شوید')
              }
            }
          }}
        >
          <Text>ثبت نام</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate("SignIn")}
        >
          <Text>ورود به صفحه حساب کاربری</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

export default Signin

const styles = StyleSheet.create({
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
    fontSize: 22,
    fontFamily: "SansBold",
  },
})
