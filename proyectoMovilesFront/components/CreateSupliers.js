import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Center, Container, Image, Heading, HStack, Button, View, Text, Divider, Flex } from 'native-base';
import colors from './colors';
import axios from "axios";
import { TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';

export default function SuplierC({navigation}) {

  //estados
  const [formData, setData] = React.useState({companyID : '', contactName : '',
  address : '', city : '' , country : '' , phone : ''})
  const [errors, setErrors] = React.useState({})
  const [valid, setValid] = React.useState(false);

  //validacion
  const validate = () => {

    setErrors({})
    let isValid = true
    
    if(formData.companyID == '' || formData.contactName == '' || formData.address == '' || formData.city == '' || formData.country == '' || formData.phone == '' ){
        setErrors({...errors, notice:'All fields required'})
        isValid = false
    }
    return isValid
}

  const send_request=async(e)=>{
      if (e && e.preventDefault()) e.preventDefault();
      console.log('ok',formData);
      const formDatum = new FormData();
          formDatum.append("companyID", formData.companyID);
          formDatum.append("contactName", formData.contactName);
          formDatum.append("address", formData.address);
          formDatum.append("city", formData.city);
          formDatum.append("country", formData.country);
          formDatum.append("phone", formData.phone);
          const res = await axios.post("http://192.168.1.72:8000/api/create_proveedor", formDatum,
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
              navigation.navigate('DashboardSuplier')
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
          navigation.navigate('DashboardSuplier');
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
          <Button style={styles.container} onPress={() => navigation.navigate('DashboardSuplier')}>
            <Image
            source={require('./left-arrow.png')} style={styles.imagen} alt='hola' // Ruta relativa de la imagen dentro de la carpeta de assets
            />
          </Button> 
          <Heading>
            Crear
            <Text color={colors.warning}> Proveedor           </Text>
          </Heading>
        </HStack>
          
          <Text>----------------------</Text>

          <Image alt='usuario' source={{ uri:"https://montevideo.gub.uy/sites/default/files/biblioteca/proveedores.png" }} style={[styles.avatar, { alignSelf: "center" }]} />

          <ScrollView>
          <View>
            <View>
              <View>
                
              <View style={styles.listItem}>
                <TextInput
                    value={formData.companyID}
                    onChangeText={value => setData({ ...formData, companyID: value })}
                    placeholder="ID de la compañía"
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>ID de la compañía a la que pertenece</Text>

              <View style={styles.listItem}>
                <TextInput
                    value={formData.contactName}
                    onChangeText={value => setData({ ...formData, contactName: value })}
                    placeholder="Nombre de contacto"
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Rellena con el nombre de contacto</Text>

              <View style={styles.listItem}>
                <TextInput
                    value={formData.address}
                    onChangeText={value => setData({ ...formData, address: value })}
                    placeholder="Domicilio"
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Escribe el domicilio</Text>

              <View style={styles.listItem}>
                <TextInput
                    value={formData.city}
                    onChangeText={value => setData({ ...formData, city: value })}
                    placeholder="Ciudad"
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Escribe la ciudad a la que pertenece</Text>

              <View style={styles.listItem}>
                <TextInput
                    value={formData.country}
                    placeholder="País"
                    onChangeText={value => setData({ ...formData, country: value })}
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Escribe el país</Text>

              <View style={styles.listItem}>
                <TextInput
                    value={formData.phone}
                    placeholder="Número de teléfono"
                    onChangeText={value => setData({ ...formData, phone: value })}
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Ingresa el número de teléfono</Text>

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