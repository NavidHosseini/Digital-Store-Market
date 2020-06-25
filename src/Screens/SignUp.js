import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Signin = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <ScrollView>
      <View>
        <View style={{alignItems: 'center', marginVertical: 20}}>
          <Text style={styles.ProfileText}>ایجاد پروفایل کاربری</Text>
        </View>
        <View style={styles.TextInput}>
          <TextInput
            placeholder="نام"
            value={username}
            onChangeText={(text) => setUsername(text)}
            autoCapitalize="none"
            style={styles.TextInputstyle}
          />
        </View>
        <View style={styles.TextInput}>
          <TextInput
            placeholder="نام خانوادگی"
            value={username}
            onChangeText={(text) => setUsername(text)}
            autoCapitalize="none"
            style={styles.TextInputstyle}
          />
        </View>
        <View style={styles.TextInput}>
          <TextInput
            placeholder=" نام کاربری (انگلیسی)"
            value={username}
            onChangeText={(text) => setUsername(text)}
            autoCapitalize="none"
            style={styles.TextInputstyle}
          />
        </View>
        <View style={styles.TextInput}>
          <TextInput
            placeholder="ایمیل"
            value={username}
            onChangeText={(text) => setUsername(text)}
            autoCapitalize="none"
            style={styles.TextInputstyle}
          />
        </View>

        <View style={styles.TextInput}>
          <TextInput
            placeholder="پسورد"
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => setPassword(text)}
            autoCapitalize="none"
            style={styles.TextInputstyle}
          />
        </View>

        <TouchableOpacity style={styles.button}>
          <Text>ثبت نام</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button2}
          onPress={() => navigation.navigate('SignIn')}>
          <Text>ورود به صفحه حساب کاربری</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  TextInput: {
    backgroundColor: '#cccccc',
    borderRadius: 10,
    margin: 20,
  },
  button: {
    backgroundColor: '#ff8040',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    margin: 20,
  },
  button2: {
    backgroundColor: '#f5cbae',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    margin: 20,
  },
  TextInputstyle: {
    textAlign: 'right',
    fontFamily: 'Sans',
    marginRight: 15,
  },
  buttonText: {
    fontFamily: 'Sans',
  },
  ProfileText: {
    paddingHorizontal: 90,
    paddingVertical: 12,
    fontSize: 25,
    fontFamily: 'SansBold',
  },
});
