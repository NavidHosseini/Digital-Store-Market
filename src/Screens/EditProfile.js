import React, { useEffect, useState, useContext } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Button,
    PermissionsAndroid
} from 'react-native'
import Context from '../../Context'
import { useRoute, useNavigation } from "@react-navigation/native"
import ImagePicker from "react-native-image-picker"


const EditProfile = () => {

    const navigation = useNavigation()

    const { updateUser } = useContext(Context)

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [family, setFamily] = useState('')
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


    const route = useRoute()
    const id = route.params.id
    const nameUser = route.params.name
    const familyUser = route.params.family
    const emailUser = route.params.email
    const PhoneNumberUser = route.params.PhoneNumber
    const PostalCodeUser = route.params.PostalCode
    const AddressUser = route.params.Address


    const requestCameraPermission = async () => {
        try {
            const granted = await PermissionsAndroid.request(
                PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,

            );
            if (granted === PermissionsAndroid.RESULTS.GRANTED) {
                console.log("You can use the storage");
            } else {
                console.log("storage permission denied");
            }
        } catch (err) {
            console.warn(err);
        }
        const option = {
            noData: true,
        }
        ImagePicker.launchImageLibrary(option, response => {
            console.log('response', response)
        })
    };


    const handleChoosePhoto = () => {
        const option = {}
        ImagePicker.launchImageLibrary(option, response => {
            console.log('response', response)
        })
    }


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
                            , navigation.replace('Profile')
                    }} >
                    <Text style={styles.TextButton}> ویرایش</Text>
                </TouchableOpacity>
                <Button title="انتخاب عکس"
                    onPress={async () => await requestCameraPermission()}
                />

            </ScrollView>

        </View>
    )

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