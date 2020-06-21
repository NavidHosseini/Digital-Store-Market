import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-ionicons';
import {useNavigation} from '@react-navigation/native';

const CardButton = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        <Icon name="cart" />
      </TouchableOpacity>
    </View>
  );
};
export default CardButton;

const styles = StyleSheet.create({
  Icon: {
    marginRight: 13,
  },
});
