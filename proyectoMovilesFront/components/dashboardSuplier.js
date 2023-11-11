import React, { useEffect, useState } from 'react';
import { Center, Container, Image, Heading, HStack, Button, View, Text, Divider, Flex } from 'native-base';
import colors from './colors';
import axios from "axios";
import { TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';

export default function Suplier({navigation}) {

  const [listSuplier, setListSuplier] = useState([]);
  const [eliminate, setEliminate] = useState([]);

  const [idSp, setIdSp] = useState([]);

  useEffect(() => {
    getSuplier()
  }, [])

  const getSuplier = async () => {
    const res = await axios.get("http://192.168.0.109:8000/api/proveedor_index")
    console.log(res.data);
    setListSuplier(res.data);
  };

  const eliminar=async(e)=>{
    if (e && e.preventDefault()) e.preventDefault();
    console.log(eliminate);
    const formDatum = new FormData();
        formDatum.append("id", eliminate);
        const res = await axios.post("http://192.168.1.72:8000/api/delete_proveedor", formDatum,
        {
            headers: {
                'Content-Type': 'multipart/form-data',
                'Accept': 'application/json'
            }
        }
    ).then(response => {

        getSuplier();
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
      alignItems: 'center',
      paddingVertical: 10,
      borderBottomWidth: 2,
      width: 350,
      borderBottomColor: '#ffb703',
    },
    sep: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingVertical: 2,
      borderBottomWidth: 2,
      width: 260,
      paddingVertical: 10,
      borderBottomColor: '#023047',
    },
    avatar: {
      width: 40,
      height: 40,
      borderRadius: 20,
      marginRight: 10,
    },
    container: {
      backgroundColor: '#0098FF',
      width: 50,
      height: 50,
      borderRadius: 20,
      marginRight: 25,
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    imagen: {
      width: 40, // O el valor deseado para el ancho de la imagen
      height: 40, // O el valor deseado para la altura de la imagen
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
            <Text color={colors.warning}>  Proveedores</Text>
          </Heading>
        </HStack>
          
          <View style={styles.sep}></View>

          <HStack space={2} mt={2}>
            <View >
              <Button style={styles.button} onPress={() => navigation.navigate('CreateSupliers')}>
                Crear Proveedor
              </Button>
            </View>
            <Button style={styles.button1} onPress={() => getSuplier()}>
              <Image
              source={require('./rotate-right.png')} style={styles.imagenbtn} alt='hola' // Ruta relativa de la imagen dentro de la carpeta de assets
              />
            </Button>
          </HStack>
          
          <ScrollView>
          <View>
          {listSuplier.map((suplier) => (
            <View key={suplier.id} style={styles.listItem}>
              <Image alt='usuario' source={{ uri:"https://montevideo.gub.uy/sites/default/files/biblioteca/proveedores.png" }} style={styles.avatar} />
              <View>
                <Text style={styles.name}>{suplier.contactName}</Text>
                <Text style={styles.email}>Company ID: {suplier.companyID}</Text>
                <Text style={styles.email}>{suplier.address}</Text>
                <Text style={styles.email}>{suplier.city}</Text>
                <Text style={styles.email}>{suplier.country}</Text>
                <Text style={styles.email}>{suplier.phone}</Text>
                <HStack space={2} mt={2}>
                  <Button style={styles.email} onPress={() => {navigation.navigate('EditSuplier',{suplierID: suplier.id})}}>
                    Editar
                  </Button>
                  <Button backgroundColor={colors.danger} 
                    onPress={() => {
                      console.log(suplier.id);
                      setEliminate(suplier.id);
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