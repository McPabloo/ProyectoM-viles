import React, { useEffect, useState } from 'react';
import { Center, Container, Image, Heading, HStack, Button, View, Text, Divider, Flex } from 'native-base';
import colors from './colors';
import axios from "axios";
import { TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

export default function Shipper({navigation}) {

  const [listShipper, setListShipper] = useState([]);
  const [eliminate, setEliminate] = useState([]);

  const [idUs, setIdUs] = useState([]);

  useEffect(() => {
    getShipper()
  }, [])

  const getShipper = async () => {
    const res = await axios.get("http://192.168.1.70:8000/api/cargador_index")
    console.log(res.data);
    setListShipper(res.data);

  };

 

  const eliminar=async(e)=>{
    console.log('id a eliminar: ',eliminate);
    if (e && e.preventDefault()) e.preventDefault();
    const formDatum = new FormData();
        formDatum.append("id", eliminate);
        const res = await axios.post("http://192.168.1.70:8000/api/delete_cargador", formDatum,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        }
    ).then(response => {

        getShipper();
    }).catch(function(error) {
      console.log(error.response.data);
    });
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
      marginVertical: 10,
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
          <Button style={styles.container} onPress={() => navigation.navigate('Crud')}>
            <Image
            source={require('./left-arrow.png')} style={styles.imagen} alt='hola' // Ruta relativa de la imagen dentro de la carpeta de assets
            />
          </Button> 
          <Heading>
            Dashboard
            <Text color={colors.warning}> Cargador</Text>
          </Heading>
        </HStack>
          
          <View style={styles.sep}></View>

          <HStack space={2} mt={2}>
            <View >
              <Button style={styles.button} onPress={() => navigation.navigate('CreateShipper')}>
                Crear Cargador
              </Button>
            </View>
            <Button style={styles.button1} onPress={() => getShipper()}>
              <Image
              source={require('./rotate-right.png')} style={styles.imagenbtn} alt='hola' // Ruta relativa de la imagen dentro de la carpeta de assets
              />
            </Button>
          </HStack>
          
          <ScrollView>
          <View>
          {listShipper.map((shipper) => (
            <View key={shipper.id} style={styles.listItem}>
              <Image alt='company' source={{ uri:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/XC2V1522_FACHADA_OXXO_CERCA_andatti.jpg/320px-XC2V1522_FACHADA_OXXO_CERCA_andatti.jpg" }} style={styles.avatar} />
              <View>
                <Text style={styles.name}>{shipper.name}</Text>
                <Text style={styles.name}>{shipper.companyID}</Text>
                <Text style={styles.email}>Phone: {shipper.phone}</Text>
                <HStack space={2} mt={2}>
                  <Button backgroundColor={colors.primary} onPress={() => {navigation.navigate('EditShipper',{shipperID: shipper.id})}}>
                    Editar
                  </Button>
                  <Button backgroundColor={colors.danger} 
                    onPress={() => {
                      console.log(shipper.id);
                      setEliminate(shipper.id);
                      eliminar();
                    }}>
                    Eliminar
                  </Button> 
                </HStack>
              </View>
            </View>
          ))}
        </View>
          </ScrollView>

        </Container>
      </Center>;
  }