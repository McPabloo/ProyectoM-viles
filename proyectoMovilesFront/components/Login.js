import React from "react";
import { Button, FormControl, Input, VStack, Text, Select, CheckIcon, WarningOutlineIcon } from "native-base";
import { validate } from "react-native-web/dist/cjs/exports/StyleSheet/validate";
import { useState } from "react";
import axios from "axios";

export default function Login(){

    //estados
    const [formData, setData] = React.useState({nickname : '', password : ''})
    const [errors, setErrors] = React.useState({})

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

    const send_request=async()=>{
        console.log('ok',formData);
        try {
            const response = await axios.post('http://127.0.0.1:8000/api/login', formData);
            const data = response.data;
            console.log('ya logeaste',data);
            // Aquí deberías hacer algo con la respuesta del servidor, como redirigir al usuario a una nueva página si el inicio de sesión es exitoso.
        } catch (error) {
            console.log(error);
        }
    } 

    function submit() { (validate()) ? send_request() : console.log("Error",errors) }

    return  <VStack>

    <FormControl isRequired isInvalid={'nickname' in errors}>
        <FormControl.Label>Nickname</FormControl.Label>
        <Input p={1} color="black" name="nickname" placeholder="Enter your nickname"
            onChangeText={value => setData({ ...formData, nickname: value })} />    

        {'nickname' in errors ? <Text>{errors.nickname}</Text>
            : <FormControl.HelperText>
                You must enter a least 6 characters
              </FormControl.HelperText>
        }

    </FormControl>

    <FormControl isRequired isInvalid={'password' in errors}>
        <FormControl.Label>Password</FormControl.Label>
        <Input p={1} color="black" name="password" placeholder="Enter your password"
            onChangeText={value => setData({ ...formData, password: value })} />    

        {'password' in errors ? <Text>{errors.password}</Text>
            : <FormControl.HelperText>
                Keep your password safe
              </FormControl.HelperText>
        }

    </FormControl>

    <Button colorScheme="primary"
        onPress={submit}>
        Login
    </Button>

    
</VStack>
    
}