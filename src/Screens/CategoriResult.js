import React from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import {useRoute} from '@react-navigation/native';
import CategoriResultComponent from '../Components/CategoriResultComponent';

const CategoriResult = () => {
  const route = useRoute();
  const data = route.params.data;
  // console.log(data);
  return (
    <View>
      <FlatList
        data={data}
        keyExtractor={(data) => data.id.toString()}
        renderItem={({item}) => {
          return <CategoriResultComponent item={item} />;
        }}
      />
    </View>
  );
};
export default CategoriResult;

const styles = StyleSheet.create({});
