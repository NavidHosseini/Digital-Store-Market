import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import Context from '../../Context';
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";


const EditProfile = () => {
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [family, setFamily] = useState('');
    const route = useRoute();
    const navigation = useNavigation();

    const id = route.params.id
    const { updateUser } = useContext(Context);

    return (
        <View>
            <TextInput placeholder="نام"
                value={name}
                onChangeText={text => setName(text)}
                autoCapitalize="none"
                style={styles.TextInput} />

            <TextInput placeholder="فامیل"
                value={family}
                onChangeText={text => setFamily(text)}
                autoCapitalize="none"
                style={styles.TextInput} />

            <TextInput placeholder="ایمیل"
                value={email}
                onChangeText={text => setEmail(text)}
                autoCapitalize="none"
                style={styles.TextInput} />


            <TouchableOpacity style={styles.Button}
                onPress={() => {
                    updateUser({ email, name, family, id })
                        , navigation.navigate('Cart')
                }} >
                <Text style={styles.TextButton}> ویرایش</Text>
            </TouchableOpacity>

        </View>
    );

}

export default EditProfile
const styles = StyleSheet.create({
    TextInput: {
        backgroundColor: "#cccccc",
        borderRadius: 10,
        margin: 20,
    },
    Button: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        marginHorizontal: 15
    },
    TextButton: {
        color: '#fff',
        fontFamily: 'Sans'
    }
})