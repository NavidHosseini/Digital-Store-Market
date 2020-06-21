import React, {useState} from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const Signin = () => {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View>
      <View style={styles.TextInput}>
        <TextInput
          placeholder="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
          autoCapitalize="none"
        />
      </View>

      <View style={styles.TextInput}>
        <TextInput
          placeholder="Password"
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => setPassword(text)}
          autoCapitalize="none"
        />
      </View>

      <TouchableOpacity style={styles.button}>
        <Text>SignUp</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button2}
        onPress={() => navigation.navigate('SignIn')}>
        <Text>I have account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Signin;

const styles = StyleSheet.create({
  TextInput: {
    backgroundColor: '#e4e4ff',
    borderRadius: 10,
    margin: 20,
  },
  button: {
    backgroundColor: '#ff9595',
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
});
