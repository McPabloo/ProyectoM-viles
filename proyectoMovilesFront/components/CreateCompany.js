import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Center, Container, Image, Heading, HStack, Button, View, Text, Divider, Flex, FormControl } from 'native-base';
import colors from './colors';
import axios from "axios";
import { TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';

export default function CompanyC({navigation}) {

  //estados
  const [formData, setData] = React.useState({companyName : '', location : ''})
  const [errors, setErrors] = React.useState({})
  const [valid, setValid] = React.useState(false);

  //validacion
  const validate = () => {

    setErrors({})
    let isValid = true
    
    if(formData.companyName == '' || formData.location == ''){
        setErrors({...errors, notice:'All fields required'})
        isValid = false
    }
    return isValid
}

  const send_request=async(e)=>{
      if (e && e.preventDefault()) e.preventDefault();
      console.log('ok',formData);
      const formDatum = new FormData();
          formDatum.append("companyName", formData.companyName);
          formDatum.append("location", formData.location);
          const res = await axios.post("http://192.168.1.70:8000/api/create_company", formDatum,
          {
              headers: {
                  'Content-Type': 'multipart/form-data',
                  'Accept': 'application/json'
              }
          }
      ).then(response => {
        console.log(response.data);
          if (response.data && response.data.length > 0) {
              console.log(response.data[0].companyName);
              setValid(true);
              console.log(valid);
              navigation.navigate('DashboardCompany')
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
          navigation.navigate('DashboardCompany');
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
      height: 40,
      marginVertical: 30,
      alignSelf: 'center',
    },
    button1: {
      backgroundColor: '#023047',
      width: 60,
      height: 40,
      marginVertical: 10,
    },
    buttonText: {
      fontSize: 16,
      paddingTop: 10,
      color: '#F8F9FA',
    },
    listItem: {
      marginTop: 10,
      flexDirection: 'row',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomWidth: 2,
      width: 300,
      borderBottomColor: '#ffb703',
    },
    sep: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomWidth: 2,
      width: 350,
      borderBottomColor: '#023047',
    },
    avatar: {
      width: 80,
      height: 80,
      borderRadius: 40,
      marginRight: 15,
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
    imagenbtn: {
      width: 20, // O el valor deseado para el ancho de la imagen
      height: 20, // O el valor deseado para la altura de la imagen
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
    emaila: {
      fontSize: 16,
      color: colors.danger,
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
          <Button style={styles.container} onPress={() => navigation.navigate('DashboardCompany')}>
            <Image
            source={require('./left-arrow.png')} style={styles.imagen} alt='hola' // Ruta relativa de la imagen dentro de la carpeta de assets
            />
          </Button> 
          <Heading>
            Nueva
            <Text color={colors.warning}> Compañia           </Text>
          </Heading>
        </HStack>
          
          <Text>----------------------</Text>

          <Image alt='usuario' source={{ uri:"https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" }} style={[styles.avatar, { alignSelf: "center" }]} />

          <ScrollView>
          <View>
            <View>
              <View>
                
              <View style={styles.listItem}>
                <TextInput
                    value={formData.companyName}
                    onChangeText={value => setData({ ...formData, companyName: value })}
                    placeholder="write here "
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Rellena con el nombre de la empresa</Text>

              <View style={styles.listItem}>
                <TextInput
                    value={formData.location}
                    onChangeText={value => setData({ ...formData, location: value })}
                    placeholder="Write here "
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Rellena con la localización de la empresa</Text>
                
            <Button style={styles.button} onPress={submit}>
                Crear
            </Button> 
               
              </View>
            </View>
         
        </View>
          </ScrollView>

        </Container>
      </Center>;
  }