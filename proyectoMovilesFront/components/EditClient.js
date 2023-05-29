import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Center, Container, Image, Heading, HStack, Button, View, Text, Divider, Flex } from 'native-base';
import colors from './colors';
import axios from "axios";
import { TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';

export default function ClientE({ navigation }) {

    const route = useRoute();


    const [listClient, setListClient] = useState({});

    const [namC, setClientName] = useState("");
    const [lastN, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [passWd, setPassword] = useState("");
    const [bDate, setBirthday] = useState("");
    const [addDress, setAddress] = useState("");
    const [cnyName, setCompanyName] = useState("");
    const [phNumber, setPhone] = useState("");

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        birthday: "",
        address: "",
        companyName: "",
        phone: "",
    });

    useEffect(() => {
        console.log({ clientID })
        getClient()
    }, [])

    const HandleChangeCliName = (value) => {
        setClientName(value);
    }

    const HandleChangeLastName = (value) => {
        setLastName(value);
    }

    const HandleChangeEmail = (value) => {
        setEmail(value);
    }

    const HandleChangePassword = (value) => {
        setPassword(value);
    }

    const HandleChangeBirthday = (value) => {
        setBirthday(value);
    }

    const HandleChangeAddress = (value) => {
        setAddress(value);
    }

    const HandleChangeCompanyName = (value) => {
        setCompanyName(value);
    }

    const HandleChangePhone = (value) => {
        setPhone(value);
    }

    const { clientID } = route.params;

    const getClient = async () => {
        const res = await axios.get(`http://192.168.1.74:8000/api/show_cliente/${clientID}`);
        console.log(res.data);
        setListClient(res.data);
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
            width: 40,
            height: 40,
            borderRadius: 20,
            marginRight: 10,
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
        },
        imagen: {
            width: 40, // O el valor deseado para el ancho de la imagen
            height: 40, // O el valor deseado para la altura de la imagen
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

        if (namC == '' || lastN == '' || email == '' || passWd == '' || bDate == '' || addDress == '' || cnyName == '' || phNumber == '') {
            setErrors({ ...errors, aviso: 'Todos los campos son requeridos' })
            isValid = false
        }
        return isValid
    }

    function submit() { (validate()) ? send_request() : console.log("Error", errors) };

    const send_request = async () => {
        console.log(namC);
        console.log(lastN);
        console.log(email);
        console.log(passWd);
        console.log(bDate);
        console.log(addDress);
        console.log(cnyName);
        console.log(phNumber);
        console.log(clientID);
        const formDatum = new FormData();
        formDatum.append("id", clientID);
        formDatum.append("firstName", namC);
        formDatum.append("lastName", lastN);
        formDatum.append("email", email);
        formDatum.append("password", passWd);
        formDatum.append("birthday", bDate);
        formDatum.append("address", addDress);
        formDatum.append("companyName", cnyName);
        formDatum.append("phone", phNumber);

        const res1 = await axios.post('http://192.168.1.72:8000/api/update_cliente', formDatum,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            }).catch(function (error) {
                console.log(error.response.data);
            });
        console.log(res1.data);

        navigation.navigate('DashboardClient')

    }

    return <Center paddingTop={20}>
        <Container style={styles.contain}>
            <HStack space={2} mt={2}>
                <Button style={styles.container} onPress={() => navigation.navigate('DashboardClient')}>
                    <Image
                        source={require('./left-arrow.png')} style={styles.imagen} alt='hola' // Ruta relativa de la imagen dentro de la carpeta de assets
                    />
                </Button>
                <Heading>
                    Editar
                    <Text color={colors.warning}> Cliente           </Text>
                </Heading>
            </HStack>

            <Text>----------------------</Text>

            <ScrollView>
                <View>

                    <Image alt='usuario' source={{ uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfCgS4Egf0ixJ1jVGqC3GMd7a4vq4r5uZzMQ&usqp=CAU" }} style={[styles.avatar, { alignSelf: "center" }]} />

                    <View>
                        <View>

                            <View style={styles.listItem}>
                                <TextInput
                                    value={namC}
                                    onChangeText={HandleChangeCliName}
                                    placeholder={listClient.firstName}
                                    style={styles.name}
                                />
                            </View>
                            <Text style={styles.email}>Nombre</Text>

                            <View style={styles.listItem}>
                                <TextInput
                                    value={lastN}
                                    onChangeText={HandleChangeLastName}
                                    placeholder={listClient.lastName}
                                    style={styles.name}
                                />
                            </View>
                            <Text style={styles.email}>Apellidos</Text>

                            <View style={styles.listItem}>
                                <TextInput
                                    value={phNumber}
                                    onChangeText={HandleChangePhone}
                                    placeholder={listClient.phone}
                                    style={styles.name}
                                />
                            </View>
                            <Text style={styles.email}>Número de teléfono</Text>

                            <View style={styles.listItem}>
                                <TextInput
                                    value={addDress}
                                    onChangeText={HandleChangeAddress}
                                    placeholder={listClient.address}
                                    style={styles.name}
                                />
                            </View>
                            <Text style={styles.email}>Domicilio</Text>

                            <View style={styles.listItem}>
                                <TextInput
                                    value={cnyName}
                                    onChangeText={HandleChangeCompanyName}
                                    placeholder={listClient.companyName}
                                    style={styles.name}
                                />
                            </View>
                            <Text style={styles.email}>Compañía</Text>

                            <View style={styles.listItem}>
                                <TextInput
                                    value={email}
                                    onChangeText={HandleChangeEmail}
                                    placeholder={listClient.email}
                                    style={styles.name}
                                />
                            </View>
                            <Text style={styles.email}>E-mail</Text>

                            <View style={styles.listItem}>
                                <TextInput
                                    value={passWd}
                                    onChangeText={HandleChangePassword}
                                    placeholder={listClient.password}
                                    style={styles.name}
                                />
                            </View>
                            <Text style={styles.email}>Contraseña</Text>

                            <View style={styles.listItem}>
                                <TextInput
                                    value={bDate}
                                    onChangeText={HandleChangeBirthday}
                                    placeholder={listClient.birthday}
                                    style={styles.name}
                                />
                            </View>
                            <Text style={styles.email}>Fecha de nacimiento (yy-mm-dd)</Text>

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