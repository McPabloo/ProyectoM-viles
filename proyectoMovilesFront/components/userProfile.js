import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Center, Container, Image, Heading, HStack, Button, View, Text, Divider, Flex } from 'native-base';
import colors from './colors';
import axios from "axios";
import { TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UserProfile({ navigation }) {

    const route = useRoute();


    const [listUser, setListUser] = useState({});

    const [nam, setNam] = useState("");
    const [lastNam, setlastNam] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [addRess, setAddress] = useState("");
    const [birthDay, setBirthday] = useState("");
    const [ID, setID] = useState("");

    const [formData, setFormData] = useState({
        username: "",
        lastname: "",
        phone: "",
        address: "",
        password: "",
        email: "",
    });

    useEffect(() => {
        //console.log({userID})
        getUser()
    }, [])

    const { userID } = AsyncStorage.getItem('userID')
        .then(value => {
            // Acceder al valor almacenado y convertirlo a un número, si es necesario
            const numero = parseFloat(value);
            if (!isNaN(numero)) {
                setID(numero.toString());
            
                console.log(ID);
            } else {
                console.log('El valor obtenido no es un número válido.');
            }
        });

    const getUser = async () => {
        console.log(ID);
        const res = await axios.get(`http://192.168.1.74:8000/api/show_usuario/${ID}`);
        console.log(res.data);
        setListUser(res.data);
    };


    const styles = StyleSheet.create({
        contain: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        button: {
            backgroundColor: '#023047',
            width: 150,
            marginVertical: 60,
            alignSelf: 'center',
        },
        buttonText: {
            fontSize: 16,
            paddingTop: 10,
            color: '#F8F9FA',
        },
        listItem: {
            marginTop: 10,
            flexDirection: 'row',
            alignItems: 'center',
            paddingVertical: 10,
            borderBottomWidth: 2,
            width: 350,
            borderBottomColor: '#ffb703',
        },
        avatar: {
            width: 150,
            height: 150,
            marginVertical: 7,
            borderRadius: 20,
            marginRight: 10,
        },
        container: {
            backgroundColor: '#0098FF',
            width: 30,
            height: 30,
            borderRadius: 20,
            marginRight: 15,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        imagen: {
            width: 30, // O el valor deseado para el ancho de la imagen
            height: 30, // O el valor deseado para la altura de la imagen
        },
        name: {
            fontWeight: 'bold',
            fontSize: 20,
            color: '#023047',
        },
        email: {
            fontSize: 16,
            color: '#666',
        },
        cl: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'space-evenly',
        },
    });

    const [errors, setErrors] = React.useState({})

    function submit() { (validate()) ? send_request() : console.log("Error", errors) };


    return <Center paddingTop={20}>
        <Container style={styles.contain}>
            <HStack space={2} mt={2}>
                <Button style={styles.container} onPress={() => navigation.navigate('HOME')}>
                    <Image
                        source={require('./left-arrow.png')} style={styles.imagen} alt='hola' // Ruta relativa de la imagen dentro de la carpeta de assets
                    />
                </Button>
                <Heading>
                    Perfil
                    <Text color={colors.warning}> de Usuario           </Text>
                </Heading>
            </HStack>

            <Text>----------------------</Text>

            <ScrollView>
                <View>

                    <Image alt='usuario' source={{ uri: "https://w7.pngwing.com/pngs/527/663/png-transparent-logo-person-user-person-icon-rectangle-photography-computer-wallpaper.png" }} style={[styles.avatar, { alignSelf: "center" }]} />

                    <View>
                        <View>

                            <View style={styles.listItem}>
                                <TextInput
                                    value={nam}
                                    placeholder={listUser.firstName}
                                    style={styles.name}
                                />
                            </View>
                            <Text style={styles.email}>Nombre de usuario</Text>
                            
                            <View style={styles.listItem}>
                                <TextInput
                                    value={lastNam}
                                    placeholder={listUser.lastName}
                                    style={styles.name}
                                />
                            </View>
                            <Text style={styles.email}>Apellidos</Text>

                            <View style={styles.listItem}>
                                <TextInput
                                    value={email}
                                    placeholder={listUser.email}
                                    style={styles.name}
                                />
                            </View>
                            <Text style={styles.email}>Correo electrónico</Text>

                            <View style={styles.listItem}>
                                <TextInput
                                    value={phone}
                                    placeholder={listUser.phone}
                                    style={styles.name}
                                />
                            </View>
                            <Text style={styles.email}>Número de teléfono</Text>

                            <View style={styles.listItem}>
                                <TextInput
                                    value={addRess}
                                    placeholder={listUser.address}
                                    style={styles.name}
                                />
                            </View>
                            <Text style={styles.email}>Domicilio</Text>

                            <View style={styles.listItem}>
                                <TextInput
                                    value={birthDay}
                                    placeholder={listUser.birthday}
                                    style={styles.birthday}
                                />
                            </View>
                            <Text style={styles.email}>Fecha de nacimiento</Text>

                            <Button style={styles.button} onPress={getUser}>
                                Actualizar
                            </Button>

                        </View>
                    </View>

                </View>
            </ScrollView>

        </Container>
    </Center>;
}