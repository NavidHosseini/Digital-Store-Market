import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-ionicons';
import {useNavigation} from '@react-navigation/native';

const HomeButton = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Icon name="home" />
      </TouchableOpacity>
    </View>
  );
};
export default HomeButton;

const styles = StyleSheet.create({
  Icon: {
    marginRight: 13,
  },
});
