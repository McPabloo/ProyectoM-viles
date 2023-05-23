import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Center, Container, Image, Heading, HStack, Button, View, Text, Divider, Flex } from 'native-base';
import colors from './colors';
import axios from "axios";
import { TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';

export default function CategoryC({ navigation }) {

    //estados
    const [formData, setData] = React.useState({ categoryName: '', description: '' })
    const [errors, setErrors] = React.useState({})
    const [valid, setValid] = React.useState(false);

    //validacion
    const validate = () => {

        setErrors({})
        let isValid = true

        if (formData.categoryName == '' || formData.description == '') {
            setErrors({ ...errors, notice: 'All fields required' })
            isValid = false
        }
        return isValid
    }

    const send_request = async (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        console.log('ok', formData);
        const formDatum = new FormData();
        formDatum.append("categoryName", formData.categoryName);
        formDatum.append("description", formData.description);
        const res = await axios.post("http://192.168.1.72:8000/api/create_category", formDatum,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            }
        ).then(response => {
            if (response.data && response.data.length > 0) {
                console.log(response.data[0].email);
                setValid(true);
                console.log(valid);
                navigation.navigate('DashboardCategory')
                pass();
            } else {
                console.log('Empty response');
                // Aquí puedes manejar el caso de una respuesta vacía según tus necesidades
            }
        }).catch(error => {
            console.log(error);
        });
    }


    function submit() { (validate()) ? send_request() : console.log("Error", errors) };

    function pass() {
        if (valid === true) {
            navigation.navigate('DashboardCategory');
        }
    }


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

    return <Center paddingTop={20}>
        <Container style={styles.contain}>
            <HStack space={2} mt={2}>
                <Button style={styles.container} onPress={() => navigation.navigate('DashboardCategory')}>
                    <Image
                        source={require('./left-arrow.png')} style={styles.imagen} alt='hola' // Ruta relativa de la imagen dentro de la carpeta de assets
                    />
                </Button>
                <Heading>
                    Crear
                    <Text color={colors.warning}> Categoría           </Text>
                </Heading>
            </HStack>

            <Text>----------------------</Text>

            <Image alt='usuario' source={{ uri: "https://images.vexels.com/media/users/3/151869/isolated/preview/767ca771755f4675d4063c03e17c8595-icono-de-lista-de-verificacion-medica.png" }} style={[styles.avatar, { alignSelf: "center" }]} />

            <ScrollView>
                <View>
                    <View>
                        <View>

                            <View style={styles.listItem}>
                                <TextInput
                                    value={formData.categoryName}
                                    onChangeText={value => setData({ ...formData, categoryName: value })}
                                    placeholder="Categoría"
                                    style={styles.name}
                                />
                            </View>
                            <Text style={styles.email}>Nombre de la categoría</Text>

                            <View style={styles.listItem}>
                                <TextInput
                                    value={formData.description}
                                    onChangeText={value => setData({ ...formData, description: value })}
                                    placeholder="Descripción"
                                    style={styles.name}
                                />
                            </View>
                            <Text style={styles.email}>Descripción de la categoría</Text>

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