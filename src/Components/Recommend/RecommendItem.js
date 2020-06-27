import React from 'react';
import {StyleSheet, View, Text, Image, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const RecommendItem = ({item}) => {
  const navigation = useNavigation();
  return (
    <View>
      <View style={styles.Text}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('RecommendResult', {
              id: item.id,
              name: item.name,
              price: item.price,
              detail: item.detail,
              data: item,
              picCover: item.picCover.url,
            })
          }>
          <Image
            source={{
              uri: `http://192.168.1.5:1337${item.picCover.url}`,
            }}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};
export default RecommendItem;
const styles = StyleSheet.create({
  FlatList: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20,
  },
  image: {
    width: 100,
    height: 100,

    resizeMode: 'contain',
    marginLeft: 15,
  },
  View: {
    alignItems: 'center',
  },
  Text: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
