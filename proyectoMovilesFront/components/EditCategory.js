import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Center, Container, Image, Heading, HStack, Button, View, Text, Divider, Flex } from 'native-base';
import colors from './colors';
import axios from "axios";
import { TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';

export default function CategoryE({ navigation }) {

    const route = useRoute();


    const [listCategory, setListCategory] = useState({});

    const [namC, setCategoryName] = useState("");
    const [descC, setDescription] = useState("");

    const [formData, setFormData] = useState({
        categoryName: "",
        description: "",
    });

    useEffect(() => {
        console.log({ categoryID })
        getCategory()
    }, [])

    const HandleChangeCatName = (value) => {
        setCategoryName(value);
    }

    const HandleChangeDescription = (value) => {
        setDescription(value);
    }

    const { categoryID } = route.params;

    const getCategory = async () => {
        const res = await axios.get(`http://192.168.1.72:8000/api/show_category/${categoryID}`);
        console.log(res.data);
        setListCategory(res.data);
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

        if (namC == '' || descC == '') {
            setErrors({ ...errors, aviso: 'Todos los campos son requeridos' })
            isValid = false
        }
        return isValid
    }

    function submit() { (validate()) ? send_request() : console.log("Error", errors) };

    const send_request = async () => {
        console.log(namC);
        console.log(descC);
        console.log(categoryID);
        const formDatum = new FormData();
        formDatum.append("id", categoryID);
        formDatum.append("categoryName", namC);
        formDatum.append("description", descC);

        const res1 = await axios.post('http://192.168.1.72:8000/api/update_category', formDatum,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            }).catch(function (error) {
                console.log(error.response.data);
            });
        console.log(res1.data);

        navigation.navigate('DashboardCategory')

    }

    return <Center paddingTop={20}>
        <Container style={styles.contain}>
            <HStack space={2} mt={2}>
                <Button style={styles.container} onPress={() => navigation.navigate('DashboardCategory')}>
                    <Image
                        source={require('./left-arrow.png')} style={styles.imagen} alt='hola' // Ruta relativa de la imagen dentro de la carpeta de assets
                    />
                </Button>
                <Heading>
                    Editar
                    <Text color={colors.warning}> Categoría           </Text>
                </Heading>
            </HStack>

            <Text>----------------------</Text>

            <ScrollView>
                <View>

                    <Image alt='usuario' source={{ uri: "https://images.vexels.com/media/users/3/151869/isolated/preview/767ca771755f4675d4063c03e17c8595-icono-de-lista-de-verificacion-medica.png" }} style={[styles.avatar, { alignSelf: "center" }]} />

                    <View>
                        <View>

                            <View style={styles.listItem}>
                                <TextInput
                                    value={namC}
                                    onChangeText={HandleChangeCatName}
                                    placeholder={listCategory.categoryName}
                                    style={styles.name}
                                />
                            </View>
                            <Text style={styles.email}>Nueva categoría</Text>

                            <View style={styles.listItem}>
                                <TextInput
                                    value={descC}
                                    onChangeText={HandleChangeDescription}
                                    placeholder={listCategory.description}
                                    style={styles.name}
                                />
                            </View>
                            <Text style={styles.email}>Escribe la nueva descripción</Text>

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