import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {useNavigation} from '@react-navigation/native';

const CategoriComponent = ({name, iconname, data}) => {
  const navigation = useNavigation();
  //console.log(data);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('CategoriResult', {data: data})}>
      <View style={styles.View}>
        <Text style={styles.Text}>{name}</Text>
        <FontAwesome name={iconname} style={styles.Icon} />
      </View>
    </TouchableOpacity>
  );
};

export default CategoriComponent;

const styles = StyleSheet.create({
  View: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    margin: 15,
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#ff8040',
  },
  Text: {
    fontFamily: 'Sans',
    fontSize: 18,
  },
  Icon: {
    marginLeft: 35,
    fontSize: 32,
  },
});
