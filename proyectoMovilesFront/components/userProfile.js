import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Center, Container, Image, Heading, HStack, Button, View, Text, Divider, Flex } from 'native-base';
import colors from './colors';
import axios from "axios";
import { TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function UserE({ navigation }) {

    const route = useRoute();


    const [listUser, setListUser] = useState({});

    const [nam, setNam] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPass] = useState("");

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

    const HandleChangeText = (value) => {
        setNam(value);
    }

    const HandleChangeEmail = (value) => {
        setEmail(value);
    }

    const HandleChangePhone = (value) => {
        setPhone(value);
    }

    const HandleChangePassword = (value) => {
        setPass(value);
    }

    const { userID } = AsyncStorage.getItem('userID')
        .then(value => {
            // Acceder al valor almacenado y convertirlo a un número, si es necesario
            const numero = parseFloat(value);
            if (!isNaN(numero)) {
                const cadena = numero.toString();
                console.log(cadena);
            } else {
                console.log('El valor obtenido no es un número válido.');
            }
        });

    const getUser = async () => {
        const res = await axios.get(`http://192.168.1.72:8000/api/show_usuario/${userID}`);
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

    //validacion
    const validate = () => {

        setErrors({})
        let isValid = true

        if (nam == '' || email == '' || phone == '' || password == '') {
            setErrors({ ...errors, aviso: 'Todos los campos son requeridos' })
            isValid = false
        }
        return isValid
    }

    function submit() { (validate()) ? send_request() : console.log("Error", errors) };

    const send_request = async () => {
        console.log(nam);
        console.log(password);
        console.log(phone);
        console.log(email);
        console.log(1);
        const formDatum = new FormData();
        formDatum.append("id", 1);
        formDatum.append("nickname", nam);
        formDatum.append("password", password);
        formDatum.append("phone", phone);
        formDatum.append("email", email);

        const res1 = await axios.post('http://192.168.1.72:8000/api/update_usuario', formDatum,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            });
        console.log(res1.data);

        navigation.navigate('DashboardUsers')

    }

    return <Center paddingTop={20}>
        <Container style={styles.contain}>
            <HStack space={2} mt={2}>
                <Button style={styles.container} onPress={() => navigation.navigate('DashboardUsers')}>
                    <Image
                        source={require('./left-arrow.png')} style={styles.imagen} alt='hola' // Ruta relativa de la imagen dentro de la carpeta de assets
                    />
                </Button>
                <Heading>
                    Editar
                    <Text color={colors.warning}> Usuario           </Text>
                </Heading>
            </HStack>

            <Text>----------------------</Text>

            <ScrollView>
                <View>

                    <Image alt='usuario' source={{ uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" }} style={[styles.avatar, { alignSelf: "center" }]} />

                    <View>
                        <View>

                            <View style={styles.listItem}>
                                <TextInput
                                    value={nam}
                                    onChangeText={HandleChangeText}
                                    placeholder={listUser.firstName}
                                    style={styles.name}
                                />
                            </View>
                            <Text style={styles.email}>Rellena con el nombre</Text>

                            <View style={styles.listItem}>
                                <TextInput
                                    value={email}
                                    onChangeText={HandleChangeEmail}
                                    placeholder={listUser.email}
                                    style={styles.name}
                                />
                            </View>
                            <Text style={styles.email}>Escribe el nuevo correo electrónico</Text>

                            <View style={styles.listItem}>
                                <TextInput
                                    value={phone}
                                    onChangeText={HandleChangePhone}
                                    placeholder={listUser.phone}
                                    style={styles.name}
                                />
                            </View>
                            <Text style={styles.email}>Escribe tu teléfono de contácto</Text>

                            <View style={styles.listItem}>
                                <TextInput
                                    value={password}
                                    placeholder="Ingresa tu nueva contraseña"
                                    onChangeText={HandleChangePassword}
                                    style={styles.name}
                                />
                            </View>
                            <Text style={styles.email}>Escribe tu nueva contraseña</Text>


                            <Button style={styles.button} onPress={submit}>
                                Actualizar
                            </Button>

                        </View>
                    </View>

                </View>
            </ScrollView>

        </Container>
    </Center>;
}