import React from 'react';
import { View, TouchableOpacity } from 'react-native';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import { useNavigation } from '@react-navigation/native';

const CategoriButton = ({ tintColor }) => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Categori')}>
        <MaterialCommunityIcons name="layers-outline" style={{ fontSize: 30 }} color={tintColor} />
      </TouchableOpacity>
    </View>
  );
};
export default CategoriButton;
