import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useRoute} from '@react-navigation/native';

const RecommendResult = ({navigation}) => {
  const route = useRoute();

  const data = route.params.data;
  // console.log(data);
  return (
    <View>
      <ScrollView>
        <View>
          <Image
            style={{width: '100%', height: 250}}
            source={{
              uri: `http://192.168.1.5:1337${data.picCover.url}`,
            }}
          />
        </View>
        <View style={styles.ViewText}>
          <Text style={styles.TextStyle}>{data.name}: نام محصول</Text>
          <Text style={styles.TextStyle}>قیمت :{data.price} تومان </Text>
          <Text style={styles.TextStyle}>توضیحات :</Text>
          <Text style={styles.TextStyle}>{data.detail}</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
            <View
              style={{
                alignItems: 'center',
                backgroundColor: '#ff8040',
                padding: 18,
                marginTop: 20,
                marginBottom: 40,
              }}>
              <Text style={{fontFamily: 'Sans', color: '#fff', fontSize: 17}}>
                اضافه به سبد خرید
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default RecommendResult;

const styles = StyleSheet.create({
  TextStyle: {
    textAlign: 'right',
    fontFamily: 'Sans',
    fontSize: 15,
  },
  ViewText: {
    marginHorizontal: 15,
  },
});
