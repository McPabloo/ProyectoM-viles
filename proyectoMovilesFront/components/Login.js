import React from "react";
import { Button, FormControl, View, Input, VStack, Text, Center, CheckIcon, WarningOutlineIcon } from "native-base";
import { TouchableOpacity, StyleSheet } from 'react-native';
import { validate } from "react-native-web/dist/cjs/exports/StyleSheet/validate";
import { useState } from "react";
import axios from "axios";
import colors from './colors';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from '@react-navigation/native';


export default function Login({ navigation }) {
    AsyncStorage.clear();

    //estados
    const [formData, setData] = React.useState({ nickname: '', password: '' })
    const [errors, setErrors] = React.useState({})
    const [valid, setValid] = React.useState('0');
    const [userID, setUserID] = React.useState('');

    //validacion
    const validate = () => {
        setErrors({});
        let isValid = true;
      
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
      
        if (formData.nickname === '' || formData.password === '') {
          setErrors({ ...errors, nickname: 'Nickname and Password are required' });
          isValid = false;
        } else if (formData.nickname.length < 6) {
          setErrors({ ...errors, nickname: 'Nickname is too short (minimum 6 characters)' });
          isValid = false;
        }
      
        // Validar el formato del correo electrónico usando regex
        if (!emailRegex.test(formData.nickname)) {
          setErrors({ ...errors, nickname: 'Invalid email address' });
          isValid = false;
        }
      
        // Validar la fortaleza de la contraseña usando regex
        if (!passwordRegex.test(formData.password)) {
          setErrors({
            ...errors,
            password:
              'Password must be at least 8 characters long and contain at least one letter and one number',
          });
          isValid = false;
        }
      
        return isValid;
    };

    //AL PRIMER CLIC EL ESTADO QUEDA APUNTADO AL ESTADO ANTERIOR, POR ELLO ES NECESARIO USAR DOBLE CLIC
    //PARA RENDERIZARLO

    const send_request = async (e) => {
        if (e && e.preventDefault()) e.preventDefault();
        console.log('ok', formData);
        const formDatum = new FormData();
        formDatum.append("nickname", formData.nickname);
        formDatum.append("password", formData.password);
        const res = await axios.post("http://192.168.0.104:8000/api/login", formDatum,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            }
        ).then(response => {
            if (response.data && response.data.length > 0) {
                console.log(response.data[0].email);
                setValid('1');
                setUserID(response.data[0].id);
                AsyncStorage.setItem('userID', userID);
                AsyncStorage.setItem('userID', response.data[0].id.toString()) // Almacenar el ID como una cadena de texto
                    .then(() => {
                        AsyncStorage.getItem('userID')
                            .then(value => {
                                // Acceder al valor almacenado y convertirlo a un número, si es necesario
                                const numero = parseFloat(value);
                                if (!isNaN(numero)) {
                                    const cadena = numero.toString();
                                    console.log(cadena);
                                } else {
                                    console.log('El valor obtenido no es un número válido.');
                                }
                            })
                            .catch(function(error) {
                                console.log(error.response.data);
                            });
                    })
                    .catch(function(error) {
                        console.log(error.response.data);
                    });
                console.log('si llega');
                pass();
            } else {
                console.log('Empty response');
                // Aquí puedes manejar el caso de una respuesta vacía según tus necesidades
            }
        }).catch(error => {
            console.log(error.response.data);
        });

    }


    function submit() { (validate()) ? send_request() : console.log("Error", errors) };

    function pass() {
        if (valid === '1') {
            navigation.navigate('HOME SCREEN');
        }else{
            console.log('valid: ', valid);
        }
    }

    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
        },
        button: {
            borderBottomWidth: 1,
            borderBottomColor: 'white',
            paddingVertical: 5,
        },
        buttonText: {
            fontSize: 16,
            paddingTop: 10,
            color: '#F8F9FA',
        },
    });

    return (

        <Center flex={1} style={{ backgroundColor: colors.dark }}>

            <Text bold color="white" fontSize="60" mb="4">
                B A G G I O
            </Text>

            <VStack>

                <FormControl isRequired isInvalid={'nickname' in errors}>
                    <FormControl.Label>Nickname</FormControl.Label>
                    <Input p={2} color="white" fontSize={18} name="nickname" placeholder="Enter your nickname"
                        onChangeText={value => setData({ ...formData, nickname: value })} />

                    {'nickname' in errors ? <Text>{errors.nickname}</Text>
                        : <FormControl.HelperText>
                            You must enter a least 6 characters
                        </FormControl.HelperText>
                    }

                </FormControl>



                <FormControl isRequired isInvalid={'password' in errors}>
                    <FormControl.Label>Password</FormControl.Label>
                    <Input p={2} color="white" fontSize={18} name="password" placeholder="Enter password"
                        onChangeText={value => setData({ ...formData, password: value })} />

                    {'password' in errors ? <Text>{errors.password}</Text>
                        : <FormControl.HelperText>
                            Keep your password safe
                        </FormControl.HelperText>
                    }

                </FormControl>

                <Button style={{ backgroundColor: colors.primary }}
                    onPress={submit}>
                    Login
                </Button>

                <View style={styles.container}>
                    <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('REGISTER')}>
                        <Text style={styles.buttonText}>Registrarme</Text>
                    </TouchableOpacity>
                </View>


            </VStack>
        </Center>


    );



}