import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Center, Container, Image, Heading, HStack, Button, View, Text, Divider, Flex } from 'native-base';
import colors from './colors';
import axios from "axios";
import { TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';

export default function ShipperE({navigation}) {

  const route = useRoute();
 

  const [listShipper, setListShipper] = useState({});

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    companyID: "",
    phone: "",
  });  

  useEffect(() => {
    console.log({shipperID})
    getShipper()
  }, [])

  const HandleChangeText=(value)=>{
    setName(value);
  }


  const HandleChangePhone=(value)=>{
    setPhone(value);
  }

  const { shipperID } = route.params;

  const getShipper = async () => {
    const res = await axios.get(`http://192.168.1.74:8000/api/show_cargador/${shipperID}`);
    console.log(res.data);
    setListShipper(res.data);
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
        
        if(name == '' || phone == ''){
            setErrors({...errors, aviso:'Todos los campos son requeridos'})
            isValid = false
        }
        return isValid
    }

  function submit() { (validate()) ? send_request() : console.log("Error",errors)};

  const send_request=async()=>{
        console.log(name);
        console.log(phone);
        const formDatum = new FormData();
            formDatum.append("id", shipperID);
            formDatum.append("name", name);
            formDatum.append("companyID", listShipper.companyID);
            formDatum.append("phone", phone);
            
        const res1 = await axios.post('http://192.168.1.74:8000/api/update_cargador',formDatum,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        }).catch(function(error) {
          console.log(error.response.data);
        });
        console.log(res1.data);
        
        navigation.navigate('DashboardShipper')

    } 

    return <Center paddingTop={20}>
        <Container style={styles.contain}>
        <HStack space={2} mt={2}>
          <Button style={styles.container} onPress={() => navigation.navigate('DashboardShipper')}>
            <Image
            source={require('./left-arrow.png')} style={styles.imagen} alt='hola' // Ruta relativa de la imagen dentro de la carpeta de assets
            />
          </Button> 
          <Heading>
            Editar
            <Text color={colors.warning}> Cargador           </Text>
          </Heading>
        </HStack>
          
          <Text>----------------------</Text>

          <ScrollView>
          <View>
         
          <Image alt='usuario' source={{ uri:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" }} style={[styles.avatar, { alignSelf: "center" }]} />

            <View>
              <View>
                
              <View style={styles.listItem}>
                <TextInput
                    value={name}
                    onChangeText={HandleChangeText}
                    placeholder={listShipper.name}
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Rellena con el nombre</Text>

              <View style={styles.listItem}>
                <TextInput
                    value={phone}
                    onChangeText={HandleChangePhone}
                    placeholder={listShipper.phone}
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Escribe el numero de telefono</Text>

                
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