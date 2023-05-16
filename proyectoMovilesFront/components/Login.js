import React from "react";
import { Button, FormControl, View, Input, VStack, Text, Center, CheckIcon, WarningOutlineIcon } from "native-base";
import { TouchableOpacity, StyleSheet } from 'react-native';
import { validate } from "react-native-web/dist/cjs/exports/StyleSheet/validate";
import { useState } from "react";
import axios from "axios";
import colors from './colors';

export default function Login({navigation}){

    //estados
    const [formData, setData] = React.useState({nickname : '', password : ''})
    const [errors, setErrors] = React.useState({})
    const [valid, setValid] = React.useState(false);

    //validacion
    const validate = () => {

        setErrors({})
        let isValid = true
        
        if(formData.nickname == '' || formData.password == ''){
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
            const res = await axios.post("http://192.168.100.26:8000/api/login", formDatum,
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
                pass();
              } else {
                console.log('Empty response');
                // Aquí puedes manejar el caso de una respuesta vacía según tus necesidades
              }
        }).catch(error => {
            console.log(error);
        });
    } 


    function submit() { (validate()) ? send_request() : console.log("Error",errors)};

    function pass(){
        if(valid===true){
            navigation.navigate('HOME SCREEN');
        }
    }

    const styles = StyleSheet.create({
        container: {
            justifyContent: 'center',
            alignItems: 'center',
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

        <Text bold color="white" fontSize="60" mb="4">
            Inventario
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
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Register')}>
                <Text style={styles.buttonText}>Registrarme</Text>
            </TouchableOpacity>
        </View>
        
        
    </VStack>
    </Center>
    
        
    );

    
    
}