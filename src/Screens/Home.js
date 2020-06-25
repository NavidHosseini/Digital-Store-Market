import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Recommend from '../Components/Recommend';

const Home = () => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch('http://192.168.1.5:1337/digital-store-markets')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  const filterResults = (Type) => {
    return data.filter((result) => {
      return result.Type === Type;
    });
  };

  return (
    <View style={{flex: 1, padding: 10}}>
      {isLoading ? (
        <View style={styles.ActivityIndicator}>
          <ActivityIndicator size="large" color="red" />
        </View>
      ) : (
        <View>
          <View style={styles.welcomeStyle}>
            <Text style={styles.welcomeTitle}>
              به فروشگاه دیجیتال خوش امدید
            </Text>
          </View>
          <ScrollView>
            <View style={{marginBottom: 100}}>
              <Recommend
                title="موبایل های پیشنهادی ..."
                result={filterResults('Mobile')}
              />
              <Recommend
                title="لپ تاپ های پیشنهادی ..."
                result={filterResults('LapTop')}
              />
              <Recommend
                title="دوربین های پیشنهادی ..."
                result={filterResults('Camera')}
              />
            </View>
          </ScrollView>
        </View>
      )}
    </View>
  );
};
export default Home;

const styles = StyleSheet.create({
  welcomeTitle: {
    fontSize: 20,
    color: '#fff',
    fontFamily: 'SansBold',
  },
  welcomeStyle: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 25,
    backgroundColor: '#ff8040',
    marginHorizontal: 25,
    padding: 8,
  },
  ActivityIndicator: {
    alignItems: 'center',

    justifyContent: 'center',
    flex: 1,
  },
  background: {
    backgroundColor: '#fbeee4',
  },
});
