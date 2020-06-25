import React from 'react';
import {View, TouchableOpacity} from 'react-native';

import Feather from 'react-native-vector-icons/Feather';

import {useNavigation} from '@react-navigation/native';

const ProfileButton = () => {
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
        <Feather name="user" style={{fontSize: 27}} />
      </TouchableOpacity>
    </View>
  );
};
export default ProfileButton;
