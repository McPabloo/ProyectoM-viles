import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Center, Container, Image, Heading, HStack, Button, View, Text, Divider, Flex } from 'native-base';
import colors from './colors';
import axios from "axios";
import { TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';

export default function SuplierE({ navigation }) {

    const route = useRoute();


    const [listSuplier, setListSuplier] = useState({});

    const [namContN, setSuplierCtName] = useState("");
    const [addDress, setAddress] = useState("");
    const [sCity, setCity] = useState("");
    const [sCountry, setCountry] = useState("");
    const [phNumber, setPhone] = useState("");

    const [formData, setFormData] = useState({
        contactName: "",
        address: "",
        city: "",
        country: "",
        phone: "",
    });

    useEffect(() => {
        console.log({ suplierID })
        getSuplier()
    }, [])

    const HandleChangeContactName = (value) => {
        setSuplierCtName(value);
    }

    const HandleChangeAddress = (value) => {
        setAddress(value);
    }

    const HandleChangeCity = (value) => {
        setCity(value);
    }

    const HandleChangeCountry = (value) => {
        setCountry(value);
    }

    const HandleChangePhone = (value) => {
        setPhone(value);
    }

    const { suplierID } = route.params;

    const getSuplier = async () => {
        const res = await axios.get(`http://192.168.1.72:8000/api/show_proveedor/${suplierID}`);
        console.log(res.data);
        setListSuplier(res.data);
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

        if (namContN == '' || addDress == '' || sCity == '' || sCountry == '' || phNumber == '') {
            setErrors({ ...errors, aviso: 'Todos los campos son requeridos' })
            isValid = false
        }
        return isValid
    }

    function submit() { (validate()) ? send_request() : console.log("Error", errors) };

    const send_request = async () => {
        console.log(namContN);
        console.log(addDress);
        console.log(sCity);
        console.log(sCountry);
        console.log(phNumber);
        console.log(suplierID);
        const formDatum = new FormData();
        formDatum.append("id", suplierID);
        formDatum.append("contactName", namContN);
        formDatum.append("address", addDress);
        formDatum.append("city", sCity);
        formDatum.append("country", sCountry);
        formDatum.append("phone", phNumber);

        const res1 = await axios.post('http://192.168.1.72:8000/api/update_proveedor', formDatum,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            }).catch(function (error) {
                console.log(error.response.data);
            });
        console.log(res1.data);

        navigation.navigate('DashboardSuplier')

    }

    return <Center paddingTop={20}>
        <Container style={styles.contain}>
            <HStack space={2} mt={2}>
                <Button style={styles.container} onPress={() => navigation.navigate('DashboardSuplier')}>
                    <Image
                        source={require('./left-arrow.png')} style={styles.imagen} alt='hola' // Ruta relativa de la imagen dentro de la carpeta de assets
                    />
                </Button>
                <Heading>
                    Editar
                    <Text color={colors.warning}> Proveedor           </Text>
                </Heading>
            </HStack>

            <Text>----------------------</Text>

            <ScrollView>
                <View>

                    <Image alt='usuario' source={{ uri: "https://montevideo.gub.uy/sites/default/files/biblioteca/proveedores.png" }} style={[styles.avatar, { alignSelf: "center" }]} />

                    <View>
                        <View>
                            <View style={styles.listItem}>
                                <TextInput
                                    value={namContN}
                                    onChangeText={HandleChangeContactName}
                                    placeholder={listSuplier.contactName}
                                    style={styles.name}
                                />
                            </View>
                            <Text style={styles.email}>Rellena con el nuevo nombre de contacto</Text>

                            <View style={styles.listItem}>
                                <TextInput
                                    value={addDress}
                                    onChangeText={HandleChangeAddress}
                                    placeholder={listSuplier.address}
                                    style={styles.name}
                                />
                            </View>
                            <Text style={styles.email}>Escribe el nuevo domicilio</Text>

                            <View style={styles.listItem}>
                                <TextInput
                                    value={sCity}
                                    onChangeText={HandleChangeCity}
                                    placeholder={listSuplier.city}
                                    style={styles.name}
                                />
                            </View>
                            <Text style={styles.email}>Escribe el nuevo nombre de la ciudad</Text>

                            <View style={styles.listItem}>
                                <TextInput
                                    value={sCountry}
                                    onChangeText={HandleChangeCountry}
                                    placeholder={listSuplier.country}
                                    style={styles.name}
                                />
                            </View>
                            <Text style={styles.email}>Escribe el nuevo nombre del país</Text>

                            <View style={styles.listItem}>
                                <TextInput
                                    value={phNumber}
                                    onChangeText={HandleChangePhone}
                                    placeholder={listSuplier.phone}
                                    style={styles.name}
                                />
                            </View>
                            <Text style={styles.email}>Escribe el nuevo número de teléfono</Text>

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