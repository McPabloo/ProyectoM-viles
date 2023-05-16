import React from "react";
import { Button, FormControl, View, Input, VStack, Text, Center, CheckIcon, WarningOutlineIcon } from "native-base";
import { TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { validate } from "react-native-web/dist/cjs/exports/StyleSheet/validate";
import { useState } from "react";
import axios from "axios";
import colors from './colors';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Register({navigation}){

    //estados
    const [formData, setData] = React.useState({nickname : '', password : '',
    firstname : '', lastname : '' , phone : '' , address : '', birthday : '', notes : ''})
    const [errors, setErrors] = React.useState({})
    const [valid, setValid] = React.useState(false);

    //validacion
    const validate = () => {

        setErrors({})
        let isValid = true
        
        if(formData.nickname == '' || formData.password == '' ){
            setErrors({...errors, nickname:'Nickname is required', password: 'Password is required'})
            isValid = false
        }else if(formData.nickname.length < 6){
            setErrors({...errors, nickname: 'Nickname is too short'})
            isValid = false
        }
        return isValid
    }

    const send_request=async(e)=>{
        if (e && e.preventDefault()) e.preventDefault();
        console.log('ok',formData);
        const formDatum = new FormData();
            formDatum.append("nickname", formData.nickname);
            formDatum.append("password", formData.password);
            formDatum.append("firstname", formData.firstname);
            formDatum.append("lastname", formData.lastname);
            formDatum.append("address", formData.address);
            formDatum.append("phone", formData.phone);
            formDatum.append("birthday", formData.birthday);
            formDatum.append("password", formData.notes);
            const res = await axios.post("http://192.168.100.26:8000/api/create_usuario", formDatum,
            {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Accept': 'application/json'
                }
            }
        ).then(response => {
            //console.log(response.data[0].email);
            setValid(true);
            console.log(valid);
            pass();
        }).catch(error => {
            console.log(error);
        });
    } 


    function submit() { (validate()) ? send_request() : console.log("Error",errors)};

    function pass(){
        if(valid===true){
            navigation.navigate('LOGIN');
        }
    }

    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
            flexGrow: 1,
            paddingVertical: 20,
          },
        button: {
          borderBottomWidth: 1,
          borderBottomColor: 'blue',
          paddingVertical: 5,
        },
        buttonText: {
          fontSize: 16,
          textDecorationLine: 'underline',
          color: 'blue',
        },
      });

    return  (

        <Center flex={1}  style={{ backgroundColor: colors.dark }}>

        <Text bold color="white" fontSize="60" mt="10">
            Formulario de Registro
        </Text>

        <ScrollView contentContainerStyle={styles.container} width="80%">
            <VStack width="100%">
        
            <FormControl isRequired isInvalid={'nickname' in errors}>
                <FormControl.Label>Email</FormControl.Label>
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

            <FormControl isRequired isInvalid={'nickname' in errors}>
                <FormControl.Label>Phone</FormControl.Label>
                <Input p={2} color="white" fontSize={18} name="phone" placeholder="Enter your phone"
                    onChangeText={value => setData({ ...formData, phone: value })} />    
                {'nickname' in errors ? <Text>{errors.nickname}</Text>
                    : <FormControl.HelperText>
                        You must enter a least 6 characters
                    </FormControl.HelperText>
                }
            </FormControl>

            <FormControl isRequired isInvalid={'nickname' in errors}>
                <FormControl.Label>Firstname</FormControl.Label>
                <Input p={2} color="white" fontSize={18} name="firstname" placeholder="Enter your firstname"
                    onChangeText={value => setData({ ...formData, firstname: value })} />    
                {'nickname' in errors ? <Text>{errors.nickname}</Text>
                    : <FormControl.HelperText>
                        You must enter a least 6 characters
                    </FormControl.HelperText>
                }
            </FormControl>

            <FormControl isRequired isInvalid={'nickname' in errors}>
                <FormControl.Label>Lastname</FormControl.Label>
                <Input p={2} color="white" fontSize={18} name="lastname" placeholder="Enter your lastname"
                    onChangeText={value => setData({ ...formData, lastname: value })} />    
                {'nickname' in errors ? <Text>{errors.nickname}</Text>
                    : <FormControl.HelperText>
                        You must enter a least 6 characters
                    </FormControl.HelperText>
                }
            </FormControl>

            <FormControl isRequired isInvalid={'nickname' in errors}>
                <FormControl.Label>Birthday</FormControl.Label>
                <Input p={2} color="white" fontSize={18} name="birthday" placeholder="Enter your birthday"
                    onChangeText={value => setData({ ...formData, birthday: value })} />    
                {'nickname' in errors ? <Text>{errors.nickname}</Text>
                    : <FormControl.HelperText>
                        You must enter a least 6 characters
                    </FormControl.HelperText>
                }
            </FormControl>

            <FormControl isRequired isInvalid={'nickname' in errors}>
                <FormControl.Label>Address</FormControl.Label>
                <Input p={2} color="white" fontSize={18} name="address" placeholder="Enter your address"
                    onChangeText={value => setData({ ...formData, address: value })} />    
                {'nickname' in errors ? <Text>{errors.nickname}</Text>
                    : <FormControl.HelperText>
                        You must enter a least 6 characters
                    </FormControl.HelperText>
                }
            </FormControl>

            <FormControl isRequired isInvalid={'nickname' in errors}>
                <FormControl.Label>Notes</FormControl.Label>
                <Input p={2} color="white" fontSize={18} name="notas" placeholder="Personal notes"
                    onChangeText={value => setData({ ...formData, notas: value })} />    
                {'nickname' in errors ? <Text>{errors.nickname}</Text>
                    : <FormControl.HelperText>
                        You must enter a least 6 characters
                    </FormControl.HelperText>
                }
            </FormControl>
        
            <Button style={{ backgroundColor: colors.primary }}
                onPress={submit}>
                    Registrarme
            </Button>

            <View style={styles.container}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('LOGIN')}>
                    <Text style={styles.buttonText}>Volver</Text>
                </TouchableOpacity>
            </View>
            
        </VStack>
    </ScrollView>

    </Center>
    
        
    );

    
    
}