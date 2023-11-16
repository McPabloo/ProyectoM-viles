import React, { useEffect, useState, useLayoutEffect } from 'react';
import { Center, Container, Image, Heading, HStack, Button, View, Text, Divider, Flex } from 'native-base';
import colors from './colors';
import axios from "axios";
import { TouchableOpacity, StyleSheet, TextInput, ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { useRoute } from '@react-navigation/native';

export default function UserC({ navigation }) {
  const [formData, setData] = React.useState({
    nickname: '',
    password: '',
    firstname: '',
    lastname: '',
    phone: '',
    address: '',
    birthday: '',
    notes: '',
  });
  const [errors, setErrors] = React.useState({});
  const [valid, setValid] = React.useState(false);

  const validate = () => {
    setErrors({});
    let isValid = true;

    if (
      formData.nickname === '' ||
      formData.password === '' ||
      formData.firstname === '' ||
      formData.lastname === '' ||
      formData.address === '' ||
      formData.birthday === '' ||
      formData.phone === ''
    ) {
      setErrors({ ...errors, notice: 'All fields required' });
      isValid = false;
    } else if (formData.nickname.length < 10) {
      setErrors({ ...errors, nickname: 'Email is too short' });
      isValid = false;
    }

    // Validación regex para el correo electrónico
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.nickname)) {
      setErrors({ ...errors, nickname: 'Invalid email format' });
      isValid = false;
    }

    // Validación regex para el teléfono (asumimos un formato específico, ajusta según necesites)
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(formData.phone)) {
      setErrors({ ...errors, phone: 'Invalid phone number' });
      isValid = false;
    }

    // Validación regex para la fecha de nacimiento (yy-mm-dd)
    const birthdayRegex = /^\d{2}-\d{2}-\d{2}$/;
    if (!birthdayRegex.test(formData.birthday)) {
      setErrors({ ...errors, birthday: 'Invalid date format (yy-mm-dd)' });
      isValid = false;
    }

    return isValid;
  };

  const send_request=async(e)=>{
      if (e && e.preventDefault()) e.preventDefault();
      console.log('ok',formData);
      const formDatum = new FormData();
          formDatum.append("nickname", formData.nickname);
          formDatum.append("password", formData.password);
          formDatum.append("firstName", formData.firstname);
          formDatum.append("lastName", formData.lastname);
          formDatum.append("address", formData.address);
          formDatum.append("phone", formData.phone);
          formDatum.append("birthday", formData.birthday);
          formDatum.append("notes", formData.notes);
          const res = await axios.post("http://192.168.1.70:8000/api/create_usuario", formDatum,
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
              navigation.navigate('dashboardUsers')
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
          navigation.navigate('dashboardUser');
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
          <Button style={styles.container} onPress={() => navigation.navigate('DashboardUsers')}>
            <Image
            source={require('./left-arrow.png')} style={styles.imagen} alt='hola' // Ruta relativa de la imagen dentro de la carpeta de assets
            />
          </Button> 
          <Heading>
            Nuevo
            <Text color={colors.warning}> Usuario           </Text>
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
                    value={formData.firstname}
                    onChangeText={value => setData({ ...formData, firstname: value })}
                    placeholder=""
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Rellena con el nombre</Text>

              <View style={styles.listItem}>
                <TextInput
                    value={formData.lastname}
                    onChangeText={value => setData({ ...formData, lastname: value })}
                    placeholder=""
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Rellena con tus apellidos</Text>

              <View style={styles.listItem}>
                <TextInput
                    value={formData.nickname}
                    onChangeText={value => setData({ ...formData, nickname: value })}
                    placeholder=""
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Escribe tu correo electrónico</Text>

              <View style={styles.listItem}>
                <TextInput
                    value={formData.phone}
                    onChangeText={value => setData({ ...formData, phone: value })}
                    placeholder=""
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Escribe tu teléfono de contácto</Text>

              <View style={styles.listItem}>
                <TextInput
                    value={formData.email}
                    placeholder=""
                    onChangeText={value => setData({ ...formData, password: value })}
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Escribe tu contraseña</Text>

              <View style={styles.listItem}>
                <TextInput
                    value={formData.address}
                    placeholder=""
                    onChangeText={value => setData({ ...formData, address: value })}
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Escribe tu dirección</Text>

              <View style={styles.listItem}>
                <TextInput
                    value={formData.birthday}
                    placeholder=""
                    onChangeText={value => setData({ ...formData, birthday: value })}
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>yy-mm-dd</Text>

              <View style={styles.listItem}>
                <TextInput
                    value={formData.notes}
                    placeholder=""
                    onChangeText={value => setData({ ...formData, notes: value })}
                    style={ styles.name }
                />
              </View>
              <Text style={styles.email}>Notas adicionales acerca de este usuario</Text>

                
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