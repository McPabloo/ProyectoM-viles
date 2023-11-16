import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Center, Container, Image, Heading, HStack, Button, View, Text, Divider, Flex } from 'native-base';
import colors from './colors';
import axios from "axios";
import { TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';

export default function ClientC({navigation}) {

  //estados
  const [formData, setData] = React.useState({firstName : '', lastName : '',
  email : '', password : '' , birthday : '' , address : '', companyName : '', phone : ''})
  const [errors, setErrors] = React.useState({})
  const [valid, setValid] = React.useState(false);

  //validacion
  const validate = () => {

    setErrors({})
    let isValid = true
    
    if(formData.firstName == '' || formData.lastName == '' || formData.email == '' || formData.password == '' || formData.birthday == '' || formData.address == '' || formData.companyName == '' || formData.phone == '' ){
        setErrors({...errors, notice:'All fields required'})
        isValid = false
    }else if(formData.firstName.length < 3){
        setErrors({...errors, firstName: 'Nickname is too short'})
        isValid = false
    }
    return isValid
}

  const send_request=async(e)=>{
      if (e && e.preventDefault()) e.preventDefault();
      console.log('ok',formData);
      const formDatum = new FormData();
          formDatum.append("firstName", formData.firstName);
          formDatum.append("lastName", formData.lastName);
          formDatum.append("email", formData.email);
          formDatum.append("password", formData.password);
          formDatum.append("birthday", formData.birthday);
          formDatum.append("address", formData.address);
          formDatum.append("companyName", formData.companyName);
          formDatum.append("phone", formData.phone);
          const res = await axios.post("http://192.168.1.70:8000/api/create_cliente", formDatum,
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
              navigation.navigate('DashboardClient')
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
          navigation.navigate('DashboardClient');
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
          <Button style={styles.container} onPress={() => navigation.navigate('DashboardClient')}>
            <Image
            source={require('./left-arrow.png')} style={styles.imagen} alt='hola' // Ruta relativa de la imagen dentro de la carpeta de assets
            />
          </Button> 
          <Heading>
            Crear
            <Text color={colors.warning}> Cliente           </Text>
          </Heading>
        </HStack>
          
          <Text>----------------------</Text>

          <Image alt='usuario' source={{ uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfCgS4Egf0ixJ1jVGqC3GMd7a4vq4r5uZzMQ&usqp=CAU" }} style={[styles.avatar, { alignSelf: "center" }]} />

          <ScrollView>
          <View>
            <View>
              <View>
                
              <View style={styles.listItem}>
                <TextInput
                    value={formData.firstName}
                    onChangeText={value => setData({ ...formData, firstName: value })}
                    placeholder="Nombre"
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Rellena con el nombre</Text>

              <View style={styles.listItem}>
                <TextInput
                    value={formData.lastName}
                    onChangeText={value => setData({ ...formData, lastName: value })}
                    placeholder="Apellidos"
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Rellena con tus apellidos</Text>

              <View style={styles.listItem}>
                <TextInput
                    value={formData.email}
                    onChangeText={value => setData({ ...formData, email: value })}
                    placeholder="Correo electrónico"
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Escribe tu correo electrónico</Text>

              <View style={styles.listItem}>
                <TextInput
                    value={formData.password}
                    onChangeText={value => setData({ ...formData, password: value })}
                    placeholder="Contraseña"
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Ingresa tu contraseña</Text>

              <View style={styles.listItem}>
                <TextInput
                    value={formData.birthday}
                    placeholder="Fecha de nacimiento"
                    onChangeText={value => setData({ ...formData, birthday: value })}
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>yy-mm-dd</Text>

              <View style={styles.listItem}>
                <TextInput
                    value={formData.address}
                    placeholder="Domicilio"
                    onChangeText={value => setData({ ...formData, address: value })}
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Ingresa tu domicilio</Text>

              <View style={styles.listItem}>
                <TextInput
                    value={formData.companyName}
                    placeholder="Compañía a la que pertenece"
                    onChangeText={value => setData({ ...formData, companyName: value })}
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Nombre de la compañía</Text>

              <View style={styles.listItem}>
                <TextInput
                    value={formData.phone}
                    placeholder="Teléfono"
                    onChangeText={value => setData({ ...formData, phone: value })}
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Número de teléfono</Text>

                
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