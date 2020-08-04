import React, { useEffect, useState, useContext } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import Context from '../../Context';
import { useRoute } from "@react-navigation/native";
import { useNavigation } from "@react-navigation/native";


const EditProfile = () => {
    const navigation = useNavigation();
    const { updateUser } = useContext(Context);

    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [family, setFamily] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('')
    const [Address, setAddress] = useState('')
    const [PostalCode, setPostalCode] = useState('')


    useEffect(() => {
        setEmail(`${emailUser}`),
            setFamily(`${familyUser}`),
            setName(`${nameUser}`),
            setAddress(`${AddressUser}`),
            setPostalCode(`${PostalCodeUser}`),
            setPhoneNumber(`${PhoneNumberUser}`)
    }, [])


    const route = useRoute();
    const id = route.params.id
    const nameUser = route.params.name
    const familyUser = route.params.family
    const emailUser = route.params.email
    const PhoneNumberUser = route.params.PhoneNumber
    const PostalCodeUser = route.params.PostalCode
    const AddressUser = route.params.Address


    //console.log(emailUser)

    return (
        <View>
            <ScrollView>
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

                <TextInput placeholder="شماره موبایل"
                    value={PhoneNumber}
                    onChangeText={text => setPhoneNumber(text)}
                    autoCapitalize="none"
                    style={styles.TextInput} />

                <TextInput placeholder="کد پستی"
                    value={PostalCode}
                    onChangeText={text => setPostalCode(text)}
                    autoCapitalize="none"
                    style={styles.TextInput} />

                <TextInput placeholder="ادرس"
                    value={Address}
                    onChangeText={text => setAddress(text)}
                    autoCapitalize="none"
                    style={styles.TextInput} />


                <TouchableOpacity style={styles.Button}
                    onPress={async () => {
                        await updateUser({ email, name, family, id, PhoneNumber, Address, PostalCode })
                            , navigation.navigate('Profile')
                    }} >
                    <Text style={styles.TextButton}> ویرایش</Text>
                </TouchableOpacity>

            </ScrollView>

        </View>
    );

}

export default EditProfile
const styles = StyleSheet.create({
    TextInput: {
        backgroundColor: "#cccccc",
        borderRadius: 10,
        margin: 20,
        textAlign: 'right'

    },
    Button: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: 'red',
        alignItems: 'center',
        marginHorizontal: 15,
        marginBottom: 50
    },
    TextButton: {
        color: '#fff',
        fontFamily: 'Sans',
    }
})