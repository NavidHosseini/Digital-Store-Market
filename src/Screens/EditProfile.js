import React, { useEffect, useState, useContext } from 'react'
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image,
    PermissionsAndroid
} from 'react-native'
import Context from '../../Context'
import { useRoute, useNavigation } from "@react-navigation/native"
import ImagePicker from "react-native-image-picker"
import config from '../../config'
import DocumentPicker from 'react-native-document-picker'
import Strapi from 'strapi-sdk-javascript'

const EditProfile = () => {

    const navigation = useNavigation()

    const { updateUser } = useContext(Context)

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [family, setFamily] = useState('')
    const [PhoneNumber, setPhoneNumber] = useState('')
    const [Address, setAddress] = useState('')
    const [PostalCode, setPostalCode] = useState('')
    const [imgeUri, setImageUri] = useState(null)

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

                const option = {
                    // noData: true,
                    title: 'Select Avatar',
                    customButtons: [{ name: 'Online Store', title: 'Choose a photo' }],
                    storageOptions: {
                        skipBackup: true,
                        path: 'images',
                    },
                }

                ImagePicker.showImagePicker(option, response => {
                    if (response) {

                        setImageUri(response.uri)

                        let data = new FormData()
                        data.append('files', { uri: response.uri, type: response.type, name: response.fileName })
                        data.append('refId', 24)
                        data.append('ref', 'user')
                        data.append('field', 'avatar')
                        data.append('source', 'users-permissions')
                        console.log('data: ', data._parts)

                        fetch(`${config.BASE_URL}/upload/`, {
                            method: "POST",
                            headers: {
                                'Content-Type': 'multipart/form-data',
                            },
                            body: data,
                        })
                            .then(response => {
                                console.log(response.json())
                                console.log(response.status)
                            })
                            .catch(err => console.log(err))

                    }
                })
                // try {
                //     const res = await DocumentPicker.pick({
                //         type: [DocumentPicker.types.images],
                //     });

                //     setImageUri(res.uri)

                //     let data = new FormData()

                //     data.append("files", {uri: res.uri, type: })
                //     // data.append('refId', 24)
                //     // data.append('ref', 'user')
                //     // data.append('fieldId', 'avatar')

                //     fetch(`${config.BASE_URL}/upload/`, {
                //         method: "POST",
                //         body: data,
                //         headers: {
                //             'Content-Type': 'multipart/form-data',
                //         },
                //     })
                //         .then(response => {
                //             console.log(response.json())
                //             console.log(response.status)
                //         })
                //         .catch(err => console.log(err))
                // } catch (err) {
                //     if (DocumentPicker.isCancel(err)) {
                //         // User cancelled the picker, exit any dialogs or menus and move on
                //     } else {
                //         throw err;
                //     }
                // }

            } else {
                console.log("storage permission denied");
            }
        } catch (err) {
            console.warn(err);
        }

    };

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

                <Image source={{ uri: imgeUri }} style={{ width: 100, height: 100 }} />

                <TouchableOpacity style={styles.Button2}

                    onPress={async () => await requestCameraPermission()}
                >
                    <Text style={styles.TextButton}> انتخاب عکس</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.Button}
                    onPress={async () => {
                        await updateUser({ email, name, family, id, PhoneNumber, Address, PostalCode })
                            , navigation.reset({
                                index: 0,
                                routes: [{ name: 'Profile' }],
                            });
                    }} >
                    <Text style={styles.TextButton}> ویرایش</Text>
                </TouchableOpacity>
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
        marginBottom: 20
    },
    TextButton: {
        color: '#fff',
        fontFamily: 'Sans',
    },
    Button2: {
        padding: 15,
        borderRadius: 10,
        backgroundColor: 'blue',
        alignItems: 'center',
        marginHorizontal: 15,
        marginBottom: 20

    }
})



